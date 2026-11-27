# Approved Design Guidance — PCShop Gaming & Technology HomePage

**Status:** Conditionally approved (V2) — awaiting human sign-off  
**Reference design:** `v2-generated.png`  
**Reference HTML:** `v2-code.html`  
**Original DESIGN.md:** `DESIGN.md` (Stitch-generated, do not overwrite)

---

## 1. Theme Identity

PCShop Gaming & Technology targets gamers, PC builders, and hardware enthusiasts aged 16–35. The design presents laptops, desktop towers, monitors, and peripherals as studio-lit precision hardware objects — not cluttered consumer electronics. The aesthetic is dark, atmospheric, and decisive: near-black surfaces, two disciplined accent colors (purple and cyan), and geometric Rajdhani display type.

**Core identity signals:**
- Near-black page ground `#0A0A0F` — not pure black, maintains tonal depth
- Elevated dark card surfaces `#111118` — subtle distinction from page ground
- Purple `#8B5CF6` for primary actions (CTAs, cart badge, hover glow on cards)
- Cyan `#22D3EE` for navigation states, spec badges, focus rings, availability
- Rajdhani Bold 700 UPPERCASE for all display headlines and section titles
- Inter for product names, prices, navigation links, body text
- Purple-to-cyan gradient line at top of footer — distinctive brand element
- PCShop SVG wordmark with geometric cyan/purple accent mark — preserve exactly

---

## 2. Design Rules to Preserve

### Color

| Token | Value | Usage |
|-------|-------|-------|
| `surface` | `#0A0A0F` | Page background |
| `surface-card` | `#111118` | Product cards, category cards |
| `surface-elevated` | `#16161E` | Dropdowns, hover overlay |
| `surface-footer` | `#070708` | Footer background |
| `on-surface` | `#F0F0FF` | Primary text, section headings |
| `on-surface-variant` | `#A0A0C0` | Navigation links, footer links, secondary text |
| `muted` | `#8585A3` | Tertiary/de-emphasized text |
| `primary` | `#8B5CF6` | CTA buttons, cart badge, card hover glow |
| `primary-dark` | `#6D3BD7` | CTA button gradient mid |
| `primary-deep` | `#5516BE` | CTA button gradient end |
| `secondary` | `#22D3EE` | Nav hover underline, spec badges, focus rings, availability |
| `outline` | `#1E1E2E` | Card borders, section dividers |

**Forbidden colors:** red, green, yellow, orange, blue, white backgrounds.  
**Green is specifically forbidden** — it conflicts with the purple/cyan-only accent discipline.  
**Availability must use cyan `#22D3EE`**, never `#059669` or any green variant.  
**Two accent colors only:** Purple for primary actions, Cyan for active/focus states and spec text.

### Typography

- Rajdhani Bold 700 for `display-lg` (72px UPPERCASE hero headline), `headline-lg` (32px), `headline-md` (20px), `label-lg` (16px 700 UPPERCASE)
- Inter for `title-md` (16px 700), `title-sm` (14px 600), `body-md` (16px 400), `label-md` (14px 500), `label-sm` (12px 600), `caption` (11px 600)
- **Display headlines are always UPPERCASE** — never sentence case in Rajdhani
- No italic text anywhere
- Product names, prices, navigation links: Inter (not Rajdhani)

### Shapes

- Cards and primary buttons: 6px border radius
- Spec badges: 3px border radius
- Cart badge: `rounded-full` (9999px)

### Availability indicator

Format: "In stock" in Inter 11px 600 (`caption` style), `text-secondary` = `#22D3EE`, placed below the specification badges, before the "ADD TO CART" button. A small cyan dot preceding the text is optional — consistent with the badge system visual language.

**Green is forbidden.** Under no circumstances use `#059669` or any green shade.

### Spacing

- Page margins: 60px desktop
- Section spacing: 56px
- Card gap: 20px
- Internal card padding: 16px

### Product grid

- Featured Hardware: 3-column grid desktop (`lg:grid-cols-3`), 2-column tablet, 1-column mobile
- Shop by Category: 4-column grid desktop (`lg:grid-cols-4`), 2-column tablet
- Do not revert to 4-column product grid on homepage — the 3+3 balanced layout is the V2 design decision

### Footer

- Background: `#070708` (deepest surface)
- 1px purple-to-cyan gradient top line: `bg-gradient-to-r from-primary to-secondary`
- Footer headings: `text-on-surface` = `#F0F0FF`
- Footer links: `text-on-surface-variant` = `#A0A0C0` — never `#60607A` (V1 failure)
- Footer link hover: `text-secondary` = `#22D3EE`

---

## 3. Required Implementation Corrections

| Issue | Correction |
|-------|-----------|
| Product images | Replace `lh3.googleusercontent.com/aida/` mock images with backend `imageUrls[]` API field. Use dark studio-lit photography with atmospheric backgrounds. |
| Card hover glow | Implement using `box-shadow: 0 0 24px rgba(139, 92, 246, 0.35)` on card hover — achievable with Tailwind arbitrary value |
| Focus ring color | Use cyan `ring-secondary` = `#22D3EE` for all focus indicators (not blue, not purple) |
| "ADD TO CART" label | CTA button label is uppercase Rajdhani (not Inter) for `button-primary` in this theme |

---

## 4. Known Accessibility Risks

| Risk | Detail | Mitigation |
|------|--------|-----------|
| `#A0A0C0` on `#070708` footer | Estimated ~7.1:1 — passes WCAG AA ✓ (V1 failure resolved in V2) | Verify with automated tool |
| `#F0F0FF` on `#0A0A0F` body | Estimated ~18:1 — passes WCAG AAA ✓ | No concern |
| `#8B5CF6` purple on `#111118` card | For CTA button text `on-primary-dark` = `#F0F0FF` on gradient background — verify at implementation | Use `#F0F0FF` text on gradient CTA |
| `#22D3EE` cyan on `#0A0A0F` | Estimated ~6.5:1 — passes WCAG AA for normal text ✓ | Verify with automated tool |
| Glow effects vs text legibility | Glow is applied to card border container, never to text surfaces | Confirm in React that glow does not bleed onto card text area |
| Focus ring visibility | Cyan `#22D3EE` rings must be visible on dark surfaces | Test keyboard navigation at implementation time |

WCAG compliance is not verified on mockup. Run axe-core and Playwright accessibility scans after React implementation.

---

## 5. Shared Functional Constraints

These apply regardless of theme:

- ThemeSwitcher persists selection in localStorage key `pcshop-theme`
- Theme switch does not reset cart, filters, or navigation state
- Cart badge uses purple `#8B5CF6` background with `#F0F0FF` count text
- All product cards navigate to `/products/:id` on click
- Hero "SHOP LAPTOPS" CTA navigates to `/catalog?productTypeId=<laptop-type-id>`
- Category cards navigate to `/catalog?productTypeId=<type-id>`
- No user account links anywhere (Sign In, My Orders, Wishlist are out of scope)
- No delivery promises, returns policy, or warranty claims anywhere
- Prices are fixed single values — no "from $X" or variable pricing
- No star ratings, review counts, or discount badges

---

## 6. Rules for Generating Subsequent Pages

When generating CatalogPage, ProductPage, or other pages for the Gaming theme, carry forward:

- Dark atmospheric page ground `#0A0A0F` on all pages (never use light backgrounds in content areas)
- Rajdhani Bold UPPERCASE for all section headings
- Purple-only primary CTA buttons with gradient
- Cyan for all secondary interactive states, focus rings, spec badges
- Product card V2 design: dark `#111118` card, 6px radius, purple hover glow, cyan availability, Inter product names
- Card hover: `border-primary hover:shadow-[0_0_24px_rgba(139,92,246,0.35)]`
- Filter sidebar: dark `#16161E` surface, `#1E1E2E` border — no light surfaces
- No RGB rainbow, no warm colors, no blue or green accent
- Atmospheric product photography (dark studio backgrounds) — do not use white/light backgrounds

---

## 7. V1 vs V2 Comparison Summary

| Aspect | V1 | V2 |
|--------|----|----|
| Product grid | 4-col (4+2 unbalanced) | 3-col 3+3 balanced |
| Availability indicator | Absent | "In stock" in cyan `#22D3EE` on all 6 cards |
| Footer link contrast | `#60607A` on `#070708` ≈ 2.5:1 ⚠ | `#A0A0C0` on `#070708` ≈ 7.1:1 ✓ |
| Score (total) | 57/65 | 60/65 |
| Blocking dimensions | Dim 9 (3/5) | None |
| Approval status | Revise → V2 | ✓ Conditionally approved |