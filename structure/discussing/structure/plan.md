# PCShop — Project Plan

Detailed plans by area:
- Backend: [plan_backend.md](plan_backend.md)
- Frontend: [plan_frontend.md](plan_frontend.md)


## Phase 1 — Project Bootstrap

1. Create root configs: `.gitignore`, `.env.example`, `Makefile`
2. Set up `shared/` — common TS types shared between frontend and backend
3. Write `docker-compose.yaml` (single file, dev-oriented with bind mounts and hot-reload)
4. Verify all services start correctly via `make dev`


## Phase 2 — Backend

> Details: [plan_backend.md](plan_backend.md)

1. Initialize Fastify + TypeScript project in `backend/`
2. Configure Prisma + PostgreSQL connection
3. Write DB schema (`schema.prisma`) and run migrations
4. Implement API according to CONTRACT (product-types, categories, products)
5. Add validation (Zod), error handling, logging (Pino)
6. Connect OpenTelemetry + Prometheus metrics
7. Write integration tests


## Phase 3 — Frontend

> Details: [plan_frontend.md](plan_frontend.md)

1. Initialize React + Vite + TypeScript project in `frontend/`
2. Configure TailwindCSS + design tokens (colors, typography, spacing)
3. Configure React Router v6 — page structure
4. Connect TanStack Query + Zustand
5. Implement pages: home, catalog, product detail
6. Write unit tests (Vitest) and screenshot tests (Playwright)


## Phase 4 — Observability

1. Configure Prometheus: `observability/prometheus/prometheus.yml` (scrape backend)
2. Configure Grafana: datasource + dashboard provisioning
3. Add dashboard: RPS, latency, error rate, DB connections


## Phase 5 — Documentation & Deploy

1. Write `README.md` — frontend showcase, run commands, screenshots
2. Verify full startup via `docker-compose.yaml`
3. (Optional) Set up CI/CD (GitHub Actions)
4. (Optional) Deploy