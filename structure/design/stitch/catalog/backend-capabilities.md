# Backend API Capabilities — CatalogPage

**Source:** Actual backend source code audit (2026-11-27)  
**Files inspected:**
- `backend/src/routes/products.ts`
- `backend/src/routes/categories.ts`
- `backend/src/routes/productTypes.ts`
- `backend/src/repositories/products.repository.ts`
- `backend/src/repositories/categories.repository.ts`
- `backend/prisma/schema.prisma`
- `backend/prisma/seed.ts`
- `backend/src/utils/pagination.ts`
- `backend/src/server.ts`

Do not modify backend code or API contracts. This document describes current capabilities only.

---

## 1. Verified API Endpoints

### 1.1 GET /api/products

**Purpose:** Retrieve a paginated list of products with optional filtering, search, and sorting.

**Request query parameters (Zod schema):**

| Parameter | Type | Default | Notes |
|-----------|------|---------|-------|
| `productTypeId` | UUID string | — | Filter by product type (Laptop, PC, Monitor, Keyboard, Mouse) |
| `categoryId` | UUID string | — | Filter by specific category (e.g., Gaming Laptop) |
| `search` | string | — | Case-insensitive name search (SQL `ILIKE '%value%'`) |
| `sortBy` | `'price' \| 'name' \| 'createdAt'` | — | Sort column; no default sort when omitted |
| `sortDir` | `'asc' \| 'desc'` | — | Sort direction |
| `page` | integer ≥ 1 | `1` | Page number (1-based) |
| `limit` | integer 1–100 | `20` | Items per page |
| `params.{key}` | string | — | Exact match filter on category parameter (see §1.1.1) |

**Querystring parsing:** `qs` library with `allowDots: true` — enables dot notation: `params.ram=32` parses as `{ params: { ram: "32" } }`.

**Response body:**

```json
{
  "products": [
    {
      "id": "uuid",
      "name": "ASUS ROG Zephyrus G14",
      "slug": "asus-rog-zephyrus-g14",
      "description": "...",
      "price": "2499.99",
      "stock": 10,
      "imageUrls": ["https://..."],
      "isActive": true,
      "productTypeId": "uuid",
      "categoryId": "uuid",
      "createdAt": "2026-01-01T00:00:00.000Z",
      "updatedAt": "2026-01-01T00:00:00.000Z",
      "parameters": [
        { "key": "cpu", "value": "AMD Ryzen 9 7945HX", "name": "CPU", "unit": null, "type": "STRING" },
        { "key": "ram", "value": "32", "name": "RAM", "unit": "GB", "type": "NUMBER" }
      ]
    }
  ],
  "meta": {
    "total": 3,
    "page": 1,
    "limit": 20,
    "totalPages": 1
  }
}
```

#### 1.1.1 params.{key} filter — exact match AND logic

The `params` filter applies one or more exact string matches to product parameters, combined with AND logic:

```
GET /api/products?categoryId={id}&params.ram=32&params.gpu=NVIDIA RTX 4070
```

This matches products where BOTH `ram = "32"` AND `gpu = "NVIDIA RTX 4070"`.

**Constraints:**
- Values are **case-sensitive** exact string matches — `params.gpu=nvidia rtx 4070` will not match `NVIDIA RTX 4070`
- Multiple keys → AND (all must match)
- Single key → single value only (no multi-value OR for the same key)
- For NUMBER-type parameters, the value is stored as a plain numeric string: `ram=32`, `screen_size=15.6`

---

### 1.2 GET /api/product-types

**Purpose:** Retrieve all product types (used for top-level navigation and category filtering).

**Request:** No query parameters.

**Response:**

```json
[
  { "id": "uuid", "name": "Keyboard", "slug": "keyboard", "createdAt": "...", "updatedAt": "..." },
  { "id": "uuid", "name": "Laptop", "slug": "laptop", "createdAt": "...", "updatedAt": "..." },
  { "id": "uuid", "name": "Monitor", "slug": "monitor", "createdAt": "...", "updatedAt": "..." },
  { "id": "uuid", "name": "Mouse", "slug": "mouse", "createdAt": "...", "updatedAt": "..." },
  { "id": "uuid", "name": "PC", "slug": "pc", "createdAt": "...", "updatedAt": "..." }
]
```

Ordered alphabetically by name.

---

### 1.3 GET /api/categories

**Purpose:** Retrieve all categories, optionally filtered by product type.

**Request query parameters:**

| Parameter | Type | Default | Notes |
|-----------|------|---------|-------|
| `productTypeId` | UUID string | — | Filter categories by product type |

**Response:**

```json
[
  { "id": "uuid", "name": "Gaming Laptop", "slug": "gaming-laptop", "productTypeId": "uuid", "createdAt": "...", "updatedAt": "..." },
  { "id": "uuid", "name": "Ultrabook", "slug": "ultrabook", "productTypeId": "uuid", "createdAt": "...", "updatedAt": "..." }
]
```

Ordered alphabetically by name.

---

### 1.4 GET /api/categories/:id

**Purpose:** Retrieve a single category with its filterable parameters (used to build the filter panel).

**Response:**

```json
{
  "id": "uuid",
  "name": "Gaming Laptop",
  "slug": "gaming-laptop",
  "productTypeId": "uuid",
  "parameters": [
    { "id": "uuid", "name": "CPU", "key": "cpu", "type": "STRING", "unit": null, "sortOrder": 0, "categoryId": "uuid" },
    { "id": "uuid", "name": "RAM", "key": "ram", "type": "NUMBER", "unit": "GB", "sortOrder": 1, "categoryId": "uuid" },
    { "id": "uuid", "name": "Screen Size", "key": "screen_size", "type": "NUMBER", "unit": "inch", "sortOrder": 2, "categoryId": "uuid" },
    { "id": "uuid", "name": "GPU", "key": "gpu", "type": "STRING", "unit": null, "sortOrder": 3, "categoryId": "uuid" },
    { "id": "uuid", "name": "Refresh Rate", "key": "refresh_rate", "type": "NUMBER", "unit": "Hz", "sortOrder": 4, "categoryId": "uuid" }
  ]
}
```

Parameters are ordered by `sortOrder` asc. Maximum 5 parameters per category (enforced at the data model level).

---

### 1.5 GET /api/categories/:id/parameters/:key/values

**Purpose:** Retrieve distinct values for a specific parameter within a category (used to populate filter option lists).

**Example:** `GET /api/categories/{gaming-laptop-id}/parameters/ram/values`

**Response:**

```json
["16", "32", "64"]
```

Returns distinct `ProductParameter.value` strings for active products in this category, ordered alphabetically.

**Important:** Values are raw stored strings. For NUMBER-type parameters: `"16"`, `"32"` (no unit suffix). The unit comes from the CategoryParameter definition. Frontend must append the unit label for display: `"32"` → display as `"32 GB"`.

---

### 1.6 GET /api/products/:id

**Purpose:** Retrieve a single product by ID (used by ProductPage and product card navigation).

**Response:** Single product object with parameters, same shape as the array item in §1.1.

---

## 2. Product Entity Fields

| Field | Type | Notes |
|-------|------|-------|
| `id` | UUID | |
| `name` | string | Product display name |
| `slug` | string | URL-safe identifier |
| `description` | string | Long-form description |
| `price` | `decimal(10,2)` as string | Fixed single price — "1799.99" |
| `stock` | integer | Inventory count ≥ 0 |
| `imageUrls` | string[] | Zero or more image URLs |
| `isActive` | boolean | Inactive products excluded from API responses |
| `productTypeId` | UUID | Reference to ProductType |
| `categoryId` | UUID | Reference to Category |
| `parameters` | array | Product-specific parameter values |
| `createdAt` | ISO 8601 | Used for `sortBy=createdAt` |
| `updatedAt` | ISO 8601 | |

**Availability derivation:** `stock > 0` → "In stock". `stock === 0` → "Out of stock". No availability text field exists in the API; this is a frontend-computed presentation.

---

## 3. Known Category Parameters (Seed Data)

### Gaming Laptop

| Name | Key | Type | Unit | Seed values |
|------|-----|------|------|-------------|
| CPU | `cpu` | STRING | — | "AMD Ryzen 9 7945HX", "Intel Core i9-13900HX", "Intel Core i9-13980HX" |
| RAM | `ram` | NUMBER | GB | "16", "32" |
| Screen Size | `screen_size` | NUMBER | inch | "14", "16", "17.3" |
| GPU | `gpu` | STRING | — | "NVIDIA RTX 4070 Ti", "NVIDIA RTX 4080", "NVIDIA RTX 4090" |
| Refresh Rate | `refresh_rate` | NUMBER | Hz | "165", "240" |

### Ultrabook

| Name | Key | Type | Unit |
|------|-----|------|------|
| CPU | `cpu` | STRING | — |
| RAM | `ram` | NUMBER | GB |
| Screen Size | `screen_size` | NUMBER | inch |
| Battery Life | `battery_life` | NUMBER | h |
| Weight | `weight` | NUMBER | kg |

Other categories (Gaming PC, Office PC, Gaming Monitor, Professional Monitor, Mechanical Keyboard, Wireless Keyboard, Gaming Mouse, Office Mouse) follow the same parameter structure. Full seed data in `backend/prisma/seed.ts`.

---

## 4. Error Response Format

| Scenario | Status | Body |
|----------|--------|------|
| Application error | 4xx/5xx | `{ "error": "Human-readable message" }` |
| Validation error | 400 | `{ "error": "Validation error", "details": [...] }` |
| Not found | 404 | `{ "error": "Not found" }` |
| Internal server error | 500 | `{ "error": "Internal server error" }` |

---

## 5. Frontend Presentation Requirements (Not in API)

These features are needed by the CatalogPage UI but require frontend-only implementation:

| Feature | Description | Implementation |
|---------|-------------|----------------|
| Filter count badge | "Filters (2)" when active filters exist | Count active `params.*` entries in URL state |
| Clear all filters button | Removes all `params.*` from URL | Frontend URL state manipulation |
| Active filter chips | Chips showing active filter key+value | Derived from URL `params.*` |
| "X products found" | Display `meta.total` from API response | Frontend renders `meta.total` |
| Unit formatting | "32 GB", "15.6 inch", "240 Hz" | Frontend appends unit from CategoryParameter.unit |
| Filter label formatting | "NVIDIA RTX 4070" → display as-is | Direct string from API; no normalization needed |
| Price display | "$1,799.00" from "1799.99" | `Intl.NumberFormat` with USD currency |
| Availability text | "In stock" / "Out of stock" | `stock > 0` → "In stock" |
| Pagination display | "Page 1 of 3" | `meta.page` / `meta.totalPages` |
| URL state management | Filter/sort/page state in URL params | `useSearchParams` / React Router |

---

## 6. Unsupported Features

The following features are **not supported** by the current backend API. Do not design for them or promise them in the UI.

| Feature | Why unsupported | Potential workaround |
|---------|-----------------|----------------------|
| Price range filter | No `minPrice` / `maxPrice` params in product route | Could be added as a backend change — not in current scope |
| Multi-value OR filter (same key) | `params` is AND-only; single value per key | Show only single-select filter per parameter |
| Faceted counts ("RTX 4070 (3)") | No endpoint returns per-value product counts | Could be approximated by fetching all values + products client-side — not efficient |
| Product ratings or reviews | Not in data model | Not in scope |
| Discount/sale prices | Not in data model | Not in scope |
| Featured product flag | No `isFeatured` field on Product | HomePage uses `sortBy=createdAt&sortDir=desc` as proxy |
| Wishlist / save product | No user account system | Not in scope |
| Compare products | No comparison endpoint | Not in scope |
| Infinite scroll | Pagination is page-based, not cursor-based | Could implement but not planned |
| Filter suggestions / typeahead | No autocomplete endpoint | Not in scope |

---

## 7. URL and State Mapping

The CatalogPage URL reflects the current filter state so that links are shareable.

### Recommended URL parameter mapping

| UI State | URL parameter | API parameter |
|----------|--------------|---------------|
| Active product type | `productTypeId=uuid` | `productTypeId` |
| Active category | `categoryId=uuid` | `categoryId` |
| Search query | `search=value` | `search` |
| Sort column | `sortBy=price` | `sortBy` |
| Sort direction | `sortDir=desc` | `sortDir` |
| Page number | `page=2` | `page` |
| Items per page | `limit=12` | `limit` |
| Category param filter | `params.ram=32` | `params.ram` |

### Example URL — Gaming Laptops with RAM filter

```
/catalog?categoryId=gaming-laptop-uuid&params.ram=32&sortBy=price&sortDir=desc&page=1&limit=12
```

**Theme switching must not modify the URL or trigger new API requests.** Theme state lives in `localStorage` only.

---

## 8. Assumptions Requiring Confirmation

| Assumption | Context | Risk if wrong |
|------------|---------|---------------|
| `GET /api/products/:id` exists and is registered | Inferred from repository pattern; not inspected directly | ProductPage cannot fetch individual product |
| `imageUrls` returns absolute URLs | Seed uses `placehold.co` URLs; production URLs unknown | Image tags may need base URL prefix |
| `params` values are case-sensitive | Inferred from exact-match SQL (`value = ?`), not `ILIKE` | Filters may silently return no results if case mismatched |
| All ProductType and Category IDs are stable UUIDs | Seed generates UUIDs on first run; re-seeding changes IDs | Navigation links based on UUIDs break after re-seed — use slugs if available |
| `isActive: false` products are excluded from all responses | Repository filters `isActive: true` in `findParameterValues` | Inactive products may appear in product list if repo filter differs |