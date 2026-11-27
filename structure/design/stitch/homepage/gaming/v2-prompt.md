# Google Stitch Revision Prompt — PCShop Gaming & Technology V2

> **Instructions for use:**
> Open the existing Gaming & Technology Stitch project.
> Paste this revision prompt to refine the existing design — do not start a new unrelated project.
> Save the revised output as `v2-generated.png` alongside the original `v1-generated.png`.
> Do not overwrite V1 files.

---

## Revision Prompt Text

---

This is a revision of the existing PCShop Gaming & Technology homepage design. Refine the current design — do not create an unrelated website.

**What must be preserved:**
- The dark atmospheric visual identity: `#0A0A0F` near-black page background, `#111118` card surfaces, `#070708` footer
- **Only two accent colors:** Purple `#8B5CF6` (primary CTA, cart badge, hover glow) and Cyan `#22D3EE` (navigation underline, spec badges, focus rings). No red, green, yellow, orange, blue, or white backgrounds.
- Rajdhani Bold for all UPPERCASE display headlines and section headings; Inter for all body text, product names, prices, navigation links
- Hero composition: "DOMINATE YOUR BUILD" in Rajdhani 72px UPPERCASE, purple gradient CTA "SHOP LAPTOPS", gaming laptop with atmospheric lighting on the right
- 4-item navigation: Laptops | PCs | Monitors | Peripherals (no "Deals" link)
- PCShop wordmark with the geometric cyan/purple SVG accent mark — preserve this brand element exactly
- ThemeSwitcher in the header (showing "Gaming ▾")
- 4 dark footer columns: Shop, Browse, Information, Contact
- 4-column product grid with all 6 products
- Shared mock product data (do not change names, prices, or badge text)

**What must be improved:**

### 1. Fix footer link contrast — CRITICAL

The current footer link color `#60607A` on `#070708` footer background is too dark to read and fails accessibility requirements.

Change footer link color to `#A0A0C0` (secondary text token — the same color used for navigation links in the header). This provides sufficient contrast against `#070708` while remaining consistent with the dark theme's color system.

Footer heading color (`#A0A0C0`) and footer link color (`#A0A0C0`) may now match — use `#8585A3` for body links and `#A0A0C0` for headings to maintain hierarchy. Or use `#A0A0C0` for links and `#F0F0FF` for headings.

The gradient top line of the footer (purple → cyan) must remain unchanged.

### 2. Add product availability indicator to every product card

Each product card must show an availability status below the specification badges, before the "ADD TO CART" button.

**Gaming theme rule: Do NOT use green for availability.** Green is a forbidden color in the gaming palette.

Instead, use:
- Available: a small cyan `#22D3EE` text "In stock" in Inter 11px 600, with or without a small cyan dot
- This matches the existing cyan spec badge system and feels native to the dark gaming theme

Do not use `#059669` green anywhere in the gaming design.

### 3. Consider 3-column product grid for the homepage

The current 4-column grid with 6 products creates 2 rows (4 products + 2 products) which looks unbalanced — the second row is incomplete.

Option A: Show 6 products in a 3-column grid (2 full rows × 3 columns). This gives a cleaner, more balanced grid. The 4-column density is better suited for the catalog/filter page.

Option B: Show 4 products in the 4-column grid on the homepage (one full row), and label it "TOP PICKS" rather than "FEATURED HARDWARE".

Choose whichever option creates a more visually balanced homepage. The 4-column grid may be preserved if 6 products can fill it cleanly (e.g., 4+2 layout with the last 2 products centered).

**What must be removed:**
- Do not add any decorative colors (red, green, yellow, orange, blue) — purple and cyan only
- Do not add "Deals" or "Sale" to navigation
- Do not add account links (Sign In, My Orders, Wishlist) anywhere
- Do not add delivery or returns promises
- Do not add star ratings, review counts, or discount badges
- Do not add any light/white background sections outside of text on dark

**Shared functional requirements (unchanged):**
- Same 4 navigation links in header
- ThemeSwitcher with 3 options: Premium | Gaming | Professional
- Cart icon with purple count badge
- Same product data: APEX Gaming Laptop 15" $1,799, NOVA Ultrabook 14" $1,199, TITAN PC Tower $2,499, NEXUS Monitor 32" $799, STRIKER Keyboard PRO $229, SWIFT Mouse Pro $89
- Footer: Shop (Laptops, PCs, Monitors, Keyboards, Mice), Browse (Gaming Laptops, Ultrabooks, Desktop PCs, All Products), Information (About, Privacy Policy), Contact (email + social)

**Visual acceptance criteria for V2:**
- Footer links readable: minimum contrast of `#A0A0C0` or brighter on `#070708` background
- Product cards show availability text using cyan `#22D3EE`, not green
- Product grid is visually balanced (complete rows, no orphaned products)
- No forbidden colors introduced (no red, green, yellow, orange, white backgrounds)
- Dark atmospheric identity visually unchanged from V1
- PCShop SVG wordmark preserved

---

*Revision target: V2 — fix footer contrast, add availability, balance product grid*

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