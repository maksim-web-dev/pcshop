# PCShop — Project Plan

Detailed plans by area:
- Backend: [plan_backend.md](plan_backend.md)
- Frontend: [plan_frontend.md](plan_frontend.md)
- Design process: [plan_design.md](plan_design.md)
- AI workflow: [plan_ai_workflow.md](plan_ai_workflow.md)
- Frontend testing: [plan_frontend_testing.md](plan_frontend_testing.md)


## Phase 1 — Project Bootstrap  `[done]`

1. Create root configs: `.gitignore`, `.env.example`, `Makefile`
2. Set up `shared/` — common TS types shared between frontend and backend
3. Write `docker-compose.yaml` (single file, dev-oriented with bind mounts and hot-reload)
4. Verify all services start correctly via `make dev`


## Phase 2 — Backend  `[done]`

> Details: [plan_backend.md](plan_backend.md)

1. Initialize Fastify + TypeScript project in `backend/`
2. Configure Prisma + PostgreSQL connection
3. Write DB schema (`schema.prisma`) and run migrations
4. Implement API according to CONTRACT (product-types, categories, products)
5. Add validation (Zod), error handling, logging (Pino)
6. Connect OpenTelemetry + Prometheus metrics
7. Write integration tests


## Phase 3 — Frontend  `[pending]`

> Details: [plan_frontend.md](plan_frontend.md) · Design: [plan_design.md](plan_design.md) · AI Workflow: [plan_ai_workflow.md](plan_ai_workflow.md) · Testing: [plan_frontend_testing.md](plan_frontend_testing.md)

1. AI design process — generate and approve designs for all 3 themes × 4 pages
2. Configure AI development environment (CLAUDE.md, custom skills, subagents)
3. Initialize React + Vite + TypeScript with multi-theme CSS token infrastructure
4. Configure TailwindCSS + semantic design tokens for 3 themes; Zustand themeStore
5. Configure React Router v6 — page structure
6. Connect TanStack Query + Zustand; implement shared UI components
7. Implement pages using AI agent workflow (home, catalog, product detail, 404)
8. Write unit tests (Vitest + RTL), E2E and visual regression tests (Playwright)
9. Visual regression baseline: 36 screenshots (3 themes × 4 pages × 3 viewports)


## Phase 4 — Observability  `[pending]`

1. Configure Prometheus: `observability/prometheus/prometheus.yml` (scrape backend)
2. Configure Grafana: datasource + dashboard provisioning
3. Add dashboard: RPS, latency, error rate, DB connections


## Phase 5 — Documentation & Deploy  `[pending]`

1. Write `README.md` — per-theme screenshots, run commands, tech stack, AI methodology
2. Verify full startup via `docker-compose.yaml`
3. (Optional) Set up CI/CD (GitHub Actions)
4. (Optional) Deploy


---

## Implementation Roadmap

Detailed frontend phases (expansion of Phase 3). Backend and observability complete separately.

---

### Roadmap Phase 1 — Specification & AI Design  `[in progress]`

**Objective:** Define visual specifications for all three themes and produce approved AI designs for all pages before any code is written.

**Progress (as of 2026-11-27):**
- Visual requirements complete for all 3 themes ✓
- Visual references collected (9 usable refs; accepted as sufficient) ✓
- 9 primary desktop designs generated via Google Stitch: HomePage V2, CatalogPage V1, ProductPage V1 for all 3 themes ✓ — conditionally approved, **awaiting human sign-off**
- NotFoundPage design specification complete (`structure/design/pages/not-found.md`) ✓
- Responsive design specification complete (`structure/design/responsive-design.md`, `responsive-component-matrix.md`) ✓
- Shared Design System specification (component inventory, token categories) — **pending**
- Theme-specific design token definitions — **pending**
- Component variant inventory and component states — **pending**

**Remaining deliverables:**
- Design Steps 8–12: Shared Design System, design tokens, component catalog, component states, final review (blocked on human design approval)

**Acceptance Criteria:**
- Human approval gate: all 9 primary desktop designs reviewed and signed off (**pending**)
- Design tokens defined in full per theme — no gaps
- Component state designs complete for every UI component
- Responsive design validated at implementation (390px / 768px / 1440px) — no Stitch generation for responsive variants

**Dependencies:** Human approval of 9 primary desktop designs (Steps 3–5)

---

### Roadmap Phase 2 — AI Development Environment  `[pending]`

**Objective:** Set up CLAUDE.md, custom Skills, and specialized subagent configurations so AI can produce consistent, high-quality output autonomously.

**Deliverables:**
- `CLAUDE.md` at project root (project context, stack, naming conventions, coding rules)
- 5 custom Claude Code Skills: Frontend Design, Design System, React Component, Visual Review, Implement Page
- Subagent role definitions for 7 specialized roles (see plan_ai_workflow.md)
- Playwright MCP server configured and verified
- End-to-end agent workflow smoke test on a simple component

**Acceptance Criteria:**
- CLAUDE.md covers all conventions needed to generate consistent, mergeable code
- Each skill produces usable, reviewable output independently
- Playwright MCP can open the running app and take screenshots
- Agent handoff chain verified on a single component from spec to screenshot

**Dependencies:** Roadmap Phase 1 complete, plan_ai_workflow.md approved

---

### Roadmap Phase 3 — Frontend Foundation  `[pending]`

**Objective:** Set up the React project with multi-theme infrastructure fully operational before any page work begins.

**Deliverables:**
- Vite + React 18 + TypeScript project scaffolded in `frontend/`
- TailwindCSS + CSS custom properties configured for 3 complete theme token sets
- `themes/` directory with token maps per theme and TypeScript theme types
- Zustand `themeStore` with localStorage persistence and hydration on mount
- `App.tsx` applies `data-theme` attribute to `<html>` from themeStore
- ThemeSwitcher component — theme switching works visually for all 3 themes
- React Router v6 route structure for 4 pages with lazy loading
- TanStack Query + Axios base configured
- Project runs via `npm run dev` without errors

**Acceptance Criteria:**
- Switching theme changes CSS variables on `<html>` without page reload
- Cart, filters, navigation state survive a theme switch
- All 3 themes render without visual errors on a blank test page
- No hardcoded color values in any component (tokens only)

**Dependencies:** Roadmap Phase 2 complete

---

### Roadmap Phase 4 — Shared UI Components  `[pending]`

**Objective:** Build the full shared component library driven by design tokens.

**Deliverables:**
- `ui/` primitives: Button (variants + sizes), Input, Badge, Skeleton, Pagination, ThemeSwitcher
- Composed components: ProductCard, ProductGrid, FilterPanel, SortSelect, CategoryNav, Header, Footer
- Each component in all required states (loading, empty, error, hover, focus, disabled)
- Theme-specific presentation variants for components that require them (e.g., ProductCard)
- Unit tests (Vitest + RTL) for all `ui/` components

**Acceptance Criteria:**
- All components render correctly in all 3 themes without code changes
- Theme-specific variants (if any) are isolated and do not pollute shared logic
- 100% of `ui/` components have at least one Vitest snapshot test
- No component imports from the router, store, or API layer directly

**Dependencies:** Roadmap Phase 3 complete, design tokens approved

---

### Roadmap Phase 5 — Page Development using AI Agents  `[pending]`

**Objective:** Implement all 4 pages using the full AI agent workflow end-to-end.

**Deliverables:**
- HomePage (banner + featured categories + top products)
- CatalogPage (product list + filter sidebar + sorting + pagination)
- ProductPage (product detail: photo, parameters, price, add to cart)
- NotFoundPage (404)
- API service layer (`services/`) covering all backend endpoints
- Custom hooks: `useProducts`, `useCategories`, `useFilters`, `useCart`
- Each page browser-validated in all 3 themes at all 3 breakpoints

**Acceptance Criteria:**
- Each page follows: Specification → Design → Implementation → Browser Validation → Visual Review → Code Review → Human Approval
- Pages work at all 3 breakpoints in all 3 themes without layout breaks
- All loading, error, and empty states are rendered — no silent failures
- Cart state persists through page navigation and theme switching

**Dependencies:** Roadmap Phase 4 complete, page designs approved

---

### Roadmap Phase 6 — AI Quality Assurance  `[pending]`

**Objective:** Full test coverage including visual regression baseline, accessibility, and performance.

**Deliverables:**
- Playwright E2E tests: key flows (catalog → filter → product detail → add to cart)
- Visual regression baseline: 36 screenshots (3 themes × 4 pages × 3 viewports: 1440 / 768 / 390px)
- Theme switching tests: state preservation across switch
- Theme persistence tests: state survives hard browser refresh
- Accessibility audit: axe-core via Playwright on all pages
- Lighthouse performance report for CatalogPage (most complex page)
- AI-assisted visual review: agent compares screenshots against approved designs

**Acceptance Criteria:**
- All 36 baseline screenshots approved and committed to the repo
- Zero automated accessibility violations (axe-core critical/serious)
- Lighthouse performance score ≥ 80 on CatalogPage (mobile throttling)
- Theme persistence confirmed after `Ctrl+Shift+R` hard refresh

**Dependencies:** Roadmap Phase 5 complete

---

### Roadmap Phase 7 — Portfolio & AI Engineering Documentation  `[pending]`

**Objective:** Document the project and AI engineering methodology for portfolio presentation.

**Deliverables:**
- Updated `README.md`: per-theme screenshots, run commands, stack overview, AI methodology section
- AI methodology summary (skills used, agent outputs, what was AI-generated vs human-authored)
- Full stack verified running via `docker-compose up`
- (Optional) GitHub Actions CI pipeline

**Acceptance Criteria:**
- README allows a first-time visitor to understand the project and run it without prior context
- AI methodology is documented with concrete examples (not generic claims)
- Full stack starts from `docker-compose up` without manual intervention

**Dependencies:** Roadmap Phase 6 complete