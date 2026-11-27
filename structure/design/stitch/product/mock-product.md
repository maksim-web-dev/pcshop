# ProductPage Mock Product — APEX Gaming Laptop 15"

**Source:** Reused from `structure/design/stitch/homepage/mock-products.md` and `structure/design/stitch/catalog/mock-products.md` without modification.

Use this mock product for all three ProductPage Stitch prompts. Product name, price, and specifications must remain identical across all three themes.

---

## Shared Mock Product (all three themes)

| Field | Value | Backend field | Notes |
|-------|-------|--------------|-------|
| Name | APEX Gaming Laptop 15" | `name` | Exact — no variation |
| Price | $1,799 | `price` ("1799.00") | Formatted as "$1,799" for display |
| Availability | In stock | derived from `stock > 0` | Mock stock: 10 |
| Product type | Laptop | `productType.name` | Via `GET /api/product-types` |
| Category | Gaming Laptop | `category.name` | Via `GET /api/categories/:id` |
| Slug | apex-gaming-laptop-15 | `slug` | In response, but routing uses `id` |
| Description | See below | `description` | Illustrative — not in backend seed |

### Specification parameters

These match the Gaming Laptop category parameters from `GET /api/categories/:id`:

| Parameter | Key | Value (as stored in DB) | Display label | Unit |
|-----------|-----|------------------------|---------------|------|
| CPU | `cpu` | `Intel Core i7-13700H` | CPU | — |
| RAM | `ram` | `32` | RAM | GB |
| Screen Size | `screen_size` | `15.6` | Screen Size | inch |
| GPU | `gpu` | `NVIDIA RTX 4070` | GPU | — |
| Refresh Rate | `refresh_rate` | `144` | Refresh Rate | Hz |

**Display rendering rule (all themes):**
- NUMBER type with unit: show value + unit (`32 GB`, `15.6 inch`, `144 Hz`)
- STRING type, no unit: show value only (`Intel Core i7-13700H`, `NVIDIA RTX 4070`)

### Mock product description (design-only — not in backend seed)

> The APEX Gaming Laptop 15" delivers serious gaming performance in a portable package. Powered by an Intel Core i7-13700H processor and NVIDIA RTX 4070 graphics, it handles demanding titles at high settings. The 15.6-inch Full HD display runs at 144 Hz for fluid, responsive gameplay. 32 GB of DDR5 RAM ensures smooth multitasking, while a 1 TB NVMe SSD provides fast load times.

This description is illustrative for Stitch generation only. The backend `description` field may contain different or no text. Frontend must handle `description === null`.

### Mock images

Three product images for the gallery (Stitch mock):
1. Main angle: front-facing 3/4 view of the laptop
2. Keyboard/touchpad detail
3. Side profile showing thickness

At implementation, replace with `product.imageUrls[]` from the backend.

---

## Key Specification Badges (for card display, all themes)

| Theme | Badge 1 | Badge 2 | Badge 3 |
|-------|---------|---------|---------|
| Premium | "RTX 4070" | "32 GB DDR5" | — |
| Gaming | "RTX 4070" | "32 GB DDR5" | — |
| Professional | "RTX 4070" | "32 GB DDR5" | "Intel i7" |

The ProductPage shows the full specification table, not just badges.

---

## Related Products (design only)

If related products are shown, use 3–4 products from the same Gaming Laptop category. Recommended selection from the catalog mock dataset (excluding APEX itself):

| Product | Price | GPU | RAM |
|---------|-------|-----|-----|
| LYNX Gaming Laptop 15" | $1,899 | NVIDIA RTX 4070 | 32 GB |
| ECHO Gaming Laptop 14" | $1,999 | NVIDIA RTX 4070 Ti | 32 GB |
| KORA Gaming Laptop 17" | $2,099 | NVIDIA RTX 4070 Ti | 32 GB |

These are retrieved via `GET /api/products?categoryId={id}&limit=4` with APEX excluded.

---

## Design-Only vs. Verified Backend Fields

| Field | Status |
|-------|--------|
| `id`, `name`, `slug`, `price`, `stock`, `imageUrls`, `productTypeId`, `categoryId`, `isActive`, `createdAt`, `updatedAt`, `parameters` | Verified in backend schema |
| `description` ("The APEX Gaming Laptop 15" delivers...") | Design-only illustrative text — backend seed may differ or be empty |
| `imageUrls` content (specific URLs or count) | Backend seed may use different URLs; count unspecified |
| Quantity selector maximum | Frontend UX decision — not a backend field |
| Related product selection | Frontend logic — not a backend recommendation |