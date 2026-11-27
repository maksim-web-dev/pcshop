# Google Stitch Prompt — PCShop ProductPage: Gaming & Technology

**Use this exact prompt in the existing Gaming & Technology Stitch project.**  
**Create a new ProductPage. Do not modify the existing HomePage V1, V2, or CatalogPage V1 designs.**

---

## Prompt

You are designing a ProductPage for **PCShop**, an online computer hardware store that sells gaming laptops, ultrabooks, desktop PCs, monitors, keyboards, and mice.

PCShop has three interchangeable visual themes. This page belongs to the **Gaming & Technology** theme.

---

### Step 1 — Context: Existing Project

This is an addition to an existing Stitch project. The project already contains three pages:
- HomePage V1 (original generation — preserve exactly)
- HomePage V2 (approved revision — preserve exactly)
- CatalogPage V1 (preserve exactly)

Create a new page called **"ProductPage - Gaming & Technology"** at desktop viewport width **1440px**.

Do not modify or delete the existing pages.

Use the **HomePage V2** and **CatalogPage V1** designs as your primary visual references for all design decisions: colors, typography, card styles, header, footer, and ThemeSwitcher.

---

### Step 2 — Page Objective

The ProductPage displays the full detail view of a single product. The customer has arrived from the Gaming Laptop catalog and is viewing the APEX Gaming Laptop 15". The page must:

- Make the product photography the visual centerpiece
- Show the product name, price, and availability prominently above the fold
- Display all technical specifications clearly
- Provide an unmistakable "ADD TO CART" CTA in purple
- Show 3 related gaming laptops below

---

### Step 3 — Theme Identity: Gaming & Technology

This theme targets gamers and hardware enthusiasts aged 16–35 who want an expressive, immersive experience.

**Color palette:**
- Page background: `#0A0A0F` (near-black — not pure black)
- Product info panel / cards: `#111118` (elevated dark surface)
- Hover overlays / dropdowns: `#16161E`
- Primary text: `#F0F0FF` (near-white)
- Secondary text: `#A0A0C0`
- Muted text: `#8585A3`
- Primary accent: `#8B5CF6` (purple — CTA buttons, cart badge, hover glow)
- Secondary accent: `#22D3EE` (cyan — availability text, spec badges, focus rings, active states)
- Card borders / section dividers: `1px solid #1E1E2E`
- Footer background: `#070708`

**Availability indicator:** "IN STOCK" in cyan `#22D3EE`, Inter 11px 600. Never green.  
**Green is FORBIDDEN** — no `#059669` or any green shade anywhere.

**Typography:**
- Rajdhani Bold 700 UPPERCASE for section headings, CTA button label, specification table heading
- Inter for product name, price, parameter values, navigation, body text, breadcrumb
- Product name: Inter 24px 700 `#F0F0FF`
- Price: Inter 28px 700 `#F0F0FF`

**Border radius:**
- Product cards and primary buttons: 6px
- Spec badges: 3px
- Cart badge: 9999px (full circle)

**Effects:**
- Card hover glow: `box-shadow: 0 0 24px rgba(139, 92, 246, 0.35)` (purple)
- CTA button: purple gradient (`#8B5CF6` → `#5516BE`) with white text
- Purple gradient footer top line (1px): purple → cyan

**Spacing:**
- Page gutters: 60px desktop
- Section spacing: 48px
- Two-column product layout gap: 48px

---

### Step 4 — Header (identical to HomePage V2 and CatalogPage V1)

The header matches the Gaming & Technology CatalogPage V1 header exactly.

- Background: `#0A0A0F`
- Height: 64px
- Bottom border: `1px solid #1E1E2E`
- Left: PCShop wordmark in `#F0F0FF` with cyan/purple accent mark
- Center: horizontal navigation — Laptops | PCs | Monitors | Peripherals (Inter 14px `#A0A0C0`)
- **"Laptops"** navigation item is active (cyan `#22D3EE` underline or highlight) — we are on a Laptop product
- Right: search icon + ThemeSwitcher "[Gaming ▾]" (Inter, dark surface, cyan focus ring) + cart icon (purple `#8B5CF6` badge with count)

---

### Step 5 — Breadcrumb

Below the header:

```
Home / Laptops / Gaming Laptop / APEX Gaming Laptop 15"
```

- Inter 14px `#A0A0C0`
- "Home", "Laptops", "Gaming Laptop" are linked (hover: cyan `#22D3EE`)
- "APEX Gaming Laptop 15"" is the current page — Inter 14px `#F0F0FF`, not linked
- Separator: `/`

---

### Step 6 — Page Layout (Two-Column Product Detail)

```
Left column (480px)         Right column (remaining width)
─────────────────────────────────────────────────────────
Main product image           Category label
Thumbnail row                Product name (H1)
                             Price
                             IN STOCK indicator
                             Key specification badges
                             Quantity selector
                             ADD TO CART button

─────────────────────────────────────────────────────────
Product description (full width)
Technical specification table (full width)
Related products (full width — 3 cards)
Footer
```

---

### Step 7 — Product Image Gallery

**Main image:**
- Large dark atmospheric product shot — gaming laptop on dark surface with subtle purple lighting
- Aspect ratio 1:1 or 4:3, fills the left column
- Dark card surface `#111118` with 6px radius
- Subtle purple glow behind the product: `box-shadow: 0 0 60px rgba(139, 92, 246, 0.2)`

**Thumbnail row (below main image):**
- 3 thumbnails, same dark card style
- Selected thumbnail: highlighted with cyan `#22D3EE` border
- Thumbnails: same product from different angles

---

### Step 8 — Product Information (Right Column)

**Category label:**
```
Laptop · Gaming Laptop
```
- Inter 13px `#8585A3` (muted)

**Product name (H1):**
```
APEX Gaming Laptop 15"
```
- Inter 26px 700 `#F0F0FF`

**Price:**
```
$1,799
```
- Inter 32px 700 `#F0F0FF`

**Availability:**
```
● IN STOCK
```
- Cyan dot `#22D3EE` + Inter 12px 600 `#22D3EE` UPPERCASE — matches CatalogPage card style

**Key specification badges (2 badges, same style as CatalogPage cards):**
```
[RTX 4070]  [32 GB DDR5]
```
- Background: `#16161E`, Inter 12px `#22D3EE`, 3px radius

**Quantity selector:**
```
[−]  [1]  [+]
```
- Dark surface `#111118`, `1px #1E1E2E` border, Inter 14px `#F0F0FF`
- `−` and `+` buttons in `#A0A0C0`

**ADD TO CART button (full width):**
```
[   ADD TO CART   ]
```
- Rajdhani Bold UPPERCASE, 15px
- Purple gradient background `#8B5CF6` → `#5516BE`
- White text `#F0F0FF`
- 6px border radius
- Height: 48px

---

### Step 9 — Product Description (full width, below hero section)

**Section heading:** "ABOUT THIS PRODUCT" — Rajdhani Bold 700 UPPERCASE 20px `#F0F0FF`

```
The APEX Gaming Laptop 15" delivers serious gaming performance in a portable package. 
Powered by an Intel Core i7-13700H processor and NVIDIA RTX 4070 graphics, it handles 
demanding titles at high settings. The 15.6-inch Full HD display runs at 144 Hz for 
fluid, responsive gameplay. 32 GB of DDR5 RAM ensures smooth multitasking, while a 
1 TB NVMe SSD provides fast load times.
```

- Inter 15px 400 `#A0A0C0`
- Max width ~800px
- `1px solid #1E1E2E` top separator

---

### Step 10 — Technical Specification Table (full width)

**Section heading:** "SPECIFICATIONS" — Rajdhani Bold 700 UPPERCASE 20px `#F0F0FF`

Display all 5 Gaming Laptop parameters as a 2-column table:

| Specification | Value |
|--------------|-------|
| CPU | Intel Core i7-13700H |
| RAM | 32 GB |
| Screen Size | 15.6 inch |
| GPU | NVIDIA RTX 4070 |
| Refresh Rate | 144 Hz |

**Table design:**
- Background: `#111118` card with `1px #1E1E2E` border and 6px radius
- Alternating rows: `#111118` / `#16161E`
- Parameter name: Inter 14px `#A0A0C0` (left column)
- Parameter value: Inter 14px 600 `#F0F0FF` (right column)
- Row height: 44px with dividers

---

### Step 11 — Related Products (full width)

**Section heading:** "YOU MAY ALSO LIKE" — Rajdhani Bold 700 UPPERCASE 20px `#F0F0FF`

Display 3 Gaming Laptop product cards, same design as CatalogPage V1 product cards:

**Row 1 (3 cards):**
1. **LYNX Gaming Laptop 15"** — $1,899 — Badges: "RTX 4070" / "32 GB DDR5" — IN STOCK (cyan)
2. **ECHO Gaming Laptop 14"** — $1,999 — Badges: "RTX 4070 Ti" / "32 GB DDR5" — IN STOCK (cyan)
3. **KORA Gaming Laptop 17"** — $2,099 — Badges: "RTX 4070 Ti" / "32 GB DDR5" — IN STOCK (cyan)

Each card: `#111118` background, `1px #1E1E2E` border, 6px radius, dark atmospheric product image, purple "ADD TO CART" CTA button, cyan "IN STOCK" text.

---

### Step 12 — Footer (identical to HomePage V2 and CatalogPage V1)

The footer matches the Gaming & Technology CatalogPage V1 footer exactly.

- Background: `#070708`
- 1px top line: purple-to-cyan gradient (`#8B5CF6` → `#22D3EE`)
- 4 columns: Shop | Browse | Information | Contact
- Column headings: Rajdhani Bold 14px UPPERCASE `#F0F0FF`
- Column links: Inter 14px `#A0A0C0` at rest, hover to `#F0F0FF`

---

### Step 13 — Accessibility Requirements

- All interactive elements have visible cyan focus rings (`#22D3EE`)
- "ADD TO CART" button always visible at rest (not hover-only)
- Product name as `<h1>` — only one per page
- Availability text in cyan (not purely color-coded — text carries the meaning)
- Quantity `−` and `+` buttons have aria-labels
- Thumbnail buttons have aria-labels

---

### Step 14 — Design Anti-Patterns to Avoid

- NO light backgrounds in content areas — everything is dark (`#0A0A0F`, `#111118`, `#16161E`)
- NO green anywhere — availability must be cyan `#22D3EE` only
- NO product rating stars, review counts, discount badges, or delivery promises
- NO "Sign In", "My Account", "Wishlist", or "Compare" controls
- NO price range or financing options
- NO pill-shaped buttons — 6px radius only
- NO sentence case CTA button — must be UPPERCASE "ADD TO CART"
- NO light images on dark backgrounds without atmospheric treatment
- NO cluttered spec panel — give each element room

---

### Step 15 — Expected Deliverable

A complete, high-fidelity **1440px desktop ProductPage** in the Gaming & Technology style, showing:

1. Header with PCShop wordmark, navigation (Laptops active), search icon, ThemeSwitcher "[Gaming ▾]", cart badge
2. Breadcrumb: Home / Laptops / Gaming Laptop / APEX Gaming Laptop 15"
3. Two-column layout: dark atmospheric product gallery (left) + product information panel (right)
4. Left: main product image with purple glow + 3 thumbnails below (cyan-bordered selected)
5. Right: "Laptop · Gaming Laptop" label, "APEX Gaming Laptop 15"" (H1), "$1,799" price, "● IN STOCK" (cyan), 2 spec badges, quantity [−][1][+], "ADD TO CART" purple gradient button
6. Product description: "ABOUT THIS PRODUCT" Rajdhani heading + dark panel with body text
7. Specification table: "SPECIFICATIONS" Rajdhani heading + 5 rows in dark table card
8. Related products: "YOU MAY ALSO LIKE" Rajdhani heading + 3 dark product cards
9. Footer in `#070708` with 4 columns and purple-to-cyan top gradient

The design must look like a production-ready gaming hardware product detail page — not a tech demo or wireframe. Dark atmospheric photography, deliberate purple/cyan accents, and confident Rajdhani typography.

---

## Final mandatory cross-theme requirements

These requirements override conflicting instructions above.

- Create a new ProductPage within the existing PCShop design project.
- Do not modify or replace any existing pages (HomePage V1, V2, CatalogPage V1).
- Use the existing HomePage V2 and CatalogPage V1 as the primary visual references.
- Preserve the established theme identity, header, footer, typography and product card design.
- Product image must be the visual hero — prominent, atmospheric, filling the left column.
- Price and CTA must be visible above the fold without scrolling.
- "ADD TO CART" button must be always visible (not hover-only).
- Specification table must render all 5 Gaming Laptop parameters.
- Related products must use the same product card design as CatalogPage V1.
- Do not introduce price range sliders, ratings, reviews, delivery promises, or financing options.
- Do not introduce any unsupported business functionality.
- Preserve visible product availability indicator.
- Preserve search, cart, and ThemeSwitcher controls in the header.
- Create a complete high-fidelity desktop ProductPage, not a wireframe.