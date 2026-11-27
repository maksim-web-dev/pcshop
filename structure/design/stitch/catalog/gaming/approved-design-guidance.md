# Approved Design Guidance — PCShop Gaming & Technology CatalogPage

**Status:** Conditionally approved (V1) — awaiting human sign-off  
**Reference design:** `v1-generated.png` (683×757 px viewport capture)  
**Reference HTML:** `v1-code.html`  
**Corresponding HomePage guidance:** `structure/design/stitch/homepage/gaming/approved-design-guidance.md`  
**Original DESIGN.md:** None generated for CatalogPage — reuses HomePage design system

---

## 1. Theme Identity

The CatalogPage fully preserves the Gaming & Technology dark atmospheric identity from HomePage V2:

- Near-black `#0A0A0F` page background throughout
- Dark card surface `#111118` for product cards and elevated elements
- Purple `#8B5CF6` for primary CTA buttons and active states
- Cyan `#22D3EE` for availability text, active filter labels, and secondary states
- Rajdhani Bold 700 UPPERCASE for all section headings and filter group labels
- Inter for all product names, prices, navigation links, body text, filter values, pagination
- Purple-to-cyan gradient footer top line preserved
- Filter sidebar uses dark surface — no light backgrounds anywhere in content

---

## 2. Catalog Layout and Color Rules

### Page layout

| Element | Value |
|---------|-------|
| Left sidebar width | Approx. 240px |
| Sidebar background | `#0A0A0F` (page surface) or `#111118` (card surface) |
| Sidebar border | `1px solid #1E1E2E` right divider |
| Main content area | Remaining width with ~60px outer gutters |
| Card gap | 20px |

### Color tokens (confirmed in v1-code.html)

| Token | Value | Usage in CatalogPage |
|-------|-------|---------------------|
| `surface` | `#0A0A0F` | Page background, sidebar |
| `surface-card` | `#111118` | Product cards |
| `surface-elevated` | `#16161E` | Dropdowns, hover overlay |
| `surface-footer` | `#070708` | Footer background |
| `on-surface` | `#F0F0FF` | Primary text, product names, prices, result count |
| `on-surface-variant` | `#A0A0C0` | Navigation links, footer links, filter option labels (default state) |
| `muted` | `#8585A3` | Tertiary text |
| `primary` | `#8B5CF6` | CTA buttons, cart badge |
| `secondary` | `#22D3EE` | Availability text, active filter chip text, active filter label, focus rings |
| `outline` | `#1E1E2E` | Card borders, section dividers |

**Green is confirmed absent from v1-code.html.** Availability uses `text-secondary` = `#22D3EE` (cyan) correctly.

### Active filter chip design

- Background: `#16161E` (`surface-elevated`)
- Border: `1px solid #1E1E2E`
- Text: Inter 13px `#22D3EE` cyan "RAM: 32 GB"
- Border radius: 9999px (pill shape — distinctive Gaming identity element)
- "×" remove: `#A0A0C0`
- "Clear all": Inter 13px `#22D3EE` cyan link

---

## 3. Filter Sidebar Design

### Category navigation (top of sidebar)

```
LAPTOPS           ← Rajdhani font-headline label-md UPPERCASE, `#A0A0C0`
─────────────
▸ Gaming Laptop   ← ACTIVE — `#22D3EE` or `#F0F0FF`, left accent in cyan
  Ultrabook       ← `#A0A0C0`
```

### Filter groups

- Group label: `font-headline text-label-sm uppercase tracking-wider text-on-surface-variant` → Rajdhani 12px UPPERCASE, `#A0A0C0`
- Filter inputs: `<input type="radio">` — single-select per parameter
- Checked state: themed radio (`focus:ring-secondary` = cyan focus ring)
- Active option label: `text-secondary` = `#22D3EE` cyan (confirmed for selected "32 GB" in HTML)
- Default option label: `text-on-surface-variant` = `#A0A0C0`
- Filter groups use `<fieldset>/<legend>` structure ✓ (accessible)
- "Filters (1)" count indicator: `#F0F0FF` or cyan badge at top of sidebar
- "Clear all": Inter 13px `#22D3EE` cyan

### Implementation rule — all parameters dynamically rendered

Do not hardcode the 4 visible filter groups. At implementation:

1. Fetch category parameters: `GET /api/categories/{categoryId}` → `parameters[]`
2. For each parameter, fetch values: `GET /api/categories/{categoryId}/parameters/{key}/values`
3. Render one filter group per parameter in Rajdhani UPPERCASE label style
4. Screen Size (`screen_size`) must be rendered when present (not visible in V1 mockup)

---

## 4. Product Grid

### Grid design

- 3-column desktop grid, 20px gap
- Product cards identical to Gaming HomePage V2 cards

### Product card structure (confirmed in v1-code.html)

1. Product image — dark atmospheric background, `object-cover`, `group-hover:scale-[1.02]`
2. Product name — Inter, `text-title-sm text-on-surface` (`#F0F0FF`)
3. Price — Inter, `text-title-md text-on-surface` (`#F0F0FF`)
4. Specification badges — dark badge `bg-surface-elevated text-secondary` → `#16161E` background, `#22D3EE` cyan text
5. Availability — `font-caption text-caption text-secondary` → "In stock" in cyan `#22D3EE`, Inter 11px 600 ✓
6. CTA button — `font-label text-label-lg` UPPERCASE, purple gradient, 6px radius
   - Label confirmed as UPPERCASE ("ADD TO CART")
   - Hover: `hover:bg-primary-dark` or purple gradient shift

### Hover glow

Card hover glow confirmed in class structure: cards use `transition-all` and hover shadow properties consistent with `box-shadow: 0 0 24px rgba(139, 92, 246, 0.35)`.

---

## 5. Sort Bar and Result Count

- Result count: Rajdhani (via `font-headline`) UPPERCASE heading "6 GAMING LAPTOPS" or similar
- Sort control: `surface-elevated` background, `outline` border, cyan focus ring

---

## 6. Pagination

- Both Previous and Next buttons are present with disabled states in Gaming V1
- Style: dark surface disabled state with `text-on-surface-variant` = `#A0A0C0`
- Active page: highlighted in purple `primary`

---

## 7. Required Implementation Corrections

| Issue | Required action |
|-------|----------------|
| RAM filter values include " GB" suffix (`value="32 GB"`) | At implementation, use raw API value ("32") for `params.ram`; display "32 GB" as label |
| GPU filter values correct ("NVIDIA RTX 4090", etc.) | No correction needed — matches backend format ✓ |
| CPU filter values need verification | Check if full model names are used vs abbreviated |
| Screen Size filter not shown | Render `screen_size` parameter group dynamically from API |
| Product images | Replace `lh3.googleusercontent.com/aida/` with backend `imageUrls[]` |
| Filter values from API | Do not hardcode — populate from `GET /api/categories/:id/parameters/:key/values` |
| Footer links | Remove placeholder links for About, Privacy Policy, social unless real targets are defined |

---

## 8. Accessibility Risks

| Risk | Detail | Mitigation |
|------|--------|-----------|
| `#A0A0C0` on `#0A0A0F` | ≈ 7.1:1 — passes WCAG AA ✓ | Verified in homepage review; reconfirm at implementation |
| `#F0F0FF` on `#0A0A0F` | ≈ 18:1 — passes WCAG AAA ✓ | No concern |
| `#22D3EE` on `#0A0A0F` | ≈ 6.5:1 — passes WCAG AA ✓ | Confirm at implementation |
| Purple CTA button text | `#F0F0FF` on `#8B5CF6` gradient — verify contrast | Ensure on-primary is `#F0F0FF` not `#8B5CF6` on itself |
| Cyan focus rings on dark | Must be visible on `#0A0A0F` and `#111118` | Test keyboard navigation at implementation |
| Filter fieldset/legend | ✓ Used in Gaming HTML — accessible structure | Preserve in React implementation |
| Active filter chip label | `#22D3EE` text on `#16161E` background ≈ 4.9:1 | Passes WCAG AA; verify at implementation |

WCAG compliance requires implementation-time axe-core + Playwright testing.

---

## 9. Responsive Behavior Requirements

| Feature | Desktop ≥1024px | Tablet 768–1023px | Mobile ≤767px |
|---------|:--------------:|:-----------------:|:-------------:|
| Filter sidebar | Visible in left column, dark surface | Hidden; "Filters" button shows | Hidden; "Filters" button shows |
| Product grid | 3 columns | 2 columns | 1 column |
| Availability | Cyan `#22D3EE` text on all cards at rest | Same | Same |

Filter drawer (mobile/tablet): dark `#16161E` surface, Rajdhani headings, cyan active states. Pending Design Step 7.

---

## 10. V1 Review Score Summary

| Dimension | Score | Evidence |
|-----------|:-----:|---------|
| Visual identity | 5 | Dark atmospheric identity fully preserved; strongest of three themes |
| Typography | 5 | Rajdhani (display, headline, filter labels) + Inter (body) confirmed in HTML |
| Color consistency | 5 | Cyan availability confirmed; green absent; purple CTAs confirmed |
| Functional consistency | 5 | Identical products, prices, filter, sort, pagination across all themes |
| Commercial quality | 5 | Most polished of three CatalogPage designs |
| Availability color | ✓ | `text-secondary` = `#22D3EE` confirmed; green forbidden and absent |
| Filter inputs | ✓ | `type="radio"` single-select confirmed |
| Pagination disabled | ✓ | Confirmed disabled states in generated HTML |

**V1 total score: 59/65 — Conditionally approved**