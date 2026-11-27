# Backend API Capabilities — ProductPage

**Source:** Actual backend source code audit (2026-11-27)  
**Files inspected:**
- `backend/src/routes/products.ts`
- `backend/src/controllers/products.controller.ts`
- `backend/src/services/products.service.ts`
- `backend/src/repositories/products.repository.ts`
- `backend/src/errors/AppError.ts`
- `backend/src/server.ts`
- `backend/prisma/schema.prisma`
- `backend/tests/products.test.ts`

Do not modify backend code or API contracts. This document describes current capabilities only.

---

## 1. Verified — GET /api/products/:id

### Route registration (confirmed in `routes/products.ts`)

```typescript
app.get(
  '/products/:id',
  { schema: { params: z.object({ id: z.string().uuid() }) } },
  async (request, reply) => {
    reply.send(await controller.getById(request.params.id))
  },
)
```

**Path parameter:** `id` must be a valid UUID string. Non-UUID values return HTTP 400.

### Response DTO (confirmed in `services/products.service.ts`)

```typescript
{
  ...product,
  parameters: product.parameters.map((pp) => ({
    key: pp.categoryParameter.key,
    name: pp.categoryParameter.name,
    unit: pp.categoryParameter.unit,
    value: pp.value,
  })),
}
```

### Full response shape

```json
{
  "id": "uuid",
  "name": "APEX Gaming Laptop 15\"",
  "slug": "apex-gaming-laptop-15",
  "description": "...",
  "price": "1799.00",
  "stock": 10,
  "imageUrls": ["https://cdn.example.com/apex-1.jpg"],
  "productTypeId": "uuid",
  "categoryId": "uuid",
  "isActive": true,
  "createdAt": "2026-01-01T00:00:00.000Z",
  "updatedAt": "2026-01-01T00:00:00.000Z",
  "parameters": [
    { "key": "cpu", "name": "CPU", "unit": null, "value": "Intel Core i7-13700H" },
    { "key": "ram", "name": "RAM", "unit": "GB", "value": "32" },
    { "key": "screen_size", "name": "Screen Size", "unit": "inch", "value": "15.6" },
    { "key": "gpu", "name": "GPU", "unit": null, "value": "NVIDIA RTX 4070" },
    { "key": "refresh_rate", "name": "Refresh Rate", "unit": "Hz", "value": "144" }
  ]
}
```

### Field notes

| Field | Type | Notes |
|-------|------|-------|
| `id` | UUID string | Path parameter used for routing |
| `name` | string | Product display name |
| `slug` | string unique | Available in response but NOT used as path param — route uses `id` |
| `description` | string \| null | Optional. Must handle null — show fallback or nothing |
| `price` | string (Decimal serialized) | e.g., `"1799.00"` — format for display: `$1,799` |
| `stock` | integer | `0` = out of stock; `> 0` = in stock. Frontend determines availability |
| `imageUrls` | string[] | May be empty array — handle missing image fallback |
| `productTypeId` | UUID string | ID only — ProductType name requires separate `GET /api/product-types` |
| `categoryId` | UUID string | ID only — Category name + parameters require separate `GET /api/categories/:id` |
| `isActive` | boolean | **Not filtered by backend** — inactive products are returned. Frontend must handle `isActive === false` |
| `createdAt` / `updatedAt` | ISO 8601 string | Timestamps |
| `parameters` | object[] | `{key, name, unit, value}` — `unit` can be `null`; `value` is always string |

### Error responses (confirmed in `AppError.ts` + `server.ts`)

| Scenario | Status | Response body |
|----------|--------|---------------|
| Product not found (valid UUID, no row) | 404 | `{ "error": "Product not found" }` |
| Invalid UUID path param | 400 | `{ "error": "Validation error", "details": [...] }` |
| Unexpected server error | 500 | `{ "error": "Internal server error" }` |

### isActive behavior — important caveat

`findById` uses `prisma.product.findUnique({ where: { id } })` without an `isActive` filter. An inactive product (`isActive: false`) returns HTTP 200 with its full data. **The frontend is responsible for handling inactive products.** Recommended approach: treat `isActive === false` the same as "product not found" — render the not-found state or a "Product unavailable" message.

---

## 2. Verified — Related Products (via existing listing endpoint)

There is **no dedicated related-products or recommendations endpoint**. Related products can be retrieved using the existing `GET /api/products` endpoint:

```
GET /api/products?categoryId={categoryId}&sortBy=price&sortDir=desc&limit=4
```

The frontend must exclude the current product from the result set after fetching. This may require fetching `limit+1` and filtering, or fetching the full set and finding the index.

**Limitation:** This approach returns products from the same category, not personalized recommendations. This is the only supported approach.

---

## 3. Verified — Category Metadata (for breadcrumb and spec labels)

The product response does NOT include category or product type name/slug — only their UUIDs.

To display the breadcrumb ("Home / Laptops / Gaming Laptop") and render parameter labels with units, the frontend must call:

```
GET /api/categories/:id
→ { id, name, slug, productTypeId, parameters: [CategoryParameter] }
```

```
GET /api/product-types (or GET /api/categories and derive productType from category)
→ ProductType[] (to get the product type name for breadcrumb)
```

The `parameters[]` from `GET /api/categories/:id` provide `{key, name, unit, type, sortOrder}` — these match the keys in `GET /api/products/:id` → `parameters[]`. Use `GET /api/categories/:id` to resolve display names (e.g., `"RAM"` → `"RAM (GB)"`) when rendering the specification table.

---

## 4. Verified — No Cart API

There are no cart-related routes, controllers, services, or database models in the backend. Cart operations are **frontend-only** using Zustand `cartStore`.

Confirmed: no `/api/cart`, `/api/orders`, `/api/checkout`, or similar routes in `backend/src/routes/`.

The "Add to Cart" CTA on the ProductPage writes to Zustand `cartStore` only — no API call.

---

## 5. Verified — Availability Determination

The backend does not return a boolean `inStock` field. Frontend availability logic:

```typescript
const inStock = product.stock > 0;
const isAvailable = product.isActive && product.stock > 0;
```

The `stock` field is a plain integer. No "low stock" threshold is defined in the schema.

---

## 6. Verified — Price Format

`price` is a PostgreSQL `Decimal(10,2)` field. Prisma serializes Decimal to string in JSON. Example values: `"1799.00"`, `"2299.99"`. Frontend must parse and format for display (e.g., `"$1,799.00"` or `"$1,799"`).

---

## 7. Inferred from Documentation — Product Routing

The frontend URL for a ProductPage is not defined in the backend. Based on `plan_frontend.md` and typical React Router v6 patterns, the route will likely be `/products/:id` where `:id` is the product UUID. The product `slug` field exists but the backend route accepts only UUID.

**Assumption requiring confirmation:** Whether the frontend router uses `/products/:id` (UUID) or `/products/:slug`.

---

## 8. Unsupported Features — Do Not Design For

| Feature | Status | Reason |
|---------|--------|--------|
| Dedicated related/recommendations endpoint | Not supported | Use `GET /api/products?categoryId=...` |
| Cart persistence across sessions | Not supported | Zustand cartStore is session-only |
| Wishlist / saved products | Not supported | No user account system |
| Product reviews / ratings | Not supported | Not in Prisma schema |
| Discount / sale prices | Not supported | No discount fields in schema |
| Delivery estimate | Not supported | Out of scope |
| Warranty information | Not supported | Out of scope |
| Financing options | Not supported | Out of scope |
| "Frequently bought together" | Not supported | No recommendation engine |
| Inventory reservation | Not supported | No cart API |
| Slug-based product routing | Not confirmed | Backend route uses UUID; slug available in response |

---

## 9. Frontend-Only Behavior

| Behavior | Implementation |
|---------|---------------|
| Add to Cart | Writes `{ productId, name, price, quantity }` to Zustand `cartStore` |
| Quantity selector (1–N) | Local state in ProductPage component |
| Cart badge count | Derived from `cartStore.items.length` or sum of quantities |
| "In stock" / "Out of stock" label | Derived from `product.stock > 0` |
| Inactive product handling | Frontend renders not-found state if `product.isActive === false` |
| Theme switching | Zustand `themeStore` — no API calls |
| Gallery image selection | Local state (selected image index) |

---

## 10. Assumptions Requiring Confirmation

| Assumption | File | Needs confirmation from |
|-----------|------|------------------------|
| Frontend route uses `/products/:id` (UUID, not slug) | `plan_frontend.md` | Project owner |
| Slug is not used in URL for productPage | `plan_frontend.md` | Project owner |
| `imageUrls` prefix / CDN base URL | Backend seed | Project owner |
| `cartStore` persists to `localStorage` (across page refreshes) | `plan_frontend.md` | Implementation |
| Quantity selector upper bound matches `stock` | `plan_frontend.md` | Project owner |
| Related products show up to 4 items | CatalogPage precedent | Project owner |