# PCShop HomePage — Shared Mock Product Dataset

This dataset is used consistently across all three homepage Stitch prompts.
All three themes show products from this list with the same names, prices, and specifications.
Visual presentation (image style, card layout, badge styling) differs per theme.

---

## Product Catalogue (6 products)

### Product 1 — APEX Gaming Laptop 15"
| Field | Value |
|-------|-------|
| Product type | Laptop |
| Category | Gaming Laptop |
| Price | $1,799 |
| GPU | RTX 4070 |
| RAM | 32 GB DDR5 |
| CPU | Intel Core i7-13700H |
| Storage | 1 TB NVMe SSD |
| Display | 15.6" FHD 144 Hz |

---

### Product 2 — NOVA Ultrabook 14"
| Field | Value |
|-------|-------|
| Product type | Laptop |
| Category | Ultrabook |
| Price | $1,199 |
| RAM | 16 GB LPDDR5 |
| CPU | Intel Core i5-1340P |
| Storage | 512 GB NVMe SSD |
| Display | 14" 2560×1600 90 Hz |
| Weight | 1.2 kg |

---

### Product 3 — TITAN PC Tower
| Field | Value |
|-------|-------|
| Product type | PC |
| Category | Gaming PC |
| Price | $2,499 |
| GPU | RTX 4080 |
| RAM | 64 GB DDR5 |
| CPU | Intel Core i9-14900K |
| Storage | 2 TB NVMe SSD |

---

### Product 4 — NEXUS Monitor 32"
| Field | Value |
|-------|-------|
| Product type | Monitor |
| Category | Gaming Monitor |
| Price | $799 |
| Refresh rate | 240 Hz |
| Resolution | QHD 2560×1440 |
| Panel | IPS |
| Response time | 1 ms |

---

### Product 5 — STRIKER Keyboard PRO
| Field | Value |
|-------|-------|
| Product type | Keyboard |
| Category | Mechanical Keyboard |
| Price | $229 |
| Switches | Cherry MX Red |
| Connection | Wireless / USB |
| Layout | TKL (Tenkeyless) |
| Backlight | Per-key RGB |

---

### Product 6 — SWIFT Mouse Pro
| Field | Value |
|-------|-------|
| Product type | Mouse |
| Category | Gaming Mouse |
| Price | $89 |
| DPI | 25,600 |
| Connection | Wireless |
| Buttons | 7 programmable |
| Weight | 68 g |

---

## Badge Display per Theme

Each theme shows 2–3 badges per product card. Badge text is identical; visual styling (color, background, font) is theme-specific.

| Product | Badges (shown on all themes) | Optional 3rd badge (professional only) |
|---------|------------------------------|----------------------------------------|
| APEX Gaming Laptop 15" | "RTX 4070", "32 GB DDR5" | "Intel i7" |
| NOVA Ultrabook 14" | "16 GB RAM", "512 GB SSD" | "Intel i5" |
| TITAN PC Tower | "RTX 4080", "64 GB DDR5" | "Intel i9" |
| NEXUS Monitor 32" | "240 Hz", "QHD" | — |
| STRIKER Keyboard PRO | "Cherry MX", "Wireless" | — |
| SWIFT Mouse Pro | "25600 DPI", "Wireless" | — |

---

## Visible Product Count per Theme

| Theme | Products shown | Grid layout |
|-------|---------------|-------------|
| Premium Minimalism | 6 (all) — see note | 3-column, 2 rows, generous spacing |
| Gaming & Technology | 6 (all) | 3-column, balanced |
| Modern Technology Store | 6 (all) | 3-column, balanced |

**Premium product count — updated 2026-11-27 (pending human approval):**  
The original specification defined Premium as showing 4 products for editorial restraint. The V2 generation shows 6 products (3-column × 2-row grid). The proposed resolution is 6 products for all three themes, achieving functional parity while preserving the Premium editorial identity through generous spacing (24px card gap, 80px gutters). This change is documented in `home.md §7.1` and is pending explicit project owner sign-off. If the owner chooses 4 products, revert this entry to "4 (Products 1–4) | 3-column or 4-column, 1 row".

---

## Scope Notes

These products are mock data for design generation only.

All six products are within the existing project scope:
- Product types used: Laptop, PC, Monitor, Keyboard, Mouse — all defined in the data model
- No user accounts, no order history, no wishlist required to show these products
- No discounts, no ratings, no reviews — not in the product entity
- Prices are fixed single values — matching the `price decimal(10,2)` field in the product entity
- "In stock" status is derived from the `stock int` field — always visible (not hover-only)