# Approved Design Guidance — PCShop Premium Minimalism HomePage

**Status:** Conditionally approved (V2) — awaiting human sign-off  
**Reference design:** `v2-generated.png`  
**Reference HTML:** `v2-code.html`  
**Original DESIGN.md:** `DESIGN.md` (Stitch-generated, do not overwrite)

---

## 1. Theme Identity

PCShop Premium Minimalism targets design-conscious technology buyers aged 28–45 who value editorial restraint, classical typography, and generous breathing room. The design communicates quality through what is absent — no promotional urgency, no decorative color, no cramped grids.

**Core identity signals:**
- Warm off-white page ground `#FAFAF8` — paper-like, not pure white
- Playfair Display 400 for all headlines and category labels (classical serif)
- DM Sans for all UI text, navigation, prices, CTAs (clean humanist sans)
- Near-black graphite `#1A1A1A` as the only accent color — no other hues anywhere
- 80px page gutters, 64px section spacing — whitespace is structural
- No gradients, no glow, no shadows stronger than ambient soft-lift

---

## 2. Design Rules to Preserve

### Color

| Token | Value | Usage |
|-------|-------|-------|
| `surface` | `#FAFAF8` | Page background, header |
| `surface-container-lowest` | `#FFFFFF` | Product cards, category cards |
| `surface-container` | `#F4F3F0` | Specification badges, subtle surfaces |
| `on-surface` | `#1A1A1A` | Primary text, headlines, prices |
| `on-surface-variant` | `#5C5C5C` | Secondary text, "Browse →", "In stock" |
| `primary` | `#1A1A1A` | CTA buttons, borders, cart badge |
| `on-primary` | `#FAFAF8` | CTA button text |
| `outline` | `#E5E0DB` | Card borders, header bottom border |
| `muted` | `#9E9E9E` | Truly de-emphasized tertiary text |
| `footer-surface` | `#1A1A1A` | Footer background |
| `on-footer-surface` | `#FAFAF8` | Footer text |

**Forbidden:** Blue, purple, green, red, gold, rose-gold, any decorative accent color.  
**Forbidden:** Gradients, glow effects, glassmorphism, backdrop blur.  
**Forbidden:** Dark backgrounds anywhere outside the footer.

### Typography

- Playfair Display 400 for `display-lg` (56px hero headline), section headings (`headline-lg` 28px), category labels
- DM Sans for navigation, prices, product names, badges, body text, footer
- Never all-caps headings in Premium
- Never Playfair Display at the same visual level as DM Sans (no mixed hierarchy)

### Shapes

- Cards and CTA buttons: 4px border radius
- Badges: 2px border radius
- Cart badge: `rounded-full` (9999px)
- Pill buttons: **forbidden**

### Availability indicator

Format: "In stock" in DM Sans 12px 400 `#5C5C5C` (`on-surface-variant`), placed below the specification badges, before the "Add to Cart" button. No dot before the text. No color — purely typographic.

### Spacing

- Page gutters: 80px desktop
- Section spacing: 64px
- Card gap: 24px
- Internal card padding: 16px

---

## 3. Required Implementation Corrections

| Issue | Correction |
|-------|-----------|
| STRIKER Keyboard PRO badge | Use "Cherry MX" and "Wireless" (not "Mechanical") — authoritative source: `mock-products.md` |
| SWIFT Mouse Pro badge | Use "25600 DPI" and "Wireless" (not "26K DPI" / "58g") — authoritative source: `mock-products.md` |
| Product images | Replace `lh3.googleusercontent.com/aida/` mock images with backend `imageUrls[]` API field |
| Product count decision | Confirm with project owner: 4 products (original editorial restraint) or 6 products (V2 result) |
| "Browse →" affordance | Present in V2 HTML on category cards. Must remain always-visible (not hover-only) in React — accessibility requirement |
| Hover CTA reveal | V1 had hover-only CTA issue (addressed in earlier review). V2 "Add to Cart" must be visible at rest (not hover-only) in React implementation |

---

## 4. Known Accessibility Risks

| Risk | Detail | Mitigation |
|------|--------|-----------|
| `#5C5C5C` on `#FAFAF8` | Estimated ~6.3:1 — passes WCAG AA for normal text | Verify with automated tool at implementation time |
| `#9E9E9E` muted text | Estimated ~3.0:1 — fails WCAG AA for small normal text | Use `muted` only for truly tertiary text ≥24px or bold ≥18.67px; prefer `#5C5C5C` for all functional text |
| `#1A1A1A` on `#FAFAF8` | Estimated ~17:1 — passes WCAG AAA | No concern |
| Focus rings | Must be visible in all states: 2px minimum, `outline-primary` = `#1A1A1A` | Never use `outline: none` without a visible replacement |
| `hover-only CTA` | Must be fixed in React | Add to Cart must be visible at rest, with keyboard focus |

WCAG compliance is not verified on mockup. Run axe-core and Playwright accessibility scans after React implementation.

---

## 5. Shared Functional Constraints

These apply regardless of theme:

- ThemeSwitcher persists selection in localStorage key `pcshop-theme`
- Theme switch does not reset cart, filters, or navigation state
- Cart count increments without page navigation (Zustand store)
- All product cards navigate to `/products/:id` on click
- Hero CTA "Shop Laptops" navigates to `/catalog?productTypeId=<laptop-type-id>`
- Category cards navigate to `/catalog?productTypeId=<type-id>`
- Footer links navigate to their respective catalog/info pages (not external links)
- No user account links anywhere (Sign In, My Orders, Wishlist are out of scope)
- No delivery promises, returns policy, or warranty claims anywhere on the page
- Prices are fixed single values from the backend `price decimal(10,2)` field — no "from $X" or variable pricing

---

## 6. Rules for Generating Subsequent Pages

When generating CatalogPage, ProductPage, or other pages for the Premium theme, carry forward:

- Warm `#FAFAF8` page background on all surfaces
- Playfair Display 400 for all section headings (`h1`, `h2`); DM Sans for all other text
- 80px page gutters desktop
- Product card design from V2 (4px radius, white card, editorial spacing, Playfair product names, DM Sans price/badges)
- Availability indicator format: DM Sans 12px `#5C5C5C`, no dot, no color
- CTA button: rectangular, `#1A1A1A` fill, `#FAFAF8` text, 4px radius
- Filter sidebar: minimal, blends with page background, no strong border
- No decorative accent colors anywhere
- Whitespace is structural — do not compress for more product density

---

## 7. V1 vs V2 Comparison Summary

| Aspect | V1 | V2 |
|--------|----|----|
| Product grid | 2×2 (4 products) | 3×2 (6 products) |
| Availability indicator | Absent | "In stock" in `#5C5C5C` on all cards |
| Category card CTA | No affordance | "Browse →" text link |
| Score (total) | 53/65 | 55/65 |
| Blocking dimensions | Dim 5 (3/5) | None |
| Approval status | Revise → V2 | ✓ Conditionally approved |