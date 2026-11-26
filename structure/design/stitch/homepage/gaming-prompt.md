# Google Stitch Generation Prompt — PCShop HomePage (Gaming & Technology)

> **Instructions for use:**
> Copy the prompt text below and paste it directly into Google Stitch.
> Attach the reference images listed in the "Reference Images" section.
> Do not modify the prompt before the first generation attempt.
> Save the exact prompt text alongside any generated output.

---

## Prompt Text (copy from here)

---

Design a complete, high-fidelity desktop homepage for **PCShop** — an online computer hardware store selling PCs, laptops, monitors, and peripherals. This is the **Gaming & Technology** visual theme.

**Viewport:** 1440px wide desktop. Design the full page from top to bottom, including header, hero, all content sections, and footer. Do not design only the above-the-fold section.

---

### Brand and Product Context

PCShop is a modern e-commerce store for computer hardware targeting gamers, PC builders, and hardware enthusiasts aged 16–35. The Gaming theme is dark, atmospheric, and focused — it communicates high performance through dramatic product presentation and controlled use of purple and cyan accent colors.

The accent colors are **purple (#8B5CF6)** and **cyan (#22D3EE)**. These are the only accent colors. Do not use red, green, yellow, orange, or any other accent color.

This is **not** an RGB rainbow store. It is a sophisticated dark technology store with two specific, deliberate accent colors.

Products are photographed on dark studio backgrounds. All products are hardware: laptops, PCs, monitors, keyboards, mice.

---

### Page Objective

Design the PCShop HomePage with the following sections in order:
1. **Header** (sticky navigation bar, dark)
2. **Hero Banner** (dramatic, full-width, 580px tall)
3. **Featured Categories** (product type navigation, dark cards)
4. **Top Products** (product card grid, dark cards, 4–6 products)
5. **Footer** (darkest surface with accent top line)

---

### Target Audience

Gamers, PC builders, hardware enthusiasts. They are performance-driven and decisive. They want to see specifications, make fast purchase decisions, and feel that the products are powerful and cutting-edge. The UI should feel immersive and focused — like a high-end gaming brand, not a consumer electronics chain.

---

### Complete Page Layout

**Header (64px tall, always sticky):**
- Background: `#0A0A0F` (near-black) with 1px bottom border `#1E1E2E`
- On scroll: `rgba(10,10,15,0.9)` background with `backdrop-filter: blur(12px)`
- Left: PCShop wordmark in Rajdhani Bold — geometric, angular, with subtle purple or cyan accent mark
- Center: navigation links in Inter 14px 500 — "Laptops", "PCs", "Monitors", "Peripherals", "Deals"
  - Navigation link color: `#A0A0C0`
  - Active/hover: `#22D3EE` (cyan) with 2px cyan underline
- Right: search icon, cart icon with count badge in `#8B5CF6` (purple), ThemeSwitcher
- No promotional strip above header
- Overall: dark, clean, sophisticated

**Hero Banner (580px tall):**
- Full-width, dark gradient background: from `#0A0A0F` to `#12101F` (very dark purple-black)
- Optional: very subtle geometric grid pattern at ≤8% opacity (like faint circuit board lines or hexagonal grid) — only if it doesn't compete with the product
- Left 40%: headline in Rajdhani 72px UPPERCASE, white `#F0F0FF`, 2–4 words, tight tracking; subheadline in Inter 16px `#A0A0C0`; CTA button with purple-to-purple-dark gradient and glow effect
- Right 60%: a large gaming laptop or high-performance PC component (GPU) photographed on a dark background, with atmospheric directional lighting — the product appears to glow from within
- One thin cyan or purple accent line as a decorative element (bottom of hero or framing element)
- No carousel, no multiple slides

**Featured Categories (dark cards):**
- Section heading in Rajdhani 32px UPPERCASE, `#F0F0FF`: "SHOP BY CATEGORY"
- 4 dark product category cards in a row
- Each card: dark `#111118` background, product category image (top ~60%), category name in Rajdhani bold below in `#F0F0FF`
- Hover effect: purple glow border `#8B5CF6` appears around card edges
- 6px card radius, `#1E1E2E` border at rest

**Top Products Grid (4-column, dark cards):**
- Section heading: "FEATURED HARDWARE" in Rajdhani 32px UPPERCASE
- 4–6 product cards in a 4-column grid
- Each product card:
  - `#111118` background, `#1E1E2E` border (1px), 6px radius
  - Product image top (50–55% of card height) on dark studio background
  - Optional: subtle category tag (top-left of image) in dark semi-transparent badge, cyan text
  - Product name: Inter 14px 600, `#F0F0FF`
  - Price: Inter 16px 700, white or purple `#8B5CF6`
  - 2–3 parameter badges: `rgba(139,92,246,0.1)` background, `#22D3EE` text, Inter 11px 600, 3px radius
  - "Add to Cart" button: always visible (not hover-only), full-width, gradient purple background, 40px height
  - Hover effect: purple glow on card border

**Footer:**
- Background: `#070708` (slightly darker than page — deepest dark)
- Top: 1px gradient line from purple to cyan (decorative accent)
- 4-column layout: Shop, Account, Information, Contact
- Headings: `#A0A0C0` in Inter 14px 500
- Links: `#60607A` hover `#22D3EE` (cyan)
- Bottom bar: copyright in Inter 12px `#60607A`

---

### Visual Identity

**Color palette — strict:**
- Page background: `#0A0A0F` (near-black, with very subtle blue undertone)
- Card background: `#111118` (slightly elevated dark)
- Filter/sidebar background: `#16161E`
- Primary text: `#F0F0FF` (near-white with very slight cool tint)
- Secondary text: `#A0A0C0` (medium gray-purple)
- Muted text: `#60607A`
- **Primary accent: Purple `#8B5CF6`** — CTA buttons, cart badge, active states
- **Secondary accent: Cyan `#22D3EE`** — links, hover states, badges, focus rings
- Borders: `#1E1E2E` (dark elevated separator)
- Glow (purple): `rgba(139, 92, 246, 0.35)` — box shadows on hover
- Glow (cyan): `rgba(34, 211, 238, 0.30)` — link/icon glow

**Zero tolerance for:** red, green, yellow, orange, white backgrounds, light gray backgrounds.

---

### Typography Direction

**Two typefaces:**
- **Rajdhani** (condensed geometric sans): all display headlines, section headings, navigation wordmark, hero headline, CTA button text
- **Inter** (clean functional sans): body text, product names, prices, badges, navigation links, all UI text

**Type scale:**
- Hero headline: Rajdhani 72px, weight 700, uppercase, letter-spacing +0.04em
- Section headings: Rajdhani 32px, weight 600, uppercase
- Product names: Inter 14px, weight 600
- Price: Inter 16px, weight 700
- Parameter badges: Inter 11px, weight 600, cyan color
- Navigation: Inter 14px, weight 500

No italic text, no mixed-case display headlines.

---

### Spacing and Visual Density

**Medium-high density.** More products per screen than premium theme.
- Page gutter left/right: 60px
- Between major sections: 56px vertical spacing
- Between product cards: 20px gap
- Internal card padding: 16px
- Hero section: 80px vertical padding

4-column product grid (not 3). Gaming users want to see more products per viewport.

---

### Hero Banner Composition

**Reference:** ASUS ROG homepage for large uppercase hero headline and near-black background with dramatic product lighting. Alienware homepage for the deep blue-purple atmospheric dark background and cool product photography mood. These use different accent colors (ROG=red, Alienware=blue) — PCShop gaming uses purple and cyan instead.

Hero should feel like the opening screen of a high-end gaming brand campaign. The product image is dramatic and powerful. The headline is bold and assertive. There is no soft sentiment — this is performance hardware.

**Mock content for hero:**
- Headline: "DOMINATE YOUR BUILD"
- Subheadline: "Next-gen gaming laptops. No compromises."
- CTA button: "SHOP LAPTOPS" with purple gradient background and glow
- Featured product: a gaming laptop with RGB keyboard lighting, photographed from a 3/4 angle on a dark background with atmospheric lighting that makes the hardware look powerful

---

### Product Card Design

Dark, structured, information-forward. All information is visible at rest without hover.

Each card:
- `#111118` background, 1px `#1E1E2E` border, 6px radius
- Product image: dark studio background (product looks composited onto dark surface)
- Optional category tag top-left: dark semi-transparent `rgba(0,0,0,0.6)` + cyan text "Gaming Laptop"
- Product name: Inter 14px 600, `#F0F0FF`
- Price: Inter 16px 700, `#F0F0FF`
- 2 badges: `rgba(139,92,246,0.1)` bg, `#22D3EE` text — e.g. "RTX 4070", "32 GB RAM"
- "Add to Cart" button: full-width, purple gradient, always visible, 40px height

**Mock products:**
1. VORTEX Gaming Laptop 15" — $1,799 — badges: "RTX 4070", "32 GB DDR5"
2. PHANTOM PC Tower — $2,499 — badges: "i9-14900K", "64 GB RAM"
3. NEXUS Monitor 32" 240Hz — $799 — badges: "240 Hz", "QHD"
4. STRIKER Keyboard PRO — $229 — badges: "Cherry MX", "RGB"

No star ratings, no "Best Seller" labels.

---

### Product Photography Direction

Products are photographed on **dark studio backgrounds** — near-black or very dark gray. Products should appear to have dramatic directional lighting — as if lit from above and to the side, creating depth and atmosphere. Gaming laptops should show RGB keyboard lighting visible in the image. GPU cards should show the cooler design with lighting accents.

The feel should resemble NVIDIA GeForce RTX marketing photography — hardware as an art object, atmospheric and powerful.

---

### Category Presentation

4 dark category cards:
- "Gaming Laptops" — gaming laptop image on dark background
- "Desktop PCs" — PC tower with RGB lighting visible
- "Monitors" — gaming monitor with thin bezels at angle
- "Peripherals" — gaming keyboard or headset on dark surface

Each card: `#111118` background, category image top, Rajdhani bold label below in `#F0F0FF`.
Hover: purple glow border `#8B5CF6` appears. The glow is the hover indicator.

---

### Header and Navigation

The header is a **fixed, always-visible dark bar** at the top.

Logo: "PCShop" in Rajdhani Bold — `#F0F0FF` wordmark with a small geometric cyan or purple accent element (optional: a sharp angular mark before the wordmark).

Navigation center: Laptops | PCs | Monitors | Peripherals | Deals
In Inter 14px 500, `#A0A0C0`. Hover: `#22D3EE` (cyan) + 2px underline animation.

Right side:
- Search: magnifier icon `#A0A0C0`
- Cart: icon with count badge in `#8B5CF6` (purple)
- ThemeSwitcher: compact icon or text "Gaming ▾" in `#A0A0C0`

No white areas, no light backgrounds anywhere in the header.

---

### ThemeSwitcher Appearance

Compact control in top-right header. Shows "Gaming" in Inter 12px, `#A0A0C0`. Clicking opens a minimal dark dropdown with options: Premium | Gaming | Professional. The dropdown uses `#111118` background, `#1E1E2E` border, cyan highlight on the active option.

---

### Footer Design

Darkest section of the page. Near-black `#070708`.

Top of footer: 1px gradient line (purple `#8B5CF6` → cyan `#22D3EE`) — the only decorative element.

4-column layout:
- Shop: Laptops, PCs, Monitors, Keyboards, Mice
- Account: Sign In, My Orders
- Information: About, Delivery, Returns, Privacy Policy
- Contact: email, social media icon links

Headings: Inter 14px 500, `#A0A0C0`
Links: Inter 12px, `#60607A`, hover `#22D3EE`
Copyright line: Inter 11px, `#60607A`

---

### Accessibility Requirements

- Primary text `#F0F0FF` on `#0A0A0F` = 18.9:1 contrast — well above requirement
- Cyan `#22D3EE` on `#0A0A0F` = 9.6:1 — usable as text color
- Purple `#8B5CF6` on `#0A0A0F` = 5.1:1 — acceptable for large text; verify at small sizes
- All interactive elements must have focus rings (cyan glow/outline)
- CTA buttons must be visible at rest — no hover-only CTAs
- Glow effects are decorative only, never the sole state indicator
- No text below 12px (11px captions excepted)

---

### Reference Image Instructions

**REF-G01 (ASUS ROG homepage):** Reference for near-black page background, large uppercase hero headline, and dramatic product photography. ROG uses red accents — PCShop gaming uses purple and cyan. Take the dark structure and bold typography, not the red color or ROG branding.

**REF-G04 (Alienware homepage):** Reference for deep blue-purple atmospheric dark background and cool-toned product photography. Alienware's blue-cyan palette is the closest to PCShop's purple-cyan direction. The atmospheric depth behind the product is the key reference point.

**REF-G06 (MSI laptops):** Reference for product card grid on dark background, horizontal product series navigation tabs, and angled 3/4 product photography. MSI uses red accents — replace with purple.

---

### Design Anti-Patterns to Avoid

- ❌ Any light or white background anywhere except text on dark
- ❌ Red, green, orange, or yellow accent colors
- ❌ Neon overload — purple and cyan only, used deliberately
- ❌ Animated backgrounds (looping particles, pulsing glows at rest)
- ❌ Circuit-board patterns, hexagonal grids as prominent decoration
- ❌ Excessive sticker badges per product card (maximum 2–3 badges)
- ❌ All-caps body text or product descriptions
- ❌ Hover-only "Add to Cart" buttons
- ❌ White-background modals or cards
- ❌ Thin typography (< 400 weight) for body text on dark backgrounds
- ❌ Blue accent (conflicts with cyan — use purple or cyan, not blue)
- ❌ Comic book, sci-fi movie posters, or dystopian aesthetics

---

### Expected Visual Deliverable

A single, full-page desktop design at 1440px width showing:
- Complete, designed dark header (not a placeholder)
- Full 580px hero banner with actual mock content and dramatic product photography
- Featured categories section with 4 dark category cards
- 4 product cards in a 4-column dark grid with names, prices, and purple/cyan badges
- Dark footer with gradient top line and 4-column layout

The design must feel like a completed, production-ready concept from a sophisticated gaming hardware brand — not a generic dark template, not a sci-fi movie poster, and not a copy of Razer or ASUS ROG.

---

*End of prompt*