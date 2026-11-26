# PCShop — Backend Plan

← [plan.md](plan.md)


## Architecture: Clean Architecture (Layered)

```
Request
  └── Route (Fastify)          # entry point, schema validation (Zod)
        └── Controller          # orchestration: calls services, forms response
              └── Service        # business logic, independent of HTTP
                    └── Repository  # Prisma queries, DB access only
```

**Layer rules:**
- Route contains no business logic
- Controller has no knowledge of Prisma
- Service has no knowledge of HTTP (no req/res)
- Repository contains no business rules — CRUD/query only


## Skills & Constraints

### 1. Input Validation (Zod)
- Every route has a `schema` with a Zod schema for `querystring`, `params`, `body`
- Fastify integrates with Zod via `fastify-type-provider-zod`
- Invalid request → 400 with error details, never reaches the controller

### 2. Error Handling
- Single class `AppError(message, statusCode)` for business errors
- Global Fastify error handler: transforms `AppError` into a JSON response
- Unexpected errors → 500 + log, no stack trace leaked to the response

### 3. Structured Logging (Pino)
- Pino configured as the Fastify logger (built-in integration)
- Every request is logged with `requestId`, `method`, `url`, `statusCode`, `responseTime`
- In services — `logger.info / warn / error` with context (no `console.log`)

### 4. Tracing (OpenTelemetry)
- `@opentelemetry/sdk-node` initialized before server start
- Auto-instrumentation for Fastify and Prisma
- Spans for critical service operations (search, filtering)

### 5. Metrics (Prometheus)
- Plugin `fastify-metrics` — automatic: RPS, latency (histogram), error rate
- Custom metric: count of active products in DB
- Endpoint `GET /metrics` (internal, not public)

### 6. Environment Isolation (Zod env)
- `.env` is validated via Zod at startup (`src/config/env.ts`)
- If a variable is missing or of the wrong type — the server does not start

### 7. Testing
- Integration tests against a real test DB (no Prisma mocks)
- `beforeEach` — seed test data, `afterEach` — cleanup
- Tests cover API behavior (status codes, pagination, filters), not implementation details


## Folder Structure

```
backend/src/
├── config/
│   └── env.ts               # Zod environment variable validation
├── plugins/
│   ├── prisma.ts             # Prisma as a Fastify plugin (decorates instance)
│   ├── metrics.ts            # Prometheus metrics plugin
│   └── otel.ts               # OpenTelemetry bootstrap
├── routes/
│   ├── productTypes.ts
│   ├── categories.ts
│   └── products.ts
├── controllers/
│   ├── productTypes.controller.ts
│   ├── categories.controller.ts
│   └── products.controller.ts
├── services/
│   ├── productTypes.service.ts
│   ├── categories.service.ts
│   └── products.service.ts
├── repositories/
│   ├── productTypes.repository.ts
│   ├── categories.repository.ts
│   └── products.repository.ts
├── errors/
│   └── AppError.ts
├── utils/
│   └── pagination.ts         # helper: { skip, take, meta }
└── server.ts
```


## Implementation Steps

1. `npm init` + `tsconfig.json` + dependencies (fastify, prisma, zod, pino, otel...)
2. `src/config/env.ts` — Zod env validation
3. `src/server.ts` — base Fastify instance + plugins
4. `prisma/schema.prisma` — all entities (ProductType, Category, CategoryParameter, Product, ProductParameter)
5. Run `prisma migrate dev` + seed data for development
6. Implement layers in order: Repository → Service → Controller → Route
7. Connect error handler + logging
8. Add OpenTelemetry + Prometheus
9. Write tests