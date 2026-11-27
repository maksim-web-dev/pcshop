# CatalogPage — Shared Design Specification

**Version:** 1.0 (2026-11-27)  
**Reference designs:** To be generated — `structure/design/stitch/catalog/{theme}/v1-generated.png`  
**Status:** Specification complete — awaiting Google Stitch generation and human design approval

---

## 1. Page Objectives

The CatalogPage is the primary product discovery and browsing surface. It must:

1. Display a filtered list of products from a selected category
2. Allow users to refine results by category-specific parameters (CPU, RAM, GPU, etc.)
3. Support sorting by price, name, and date
4. Show pagination to navigate multi-page results
5. Surface the active filter state clearly so users understand what they are looking at
6. Preserve theme identity established in the HomePage V2 designs
7. Provide consistent breadcrumb and navigation context

---

## 2. Page Structure

All three themes implement the same section structure in the same top-to-bottom order:

```
[Header]           — identical to HomePage header (see home.md §3)
[Breadcrumb]       — Home > Laptops > Gaming Laptop
[Catalog Layout]
  [Left: Filter Sidebar]        (desktop: fixed-width left column)
  [Right: Catalog Main]
    [Sort Bar]                  — sort control + result count
    [Active Filter Chips]       — displayed when filters are active
    [Product Grid]              — 3–4 columns (desktop)
    [Pagination]
[Footer]           — identical to HomePage footer (see home.md §9)
```

---

## 3. Shared Header

The CatalogPage uses the identical header as the HomePage. All requirements from `home.md §3` apply:

- Same logo, navigation, search, cart, and ThemeSwitcher placement
- ThemeSwitcher must be visible and functional on CatalogPage
- Switching themes on CatalogPage must not reset filters, sort, search, or pagination
- Switching themes must not trigger a new API request

**Navigation active state:** The nav item corresponding to the active product type is highlighted (e.g., "Laptops" is active when browsing Gaming Laptop category).

---

## 4. Breadcrumb Navigation

Breadcrumb appears below the header, above the catalog layout.

| Segment | Link | Notes |
|---------|------|-------|
| Home | `/` | Always present |
| Product type | `/catalog?productTypeId={id}` | e.g., "Laptops" |
| Category | Active (not linked) | e.g., "Gaming Laptop" |

**Example:** Home / Laptops / Gaming Laptop

Breadcrumb requirements:
- Separators: `>` or `/` depending on theme typographic style
- Last segment is current page — not a link, visually distinct (lighter color or no underline)
- Accessible: `<nav aria-label="Breadcrumb">` with `aria-current="page"` on last item

---

## 5. Category Navigation (Left Sidebar — Top Section)

The sidebar top section lists sibling categories in the active product type.

**Example for Laptops product type:**
- Gaming Laptop ← active
- Ultrabook
- (other laptop categories)

Requirements:
- Clicking a category link updates `categoryId` in the URL and clears all `params.*` filters
- Active category is visually highlighted
- If only one category exists in the product type, do not show the category list
- Category list is not shown without an active productTypeId

---

## 6. Filter Panel (Left Sidebar — Main Section)

The filter panel renders filterable parameters for the active category.

### Data requirements

1. Load category parameters: `GET /api/categories/{categoryId}` → `parameters[]`
2. For each parameter, load available values: `GET /api/categories/{categoryId}/parameters/{key}/values` → `string[]`
3. Render one filter group per parameter, ordered by `sortOrder`

### Filter group structure

Each filter group shows:
- Group label: parameter `name` + optional `unit` (e.g., "RAM (GB)")
- One checkbox per available value
- Selected values are visually checked
- Max 5 parameters per category (backend limit)

### Filter interaction

- Selecting a checkbox adds `params.{key}={value}` to the URL
- Only one value per key is supported (single-select per parameter — AND logic only)
- Selecting a different value for the same key replaces the previous value
- Deselecting a checkbox removes the `params.{key}` from the URL
- Each filter change triggers a new `GET /api/products` request with updated params

### Filter sidebar design requirements

- Desktop: visible at all times in left column; not collapsible on desktop
- Mobile: hidden by default; revealed via "Filters" button that opens a drawer
- Sidebar width: approximately 240–280px (desktop)
- Each parameter group has a clear visual label
- Selected values are visually distinct from unselected
- Disabled state (no products match): dim the option but keep it visible

### Filter count indicator

When one or more filters are active, show a count badge on the "Filters" button (mobile) or on the sidebar heading:

- "Filters (1)" when one parameter is filtered
- "Filters (3)" when three parameters are filtered

---

## 7. Active Filter Chips

When `params.*` filters are active, display filter chips above the product grid.

Each chip shows:
- Filter name and value: "RAM: 32 GB"
- × remove button: clicking removes that filter from the URL
- Chips appear between the sort bar and the product grid

**Clear all filters:**
- Display "Clear all" link/button when at least one filter is active
- Clicking removes all `params.*` from URL; preserves categoryId, productTypeId, search, sort
- "Clear all" is not shown when no filters are active

---

## 8. Sort Bar

The sort bar appears above the product grid (and above active filter chips).

### Sort control

Dropdown or segmented control for sort order:
- Price: High to Low (`sortBy=price&sortDir=desc`)
- Price: Low to High (`sortBy=price&sortDir=asc`)
- Name: A–Z (`sortBy=name&sortDir=asc`)
- Newest (`sortBy=createdAt&sortDir=desc`)

Default sort (when no `sortBy` in URL): Price: High to Low

### Result count

Display the total product count returned by the API:
- "12 Gaming Laptops" (no filter, `meta.total = 12`)
- "6 Gaming Laptops" (RAM: 32 GB filter, `meta.total = 6`)

The count must reflect `meta.total` from the API response — not the count of visible products on the current page.

Result count is on the same horizontal row as the sort control, left-aligned.

---

## 9. Product Grid

### Grid requirements

| Breakpoint | Columns |
|------------|---------|
| Desktop ≥1280px | 3 columns (Premium, Professional); 3–4 columns (Gaming) |
| Desktop 1024–1279px | 3 columns |
| Tablet 768–1023px | 2 columns |
| Mobile ≤767px | 1 column |

### Product card requirements

Product cards on the CatalogPage are identical to the HomePage product cards. All requirements from `home.md §8` apply:

1. Product image — aspect-ratio 4:3 or 16:10, `object-fit: cover`, `loading="lazy"`
2. Product name — single line or clean 2-line wrap
3. Price — `price decimal(10,2)` from API; formatted as "$1,799.00"
4. Specification badges — 2–3 badges (see `mock-products.md` for badge text)
5. Availability indicator — "In stock" at rest without hover (required)
6. "Add to Cart" button — always visible, never hover-only

**Catalog-specific badge rule:** Show specification badges for the **active category's parameters** where available. For Gaming Laptop: GPU badge and RAM badge. The specific badge text is defined in `catalog/mock-products.md`.

**No star ratings, discounts, or delivery promises on any product card.**

---

## 10. Pagination

Pagination appears below the product grid.

### Requirements

- Previous / Next buttons: disabled when on first / last page
- Page number buttons: show current page and adjacent pages
- Current page is visually active (filled/highlighted)
- Page numbers shown: at minimum `1`, `2`, and navigation arrows

### Example (12 products, 6 per page)

```
← Previous    1   [2]   Next →
```

or showing the full range:

```
← 1  2 →
```

### Pagination and URL

Page is reflected in the URL: `/catalog?...&page=2`

Navigating pages does not reset filters or sort.

### Pagination and theme switching

Theme switching does not reset the page number.

---

## 11. Loading, Empty, and Error States

### Loading state (product grid)

Show skeleton cards matching the product card layout:
- Same 3-column grid structure
- 6 skeleton cards during initial load
- Animated shimmer per theme-specific skeleton tokens
- Loading state appears while `GET /api/products` is in-flight

### Loading state (filter sidebar)

Show skeleton lines for each parameter group while `GET /api/categories/:id` loads.

### Empty state

If the API returns `meta.total = 0` (no products match current filters):

- Message: "No products match your filters"
- Action button: "Clear filters" — removes all `params.*` from URL
- Do not show an empty grid

### Error state

If the API request fails (network error or 5xx):

- Message: "Unable to load products"
- Action button: "Try again" — re-triggers the TanStack Query fetch
- Do not show a broken layout

---

## 12. Responsive Behavior

| Feature | Desktop ≥1024px | Tablet 768–1023px | Mobile ≤767px |
|---------|:--------------:|:-----------------:|:-------------:|
| Filter sidebar | Visible in left column | Hidden; "Filters" button shown | Hidden; "Filters" button shown |
| Filter drawer | — | Overlay drawer from bottom or left | Overlay drawer from bottom |
| Sort control | Inline with result count | Inline with result count | Full-width, below result count |
| Product grid | 3–4 columns | 2 columns | 1 column |
| Breadcrumb | Full | Truncated | Hidden or abbreviated |
| Active filter chips | Full row | Full row | Scrollable row |
| Pagination | Centered row with numbers | Centered row with numbers | Previous / Next only |

Filter drawer (mobile/tablet) design is not in scope for the initial Stitch generation. It should be noted in the design as "Filter drawer — mobile implementation pending Design Step 7".

---

## 13. Theme Switching on CatalogPage

Theme switching is instantaneous and must preserve:

| State | Preserved |
|-------|-----------|
| Active category (`categoryId`) | ✓ |
| Active product type (`productTypeId`) | ✓ |
| Active filters (`params.*`) | ✓ |
| Search query | ✓ |
| Sort order | ✓ |
| Current page | ✓ |
| Scroll position | ✓ (best effort) |

Theme switching must not:
- Trigger a new `GET /api/products` request
- Reset the filter state
- Navigate to a different URL

---

## 14. Accessibility Requirements

All accessibility requirements from `home.md §12` apply. Additional CatalogPage-specific requirements:

| Requirement | Specification |
|-------------|--------------|
| Filter group | `<fieldset>` with `<legend>` for each parameter group |
| Filter checkboxes | Native `<input type="checkbox">` with associated `<label>` |
| Active filter chips | Each chip has `aria-label="Remove RAM: 32 GB filter"` |
| Sort control | `<label>` associated with `<select>` or ARIA for custom dropdown |
| Result count | Live region: `role="status"` or `aria-live="polite"` to announce count changes |
| Pagination | `<nav aria-label="Pagination">` with `aria-current="page"` on active page button |
| Loading state | `aria-busy="true"` on the product grid container during loading |
| Filter count badge | `aria-label="2 filters active"` on the Filters button (mobile) |
| Breadcrumb | `<nav aria-label="Breadcrumb">` with `aria-current="page"` on last item |

---

## 15. URL and Application State Requirements

The CatalogPage URL reflects all active state so that links are shareable and the browser back button works.

| State | URL parameter | Reset behavior |
|-------|--------------|----------------|
| Product type | `productTypeId=uuid` | Resets categoryId and all params.* |
| Category | `categoryId=uuid` | Resets all params.* filters |
| Search | `search=value` | Resets page to 1 |
| Sort | `sortBy=price&sortDir=desc` | Resets page to 1 |
| Page | `page=2` | Preserved across other changes |
| Limit | `limit=12` | Preserved |
| Param filter | `params.ram=32` | Adding/removing any filter resets page to 1 |

**Theme state lives in `localStorage` only — never in the URL.**

### Example URLs

Default Gaming Laptop catalog:
```
/catalog?categoryId={uuid}&sortBy=price&sortDir=desc
```

Filtered by RAM = 32 GB:
```
/catalog?categoryId={uuid}&params.ram=32&sortBy=price&sortDir=desc
```

Page 2:
```
/catalog?categoryId={uuid}&sortBy=price&sortDir=desc&page=2
```

---

## 16. API Dependencies

| Data | Endpoint | When called |
|------|----------|-------------|
| Product list | `GET /api/products?categoryId={id}&sortBy=...&params.*=...&page=...&limit=...` | On mount, filter change, sort change, page change |
| Category details + parameters | `GET /api/categories/{id}` | On categoryId change |
| Parameter values | `GET /api/categories/{id}/parameters/{key}/values` | For each parameter after category loads |
| Product types | `GET /api/product-types` | On mount (for navigation + category sidebar) |
| Categories for type | `GET /api/categories?productTypeId={id}` | On productTypeId change |

**TanStack Query key structure:**
```typescript
['products', { categoryId, productTypeId, search, sortBy, sortDir, page, limit, params }]
['categories', categoryId]
['categoryParameterValues', categoryId, paramKey]
['productTypes']
['categoriesByType', productTypeId]
```

---

## 17. Reused HomePage Components

The following components are shared between HomePage and CatalogPage without modification:

| Component | HomePage usage | CatalogPage usage |
|-----------|---------------|-------------------|
| Header | Full | Identical |
| Navigation | Full | Identical (active state changes) |
| ThemeSwitcher | Full | Identical |
| Footer | Full | Identical |
| ProductCard | Featured products | Catalog grid products |
| Cart icon + badge | Full | Identical |

**New components required for CatalogPage:**

| Component | Description |
|-----------|-------------|
| Breadcrumb | 3-segment path with aria-current |
| FilterSidebar | Category navigation + parameter filter groups |
| FilterDrawer | Mobile overlay drawer (Design Step 7) |
| FilterChip | Active filter chip with remove action |
| SortControl | Dropdown with 4 sort options |
| ResultCount | Product count display |
| Pagination | Previous / Next / numbered page buttons |

---

## 18. Unsupported Features

The following must not appear in the CatalogPage design. They are either not supported by the backend API or not in scope:

| Feature | Reason |
|---------|--------|
| Price range slider | No `minPrice`/`maxPrice` params in backend |
| Multi-select filter (same parameter) | Backend `params` supports AND only; one value per key |
| Filter count per option ("RTX 4070 (3)") | No faceted count endpoint |
| Product ratings/reviews | Not in data model |
| Discount badges | Not in data model |
| "Compare" action | Not in scope |
| "Wishlist" action | No user account system |
| Infinite scroll | Not planned |
| Filter autocomplete | No search suggestion endpoint |
| "In-store availability" | Not in scope |

---

## 19. Visual Design Direction per Theme

See theme-specific prompts for complete visual requirements:
- `structure/design/stitch/catalog/premium-prompt.md` — Premium Minimalism
- `structure/design/stitch/catalog/gaming-prompt.md` — Gaming & Technology
- `structure/design/stitch/catalog/professional-prompt.md` — Modern Technology Store

All CatalogPage concepts must reuse the corresponding HomePage V2 visual language from:
- `structure/design/stitch/homepage/{theme}/approved-design-guidance.md`
- `structure/design/stitch/homepage/{theme}/v2-generated.png`

Do not redesign the application identity for the CatalogPage.