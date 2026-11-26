# Backend Knowledge Base

Довідник для Kotlin+Spring розробника, що читає TypeScript/Fastify код.
Стек: **Fastify** (HTTP-фреймворк) · **Prisma** (ORM) · **Zod** (валідація) · **TypeScript**

---

## Зміст

1. [Відповідності Spring ↔ Fastify](#1-відповідності-spring--fastify)
2. [Архітектура шарів](#2-архітектура-шарів)
3. [Маршрутизація — як routes прив'язуються до шляхів](#3-маршрутизація--як-routes-привязуються-до-шляхів)
4. [Валідація запитів через Zod](#4-валідація-запитів-через-zod)
5. [Dependency Injection — ручне підключення залежностей](#5-dependency-injection--ручне-підключення-залежностей)
6. [Плагіни Fastify — аналог Spring @Bean / @Component](#6-плагіни-fastify--аналог-spring-bean--component)
7. [Обробка помилок](#7-обробка-помилок)
8. [Prisma ORM — аналог JPA/Hibernate](#8-prisma-orm--аналог-jpahiberernate)
9. [Конфігурація середовища (env)](#9-конфігурація-середовища-env)
10. [Пагінація](#10-пагінація)
11. [Метрики та трасування](#11-метрики-та-трасування)
12. [Запуск та структура проєкту](#12-запуск-та-структура-проєкту)

---

## 1. Відповідності Spring ↔ Fastify

| Spring / Kotlin                        | Fastify / TypeScript                    | Файл у проєкті                        |
|----------------------------------------|-----------------------------------------|---------------------------------------|
| `@SpringBootApplication` + `main()`    | `buildServer()` + `start()`             | `src/server.ts`                       |
| `@RestController` + `@RequestMapping`  | `FastifyPluginAsync` + `app.get(...)`   | `src/routes/*.ts`                     |
| `@Service`                             | `*Service` class                        | `src/services/*.ts`                   |
| `@Repository` / `JpaRepository`        | `*Repository` class                     | `src/repositories/*.ts`               |
| `@Autowired` / конструктор-ін'єкція    | `new Repository(prisma)` вручну         | `src/routes/*.ts` (точка збірки)      |
| `@Configuration` + `@Bean`             | `fastify-plugin` + `fp(...)`            | `src/plugins/*.ts`                    |
| `@ExceptionHandler` / `@ControllerAdvice` | `app.setErrorHandler(...)`           | `src/server.ts`                       |
| `@Valid` + Bean Validation             | `schema: { querystring: z.object(...) }`| `src/routes/*.ts`                     |
| `application.properties` / `@Value`   | `z.object(...)` на `process.env`        | `src/config/env.ts`                   |
| `JPA Entity` / `@Entity`              | `model` у `schema.prisma`               | `prisma/schema.prisma`                |
| Micrometer / Prometheus                | `fastify-metrics` plugin                | `src/plugins/metrics.ts`              |
| Spring Sleuth / OpenTelemetry          | `@opentelemetry/sdk-node`               | `src/plugins/otel.ts`                 |

---

## 2. Архітектура шарів

```
routes/           ← прив'язка URL до HTTP-методів + валідація вхідних даних
  └── controllers/  ← координація: приймає вхід від route, делегує до service
        └── services/ ← бізнес-логіка, кидає AppError при порушеннях
              └── repositories/ ← запити до БД через Prisma
```

Це класична N-tier архітектура — точно така сама, як у Spring Boot проєктах.
Відмінність: немає IoC-контейнера — залежності конструюються вручну в `routes/`.

---

## 3. Маршрутизація — як routes прив'язуються до шляхів

### Spring-підхід (для порівняння)

```kotlin
@RestController
@RequestMapping("/api/products")
class ProductsController {
    @GetMapping
    fun list(...): ResponseEntity<...> { ... }

    @GetMapping("/{id}")
    fun getById(@PathVariable id: UUID): ResponseEntity<...> { ... }
}
```

### Fastify-підхід

**Крок 1 — Визначення plugin-функції для групи маршрутів** (`src/routes/products.ts`):

```typescript
// FastifyPluginAsync — це тип "функції-плагіну",
// яка отримує Fastify-інстанс і реєструє в ньому маршрути
export const productsRoutes: FastifyPluginAsync = async (fastify) => {

  // .withTypeProvider<ZodTypeProvider>() — підключає Zod як провайдер типів,
  // щоб TypeScript знав типи request.query / request.params з Zod-схеми
  const app = fastify.withTypeProvider<ZodTypeProvider>()

  // Реєстрація GET /products
  app.get('/products', { schema: { ... } }, async (request, reply) => {
    reply.send(await controller.list(...))
  })

  // Реєстрація GET /products/:id
  // :id — path-параметр (аналог @PathVariable в Spring)
  app.get('/products/:id', { schema: { ... } }, async (request, reply) => {
    reply.send(await controller.getById(request.params.id))
  })
}
```

**Крок 2 — Реєстрація плагіну з префіксом** (`src/server.ts`):

```typescript
// { prefix: '/api' } додає /api до всіх маршрутів плагіну
await app.register(productsRoutes, { prefix: '/api' })
```

**Результуючі URL:**

| Метод | Шлях                                      | Файл routes          |
|-------|-------------------------------------------|----------------------|
| GET   | `/api/product-types`                      | `productTypes.ts`    |
| GET   | `/api/categories`                         | `categories.ts`      |
| GET   | `/api/categories/:id`                     | `categories.ts`      |
| GET   | `/api/categories/:id/parameters/:key/values` | `categories.ts`   |
| GET   | `/api/products`                           | `products.ts`        |
| GET   | `/api/products/:id`                       | `products.ts`        |
| GET   | `/health`                                 | `server.ts` (inline) |
| GET   | `/metrics`                                | `plugins/metrics.ts` |

**Доступ до параметрів у handler:**

```typescript
// Path параметр (:id)  →  request.params.id
// Query параметр (?page=2)  →  request.query.page
// Request body (POST)  →  request.body
// Response  →  reply.send(data)  або  reply.status(404).send({error: '...'})
```

---

## 4. Валідація запитів через Zod

**Zod** — це аналог Bean Validation (`@NotNull`, `@Min`, `@Pattern` тощо), але описаний у коді як схема.

### Spring-підхід (для порівняння)

```kotlin
data class ProductQuery(
    val productTypeId: UUID?,
    val page: @Min(1) Int = 1,
    val limit: @Min(1) @Max(100) Int = 20,
    val sortBy: SortBy? = null
)
```

### Zod-підхід

```typescript
schema: {
  querystring: z.object({
    productTypeId: z.string().uuid().optional(), // UUID або відсутній
    page: z.coerce.number().int().min(1).default(1), // coerce = конвертує рядок "2" → число 2
    limit: z.coerce.number().int().min(1).max(100).default(20),
    sortBy: z.enum(['price', 'name', 'createdAt']).optional(),
    sortDir: z.enum(['asc', 'desc']).optional(),
    params: z.record(z.string()).optional(), // Record<string, string>
  }),
}
```

- `z.coerce.number()` — HTTP query-параметри завжди рядки, `coerce` конвертує автоматично (аналог `@RequestParam` з type conversion).
- `.optional()` — поле не обов'язкове.
- `.default(1)` — дефолтне значення якщо поле відсутнє.
- Якщо валідація не пройшла — Fastify автоматично повертає `400 Bad Request` (через `setValidatorCompiler`).

**Path-параметри також валідуються:**

```typescript
schema: {
  params: z.object({ id: z.string().uuid() })
}
// GET /api/products/not-a-uuid → автоматично 400
```

---

## 5. Dependency Injection — ручне підключення залежностей

У Spring IoC-контейнер сам знаходить і підключає залежності. У Fastify цього немає — залежності конструюються вручну в route-файлі:

```typescript
// src/routes/products.ts
export const productsRoutes: FastifyPluginAsync = async (fastify) => {
  // 1. Дістаємо prisma з Fastify-інстансу (він туди покладений плагіном prisma.ts)
  const repo = new ProductsRepository(fastify.prisma)

  // 2. Вручну будуємо ланцюжок залежностей
  const service = new ProductsService(repo, fastify.log)
  const controller = new ProductsController(service)

  // 3. Реєструємо маршрути
  app.get('/products', ..., async (req, reply) => {
    reply.send(await controller.list(req.query))
  })
}
```

Це еквівалентно такому тесту Spring:

```kotlin
val repo = ProductsRepository(dataSource)
val service = ProductsService(repo, logger)
val controller = ProductsController(service)
```

**Чому `fastify.prisma` доступне?** Тому що плагін `prisma.ts` викликає `fastify.decorate('prisma', prisma)` — це додає властивість до Fastify-інстансу. Докладніше — розділ 6.

---

## 6. Плагіни Fastify — аналог Spring @Bean / @Component

Fastify-плагін = функція, яка розширює інстанс (декорує, реєструє хуки тощо).

### Prisma-плагін (`src/plugins/prisma.ts`)

```typescript
import fp from 'fastify-plugin'

// Розширюємо TypeScript-тип FastifyInstance, щоб .prisma було відоме компілятору
declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaClient
  }
}

const prismaPlugin: FastifyPluginAsync = async (fastify) => {
  const prisma = new PrismaClient({ ... })
  await prisma.$connect()

  // fastify.decorate() — додає властивість до інстансу
  // Аналог @Bean: "тепер fastify.prisma доступне всюди"
  fastify.decorate('prisma', prisma)

  // addHook('onClose') — виконується при зупинці сервера
  // Аналог @PreDestroy або DisposableBean
  fastify.addHook('onClose', async () => {
    await prisma.$disconnect()
  })
}

// fp() (fastify-plugin) — ключовий виклик!
// Без fp() плагін ізольований у своєму scope (encapsulated).
// З fp() — декорації та хуки доступні в батьківському та дочірніх scope.
// Аналог: @Component без fp = package-private bean; з fp = @Bean у @Configuration.
export default fp(prismaPlugin, { name: 'prisma' })
```

### Metrics-плагін (`src/plugins/metrics.ts`)

```typescript
export default fp(metricsPlugin, {
  name: 'metrics',
  dependencies: ['prisma'], // Fastify перевірить що 'prisma' вже зареєстровано
  // Аналог @DependsOn("prismaBean") у Spring
})
```

### Реєстрація плагінів у `server.ts`

```typescript
// Порядок важливий: prisma до metrics (бо metrics залежить від prisma)
await app.register(prismaPlugin)
await app.register(metricsPlugin)

// Routes-плагіни реєструються після, бо вони споживають fastify.prisma
await app.register(productsRoutes, { prefix: '/api' })
```

---

## 7. Обробка помилок

### AppError — доменна помилка (`src/errors/AppError.ts`)

```typescript
export class AppError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number = 400, // дефолт 400
  ) {
    super(message)
    this.name = 'AppError'
  }
}
```

Аналог Spring: `ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found")`

**Використання в сервісі:**

```typescript
// src/services/products.service.ts
async findById(id: string) {
  const product = await this.repo.findById(id)
  if (!product) throw new AppError('Product not found', 404)
  return product
}
```

### Глобальний error handler (`src/server.ts`)

```typescript
// Аналог @ControllerAdvice + @ExceptionHandler у Spring
app.setErrorHandler((error, request, reply) => {
  if (error instanceof AppError) {
    // Відомі доменні помилки → повертаємо statusCode з AppError
    return reply.status(error.statusCode).send({ error: error.message })
  }
  if (error.validation) {
    // Zod/Fastify validation error → 400
    return reply.status(400).send({ error: 'Validation error', details: error.validation })
  }
  // Всі інші → 500
  app.log.error({ err: error, reqId: request.id }, 'Unexpected error')
  return reply.status(500).send({ error: 'Internal server error' })
})
```

---

## 8. Prisma ORM — аналог JPA/Hibernate

### Схема (`prisma/schema.prisma`)

Prisma-схема = JPA Entity + Liquibase/Flyway міграції в одному файлі.

```prisma
model Product {
  id            String   @id @default(uuid())   // @GeneratedValue UUID
  name          String                          // @Column NOT NULL
  slug          String   @unique                // @Column(unique=true)
  price         Decimal  @db.Decimal(10, 2)     // BigDecimal з точністю
  isActive      Boolean  @default(true)         // @ColumnDefault
  createdAt     DateTime @default(now())        // @CreationTimestamp
  updatedAt     DateTime @updatedAt             // @UpdateTimestamp

  // Зв'язки (аналог @ManyToOne / @OneToMany)
  category    Category           @relation(fields: [categoryId], references: [id])
  parameters  ProductParameter[]
}
```

### Запити в Repository

**Spring JPA → Prisma:**

```typescript
// findAll()  →  prisma.product.findMany()
// findById() →  prisma.product.findUnique({ where: { id } })
// count()    →  prisma.product.count()

// WHERE умови:
where.name = { contains: search, mode: 'insensitive' } // LIKE '%search%' (case-insensitive)
where.isActive = true

// Складний AND з підзапитом (фільтрація за параметрами продукту):
where.AND = Object.entries(params).map(([key, value]) => ({
  parameters: {
    some: { categoryParameter: { key }, value }
    // some = EXISTS (SELECT 1 FROM product_parameter WHERE ...)
  }
}))

// ORDER BY:
orderBy: { [sortBy]: sortDir }  // динамічне поле

// OFFSET / LIMIT (пагінація):
skip: (page - 1) * limit
take: limit
```

**Транзакція:**

```typescript
// Аналог @Transactional або EntityManager.createQuery + count
const [total, data] = await this.prisma.$transaction([
  this.prisma.product.count({ where }),
  this.prisma.product.findMany({ where, orderBy, skip, take }),
])
// Обидва запити виконуються в одній транзакції
```

**Include (JOIN / @ManyToOne eager fetch):**

```typescript
this.prisma.product.findUnique({
  where: { id },
  include: {
    parameters: {
      include: {
        // Вкладений include = JOIN через JOIN
        categoryParameter: { select: { key: true, name: true, unit: true } }
        // select = вибрати тільки ці поля (аналог Projections у Spring Data)
      }
    }
  }
})
```

---

## 9. Конфігурація середовища (env)

**Spring:** `application.yml` + `@ConfigurationProperties` або `@Value`

**Fastify:** `.env` файл + Zod-валідація `process.env` при старті.

```typescript
// src/config/env.ts
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(4000), // рядок → число
  DATABASE_URL: z.string().min(1, 'DATABASE_URL is required'), // обов'язково
  OTEL_EXPORTER_OTLP_ENDPOINT: z.string().optional(), // необов'язково
})

const result = envSchema.safeParse(process.env)
if (!result.success) {
  console.error(result.error.flatten().fieldErrors)
  process.exit(1) // fail-fast: аналог @Validated що кидає виняток при старті
}

export const env = result.data // типізований об'єкт
```

**Використання:**

```typescript
import { env } from './config/env'
env.PORT // number, не string
env.DATABASE_URL // string, гарантовано не undefined
```

---

## 10. Пагінація

**Утиліта** (`src/utils/pagination.ts`):

```typescript
// Обчислення OFFSET для SQL
getSkipTake({ page: 2, limit: 20 }) // → { skip: 20, take: 20 }

// Метаінформація для відповіді
getPaginationMeta({ page: 2, limit: 20, total: 95 })
// → { total: 95, page: 2, limit: 20, totalPages: 5 }
```

**Відповідь `/api/products`:**

```json
{
  "data": [ ... ],
  "meta": {
    "total": 95,
    "page": 2,
    "limit": 20,
    "totalPages": 5
  }
}
```

---

## 11. Метрики та трасування

### Prometheus-метрики (`src/plugins/metrics.ts`)

```typescript
// Автоматично реєструє /metrics ендпоінт (scrape-ціль для Prometheus)
await fastify.register(fastifyMetrics, { endpoint: '/metrics' })

// Кастомна метрика типу Gauge (аналог MeterRegistry у Micrometer)
new fastify.metrics.client.Gauge({
  name: 'pcshop_active_products_total',
  help: 'Total number of active products in the database',
  async collect() {
    // collect() викликається при кожному /metrics запиті
    const count = await fastify.prisma.product.count({ where: { isActive: true } })
    this.set(count)
  },
})
```

### OpenTelemetry трасування (`src/plugins/otel.ts`)

```typescript
// Ініціалізується до старту сервера (в server.ts):
if (env.NODE_ENV !== 'test' && env.OTEL_EXPORTER_OTLP_ENDPOINT) {
  initOtel(env.OTEL_EXPORTER_OTLP_ENDPOINT)
}

// Автоінструментування: автоматично трасує HTTP, DB, тощо
getNodeAutoInstrumentations({
  '@opentelemetry/instrumentation-fs': { enabled: false }, // відключаємо шумний модуль
})

// SIGTERM handler — graceful shutdown з flush трасів
process.on('SIGTERM', () => sdk?.shutdown().finally(() => process.exit(0)))
```

---

## 12. Запуск та структура проєкту

### Команди

```bash
npm run dev          # tsx watch src/server.ts — hot-reload (аналог Spring DevTools)
npm run build        # tsc — компіляція TypeScript → JavaScript
npm run start        # node dist/server.js — запуск продакшн-білду
npm run db:seed      # наповнення БД тестовими даними
npm test             # vitest run — запуск тестів
```

### Структура директорій

```
backend/
├── prisma/
│   ├── schema.prisma          # Опис моделей БД + міграцій
│   └── seed.ts                # Seed-скрипт для тестових даних
├── src/
│   ├── server.ts              # Точка входу: buildServer() + start()
│   ├── config/
│   │   └── env.ts             # Zod-валідація змінних середовища
│   ├── plugins/
│   │   ├── prisma.ts          # Підключення Prisma до Fastify
│   │   ├── metrics.ts         # Prometheus метрики
│   │   └── otel.ts            # OpenTelemetry трасування
│   ├── routes/                # Прив'язка URL → handlers + Zod-схеми
│   ├── controllers/           # Координатори: router → service
│   ├── services/              # Бізнес-логіка
│   ├── repositories/          # Запити до БД (Prisma)
│   ├── errors/
│   │   └── AppError.ts        # Доменна помилка з HTTP-статусом
│   └── utils/
│       └── pagination.ts      # Offset/limit + meta розрахунки
└── package.json
```

### Порядок завантаження компонентів у `server.ts`

```
1. OTel (якщо увімкнено)       ← до Fastify
2. Fastify app = Fastify({...})
3. setValidatorCompiler(Zod)   ← глобальна валідація
4. setSerializerCompiler(Zod)  ← глобальна серіалізація
5. setErrorHandler(...)        ← глобальна обробка помилок
6. register(cors)
7. register(prismaPlugin)      ← додає fastify.prisma
8. register(metricsPlugin)     ← залежить від prisma
9. register(productsRoutes)    ← споживають fastify.prisma
10. get('/health', ...)        ← inline-маршрут без плагіну
```