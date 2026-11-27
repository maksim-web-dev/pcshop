# Google Stitch Prompt — PCShop ProductPage: Modern Technology Store

**Use this exact prompt in the existing Modern Technology Store Stitch project.**  
**Create a new ProductPage. Do not modify the existing HomePage V1, V2, or CatalogPage V1 designs.**

---

## Prompt

You are designing a ProductPage for **PCShop**, an online computer hardware store that sells gaming laptops, ultrabooks, desktop PCs, monitors, keyboards, and mice.

PCShop has three interchangeable visual themes. This page belongs to the **Modern Technology Store** (Professional) theme.

---

### Step 1 — Context: Existing Project

This is an addition to an existing Stitch project. The project already contains three pages:
- HomePage V1 (original generation — preserve exactly)
- HomePage V2 (approved revision — preserve exactly)
- CatalogPage V1 (preserve exactly)

Create a new page called **"ProductPage - Modern Technology Store"** at desktop viewport width **1440px**.

Do not modify or delete the existing pages.

Use the **HomePage V2** and **CatalogPage V1** designs as your primary visual references for all design decisions: colors, typography, card styles, header, footer, and ThemeSwitcher.

---

### Step 2 — Page Objective

The ProductPage displays the full detail view of a single product. The customer has arrived from the Gaming Laptop catalog and is viewing the APEX Gaming Laptop 15". The page must:

- Present product photography clearly on a clean white card
- Show price, availability, and specifications with high information density
- Provide a confident blue "Add to Cart" CTA above the fold
- Display all technical specifications in a detailed table
- Show related products for easy comparison

---

### Step 3 — Theme Identity: Modern Technology Store

This theme targets practical shoppers and IT professionals aged 25–55 who prioritize clear specifications and easy comparison. It is the most information-dense of the three themes.

**Color palette:**
- Page background: `#F3F4F6` (cool light gray canvas)
- Product and sidebar cards: `#FFFFFF` (crisp white)
- Specification badge background: `#F3F4F6`
- Primary text: `#111827` (near-black)
- Secondary text: `#4B5563`
- Muted text: `#6B7280`
- Primary accent: `#2563EB` (blue — sole accent for all actions, links, active states, focus rings)
- Primary hover: `#1D4ED8`
- Card/input borders: `#E5E7EB`
- Availability dot: `#059669` (green — semantic success color — PERMITTED for availability only)
- Availability text: `#047857` (darker green — PERMITTED for availability only)
- Footer background: `#111827`
- Footer links: `#9CA3AF`

**Blue is the only accent.** No purple, no cyan, no orange.  
**Green `#059669` / `#047857` is permitted ONLY** for the availability indicator ("In stock" dot + text). Do not use green anywhere else.

**Typography:**
- Inter throughout — single typeface, hierarchy through weight
- Product name: Inter 700, 26px
- Price: Inter 700, 32px
- Body text: Inter 400, 15px
- Filter labels, badges: Inter 500, 12px
- Sentence case for all headings (never all-caps)

**Border radius:**
- Product cards and primary buttons: 8px
- Spec badges: 4px
- Cart badge: 9999px (full circle)

**Effects:**
- Card hover: `box-shadow: 0 4px 12px rgba(37, 99, 235, 0.12)` (subtle blue shadow)
- Blue focus rings: `ring-2 ring-primary/20`
- No gradients, no glow

**Spacing:**
- Page gutters: 60px desktop
- Two-column product layout gap: 48px
- Section spacing: 48px

---

### Step 4 — Header (identical to HomePage V2 and CatalogPage V1)

The header matches the Modern Technology Store CatalogPage V1 header exactly.

- Background: `#FFFFFF` with `1px solid #E5E7EB` bottom border
- Height: 64px
- Left: PCShop wordmark in `#111827`
- Center: horizontal navigation — Laptops | PCs | Monitors | Peripherals (Inter 14px 500 `#374151`)
- **"Laptops"** navigation item is active (blue `#2563EB` text + `2px solid #2563EB` bottom border)
- Right: **always-visible search input** (key differentiator, ≥300px wide, `#FFFFFF` bg, `#E5E7EB` border) + ThemeSwitcher "[Professional ▾]" + cart icon (blue `#2563EB` badge with count)

---

### Step 5 — Breadcrumb

Below the header:

```
Home / Laptops / Gaming Laptop / APEX Gaming Laptop 15"
```

- Inter 14px `#4B5563`
- "Home", "Laptops", "Gaming Laptop" are linked (blue `#2563EB` on hover)
- "APEX Gaming Laptop 15"" is the current page — Inter 14px 600 `#111827`, not linked
- Separator: `/`

---

### Step 6 — Page Layout (Two-Column Product Detail)

```
Left column (480px)         Right column (remaining width)
─────────────────────────────────────────────────────────
Main product image           Category label
Thumbnail row                Product name (H1)
                             Price
                             Availability — green dot + "In stock"
                             Key specification badges (3 badges)
                             Quantity selector
                             Add to Cart button
                             Stock count ("10 in stock")

─────────────────────────────────────────────────────────
Product description (full width)
Technical specification table (full width)
Related products (full width — 3 cards)
Footer
```

---

### Step 7 — Product Image Gallery

**Main image:**
- Clean catalog photography on white/light background, 4:3 aspect ratio
- White `#FFFFFF` card with `1px solid #E5E7EB` border and 8px radius
- Subtle blue hover shadow: `hover:shadow-[0_4px_12px_rgba(37,99,235,0.12)]`

**Thumbnail row (below main image):**
- 3 thumbnails, same white card style with `#E5E7EB` border
- Selected thumbnail: highlighted with `2px solid #2563EB` blue border
- Thumbnails spaced with 8px gap

---

### Step 8 — Product Information (Right Column)

**Category label:**
```
Laptop · Gaming Laptop
```
- Inter 13px `#6B7280` (muted)

**Product name (H1):**
```
APEX Gaming Laptop 15"
```
- Inter 700, 26px `#111827`

**Price:**
```
$1,799
```
- Inter 700, 32px `#111827` tabular-nums

**Availability:**
```
● In stock
```
- Solid 6px `#059669` green dot + Inter 14px 500 `#047857` — matches CatalogPage V1 card style

**Stock note (optional):**
```
10 in stock
```
- Inter 12px `#6B7280` (muted) below the availability indicator

**Key specification badges (3 badges — Professional-specific, same as CatalogPage V1 cards):**
```
[RTX 4070]  [32 GB DDR5]  [Intel i7]
```
- Background: `#F3F4F6`, Inter 12px 500 `#374151`, 4px radius

**Quantity selector:**
```
[−]  [1]  [+]
```
- White `#FFFFFF` background, `1px #E5E7EB` border, Inter 14px `#111827`, 6px radius
- `−` and `+` in `#374151`

**Add to Cart button (full width):**
```
[   Add to Cart   ]
```
- Inter 14px 600, sentence case
- Background: `#2563EB`, hover: `#1D4ED8`
- Text: `#FFFFFF`
- 6px border radius
- Height: 48px

---

### Step 9 — Product Description (full width, below hero section)

**Section heading:** "About this product" — Inter 700, 20px `#111827`

```
The APEX Gaming Laptop 15" delivers serious gaming performance in a portable package. 
Powered by an Intel Core i7-13700H processor and NVIDIA RTX 4070 graphics, it handles 
demanding titles at high settings. The 15.6-inch Full HD display runs at 144 Hz for 
fluid, responsive gameplay. 32 GB of DDR5 RAM ensures smooth multitasking, while a 
1 TB NVMe SSD provides fast load times.
```

- Inter 15px 400 `#4B5563`
- Max width ~760px
- `1px solid #E5E7EB` top separator

---

### Step 10 — Technical Specification Table (full width)

**Section heading:** "Technical specifications" — Inter 700, 20px `#111827`

Display all 5 Gaming Laptop parameters as a detailed 2-column table:

| Specification | Value |
|--------------|-------|
| CPU | Intel Core i7-13700H |
| RAM | 32 GB |
| Screen Size | 15.6 inch |
| GPU | NVIDIA RTX 4070 |
| Refresh Rate | 144 Hz |

**Table design:**
- Background: `#FFFFFF` card with `1px #E5E7EB` border and 8px radius
- Alternating rows: `#FFFFFF` / `#F9FAFB`
- Parameter name: Inter 14px 500 `#374151` (left column, 200px wide)
- Parameter value: Inter 14px `#111827` (right column)
- Row height: 44px with `1px #E5E7EB` horizontal dividers
- Compact, information-dense

---

### Step 11 — Related Products (full width)

**Section heading:** "Related products" — Inter 700, 20px `#111827`

Display 3 product cards, same design as the CatalogPage V1 product cards (3 badges per card):

**Row 1 (3 cards):**
1. **LYNX Gaming Laptop 15"** — $1,899 — Badges: "RTX 4070" / "32 GB DDR5" / "Ryzen 9" — ● In stock (green dot)
2. **ECHO Gaming Laptop 14"** — $1,999 — Badges: "RTX 4070 Ti" / "32 GB DDR5" / "Ryzen 9" — ● In stock
3. **KORA Gaming Laptop 17"** — $2,099 — Badges: "RTX 4070 Ti" / "32 GB DDR5" / "Intel i7" — ● In stock

Each card: white `#FFFFFF` background, `1px #E5E7EB` border, 8px radius, clean product photography, blue "Add to Cart" CTA button, green dot + "In stock" text.

---

### Step 12 — Footer (identical to HomePage V2 and CatalogPage V1)

The footer matches the Modern Technology Store CatalogPage V1 footer exactly.

- Background: `#111827`
- No decorative top line
- 4 columns: Shop | Browse | Information | Contact
- Column headings: Inter 14px 600 `#FFFFFF`
- Column links: Inter 14px `#9CA3AF` at rest, hover to `#FFFFFF`

---

### Step 13 — Accessibility Requirements

- All interactive elements have blue `#2563EB` focus rings (`focus:ring-2 focus:ring-primary/20`)
- "Add to Cart" button always visible at rest (not hover-only)
- Product name as `<h1>` — only one per page
- Green dot is decorative (`aria-hidden="true"`) — "In stock" text carries semantic meaning
- Quantity `−` and `+` buttons have aria-labels
- Thumbnail buttons have aria-labels
- Table has a visible caption or section heading

---

### Step 14 — Design Anti-Patterns to Avoid

- NO purple, cyan, or warm accent colors — only blue `#2563EB`
- NO dark backgrounds in content areas (footer is the only dark element)
- NO all-caps headings — sentence case only
- NO product ratings, review counts, discount badges, or delivery promises
- NO "Sign In", "My Account", "Wishlist", or "Compare" controls
- NO pill-shaped buttons — 8px radius for cards, 6px for buttons
- DO NOT hide the search input — it must remain always-visible in the header on desktop
- NO price range sliders or financing options
- NO admin dashboard styling (gray stripes, table rows that look like admin grids)
- NO heavy borders or dark panel backgrounds in content areas
- Green `#059669` ONLY for availability dot — nowhere else

---

### Step 15 — Expected Deliverable

A complete, high-fidelity **1440px desktop ProductPage** in the Modern Technology Store style, showing:

1. Header with PCShop wordmark, navigation (Laptops active in blue), always-visible search input, ThemeSwitcher "[Professional ▾]", cart badge in blue
2. Breadcrumb: Home / Laptops / Gaming Laptop / APEX Gaming Laptop 15"
3. Two-column layout: clean white card product gallery (left) + information-dense product panel (right)
4. Left: white card product image + 3 thumbnail cards with blue-bordered selected
5. Right: "Laptop · Gaming Laptop" muted label, Inter bold "APEX Gaming Laptop 15"" (H1), "$1,799" price, green dot "In stock" indicator, 3 spec badges, quantity [−][1][+], blue "Add to Cart" button
6. Product description: Inter bold "About this product" heading + body text on `#F3F4F6`
7. Specification table: Inter bold "Technical specifications" heading + 5-row dense table on white card
8. Related products: Inter bold "Related products" heading + 3 product cards (3 badges each)
9. Footer in `#111827` with 4 columns

The design must look like a production-ready professional hardware retailer product page — clean, information-rich, efficient. Clear visual hierarchy, confident use of blue as the sole accent.

---

## Final mandatory cross-theme requirements

These requirements override conflicting instructions above.

- Create a new ProductPage within the existing PCShop design project.
- Do not modify or replace any existing pages (HomePage V1, V2, CatalogPage V1).
- Use the existing HomePage V2 and CatalogPage V1 as the primary visual references.
- Preserve the established theme identity, header, footer, typography and product card design.
- Product image must be clearly visible — prominent, filling the left column.
- Price and CTA must be visible above the fold without scrolling.
- "Add to Cart" button must be always visible (not hover-only).
- Specification table must render all 5 Gaming Laptop parameters.
- Related products must use the same product card design as CatalogPage V1.
- Do not introduce price range sliders, ratings, reviews, delivery promises, or financing options.
- Do not introduce any unsupported business functionality.
- Preserve visible product availability indicator.
- Preserve search, cart, and ThemeSwitcher controls in the header.
- Create a complete high-fidelity desktop ProductPage, not a wireframe.