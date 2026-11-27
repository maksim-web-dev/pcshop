# Google Stitch Revision Prompt — PCShop Premium Minimalism V2

> **Instructions for use:**
> Open the existing Premium Minimalism Stitch project.
> Paste this revision prompt to refine the existing design — do not start a new unrelated project.
> Save the revised output as `v2-generated.png` alongside the original `v1-generated.png`.
> Do not overwrite V1 files.

---

## Revision Prompt Text

---

This is a revision of the existing PCShop Premium Minimalism homepage design. Refine the current design — do not create an unrelated website.

**What must be preserved:**
- The warm editorial identity: `#FAFAF8` warm off-white page background, `#FFFFFF` card surfaces
- Playfair Display 400 for all headlines and category labels; DM Sans for all body text, navigation, prices, and CTAs
- Near-black graphite `#1A1A1A` as the only accent color — no blue, purple, green, gold, or other decorative colors
- Hero composition: Playfair Display 56px headline "Crafted for Performance", DM Sans subheadline, `#1A1A1A` rectangular CTA button "Shop Laptops"
- 4-item navigation: Laptops | PCs | Monitors | Peripherals (no "Sale" or "Deals" link)
- ThemeSwitcher in the header (compact, showing "Premium ▾")
- 4 dark footer columns: Shop, Browse, Information, Contact
- Generous whitespace (80px page gutters, 64px between sections)
- Shared mock product data (do not change names, prices, or badge text)

**What must be improved:**

### 1. Add product availability indicator to every product card

Each product card must now show a small availability status below the specification badges, before the "Add to Cart" button.

Format: a small dot + text, in DM Sans 12px 400:
- In stock: `#5C5C5C` text, "In stock"

Do not use green, blue, or any decorative color for this indicator. Use muted secondary text (`#5C5C5C`). Keep it minimal and consistent with the editorial style.

### 2. Expand the product grid to 3 columns

Change the Featured Products section from a 2×2 grid to a 3-column grid. Show 4 products in one row of 4, or show 6 products in two rows of 3. The generous 80px page gutters provide sufficient room for 3 columns.

The editorial warmth must be preserved — increase card spacing to 24px gap if needed to maintain breathing room.

### 3. Add a "Browse →" text link to each category card

Currently the category cards have only an image and a category label below. Add a small "Browse →" link in DM Sans 12px `#5C5C5C` below the category label. On hover: underline. This improves navigation clarity without breaking the editorial restraint.

### 4. Improve cart badge visibility

The cart badge currently uses `#1A1A1A` background (black badge). Ensure the badge has a small border or is clearly separated from the cart icon at small sizes. Keep the badge color `#1A1A1A` with `#FAFAF8` text — this is correct. Just ensure it is visually legible as a distinct element.

**What must be removed:**
- Do not add any promotional language ("Sale", "Deals", "Best Seller", countdown timers)
- Do not add star ratings or review counts
- Do not use "from $X" variable pricing — prices are fixed single values
- Do not add any user account links (Sign In, My Orders, Wishlist) anywhere
- Do not add delivery or returns promises
- Do not add any accent colors (blue, purple, green, gold) — `#1A1A1A` graphite is the only accent

**Shared functional requirements (unchanged):**
- Same 4 navigation links in header
- ThemeSwitcher with 3 options: Premium | Gaming | Professional
- Cart icon with count badge
- Same product data: APEX Gaming Laptop 15" $1,799, NOVA Ultrabook 14" $1,199, TITAN PC Tower $2,499, NEXUS Monitor 32" $799
- Footer: Shop (Laptops, PCs, Monitors, Keyboards, Mice), Browse (Gaming Laptops, Ultrabooks, Desktop PCs, All Products), Information (About, Privacy Policy), Contact (email + social)

**Visual acceptance criteria for V2:**
- Product cards show availability text at rest without hover
- Featured Products section uses 3-column grid
- Category cards have "Browse →" affordance
- No forbidden colors introduced
- No unsupported features added (no account links, no delivery promises, no discounts)
- Warm editorial identity visually unchanged from V1

---

*Revision target: V2 — refine only, do not redesign*