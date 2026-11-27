# PCShop Design Phase Summary

**Version:** 1.0 (2026-11-27)  
**Status:** Design phase in progress — ProductPage V1 conditionally approved; human sign-off pending  
**Covers:** Design Steps 1–5 (visual requirements through ProductPage)

---

## 1. Generated Primary Desktop Designs

| Page | Theme | Version | Score | Approval |
|------|-------|:-------:|:-----:|---------|
| HomePage | Premium Minimalism | V2 | — | Conditionally approved — awaiting sign-off |
| HomePage | Gaming & Technology | V2 | — | Conditionally approved — awaiting sign-off |
| HomePage | Modern Technology Store | V2 | — | Conditionally approved — awaiting sign-off |
| CatalogPage | Premium Minimalism | V1 | 56/65 | Conditionally approved — awaiting sign-off |
| CatalogPage | Gaming & Technology | V1 | 60/65 | Conditionally approved — awaiting sign-off |
| CatalogPage | Modern Technology Store | V1 | 62/65 | Conditionally approved — awaiting sign-off |
| ProductPage | Premium Minimalism | V1 | 55/65 | Conditionally approved — awaiting sign-off |
| ProductPage | Gaming & Technology | V1 | 60/65 | Conditionally approved — awaiting sign-off |
| ProductPage | Modern Technology Store | V1 | 63/65 | Conditionally approved — awaiting sign-off |

**Total: 9 primary desktop designs across 3 themes × 3 pages.**  
**Recommended baseline for all:** V1 (or V2 for HomePage) — no V2 regeneration recommended for Catalog or Product.

---

## 2. Recommended Baseline Versions

| Page | Premium | Gaming | Professional |
|------|:-------:|:------:|:------------:|
| HomePage | V2 (approved revision) | V2 | V2 |
| CatalogPage | V1 | V1 | V1 |
| ProductPage | V1 | V1 | V1 |

**No V2 regeneration needed for any Catalog or ProductPage theme.** All identified issues are implementation-time corrections.

---

## 3. Shared Visual Principles (All Three Themes)

These principles apply across all pages and all themes:

| Principle | Detail |
|-----------|--------|
| Single-page navigation | Each theme has one Stitch page per design; no multi-page flows |
| Consistent header structure | Wordmark (left) · Navigation (center) · Search + Cart + ThemeSwitcher (right) |
| Consistent footer structure | 4 columns (Shop / Browse / Information / Contact) + copyright bar |
| Consistent breadcrumb | 4-segment: Home / Product type / Category / Product name |
| Consistent product data | Same APEX Gaming Laptop 15", $1,799, same 3 related products |
| Availability text carries meaning | Never color-only — text always present alongside any color dot |
| ThemeSwitcher visible | Always present in header; label shows active theme name |
| Cart badge visible | Always present in header; numeric count |
| No unsupported features | No ratings, reviews, discounts, delivery, wishlist, compare, financing |

---

## 4. Cross-Page Component Inventory

Components confirmed across all three pages (HomePage V2 / CatalogPage V1 / ProductPage V1):

### Shared components (confirmed from HTML)

| Component | Premium | Gaming | Professional |
|-----------|:-------:|:------:|:------------:|
| `<Header>` | Identical across pages ✓ | Identical ✓ | Identical ✓ |
| `<Footer>` | Identical ✓ | Identical (with gradient) ✓ | Identical ✓ |
| `<ThemeSwitcher>` | Same placement; different ARIA in some pages | Same | Listbox/option ✓ |
| `<NavigationItem>` with active state | Underline (Premium) | Cyan underline (Gaming) | Blue border-b (Prof) |
| `<SearchInput>` | Compact visible | Visible (dark card) | 300px always-visible |
| `<CartBadge>` | Graphite badge | Purple badge | Blue badge |
| `<ProductCard>` | 2 badges, text availability | 2 badges, cyan IN STOCK | 3 badges, green dot |

### New ProductPage-only components

| Component | Purpose |
|-----------|---------|
| `<ImageGallery>` | Main image + thumbnail row; click to change |
| `<QuantitySelector>` | Integer stepper (+/−), min 1, max stock |
| `<AddToCartButton>` | CTA with confirmation feedback (~2s) |
| `<SpecificationTable>` | Dynamic from `product.parameters[]` |
| `<ProductBreadcrumb>` | 4-segment breadcrumb with `aria-current="page"` |
| `<AvailabilityIndicator>` | Theme-specific display for stock status |

---

## 5. Known Design Inconsistencies

| ID | Description | Affects | Resolution |
|----|-------------|---------|------------|
| I1 | Product name font size deviates in Gaming: Stitch used 20px; spec requires 26px | Gaming ProductPage | Implement at 26px in React |
| I2 | Premium section headings: Stitch used 22px; spec requires 24px | Premium ProductPage | Implement at 24px in React |
| I3 | Gaming `ThemeSwitcher` uses `role="menu"`; Premium/Professional use `role="listbox"` | All themes | Standardize to listbox/option in shared component |
| I4 | Professional spec table "Refresh Rate" row uses blue `text-primary` | Professional ProductPage | Determine if intentional; use neutral `#111827` by default |
| I5 | CatalogPage Premium HTML shows abbreviated GPU filter values ("RTX 4080" missing "NVIDIA") | Professional CatalogPage | Use full backend API value at implementation |
| I6 | CatalogPage Professional CPU badge uses abbreviated text ("Ryzen 9", "Intel i9") | Professional CatalogPage | Abbreviated labels acceptable for display only; use full model for filter API calls |
| I7 | Footer `href="#"` and relative paths in all Stitch HTML | All pages, all themes | Replace with React Router links |
| I8 | Product images are Stitch AI-generated placeholders (Google CDN URLs or base64) | All pages | Replace with `imageUrls[]` from backend |

---

## 6. Required Implementation Corrections (Consolidated)

Corrections required before or during React implementation:

### All themes

| Correction | Detail |
|-----------|--------|
| Replace product images | Use `product.imageUrls[]`; placeholder if empty |
| Dynamic specification table | Render from `product.parameters[]`; `"{value} {unit}"` where unit present |
| Dynamic category parameters in CatalogPage | Render from `GET /api/categories/:id/parameters/:key/values` |
| `isActive === false` → not-found state | Backend returns HTTP 200; frontend must check explicitly |
| `stock === 0` → out-of-stock state | Disable CTA + quantity; show out-of-stock availability |
| Quantity max | Cap at `Math.min(product.stock, 99)` minus quantity already in cart |
| Currency formatting | `"1799.00"` → `"$1,799"` via `Intl.NumberFormat` |
| Footer links → React Router links | Replace placeholder hrefs |
| ThemeSwitcher ARIA | Standardize to `role="listbox"` / `role="option"` / `aria-selected` |
| Strip Stitch attributes | Remove `data-stitch-*`, `data-design-text-token` from production JSX |
| Filter param values (CatalogPage) | Use raw backend values for API requests (not display labels) |
| Screen Size filter parameter | Include when returned by category API |

### Theme-specific

| Theme | Correction |
|-------|-----------|
| Premium | Product section headings at 24px Playfair (Stitch: 22px) |
| Gaming | Product name `h1` at Inter 26px 700 (Stitch: 20px) |
| Gaming | Spec badge bg at `#16161E` (Stitch: `#1D1635`) |
| Gaming | CTA hover color — gradient dark end (not flat color) |
| Professional | "10 in stock" note derived dynamically from `product.stock` |
| Professional | Confirm Refresh Rate row color intent (blue vs neutral) |

---

## 7. Outstanding Responsive Design Requirements

No responsive design has been generated. Desktop (1440px) is the only designed viewport.

| Step | Description | Approach |
|------|-------------|---------|
| Tablet (768–1023px) | Compressed two-column layouts | Implement in CSS/Tailwind — no additional Stitch generation needed |
| Mobile (≤767px) | Single-column stacked layouts | Implement in CSS/Tailwind — no additional Stitch generation needed |
| Mobile filters (CatalogPage) | Filter drawer/overlay | Design in React during implementation |
| Mobile CTA sticky | Sticky bottom CTA on ProductPage | Implement in React |
| Mobile search | Search overlay/expansion | Implement in React |

**Recommendation:** Handle responsive design during frontend implementation using the desktop designs as the primary reference. Visual validation via Playwright at 390px, 768px, 1440px viewports.

---

## 8. Outstanding Accessibility Requirements

| Requirement | Current status | Action at implementation |
|-------------|---------------|--------------------------|
| WCAG AA color contrast | Visually assessed; not tested | Run axe-core + Playwright at implementation |
| Keyboard navigation order | HTML structure suggests correct order | Verify Tab order in browser |
| Screen reader semantics | Structural HTML confirms `<nav>`, `<h1>`, `<section aria-labelledby>`, `<table><caption>` | Test with NVDA / VoiceOver |
| CatalogPage filter radio inputs | Fieldset/legend structure confirmed in Professional HTML | Verify all 3 themes use `<fieldset><legend>` |
| ThemeSwitcher ARIA | Standardize to listbox/option (I3) | Fix during component implementation |

---

## 9. Remaining Design System Work

| Step | Description | When |
|------|-------------|------|
| Step 6 | NotFoundPage design | Before frontend Phase 5 starts (see §10 below) |
| Step 7 | Responsive design variants | During frontend implementation |
| Step 8 | Shared Design System specification | After all primary pages approved |
| Step 9 | Theme-specific design tokens (CSS custom properties) | After Step 8 |
| Step 10 | Shared component catalog + presentation variants | After Step 9 |
| Step 11 | Component states (loading, error, hover, focus, disabled) | After Step 10 |
| Step 12 | Final pre-implementation design review | Before frontend Phase 3 |

**None of these steps should be blocked by human approval of the current designs.** Steps 8–12 can proceed in parallel with frontend foundation work.

---

## 10. NotFoundPage Recommendation

A dedicated Google Stitch generation is **not recommended** for the NotFoundPage.

**Rationale:** The NotFoundPage is a minimal utility page. Generating it in Stitch adds cycle cost without meaningful design value.

**Recommended approach:**
- Design NotFoundPage directly in React during Phase 5 (Page Development)
- Use the established theme colors and typography from approved-design-guidance files
- Structure: Header + simple centered message + "Browse all Laptops" link + Footer
- Theme-specific styling: same header/footer as other pages; message in primary text color
- No new Stitch generation required

If the project owner wants a Stitch reference, a quick one-page prompt can be prepared — but it is not on the critical path.

---

## 11. Efficient Completion Strategy

**Recommended path to implementation start:**

1. **Human approval** (blocking): Review and sign off on 9 designs; resolve M1 (Premium search) and 5 decisions from result12.md
2. **Design Steps 8–9** (parallel to frontend foundation): Define design tokens and shared component catalog based on approved HTML/CSS
3. **Frontend Phase 3** (foundation): Vite + React + Tailwind setup; theme system; routing; Zustand stores
4. **Frontend Phase 4** (components): Build shared components using approved designs; validate with Playwright
5. **Frontend Phase 5** (pages): Build all 3 pages per theme + NotFoundPage; Playwright visual regression
6. **Responsive** (embedded in Phase 5): Handle at Tailwind breakpoints; no Stitch generation
7. **Accessibility** (embedded in Phase 5): axe-core + keyboard test + screen reader

**Tasks that do NOT need new Stitch generation:**
- NotFoundPage
- Loading states (skeleton screens — implement via component convention)
- Error states (implement via component convention)
- Responsive layouts
- Out-of-stock, inactive product, missing image states

**Total Stitch generations completed:** 9 (3 themes × 3 pages). No further Stitch generation is required for the core design phase.