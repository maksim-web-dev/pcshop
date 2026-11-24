NAME: pcshop


DESCRIPTION:
    PET-project — інтернет-магазин комп'ютерної техніки (ПК, ноутбуки, монітори, периферія).
    Мета — продемонструвати навички full-stack розробки та роботу з Claude Code (вайбкодинг).

    Стек: React + TypeScript на фронтенді, Node.js + Fastify на бекенді, PostgreSQL як БД.
    Фронтенд покриває сучасні інструменти тестування, включаючи screenshot-тести (Playwright).
    Проект включає observability: структуровані логи, трейсинг, метрики (Prometheus + Grafana).
    Також демонструє якість фронтенду та вміння створювати гарний UI.
    
    
STACK:

  FRONTEND:
    - React 18
    - TypeScript
    - Vite (build tool)
    - React Router v6 (routing)
    - TailwindCSS (styling)
    - Zustand (state management)
    - TanStack Query / React Query (server state & data fetching)
    - Axios (HTTP client)

  TESTING (Frontend):
    - Vitest + React Testing Library (unit/integration tests)
    - Playwright (e2e + screenshot/visual regression tests)

  BACKEND:
    - Node.js
    - TypeScript
    - Fastify (REST API framework)
    - Prisma (ORM)

  DATABASE:
    - PostgreSQL

  OBSERVABILITY & LOGGING:
    - Pino (structured logging)
    - OpenTelemetry (tracing)
    - Prometheus + Grafana (metrics & dashboards)

  INFRASTRUCTURE:
    - Docker + Docker Compose


STRUCTURE:
  Monorepo style: Simple flat (all services at root level, coordinated via docker-compose)

  pcshop/
  ├── frontend/                        # React + Vite + TypeScript
  │   ├── src/
  │   │   ├── assets/                  # зображення, шрифти, іконки
  │   │   ├── components/              # переиспользувані UI-компоненти
  │   │   │   └── ui/                  # базові: Button, Input, Card...
  │   │   ├── pages/                   # сторінки (роути)
  │   │   ├── hooks/                   # кастомні React-хуки
  │   │   ├── services/                # API-клієнти (axios)
  │   │   ├── store/                   # Zustand stores
  │   │   ├── types/                   # локальні TS-типи (+ імпорт з shared/)
  │   │   ├── utils/                   # допоміжні функції
  │   │   ├── App.tsx
  │   │   └── main.tsx
  │   ├── tests/
  │   │   ├── unit/                    # Vitest + React Testing Library
  │   │   └── e2e/                     # Playwright (screenshot tests)
  │   ├── public/
  │   ├── index.html
  │   ├── vite.config.ts
  │   ├── tsconfig.json
  │   ├── tailwind.config.ts
  │   ├── playwright.config.ts
  │   ├── Dockerfile
  │   └── package.json
  │
  ├── backend/                         # Fastify + Prisma + TypeScript
  │   ├── src/
  │   │   ├── routes/                  # Fastify route handlers
  │   │   ├── controllers/             # бізнес-логіка запитів
  │   │   ├── services/                # сервісний шар (БД, зовнішні API)
  │   │   ├── plugins/                 # Fastify plugins (auth, cors, otel...)
  │   │   ├── types/                   # локальні TS-типи (+ імпорт з shared/)
  │   │   ├── utils/
  │   │   └── server.ts                # точка входу
  │   ├── prisma/
  │   │   ├── schema.prisma            # схема БД
  │   │   └── migrations/
  │   ├── tests/
  │   ├── Dockerfile
  │   ├── tsconfig.json
  │   └── package.json
  │
  ├── shared/                          # спільні TS-типи (frontend ↔ backend)
  │   ├── types/
  │   │   ├── product.ts
  │   │   ├── order.ts
  │   │   └── user.ts
  │   └── package.json
  │
  ├── observability/                   # конфіги моніторингу
  │   ├── prometheus/
  │   │   └── prometheus.yml
  │   └── grafana/
  │       ├── provisioning/
  │       │   ├── datasources/
  │       │   └── dashboards/
  │       └── dashboards/
  │
  ├── docker/                          # Dockerfiles (або лежать у сервісах)
  │   ├── frontend.Dockerfile          # якщо не тримати у frontend/
  │   └── backend.Dockerfile
  │
  ├── structure/                       # документація проекту
  │   └── project.md
  │
  ├── docker-compose.yaml              # prod/staging: всі сервіси
  ├── docker-compose.dev.yaml          # dev: hot-reload + volume mounts
  ├── .env.example                     # шаблон змінних оточення
  ├── Makefile                         # зручні команди (make dev, make build...)
  └── README.md

  DOCKER-COMPOSE SERVICES:
    - frontend      (port 3000)
    - backend       (port 4000)
    - postgres      (port 5432)
    - prometheus    (port 9090)
    - grafana       (port 3001)


ENTITY:

  ProductType                          # тип товару (верхній рівень)
    id          uuid  PK
    name        string                 # "PC", "Laptop", "Monitor", "Keyboard", "Mouse"
    slug        string  unique         # "pc", "laptop", "monitor"
    createdAt   timestamp

  Category                             # підкатегорія в рамках типу
    id          uuid  PK
    name        string                 # "Gaming Laptop", "Ultrabook", "Office PC"
    slug        string  unique
    productTypeId  uuid  FK → ProductType
    createdAt   timestamp

  CategoryParameter                    # параметри категорії (max 5 на категорію)
    id          uuid  PK
    categoryId  uuid  FK → Category
    name        string                 # "RAM", "CPU", "Screen Size", "Refresh Rate"
    key         string                 # "ram", "cpu", "screen_size" (для фільтрації)
    unit        string?                # "GB", "Hz", "inch", "" 
    type        enum                   # STRING | NUMBER | BOOLEAN | ENUM
    options     string[]?              # для type=ENUM: ("Intel", "AMD")
    sortOrder   int                    # порядок відображення (0..4)

  Product                              # товар
    id          uuid  PK
    name        string
    slug        string  unique
    description text?
    price       decimal(10,2)
    stock       int                    # кількість на складі
    imageUrls   string[]
    productTypeId  uuid  FK → ProductType
    categoryId     uuid  FK → Category
    isActive    boolean  default true
    createdAt   timestamp
    updatedAt   timestamp

  ProductParameter                     # значення параметру для конкретного товару
    id                  uuid  PK
    productId           uuid  FK → Product
    categoryParameterId uuid  FK → CategoryParameter
    value               string         # зберігається як string, cast за type


CONTRACT:

  # ProductType
  GET  /api/product-types
       → ProductType[]

  # Category
  GET  /api/categories
       ?productTypeId=<uuid>           # фільтр за типом товару (обов'язковий або опційний)
       → Category[]

  GET  /api/categories/:id
       → Category & { parameters: CategoryParameter[] }

  # Product — список з фільтрацією, пошуком, сортуванням, пагінацією
  GET  /api/products
       ?productTypeId=<uuid>           # фільтр за типом
       ?categoryId=<uuid>              # фільтр за категорією
       ?search=<string>                # пошук по name (ILIKE)
       ?params.ram=16                  # фільтр по параметрах (key=value)
       ?params.cpu=Intel
       ?sortBy=price|name|createdAt    # поле сортування
       ?sortDir=asc|desc               # напрямок (default: asc)
       ?page=1                         # пагінація (default: 1)
       ?limit=20                       # розмір сторінки (default: 20, max: 100)
       → {
           data:  Product[],
           meta: { total, page, limit, totalPages }
         }

  GET  /api/products/:id
       → Product & { parameters: { key, name, unit, value }[] }

  # Допоміжний — унікальні значення параметру для фасетного фільтру
  GET  /api/categories/:id/parameters/:key/values
       → string[]                      # напр. ("8", "16", "32") для ram