# Approved Design Guidance — PCShop Modern Technology Store HomePage

**Status:** Conditionally approved (V2) — awaiting human sign-off  
**Reference design:** `v2-generated.png`  
**Reference HTML:** `v2-code.html`  
**Original DESIGN.md:** `DESIGN.md` (Stitch-generated, do not overwrite)

---

## 1. Theme Identity

PCShop Modern Technology Store is the default theme targeting practical shoppers and IT professionals aged 25–55 who prioritize clear specifications, easy comparison, and confident purchase decisions. The design is information-rich, structured, and trustworthy — a commercial hardware retailer that respects the buyer's time.

**Core identity signals:**
- Cool light-gray page canvas `#F3F4F6` — neutral, professional, light
- Crisp white product cards `#FFFFFF` on gray canvas — clear visual separation
- Blue `#2563EB` as sole accent for all actions, links, focus states, cart badge
- Visible always-on search input in the header — the key differentiator of this theme
- `#EFF6FF` blue tint hero — distinctive identity signal without breaking the light theme
- Inter only — single typeface, hierarchy through weight (700 → 600 → 400)
- 3-column product grid with sort control — information density balanced with clarity
- Availability indicators ("In stock" green) on all product cards at rest

---

## 2. Design Rules to Preserve

### Color

| Token | Value | Usage |
|-------|-------|-------|
| `surface` | `#F3F4F6` | Page background, section backgrounds |
| `surface-card` | `#FFFFFF` | Product cards, header, category cards |
| `primary-tint` | `#EFF6FF` | Hero background, hover tint on category cards |
| `on-surface` | `#111827` | Primary text, product names, prices |
| `on-surface-secondary` | `#4B5563` | Secondary descriptions, caption text |
| `on-surface-muted` | `#6B7280` | Muted captions on light surfaces |
| `primary` | `#2563EB` | CTA buttons, active nav, focus rings, cart badge, links |
| `primary-hover` | `#1D4ED8` | CTA button hover state |
| `secondary` | `#374151` | Navigation links at rest, utility icons |
| `outline` | `#E5E7EB` | Card borders, section dividers |
| `success` | `#059669` | "In stock" availability dot |
| `success-text` | `#047857` | "In stock" text label |
| `footer` | `#111827` | Footer background |
| `on-footer` | `#FFFFFF` | Footer headings |
| `footer-muted` | `#9CA3AF` | Footer links |

**Forbidden:** Purple, cyan, red, orange, dark backgrounds outside footer.  
**Blue is the only accent** — do not add a second accent color.

### Typography

- Inter 700 for `headline-lg` (40px hero headline), `title-md` (18px section headings)
- Inter 600 for `title-sm` (14px product names, section sub-headings), `label-md` (14px navigation)
- Inter 400 for `body-lg` (16px body text), `body-md` (15px), `body-sm` (14px)
- Inter 400/500 for `label-sm` (12px badges, caption text)
- **Single typeface throughout** — no serif or display fonts
- Sentence case for hero headline ("Build Your Perfect PC"), not all-caps
- Section headings title case (Inter 20px 600 `#111827`)

### Shapes

- Product cards and dropdowns: 8px border radius
- Buttons and inputs: 6px border radius
- Badges: 4px border radius

### Availability indicator

Format: a solid 6px circle dot in `#059669` + "In stock" text in Inter 12px 500 `#047857` (`success-text`), placed below the specification badges, before the "Add to Cart" button. Present at rest on all product cards without hover.

### Search input

The always-visible search input in the header is the primary differentiator of the Professional theme.

- Position: right section of header, always visible on desktop (≥1024px)
- Width: approximately 300px minimum
- Style: `#FFFFFF` background, `#E5E7EB` border, `#374151` search icon, `#6B7280` placeholder
- Focus: `#2563EB` border and ring

Do not hide the search input behind a search icon on desktop. On mobile (hamburger nav), it may collapse to an icon.

### Hero section

- Background: `#EFF6FF` (`primary-tint`) — pale blue tint (not pure white, not `#F3F4F6`)
- Layout: 45% left (headline + subheadline + CTAs), 55% right (product image)
- Headline: Inter 40px 700 "Build Your Perfect PC"
- Subheadline: Inter 16px 400 `#4B5563` — hardware-focused, no delivery promises
- Primary CTA: "Shop Now" — blue `#2563EB` fill, 6px radius
- Secondary CTA: "Browse All Products" — outline blue, same radius

---

## 3. Required Implementation Corrections

| Issue | Correction |
|-------|-----------|
| Product images | Replace `lh3.googleusercontent.com/aida/` mock images with backend `imageUrls[]` API field |
| "In stock" dot | Implement as `width: 6px; height: 6px; border-radius: 9999px; background-color: #059669` — not an outlined ring or icon |
| Sort control | "Sort: Featured ▾" dropdown above product grid is required — connects to `?sortBy=&sortDir=` query params |
| Footer links color | `#9CA3AF` at rest — not darker; hover to `#FFFFFF` |
| Category "Browse" link | Must be always-visible (not hover-only) — present as text link in V2 |

---

## 4. Known Accessibility Risks

| Risk | Detail | Mitigation |
|------|--------|-----------|
| `#111827` on `#F3F4F6` | Estimated ~14:1 — passes WCAG AAA ✓ | No concern |
| `#2563EB` blue on `#FFFFFF` | Estimated ~5.9:1 — passes WCAG AA ✓ | Verify small-size text at implementation |
| `#047857` success-text on `#FFFFFF` | Estimated ~6.2:1 — passes WCAG AA ✓ | Verify at implementation |
| `#9CA3AF` footer-muted on `#111827` | Estimated ~3.9:1 — marginal for small text | Use only for captions ≥14px or bold; prefer `#FFFFFF` for navigation links |
| Focus rings | Blue `#2563EB` focus rings must be visible on all surfaces | Never suppress without replacement |
| Availability dot | 6px dot is below minimum interactive target — it is decorative only, not interactive | Acceptable — the "In stock" text carries the semantic meaning |

WCAG compliance is not verified on mockup. Run axe-core and Playwright accessibility scans after React implementation.

---

## 5. Shared Functional Constraints

These apply regardless of theme:

- ThemeSwitcher persists selection in localStorage key `pcshop-theme`
- Theme switch does not reset cart, filters, or navigation state
- Cart badge uses blue `#2563EB` background (count in `#FFFFFF`)
- All product cards navigate to `/products/:id` on click
- Hero "Shop Now" CTA navigates to `/catalog`
- Category cards navigate to `/catalog?productTypeId=<type-id>`; "Browse" link does the same
- Visible search input triggers debounced search: `GET /api/products?search=<query>`
- Sort control updates `?sortBy=&sortDir=` query params, page resets to 1
- No user account links anywhere (Sign In, My Orders, Wishlist are out of scope)
- No delivery promises, returns policy, or warranty claims anywhere
- Prices are fixed single values — no "from $X" or variable pricing
- No star ratings, review counts, or discount badges

---

## 6. Rules for Generating Subsequent Pages

When generating CatalogPage, ProductPage, or other pages for the Professional theme, carry forward:

- Light gray page canvas `#F3F4F6` on all pages
- Blue `#2563EB` as the only accent — no second accent
- Always-visible search input in header on desktop
- Inter throughout — no mixed typeface
- Product card V2 design: white card, 8px radius, `1px #E5E7EB` border, blue hover shadow, green availability dot
- Filter sidebar: white card, `#E5E7EB` border, blue active state — consistent with the light professional aesthetic
- Breadcrumb navigation on CatalogPage and ProductPage using Inter 14px `#4B5563`
- Sort control above product grid: "Sort: [field] ▾" dropdown
- Product grid: default 3-column desktop, with optional 4-column density toggle

---

## 7. V1 vs V2 Comparison Summary

| Aspect | V1 | V2 |
|--------|----|----|
| Hero background | White `#FFFFFF` (generic) | Blue tint `#EFF6FF` (distinctive) ✓ |
| Hero subheadline | Contains "fast delivery" ⚠ | "hardware you can trust, clearly specified" ✓ |
| Availability indicator | Present (V1 already had it) | Preserved on all 6 cards ✓ |
| Category card affordance | No "Browse" link | "Browse" link on all 4 cards ✓ |
| Score (total) | 52/65 | 56/65 |
| Blocking dimensions | Dims 1, 10, 11 (all 3/5) | None |
| Approval status | Revise → V2 | ✓ Conditionally approved |