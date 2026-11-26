# PCShop — Frontend Testing Strategy

← [plan.md](plan.md)

---

## Overview

| Layer | Tool | Scope |
|-------|------|-------|
| Unit | Vitest + React Testing Library | Components, hooks, utilities |
| E2E (functional) | Playwright | Key user flows |
| Visual regression | Playwright | 36 baseline screenshots |
| Accessibility | axe-core (via Playwright) | All pages, all themes |
| Performance | Lighthouse (via Playwright) | CatalogPage (critical path) |
| AI visual review | Visual Reviewer Agent + Playwright MCP | Design fidelity check |

---

## Unit Testing (Vitest + React Testing Library)

### Scope
- All `ui/` primitive components (Button, Input, Badge, Skeleton, Pagination, ThemeSwitcher)
- Composed components (ProductCard, FilterPanel, SortSelect, CategoryNav, ProductGrid)
- Custom hooks (useProducts, useCategories, useFilters, useCart)
- Utility functions (pagination helpers, token resolution)

### Rules
- Components tested in isolation — no router, no store, no API (mock at boundary)
- Test behavior, not implementation: test what the user sees and can interact with
- Each `ui/` component must have at least one snapshot test
- Hooks tested via `renderHook` from RTL

### File convention
```
src/components/ui/Button/
├── Button.tsx
├── Button.test.tsx       # unit test
└── Button.stories.tsx    # (optional) visual reference
```

### Coverage target
- `ui/` components: 100% render coverage (all variants + all states)
- Hooks: core logic paths covered

---

## Functional E2E Testing (Playwright)

### Key user flows

| Flow | Steps | Assertions |
|------|-------|------------|
| Browse catalog | Load HomePage → click category → CatalogPage opens | Products visible, filters populated |
| Filter products | CatalogPage → apply filter by parameter | Product list updates, URL reflects filter |
| Search products | CatalogPage → type in search box | Matching products shown, non-matching hidden |
| Sort products | CatalogPage → change sort | Order of products changes |
| Paginate | CatalogPage → navigate to page 2 | Different products, URL page param updates |
| View product | CatalogPage → click product card → ProductPage | Product name, price, parameters visible |
| Add to cart | ProductPage → click "Add to cart" | Cart count in header increments |
| 404 page | Navigate to `/nonexistent` | NotFoundPage renders, link back to home works |

### Configuration
- Tests run against the full stack (frontend + backend + DB via docker-compose)
- Playwright config: `baseURL: http://localhost:3000`
- 3 browser projects: chromium, firefox, webkit (smoke subset)
- Full suite on chromium; smoke suite on firefox + webkit

---

## Visual Regression Testing

### Baseline Screenshot Matrix

**Formula:** 3 themes × 4 pages × 3 viewports = **36 baseline screenshots**

| Page | professional | premium | gaming |
|------|-------------|---------|--------|
| HomePage (1440px) | ✓ | ✓ | ✓ |
| HomePage (768px)  | ✓ | ✓ | ✓ |
| HomePage (390px)  | ✓ | ✓ | ✓ |
| CatalogPage (1440px) | ✓ | ✓ | ✓ |
| CatalogPage (768px)  | ✓ | ✓ | ✓ |
| CatalogPage (390px)  | ✓ | ✓ | ✓ |
| ProductPage (1440px) | ✓ | ✓ | ✓ |
| ProductPage (768px)  | ✓ | ✓ | ✓ |
| ProductPage (390px)  | ✓ | ✓ | ✓ |
| NotFoundPage (1440px)| ✓ | ✓ | ✓ |
| NotFoundPage (768px) | ✓ | ✓ | ✓ |
| NotFoundPage (390px) | ✓ | ✓ | ✓ |

**Viewport widths:** 1440px (desktop), 768px (tablet), 390px (mobile)

### Determinism

Screenshots are only reproducible if the content is deterministic. Requirements:

- **Seed data:** Visual regression tests always run against a fixed seed dataset
  (`npm run db:seed` produces the same data every time — fixed IDs, names, prices, images)
- **Images:** Product images use a fixed set of placeholder images committed to the repo
  (not random Unsplash URLs that may change or return different images)
- **Animations:** CSS animations are disabled during screenshot capture:
  ```css
  *,
  *::before,
  *::after {
    animation-duration: 0s !important;
    transition-duration: 0s !important;
  }
  ```
  Applied via Playwright's `page.addStyleTag()` before capturing
- **Fonts:** Web fonts are loaded with `font-display: block`; Playwright waits for
  `networkidle` before capturing
- **Dates/times:** No dynamic dates rendered on pages (product `createdAt` not shown to user)
- **Scroll position:** Each screenshot is full-page from the top (`fullPage: true`)

### Storage and Versioning
- Baseline screenshots stored in `frontend/tests/e2e/screenshots/`
- Committed to git alongside code (use Git LFS for large repos)
- Grouped by: `screenshots/<theme>/<page>/<viewport>.png`

---

## Theme Switching Tests

**Objective:** Verify that switching between all 3 themes changes the visual appearance
and does not break application state.

| Test | Expected result |
|------|----------------|
| Switch to `gaming` from `professional` | CSS variables change, `data-theme` attribute updates |
| Switch to `premium` from `gaming` | CSS variables change, `data-theme` attribute updates |
| Switch theme on CatalogPage with active filters | Filters remain active, product list unchanged |
| Switch theme on ProductPage with item in cart | Cart count unchanged |
| Switch theme mid-pagination (page 3) | Still on page 3 after switch |
| Verify ThemeSwitcher shows active theme | Active theme is visually indicated |

**Implementation:** Playwright E2E tests that:
1. Navigate to target page, set initial state (apply filter / add to cart)
2. Click ThemeSwitcher, select different theme
3. Assert state is preserved (URL params, cart count, filter chips)
4. Assert `data-theme` attribute changed on `<html>`

---

## Theme Persistence Tests

**Objective:** Verify that the selected theme persists across browser sessions.

| Test | Expected result |
|------|----------------|
| Select `gaming`, hard refresh | Still `gaming` on reload |
| Select `premium`, close tab, reopen | Still `premium` on reopen |
| No theme in localStorage | Falls back to `professional` |
| Corrupt theme value in localStorage | Falls back to `professional` |

**Implementation:** Playwright tests using `page.evaluate()` to manipulate localStorage,
then reload and assert `data-theme` attribute.

---

## Responsive Design Testing

**Objective:** Verify all pages render correctly at all 3 breakpoints across all 3 themes.

**Method:** Playwright screenshots are the primary verification tool (covered by visual regression).
Additional checks:

| Check | Method |
|-------|--------|
| No horizontal scroll at any breakpoint | Assert `document.documentElement.scrollWidth <= window.innerWidth` |
| Filter sidebar collapses on mobile | Assert sidebar is not visible; filter button is visible |
| Navigation collapses to hamburger on mobile | Assert hamburger visible, nav items hidden |
| Product grid adapts columns (4 → 2 → 1) | Assert CSS grid column count per breakpoint |
| CTA buttons ≥ 44px tap target on mobile | Assert `clientHeight >= 44` for primary CTAs |

---

## Accessibility Testing

**Tool:** `@axe-core/playwright` — runs axe accessibility engine in-browser via Playwright.

**Scope:** All 4 pages × 3 themes = 12 accessibility scans.

**Violation severity policy:**

| Severity | Policy |
|----------|--------|
| `critical` | Blocks merge — must be fixed before the page ships |
| `serious` | Blocks merge — must be fixed before the page ships |
| `moderate` | Must be tracked as an issue, fixed before Phase 7 |
| `minor` | Logged, addressed if time permits |

**Key checks:**
- Color contrast ratio ≥ 4.5:1 for normal text, ≥ 3:1 for large text (all 3 themes)
- Focus rings visible on all interactive elements (all 3 themes)
- All images have descriptive `alt` text
- Form inputs have associated labels
- ARIA roles correct on custom components (ThemeSwitcher, FilterPanel, Pagination)
- Keyboard navigation order is logical
- Screen reader announcements for dynamic content (filter results count, cart updates)

**Reduced-motion:**
- Verify that `prefers-reduced-motion: reduce` disables all CSS transitions and animations
  (test via `page.emulateMedia({ reducedMotion: 'reduce' })` in Playwright)

---

## Performance Testing (Lighthouse)

**Scope:** CatalogPage only — the most complex page (product grid + filters + pagination).
Tested in `professional` theme (default, most information-dense).

**Target scores:**

| Category | Minimum target |
|----------|----------------|
| Performance | ≥ 80 |
| Accessibility | ≥ 95 |
| Best Practices | ≥ 90 |
| SEO | ≥ 80 |

**Method:**
- Playwright Lighthouse integration (`playwright-lighthouse` package)
- Throttled to mobile conditions (Lighthouse default mobile preset)
- Run against production build (`npm run build && npm run preview`), not dev server

**Key metrics:**
- LCP (Largest Contentful Paint) ≤ 2.5s
- TBT (Total Blocking Time) ≤ 200ms
- CLS (Cumulative Layout Shift) ≤ 0.1

---

## AI-Assisted Visual Review

**Objective:** Use the Visual Reviewer Agent (see plan_ai_workflow.md) to compare
Playwright screenshots against approved designs and report deviations before human approval.

**Process:**
1. QA Engineer Agent captures live screenshots via Playwright MCP
2. Visual Reviewer Agent compares each screenshot to the corresponding approved design
3. Agent produces a structured deviation report per page per theme per viewport
4. Human reviews the agent's report and either approves or requests fixes

**Deviation severity for AI review:**

| Severity | Examples |
|----------|---------|
| `critical` | Wrong theme applied, page does not render |
| `major` | Key component missing, layout broken, wrong colors |
| `minor` | Spacing off by several pixels, font size slightly off |
| `cosmetic` | Shadow slightly different, border radius minor mismatch |

**Gate:** Only `critical` and `major` deviations block progression. `minor` and `cosmetic`
deviations are documented and accepted or added to a refinement backlog.

---

## Baseline Approval Process

When visual regression baselines are captured for the first time (or intentionally updated):

1. QA Engineer Agent captures all 36 screenshots in a Playwright run
2. Screenshots are staged for review (`playwright show-report`)
3. Human reviews each screenshot against the approved design
4. Human approves: `npx playwright test --update-snapshots` to commit baselines
5. All 36 baselines are committed to git in the same PR as the implementation

**Updating baselines:**
- Intentional design change → update affected baselines, document change in PR description
- Unintentional visual regression → fix the code, do not update baseline
- Never update baselines automatically in CI without human review