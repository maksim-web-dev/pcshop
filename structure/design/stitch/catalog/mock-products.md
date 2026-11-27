# PCShop CatalogPage — Shared Mock Product Dataset

**Version:** 1.0 (2026-11-27)  
**Used by:** All three CatalogPage Stitch prompts (Premium, Gaming, Professional)

---

## Catalog Scenario

**Selected product type:** Laptop  
**Selected category:** Gaming Laptop  
**URL example:** `/catalog?categoryId={gaming-laptop-uuid}&sortBy=price&sortDir=desc`

This category was chosen because:
- It has the most filterable parameters (CPU, RAM, GPU, Screen Size, Refresh Rate)
- It allows demonstration of all backend-supported filter capabilities
- APEX Gaming Laptop 15" (the HomePage mock product) belongs to this category

**Category parameters** (from seed data, `GET /api/categories/{id}`):

| Name | API key | Type | Unit | Display label |
|------|---------|------|------|---------------|
| CPU | `cpu` | STRING | — | CPU |
| RAM | `ram` | NUMBER | GB | RAM |
| Screen Size | `screen_size` | NUMBER | inch | Screen Size |
| GPU | `gpu` | STRING | — | GPU |
| Refresh Rate | `refresh_rate` | NUMBER | Hz | Refresh Rate |

---

## Product Dataset (12 products total — 2 pages of 6)

### Source Labels

- `[HOMEPAGE]` — Reused from homepage mock-products.md without modification
- `[MOCK]` — New mock data added for catalog design purposes; not in backend seed

Product names, prices, and specifications marked `[HOMEPAGE]` must not be changed.

---

### Full Dataset (sorted by price descending — default sort)

#### Product 1 — ION Gaming Laptop 14" `[MOCK]`

| Field | Value |
|-------|-------|
| Price | $3,499 |
| CPU | Intel Core i9-13980HX |
| RAM | 64 GB DDR5 |
| Screen Size | 14 inch |
| GPU | NVIDIA RTX 4090 |
| Refresh Rate | 165 Hz |
| Availability | In stock |
| Standard badges | "RTX 4090", "64 GB DDR5" |
| Professional 3rd badge | "Intel i9" |

---

#### Product 2 — DOMINION Gaming Laptop 16" `[MOCK]`

| Field | Value |
|-------|-------|
| Price | $3,199 |
| CPU | Intel Core i9-13900HX |
| RAM | 64 GB DDR5 |
| Screen Size | 16 inch |
| GPU | NVIDIA RTX 4090 |
| Refresh Rate | 240 Hz |
| Availability | In stock |
| Standard badges | "RTX 4090", "64 GB DDR5" |
| Professional 3rd badge | "Intel i9" |

---

#### Product 3 — FORGE Gaming Laptop 15" `[MOCK]`

| Field | Value |
|-------|-------|
| Price | $2,799 |
| CPU | Intel Core i9-13900HX |
| RAM | 32 GB DDR5 |
| Screen Size | 15.6 inch |
| GPU | NVIDIA RTX 4080 Ti |
| Refresh Rate | 240 Hz |
| Availability | In stock |
| Standard badges | "RTX 4080 Ti", "32 GB DDR5" |
| Professional 3rd badge | "Intel i9" |

---

#### Product 4 — GRUNT Gaming Laptop 17" `[MOCK]`

| Field | Value |
|-------|-------|
| Price | $2,599 |
| CPU | AMD Ryzen 9 7945HX |
| RAM | 64 GB DDR5 |
| Screen Size | 17.3 inch |
| GPU | NVIDIA RTX 4080 |
| Refresh Rate | 240 Hz |
| Availability | In stock |
| Standard badges | "RTX 4080", "64 GB DDR5" |
| Professional 3rd badge | "Ryzen 9" |

---

#### Product 5 — ARCTUS Gaming Laptop 17" `[MOCK]`

| Field | Value |
|-------|-------|
| Price | $2,299 |
| CPU | Intel Core i9-13900HX |
| RAM | 32 GB DDR5 |
| Screen Size | 17.3 inch |
| GPU | NVIDIA RTX 4080 |
| Refresh Rate | 240 Hz |
| Availability | In stock |
| Standard badges | "RTX 4080", "32 GB DDR5" |
| Professional 3rd badge | "Intel i9" |

---

#### Product 6 — KORA Gaming Laptop 17" `[MOCK]`

| Field | Value |
|-------|-------|
| Price | $2,099 |
| CPU | Intel Core i7-13700H |
| RAM | 32 GB DDR5 |
| Screen Size | 17.3 inch |
| GPU | NVIDIA RTX 4070 Ti |
| Refresh Rate | 240 Hz |
| Availability | In stock |
| Standard badges | "RTX 4070 Ti", "32 GB DDR5" |
| Professional 3rd badge | "Intel i7" |

---

#### Product 7 — ECHO Gaming Laptop 14" `[MOCK]`

| Field | Value |
|-------|-------|
| Price | $1,999 |
| CPU | AMD Ryzen 9 7945HX |
| RAM | 32 GB DDR5 |
| Screen Size | 14 inch |
| GPU | NVIDIA RTX 4070 Ti |
| Refresh Rate | 165 Hz |
| Availability | In stock |
| Standard badges | "RTX 4070 Ti", "32 GB DDR5" |
| Professional 3rd badge | "Ryzen 9" |

---

#### Product 8 — LYNX Gaming Laptop 15" `[MOCK]`

| Field | Value |
|-------|-------|
| Price | $1,899 |
| CPU | AMD Ryzen 9 7945HX |
| RAM | 32 GB DDR5 |
| Screen Size | 15.6 inch |
| GPU | NVIDIA RTX 4070 |
| Refresh Rate | 165 Hz |
| Availability | In stock |
| Standard badges | "RTX 4070", "32 GB DDR5" |
| Professional 3rd badge | "Ryzen 9" |

---

#### Product 9 — APEX Gaming Laptop 15" `[HOMEPAGE]`

| Field | Value |
|-------|-------|
| Price | $1,799 |
| CPU | Intel Core i7-13700H |
| RAM | 32 GB DDR5 |
| Screen Size | 15.6 inch |
| GPU | NVIDIA RTX 4070 |
| Refresh Rate | 144 Hz |
| Availability | In stock |
| Standard badges | "RTX 4070", "32 GB DDR5" |
| Professional 3rd badge | "Intel i7" |

This product is the APEX Gaming Laptop 15" from the HomePage mock dataset. Its name, price, and specifications must remain unchanged from `homepage/mock-products.md`.

---

#### Product 10 — JOLT Gaming Laptop 16" `[MOCK]`

| Field | Value |
|-------|-------|
| Price | $1,699 |
| CPU | AMD Ryzen 7 7745HX |
| RAM | 16 GB DDR5 |
| Screen Size | 16 inch |
| GPU | NVIDIA RTX 4060 Ti |
| Refresh Rate | 165 Hz |
| Availability | In stock |
| Standard badges | "RTX 4060 Ti", "16 GB DDR5" |
| Professional 3rd badge | "Ryzen 7" |

---

#### Product 11 — CIPHER Gaming Laptop 15" `[MOCK]`

| Field | Value |
|-------|-------|
| Price | $1,499 |
| CPU | AMD Ryzen 7 7745HX |
| RAM | 16 GB DDR5 |
| Screen Size | 15.6 inch |
| GPU | NVIDIA RTX 4060 |
| Refresh Rate | 165 Hz |
| Availability | In stock |
| Standard badges | "RTX 4060", "16 GB DDR5" |
| Professional 3rd badge | "Ryzen 7" |

---

#### Product 12 — HYDRA Gaming Laptop 15" `[MOCK]`

| Field | Value |
|-------|-------|
| Price | $1,299 |
| CPU | Intel Core i5-12500H |
| RAM | 16 GB DDR5 |
| Screen Size | 15.6 inch |
| GPU | NVIDIA RTX 4060 |
| Refresh Rate | 144 Hz |
| Availability | In stock |
| Standard badges | "RTX 4060", "16 GB DDR5" |
| Professional 3rd badge | "Intel i5" |

---

## Catalog State Scenarios for Design Mockups

### Scenario A — Default View (page 1, no filters)

Use this scenario for the **main catalog page design**.

| State | Value |
|-------|-------|
| Category | Gaming Laptop |
| Active filters | None |
| Sort | Price: High to Low |
| Page | 1 of 2 |
| Products per page | 6 |
| Total products | 12 |
| Result count line | "Showing 6 of 12 Gaming Laptops" |
| Visible products (top to bottom) | ION, DOMINION, FORGE, GRUNT, ARCTUS, KORA |
| Pagination | ← 1 **2** → |

---

### Scenario B — Active Filter: RAM = 32 GB (page 1)

Use this scenario to demonstrate filter functionality in the **active filter chip** and sidebar design.

| State | Value |
|-------|-------|
| Category | Gaming Laptop |
| Active filter | RAM: 32 GB |
| Sort | Price: High to Low |
| Page | 1 of 1 |
| Products per page | 6 |
| Total products (filtered) | 6 |
| Result count line | "Showing 6 of 6 Gaming Laptops" |
| API call | `GET /api/products?categoryId={uuid}&params.ram=32&sortBy=price&sortDir=desc` |
| Visible products (top to bottom) | FORGE, ARCTUS, KORA, ECHO, LYNX, APEX |
| Pagination | Not shown (single page) |
| Active filter chip | "RAM: 32 GB ×" |

---

## Filter Panel Available Values

Values returned by `GET /api/categories/{gaming-laptop-id}/parameters/{key}/values`:

| Parameter | API key | Available values (raw) | Display format |
|-----------|---------|------------------------|----------------|
| CPU | `cpu` | "AMD Ryzen 7 7745HX", "AMD Ryzen 9 7945HX", "Intel Core i5-12500H", "Intel Core i7-13700H", "Intel Core i9-13900HX", "Intel Core i9-13980HX" | As-is |
| RAM | `ram` | "16", "32", "64" | "16 GB", "32 GB", "64 GB" |
| Screen Size | `screen_size` | "14", "15.6", "16", "17.3" | "14 inch", "15.6 inch", "16 inch", "17.3 inch" |
| GPU | `gpu` | "NVIDIA RTX 4060", "NVIDIA RTX 4060 Ti", "NVIDIA RTX 4070", "NVIDIA RTX 4070 Ti", "NVIDIA RTX 4080", "NVIDIA RTX 4080 Ti", "NVIDIA RTX 4090" | As-is |
| Refresh Rate | `refresh_rate` | "144", "165", "240" | "144 Hz", "165 Hz", "240 Hz" |

**Note:** The filter panel shows checkboxes or radio buttons. Selecting a value adds `params.{key}={value}` to the URL and triggers a new API request. The filter panel renders only the first 4 parameters by default for the sidebar design mock (CPU, RAM, GPU, Refresh Rate); Screen Size is collapsed or below the fold.

---

## Consistency Requirements

The following must be consistent in all three Stitch prompts:

| Item | Required value |
|------|---------------|
| Catalog category | Gaming Laptop |
| Total products (no filter) | 12 |
| Products per page | 6 |
| Page count | 2 |
| Active filter demo | RAM = 32 GB |
| Filtered product count | 6 |
| Product names, prices, badges | Exactly as above |
| Sort default | Price: High to Low |
| Availability | All "In stock" |

Do not alter product names, prices, or badge text between themes.

---

## Scope Notes

This dataset is mock data for design generation only.

- These products are not in the backend seed database
- APEX Gaming Laptop 15" matches the HomePage mock data exactly
- All other products are fictional gaming laptops with realistic specifications
- Product images in Stitch designs will be AI-generated mock images — replace with backend `imageUrls[]` at implementation
- No discounts, ratings, reviews, or delivery promises appear on any product card
- All prices are fixed single values matching the `price decimal(10,2)` backend field format