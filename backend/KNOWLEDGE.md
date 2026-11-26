# Backend Knowledge Base

Reference guide for Kotlin+Spring developers reading TypeScript/Fastify code.
Stack: **Fastify** (HTTP framework) · **Prisma** (ORM) · **Zod** (validation) · **TypeScript**

---

## Table of Contents

1. [Spring ↔ Fastify Mapping](#1-spring--fastify-mapping)
2. [Layer Architecture](#2-layer-architecture)
3. [Routing — how routes bind to URL paths](#3-routing--how-routes-bind-to-url-paths)
4. [Request Validation with Zod](#4-request-validation-with-zod)
5. [Dependency Injection — manual wiring](#5-dependency-injection--manual-wiring)
6. [Fastify Plugins — equivalent of Spring @Bean / @Component](#6-fastify-plugins--equivalent-of-spring-bean--component)
7. [Error Handling](#7-error-handling)
8. [Prisma ORM — equivalent of JPA/Hibernate](#8-prisma-orm--equivalent-of-jpahiberernate)
9. [Environment Configuration](#9-environment-configuration)
10. [Pagination](#10-pagination)
11. [Metrics and Tracing](#11-metrics-and-tracing)
12. [Project Structure and Startup](#12-project-structure-and-startup)

---

## 1. Spring ↔ Fastify Mapping

| Spring / Kotlin                           | Fastify / TypeScript                    | File in project                       |
|-------------------------------------------|-----------------------------------------|---------------------------------------|
| `@SpringBootApplication` + `main()`       | `buildServer()` + `start()`             | `src/server.ts`                       |
| `@RestController` + `@RequestMapping`     | `FastifyPluginAsync` + `app.get(...)`   | `src/routes/*.ts`                     |
| `@Service`                                | `*Service` class                        | `src/services/*.ts`                   |
| `@Repository` / `JpaRepository`           | `*Repository` class                     | `src/repositories/*.ts`               |
| `@Autowired` / constructor injection      | `new Repository(prisma)` manually       | `src/routes/*.ts` (composition root)  |
| `@Configuration` + `@Bean`                | `fastify-plugin` + `fp(...)`            | `src/plugins/*.ts`                    |
| `@ExceptionHandler` / `@ControllerAdvice` | `app.setErrorHandler(...)`              | `src/server.ts`                       |
| `@Valid` + Bean Validation                | `schema: { querystring: z.object(...) }`| `src/routes/*.ts`                     |
| `application.properties` / `@Value`       | `z.object(...)` over `process.env`      | `src/config/env.ts`                   |
| `@Entity` / JPA Entity                    | `model` in `schema.prisma`              | `prisma/schema.prisma`                |
| Micrometer / Prometheus                   | `fastify-metrics` plugin                | `src/plugins/metrics.ts`              |
| Spring Sleuth / OpenTelemetry             | `@opentelemetry/sdk-node`               | `src/plugins/otel.ts`                 |

---

## 2. Layer Architecture

```
routes/           ← URL-to-method binding + input validation schemas
  └── controllers/  ← coordination: receives parsed input, delegates to service
        └── services/ ← business logic, throws AppError on violations
              └── repositories/ ← database queries via Prisma
```

This is the same N-tier architecture used in Spring Boot projects.
The only difference: there is no IoC container — dependencies are constructed manually inside `routes/`.

---

## 3. Routing — how routes bind to URL paths

### Spring approach (for comparison)

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

### Fastify approach

**Step 1 — Define a plugin function for a route group** (`src/routes/products.ts`):

```typescript
// FastifyPluginAsync is the type for a "plugin function"
// that receives a Fastify instance and registers routes on it
export const productsRoutes: FastifyPluginAsync = async (fastify) => {

  // .withTypeProvider<ZodTypeProvider>() connects Zod as the type provider
  // so TypeScript knows the types of request.query / request.params from Zod schemas
  const app = fastify.withTypeProvider<ZodTypeProvider>()

  // Register GET /products
  app.get('/products', { schema: { ... } }, async (request, reply) => {
    reply.send(await controller.list(...))
  })

  // Register GET /products/:id
  // :id — path parameter (equivalent to @PathVariable in Spring)
  app.get('/products/:id', { schema: { ... } }, async (request, reply) => {
    reply.send(await controller.getById(request.params.id))
  })
}
```

**Step 2 — Register the plugin with a prefix** (`src/server.ts`):

```typescript
// { prefix: '/api' } prepends /api to every route in the plugin
await app.register(productsRoutes, { prefix: '/api' })
```

**Resulting URLs:**

| Method | Path                                         | Routes file          |
|--------|----------------------------------------------|----------------------|
| GET    | `/api/product-types`                         | `productTypes.ts`    |
| GET    | `/api/categories`                            | `categories.ts`      |
| GET    | `/api/categories/:id`                        | `categories.ts`      |
| GET    | `/api/categories/:id/parameters/:key/values` | `categories.ts`      |
| GET    | `/api/products`                              | `products.ts`        |
| GET    | `/api/products/:id`                          | `products.ts`        |
| GET    | `/health`                                    | `server.ts` (inline) |
| GET    | `/metrics`                                   | `plugins/metrics.ts` |

**Accessing parameters in a handler:**

```typescript
// Path parameter (:id)        →  request.params.id
// Query parameter (?page=2)   →  request.query.page
// Request body (POST)         →  request.body
// Send response               →  reply.send(data)
// Send with status            →  reply.status(404).send({ error: '...' })
```

---

## 4. Request Validation with Zod

**Zod** is the equivalent of Bean Validation (`@NotNull`, `@Min`, `@Pattern`, etc.), but defined in code as a schema object.

### Spring approach (for comparison)

```kotlin
data class ProductQuery(
    val productTypeId: UUID?,
    val page: @Min(1) Int = 1,
    val limit: @Min(1) @Max(100) Int = 20,
    val sortBy: SortBy? = null
)
```

### Zod approach

```typescript
schema: {
  querystring: z.object({
    productTypeId: z.string().uuid().optional(), // UUID or absent
    page: z.coerce.number().int().min(1).default(1), // coerce converts string "2" → number 2
    limit: z.coerce.number().int().min(1).max(100).default(20),
    sortBy: z.enum(['price', 'name', 'createdAt']).optional(),
    sortDir: z.enum(['asc', 'desc']).optional(),
    params: z.record(z.string()).optional(), // Record<string, string>
  }),
}
```

- `z.coerce.number()` — HTTP query parameters are always strings; `coerce` converts automatically (like Spring's `@RequestParam` with type conversion).
- `.optional()` — field is not required.
- `.default(1)` — default value when the field is absent.
- If validation fails, Fastify automatically returns `400 Bad Request` (via `setValidatorCompiler`).

**Path parameters are also validated:**

```typescript
schema: {
  params: z.object({ id: z.string().uuid() })
}
// GET /api/products/not-a-uuid → automatic 400
```

---

## 5. Dependency Injection — manual wiring

In Spring, the IoC container automatically discovers and injects dependencies. Fastify has no such container — dependencies are constructed manually in the route file:

```typescript
// src/routes/products.ts
export const productsRoutes: FastifyPluginAsync = async (fastify) => {
  // 1. Get prisma from the Fastify instance (placed there by prisma.ts plugin)
  const repo = new ProductsRepository(fastify.prisma)

  // 2. Manually build the dependency chain
  const service = new ProductsService(repo, fastify.log)
  const controller = new ProductsController(service)

  // 3. Register routes
  app.get('/products', ..., async (req, reply) => {
    reply.send(await controller.list(req.query))
  })
}
```

This is equivalent to a Spring test setup:

```kotlin
val repo = ProductsRepository(dataSource)
val service = ProductsService(repo, logger)
val controller = ProductsController(service)
```

**Why is `fastify.prisma` available?** Because the `prisma.ts` plugin calls `fastify.decorate('prisma', prisma)` — this adds a property to the Fastify instance. See section 6 for details.

---

## 6. Fastify Plugins — equivalent of Spring @Bean / @Component

A Fastify plugin is a function that extends the instance (adds decorators, registers hooks, etc.).

### Prisma plugin (`src/plugins/prisma.ts`)

```typescript
import fp from 'fastify-plugin'

// Extend the TypeScript type of FastifyInstance so .prisma is known to the compiler
declare module 'fastify' {
  interface FastifyInstance {
    prisma: PrismaClient
  }
}

const prismaPlugin: FastifyPluginAsync = async (fastify) => {
  const prisma = new PrismaClient({ ... })
  await prisma.$connect()

  // fastify.decorate() — adds a property to the instance
  // Equivalent to @Bean: "fastify.prisma is now available everywhere"
  fastify.decorate('prisma', prisma)

  // addHook('onClose') — runs when the server shuts down
  // Equivalent to @PreDestroy or DisposableBean
  fastify.addHook('onClose', async () => {
    await prisma.$disconnect()
  })
}

// fp() (fastify-plugin) — this call is critical!
// Without fp(): the plugin is scoped (encapsulated) — decorators stay local.
// With fp(): decorators and hooks are visible in the parent and sibling scopes.
// Analogy: without fp() = package-private bean; with fp() = @Bean in @Configuration.
export default fp(prismaPlugin, { name: 'prisma' })
```

### Metrics plugin (`src/plugins/metrics.ts`)

```typescript
export default fp(metricsPlugin, {
  name: 'metrics',
  dependencies: ['prisma'], // Fastify checks that 'prisma' is already registered
  // Equivalent to @DependsOn("prismaBean") in Spring
})
```

### Plugin registration order in `server.ts`

```typescript
// Order matters: prisma before metrics (metrics depends on prisma)
await app.register(prismaPlugin)
await app.register(metricsPlugin)

// Route plugins register last because they consume fastify.prisma
await app.register(productsRoutes, { prefix: '/api' })
```

---

## 7. Error Handling

### AppError — domain error (`src/errors/AppError.ts`)

```typescript
export class AppError extends Error {
  constructor(
    message: string,
    public readonly statusCode: number = 400, // defaults to 400
  ) {
    super(message)
    this.name = 'AppError'
  }
}
```

Spring equivalent: `ResponseStatusException(HttpStatus.NOT_FOUND, "Product not found")`

**Usage in a service:**

```typescript
// src/services/products.service.ts
async findById(id: string) {
  const product = await this.repo.findById(id)
  if (!product) throw new AppError('Product not found', 404)
  return product
}
```

### Global error handler (`src/server.ts`)

```typescript
// Equivalent to @ControllerAdvice + @ExceptionHandler in Spring
app.setErrorHandler((error, request, reply) => {
  if (error instanceof AppError) {
    // Known domain errors → use statusCode from AppError
    return reply.status(error.statusCode).send({ error: error.message })
  }
  if (error.validation) {
    // Zod/Fastify validation error → 400
    return reply.status(400).send({ error: 'Validation error', details: error.validation })
  }
  // Everything else → 500
  app.log.error({ err: error, reqId: request.id }, 'Unexpected error')
  return reply.status(500).send({ error: 'Internal server error' })
})
```

---

## 8. Prisma ORM — equivalent of JPA/Hibernate

### Schema (`prisma/schema.prisma`)

The Prisma schema combines JPA entities and Liquibase/Flyway migrations in a single file.

```prisma
model Product {
  id            String   @id @default(uuid())   // @GeneratedValue UUID
  name          String                          // @Column NOT NULL
  slug          String   @unique                // @Column(unique = true)
  price         Decimal  @db.Decimal(10, 2)     // BigDecimal with precision
  isActive      Boolean  @default(true)         // @ColumnDefault
  createdAt     DateTime @default(now())        // @CreationTimestamp
  updatedAt     DateTime @updatedAt             // @UpdateTimestamp

  // Relations (equivalent to @ManyToOne / @OneToMany)
  category    Category           @relation(fields: [categoryId], references: [id])
  parameters  ProductParameter[]
}
```

### Queries in Repository

**Spring JPA → Prisma:**

```typescript
// findAll()  →  prisma.product.findMany()
// findById() →  prisma.product.findUnique({ where: { id } })
// count()    →  prisma.product.count()

// WHERE conditions:
where.name = { contains: search, mode: 'insensitive' } // LIKE '%search%' case-insensitive
where.isActive = true

// Complex AND with subquery (filter by product parameters):
where.AND = Object.entries(params).map(([key, value]) => ({
  parameters: {
    some: { categoryParameter: { key }, value }
    // some = EXISTS (SELECT 1 FROM product_parameter WHERE ...)
  }
}))

// ORDER BY with dynamic field:
orderBy: { [sortBy]: sortDir }

// OFFSET / LIMIT (pagination):
skip: (page - 1) * limit
take: limit
```

**Transaction:**

```typescript
// Equivalent to @Transactional or EntityManager + count query
const [total, data] = await this.prisma.$transaction([
  this.prisma.product.count({ where }),
  this.prisma.product.findMany({ where, orderBy, skip, take }),
])
// Both queries run in the same transaction
```

**Include (JOIN / @ManyToOne eager fetch):**

```typescript
this.prisma.product.findUnique({
  where: { id },
  include: {
    parameters: {
      include: {
        // Nested include = JOIN through JOIN
        categoryParameter: { select: { key: true, name: true, unit: true } }
        // select = fetch only these fields (equivalent to Spring Data Projections)
      }
    }
  }
})
```

---

## 9. Environment Configuration

**Spring:** `application.yml` + `@ConfigurationProperties` or `@Value`

**Fastify:** `.env` file + Zod validation of `process.env` at startup.

```typescript
// src/config/env.ts
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.coerce.number().default(4000),                      // string → number
  DATABASE_URL: z.string().min(1, 'DATABASE_URL is required'), // required
  OTEL_EXPORTER_OTLP_ENDPOINT: z.string().optional(),         // optional
})

const result = envSchema.safeParse(process.env)
if (!result.success) {
  console.error(result.error.flatten().fieldErrors)
  process.exit(1) // fail-fast: like @Validated throwing at startup
}

export const env = result.data // fully typed object
```

**Usage:**

```typescript
import { env } from './config/env'
env.PORT          // number, not string
env.DATABASE_URL  // string, guaranteed non-undefined
```

---

## 10. Pagination

**Utility** (`src/utils/pagination.ts`):

```typescript
// Calculate SQL OFFSET
getSkipTake({ page: 2, limit: 20 }) // → { skip: 20, take: 20 }

// Build response metadata
getPaginationMeta({ page: 2, limit: 20, total: 95 })
// → { total: 95, page: 2, limit: 20, totalPages: 5 }
```

**Response shape of `/api/products`:**

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

## 11. Metrics and Tracing

### Prometheus metrics (`src/plugins/metrics.ts`)

```typescript
// Automatically registers a /metrics endpoint (Prometheus scrape target)
await fastify.register(fastifyMetrics, { endpoint: '/metrics' })

// Custom Gauge metric (equivalent to MeterRegistry in Micrometer)
new fastify.metrics.client.Gauge({
  name: 'pcshop_active_products_total',
  help: 'Total number of active products in the database',
  async collect() {
    // collect() is called on every /metrics request
    const count = await fastify.prisma.product.count({ where: { isActive: true } })
    this.set(count)
  },
})
```

### OpenTelemetry tracing (`src/plugins/otel.ts`)

```typescript
// Initialized before the server starts (in server.ts):
if (env.NODE_ENV !== 'test' && env.OTEL_EXPORTER_OTLP_ENDPOINT) {
  initOtel(env.OTEL_EXPORTER_OTLP_ENDPOINT)
}

// Auto-instrumentation: automatically traces HTTP, DB, etc.
getNodeAutoInstrumentations({
  '@opentelemetry/instrumentation-fs': { enabled: false }, // disable noisy fs module
})

// SIGTERM handler — graceful shutdown with trace flush
process.on('SIGTERM', () => sdk?.shutdown().finally(() => process.exit(0)))
```

---

## 12. Project Structure and Startup

### Commands

```bash
npm run dev          # tsx watch src/server.ts — hot reload (like Spring DevTools)
npm run build        # tsc — compile TypeScript → JavaScript
npm run start        # node dist/server.js — run production build
npm run db:seed      # populate database with seed data
npm test             # vitest run — run test suite
```

### Directory structure

```
backend/
├── prisma/
│   ├── schema.prisma          # DB model definitions + migration source
│   └── seed.ts                # Seed script for test data
├── src/
│   ├── server.ts              # Entry point: buildServer() + start()
│   ├── config/
│   │   └── env.ts             # Zod validation of environment variables
│   ├── plugins/
│   │   ├── prisma.ts          # Connect Prisma to Fastify instance
│   │   ├── metrics.ts         # Prometheus metrics
│   │   └── otel.ts            # OpenTelemetry tracing
│   ├── routes/                # URL → handler binding + Zod schemas
│   ├── controllers/           # Coordinators: route → service
│   ├── services/              # Business logic
│   ├── repositories/          # DB queries (Prisma)
│   ├── errors/
│   │   └── AppError.ts        # Domain error carrying an HTTP status code
│   └── utils/
│       └── pagination.ts      # Offset/limit + response meta calculation
└── package.json
```

### Component loading order in `server.ts`

```
1. OTel (if enabled)            ← before Fastify instance
2. app = Fastify({...})
3. setValidatorCompiler(Zod)    ← global request validation
4. setSerializerCompiler(Zod)   ← global response serialization
5. setErrorHandler(...)         ← global error handling
6. register(cors)
7. register(prismaPlugin)       ← adds fastify.prisma
8. register(metricsPlugin)      ← depends on prisma
9. register(productsRoutes)     ← consumes fastify.prisma
10. get('/health', ...)         ← inline route, no plugin needed
```