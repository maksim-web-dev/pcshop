# Google Stitch Prompt — PCShop CatalogPage: Modern Technology Store

**Use this exact prompt in the existing Modern Technology Store Stitch project.**  
**Create a new CatalogPage. Do not modify the existing HomePage V1 or V2 designs.**

---

## Prompt

You are designing a CatalogPage for **PCShop**, an online computer hardware store that sells gaming laptops, ultrabooks, desktop PCs, monitors, keyboards, and mice.

PCShop has three interchangeable visual themes. This page belongs to the **Modern Technology Store** (Professional) theme.

---

### Step 1 — Context: Existing Project

This is an addition to an existing Stitch project. The project already contains two pages:
- HomePage V1 (original generation — preserve exactly)
- HomePage V2 (approved revision — preserve exactly)

Create a new page called **"CatalogPage - Modern Technology Store"** at desktop viewport width **1440px**.

Do not modify or delete the existing HomePage pages.

Use the **HomePage V2** design as your visual reference for all design decisions: colors, typography, card styles, header, footer, navigation, and ThemeSwitcher.

---

### Step 2 — Page Objective

The CatalogPage allows customers to browse a filtered list of products within a specific category. It must:

- Display 6 gaming laptop products in the first page of results
- Provide an efficient filter sidebar with clear checkbox filters for CPU, RAM, GPU, and Refresh Rate
- Show an active filter chip for a RAM filter that is currently applied
- Show a sort control and product result count above the grid
- Show pagination below the grid

The page demonstrates a customer who has filtered Gaming Laptops by RAM = 32 GB and is seeing 6 results.

This theme prioritizes information density, easy comparison, and confident purchase decisions. The catalog is efficient and functional without being a generic admin dashboard.

---

### Step 3 — Theme Identity: Modern Technology Store

This theme targets practical shoppers and IT professionals aged 25–55 who prioritize clear specifications and easy comparison.

**Color palette:**
- Page background: `#F3F4F6` (cool light gray canvas)
- Product and sidebar cards: `#FFFFFF` (crisp white)
- Hero/tint blue: `#EFF6FF` (used in hero only on HomePage — not in catalog)
- Primary text: `#111827` (near-black)
- Secondary text: `#4B5563`
- Muted text: `#6B7280`
- Primary accent: `#2563EB` (blue — sole accent color for all actions, links, active states, focus rings)
- Primary hover: `#1D4ED8` (darker blue)
- Navigation/icon color: `#374151`
- Card/input borders: `#E5E7EB`
- Availability dot: `#059669` (green — this semantic success color IS permitted)
- Availability text: `#047857` (darker green)
- Footer background: `#111827`
- Footer headings: `#FFFFFF`
- Footer links: `#9CA3AF`

**Blue is the only accent.** No purple, no cyan, no orange, no dark backgrounds in content areas.

**Semantic colors (success/warning/error) ARE permitted** for their specific UI meanings:
- Green `#059669` / `#047857`: availability indicator ("In stock") only
- Use semantic colors only where they carry specific meaning — not as decorative accents

**Typography:**
- Inter throughout — single typeface, hierarchy through weight only
- Inter 700 for headlines and section titles
- Inter 600 for product names, navigation
- Inter 400 for body, descriptions, filter labels
- Sentence case for headings (not all-caps, not title-case for all headings)

**Border radius:**
- Product cards and dropdowns: 8px
- Buttons and inputs: 6px
- Badges: 4px

**Spacing:**
- Page gutters: approximately 48–64px desktop
- Card gap: 20px
- Internal card padding: 16px

---

### Step 4 — Header (identical to HomePage V2)

The header is identical to the existing Modern Technology Store HomePage V2 header.

- Background: `#FFFFFF`
- Bottom: scroll shadow on sticky header
- Height: 64px
- Left: PCShop wordmark in `#111827`
- Center: horizontal navigation — Laptops | PCs | Monitors | Peripherals (Inter 600, `#374151`)
- "Laptops" navigation item is **active** (underlined or highlighted in `#2563EB`) because we are in the Laptops category
- Right: **always-visible search input** (key differentiator of this theme, ≥300px wide, `#FFFFFF` bg, `#E5E7EB` border) + ThemeSwitcher "[Professional ▾]" + cart icon (blue `#2563EB` badge)
- No "Sign In", no "My Account", no "Deals"

---

### Step 5 — Breadcrumb

Below the header, above the catalog layout:

```
Home / Laptops / Gaming Laptop
```

- Inter 14px `#4B5563`
- "Home" and "Laptops" are linked (blue `#2563EB` on hover)
- "Gaming Laptop" is the current page — Inter 14px 600 `#111827`, not linked
- Separator: `/`

---

### Step 6 — Page Layout (Two-Column)

```
Left column (260px)         Right column (remaining width)
─────────────────────────────────────────────────────────
Category nav                Sort bar + result count
Filter sidebar              Active filter chip row
  [RAM filter]              Product grid (3 columns)
  [GPU filter]              Pagination
  [CPU filter]
  [Refresh Rate filter]
                       
─────────────────────────────────────────────────────────
```

**Left sidebar:** White `#FFFFFF` card with `1px #E5E7EB` border and 8px border radius. Visible separation from the `#F3F4F6` page canvas. Clear and functional.

---

### Step 7 — Left Sidebar: Category Navigation

At the top of the sidebar (white card):

```
Laptops                    ← Inter 13px 600 uppercase tracking, `#6B7280`
─────────────
▸ Gaming Laptop            ← ACTIVE — Inter 14px 600 `#111827`, left accent bar in `#2563EB`
  Ultrabook                ← Inter 14px `#4B5563`
```

---

### Step 8 — Left Sidebar: Filter Panel

The filter panel is information-rich and clearly organized — each filter group is easy to scan.

**Filter group design:**
- Group label: Inter 13px 600 `#374151`, with collapse/expand toggle arrow
- `1px #E5E7EB` separator between groups
- Checkboxes: Inter 14px labels, blue `#2563EB` checkbox when checked
- Checked state: blue `#2563EB` filled checkbox with white checkmark
- Option text: Inter 14px `#374151`
- Selected option: Inter 14px 600 `#111827`

**Filter groups to display (top to bottom):**

**RAM**
- ☐ 16 GB
- ☑ 32 GB ← ACTIVE FILTER — blue checkbox checked, Inter 14px 600 label
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
- "Filters (1)" shown in the sidebar header as a blue `#2563EB` badge/counter
- "Clear filters" button: Inter 13px blue `#2563EB` text link, underline

---

### Step 9 — Sort Bar and Active Filter Chips

**Sort bar row:**
```
6 Gaming Laptops                                   Sort: Price ↓ ▾
```
- Result count: Inter 16px 600 `#111827` — "6 Gaming Laptops"
- Sort control: Inter 14px, `#FFFFFF` background, `1px #E5E7EB` border, 6px radius, blue focus ring

**Sort options (shown in dropdown, collapsed by default):**
- Price: High to Low ← active
- Price: Low to High
- Name: A–Z
- Newest

**Active filter chip row (below sort bar):**
```
[RAM: 32 GB ×]    Clear all
```
- Chip: `#EFF6FF` blue tint background, `1px #BFDBFE` border, Inter 13px 600 `#2563EB` text "RAM: 32 GB", `×` in `#6B7280`, 9999px radius (pill)
- "Clear all": Inter 13px `#2563EB` blue link, underline

---

### Step 10 — Product Grid (6 products, 3 columns × 2 rows)

Display 6 gaming laptops in a 3-column grid. These are the products visible after applying the RAM = 32 GB filter, sorted by price high to low.

**Product card design (from V2 homepage):**
- Card background: `#FFFFFF`
- Border: `1px solid #E5E7EB`
- Border radius: 8px
- Hover: `box-shadow: 0 4px 12px rgba(37, 99, 235, 0.12)` (subtle blue shadow)
- Card padding: 16px

**Card content (top to bottom):**
1. Product image — clean catalog photography on light background, aspect ratio 4:3
2. Product name — Inter 15px 600 `#111827`
3. Price — Inter 18px 700 `#111827` (e.g., "$2,799")
4. Specification badges — 2–3 badges, `#F3F4F6` background, `#374151` text, Inter 12px, 4px radius
5. Availability — solid 6px `#059669` green dot + "In stock" Inter 12px 500 `#047857` (green is permitted for semantic availability)
6. CTA button — "Add to Cart" Inter 14px 600, `#2563EB` fill, `#FFFFFF` text, 6px radius, full width

**6 products to display (RAM = 32 GB filter active, sorted by price high to low):**

Row 1 (left to right):
1. **FORGE Gaming Laptop 15"** — $2,799 — Badges: "RTX 4080 Ti" / "32 GB DDR5" / "Intel i9" — In stock
2. **ARCTUS Gaming Laptop 17"** — $2,299 — Badges: "RTX 4080" / "32 GB DDR5" / "Intel i9" — In stock
3. **KORA Gaming Laptop 17"** — $2,099 — Badges: "RTX 4070 Ti" / "32 GB DDR5" / "Intel i7" — In stock

Row 2 (left to right):
4. **ECHO Gaming Laptop 14"** — $1,999 — Badges: "RTX 4070 Ti" / "32 GB DDR5" / "Ryzen 9" — In stock
5. **LYNX Gaming Laptop 15"** — $1,899 — Badges: "RTX 4070" / "32 GB DDR5" / "Ryzen 9" — In stock
6. **APEX Gaming Laptop 15"** — $1,799 — Badges: "RTX 4070" / "32 GB DDR5" / "Intel i7" — In stock

Professional theme shows 3 badges per card (the third badge identifies the CPU brand: "Intel i7", "Intel i9", "Ryzen 9").

**Do not add star ratings, discount badges, review counts, or delivery promises.**

---

### Step 11 — Pagination

Below the product grid:

```
← Previous    1    Next →
```

- Previous/Next: Inter 14px `#6B7280`, disabled (greyed out at page 1 — no previous page)
- Page 1 button: blue `#2563EB` background, `#FFFFFF` text, Inter 14px 600, 6px radius
- Simple horizontal centered row

---

### Step 12 — Footer (identical to HomePage V2)

The footer is identical to the Modern Technology Store HomePage V2 footer.

- Background: `#111827`
- No decorative top line
- 4 columns: Shop | Browse | Information | Contact
- Column headings: Inter 14px 600 `#FFFFFF`
- Column links: Inter 14px `#9CA3AF` at rest, hover to `#FFFFFF`

**Shop:** Laptops, PCs, Monitors, Keyboards, Mice  
**Browse:** Gaming Laptops, Ultrabooks, Desktop PCs, All Products  
**Information:** About, Privacy Policy  
**Contact:** support link, 3 social media icons

---

### Step 13 — Accessibility Requirements

- All text on light backgrounds must meet WCAG AA: 4.5:1 for normal text
- `#111827` on `#F3F4F6` ≈ 14:1 — passes
- `#2563EB` on `#FFFFFF` ≈ 5.9:1 — passes
- `#047857` on `#FFFFFF` ≈ 6.2:1 — passes
- `#9CA3AF` on `#111827` ≈ 3.9:1 — use only for muted captions ≥14px or bold
- Focus rings: 2px blue `#2563EB` on all interactive elements
- Filter checkboxes: clearly visible checked state with blue fill
- Availability: green dot is decorative; "In stock" text carries semantic meaning
- Always-visible search input in header provides keyboard access without hover

---

### Step 14 — Design Anti-Patterns to Avoid

- NO purple, cyan, or warm accent colors — only blue `#2563EB`
- NO dark backgrounds in content areas (footer is the only dark element)
- NO all-caps headings — sentence case only
- NO star ratings, review counts, or discount badges on product cards
- NO "Free Shipping", "2-Year Warranty", "30-Day Returns", or delivery promises
- NO "Sign In", "My Account", "Wishlist", "Deals" links
- NO generic admin dashboard aesthetic — this is a commercial hardware retailer
- NO pill-shaped filter chips with strong blue fill — use subtle `#EFF6FF` tint
- DO NOT hide the search input — it must remain always-visible in the header on desktop
- NO price range slider — not a supported feature
- NO heavy visual styling on the sidebar — it should feel like a clean panel, not a heavy left nav

---

### Step 15 — Expected Deliverable

A complete, high-fidelity **1440px desktop CatalogPage** in the Modern Technology Store style, showing:

1. The header with PCShop wordmark, navigation (Laptops active), always-visible search input, ThemeSwitcher, and cart icon on white `#FFFFFF`
2. Breadcrumb: Home / Laptops / Gaming Laptop
3. Two-column layout: white sidebar panel (260px) + light gray main content area
4. Left sidebar: category nav (Gaming Laptop active) + 4 filter groups (RAM/GPU/CPU/Refresh Rate) with RAM: 32 GB checked in blue
5. Sort bar: "6 Gaming Laptops" (Inter 600) + "Sort: Price ↓" dropdown
6. Active filter chip: "RAM: 32 GB ×" (blue pill) + "Clear all" link
7. 3×2 product grid with 6 gaming laptop cards, 3 badges each (FORGE, ARCTUS, KORA, ECHO, LYNX, APEX)
8. Pagination: ← 1 → (single page)
9. The full footer in `#111827` with 4 columns

The design must look like a production-ready professional hardware retailer catalog — not a wireframe or admin panel. Clear information hierarchy, efficient layout, and confident use of blue as the primary accent.
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