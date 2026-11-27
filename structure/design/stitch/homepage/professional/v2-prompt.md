# Google Stitch Revision Prompt — PCShop Modern Technology Store V2

> **Instructions for use:**
> Open the existing Modern Technology Store (Professional) Stitch project.
> Paste this revision prompt to refine the existing design — do not start a new unrelated project.
> Save the revised output as `v2-generated.png` alongside the original `v1-generated.png`.
> Do not overwrite V1 files.

---

## Revision Prompt Text

---

This is a revision of the existing PCShop Modern Technology Store homepage design. Refine the current design — do not create an unrelated website.

**What must be preserved:**
- Blue `#2563EB` as the only accent color for all CTAs, links, cart badge, active navigation, focus rings
- Graphite `#374151` for navigation links at rest and secondary icons
- Light `#F3F4F6` page background and `#FFFFFF` card/header surfaces
- Inter as the only typeface — no serif or display fonts
- The visible search input in the header (300px wide, always visible on desktop — this is the key differentiator of this theme)
- 4-item navigation: Laptops | PCs | Monitors | Peripherals (no "Deals" link)
- ThemeSwitcher in the header (showing "Professional ▾")
- 3-column product grid with all 6 products and sort control above
- Availability indicator ("In stock" in `#059669` green) on each product card — keep this
- 4 footer columns: Shop, Browse, Information, Contact
- Shared mock product data (do not change names, prices, or badge text)

**What must be corrected:**

### 1. Remove "fast delivery" from the hero subheadline — REQUIRED

The current hero subheadline reads: "Laptops, components, and peripherals — trusted selection, fast delivery."

Remove "fast delivery" because PCShop does not advertise shipping promises.

Replace with one of these options:
- "Laptops, components, and peripherals — trusted selection, expert specification."
- "Laptops, components, and peripherals — hardware you can trust, clearly specified."
- "PCs, laptops, monitors, and peripherals. Detailed specs, clear pricing, easy choice."

Choose the option that reads most naturally as a practical, professional store subheadline.

**What must be improved:**

### 2. Add visual depth to the hero section

The current hero is a plain white panel with text on the left and a laptop image on the right. This is correct structurally but visually generic.

Improve the hero with one of these options (choose the strongest):

**Option A — Blue tint background:**
Change the hero section background from pure `#FFFFFF` to the pale blue tint `#EFF6FF`. This introduces a subtle PCShop-specific visual identity without breaking the light professional theme. The laptop image should sit cleanly against this tint.

**Option B — Stronger typography hierarchy:**
Keep the white hero background but increase the inter-line rhythm. Add a small `#2563EB` blue pill label above the main headline: "PCShop Hardware" or "New Arrivals" in Inter 11px 600 uppercase. This creates a three-level hierarchy: label → headline → subheadline → CTAs.

**Option C — Geometric accent element:**
Add a subtle `#EFF6FF` or `#E5E7EB` geometric shape (rectangle or block) behind the product image on the right, creating a tonal frame that separates the product from the pure white background and adds visual structure.

Apply whichever option makes the hero feel like a deliberate design choice rather than a default white panel.

### 3. Create visual separation for the category section

The category section currently uses the page background color (`#F3F4F6`) as its section background, making it blend visually with the page. The category cards are white (`#FFFFFF`) on this gray background, which is correct — but the section heading "Shop by Category" and the surrounding section need a cleaner vertical articulation.

Improve by:
- Adding `32px` of vertical padding above and below the section heading
- Ensuring the section heading "Shop by Category" in Inter 20px 600 `#111827` has clear separation from the hero above
- Optionally adding a thin `1px` `#E5E7EB` horizontal rule at the top of the section to visually separate it from the hero

Do not change the category card design or the `#F3F4F6` section background — just improve the vertical spacing and section demarcation.

### 4. Strengthen the visual identity of product cards

The current product cards are correct but visually undistinguished. Add one specific detail that makes them feel purposefully designed rather than default:

- Ensure the "Add to Cart" button uses the full blue `#2563EB` with `#FFFFFF` text and a 6px border radius — confirm this is consistent across all 6 cards
- Ensure product names are Inter 14px 600 `#111827` and appear on a single line or cleanly wrap to two lines with consistent heights
- Ensure the green `#059669` "In stock" indicator uses a filled 6px circle dot next to the text — not an outlined ring, not a large icon — a small solid green dot to match the professional grid density

### 5. Improve hero headline strength

The current hero headline "Build Your Perfect PC" is adequate but understated. Consider one of:
- "Build Your Perfect PC" (keep but render at the full 40px 700 with tight -0.4px letter spacing — verify this is applied)
- "Every Component. Every Build." — 2-line hero headline with slightly smaller individual words, more impactful in combination

Whichever headline is used, it must be in Inter 40px weight 700, sentence case (not all-caps).

**What must be removed:**
- Remove "fast delivery" from the hero subheadline (see item 1 — required)
- Do not add any user account links (Sign In, My Orders, Wishlist) anywhere on the page
- Do not add delivery or returns promises in the hero, header, or body
- Do not add any promotional urgency ("Limited Time", countdown timers, "Best Seller" badges)
- Do not add purple, cyan, red, orange, or green accents — only blue `#2563EB` and graphite `#374151`
- Do not add dark backgrounds anywhere on the page except the footer

**Shared functional requirements (unchanged):**
- Same 4 navigation links in header with visible search input
- ThemeSwitcher with 3 options: Premium | Gaming | Professional
- Cart icon with blue count badge
- Same product data: APEX Gaming Laptop 15" $1,799, NOVA Ultrabook 14" $1,199, TITAN PC Tower $2,499, NEXUS Monitor 32" $799, STRIKER Keyboard PRO $229, SWIFT Mouse Pro $89
- Footer: Shop (Laptops, PCs, Monitors, Keyboards, Mice), Browse (Gaming Laptops, Ultrabooks, Desktop PCs, All Products), Information (About, Privacy Policy), Contact (email + social)

**Visual acceptance criteria for V2:**
- "fast delivery" is removed from all visible text
- Hero has visual depth — not a plain white panel
- Category section has clean vertical separation from the hero
- Product cards feel purposefully designed — consistent "Add to Cart" button, consistent "In stock" dot
- Blue `#2563EB` is the only accent color — no forbidden colors introduced
- The design feels like a sophisticated PCShop storefront, not a generic e-commerce template
- ThemeSwitcher visible and functional

---

*Revision target: V2 — remove unsupported copy, add visual depth, strengthen identity*

----------------------------------------
## Final mandatory cross-theme requirements

These requirements override any conflicting instructions above.

- Display all six products using a balanced 3-column, 2-row desktop featured product grid.
- Preserve identical product names, prices and specifications across all themes:
  - APEX Gaming Laptop 15" — $1,799
  - NOVA Ultrabook 14" — $1,199
  - TITAN PC Tower — $2,499
  - NEXUS Monitor 32" — $799
  - STRIKER Keyboard PRO — $229
  - SWIFT Mouse Pro — $89
- Display product availability on every product card.
- Keep search clearly visible and discoverable.
- Preserve the theme switcher and cart controls.
- Decorative palette restrictions must not prevent accessible semantic colors for success, warning and error states.
- Do not invent company contact information.
- Do not introduce unsupported business features or commercial promises.
- Preserve the existing PCShop brand and theme identity.
- Refine the selected homepage rather than creating an unrelated design.
- Create a new V2 design variant without replacing the original V1 concept.