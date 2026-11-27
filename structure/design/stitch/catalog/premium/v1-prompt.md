# Google Stitch Prompt — PCShop CatalogPage: Premium Minimalism

**Use this exact prompt in the existing Premium Minimalism Stitch project.**  
**Create a new CatalogPage. Do not modify the existing HomePage V1 or V2 designs.**

---

## Prompt

You are designing a CatalogPage for **PCShop**, an online computer hardware store that sells gaming laptops, ultrabooks, desktop PCs, monitors, keyboards, and mice.

PCShop has three interchangeable visual themes. This page belongs to the **Premium Minimalism** theme.

---

### Step 1 — Context: Existing Project

This is an addition to an existing Stitch project. The project already contains two pages:
- HomePage V1 (original generation — preserve exactly)
- HomePage V2 (approved revision — preserve exactly)

Create a new page called **"CatalogPage - Premium Minimalism"** at desktop viewport width **1440px**.

Do not modify or delete the existing HomePage pages.

Use the **HomePage V2** design as your visual reference for all design decisions: colors, typography, card styles, header, footer, navigation, and ThemeSwitcher.

---

### Step 2 — Page Objective

The CatalogPage allows customers to browse a filtered list of products within a specific category. It must:

- Display 6 gaming laptop products in the first page of results
- Provide a minimal filter sidebar with quiet checkbox filters for CPU, RAM, GPU, and Refresh Rate
- Show an active filter chip for a RAM filter that is currently applied
- Show a sort control and product result count above the grid
- Show pagination below the grid

The page demonstrates a customer who has filtered Gaming Laptops by RAM = 32 GB and is seeing 6 results.

The editorial restraint of the Premium theme must be maintained — the catalog page is a gallery, not a dense dashboard.

---

### Step 3 — Theme Identity: Premium Minimalism

This theme targets design-conscious technology buyers aged 28–45 who value editorial restraint and generous breathing room.

**Color palette:**
- Page background: `#FAFAF8` (warm off-white, paper-like — not pure white)
- Product cards: `#FFFFFF` (crisp white on warm ground)
- Specification badges: `#F4F3F0` (subtle warm gray badge background)
- Primary text: `#1A1A1A` (near-black graphite)
- Secondary text: `#5C5C5C` (muted graphite)
- Truly tertiary text: `#9E9E9E` (muted)
- CTA buttons: `#1A1A1A` background, `#FAFAF8` text
- Card borders: `#E5E0DB` (warm off-white border)
- Header border: `1px #E5E0DB` bottom
- Footer background: `#1A1A1A`
- Footer text: `#FAFAF8`

**No decorative accent colors.** The only accent color is `#1A1A1A` graphite.

**Forbidden:** Blue, purple, green, red, gold, gradients, glow effects, glassmorphism, dark backgrounds outside the footer.

**Typography:**
- Playfair Display 400 for section headings (h2 level), category labels — classical serif
- DM Sans for all UI text: navigation, prices, product names, badges, body text, filter labels, pagination
- Never all-caps headings in Premium
- Never Playfair Display for small functional text (badges, prices, navigation links)

**Border radius:**
- Cards and CTA buttons: 4px
- Badges: 2px

**Spacing:**
- Page gutters: 80px desktop
- Section spacing: 64px
- Card gap: 24px
- Internal card padding: 16px

---

### Step 4 — Header (identical to HomePage V2)

The header is identical to the existing Premium Minimalism HomePage V2 header.

- Background: `#FAFAF8`
- Bottom border: `1px solid #E5E0DB`
- Height: 72px
- Left: PCShop wordmark in `#1A1A1A` (sans-serif logotype)
- Center: horizontal navigation — Laptops | PCs | Monitors | Peripherals (DM Sans, `#1A1A1A`)
- "Laptops" navigation item is **active** (underlined in `#1A1A1A`) because we are in the Laptops category
- Right: ThemeSwitcher dropdown "[Premium ▾]" + search icon + cart icon (`#1A1A1A` badge)
- No "Sign In", no "My Account", no "Deals"

---

### Step 5 — Breadcrumb

Below the header, above the catalog layout:

```
Home / Laptops / Gaming Laptop
```

- DM Sans 14px `#5C5C5C`
- "Home" and "Laptops" are linked (underline on hover)
- "Gaming Laptop" is the current page — `#1A1A1A`, not linked
- Separator: `/`

---

### Step 6 — Page Layout (Two-Column)

```
Left column (260px)         Right column (remaining width, ~1020px with 80px gutters)
────────────────────────────────────────────────────────────────────────────────────
Category nav                Sort bar + result count
Filter sidebar              Active filter chip row
  [RAM filter]              Product grid (3 columns)
  [GPU filter]              Pagination
  [CPU filter]
  [Refresh Rate filter]
                       
────────────────────────────────────────────────────────────────────────────────────
```

**Left sidebar:** No strong background — blends with `#FAFAF8` page. A subtle `1px #E5E0DB` right divider separates it from main content. The sidebar is minimal and unobtrusive.

---

### Step 7 — Left Sidebar: Category Navigation

At the top of the sidebar:

```
Laptops                    ← Playfair Display 14px heading, `#1A1A1A`
─────────────
▸ Gaming Laptop            ← ACTIVE — `#1A1A1A` semibold, left border `2px solid #1A1A1A`
  Ultrabook                ← `#5C5C5C`
```

---

### Step 8 — Left Sidebar: Filter Panel

The filter panel is quiet and editorial — minimal visual weight.

**Filter group design:**
- Group label: DM Sans 12px 600 uppercase letter-spacing, `#5C5C5C` → example: "RAM"
- Thin `1px #E5E0DB` separator above each group
- Checkboxes: minimal `#E5E0DB` border square, `#1A1A1A` filled when checked
- Checked state: `#1A1A1A` filled square with white checkmark
- Option text: DM Sans 14px `#1A1A1A`
- Selected option: DM Sans 14px 600 `#1A1A1A`

**Filter groups to display (top to bottom):**

**RAM**
- ☐ 16 GB
- ☑ 32 GB ← ACTIVE FILTER — `#1A1A1A` checked, 600 weight label
- ☐ 64 GB

**GPU**
- ☐ NVIDIA RTX 4060
- ☐ NVIDIA RTX 4060 Ti
- ☐ NVIDIA RTX 4070
- ☐ NVIDIA RTX 4070 Ti
- ☐ NVIDIA RTX 4080
- ☐ NVIDIA RTX 4080 Ti
- ☐ NVIDIA RTX 4090

**CPU**
- ☐ AMD Ryzen 7 7745HX
- ☐ AMD Ryzen 9 7945HX
- ☐ Intel Core i5-12500H
- ☐ Intel Core i7-13700H
- ☐ Intel Core i9-13900HX
- ☐ Intel Core i9-13980HX

**Refresh Rate**
- ☐ 144 Hz
- ☐ 165 Hz
- ☐ 240 Hz

**Sidebar note:**
- "1 filter active" in DM Sans 12px `#5C5C5C` appears at the top of the sidebar
- "Clear all" link: DM Sans 12px `#5C5C5C`, underline on hover — editorial and unobtrusive

---

### Step 9 — Sort Bar and Active Filter Chips

**Sort bar row:**
```
6 Gaming Laptops                               Sort: Price ↓
```
- Result count: Playfair Display 20px `#1A1A1A` — "6 Gaming Laptops"
- Sort control: DM Sans 14px, `#FFFFFF` background, `1px #E5E0DB` border, `#1A1A1A` text, 4px radius

**Sort options (shown in dropdown, collapsed by default):**
- Price: High to Low ← active
- Price: Low to High
- Name: A–Z
- Newest

**Active filter chip row (below sort bar, above grid):**
```
[RAM: 32 GB ×]    Clear all
```
- Chip: `#F4F3F0` background, `1px #E5E0DB` border, DM Sans 13px `#1A1A1A` text "RAM: 32 GB", `×` in `#9E9E9E`
- Chip border radius: 2px (consistent with card radius — no pill shapes in Premium)
- "Clear all": DM Sans 12px `#5C5C5C`, underline on hover

---

### Step 10 — Product Grid (6 products, 3 columns × 2 rows)

Display 6 gaming laptops in a 3-column grid. These are the products visible after applying the RAM = 32 GB filter, sorted by price high to low.

**Product card design (from V2 homepage):**
- Card background: `#FFFFFF`
- Border: `1px solid #E5E0DB`
- Border radius: 4px
- Hover: very subtle ambient shadow `box-shadow: 0 2px 8px rgba(0,0,0,0.08)` (soft-lift only)
- Card padding: 16px

**Card content (top to bottom):**
1. Product image — warm, clean photography, aspect ratio 4:3
2. Product name — Playfair Display 15px 400 `#1A1A1A`
3. Price — DM Sans 18px 700 `#1A1A1A` (e.g., "$2,799")
4. Specification badges — 2 badges, `#F4F3F0` background, `#1A1A1A` text, DM Sans 12px, 2px radius
5. Availability — "In stock" DM Sans 12px 400 `#5C5C5C` (no dot, no color — purely typographic)
6. CTA button — "Add to Cart" DM Sans 14px 600, `#1A1A1A` fill, `#FAFAF8` text, 4px radius, full width

**6 products to display (RAM = 32 GB filter active, sorted by price high to low):**

Row 1 (left to right):
1. **FORGE Gaming Laptop 15"** — $2,799 — Badges: "RTX 4080 Ti" / "32 GB DDR5" — In stock
2. **ARCTUS Gaming Laptop 17"** — $2,299 — Badges: "RTX 4080" / "32 GB DDR5" — In stock
3. **KORA Gaming Laptop 17"** — $2,099 — Badges: "RTX 4070 Ti" / "32 GB DDR5" — In stock

Row 2 (left to right):
4. **ECHO Gaming Laptop 14"** — $1,999 — Badges: "RTX 4070 Ti" / "32 GB DDR5" — In stock
5. **LYNX Gaming Laptop 15"** — $1,899 — Badges: "RTX 4070" / "32 GB DDR5" — In stock
6. **APEX Gaming Laptop 15"** — $1,799 — Badges: "RTX 4070" / "32 GB DDR5" — In stock

**Do not add star ratings, discount badges, review counts, or delivery promises.**

Maintain generous spacing between cards (24px gap). The grid should feel airy, not dense.

---

### Step 11 — Pagination

Below the product grid:

```
← Previous    1    Next →
```

- DM Sans 14px `#5C5C5C` for Previous/Next (disabled, greyed out at page 1)
- Page 1 button: `#1A1A1A` background, `#FAFAF8` text, DM Sans 14px 600, 4px radius
- Simple horizontal row, centered below the grid

---

### Step 12 — Footer (identical to HomePage V2)

The footer is identical to the Premium Minimalism HomePage V2 footer.

- Background: `#1A1A1A`
- No decorative top line
- 4 columns: Shop | Browse | Information | Contact
- Column headings: DM Sans 14px 600 `#FAFAF8`
- Column links: DM Sans 14px `#FAFAF8`/`#9E9E9E` at rest, hover underline

**Shop:** Laptops, PCs, Monitors, Keyboards, Mice  
**Browse:** Gaming Laptops, Ultrabooks, Desktop PCs, All Products  
**Information:** About, Privacy Policy  
**Contact:** support link, 3 social media icons

---

### Step 13 — Accessibility Requirements

- All text on light backgrounds must meet WCAG AA: 4.5:1 for normal text
- `#1A1A1A` on `#FAFAF8` ≈ 17:1 — passes
- `#5C5C5C` on `#FAFAF8` ≈ 6.3:1 — passes
- `#9E9E9E` on `#FAFAF8` ≈ 3.0:1 — use only for large text (≥24px) or decorative only
- Focus rings: 2px visible outline in `#1A1A1A`
- Filter checkboxes: visible checked state
- Availability "In stock" text carries the semantic meaning (no color-only indicator)
- CTA button: white text on dark background — high contrast

---

### Step 14 — Design Anti-Patterns to Avoid

- NO decorative accent colors — no blue, purple, green, red, gold anywhere
- NO gradients, glow effects, glassmorphism, backdrop blur
- NO dark backgrounds in content areas (only footer is dark)
- NO all-caps headings (not the Premium style)
- NO pill-shaped badges or buttons — 2px or 4px radius only
- NO star ratings, review counts, or discount badges on product cards
- NO "Free Shipping", "2-Year Warranty", "30-Day Returns", or delivery promises
- NO "Sign In", "My Account", "Wishlist", "Deals" links
- NO compressed or dense layout — whitespace is structural in Premium
- NO price range slider — not a supported feature
- NO heavy sidebar background — the filter sidebar should blend with `#FAFAF8`
- DO NOT make "Add to Cart" hover-only — it must be visible at rest

---

### Step 15 — Expected Deliverable

A complete, high-fidelity **1440px desktop CatalogPage** in the Premium Minimalism editorial style, showing:

1. The header with PCShop wordmark, navigation (Laptops active), ThemeSwitcher, and cart icon on `#FAFAF8`
2. Breadcrumb: Home / Laptops / Gaming Laptop
3. Two-column layout: minimal left sidebar (260px) + generous right catalog main
4. Left sidebar: category nav (Gaming Laptop active) + 4 filter groups (RAM/GPU/CPU/Refresh Rate) with RAM: 32 GB checked
5. Sort bar: "6 Gaming Laptops" in Playfair Display + "Sort: Price ↓" dropdown
6. Active filter chip: "RAM: 32 GB ×" (small, unobtrusive, rectangular) + "Clear all"
7. 3×2 product grid with 6 gaming laptop cards, editorial spacing (FORGE, ARCTUS, KORA, ECHO, LYNX, APEX)
8. Pagination: ← 1 → (single page)
9. The full footer in `#1A1A1A` with 4 columns

The design must feel like an editorial hardware gallery — not a typical e-commerce catalog dashboard. Generous whitespace, classical typography, and restraint are the defining qualities.

-------------------------------------
## Final mandatory cross-theme requirements

These requirements override conflicting instructions above.

- Create a new CatalogPage within the existing PCShop design project.
- Do not modify or replace HomePage V1 or HomePage V2.
- Use the existing HomePage V2 as the primary visual reference.
- Preserve the established theme identity, header, footer, typography and product card design.
- Use single-selection controls, preferably radio buttons, for each filter parameter.
- Different filter parameters may be combined using AND logic.
- Do not allow multiple selected values for the same parameter.
- Provide a clear way to remove each selected filter.
- Do not introduce price range sliders, faceted product counts, ratings, reviews or unsupported features.
- Display the exact six mock products defined in the main prompt.
- Preserve identical product names, prices and underlying specifications across all three themes.
- Display RAM = 32 GB as the active filter.
- Sort products by price from highest to lowest.
- Display six matching products on one page.
- Both Previous and Next pagination controls must be disabled.
- Decorative palette restrictions must not prohibit accessible semantic success, warning and error colors.
- Preserve visible product availability indicators.
- Preserve search, cart and theme switching controls.
- Create a complete high-fidelity desktop catalog page, not a wireframe or an admin dashboard.