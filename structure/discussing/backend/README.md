# PCShop Backend

REST API for the PCShop e-commerce platform. Built with **Fastify**, **Prisma**, and **TypeScript**.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js 20 |
| Framework | Fastify 4 |
| ORM | Prisma 5 (PostgreSQL) |
| Validation | Zod + `fastify-type-provider-zod` |
| Observability | OpenTelemetry (OTLP) + Prometheus (`fastify-metrics`) |
| Testing | Vitest 2 (integration tests against a real DB) |
| Language | TypeScript 5 |

---

## Architecture

The codebase follows a strict 4-layer separation:

```
Routes  →  Controllers  →  Services  →  Repositories
```

- **Routes** (`src/routes/`) — declare HTTP endpoints, Zod schemas for query/path params, and wire DI dependencies.
- **Controllers** (`src/controllers/`) — thin adapters that translate HTTP input into service calls.
- **Services** (`src/services/`) — business logic, error throwing, response shaping.
- **Repositories** (`src/repositories/`) — all Prisma queries; return raw DB entities.

Fastify plugins (`src/plugins/`) encapsulate cross-cutting concerns: `prisma.ts` decorates the instance with the Prisma client, `metrics.ts` adds the Prometheus endpoint, `otel.ts` initialises the OpenTelemetry SDK before the server starts.

---

## Data Model

```
ProductType
  └── Category (productTypeId →)
        └── CategoryParameter  (key, type: STRING | NUMBER | BOOLEAN | ENUM, unit?, options[])
              └── ProductParameter (value)
                    ↑
Product (productTypeId →, categoryId →)
```

Each `Product` stores its attribute values as `ProductParameter` rows linked to the matching `CategoryParameter`. This allows arbitrary per-category attribute schemas without schema migrations.

---

## API Endpoints

All routes are prefixed with `/api`.

### Product Types

| Method | Path | Description |
|---|---|---|
| GET | `/api/product-types` | List all product types |

### Categories

| Method | Path | Query | Description |
|---|---|---|---|
| GET | `/api/categories` | `productTypeId?` | List categories, optionally filtered by type |
| GET | `/api/categories/:id` | — | Category detail with its `parameters` array |
| GET | `/api/categories/:id/parameters/:key/values` | — | Distinct active-product values for a parameter (used to populate filter dropdowns) |

### Products

| Method | Path | Query | Description |
|---|---|---|---|
| GET | `/api/products` | see below | Paginated, filtered product list |
| GET | `/api/products/:id` | — | Product detail with flattened `parameters` array |

**`GET /api/products` query parameters:**

| Param | Type | Default | Notes |
|---|---|---|---|
| `page` | integer ≥ 1 | `1` | |
| `limit` | integer 1–100 | `20` | |
| `productTypeId` | UUID | — | |
| `categoryId` | UUID | — | |
| `search` | string | — | Case-insensitive name contains |
| `sortBy` | `price` \| `name` \| `createdAt` | `createdAt` | |
| `sortDir` | `asc` \| `desc` | `asc` | |
| `params.<key>` | string | — | Filter by parameter value, e.g. `params.brand=ASUS` |

Multi-value parameter filtering uses dot-notation parsed by `qs` (`allowDots: true`). Each `params.<key>=<value>` pair adds an `AND` clause checking `ProductParameter`.

**Paginated list response shape:**
```json
{
  "data": [...],
  "meta": { "total": 42, "page": 1, "limit": 20, "totalPages": 3 }
}
```

### System

| Method | Path | Description |
|---|---|---|
| GET | `/health` | Returns `{ "status": "ok" }` |
| GET | `/metrics` | Prometheus metrics (includes custom `pcshop_active_products_total` gauge) |

---

## Error Handling

Errors thrown as `AppError` (`src/errors/AppError.ts`) are caught by a global Fastify error handler and serialised as:

```json
{ "error": "<message>" }
```

with the HTTP status code from the `AppError` instance. Zod validation failures return `400` with a `details` array. Unexpected errors return `500` and are logged at `error` level via Pino.

---

## Environment Variables

Validated at startup via Zod (`src/config/env.ts`). Missing required variables cause a hard exit with a descriptive message.

| Variable | Required | Default | Description |
|---|---|---|---|
| `DATABASE_URL` | yes | — | PostgreSQL connection string |
| `PORT` | no | `4000` | HTTP listen port |
| `NODE_ENV` | no | `development` | `development` / `production` / `test` |
| `LOG_LEVEL` | no | `info` | Pino log level |
| `OTEL_EXPORTER_OTLP_ENDPOINT` | no | — | OTLP collector base URL (OTel disabled when absent) |

In `development`, Pino output is formatted by `pino-pretty`. In `test`, the logger is suppressed and OTel is not initialised.

---

## Running Locally

```bash
# Install dependencies
npm install

# Apply migrations and generate Prisma client
npx prisma migrate dev

# Seed the database
npm run db:seed

# Start dev server with hot reload
npm run dev
```

The server listens on `http://localhost:4000`.

---

## Testing

Tests are integration tests: they build a real Fastify instance and use `app.inject()` against a test database (set `DATABASE_URL` in your environment to a test DB).

```bash
npm test               # run all tests
npm run test:coverage  # with v8 coverage report
```

Test files are in `tests/` with a shared `helpers/setup.ts` that builds the server once per suite.

---

## Docker

The `Dockerfile` runs the development server inside a Node 20 Alpine container:

```bash
docker build -t pcshop-backend .
docker run -e DATABASE_URL=<url> -p 4000:4000 pcshop-backend
```

The image runs `npm run dev` (tsx watch), which is intentional for the current development phase. For production, switch the `CMD` to `npm run build && npm start`.

---

## Observability

**Tracing** — OpenTelemetry Node SDK with auto-instrumentations is initialised before the Fastify server when `OTEL_EXPORTER_OTLP_ENDPOINT` is set. Traces are exported via OTLP/HTTP to `<endpoint>/v1/traces`. The SDK shuts down gracefully on `SIGTERM`.

**Metrics** — `fastify-metrics` exposes a standard Prometheus endpoint at `/metrics`. A custom gauge `pcshop_active_products_total` queries the DB on each scrape and reports the count of active products.