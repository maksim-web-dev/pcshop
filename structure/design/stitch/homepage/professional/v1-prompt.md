# Google Stitch Generation Prompt — PCShop HomePage (Modern Technology Store)

> **Instructions for use:**
> Copy the prompt text below and paste it directly into Google Stitch.
> Attach the reference images listed in the "Reference Images" section.
> Do not modify the prompt before the first generation attempt.
> Save the exact prompt text alongside any generated output.

---

## Prompt Text (copy from here)

---

Design a complete, high-fidelity desktop homepage for **PCShop** — an online computer hardware store selling PCs, laptops, monitors, and peripherals. This is the **Modern Technology Store** visual theme — the default store theme.

**Viewport:** 1440px wide desktop. Design the full page from top to bottom, including header, hero, all content sections, and footer. Do not design only the above-the-fold section.

---

### Brand and Product Context

PCShop is a modern e-commerce store for computer hardware targeting practical shoppers and IT professionals aged 25–50. The Modern Technology Store theme is a polished, information-dense commercial electronics retailer. It draws from contemporary e-commerce design conventions: clean, well-organized, and efficient. Products are hardware only: laptops, desktop PCs, monitors, keyboards, mice.

This is **not** a startup landing page, a dashboard, or a plain admin panel. It is a professional commercial electronics store — well-organized, trustworthy, and ready to serve customers who want to compare specifications and make confident purchasing decisions.

---

### Page Objective

Design the PCShop HomePage with the following sections in order:
1. **Header** (sticky navigation bar with visible search)
2. **Hero Banner** (clean, full-width, 420px tall)
3. **Featured Categories** (product type navigation cards)
4. **Top Products** (product card grid, 3 columns, 4–6 products)
5. **Footer** (dark footer with 4-column layout)

---

### Target Audience

Practical shoppers and IT professionals. They want to compare specifications, filter products quickly, and make confident purchase decisions. They are comfortable with information density and expect familiar e-commerce conventions: breadcrumb navigation, visible search, sort controls, filter sidebar, and clear pricing. The UI should feel like a reliable, professional electronics retailer — not a fashion store, not a startup landing page.

---

### Complete Page Layout

**Header (64px tall, sticky):**
- Background: `#FFFFFF` with 1px bottom border `#E5E7EB`
- On scroll: adds `box-shadow: 0 2px 8px rgba(0,0,0,0.08)` (no background change)
- Left: PCShop wordmark in Inter Bold — clean, without decorative marks; blue `#2563EB` accent color on the wordmark or a simple geometric mark
- Center: search input — Inter 14px, `#E5E7EB` border, 6px radius, magnifier icon inside the input field, 300px wide, placeholder "Search products..."
- Navigation below or alongside: "Laptops", "PCs", "Monitors", "Peripherals"
  - Navigation link color: `#374151`
  - Active/hover: `#2563EB` with 2px blue underline
- Right: cart icon (line style) with count badge in `#2563EB`, ThemeSwitcher
- No promotional strip above header

**Hero Banner (420px tall):**
- Full-width, background `#FFFFFF` or very light blue tint `#EFF6FF`
- Left 45%: headline in Inter 40px 700, `#111827`, sentence case (not all-caps), 4–8 words; subheadline Inter 16px `#4B5563`, 1–2 lines, practical benefit-focused; primary CTA button `#2563EB` fill, white text, Inter 15px 600, 6px radius, 48px height; optional ghost button (secondary CTA with `#2563EB` border and text) below primary
- Right 55%: a large, clean product photograph (laptop or monitor) on white/light gray background — well-lit, no dramatic shadows, catalog-quality photograph
- No carousel, no animated elements, no gradient backgrounds, no promotional promise banners

**Featured Categories (light gray section):**
- Section background: `#F3F4F6` (light gray, visually separates from white hero)
- Section heading in Inter 20px 600, `#111827`, left-aligned: "Shop by Category"
- 4 category cards in a row
- Each card: `#FFFFFF` background, 8px radius, `--shadow-card` shadow, category image (top 65% of card), category name in Inter 14px 600 `#111827` below, arrow icon or "Browse →" link in `#2563EB`
- Hover: subtle shadow lift + 1px blue border `#2563EB`

**Top Products Grid (3-column):**
- Section heading: "Featured Products" in Inter 20px 600, `#111827`, left-aligned
- Above the grid: a right-aligned sort control ("Sort by: Featured ▾") and optionally a "View All Products →" link in `#2563EB`
- 4–6 product cards in a 3-column grid
- Each product card:
  - `#FFFFFF` background, 8px radius, 1px `#E5E7EB` border, `--shadow-card`
  - Product image top (50% of card height) on white/light gray studio background
  - Product name: Inter 14px 600, `#111827`, max 2 lines
  - Price: Inter 18px 700, `#111827`
  - 2–3 parameter badges: `#F3F4F6` background, `#4B5563` text, Inter 12px 500, 4px radius
  - Optional: small green dot + "In stock" in Inter 12px `#059669`
  - "Add to Cart" button: always visible (not hover-only), full-width, `#2563EB` background, white text, 40px height, 6px radius
  - Hover effect: `box-shadow: 0 4px 12px rgba(0,0,0,0.10), 0 0 0 1px rgba(37,99,235,0.2)` — subtle blue-tinted border elevation

**Footer:**
- Background: `#111827` (dark, clear visual separation from page)
- 4-column layout: Shop, Browse, Information, Contact
- Section headings: Inter 14px 500, `#FFFFFF`
- Links: Inter 12px, `#9CA3AF`, hover `#FFFFFF`
- Bottom bar: slightly darker `#1F2937` strip, copyright + policy links in Inter 12px `#6B7280`

---

### Visual Identity

**Color palette — strict:**
- Page background: `#F3F4F6` (light gray — not pure white, not cream; a neutral cool-toned light gray)
- Section alt background: `#F3F4F6` (same as page — creates visual continuity)
- Card background: `#FFFFFF`
- Header background: `#FFFFFF`
- Hero background: `#FFFFFF` or `#EFF6FF` (very light blue tint)
- Primary text: `#111827` (near-black)
- Secondary text: `#4B5563` (medium gray)
- Muted text: `#9CA3AF`
- **Primary accent: Blue `#2563EB`** — CTA buttons, links, cart badge, active nav, focus rings
- **Secondary accent: Graphite `#374151`** — secondary buttons, icons, nav links at rest
- Hover accent: `#1D4ED8` (darker blue)
- Subtle accent tint: `#EFF6FF` (very pale blue for selected rows, hero background)
- Borders: `#E5E7EB`
- Success: `#059669` (in-stock only)

**Zero tolerance for:** dark backgrounds outside footer, gradients on buttons or sections, purple, cyan, yellow, orange, gold, red accents (outside semantic error states).

---

### Typography Direction

**Single typeface: Inter only.**

No decorative fonts, no serif fonts, no condensed display fonts. Inter handles all text — headlines, navigation, body, prices, badges — with weight variation providing hierarchy.

**Type scale:**
- Hero headline: Inter 40px, weight 700, sentence case, letter-spacing −0.01em
- Section headings: Inter 20px, weight 600
- Product names: Inter 14px, weight 600
- Price: Inter 18px, weight 700
- Parameter badges: Inter 12px, weight 500
- Navigation links: Inter 14px, weight 500
- Body text: Inter 15px, weight 400

No italic text. No all-caps headlines. Uppercase used only for short labels or badges (letter-spacing +0.05em when uppercase).

---

### Spacing and Visual Density

**Balanced density.** More compact than a premium editorial theme, less dense than a pure data table.
- Page gutter left/right: 60px
- Between major sections: 48px vertical spacing
- Between product cards: 20px gap
- Internal card padding: 16px
- Hero section: 64px vertical padding

3-column product grid. Practical shoppers want sufficient product information per card — 3 columns give room for name, price, badges, and CTA without crowding.

---

### Hero Banner Composition

**Reference:** Newegg or Best Buy catalog hero — large product photography, clear headline, prominent CTA, trust indicators below. No dramatic lighting, no dark backgrounds, no atmospheric effects.

Hero should feel like a confident product launch from a reliable electronics retailer. The product image is sharp and clean. The headline is clear and benefit-focused. There is no urgency language ("Limited Time", "Sale Ends Tonight"), no countdown timer, no badge overlays.

**Mock content for hero:**
- Headline: "Build Your Perfect PC"
- Subheadline: "Laptops, components, and peripherals — trusted selection, fast delivery."
- Primary CTA: "Shop Now" in `#2563EB` button
- Secondary CTA: "Browse All Products" ghost button
- Featured product: a slim laptop photographed on a white/light gray studio background, well-lit, no RGB or dramatic lighting

---

### Product Card Design

Clean, information-forward. All information is visible at rest without hover. No hover-only CTAs.

Each card:
- `#FFFFFF` background, 1px `#E5E7EB` border, 8px radius
- Product image: white/light gray studio background (clean, well-lit)
- Product name: Inter 14px 600, `#111827`, max 2 lines
- Price: Inter 18px 700, `#111827`
- 2–3 parameter badges: `#F3F4F6` bg, `#4B5563` text, 4px radius
- Optional: green dot + "In stock" or amber "Low stock (3 left)" below badges
- "Add to Cart" button: full-width, `#2563EB` background, white text, always visible, 40px height

**Mock products (shared dataset — identical across all three themes):**

Show all 6 products in the grid. The professional theme shows 3 badges for laptops and PCs to reflect the information-dense character of this theme.

1. APEX Gaming Laptop 15" — $1,799 — badges: "RTX 4070", "32 GB DDR5", "Intel i7"
2. NOVA Ultrabook 14" — $1,199 — badges: "16 GB RAM", "512 GB SSD", "Intel i5"
3. TITAN PC Tower — $2,499 — badges: "RTX 4080", "64 GB DDR5"
4. NEXUS Monitor 32" — $799 — badges: "240 Hz", "QHD"
5. STRIKER Keyboard PRO — $229 — badges: "Cherry MX", "Wireless"
6. SWIFT Mouse Pro — $89 — badges: "25600 DPI", "Wireless"

No star ratings, no "Best Seller" labels, no discount badges.
Prices are fixed single values — no "from $X" variable pricing.

---

### Product Photography Direction

Products are photographed on **white or light gray studio backgrounds** with soft, diffuse lighting. Products are hardware only — no people, no lifestyle imagery. The feel should be catalog-quality: sharp, neutral, professional. No dramatic shadows, no colorful reflections, no atmospheric lighting.

Comparable to product photography from B&H Photo or Newegg product listings — the product is the subject, not a mood.

---

### Category Presentation

4 category cards in a row:
- "Laptops" — image of a laptop on white/light gray background
- "Desktop PCs" — image of a tower PC or small-form-factor PC
- "Monitors" — image of a widescreen monitor at a slight angle
- "Peripherals" — image of a keyboard or gaming mouse on a desk

Each card: `#FFFFFF` background, 8px radius, shadow, category image (top 65% of card), category name in Inter 14px 600 `#111827` below, "Browse →" link in `#2563EB`.
Section background: `#F3F4F6` to visually separate from white hero above.
Hover: shadow elevation + 1px blue border.

---

### Header and Navigation

The header is a **fixed, always-visible light bar** at the top. No dark areas in the header.

Logo: "PCShop" in Inter Bold — `#111827` wordmark, possibly with a small blue `#2563EB` geometric accent element. Clean and trustworthy, not stylized.

Navigation: Laptops | PCs | Monitors | Peripherals
In Inter 14px 500, `#374151`. Hover: `#2563EB` with 2px underline.

Center of header: a **visible search input** — this is a key differentiator from the premium and gaming themes. The search input is always visible on desktop, not hidden behind an icon.

Right side:
- Cart icon (line style) with count badge in `#2563EB`
- ThemeSwitcher: compact text toggle showing "Professional ▾"

No colored backgrounds, no gradient in the header. Pure white with bottom border.

---

### ThemeSwitcher Appearance

Compact control in top-right header. Shows "Professional" in Inter 12px, `#374151`. Clicking opens a minimal dropdown with options: Premium | Gaming | Professional. The dropdown uses `#FFFFFF` background, `#E5E7EB` border, `#2563EB` text on the active option, 8px radius.

---

### Footer Design

Conventional dark footer. No decorative elements.

Background: `#111827`

4-column layout:
- Shop: Laptops, PCs, Monitors, Keyboards, Mice
- Browse: Gaming Laptops, Ultrabooks, Desktop PCs, All Products
- Information: About, Privacy Policy
- Contact: email, social media icon links

Section headings: Inter 14px 500, `#FFFFFF`
Links: Inter 12px, `#9CA3AF`, hover `#FFFFFF`
Bottom bar: `#1F2937` background, copyright + policy links in Inter 12px `#6B7280`

---

### Accessibility Requirements

- Primary text `#111827` on `#FFFFFF` = 16.75:1 — well above requirement
- Blue `#2563EB` on `#FFFFFF` = 4.6:1 — acceptable for buttons and large interactive elements; verify at small sizes
- Secondary text `#4B5563` on `#FFFFFF` = 7.0:1 — usable for descriptions
- All interactive elements must have focus rings: `2px solid #2563EB, offset 2px`
- CTA buttons must be visible at rest — no hover-only CTAs
- No text below 12px (11px captions excepted)
- Color alone is not the only state indicator — hover uses both color change and underline/shadow

---

### Reference Image Instructions

**REF-PR03 (Newegg):** Reference for product card structure on a light gray page background, breadcrumb navigation, filter chip bar above product grid, and horizontal product navigation tabs. Newegg's card layout includes image, name, price, parameter badges, and CTA button — this is the target structure. PCShop does not use Newegg's older visual styling or red accents; use blue only.

**REF-PR04 (PCPartPicker):** Reference for left filter sidebar accordion pattern, result count display ("Showing X of Y"), sort controls above the grid, and information-dense product listing. The filter sidebar is a key pattern for the professional catalog page — apply the structural logic, not the visual styling.

**REF-PR06 (Amazon):** Reference for established e-commerce homepage conventions: clean white hero, category navigation grid, and product card grid with consistent image dimensions. Amazon's layout demonstrates proven commercial patterns — take the structural logic (hero proportion, category grid, product grid) not the visual density overload, promotional clutter, or trust indicator banners (shipping/returns promises are not in PCShop's scope).

---

### Design Anti-Patterns to Avoid

- ❌ Dark backgrounds anywhere on the page except footer
- ❌ Blue gradients or color gradients on buttons or sections
- ❌ Purple, cyan, or any non-blue accent color
- ❌ Dramatic shadows, glow effects, or atmospheric lighting
- ❌ Hover-only "Add to Cart" buttons
- ❌ Hero carousel or multiple hero slides
- ❌ Lifestyle photography with people
- ❌ All-caps headlines or decorative display typography
- ❌ Serif or condensed fonts (Inter only)
- ❌ Star ratings, review counts, or social proof widgets on product cards
- ❌ Promotional urgency language ("Limited Time", countdown timers, "Only 3 Left" badges)
- ❌ White-on-dark card design (this is the light professional theme)
- ❌ Admin panel or dashboard visual language (this is a shopping store, not a tool)
- ❌ Excessive card metadata (maximum 3 badges + name + price + CTA)

---

### Expected Visual Deliverable

A single, full-page desktop design at 1440px width showing:
- Complete, designed light header with visible search input (not a placeholder)
- Full 420px hero banner with actual mock content and clean product photography
- Featured categories section on light gray background with 4 category cards
- 4–6 product cards in a 3-column white card grid with names, prices, blue badges, and "Add to Cart" buttons
- Dark footer with 4-column layout and actual link text

The design must feel like a completed, production-ready concept from a trusted commercial electronics retailer — not a wireframe, not an admin dashboard, not an Apple Store replica, and not a Newegg clone.

---

*End of prompt*