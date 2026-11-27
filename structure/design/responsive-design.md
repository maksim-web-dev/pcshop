# PCShop — Responsive Design Specification

**Version:** 1.0 (2026-11-27)
**Status:** Specification — no Stitch generation required; validate at implementation
**Reference designs:** Desktop 1440px viewport is the primary design reference for all themes

---

## 1. Mobile-First Implementation Principles

All CSS is written mobile-first: base styles target the smallest viewport, and `min-width` media queries progressively add layout complexity for wider viewports.

**Core principles:**

1. **Start from content.** On mobile, every element is a single-column flow. No layout logic is needed — only readable content.
2. **Add layout progressively.** CSS Grid and Flexbox multi-column behaviors are gated behind `md:` and `lg:` Tailwind prefixes.
3. **Never hide required content.** No required navigation, specification data, or interactive control is `display: none` on mobile. If it doesn't fit, it moves — it doesn't disappear.
4. **One component, one implementation.** No duplicate components for different viewport sizes. Use CSS to change presentation, not React to swap components (exception: FilterPanel→FilterDrawer which requires a structural change — see §Component Behaviors).
5. **Touch targets first.** Minimum 44×44px interactive area on all breakpoints, not just mobile.
6. **Semantic tokens, not viewport checks in JS.** Responsive behavior is CSS-only unless state must change (e.g., drawer open/close). Never read `window.innerWidth` in React component logic.

---

## 2. CSS Breakpoint Strategy

### Breakpoint ranges

| Name | Range | Description |
|------|-------|-------------|
| Mobile | ≤767px | Single-column, stacked, hamburger navigation |
| Tablet | 768px–1023px | Two-column, collapsed navigation, filter drawer |
| Desktop | ≥1024px | Full multi-column, sidebar navigation, full header |

**Tailwind configuration:**
```
screens: {
  'md': '768px',   // tablet lower bound
  'lg': '1024px',  // desktop lower bound
  'xl': '1280px',  // wide desktop (optional)
  '2xl': '1440px', // design reference viewport (optional)
}
```

### Validation viewports (separate from CSS breakpoints)

| Viewport | Purpose | Notes |
|----------|---------|-------|
| 390px | Playwright mobile screenshot | Representative of modern small phones |
| 768px | Playwright tablet screenshot | At the mobile→tablet breakpoint boundary |
| 1440px | Playwright desktop screenshot | The design reference viewport |

These are **test capture widths** — single points chosen to represent each breakpoint range. CSS breakpoints use range-based `min-width` media queries. Do not define CSS breakpoints at exactly 390, 768, or 1440px.

**Important:** The PNG screenshots exported from Google Stitch (Premium: 400px wide, Gaming: 462px wide, Professional: 505px wide) represent thumbnail preview sizes, not the original design viewport. All desktop designs target 1440px.

---

## 3. Container Widths and Horizontal Padding

### Max content width by theme

| Theme | Desktop max-width | Notes |
|-------|------------------|-------|
| Premium Minimalism | 1280px | Generous gutters; content does not fill the full 1440px |
| Gaming & Technology | 1360px | Slightly wider; more product density |
| Modern Technology Store | 1320px | Balanced |

### Horizontal padding (page gutters)

| Theme | Desktop (≥1024px) | Tablet (768–1023px) | Mobile (≤767px) |
|-------|:-----------------:|:-------------------:|:---------------:|
| Premium | 80px | 40px | 20px |
| Gaming | 60px | 32px | 16px |
| Professional | 60px | 32px | 16px |

**Implementation:** Use a `Container` wrapper component or Tailwind utility class that applies:
```
class="mx-auto w-full max-w-[1280px] px-5 md:px-8 lg:px-20"
```
(values per theme via CSS custom property `--page-gutter`)

---

## 4. Grid Behavior

### Product grid columns

| Theme | Desktop ≥1280px | Desktop 1024–1279px | Tablet | Mobile |
|-------|:---------------:|:-------------------:|:------:|:------:|
| Premium | 3 columns | 3 columns | 2 columns | 1 column |
| Gaming | 3 columns | 3 columns | 2 columns | 2 columns (compact) |
| Professional | 3 columns (default) | 3 columns | 2 columns | 2 columns (compact) |

Gaming and Professional use 2-column mobile grid because their product cards are more compact and readable at ~175px width. Premium uses 1-column to preserve the editorial whitespace that defines the theme.

### Category grid (HomePage)

| Breakpoint | Columns |
|------------|:-------:|
| Desktop ≥1024px | 4 columns |
| Tablet 768–1023px | 2 columns |
| Mobile ≤767px | 2 columns (compact) |

### Filter + catalog layout (CatalogPage)

| Breakpoint | Layout |
|------------|--------|
| Desktop ≥1024px | Left sidebar (240–280px) + right product grid |
| Tablet + Mobile | Full-width product grid; filter behind "Filters" button (drawer) |

The filter sidebar is **not collapsible on desktop**. It is always visible at ≥1024px.

---

## 5. Responsive Typography

Typography scales are defined in theme specifications. This section summarizes the per-breakpoint values and establishes the implementation approach.

### Implementation approach

Use Tailwind responsive text utilities or CSS clamp() for fluid scaling. Base (mobile) value is set in the base class; responsive overrides use `md:` and `lg:` prefixes:
```
class="text-2xl md:text-3xl lg:text-5xl font-display"
```

### Premium Minimalism scale (Playfair Display + DM Sans)

| Level | Mobile | Tablet | Desktop |
|-------|:------:|:------:|:-------:|
| Display (hero) | 32px | 40px | 56px |
| H1 | 28px | 32px | 40px |
| H2 | 20px | 24px | 28px |
| H3, Body, Label | Unchanged (16/14/12px) | — | — |

### Gaming & Technology scale (Rajdhani + Inter)

| Level | Mobile | Tablet | Desktop |
|-------|:------:|:------:|:-------:|
| Display (hero) | 36px | 48px | 72px |
| H1 | 28px | 36px | 48px |
| H2 | 20px | 24px | 32px |
| Body, Label | Unchanged (16/14/12px) | — | — |

### Modern Technology Store scale (Inter)

| Level | Mobile | Tablet | Desktop |
|-------|:------:|:------:|:-------:|
| Display (hero) | 28px | 32px | 40px |
| H1 | 24px | 28px | 32px |
| H2 | 18px | 20px | 24px |
| Body, Label | Unchanged (15/14/12px) | — | — |

---

## 6. Responsive Spacing

Component-level spacing adapts by breakpoint using the theme spacing tokens.

| Element | Mobile | Tablet | Desktop |
|---------|:------:|:------:|:-------:|
| Section vertical padding | `--spacing-xl` | `--spacing-xl` | `--spacing-2xl` |
| Card gap | 16px | 20px | 20–24px |
| Internal card padding | 12px | 14px | 16px |
| Hero section height | Auto (content-driven) | 340–440px (auto) | 420–580px (fixed per theme) |

---

## 7. Image Scaling and Aspect Ratios

### Product images

All product images maintain a fixed aspect ratio regardless of viewport size. The image scales within its container:

```css
aspect-ratio: 4 / 3;      /* catalog cards, product gallery thumbnails */
aspect-ratio: 1 / 1;      /* gallery main image (some themes) */
object-fit: cover;         /* catalog cards */
object-fit: contain;       /* product detail main image (all themes) */
```

**Loading strategy:**
- Above-the-fold images (hero, first product row): `loading="eager"`
- Below-fold images: `loading="lazy"`
- Responsive sizes attribute: `sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"` (approximate per grid)

### Hero product image

| Breakpoint | Behavior |
|------------|---------|
| Desktop | 50–55% of hero width; fixed height per theme (see theme specs) |
| Tablet | Compressed; image may shrink or move below text |
| Mobile | Stacked below text, full-width, aspect ratio maintained |

### Image placeholders

When `imageUrls[]` is empty or an image fails to load, show a theme-specific placeholder:
- Premium: `#EEEBE7` warm gray rectangle
- Gaming: `#111118` dark rectangle with subtle shimmer
- Professional: `#F3F4F6` cool gray rectangle

---

## 8. Content Reflow Rules

| Component | Desktop | Tablet | Mobile |
|-----------|---------|--------|--------|
| Hero section | Side-by-side (image + text) | Side-by-side (compressed) | Stacked (image above or below text) |
| ProductPage detail | Two-column (gallery left, info right) | Two-column (compressed, gallery shrinks) | Single column (gallery above, info below) |
| Footer | 4-column grid | 2×2 grid | Single column, stacked |
| Breadcrumbs | Full 4-segment | Truncate if overflow | Show only last 2 segments or abbreviate |
| Filter panel (CatalogPage) | Persistent left sidebar | Hidden → drawer trigger | Hidden → drawer trigger |
| Pagination | Full: arrows + page numbers | Full | Arrows + current page only ("← 2 →") |

---

## 9. Navigation Behavior

### Desktop header navigation (≥1024px)

Horizontal links in the header. All 4 nav items visible. Search input visible (see theme-specific rules below). Cart badge + ThemeSwitcher on the right.

### Mobile navigation (≤767px)

Hamburger menu icon replaces the navigation links. Tapping opens a full-screen or slide-in drawer:

| Behavior | Requirement |
|----------|------------|
| Trigger | Hamburger icon (3 lines) in header, ≥44×44px tap target |
| Panel | Full-height slide-in from left (or top overlay) |
| Contents | Logo, navigation links (Laptops / PCs / Monitors / Peripherals), close button |
| Close | Tap close button, tap backdrop, or press Escape |
| Focus trap | While open, Tab cycles through drawer items only |
| Focus restore | Returns to hamburger button on close |
| Animation | Slide-in from left; respects `prefers-reduced-motion` |

**All 4 navigation items are present in the mobile drawer.** No items are removed or hidden on mobile.

### Search input behavior by theme

| Theme | Desktop (≥1024px) | Tablet | Mobile |
|-------|:----------------:|:------:|:------:|
| Professional | Always-visible 300px input | Always-visible (may shrink) | Icon → SearchOverlay |
| Premium | Compact visible input (resolved: visible across all pages) | Icon or compact | Icon → SearchOverlay |
| Gaming | Icon in header | Icon | Icon → SearchOverlay |

### SearchOverlay (all themes, mobile / icon-only)

When the search icon is tapped on mobile (or in Gaming at any size), a SearchOverlay appears:

| Behavior | Requirement |
|----------|------------|
| Trigger | Search icon button |
| Overlay | Full-width input at top of viewport (below header or replacing header row) |
| Auto-focus | Input receives focus immediately on open |
| Close | Escape key, tap × button, or tap backdrop |
| Focus trap | None required (single input) |
| State | Query typed into SearchOverlay is applied to URL and closes overlay on submission |

---

## 10. Touch Target Requirements

Minimum interactive area of **44×44px** on all breakpoints. This applies to:

| Element | Implementation |
|---------|---------------|
| Navigation links (mobile drawer) | Height ≥44px per item |
| Hamburger button | 44×44px minimum |
| CTA buttons | Height ≥44px (all themes use 48px) |
| Pagination arrows | 44×44px minimum |
| Thumbnail buttons (ProductPage gallery) | 44×44px minimum |
| Filter radio options (desktop) | 24px radio + label area ≥44px height |
| Filter drawer options (mobile) | ≥44px height per option row |
| ThemeSwitcher | ≥44×44px trigger |
| Cart badge icon | ≥44×44px tap area |
| Quantity selector +/− buttons | 44×44px each |
| Active filter chip × button | 44×44px minimum |

**Implementation note:** Use padding rather than fixed height where possible, so the visible element remains appropriately sized while the tap target expands:
```css
padding: 10px 16px; /* results in ≥44px height for a 24px line-height */
```

---

## 11. Reduced-Motion Support

All CSS animations and transitions are disabled when `prefers-reduced-motion: reduce` is active.

**Implementation strategy (applied globally):**
```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

This applies to:
- Card hover glow animations (Gaming)
- Card hover shadow transitions (Premium, Professional)
- Drawer slide-in animations
- Skeleton shimmer animations
- CTA hover glow (Gaming)
- Navigation underline draw animations (Gaming)
- Modal open/close transitions

**Functionality is preserved** — only the animation duration is collapsed to nearly zero. Elements still move to their final state; the transition simply becomes instant.

---

## 12. Horizontal Overflow Prevention

No page or component should produce a horizontal scrollbar at any breakpoint.

**Prevention rules:**

1. All containers use `max-width: 100%` or `width: 100%` by default
2. Images use `max-width: 100%; height: auto` or Tailwind `w-full`
3. Long text uses `overflow-wrap: break-word` for unbreakable strings
4. Specification table (ProductPage) uses `table-layout: auto; width: 100%; overflow-x: auto` with a wrapper for narrow viewports
5. No fixed pixel widths on elements that could exceed viewport width at mobile sizes
6. Active filter chips row (CatalogPage mobile) uses horizontal scroll: `overflow-x: auto; white-space: nowrap`

**Automated validation:** Playwright tests assert:
```js
expect(await page.evaluate(() =>
  document.documentElement.scrollWidth
)).toBeLessThanOrEqual(await page.evaluate(() => window.innerWidth));
```
at all three test viewports (390px, 768px, 1440px).

---

## 13. Shared Component Responsive Behavior

### Header

| Breakpoint | Behavior |
|------------|---------|
| Desktop ≥1024px | Full header: logo + nav links + search + cart + ThemeSwitcher; height 64–72px per theme |
| Tablet 768–1023px | Same as desktop; search may compress; nav links remain visible |
| Mobile ≤767px | Logo + hamburger + cart + ThemeSwitcher; nav links hidden; height 56–60px |

**Theme-specific notes:**
- Premium: 72px desktop, 60px mobile; 1px bottom border `#E5E0DB`; `backdrop-filter: blur(8px)` on scroll
- Gaming: 64px desktop, 56px mobile; 1px border `#1E1E2E`; `backdrop-filter: blur(12px)` on scroll
- Professional: 64px desktop, 56px mobile; `--shadow-sticky` on scroll

---

### Navigation

| Breakpoint | Behavior |
|------------|---------|
| Desktop ≥1024px | Horizontal, 4 links in header; active link with theme-specific underline |
| Mobile ≤767px | Hidden; revealed via hamburger drawer; full-height panel; each link ≥44px height |

Active link carries `aria-current="page"` on the item matching the current route's product type.

---

### SearchInput

| Breakpoint | Premium | Gaming | Professional |
|------------|:-------:|:------:|:------------:|
| Desktop ≥1024px | Compact visible input (hidden sm:flex) | Icon → SearchOverlay | Always-visible 300px input (hidden lg:flex) |
| Tablet 768–1023px | Same as desktop | Icon | May shrink or become icon |
| Mobile ≤767px | Icon → SearchOverlay | Icon → SearchOverlay | Icon → SearchOverlay |

Visible search inputs always have an associated accessible label (visually hidden `<label>` or `aria-label`).

---

### SearchOverlay

Shared across all themes on mobile and Gaming at all sizes.

| Property | Value |
|----------|-------|
| Position | Fixed, full width, top of viewport (z-index above header) |
| Backdrop | Semi-transparent `rgba(0,0,0,0.5)` or theme-appropriate overlay |
| Input | Full-width, auto-focused on open, placeholder "Search products..." |
| Close | Escape key; × icon button (≥44×44px) |
| Submit | Enter key or search icon button |
| State | On submit: apply `search=` to URL, close overlay, navigate or update catalog |

---

### ThemeSwitcher

| Breakpoint | Behavior |
|------------|---------|
| All | Compact dropdown button "[ThemeName] ▾"; right of header; ≥44×44px trigger |
| Mobile | Label may shorten to initials or icon if space is tight, but remains functional |

**Accessibility:** `aria-expanded`, `aria-haspopup="listbox"`, keyboard navigation (Enter/Space to open, arrow keys to navigate, Enter/Space to select, Escape to close). Active option has `aria-selected="true"`.

---

### CartBadge

| Breakpoint | Behavior |
|------------|---------|
| All | Icon + numeric count badge; always visible in header |
| Mobile | ≥44×44px tap target; badge position on icon unchanged |

`aria-label="Shopping cart, {N} items"` updated dynamically via Zustand `cartStore`.

---

### Footer

| Breakpoint | Behavior |
|------------|---------|
| Desktop ≥1024px | 4-column grid: Shop / Browse / Information / Contact |
| Tablet 768–1023px | 2×2 grid (2 columns × 2 rows) |
| Mobile ≤767px | Single column, stacked sections; Copyright bar below |

Theme-specific footer styles per `approved-design-guidance.md`. Footer links use React Router `<Link>` to supported routes only (see §Supported Routes for Footer).

**Supported routes for footer navigation:**
- Laptops → `/catalog?productTypeId=<laptop-id>`
- PCs → `/catalog?productTypeId=<pc-id>`
- Monitors → `/catalog?productTypeId=<monitor-id>`
- Peripherals → `/catalog?productTypeId=<peripheral-id>`
- Gaming Laptops, Ultrabooks, Desktop PCs, All Products → `/catalog` with appropriate params
- Logo / home links → `/`

Do not implement links to About, Privacy Policy, social media, email, or phone unless real targets exist in the application.

---

### Breadcrumbs

| Breakpoint | Behavior |
|------------|---------|
| Desktop ≥1024px | Full 4-segment: Home / Laptops / Gaming Laptop / APEX Gaming Laptop 15" |
| Tablet 768–1023px | Full segments; truncate with ellipsis if overflow |
| Mobile ≤767px | Show last 2 segments: "Gaming Laptop / APEX Gaming Laptop 15"" with leading "..." |

Accessible: `<nav aria-label="Breadcrumb">` with `aria-current="page"` on last item.

---

### ProductCard

The ProductCard is the same component across all pages and viewports. Only the grid column count changes.

| Property | All breakpoints |
|----------|----------------|
| Image aspect ratio | 4:3, `object-fit: cover` (catalog) or `object-contain` |
| Product name | Max 2 lines, `line-clamp-2` |
| Price | Always visible, never truncated |
| Badges | 2–3 badges; wrap to second row if needed |
| Availability | Always visible at rest |
| CTA button | Full-width, always visible (not hover-only) |

**Gaming mobile (2-column):** Cards are compact; image may be 50% of card height; ensure text remains readable at ~175px card width.

---

### ProductGrid

| Breakpoint | Premium | Gaming | Professional |
|------------|:-------:|:------:|:------------:|
| Desktop ≥1280px | 3 col | 3 col | 3 col |
| Desktop 1024–1279px | 3 col | 3 col | 3 col |
| Tablet 768–1023px | 2 col | 2 col | 2 col |
| Mobile ≤767px | 1 col | 2 col | 2 col |

Loading skeleton uses the same grid structure with `--skeleton-base` and `--skeleton-highlight` token colors per theme.

---

### AvailabilityIndicator

| Theme | All breakpoints |
|-------|----------------|
| Premium | "In stock" / "Out of stock" — DM Sans 12px `#5C5C5C` text, no dot, no color |
| Gaming | "IN STOCK" / "OUT OF STOCK" — Inter 11px 600 `#22D3EE` cyan, with cyan dot |
| Professional | 6px green dot + "In stock" text `#047857`; gray dot + "Out of stock" `#6B7280` |

Always visible at rest without hover. Text carries semantic meaning (never color-only).

---

### Buttons

| State | Requirement |
|-------|------------|
| Default | Per theme (graphite / purple-gradient / blue) |
| Minimum height | 44px (all themes use 48px) |
| Mobile full-width | Primary CTAs (CTA button, FilterDrawer Apply) are full-width on mobile |
| Disabled | `opacity: 0.5; cursor: not-allowed` |
| Focus ring | 2px visible ring; color per theme (graphite / cyan / blue) |

---

### Form Controls

Applies to: search inputs, quantity selector, sort dropdowns, filter radio buttons.

| Requirement | Value |
|-------------|-------|
| Minimum height | 44px for touch-reachable controls on mobile |
| Width on mobile | Full-width by default; sort select: full-width below result count |
| Labels | All inputs have associated visible or visually-hidden `<label>` |
| Focus ring | 2px visible ring, never suppressed |
| Quantity selector | `<input type="number">` or `<input type="text" inputmode="numeric">`; +/− buttons ≥44×44px each |

---

### Dialogs and Drawers

This applies to: FilterDrawer (mobile CatalogPage), mobile navigation drawer, ThemeSwitcher dropdown, cart summary (if implemented), mobile sticky CTA.

| Behavior | Requirement |
|----------|------------|
| Open trigger | Button with `aria-expanded` and `aria-controls` |
| Focus trap | Tab cycles within open dialog/drawer |
| Close | Escape key; × close button; backdrop tap (optional) |
| Focus restore | Returns to trigger element on close |
| Background scroll | Locked while drawer is open (`overflow: hidden` on `<body>`) |
| Animation | Slide-in direction: left for navigation/filter drawers; bottom for filter sheet on small mobile |
| Reduced motion | Animation collapses to instant show/hide |

---

## 14. HomePage Responsive Behavior

### Hero section

| Breakpoint | Layout |
|------------|--------|
| Desktop ≥1024px | Side-by-side: 50/50 (Premium) · 55/45 (Gaming) · 45/55 (Professional) |
| Tablet 768–1023px | Side-by-side compressed; image column min-width enforced |
| Mobile ≤767px | Stacked: headline + subheadline + CTA above, product image below |

On mobile, the hero image renders below the text at a fixed aspect ratio (4:3 or 16:9). The image is not hidden.

### Category section

| Breakpoint | Columns | Behavior |
|------------|:-------:|---------|
| Desktop ≥1024px | 4 | Full 4 category cards in a row |
| Tablet 768–1023px | 2 | 2×2 grid |
| Mobile ≤767px | 2 | 2×2 grid (compact) |

### Featured Products section

| Breakpoint | Columns |
|------------|:-------:|
| Desktop ≥1024px | 3 |
| Tablet 768–1023px | 2 |
| Mobile ≤767px | 1 (Premium) / 2 (Gaming, Professional) |

**6 products are shown at all breakpoints.** No products are hidden on mobile to simplify implementation.

---

## 15. CatalogPage Responsive Behavior

### Filter panel strategy

| Breakpoint | Behavior |
|------------|---------|
| Desktop ≥1024px | **FilterPanel** — persistent left sidebar (240–280px); always visible; not collapsible |
| Tablet 768–1023px | **FilterDrawer** — hidden by default; "Filters (N)" button in sort bar; opens from left or bottom |
| Mobile ≤767px | **FilterDrawer** — hidden by default; "Filters (N)" button; opens from bottom as a bottom sheet |

### Filter apply behavior

**Desktop FilterPanel (immediate):** Each radio selection immediately updates the URL `params.*` and triggers a new `GET /api/products` request. No Apply button needed — the user sees results update live.

**Mobile/Tablet FilterDrawer (deferred Apply):** Selections are staged within the drawer and do not trigger API calls until the user taps "Apply". This prevents unnecessary API requests while the user is browsing filter options.

| FilterDrawer behavior | Detail |
|-----------------------|--------|
| Open | Current applied filter state is loaded into the drawer |
| Stage selection | Modifying a radio group updates the staged (not applied) state |
| Apply button | Applies staged state to URL params; closes drawer; triggers one API call |
| Cancel / close | Discards staged state; reverts to applied state; closes drawer |
| Active filter count | Badge on the trigger button shows applied (not staged) filter count |

**State preservation across layout changes:** If the user resizes from mobile to desktop while FilterDrawer has staged (unapplied) selections, the staged state is discarded. The desktop FilterPanel shows the last applied filter state from URL params.

### Filter drawer focus management

| Event | Action |
|-------|--------|
| Open | Focus moves to first interactive element in drawer (close button or first filter group) |
| Close via Apply | Focus returns to "Filters" trigger button |
| Close via Cancel/Escape | Focus returns to "Filters" trigger button |
| Tab within drawer | Cycles through drawer elements only (focus trap active) |

### Sort bar

| Breakpoint | Behavior |
|------------|---------|
| Desktop ≥1024px | Result count (left) + sort control (right) on one row |
| Tablet 768–1023px | Same |
| Mobile ≤767px | Result count on first row; sort control full-width on second row |

### Active filter chips

| Breakpoint | Behavior |
|------------|---------|
| Desktop + Tablet | Full row of chips; wrap to second row if many |
| Mobile | Horizontally scrollable row; `overflow-x: auto` |

### Pagination

| Breakpoint | Behavior |
|------------|---------|
| Desktop + Tablet | Full: arrows + numbered buttons |
| Mobile | Simplified: ← previous page number → (e.g., "← 2 →") |

### Theme switching on CatalogPage

Theme switching preserves all URL state: `categoryId`, `productTypeId`, `search`, `sortBy`, `sortDir`, `page`, `params.*`. No new API request is triggered.

---

## 16. ProductPage Responsive Behavior

### Product detail layout

| Breakpoint | Layout |
|------------|--------|
| Desktop ≥1024px | Two-column: gallery (480–520px fixed) | product info (remaining width) |
| Tablet 768–1023px | Two-column compressed: gallery (~50%) + info (~50%) |
| Mobile ≤767px | Single column: gallery full-width → product info below |

### Image gallery

| Breakpoint | Main image | Thumbnails |
|------------|-----------|-----------|
| Desktop | Full left column; fixed height (500–600px) | Row below main image; 3 visible |
| Tablet | Full left column; shorter | Row below main image |
| Mobile | Full viewport width; `aspect-ratio: 1/1` or `4/3` | Horizontal scrollable row below image |

Selected thumbnail: highlighted with theme-specific 2px border. Clicking any thumbnail replaces the main image (React state, no URL change).

### Sticky purchase CTA (mobile)

An optional sticky "Add to Cart" bar may appear at the bottom of the viewport on mobile, containing the quantity selector and CTA button. Requirements:

| Requirement | Detail |
|-------------|--------|
| Trigger | Appears when the inline CTA button scrolls out of view |
| Content | Condensed: quantity selector + "Add to Cart" (or "ADD TO CART" for Gaming) |
| Position | Fixed at bottom; `z-index` above content |
| Accessibility | Does not obscure content; keyboard Tab order reaches inline CTA first, then sticky if visible |
| Dismiss | Returns to inline CTA when user scrolls the inline CTA back into view |
| Disabled state | Reflects `stock === 0` state identically to inline CTA |

**Implementation note:** The sticky CTA is optional. If implemented, it must not cover the technical specification table or any interactive element when keyboard focus is within that area. Consider omitting for initial implementation and adding in a refinement pass.

### Technical specification table

| Breakpoint | Behavior |
|------------|---------|
| All | Full-width within its container; `width: 100%` |
| Mobile | Wraps inside a `overflow-x: auto` container to prevent horizontal overflow if parameter names are long |

### Related products

| Breakpoint | Columns |
|------------|:-------:|
| Desktop ≥1024px | 3 cards in a row |
| Tablet 768–1023px | 2 cards |
| Mobile ≤767px | 1 column or horizontal scroll (2 cards partially visible) |

### State preservation on theme switch or resize

| State | Preserved |
|-------|-----------|
| Selected gallery image | Yes (React local state) |
| Quantity selector value | Yes (React local state) |
| Cart state | Yes (Zustand) |
| Theme | Yes (Zustand + localStorage) |

---

## 17. NotFoundPage Responsive Behavior

| Breakpoint | Behavior |
|------------|---------|
| Desktop ≥1024px | Centered content block (max-w-lg); comfortable vertical padding (80px+) |
| Tablet 768–1023px | Same centered layout; header may compress |
| Mobile ≤767px | Centered layout; 404 indicator scales to 56–72px; CTAs stack and go full-width; padding reduces to 48px |

Typography scaling for 404 indicator:
- Desktop: 96–120px
- Tablet: 72–96px
- Mobile: 56–72px

Both CTAs (Browse all products + Go to Home) are full-width on mobile, stacked vertically.