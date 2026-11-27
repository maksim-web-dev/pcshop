# PCShop — Progress Tracker

Tracks task completion status across prompts and design steps.
Prompt numbers (prompt01, prompt02, ...) are independent of Design Step numbers from `plan_design.md`.

---

## Tasks

| Task ID | Prompt | Description | Status |
|---------|--------|-------------|--------|
| Task 1.1 | prompt01 | Update PCShop project specifications — multi-theme, AI workflow, roadmap | **Completed** |
| Task 1.2 | prompt02 | Define visual requirements for three themes | **Reviewed — minor findings addressed** |
| Task 1.3 | prompt03 | Collect visual references and prepare moodboards | **Awaiting reference collection** |
| Task 1.3.1 | prompt05 | Playwright MCP integration + visual reference screenshot collection | **Awaiting human review** |
| Task 1.4.1 | prompt06 | Prepare Google Stitch HomePage generation (3 prompts + review checklist + usage guide) | **Completed** |
| Task 1.4.1 (rev) | prompt07 | Stitch prompt corrections: shared mock data, scope cleanup, review criteria update | **Completed** |
| Task 1.4.2 | prompt08 | Manual Google Stitch generation — 3 themes generated | **Completed** |
| Task 1.4.3 | prompt09 | AI design review + revision prompts prepared | **Completed** |
| Task 1.4.4 | — | Manual V2 refinement in Stitch (run by human) | **Pending — revision prompts ready** |

### Task 1.2 — Review Findings Addressed (in Task 1.3)

| Finding | File corrected | Change |
|---------|---------------|--------|
| Premium hover-reveal CTA not accessible on touch/keyboard | `themes/premium.md` §14, §19 | Added `@media (hover: hover)` rule; CTA always in DOM; keyboard focusable |
| All theme fonts preloaded at startup (performance issue) | `visual-requirements.md` Risk 5 | Replaced with theme-aware lazy font loading strategy |
| WCAG AA treated as aspirational, not required | `visual-requirements.md` §7 | Clarified as a requirement; ratios marked provisional until tested |
| WCAG large text threshold incorrect (stated ≥18px/14px bold) | `visual-requirements.md` §7, all theme files §19 | Corrected to ≥24px regular or ≥18.67px bold |
| Screenshot test viewports confused with CSS breakpoints | `visual-requirements.md` §6 | Added explicit note distinguishing test viewports (390/768/1440px) from CSS breakpoint ranges |

---

## Design Steps (from `plan_design.md`)

| Step | Description | Status |
|------|-------------|--------|
| Step 1 | Define visual requirements for all three themes | **Reviewed — minor findings addressed** |
| Step 2 | Collect visual references (moodboards) | **Accepted as sufficient** (9 verified refs; original 24-ref target not met; shortlist accepted for initial generation) |
| Step 3 | Generate HomePage concepts via Google Stitch | **V1 generated** (3 designs reviewed; revision prompts prepared; V2 pending human generation) |
| Step 4 | Generate CatalogPage concepts | Pending |
| Step 5 | Generate ProductPage concepts | Pending |
| Step 6 | Define NotFoundPage design *(Google Stitch optional for this step)* | Pending |
| Step 7 | Generate responsive design variants | Pending |
| Step 8 | Create shared Design System specification | Pending |
| Step 9 | Define theme-specific design tokens | Pending |
| Step 10 | Define shared components and presentation variants | Pending |
| Step 11 | Define component states (loading, empty, error, hover, focus, disabled) | Pending |
| Step 12 | Review and approve designs before implementation | Pending |

---

## Implementation Roadmap Phases (from `plan.md`)

| Phase | Description | Status |
|-------|-------------|--------|
| Phase 1 (Backend Bootstrap) | Project bootstrap | Done |
| Phase 2 (Backend) | Fastify + Prisma + PostgreSQL API | Done |
| Phase 3 (Frontend) | Multi-theme React frontend | Pending |
| Phase 4 (Observability) | Prometheus + Grafana dashboards | Pending |
| Phase 5 (Documentation) | README, deploy verification | Pending |

### Frontend Roadmap Phases

| Phase | Description | Status |
|-------|-------------|--------|
| Roadmap Phase 1 | Specification & AI Design | In progress (Step 2: 15/24 refs collected; Step 3 blocked on approval) |
| Roadmap Phase 2 | AI Development Environment | In progress — Playwright MCP configured; Firefox browser installed; MCP docs created |
| Roadmap Phase 3 | Frontend Foundation | Pending |
| Roadmap Phase 4 | Shared UI Components | Pending |
| Roadmap Phase 5 | Page Development using AI Agents | Pending |
| Roadmap Phase 6 | AI Quality Assurance | Pending |
| Roadmap Phase 7 | Portfolio & AI Engineering Documentation | Pending |

---

## Blocking Items

| Item | Blocks | Action required |
|------|--------|----------------|
| V1 designs require revision before approval | Design Step 3 final approval; implementation start | Human runs V2 revision prompts in Stitch; reviews V2 against review-checklist.md |
| Professional: "fast delivery" in hero | Professional V2 approval | Fixed in revision-v2-prompt.md — must verify removal in generated V2 |
| Gaming: footer link contrast (est. 2.5:1) | Gaming V2 approval | Fixed in revision-v2-prompt.md — must verify contrast fix in generated V2 |
| Playwright MCP browser config needs new session | MCP tools in future sessions | `.mcp.json` updated to `--browser firefox`; takes effect on next Claude Code restart |

---

## Notes

- Task 1.2 / Design Step 1 output: `structure/design/visual-requirements.md` and `structure/design/themes/`
- Task 1.3 / Design Step 2 candidates: `structure/design/references/<theme>/moodboard.md`
- Reference comparison: `structure/design/references/comparison.md`
- Usage guide for Google Stitch: `structure/design/references/README.md`
- All proposed color, font, and spacing values remain **draft — requiring human approval**
- Google Stitch generation (Steps 3–7) blocked until: (a) references verified, (b) theme specs approved
- No frontend code has been written