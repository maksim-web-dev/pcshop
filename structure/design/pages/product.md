# ProductPage — Shared Design Specification

**Version:** 1.0 (2026-11-27)  
**Reference designs:** To be generated — `structure/design/stitch/product/{theme}/v1-generated.png`  
**Status:** Specification complete — awaiting Google Stitch generation and human design approval  
**Backend capabilities:** `structure/design/stitch/product/backend-capabilities.md`

---

## 1. Page Objectives

The ProductPage is the primary product detail and purchase surface. It must:

1. Display a single product with high-quality photography as the visual hero
2. Present the product name, price, and availability prominently above the fold
3. Show all product specifications in a readable format
4. Provide a clear, always-visible "Add to Cart" CTA
5. Show related products from the same category
6. Preserve theme identity established in HomePage V2 and CatalogPage V1
7. Support all five product categories: Gaming Laptop, Ultrabook, Desktop PC, Monitor, Keyboard/Mouse
8. Handle all backend edge cases: missing description, empty imageUrls, inactive product

---

## 2. Product Identifier and Routing

### URL structure

```
/products/:id
```

`:id` is the product UUID from `GET /api/products/:id`. The product `slug` field is available in the response but the backend route accepts only UUID.

**Assumption:** Frontend router uses UUID path param. Confirm with project owner whether slug-based URLs are preferred.

### Navigation to ProductPage

- From ProductCard (CatalogPage) → "Add to Cart" button does NOT navigate; a "product name" link navigates to ProductPage
- From ProductCard (HomePage featured products) → same
- Direct URL with UUID

---

## 3. Page Structure

All three themes implement the same section structure:

```
[Header]           — identical to HomePage/CatalogPage header
[Breadcrumb]       — Home > Laptops > Gaming Laptop > APEX Gaming Laptop 15"
[Product Detail]
  [Left: Image Gallery]
    [Main Image]
    [Thumbnail Row]
  [Right: Product Info]
    [Category + ProductType label]
    [Product Name]
    [Price]
    [Availability]
    [Key Specification Badges] (2–3 badges)
    [Quantity Selector]
    [Add to Cart button]
[Product Description]
[Technical Specification Table]
[Related Products]
[Footer]           — identical to HomePage/CatalogPage footer
```

---

## 4. Shared Header

The ProductPage uses the identical header as HomePage and CatalogPage:
- Same logo, navigation, search, cart, and ThemeSwitcher placement
- ThemeSwitcher visible and functional
- Navigation active state: highlight the product type (e.g., "Laptops" for Gaming Laptop)
- Theme switching must not reset quantity, gallery position, or cart state
- Theme switching must not trigger new API requests

---

## 5. Breadcrumb Navigation

Four-segment breadcrumb:

```
Home / Laptops / Gaming Laptop / APEX Gaming Laptop 15"
```

| Segment | Link | Data source |
|---------|------|-------------|
| Home | `/` | Static |
| Product type | `/catalog?productTypeId={id}` | `GET /api/product-types` → productType.name |
| Category | `/catalog?categoryId={id}` | `GET /api/categories/:id` → category.name |
| Product name | Active (not linked) | `product.name` from `GET /api/products/:id` |

Breadcrumb requirements:
- Last segment (product name) is current page — not a link, visually distinct
- Accessible: `<nav aria-label="Breadcrumb">` with `aria-current="page"` on last item
- Truncate long product names on mobile if necessary

---

## 6. Product Image Gallery

### Main image display

- Large main image occupies left column on desktop
- Aspect ratio: 1:1 or 4:3 (consistent per theme)
- `object-fit: contain` on light/dark surface per theme
- Shows first item from `product.imageUrls[]` by default
- Clicking a thumbnail updates the main image

### Thumbnail row

- Horizontal row of thumbnails below the main image (or vertical strip on left)
- 3–4 thumbnails maximum visible (more images → scroll)
- Selected thumbnail visually highlighted (border or overlay)
- Thumbnails use same aspect ratio as main image, reduced size

### Missing image fallback

If `product.imageUrls` is empty or a URL fails to load:
- Show a placeholder matching the theme's style (neutral surface with product silhouette icon)
- Placeholder must still fill the image space without breaking layout

### Image zoom

Optional hover zoom (desktop only). If included, zoom is a CSS transform — not a separate overlay.

---

## 7. Product Information Area (Right Column)

### Category label

Display product type + category name above the product title:
- Source: `GET /api/categories/:id` → category.name + category.productType.name
- Example: "Laptop · Gaming Laptop"
- Subdued style — not the primary heading

### Product title

- `product.name` from API
- Prominent — largest text on the product info panel
- Theme-specific: Playfair (Premium), Rajdhani (Gaming), Inter bold (Professional)
- 1–2 line maximum; wrap gracefully

### Price

- `product.price` formatted as currency: `"1799.00"` → `"$1,799"`
- Prominent, clearly visible
- Near the product title — not buried below the fold
- No discount/original price (not in data model)

### Availability

- Derived from `product.stock > 0`
- **In stock:** theme-specific indicator (see below)
- **Out of stock:** clear visual differentiation; "Add to Cart" button disabled
- Inactive product (`product.isActive === false`): render product-not-found state

Theme-specific availability styles (consistent with CatalogPage):
- **Premium:** "In stock" or "Out of stock" text in `#5C5C5C`, no color dot
- **Gaming:** "IN STOCK" or "OUT OF STOCK" in cyan `#22D3EE`
- **Professional:** `#059669` green dot + "In stock" or red dot + "Out of stock" in matching text

### Key specification badges

2–3 specification badges, same design as CatalogPage cards:
- Professional: 3 badges (GPU, RAM, CPU)
- Premium/Gaming: 2 badges (GPU, RAM)
- Rendered from `product.parameters[]` matching the category's display badge keys

### Quantity selector

Simple integer input or +/− stepper:
- Minimum: 1
- Maximum: `product.stock` (capped to available quantity)
- Default: 1
- If `stock === 0`: disable selector
- If `stock === 1`: no decrease button at 1

### Add to Cart button

- Always visible (not hover-only)
- Label: "Add to Cart" (sentence case — Professional, Premium) or "ADD TO CART" (Gaming)
- Primary CTA style per theme
- Clicking writes to Zustand `cartStore`: `{ productId, name, price, quantity }`
- **No API call** — Zustand-only
- Disabled state when `stock === 0`
- After click: show brief confirmation state ("Added to Cart" or checkmark) for ~2 seconds

---

## 8. Product Description

- Source: `product.description` (may be `null`)
- If null: do not show the description section
- If present: show below the product detail two-column layout
- Max 3–5 short paragraphs (illustrative text in Stitch; real content from backend)
- Text style: body text, subdued color, left-aligned

---

## 9. Technical Specification Table

Renders all parameters from `product.parameters[]`:

| Column | Source |
|--------|--------|
| Parameter name | `param.name` (from product response) |
| Unit (in label) | `param.unit` (optional — append if not null) |
| Value | `param.value` |

**Rendering rule:**
- Rendered dynamically from `product.parameters[]` — do not hardcode laptop-specific labels
- If `unit` is not null: format as `"{value} {unit}"` (e.g., "32 GB", "144 Hz")
- If `unit` is null: show `{value}` only (e.g., "Intel Core i7-13700H")
- Rows rendered in the order returned by the API (sorted by `sortOrder` in backend)
- If `parameters` is empty: hide the specification table section

This table supports any product category — Gaming Laptop, Monitor, Keyboard, Mouse — without hardcoding.

### Visual design

- 2-column table: parameter name | value
- Alternate row backgrounds (subtle) or separator lines
- Font: body text; parameter name subdued, value primary text
- Full width of its container

---

## 10. Related Products

If related products are shown:

- Source: `GET /api/products?categoryId={categoryId}&limit=4` with current product excluded
- Show up to 3–4 product cards
- Use the same `ProductCard` component as CatalogPage (same design)
- If fewer than 2 related products exist: hide the section
- Section heading: "Related Products" (sentence case) or "YOU MAY ALSO LIKE" (Gaming)

**No dedicated recommendations endpoint exists.** This is the only supported approach.

---

## 11. Loading State

While `GET /api/products/:id` is in-flight:
- Main image: skeleton placeholder (same aspect ratio)
- Product name: skeleton line
- Price: skeleton line
- Specifications: skeleton rows
- CTA button: disabled / skeleton
- Use `aria-busy="true"` on the loading container

---

## 12. Product Not Found State

When `GET /api/products/:id` returns 404 (or the product is inactive):
- Clear message: "Product not found" or "This product is no longer available"
- Link back to catalog: "Browse all Laptops" → `/catalog?categoryId=...`
- Do not show a broken layout
- Use the same 404 visual language as NotFoundPage if available

---

## 13. API Error State

When `GET /api/products/:id` returns 500 or network error:
- Message: "Unable to load product"
- Action button: "Try again" — re-triggers the TanStack Query fetch
- Do not show a broken layout

---

## 14. Out-of-Stock State

When `product.stock === 0`:
- Availability shows "Out of stock" with appropriate styling per theme
- Quantity selector is disabled
- "Add to Cart" button is disabled (greyed out)
- Product information still visible — do not hide the page
- Out-of-stock state persists until theme switch or page reload

---

## 15. Missing Description

If `product.description === null`:
- Do not render the description section
- Do not show an empty box or "No description available" placeholder
- The layout must gracefully skip the section

---

## 16. Responsive Behavior

| Feature | Desktop ≥1024px | Tablet 768–1023px | Mobile ≤767px |
|---------|:--------------:|:-----------------:|:-------------:|
| Layout | Two-column (gallery left, info right) | Two-column (compressed) | Single column |
| Main image | Full width of left column | Full width of left column | Full viewport width |
| Thumbnails | Row below main image | Row below main image | Horizontal scrollable row |
| Product info | Right column | Right column | Below image |
| Specification table | Full width below both columns | Full width | Full width |
| Related products | 3–4 card row | 2 card row | 1 column or horizontal scroll |
| CTA button | Fixed in product info column | Fixed in product info column | Fixed or sticky at bottom |

Responsive design is Design Step 7. Desktop is the primary target for Stitch generation.

---

## 17. Accessibility Requirements

| Requirement | Specification |
|-------------|--------------|
| Product heading | `<h1>` for product name — only one per page |
| Breadcrumb | `<nav aria-label="Breadcrumb">` with `aria-current="page"` |
| Gallery main image | `<img alt="{product.name}">` with meaningful alt text |
| Thumbnails | `<button aria-label="View image {n} of {total}">` |
| Quantity selector | `<input aria-label="Quantity">` with min/max |
| Add to Cart button | `<button type="button" aria-label="Add {product.name} to cart">` |
| Disabled CTA (out of stock) | `disabled` attribute + `aria-disabled="true"` |
| Availability | Visible text carries semantic meaning; decorative dots use `aria-hidden="true"` |
| Specification table | `<table>` with `<caption>` or `<section aria-labelledby>` |
| Loading state | `aria-busy="true"` on main container |
| Focus management | Tab order: image gallery → product info → CTA → description → specifications → related |

---

## 18. URL and Application State Requirements

| State | URL | Preserved on theme switch |
|-------|-----|--------------------------|
| Product ID | `/products/:id` | ✓ (URL unchanged) |
| Selected gallery image | Local state only (no URL) | ✓ |
| Quantity | Local state only (no URL) | ✓ |
| Cart | Zustand `cartStore` | ✓ |
| Active theme | `localStorage` via `themeStore` | ✓ |

Theme switching must not:
- Navigate away from the current product
- Reset quantity to 1
- Reset gallery to first image
- Trigger new API requests for product data

---

## 19. API Dependencies

| Data | Endpoint | When called |
|------|----------|-------------|
| Product detail | `GET /api/products/:id` | On mount (productId from URL) |
| Category name + params | `GET /api/categories/:categoryId` | After product loads (derive categoryId from product) |
| Product type name | `GET /api/product-types` (or derive from category) | For breadcrumb display |
| Related products | `GET /api/products?categoryId={id}&limit=4` | After product loads (derive categoryId from product) |

**TanStack Query key structure:**
```typescript
['product', productId]
['category', categoryId]      // categoryId from product response
['productTypes']               // shared with other pages
['relatedProducts', categoryId, productId]  // excludes current product
```

---

## 20. Reused Components

| Component | Usage on ProductPage |
|-----------|---------------------|
| `<Header>` | Identical; `activePage` prop based on product type |
| `<Footer>` | Identical |
| `<ThemeSwitcher>` | Identical |
| `<ProductCard>` | Used in Related Products section |
| `<Badge>` | Key specification badges in product info panel |
| `<Skeleton>` | Loading state for all major sections |

New components required for ProductPage only:

| Component | Description |
|-----------|-------------|
| `<ImageGallery>` | Main image + thumbnail row |
| `<SpecificationTable>` | Dynamic parameter key/value table |
| `<QuantitySelector>` | Integer input with +/− controls |
| `<AddToCartButton>` | CTA with confirmation feedback state |
| `<ProductBreadcrumb>` | 4-segment breadcrumb for product context |

---

## 21. Unsupported Features

| Feature | Reason |
|---------|--------|
| Product reviews / ratings | Not in data model |
| Discount / original prices | No discount fields |
| Delivery estimates | Out of scope |
| Wishlist | No user account system |
| Compare products | Out of scope |
| Personalized recommendations | No recommendation engine |
| Cart persistence across sessions | Zustand only (session memory) |
| Financing / installment options | Out of scope |
| Warranty information | Out of scope |

---

## 22. Visual Design Direction per Theme

See theme-specific prompts for complete visual requirements:
- `structure/design/stitch/product/premium-prompt.md` — Premium Minimalism
- `structure/design/stitch/product/gaming-prompt.md` — Gaming & Technology
- `structure/design/stitch/product/professional-prompt.md` — Modern Technology Store

All ProductPage concepts must reuse the corresponding visual language from:
- `structure/design/stitch/homepage/{theme}/approved-design-guidance.md`
- `structure/design/stitch/catalog/{theme}/approved-design-guidance.md`
- `structure/design/stitch/{theme}/v2-generated.png` (homepage reference)
- `structure/design/stitch/catalog/{theme}/v1-generated.png` (catalog reference)