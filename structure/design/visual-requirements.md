# PCShop — Shared Visual Requirements

All three themes represent the **same product** — a computer hardware e-commerce store.
They are three visual interpretations of the same functionality, not three independent applications.

---

## 1. Product Identity and Target Audience

**Product:** PCShop — online store for computer hardware (PCs, laptops, monitors, peripherals).

**Target audience segments:**

| Theme | Primary audience |
|-------|-----------------|
| `professional` | General technology buyers, comparison shoppers, office IT buyers (25–55 years) |
| `premium` | Enthusiast buyers, design-conscious professionals, Apple-adjacent audiences (28–45 years) |
| `gaming` | Gamers, PC builders, hardware enthusiasts, streamers (16–35 years) |

**Shared user goals:**
1. Find the right product quickly (by type, category, parameter filtering)
2. Compare product specifications at a glance
3. Trust the store (pricing is clear, stock information is accurate, navigation is predictable)
4. Make a purchase decision with confidence

---

## 2. Shared UX Principles

These principles apply to all three themes without exception:

1. **Functional parity.** All pages, features, and interactions are available in all three themes. No feature is theme-exclusive.
2. **Predictable navigation.** Category, product, cart, and home are always reachable in ≤ 2 clicks.
3. **Progressive disclosure.** Most important information first (price, name, main image). Supporting details available without scrolling far.
4. **Error tolerance.** Users can recover from any state: empty search, no results, 404, out-of-stock.
5. **No dark patterns.** No fake countdown timers, no fake stock urgency, no misleading pricing. All themes equally honest.
6. **Performance first.** Visual richness does not justify slow page loads. The gaming theme may use glow effects, but not at the cost of LCP.

---

## 3. Visual Hierarchy

Shared visual hierarchy rules — the order of information prominence must be consistent:

**Product catalog card:**
1. Product image (largest element)
2. Product name
3. Price
4. Key parameters (badges)
5. Add to cart action

**Product detail page:**
1. Product image (dominant)
2. Product name + Price
3. Stock status
4. Add to cart CTA
5. Parameters / specifications
6. Description

**Category page (catalog):**
1. Active filter chips and result count (above grid)
2. Product grid
3. Filter sidebar (secondary navigation)
4. Pagination

---

## 4. Navigation Consistency

All three themes must implement identical navigation behavior, differentiated only by visual style:

- **Header:** Logo (left), navigation links (center or inline), cart icon, ThemeSwitcher (right)
- **Category navigation:** ProductType → Category hierarchy, accessible from header or sidebar
- **Breadcrumb:** Present on CatalogPage and ProductPage in all themes
- **Cart:** Accessible from every page via header icon
- **404 recovery:** Always includes a clear link back to homepage or catalog
- **Mobile navigation:** Hamburger icon opens the same full-nav panel across all themes

---

## 5. Shared Functional Requirements

These requirements are non-negotiable and preserved from `structure/project.md`:

- Product filtering by productTypeId, categoryId, parameter values (params.key=value)
- Full-text search by product name (ILIKE)
- Sorting by price, name, createdAt (ascending/descending)
- Pagination with configurable limit (default 20, max 100)
- Product detail page with full parameters, images, price, stock count
- Dynamic filter values loaded from `/api/categories/:id/parameters/:key/values`
- Cart state (add, remove, quantity) — client-side via Zustand (no backend order management)
- Theme switching without state reset or API re-fetch
- Theme persistence across browser sessions (localStorage)

---

## 6. Responsive Design Principles

**CSS breakpoints (identical across all themes):**

| Breakpoint | Width | Layout type |
|------------|-------|-------------|
| Mobile | ≤ 767px | Single column, stacked layout |
| Tablet | 768px – 1023px | Two column, collapsed navigation |
| Desktop | ≥ 1024px | Full multi-column, sidebar navigation |

> **Note — screenshot viewports vs CSS breakpoints:**
> Visual regression tests capture screenshots at fixed viewport widths (390px / 768px / 1440px)
> for reproducibility. These are **test viewports**, not CSS breakpoint boundaries.
> CSS breakpoints use range-based media queries; test viewports are single-point measurements
> chosen to represent each range. Do not define CSS breakpoints at exactly 390/768/1440.

**Shared responsive rules:**
- Filter sidebar collapses to a drawer on mobile and tablet (triggered by a button)
- Navigation collapses to hamburger on mobile
- Product grid adapts: 3–4 col → 2 col → 1–2 col
- Typography scales down (see per-theme specs)
- Touch targets ≥ 44×44px on all touch breakpoints
- No horizontal overflow at any breakpoint
- Images maintain aspect ratio via `aspect-ratio` CSS or `object-fit: cover`

---

## 7. Accessibility Requirements

Minimum requirements for all three themes:

| Requirement | Standard |
|-------------|----------|
| Text contrast (normal text) | WCAG AA: ≥ 4.5:1 |
| Text contrast (large text: ≥ 24px regular, or ≥ 18.67px bold) | WCAG AA: ≥ 3:1 |
| Focus ring | Always visible, 2px minimum, never `outline: none` without replacement |
| Interactive target size | ≥ 44×44px on mobile |
| Keyboard navigation | All interactive elements reachable and operable via keyboard |
| Screen reader | Meaningful alt text, aria-labels, ARIA roles for custom components |
| Reduced motion | `prefers-reduced-motion: reduce` disables all CSS animations and transitions |
| Color independence | Interactive states not conveyed by color alone (always paired with shape/text/icon) |

---

## 8. Product Photography Requirements

All themes share the same photography asset base. Photography treatment (background color, overlay, cropping style) is theme-specific and defined in individual theme docs.

**Shared photography requirements:**
- Minimum resolution: 800×800px for catalog cards, 1200×900px for detail hero
- Format: WebP with JPEG fallback
- Consistent naming: `<productSlug>-<index>.webp`
- Multiple images per product: supported, minimum 1, typical 2–4
- Placeholder: theme-specific color (see token `--color-bg-subtle` per theme)
- Loading: `loading="lazy"` for below-fold images, `loading="eager"` for above-fold hero

---

## 9. Theme Switching Experience

**Mechanism:** CSS custom property swap via `data-theme` attribute on `<html>`.

**Behavioral requirements (all themes):**
- Switching is instantaneous — no loading state, no fade transition between themes
- Cart item count preserved after switch
- Applied filter parameters preserved after switch
- Current page and scroll position preserved after switch
- No API requests triggered by theme switch
- ThemeSwitcher component is visible in the header on all pages

**Persistence:**
- Selected theme stored in `localStorage` key: `pcshop-theme`
- Read on app initialization before first render
- Invalid or missing value: fall back to `professional`

---

## 10. Consistency of User Interactions

The following interaction patterns are identical across all themes (only visual style varies):

| Interaction | Shared behavior |
|-------------|----------------|
| Add to cart | Cart count increments in header, no page navigation |
| Filter apply | Product grid updates, URL query params update, page resets to 1 |
| Search | Triggers on input (debounced 300ms), result count updates |
| Sort change | Product grid re-fetches, page resets to 1 |
| Pagination | Page number in URL, scroll to top of grid |
| Product card click | Navigates to `/products/:id` |
| Filter chip dismiss | Removes filter, re-fetches |
| Theme switch | CSS swap, no state changes |

---

## 11. Loading, Empty, Error, and Disabled States

All pages and components must handle all four states explicitly in all themes.

### Loading State
- Product grid: Skeleton cards (same layout as real cards, no content)
- Product detail: Skeleton layout matching the two-column structure
- Category nav: Skeleton pills
- Filter panel: Skeleton filter groups
- **No spinner-only states** for content areas — always use layout-matched skeletons

### Empty State
- Product grid with active filters: Illustration (or icon) + "No products match your filters" + "Clear filters" link
- Product grid no results (search): "No products found for '{query}'" + search suggestion
- Cart empty: Appropriate message + "Browse products" CTA

### Error State
- Failed API request: "Something went wrong" message + "Try again" button (triggers re-fetch)
- Product not found (404 from API): Redirect to NotFoundPage
- Network offline: Persistent error banner at top of page

### Disabled State
- Out-of-stock product: "Add to cart" button disabled, visually dimmed, "Out of stock" label
- Unavailable filter option (0 products): Option shown but dimmed, non-interactive
- Disabled form inputs: Reduced opacity (0.5), cursor: `not-allowed`

---

## 12. Shared Page Requirements

### HomePage

**Required sections (all themes):**
1. Hero banner with headline, subheadline, and primary CTA
2. Featured product types (ProductType list as navigation cards)
3. Featured products section (curated or top-rated, 4–8 products)
4. Header and Footer

**Shared behavior:**
- Featured product type cards navigate to `/catalog?productTypeId=<id>`
- Featured product cards navigate to `/products/:id`
- Hero CTA navigates to `/catalog`

---

### CatalogPage

**Required sections (all themes):**
1. Page header (breadcrumb + result count + sort)
2. Filter sidebar (desktop) / filter trigger button (mobile)
3. Product grid with pagination
4. Active filter chips above grid

**URL state (preserved across theme switches):**
- `productTypeId`, `categoryId`, `search`, `sortBy`, `sortDir`, `page`, `params.*`

---

### ProductPage

**Required sections (all themes):**
1. Breadcrumb
2. Product image gallery
3. Product name, price, stock status
4. Add to cart (with quantity)
5. Product parameters / specifications
6. Product description

---

### NotFoundPage

**Required elements (all themes):**
1. Clear "404" or "Page Not Found" indication
2. Brief human-readable explanation
3. Navigation CTA back to home or catalog

---

## 13. Theme Comparison Matrix

| Dimension | `premium` | `gaming` | `professional` |
|-----------|-----------|----------|----------------|
| **Background** | Warm off-white `#FAFAF8` | Near-black `#0A0A0F` | Light gray `#F3F4F6` |
| **Surface (cards)** | Pure white `#FFFFFF` | Dark elevated `#111118` | White `#FFFFFF` |
| **Primary accent** | Graphite `#1A1A1A` | Purple `#8B5CF6` | Blue `#2563EB` |
| **Secondary accent** | — | Cyan `#22D3EE` | Graphite `#374151` |
| **Typography** | Playfair Display + DM Sans | Rajdhani + Inter | Inter only |
| **Display font size** | 56px | 72px | 40px |
| **Spacing density** | Loose (xl: 40px) | Medium (xl: 36px) | Balanced (xl: 32px) |
| **Layout density** | Low — generous whitespace | Medium — more products visible | Medium-high — maximum info |
| **Product card image %** | ≥ 55% of card height | ≈ 50–55% | ≈ 50% |
| **Card border radius** | 4px | 6px | 8px |
| **Shadows** | Soft natural shadows | Glow effects (purple/cyan) | Standard box shadows |
| **Animation speed** | Slow (250–400ms) | Fast (100–180ms) | Moderate (100–160ms) |
| **Photography style** | White/neutral studio | Dark studio / composited | White/light studio |
| **Product grid (desktop)** | 3 columns | 4 columns | 3 columns (toggle to 4) |
| **Hero height (desktop)** | 520px | 580px | 420px |
| **Hero layout** | 50/50 image+text | Full-width dark + overlay | 55/45 image+text |
| **CTA button style** | Rectangular, graphite fill | Gradient purple, glow | Rounded rect, blue fill |
| **Filter panel style** | Minimal, blends with bg | Dark sidebar, strong border | White card, gray border |
| **Navigation style** | Sparse, typographic | Dense, glow on active | Standard, blue active |
| **Footer** | Dark typographic | Deep black + accent line | Dark gray, conventional |

---

## 14. CSS Tokens vs. React Presentation Variants

### Differences achievable with CSS custom properties only (no React variants needed):

- All color changes (backgrounds, text, borders, accents)
- All typography changes (font family, size, weight, tracking) — via `@import` + font-family tokens
- Spacing and density changes
- Border radius
- Box shadows and glow effects
- Animation durations and easings
- Filter sidebar background and border
- Button colors and gradients
- Badge colors

### Cases that may require theme-specific React presentation variants:

| Component | Reason for potential variant |
|-----------|------------------------------|
| `ProductCard` | Gaming uses full-bleed image with gradient overlay and always-visible CTA; premium uses hover-reveal CTA with different image treatment |
| `HeroBanner` | Gaming has a background with decorative elements (grid pattern, angular accent lines) that differ in structure from the clean split layout of premium/professional |
| `FilterPanel` | Professional may include list/grid view toggle that gaming and premium do not need |
| `ThemeSwitcher` | Itself must render correctly in all themes — may have theme-specific visual state |

**Decision principle:** Default to CSS tokens. Only introduce a React variant when the layout *structure* (not just the visual style) differs between themes. Visual variants (different padding, colors, shadows) are always CSS.

---

## 15. Potential Conflicts and Risks

### Risk 1: Glow effects in `gaming` vs accessibility
- **Issue:** Purple and cyan glow effects may reduce perceived contrast of adjacent text.
- **Mitigation:** Glow is applied to container elements and decorative borders — never to text itself. Text always sits on a solid background, not on a glow surface.

### Risk 2: Generous spacing in `premium` vs compact in `professional`
- **Issue:** If spacing tokens diverge too much, shared components may break at extreme values.
- **Mitigation:** Define min/max constraints for spacing tokens. Components must be tested at all three density levels during development.

### Risk 3: Dark `gaming` background vs shared Skeleton component
- **Issue:** A Skeleton that looks correct on a light background (`#F3F4F6` shimmer) will be invisible on a dark gaming surface.
- **Mitigation:** Skeleton shimmer colors must be token-based: `--skeleton-base` and `--skeleton-highlight` defined per theme.

### Risk 4: `Playfair Display` serif headings vs `Inter` body in `premium`
- **Issue:** Font mixing introduces visual tension. Hierarchy must be very clear to avoid "two fonts fighting."
- **Mitigation:** Playfair Display used exclusively for Display and H1/H2 headings. DM Sans for all UI text. Never mixed at the same visual level.

### Risk 5: Font loading on theme switch
- **Issue:** If non-default theme fonts are not loaded before first use, switching to `premium` (Playfair Display) or `gaming` (Rajdhani) may cause a FOUT (flash of unstyled text).
- **Mitigation:** Use **theme-aware lazy font loading**, not full upfront preload of all fonts:
  1. At app startup: load only the default theme font (`Inter` for `professional`)
  2. After initial render (`requestIdleCallback`): prefetch `Playfair Display` and `Rajdhani` font files
  3. On first theme switch: font is either already prefetched or loaded on demand; `font-display: optional` or `swap` with stable fallback stack minimises layout shift
  4. Loaded font files are cached by the browser — subsequent switches are instant
  - This approach avoids blocking the initial render on fonts the user may never need.

---

## 16. Theme Switching Is CSS-Only Where Possible

Business state and server data **must remain unchanged** across theme switches:
- TanStack Query cache is not invalidated
- Zustand cart and filter stores are not reset
- React component tree is not unmounted/remounted
- URL query parameters are not changed

Theme-specific React presentation variants (if any, see section 14) **will re-render** when the theme changes, because they swap the active variant component. This is expected and acceptable as long as:
- The variant component receives the same props and renders equivalent semantic HTML
- No business state is stored inside the variant component (state lives in hooks/stores)
- The re-render is fast and imperceptible to the user
