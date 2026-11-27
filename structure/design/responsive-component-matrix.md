# PCShop — Responsive Component Matrix

**Version:** 1.0 (2026-11-27)
**Status:** Specification — validate at implementation
**Reference:** `responsive-design.md`, all nine `approved-design-guidance.md` files

---

## How to read this matrix

Each entry covers one shared component or page section. Columns:

| Column | Meaning |
|--------|---------|
| **Desktop** | Behavior at ≥1024px |
| **Tablet** | Behavior at 768–1023px |
| **Mobile** | Behavior at ≤767px |
| **Theme differences** | Only differences — shared behavior is noted once |
| **Shared functionality** | Behavior identical across all three themes |
| **Accessibility** | Requirements for all viewports unless noted |
| **State preservation** | What must survive a viewport resize or theme switch |
| **Implementation note** | Guidance for the React implementation |
| **Validation criteria** | How to confirm correct behavior in Playwright |

**Presentation variant required** = the component needs different JSX structure or significant layout branching, not just CSS breakpoint variants.

---

## 1. Header

| Attribute | Detail |
|-----------|--------|
| **Desktop** | Full horizontal bar: Wordmark (left) · Navigation links (center) · Search + CartBadge + ThemeSwitcher (right). Fixed or static depending on page. All elements visible. |
| **Tablet** | Same horizontal layout. Navigation links remain visible (5 items fit at 768px). Search may compress to icon-only depending on theme. No hamburger at tablet width. |
| **Mobile** | Compressed: Wordmark (left) · CartBadge + Hamburger menu button (right). Navigation links hidden; replaced by mobile nav drawer. SearchInput hidden; accessible via icon button that opens SearchOverlay. |
| **Theme differences** | Premium: `max-w-1280px` container, light `#FAFAF8` background, 80px desktop gutter. Gaming: dark `#0A0A0F` background, `max-w-1360px`, accent line decoration optional. Professional: light `#F3F4F6` background, `max-w-1320px`, clean divider. |
| **Shared functionality** | Wordmark links to `/`. Cart badge shows count from Zustand cartStore. ThemeSwitcher always visible and functional. Keyboard-navigable. |
| **Accessibility** | `<header>` landmark. Navigation in `<nav aria-label="Main navigation">`. Hamburger button: `aria-label="Open navigation menu"` / `aria-expanded`. Focus ring on all interactive elements. |
| **State preservation** | Active nav item (determined by current route, not stored state). Cart count preserved across viewport changes. Active theme preserved. |
| **Implementation note** | Single `<Header>` component. Mobile drawer toggled via `useState`. CSS breakpoints control visibility of nav links vs hamburger. Do not duplicate the component for breakpoints. |
| **Validation criteria** | At 390px: nav links not visible, hamburger visible, cart badge visible. At 1024px+: nav links visible, hamburger not visible. No horizontal overflow at any width. |
| **Presentation variant** | No — CSS breakpoints sufficient. |

---

## 2. Navigation (Desktop Nav Links)

| Attribute | Detail |
|-----------|--------|
| **Desktop** | Horizontal list: Laptops · PCs · Monitors · Peripherals. Each item is a link to `/catalog?category=<slug>`. Active item visually indicated (theme-specific underline or border). |
| **Tablet** | Identical to desktop — all 4 links remain visible and horizontal. |
| **Mobile** | Hidden. Replaced by NavigationDrawer (see §14). Links appear in the drawer as a vertical list. |
| **Theme differences** | Premium: underline-on-hover, `#1A1A1A` text, active underline `#1A1A1A`. Gaming: `#F0F0FF` text UPPERCASE, active cyan bottom border `#22D3EE`. Professional: `#374151` text, active `#2563EB` bottom border `2px`. |
| **Shared functionality** | Category slug values match `GET /api/categories` responses. No active item on NotFoundPage. Keyboard focus traversal via Tab key. |
| **Accessibility** | Each link is a native `<a>` element. Active item: `aria-current="page"` on the matching link. Focus ring visible in all 3 themes. |
| **State preservation** | URL-derived — no stored nav state. Active item recalculated on route change. |
| **Implementation note** | Active state determined from `useLocation()` matching the category query param. Do not store active nav in Zustand. |
| **Validation criteria** | At 390px: nav links not visible, hamburger shown. At 768px+: all 4 links visible. Active link visually distinct for all 3 themes. |
| **Presentation variant** | No — CSS controls visibility; active state via conditional className. |

---

## 3. SearchInput

| Attribute | Detail |
|-----------|--------|
| **Desktop** | Visible inline text input in the header. Premium: compact (≈180px), rounded pill, `#FAFAF8` on light bg. Gaming: dark-surface card, 240px. Professional: 300px always-visible, `border #E5E7EB`. |
| **Tablet** | Same as desktop — remains visible. May compress slightly in horizontal space. |
| **Mobile** | Hidden from header. Replaced by a search icon button (`aria-label="Open search"`). Tapping opens SearchOverlay (see §4). |
| **Theme differences** | Premium: pill shape `border-radius: 9999px`. Gaming: dark surface with cyan focus ring. Professional: rectangular, light border. |
| **Shared functionality** | On submit (Enter or search button click): navigate to `/catalog?search=<query>`. Input value cleared after navigation. |
| **Accessibility** | `role="search"` wrapper. `<input type="search">` with `aria-label="Search products"` or `<label>`. Focus ring visible. |
| **State preservation** | Search query in URL (`?search=`). Zustand filterStore holds active query. Viewport resize does not clear the search query. |
| **Implementation note** | Mobile icon button opens SearchOverlay via state toggle — do not render two separate `<input>` elements. Control visibility with CSS. |
| **Validation criteria** | At 390px: search icon button visible, input field not visible. At 768px+: input field visible. SearchOverlay opens on icon tap at mobile. |
| **Presentation variant** | No for the input itself; SearchOverlay is a separate component (§4). |

---

## 4. SearchOverlay

| Attribute | Detail |
|-----------|--------|
| **Desktop** | Not used at desktop — search is always visible inline. |
| **Tablet** | Not used at tablet unless horizontal space forces icon-only mode. |
| **Mobile** | Full-width overlay or modal that covers the header area. Contains a full-width `<input type="search">` and a close button. Keyboard focus moves to the input on open. |
| **Theme differences** | Premium: white overlay, Playfair placeholder text, DM Sans input text. Gaming: dark `#0A0A0F` overlay, cyan focus ring on input. Professional: white/light overlay, blue focus ring. |
| **Shared functionality** | Opens on search icon button tap. Closes on Escape key, close button tap, or successful search. Submitting navigates to `/catalog?search=<query>`. |
| **Accessibility** | `role="dialog"` with `aria-label="Search"`. Focus trap while open (focus stays within overlay). `aria-expanded` on the trigger button. Close button: `aria-label="Close search"`. |
| **State preservation** | Overlay open state is local to the component (`useState`). The search query submitted is preserved in the URL. |
| **Implementation note** | Overlay toggled by shared state in Header or via context. Escape key listener attached on open, removed on close. Focus restored to the trigger button on close. |
| **Validation criteria** | At 390px: tapping search icon shows overlay; input receives focus; Escape closes; navigation occurs on submit. At 1024px+: overlay does not appear (not needed). |
| **Presentation variant** | Yes — SearchOverlay is a distinct component used only on mobile, rendered conditionally. |

---

## 5. ThemeSwitcher

| Attribute | Detail |
|-----------|--------|
| **Desktop** | Compact button/dropdown in the header. Shows active theme name. Clicking opens a listbox with all 3 theme options. |
| **Tablet** | Identical to desktop — same compact button. |
| **Mobile** | Identical layout and behavior — rendered in the mobile navigation drawer if horizontal space is insufficient in the header; otherwise remains in header at reduced size. |
| **Theme differences** | Premium: `#1A1A1A` text, light dropdown, checkmark on active. Gaming: dark dropdown, cyan accent on active item, UPPERCASE labels. Professional: light dropdown, blue `bg` on active option. |
| **Shared functionality** | Switching theme updates Zustand themeStore and localStorage. `data-theme` attribute on `<html>` changes instantly. No page reload. |
| **Accessibility** | `role="listbox"` on the dropdown. `role="option"` per item. `aria-selected="true"` on active theme. `aria-label="Select theme"` on trigger button. Focus ring on trigger and options. All 3 options keyboard-reachable. |
| **State preservation** | Active theme persists to localStorage. Must survive hard refresh. After viewport resize or navigation, active theme unchanged. |
| **Implementation note** | Standardize ARIA to `role="listbox"` / `role="option"` across all themes (correction I3 from design-phase-summary.md). Dropdown closes on outside click and Escape. |
| **Validation criteria** | Theme switches on click/Enter. `data-theme` changes on `<html>`. localStorage updated. Dropdown closes on Escape. Active option has `aria-selected="true"`. Visible at 390px, 768px, 1440px. |
| **Presentation variant** | No — CSS tokens and conditional className handle all 3 themes. |

---

## 6. CartBadge

| Attribute | Detail |
|-----------|--------|
| **Desktop** | Icon button in header (right side). Shows numeric count badge over cart icon. Badge hidden when count is 0. |
| **Tablet** | Identical to desktop. |
| **Mobile** | Identical — present in the compressed header at mobile width. |
| **Theme differences** | Premium: graphite `#1A1A1A` badge background. Gaming: purple `#8B5CF6` badge. Professional: blue `#2563EB` badge. |
| **Shared functionality** | Count from Zustand cartStore. Clicking navigates to cart (or opens cart drawer if implemented). `aria-label="Cart, {count} items"`. |
| **Accessibility** | `aria-label` dynamically reflects current count (`"Cart, 3 items"`). Badge count visually present. Screen reader reads from aria-label, not the badge span. Badge span: `aria-hidden="true"`. |
| **State preservation** | Count persists in Zustand (not reset on navigation, theme switch, or viewport change). |
| **Implementation note** | Do not store badge position in separate responsive components — one CartBadge, CSS handles layout. |
| **Validation criteria** | Badge count matches cartStore at all viewports. Badge visible at 390px, 768px, 1440px. aria-label reflects actual count. |
| **Presentation variant** | No — CSS tokens. |

---

## 7. Footer

| Attribute | Detail |
|-----------|--------|
| **Desktop** | 4-column grid: Shop / Browse / Information / Contact. Copyright bar below. Max-width container centered. |
| **Tablet** | 2×2 grid (2 columns × 2 rows). Column order preserved. Copyright bar below. |
| **Mobile** | Single column stacked. Each section is a collapsed accordion or always-expanded list (design decision: always expanded to avoid hiding navigation). Copyright bar below the last section. |
| **Theme differences** | Premium: `#2D2A27` dark footer surface, warm text. Gaming: `#0A0A0F` footer with optional top gradient line. Professional: `#1F2937` dark footer, light text. |
| **Shared functionality** | Only supported routes linked: `/` (Home), `/catalog` (Shop), `/catalog?category=<slug>` per supported category. External and unsupported links must not be implemented. |
| **Accessibility** | `<footer>` landmark. `<nav aria-label="Footer navigation">` for link columns. Heading for each column (`<h3>` or `<h4>`). Links are native `<a>` elements. |
| **State preservation** | Footer has no stored state. |
| **Implementation note** | CSS Grid `grid-template-columns: repeat(4, 1fr)` → `repeat(2, 1fr)` → `1fr` using Tailwind breakpoints. Do not build separate footer components per viewport. |
| **Validation criteria** | At 1440px: 4 columns side by side. At 768px: 2×2 layout or 2 columns. At 390px: single column, all links accessible, no overflow. |
| **Presentation variant** | No — CSS grid reflow. |

---

## 8. Breadcrumbs

| Attribute | Detail |
|-----------|--------|
| **Desktop** | Horizontal single-line breadcrumb: Home / {Product Type} / {Category} / {Product Name}. Separator character (> or /) between segments. Full text, no truncation. |
| **Tablet** | Identical to desktop. |
| **Mobile** | May wrap to 2 lines or truncate the middle segments with ellipsis. Last segment (current page) always shown in full. First segment (Home) always shown. Middle segments may be condensed. |
| **Theme differences** | Premium: DM Sans 12px, `#8A8A8A` text, `#5C5C5C` separator. Gaming: Inter 12px, `#A0A0C0` text, `#5B5B7B` separator, UPPERCASE last segment. Professional: Inter 12px, `#6B7280` text, `#9CA3AF` separator. |
| **Shared functionality** | 4 segments: Home / {ProductTypeName} / {CategoryName} / {ProductName}. Segments 1–3 are links. Segment 4 (`aria-current="page"`) is not a link. Data sourced from product API and categories API. |
| **Accessibility** | `<nav aria-label="Breadcrumb">` → `<ol>` → `<li>` per segment. Last item: `aria-current="page"`. Visible in all 3 themes. |
| **State preservation** | Derived from URL and API data — no stored breadcrumb state. |
| **Implementation note** | Build from `useLocation` + product data. Category name fetched from `GET /api/categories/:id`. |
| **Validation criteria** | At 390px: breadcrumb does not cause horizontal overflow; last segment visible; Home link works. At 1440px: all 4 segments visible in one line. |
| **Presentation variant** | No — CSS handles truncation. |

---

## 9. ProductCard

| Attribute | Detail |
|-----------|--------|
| **Desktop** | Card with product image (top, 16:9 or 4:3), product name, price, availability, 1–2 parameter badges, and optional "View product" CTA. Full image, no cropping. |
| **Tablet** | Same card structure. Cards may shrink (fewer columns → wider cards) or maintain similar proportions. Image proportion maintained. |
| **Mobile** | 2-column grid (or 1-column on very narrow screens). Cards compressed: smaller image, name text may wrap to 2 lines, badges may stack vertically. CTA remains visible. |
| **Theme differences** | Premium: white card `#FFFFFF`, subtle shadow, `border-radius: 2px`, Playfair product name. Gaming: dark card `#16161E`, cyan badge text, Rajdhani name UPPERCASE, purple hover. Professional: white card, `border #E5E7EB`, `border-radius: 8px`, Inter name, green availability dot. |
| **Shared functionality** | Clicking card navigates to `/products/:id`. Image placeholder shown when `imageUrls[]` is empty. Availability indicator always text-accompanied (not color-only). |
| **Accessibility** | Entire card is a link or card has a named link (`aria-label="{product name}"`). Image has `alt="{product name}"`. Availability text always readable by screen reader. |
| **State preservation** | No card-level state. Cart updates happen through the ProductPage. |
| **Implementation note** | ProductCard requires theme-specific presentation variants: Gaming uses full-bleed dark image treatment; Premium uses light card with generous padding; Professional uses bordered card. Use `theme` context to select the correct variant. |
| **Validation criteria** | At 390px: 2 columns, no overflow, image visible, name readable, CTA tappable (≥44px). At 1440px: columns per theme spec (3 or 4). Price always visible. |
| **Presentation variant** | **Yes** — Gaming variant has structurally different image treatment. Consider `ProductCardPremium`, `ProductCardGaming`, `ProductCardProfessional` or a single component with significant conditional rendering. |

---

## 10. ProductGrid

| Attribute | Detail |
|-----------|--------|
| **Desktop** | CSS Grid. Premium: 3 columns. Gaming: 4 columns. Professional: 3 columns. |
| **Tablet** | 2 columns for all 3 themes. |
| **Mobile** | 2 columns for all 3 themes. Very narrow screens (≤320px): 1 column fallback if content overflows. |
| **Theme differences** | Only column count differs at desktop (Gaming 4 vs others 3). Gap also differs: Premium 24px, Gaming 20px, Professional 24px. |
| **Shared functionality** | Renders a list of `<ProductCard>` components. Displays skeleton cards during loading state. Displays empty state message when no products match filters. Displays error state with "Try again" action on API failure. |
| **Accessibility** | `<ul>` list semantics for the grid. Each card is a `<li>`. Loading state: `aria-busy="true"` on the grid. Screen reader announces number of results when filters change (`aria-live="polite"` on a result-count span). |
| **State preservation** | Product list reloads from API after filter/sort/page change. No local card state. |
| **Implementation note** | Grid columns via Tailwind: `grid-cols-2 lg:grid-cols-3` (Premium/Professional), `grid-cols-2 lg:grid-cols-4` (Gaming). `gap` token per theme. Do not use a fixed column class — drive from theme token. |
| **Validation criteria** | At 390px: 2 columns (all 3 themes). At 1440px: 3 or 4 columns per theme. No horizontal overflow. Skeleton cards shown during loading. Empty state message shown when no results. |
| **Presentation variant** | No — CSS Grid with theme-specific column count via token. |

---

## 11. AvailabilityIndicator

| Attribute | Detail |
|-----------|--------|
| **Desktop** | Inline element next to price or below the product name. Text always present. |
| **Tablet** | Identical to desktop. |
| **Mobile** | Identical layout and behavior. |
| **Theme differences** | Premium: `"In stock"` / `"Out of stock"` text only, `#5C5C5C` / `#8A8A8A`. Gaming: cyan dot `#22D3EE` + `"IN STOCK"` / purple-dimmed `"OUT OF STOCK"` UPPERCASE. Professional: green dot `#059669` + `"In stock"` / red dot `#DC2626` + `"Out of stock"`. |
| **Shared functionality** | Derives state from `product.stock > 0`. Text always accompanies any color dot. Never uses color alone to convey availability (accessibility requirement). |
| **Accessibility** | Text is always present alongside any decorative dot. Dot: `aria-hidden="true"`. Screen reader reads the text label. |
| **State preservation** | Derived from live product data — not stored independently. |
| **Implementation note** | Single `<AvailabilityIndicator stock={product.stock} />` component with theme-specific rendering via CSS tokens and conditional class. |
| **Validation criteria** | In-stock: correct text and optional dot visible in all 3 themes. Out-of-stock: correct text visible. Dot `aria-hidden="true"`. Works at all 3 viewports. |
| **Presentation variant** | No — CSS tokens and conditional class. |

---

## 12. Buttons (Primary, Secondary, Ghost, Destructive)

| Attribute | Detail |
|-----------|--------|
| **Desktop** | Inline or block depending on context. Standard height: 48px for primary CTA. |
| **Tablet** | Identical to desktop in most contexts. |
| **Mobile** | Full-width (`w-full`) in single-column contexts (NotFoundPage, mobile product CTA). Standard width in grid/card contexts. |
| **Theme differences** | Premium: graphite `#1A1A1A` fill, 4px radius, DM Sans 600. Gaming: purple gradient `#8B5CF6 → #5516BE`, 6px radius, Rajdhani 700 UPPERCASE. Professional: blue `#2563EB` fill, 6px radius, Inter 600. |
| **Shared functionality** | Minimum height 48px for primary actions. `disabled` state: reduced opacity, `cursor-not-allowed`, `aria-disabled="true"`. Loading state: spinner visible inside button, `aria-busy="true"`. |
| **Accessibility** | Native `<button>` element (never `<div role="button">`). Focus ring visible in all 3 themes. `aria-label` when button text is icon-only. ≥44×44px tap target on mobile. |
| **State preservation** | Button loading/disabled state is derived from parent context (e.g., cart mutation pending). Not stored in Zustand. |
| **Implementation note** | Base `<Button>` component with `variant` prop (`primary | secondary | ghost`), `size` prop (`sm | md | lg`), `fullWidth` prop for mobile contexts. Theme styles via CSS tokens. |
| **Validation criteria** | Primary button ≥44px height at 390px. Focus ring visible in keyboard navigation for all 3 themes. Disabled state visually distinct. `fullWidth` renders `w-full` on mobile. |
| **Presentation variant** | No — CSS tokens. |

---

## 13. Form Controls (Input, Select, Checkbox, Radio)

| Attribute | Detail |
|-----------|--------|
| **Desktop** | Standard height inputs (40–44px). Labels above inputs. Radio buttons in `<fieldset><legend>` groups (CatalogPage filter sections). |
| **Tablet** | Identical to desktop. |
| **Mobile** | Full-width inputs in single-column layouts. Touch-friendly height ≥44px. `font-size: 16px` minimum to prevent iOS auto-zoom on focus. |
| **Theme differences** | Premium: minimal border, light background, Playfair or DM Sans labels. Gaming: dark surface inputs, cyan focus ring. Professional: standard light inputs, blue focus ring `#2563EB`. |
| **Shared functionality** | All inputs have associated `<label>` or `aria-label`. Focus ring visible. Error state shows error message below the input. Disabled state reduces opacity. |
| **Accessibility** | `<fieldset><legend>` for radio button groups (filter sections). `aria-invalid="true"` on inputs with validation errors. Error messages in `role="alert"` or referenced by `aria-describedby`. Minimum font size 16px on mobile to prevent zoom. |
| **State preservation** | Filter radio button selections stored in Zustand filterStore. Not cleared on viewport change or theme switch. |
| **Implementation note** | CSS custom property for focus ring color (`--color-focus-ring`). `font-size: 1rem` on all inputs to prevent iOS zoom. |
| **Validation criteria** | At 390px: inputs full-width, min-height 44px, font-size ≥16px, no horizontal overflow. Radio groups have fieldset/legend. Focus ring visible at all viewports for all 3 themes. |
| **Presentation variant** | No — CSS tokens. |

---

## 14. Dialogs and Drawers (NavigationDrawer, FilterDrawer, SearchOverlay)

| Attribute | Detail |
|-----------|--------|
| **Desktop** | NavigationDrawer: not used. FilterDrawer: not used (FilterPanel sidebar used instead). SearchOverlay: not used (SearchInput inline in header). |
| **Tablet** | NavigationDrawer: not used (nav links remain visible). FilterDrawer: **used** — slides in from left or bottom. |
| **Mobile** | All three used: NavigationDrawer (from left or top), FilterDrawer (from left or bottom), SearchOverlay (full-width header takeover). |
| **Theme differences** | Same drawer structure; themed with background color, border/accent colors, and typography per theme. Gaming: dark overlay. Premium: warm white drawer. Professional: light gray drawer. |
| **Shared functionality** | Opens via trigger button. Closes via close button, Escape key, or overlay backdrop tap. While open: focus trapped inside drawer. When closed: focus returns to the trigger button. `aria-modal="true"` on drawer. `inert` or `aria-hidden` on background content while drawer is open. |
| **Accessibility** | `role="dialog"` with `aria-label` or `aria-labelledby`. Focus trap while open. Escape key closes. Close button: `aria-label="Close {drawer name}"`. Trigger button: `aria-expanded` state updated. Screen reader announces dialog name on open. |
| **State preservation** | FilterDrawer staged selections stored in local component state (not committed to filterStore until Apply is tapped). NavigationDrawer has no preserved state. SearchOverlay: query on submit goes to URL. |
| **Implementation note** | Shared `<Drawer>` primitive handles focus trap, Escape key, `inert`, and overlay backdrop. NavigationDrawer, FilterDrawer, and SearchOverlay compose from this primitive. FilterDrawer uses deferred Apply pattern on mobile (staged state only committed on explicit Apply). |
| **Validation criteria** | At 390px: drawer opens on trigger tap, focus moves inside, Escape closes, focus returns to trigger. Background content not reachable by Tab while drawer is open. Apply button in FilterDrawer commits selections. Close button always visible. |
| **Presentation variant** | **Yes** — FilterDrawer is a distinct component from FilterPanel (sidebar). The two share filter state management but render differently. `Drawer` is a shared primitive. |

---

## 15. FilterPanel (Desktop Sidebar)

| Attribute | Detail |
|-----------|--------|
| **Desktop** | Persistent left sidebar on CatalogPage. Width 240–280px. Contains filter parameter sections as `<fieldset><legend>` groups with radio buttons. Active filters indicated with theme-specific styling. "Clear all filters" action visible when filters are active. |
| **Tablet** | Hidden — replaced by FilterDrawer triggered by "Filters" button (see §14). |
| **Mobile** | Hidden — replaced by FilterDrawer (see §14). |
| **Theme differences** | Premium: white panel, Playfair section headings. Gaming: dark `#16161E` panel, cyan accent for active radio. Professional: white panel, `border-r #E5E7EB`, blue accent for active radio. |
| **Shared functionality** | Radio button single-select per filter parameter. Selecting a radio triggers immediate API call (desktop behavior). "Clear all filters" button: resets all filter params, triggers immediate API call. Filter parameter sections loaded from `GET /api/categories/:id/parameters/:key/values`. |
| **Accessibility** | Each parameter section is a `<fieldset><legend>`. Radio inputs have associated labels. Active filter: `aria-checked="true"` on selected radio. "Clear all" button: `aria-label="Clear all filters"`. |
| **State preservation** | Active filter values stored in Zustand filterStore. Switching theme or resizing viewport does not clear filters. When viewport resizes from desktop to mobile, staged FilterDrawer selections are discarded if Apply was not pressed — documented behavior. |
| **Implementation note** | FilterPanel and FilterDrawer share the same filter rendering logic (parameter sections). Factor into a shared `<FilterSections>` component that both compose. FilterPanel applies each selection immediately; FilterDrawer stages and applies on explicit "Apply" button press. |
| **Validation criteria** | At 1024px+: FilterPanel visible. At <1024px: FilterPanel not visible. Radio selection triggers URL update (immediate). "Clear all" resets URL filter params. No horizontal overflow. |
| **Presentation variant** | **Yes** — FilterPanel (sidebar) and FilterDrawer (drawer) are separate components that compose shared FilterSections. |

---

## 16. Pagination

| Attribute | Detail |
|-----------|--------|
| **Desktop** | Full pagination bar: Previous · 1 · 2 · 3 · … · N · Next. All page numbers visible or summarized with ellipsis for large page counts. |
| **Tablet** | Same as desktop or slightly compressed (fewer pages shown before ellipsis). |
| **Mobile** | Simplified: Previous · Current page / Total pages · Next. Or: show 3 page numbers max (previous, current, next). Full list not required on mobile. |
| **Theme differences** | Premium: graphite active page background. Gaming: purple active page. Professional: blue active page, bordered pagination buttons. |
| **Shared functionality** | Clicking a page number navigates and scrolls to the top of the product grid. Active page shown with theme-specific styling. `aria-label="Page {n}"` on page number buttons. `aria-current="true"` on current page button. |
| **Accessibility** | `<nav aria-label="Pagination">`. Previous/Next: `aria-label="Previous page"` / `"Next page"`. Disabled Previous on page 1; Disabled Next on last page: `aria-disabled="true"`. |
| **State preservation** | Current page from URL param `?page=`. Switching theme does not change page. Layout change does not change page. |
| **Implementation note** | Mobile simplified pagination can be a CSS breakpoint variant (hide page number buttons, keep Previous/Next with current indicator text). No separate component required. |
| **Validation criteria** | At 390px: Previous and Next buttons ≥44px tap target. Current page readable. No overflow. At 1440px: page number buttons visible. Active page distinguishable in all 3 themes. |
| **Presentation variant** | No — CSS breakpoints control label visibility. |

---

## 17. ImageGallery (ProductPage only)

| Attribute | Detail |
|-----------|--------|
| **Desktop** | Main image (left column, large) + horizontal thumbnail row (below or at left side). Click thumbnail → main image updates. |
| **Tablet** | Main image above thumbnails. Thumbnail row horizontal below. Layout may switch from side-by-side to stacked. |
| **Mobile** | Stacked layout. Main image full-width. Thumbnail row below (horizontal scrolling if more than 3 thumbnails). No image zoom on mobile. |
| **Theme differences** | Premium: white bg, subtle shadow on main image, `1px border #E5E0DB` on selected thumbnail. Gaming: dark `#16161E` bg, `2px cyan border #22D3EE` on selected thumbnail, slight glow. Professional: white bg, `2px blue border #2563EB` on selected thumbnail. |
| **Shared functionality** | Clicking thumbnail changes main image (no animation required). Selected thumbnail visually indicated. If `imageUrls[]` is empty: show placeholder image. If `imageUrls.length === 1`: no thumbnails shown. If `imageUrls.length > 1`: thumbnails shown. |
| **Accessibility** | Main image: `alt="{product name}"`. Thumbnails: `<button aria-label="View image {n} of {total}" aria-pressed="{isSelected}">`. Keyboard-navigable thumbnails. |
| **State preservation** | Selected thumbnail index stored in local component state. Must persist across theme switches. Must persist if viewport is resized. Must reset when navigating to a different product. |
| **Implementation note** | Selected image index in `useState`. Main image `src` derived from index. Desktop/tablet/mobile layout via CSS breakpoints — same component. |
| **Validation criteria** | Clicking thumbnail changes main image. Selected thumbnail visually indicated in all 3 themes. At 390px: main image full-width, thumbnails visible and tappable (≥44px). Placeholder shown when no images. |
| **Presentation variant** | No — CSS breakpoints handle layout shift. |

---

## 18. QuantitySelector (ProductPage only)

| Attribute | Detail |
|-----------|--------|
| **Desktop** | Horizontal `−` / value / `+` stepper. Min 1. Max `product.stock - cartQuantityAlready`. |
| **Tablet** | Identical to desktop. |
| **Mobile** | Identical layout. Touch targets for `−` and `+` buttons ≥44×44px. |
| **Theme differences** | Premium: minimal border, graphite buttons. Gaming: dark surface, purple `+`/`−` buttons. Professional: bordered input, blue `+`/`−` buttons. |
| **Shared functionality** | `−` disabled at min=1. `+` disabled at max (stock limit). Input accepts direct entry with min/max validation. Value updates to `max` if entered value exceeds max. |
| **Accessibility** | `<input type="number">` or `role="spinbutton"` with `aria-valuemin`, `aria-valuemax`, `aria-valuenow`. Labels on `+`/`−` buttons (`aria-label="Increase quantity"` / `"Decrease quantity"`). `aria-label="Quantity"` on the input. |
| **State preservation** | Quantity stored in local component state. Reset to 1 on product navigation. Preserved across theme switches. |
| **Implementation note** | Do not use `<input type="number">` on mobile without testing behavior — browsers render it inconsistently. Alternative: styled text input with JS validation. |
| **Validation criteria** | `−` disabled at value=1. `+` disabled at max. Tap targets ≥44px at 390px. Screen reader reads `aria-valuenow` on change. |
| **Presentation variant** | No — CSS tokens. |

---

## 19. SortSelect (CatalogPage)

| Attribute | Detail |
|-----------|--------|
| **Desktop** | Dropdown select for sort order (e.g., "Price: Low → High"). Visible above the product grid. |
| **Tablet** | Identical to desktop. |
| **Mobile** | May be placed in a compact row with the result count and filter button. Full-width or compact depending on space. |
| **Theme differences** | Premium: minimal border, Playfair or DM Sans label. Gaming: dark select surface. Professional: standard bordered select. |
| **Shared functionality** | Changing sort triggers immediate API call. Selected sort value reflected in URL param `?sort=`. Native `<select>` acceptable. |
| **Accessibility** | `<label for="sort-select">Sort by</label>` + `<select id="sort-select">`. Native select is fully accessible. |
| **State preservation** | Active sort from URL param. Switching theme or resizing does not reset sort. |
| **Implementation note** | Native `<select>` preferred for accessibility and cross-platform consistency. Custom select dropdown adds complexity without sufficient benefit. |
| **Validation criteria** | Sort change updates URL param and product list. Value preserved on theme switch. Visible at 390px. |
| **Presentation variant** | No. |

---

## 20. MobileStickyPurchaseCTA (ProductPage, mobile only)

| Attribute | Detail |
|-----------|--------|
| **Desktop** | Not used — CTA is inline in the purchase section. |
| **Tablet** | Not used — CTA is inline in the purchase section. |
| **Mobile** | Optional sticky bar fixed to the bottom of the viewport. Appears when the inline "Add to Cart" CTA scrolls out of view. Contains the product name (truncated), price, and "Add to Cart" button. |
| **Theme differences** | Same theme colors as the main CTA button in each theme. Bar background matches the page background (or slightly elevated — `box-shadow` for separation). |
| **Shared functionality** | Visible only when the inline CTA is not in the viewport. Triggers the same cart add action as the inline CTA. Must not duplicate cart quantity — both CTAs use the same quantity selector value. |
| **Accessibility** | `aria-label="Add to Cart"`. Must not obscure content — provides sufficient bottom padding to the main content to prevent overlap. `position: fixed; bottom: 0` with explicit content padding-bottom to match bar height. Keyboard users: Tab should not get stuck in the sticky bar; it should be part of the natural Tab order. |
| **State preservation** | No separate state — uses same quantity from QuantitySelector and same cart mutation. |
| **Implementation note** | Optional — may be deferred to implementation phase. Use `IntersectionObserver` on the inline CTA to toggle visibility of the sticky bar. If not implemented: document as a known mobile UX gap in the implementation notes. |
| **Validation criteria** | At 390px: sticky bar visible when inline CTA not visible. Bar does not cover content when user scrolls to the CTA. Tapping sticky CTA adds to cart correctly. |
| **Presentation variant** | **Yes** — only rendered at mobile breakpoint. Distinct component or conditionally rendered element. |

---

## Summary: Components Requiring Presentation Variants

The following components require more than CSS breakpoints alone — they need distinct JSX structure or significant conditional rendering:

| Component | Reason for variant |
|-----------|-------------------|
| SearchOverlay | Only exists at mobile — distinct modal/overlay component |
| ProductCard | Gaming uses structurally different image treatment (full-bleed dark) |
| FilterPanel vs FilterDrawer | Completely different rendering; share FilterSections logic |
| MobileStickyPurchaseCTA | Only rendered at mobile; distinct element from inline CTA |

All other components use CSS breakpoints and design token switching.

---

## Implementation Checklist

Before marking a component implementation complete:

- [ ] Renders correctly at 390px, 768px, 1440px
- [ ] All 3 themes apply correct CSS token values
- [ ] All interactive states: hover, focus, disabled, loading
- [ ] Focus ring visible in all 3 themes
- [ ] Touch targets ≥44×44px for all interactive elements
- [ ] No horizontal overflow at any viewport width
- [ ] Accessibility requirements met (landmark, label, ARIA)
- [ ] State preservation confirmed across theme switch and viewport resize
- [ ] Playwright screenshot captured at all 3 viewports for the visual regression baseline
- [ ] axe-core scan passes (no critical/serious violations)