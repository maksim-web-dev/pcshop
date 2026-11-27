# Google Stitch Prompt — PCShop CatalogPage: Gaming & Technology

**Use this exact prompt in the existing Gaming & Technology Stitch project.**  
**Create a new CatalogPage. Do not modify the existing HomePage V1 or V2 designs.**

---

## Prompt

You are designing a CatalogPage for **PCShop**, an online computer hardware store that sells gaming laptops, ultrabooks, desktop PCs, monitors, keyboards, and mice.

PCShop has three interchangeable visual themes. This page belongs to the **Gaming & Technology** theme.

---

### Step 1 — Context: Existing Project

This is an addition to an existing Stitch project. The project already contains two pages:
- HomePage V1 (original generation — preserve exactly)
- HomePage V2 (approved revision — preserve exactly)

Create a new page called **"CatalogPage - Gaming & Technology"** at desktop viewport width **1440px**.

Do not modify or delete the existing HomePage pages.

Use the **HomePage V2** design as your visual reference for all design decisions: colors, typography, card styles, header, footer, navigation, and ThemeSwitcher.

---

### Step 2 — Page Objective

The CatalogPage allows customers to browse a filtered list of products within a specific category. It must:

- Display 6 gaming laptop products in the first page of results
- Provide a filter sidebar with checkbox filters for CPU, RAM, GPU, and Refresh Rate
- Show an active filter chip for a RAM filter that is currently applied
- Show a sort control and product result count above the grid
- Show pagination below the grid

The page demonstrates a customer who has filtered Gaming Laptops by RAM = 32 GB and is seeing 6 results.

---

### Step 3 — Theme Identity: Gaming & Technology

This theme targets gamers and hardware enthusiasts aged 16–35. The aesthetic is dark, atmospheric, and decisive.

**Color palette:**
- Page background: `#0A0A0F` (near-black, NOT pure black)
- Card surfaces: `#111118` (elevated dark card)
- Elevated surfaces (dropdowns, hover): `#16161E`
- Footer background: `#070708`
- Primary text: `#F0F0FF`
- Secondary text (navigation, footer links): `#A0A0C0`
- Muted tertiary text: `#8585A3`
- Primary accent (CTA buttons, cart badge): `#8B5CF6` (purple)
- Secondary accent (specs, availability, focus, nav hover): `#22D3EE` (cyan)
- Card borders: `#1E1E2E`

**Two accent colors only.** No red, no green, no blue, no orange, no white backgrounds.

**Green is forbidden.** Availability must use cyan `#22D3EE`, never `#059669`.

**Typography:**
- Rajdhani Bold 700 UPPERCASE for all section headings and display text
- Inter (not Rajdhani) for product names, prices, navigation links, body text, filter labels, pagination

**Border radius:**
- Cards and primary buttons: 6px
- Spec badges: 3px

**Spacing:**
- Page margins: 60px desktop
- Card gap: 20px
- Internal card padding: 16px

---

### Step 4 — Header (identical to HomePage V2)

The header is identical to the existing Gaming & Technology HomePage V2 header.

- Background: `#0A0A0F`
- Left: PCShop wordmark (geometric cyan/purple accent SVG mark)
- Center: horizontal navigation — Laptops | PCs | Monitors | Peripherals (Inter, `#A0A0C0` at rest)
- "Laptops" navigation item is **active** (underlined in cyan `#22D3EE`) because we are in the Laptops category
- Right: ThemeSwitcher dropdown "[Gaming ▾]" + cart icon (purple `#8B5CF6` badge)
- No search icon or search bar on this header (Gaming theme uses icon-only search, not always-visible)
- No "Sign In", no "My Account", no "Deals"

---

### Step 5 — Breadcrumb

Below the header, above the catalog layout:

```
Home / Laptops / Gaming Laptop
```

- Inter 14px `#A0A0C0`
- "Home" and "Laptops" are linked (lighter or underlined)
- "Gaming Laptop" is the current page — `#F0F0FF`, not linked
- Separator: `/`

---

### Step 6 — Page Layout (Two-Column)

```
Left column (240px)    Right column (remaining width, ~1100px)
─────────────────────────────────────────────────────────
Category nav           Sort bar + result count
Filter sidebar         Active filter chip row
  [RAM filter]         Product grid (3 columns)
  [GPU filter]         Pagination
  [CPU filter]
  [Refresh Rate filter]
                       
─────────────────────────────────────────────────────────
```

**Left sidebar background:** `#111118` (card surface) or blends with `#0A0A0F` page. Use a subtle `#1E1E2E` right border to separate from main content.

---

### Step 7 — Left Sidebar: Category Navigation

At the top of the sidebar, show category navigation for the Laptops product type:

```
LAPTOPS              ← Rajdhani 14px UPPERCASE heading, `#A0A0C0`
─────────────────
▸ Gaming Laptop      ← ACTIVE — `#22D3EE` cyan, left border in cyan
  Ultrabook
```

---

### Step 8 — Left Sidebar: Filter Panel

The filter panel shows filterable parameters for the Gaming Laptop category.

**Filter group design:**
- Group label: Rajdhani 13px UPPERCASE, `#A0A0C0` → example: "RAM (GB)"
- Checkboxes: custom dark checkbox (`#1E1E2E` border, `#8B5CF6` purple when checked)
- Checked state: purple filled checkbox with checkmark
- Option text: Inter 14px `#F0F0FF` (or `#A0A0C0` for unselected)
- Selected option text: `#22D3EE` cyan to reinforce the active state

**Filter groups to display (top to bottom):**

**RAM (GB)**
- ☐ 16 GB
- ☑ 32 GB ← ACTIVE FILTER — purple checked checkbox, cyan label
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

**REFRESH RATE (Hz)**
- ☐ 144 Hz
- ☐ 165 Hz
- ☐ 240 Hz

**Sidebar footer:**
- "Filters (1)" count indicator visible at top of sidebar or above first group
- "Clear all" link in `#22D3EE` cyan, appears because a filter is active

---

### Step 9 — Sort Bar and Active Filter Chips

**Sort bar row:**
```
6 Gaming Laptops                          Sort: Price ↓    
```
- Result count: Inter 15px `#F0F0FF` — "6 Gaming Laptops" (filtered count)
- Sort dropdown: Inter 14px, dark `#16161E` background, `#1E1E2E` border, `#F0F0FF` text, cyan focus ring

**Sort options (shown in dropdown, collapsed by default):**
- Price: High to Low ← active
- Price: Low to High
- Name: A–Z
- Newest

**Active filter chip row (below sort bar):**
```
[RAM: 32 GB ×]    Clear all
```
- Chip: `#16161E` background, `#1E1E2E` border, `#22D3EE` text "RAM: 32 GB", `×` button in `#A0A0C0`
- Chip border radius: 9999px (pill shape)
- "Clear all": Inter 13px `#22D3EE` cyan link, underline on hover

---

### Step 10 — Product Grid (6 products, 3 columns × 2 rows)

Display 6 gaming laptops in a 3-column grid. These are the products visible after applying the RAM = 32 GB filter, sorted by price high to low.

**Product card design (from V2 homepage):**
- Card background: `#111118`
- Border: `1px solid #1E1E2E`
- Border radius: 6px
- Hover: `box-shadow: 0 0 24px rgba(139, 92, 246, 0.35)` (purple glow on hover)
- Card padding: 16px

**Card content (top to bottom):**
1. Product image — dark atmospheric background, aspect ratio 4:3, fills card width
2. Product name — Inter 15px 600 `#F0F0FF`
3. Price — Inter 18px 700 `#F0F0FF` (e.g., "$2,799")
4. Specification badges — 2 badges, `#1E1E2E` background, `#22D3EE` text, 3px radius
5. Availability — "In stock" in Inter 11px 600 `#22D3EE` (cyan, NOT green)
6. CTA button — "ADD TO CART" Rajdhani 14px 700 UPPERCASE, purple gradient `#8B5CF6` to `#5516BE`, 6px radius, full width

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

---

### Step 11 — Pagination

Below the product grid:

```
← Previous    1    Next →
```

- Background: `#0A0A0F` (page surface)
- Previous/Next: Inter 14px `#A0A0C0`, disabled state (at page 1)
- Page 1 button: Inter 14px 600, `#8B5CF6` purple background, `#F0F0FF` text, 6px radius
- Pagination is showing only 1 page because all filtered results fit on one page

---

### Step 12 — Footer (identical to HomePage V2)

The footer is identical to the Gaming & Technology HomePage V2 footer.

- Background: `#070708`
- Top decorative line: 1px gradient left-to-right from `#8B5CF6` purple to `#22D3EE` cyan
- 4 columns: Shop | Browse | Information | Contact
- Column headings: Rajdhani 14px UPPERCASE `#F0F0FF`
- Column links: Inter 14px `#A0A0C0` at rest, hover to `#22D3EE`

**Shop:** Laptops, PCs, Monitors, Keyboards, Mice  
**Browse:** Gaming Laptops, Ultrabooks, Desktop PCs, All Products  
**Information:** About, Privacy Policy  
**Contact:** support link, 3 social media icons

---

### Step 13 — Accessibility Requirements

- All text on dark backgrounds must meet WCAG AA: 4.5:1 for normal text, 3:1 for large text (≥24px regular, ≥18.67px bold)
- `#F0F0FF` on `#0A0A0F` ≈ 18:1 — passes
- `#A0A0C0` on `#0A0A0F` ≈ 7.1:1 — passes
- `#22D3EE` on `#0A0A0F` ≈ 6.5:1 — passes
- Focus rings: visible 2px minimum in cyan `#22D3EE`
- Filter checkboxes: visible checked state (not invisible custom widget)
- "In stock" indicator: text carries the semantic meaning, not color alone
- CTA button text must be legible: use `#F0F0FF` on purple gradient

---

### Step 14 — Design Anti-Patterns to Avoid

- NO green colors anywhere — especially not `#059669` or any green for availability
- NO white or light backgrounds in any content area (footer is the only dark exception — header is `#0A0A0F`)
- NO blue accent colors — the two accents are purple and cyan only
- NO star ratings, review counts, or discount badges on product cards
- NO "Free Shipping", "2-Year Warranty", "30-Day Returns", or any delivery promises
- NO "Sign In", "My Account", "Wishlist", "Deals" links anywhere
- NO rainbow glow effects — only purple glow on card hover
- NO Rajdhani for product names or prices — use Inter for data text
- NO light sidebar — the filter sidebar must remain on the dark surface palette
- NO price range slider — this feature is not supported
- NO multi-column filter values for the same parameter at once (single-select per parameter)

---

### Step 15 — Expected Deliverable

A complete, high-fidelity **1440px desktop CatalogPage** in the Gaming & Technology dark theme, showing:

1. The fixed header with PCShop wordmark, navigation (Laptops active), ThemeSwitcher, and cart icon
2. Breadcrumb: Home / Laptops / Gaming Laptop
3. Two-column layout: left filter sidebar (240px) + right catalog main
4. Left sidebar: category nav (Gaming Laptop active) + 4 filter groups (RAM/GPU/CPU/Refresh Rate) with RAM: 32 GB checked
5. Sort bar: "6 Gaming Laptops" count + "Sort: Price ↓" dropdown
6. Active filter chip: "RAM: 32 GB ×" + "Clear all"
7. 3×2 product grid with 6 gaming laptop cards (FORGE, ARCTUS, KORA, ECHO, LYNX, APEX)
8. Pagination: ← 1 → (single page)
9. The full footer with 4 columns and purple-to-cyan gradient top line

The design must look like a production-ready e-commerce catalog page, not a wireframe or generic dashboard.

Maintain the atmospheric dark aesthetic of the Gaming & Technology homepage V2.

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