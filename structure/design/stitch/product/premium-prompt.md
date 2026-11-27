# Google Stitch Prompt — PCShop ProductPage: Premium Minimalism

**Use this exact prompt in the existing Premium Minimalism Stitch project.**  
**Create a new ProductPage. Do not modify the existing HomePage V1, V2, or CatalogPage V1 designs.**

---

## Prompt

You are designing a ProductPage for **PCShop**, an online computer hardware store that sells gaming laptops, ultrabooks, desktop PCs, monitors, keyboards, and mice.

PCShop has three interchangeable visual themes. This page belongs to the **Premium Minimalism** theme.

---

### Step 1 — Context: Existing Project

This is an addition to an existing Stitch project. The project already contains three pages:
- HomePage V1 (original generation — preserve exactly)
- HomePage V2 (approved revision — preserve exactly)
- CatalogPage V1 (preserve exactly)

Create a new page called **"ProductPage - Premium Minimalism"** at desktop viewport width **1440px**.

Do not modify or delete the existing pages.

Use the **HomePage V2** and **CatalogPage V1** designs as your primary visual references for all design decisions: colors, typography, card styles, header, footer, and ThemeSwitcher.

---

### Step 2 — Page Objective

The ProductPage displays the full detail view of a single product. The customer has arrived from the Gaming Laptop catalog and is viewing the APEX Gaming Laptop 15". The page must:

- Make the product photography the editorial centerpiece — large, unhurried
- Present the product name and price with elegant typography
- Provide a refined minimalist purchase section
- Display technical specifications in a clean, legible table
- Show related products below with generous spacing

---

### Step 3 — Theme Identity: Premium Minimalism

This theme targets design-conscious technology buyers aged 28–45 who value editorial restraint and classical typography.

**Color palette:**
- Page background: `#FAFAF8` (warm off-white — paper-like, not pure white)
- Product cards, search forms: `#FFFFFF` (clean white)
- Specification badges, subtle surfaces: `#F4F3F0`
- Primary text, headings, prices: `#1A1A1A`
- Secondary text, "In stock", filter labels: `#5C5C5C`
- Muted text: `#9E9E9E`
- Primary accent (CTA buttons, borders): `#1A1A1A`
- CTA button text: `#FAFAF8`
- Card/input borders: `#E5E0DB`
- Footer background: `#1A1A1A`
- Footer text: `#FAFAF8`

**Availability indicator:** "In stock" text in DM Sans 12px 400 `#5C5C5C`. No color dot. No colored text. Text-only, subdued.

**Typography:**
- Playfair Display 400 for section headings (product name as the primary display heading, specification section heading)
- DM Sans for all UI text: navigation, price, description body, filter labels, pagination, breadcrumb, badges, button labels, footer
- Product name: Playfair Display 400, 32px (prominent editorial heading)
- Price: DM Sans 700, 28px
- Body text: DM Sans 400, 15px
- Never all-caps headings

**Border radius:**
- Product cards and CTA buttons: 4px
- Specification badges: 2px
- Cart badge: 9999px (full circle)
- No pill-shaped buttons

**Effects:**
- Subtle card hover: `box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08)` (ambient soft-lift)
- No gradients, no glow effects, no glassmorphism

**Spacing:**
- Page gutters: 80px desktop
- Two-column product layout gap: 64px
- Section spacing: 64px

---

### Step 4 — Header (identical to HomePage V2 and CatalogPage V1)

The header matches the Premium Minimalism CatalogPage V1 header.

- Background: `#FAFAF8` with `1px solid #E5E0DB` bottom border
- Height: 64px
- Left: PCShop wordmark in `#1A1A1A` (simple, no accent mark)
- Center: horizontal navigation — Laptops | PCs | Monitors | Peripherals (DM Sans 14px `#5C5C5C`)
- **"Laptops"** navigation item is active (`2px solid #1A1A1A` bottom border or bold weight)
- Right: compact visible search input (`#FFFFFF` background, `1px #E5E0DB` border, DM Sans 14px) + ThemeSwitcher "[Premium ▾]" + cart icon (`#1A1A1A` badge with count)

---

### Step 5 — Breadcrumb

Below the header:

```
Home / Laptops / Gaming Laptop / APEX Gaming Laptop 15"
```

- DM Sans 14px `#5C5C5C`
- "Home", "Laptops", "Gaming Laptop" are linked (hover: underline in `#1A1A1A`)
- "APEX Gaming Laptop 15"" is the current page — DM Sans 14px `#1A1A1A` 600 weight, not linked
- Separator: `/`

---

### Step 6 — Page Layout (Two-Column Product Detail)

```
Left column (520px)         Right column (remaining width)
─────────────────────────────────────────────────────────
Main product image           Category label
Thumbnail row                Product name (H1) — Playfair
                             Price — DM Sans 700
                             In stock — text only
                             Key specification badges
                             Quantity selector
                             Add to Cart button

─────────────────────────────────────────────────────────
Product description (full width)
Technical specification table (full width)
Related products (full width — 3 cards)
Footer
```

---

### Step 7 — Product Image Gallery

**Main image:**
- Large, editorial product photography — laptop on warm neutral surface with clean shadows
- Aspect ratio 1:1 or 4:3, fills the left column
- White `#FFFFFF` card background with `1px solid #E5E0DB` border and 4px radius
- Generous padding around the product image (not edge-to-edge)
- Clean, uncluttered — no atmospheric effects

**Thumbnail row (below main image):**
- 3 thumbnails, same white card style
- Selected thumbnail: highlighted with `2px solid #1A1A1A` border
- Thumbnails spaced with 8px gap
- Same clean product photography style

---

### Step 8 — Product Information (Right Column)

**Category label:**
```
Laptop · Gaming Laptop
```
- DM Sans 13px `#9E9E9E` (muted)

**Product name (H1):**
```
APEX Gaming Laptop 15"
```
- Playfair Display 400, 32px `#1A1A1A`

**Price:**
```
$1,799
```
- DM Sans 700, 28px `#1A1A1A`

**Availability:**
```
In stock
```
- DM Sans 14px `#5C5C5C` — text only, no dot, no color

**Key specification badges (2 badges, same style as CatalogPage cards):**
```
[RTX 4070]  [32 GB DDR5]
```
- Background: `#F4F3F0`, DM Sans 12px `#1A1A1A`, 2px radius

**Quantity selector:**
```
[−]  [1]  [+]
```
- White `#FFFFFF` background, `1px #E5E0DB` border, DM Sans 14px `#1A1A1A`, 4px radius
- `−` and `+` in `#5C5C5C`

**Add to Cart button (full width):**
```
[   Add to Cart   ]
```
- DM Sans 14px 600, sentence case
- Background: `#1A1A1A`
- Text: `#FAFAF8`
- 4px border radius
- Height: 48px
- Hover: subtle opacity shift (no glow, no gradient)

---

### Step 9 — Product Description (full width, below hero section)

**Section heading:** "About this product" — Playfair Display 400, 24px `#1A1A1A`

```
The APEX Gaming Laptop 15" delivers serious gaming performance in a portable package. 
Powered by an Intel Core i7-13700H processor and NVIDIA RTX 4070 graphics, it handles 
demanding titles at high settings. The 15.6-inch Full HD display runs at 144 Hz for 
fluid, responsive gameplay. 32 GB of DDR5 RAM ensures smooth multitasking, while a 
1 TB NVMe SSD provides fast load times.
```

- DM Sans 15px 400 `#5C5C5C`
- Max width ~720px (generous side whitespace)
- `1px solid #E5E0DB` top separator

---

### Step 10 — Technical Specification Table (full width)

**Section heading:** "Specifications" — Playfair Display 400, 24px `#1A1A1A`

Display all 5 Gaming Laptop parameters as a clean 2-column table:

| Specification | Value |
|--------------|-------|
| CPU | Intel Core i7-13700H |
| RAM | 32 GB |
| Screen Size | 15.6 inch |
| GPU | NVIDIA RTX 4070 |
| Refresh Rate | 144 Hz |

**Table design:**
- Background: `#FFFFFF` card with `1px #E5E0DB` border and 4px radius
- Alternating rows: `#FFFFFF` / `#FAFAF8`
- Parameter name: DM Sans 14px `#5C5C5C` (left column)
- Parameter value: DM Sans 14px 600 `#1A1A1A` (right column)
- Row height: 44px with `1px #E5E0DB` dividers
- No heavy borders — minimal separators only

---

### Step 11 — Related Products (full width)

**Section heading:** "You may also like" — Playfair Display 400, 24px `#1A1A1A`

Display 3 product cards, same design as the CatalogPage V1 product cards:

**Row 1 (3 cards):**
1. **LYNX Gaming Laptop 15"** — $1,899 — Badges: "RTX 4070" / "32 GB DDR5" — In stock
2. **ECHO Gaming Laptop 14"** — $1,999 — Badges: "RTX 4070 Ti" / "32 GB DDR5" — In stock
3. **KORA Gaming Laptop 17"** — $2,099 — Badges: "RTX 4070 Ti" / "32 GB DDR5" — In stock

Each card: white `#FFFFFF` background, `1px #E5E0DB` border, 4px radius, clean product photography, `#1A1A1A` CTA button, `#5C5C5C` "In stock" text.

---

### Step 12 — Footer (identical to HomePage V2 and CatalogPage V1)

The footer matches the Premium Minimalism CatalogPage V1 footer exactly.

- Background: `#1A1A1A`
- No decorative top line
- 4 columns: Shop | Browse | Information | Contact
- Column headings: DM Sans 14px 600 `#FAFAF8`
- Column links: DM Sans 14px `#9E9E9E` at rest, hover to `#FAFAF8`

---

### Step 13 — Accessibility Requirements

- All interactive elements have visible `2px solid #1A1A1A` focus outlines
- "Add to Cart" button always visible at rest (not hover-only)
- Product name as `<h1>` — only one per page
- Availability shown as text ("In stock") — not purely color-coded
- Quantity `−` and `+` buttons have aria-labels
- Thumbnail buttons have aria-labels
- Table has a visible caption or section heading

---

### Step 14 — Design Anti-Patterns to Avoid

- NO colored accent elements: no blue, green, purple, cyan, gold, red — only `#1A1A1A` graphite
- NO gradients, no glow effects, no drop shadows stronger than ambient soft-lift
- NO dark backgrounds anywhere in the product detail area (footer is the only dark element)
- NO all-caps headings — sentence case or Title Case only
- NO product ratings, review counts, discount badges, or delivery promises
- NO "Sign In", "My Account", "Wishlist", or "Compare" controls
- NO pill-shaped buttons — 4px radius only
- NO price range sliders or financing options
- NO cluttered product info panel — generous spacing between every element
- DO NOT use Playfair Display for body text, prices, or navigation — DM Sans only for those

---

### Step 15 — Expected Deliverable

A complete, high-fidelity **1440px desktop ProductPage** in the Premium Minimalism style, showing:

1. Header with PCShop wordmark, navigation (Laptops active), compact search input, ThemeSwitcher "[Premium ▾]", cart badge — all on warm `#FAFAF8`
2. Breadcrumb: Home / Laptops / Gaming Laptop / APEX Gaming Laptop 15"
3. Two-column layout: clean editorial product gallery (left, 520px) + minimal product info (right)
4. Left: white card product image on warm surface + 3 thumbnail cards with `#1A1A1A` border on selected
5. Right: "Laptop · Gaming Laptop" muted label, Playfair "APEX Gaming Laptop 15"" (H1), DM Sans "$1,799" price, "In stock" gray text, 2 spec badges, quantity [−][1][+], "Add to Cart" `#1A1A1A` button
6. Product description: Playfair "About this product" heading + DM Sans body on `#FAFAF8`
7. Specification table: Playfair "Specifications" heading + 5-row clean table on white card
8. Related products: Playfair "You may also like" heading + 3 product cards
9. Footer in `#1A1A1A` with 4 columns

The design must look like a premium editorial hardware catalog — refined, unhurried, and confident in whitespace. No promotional urgency, no decorative color.

---

## Final mandatory cross-theme requirements

These requirements override conflicting instructions above.

- Create a new ProductPage within the existing PCShop design project.
- Do not modify or replace any existing pages (HomePage V1, V2, CatalogPage V1).
- Use the existing HomePage V2 and CatalogPage V1 as the primary visual references.
- Preserve the established theme identity, header, footer, typography and product card design.
- Product image must be the editorial hero — large, clean, filling the left column.
- Price and CTA must be visible above the fold without scrolling.
- "Add to Cart" button must be always visible (not hover-only).
- Specification table must render all 5 Gaming Laptop parameters.
- Related products must use the same product card design as CatalogPage V1.
- Do not introduce price range sliders, ratings, reviews, delivery promises, or financing options.
- Do not introduce any unsupported business functionality.
- Preserve visible product availability indicator.
- Preserve search, cart, and ThemeSwitcher controls in the header.
- Create a complete high-fidelity desktop ProductPage, not a wireframe.