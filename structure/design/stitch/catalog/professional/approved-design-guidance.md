# Approved Design Guidance — PCShop Modern Technology Store CatalogPage

**Status:** Conditionally approved (V1) — awaiting human sign-off  
**Reference design:** `v1-generated.png` (687×757 px viewport capture)  
**Reference HTML:** `v1-code.html`  
**Corresponding HomePage guidance:** `structure/design/stitch/homepage/professional/approved-design-guidance.md`  
**Original DESIGN.md:** None generated for CatalogPage — reuses HomePage design system

---

## 1. Theme Identity

The CatalogPage fully preserves the Modern Technology Store professional identity from HomePage V2:

- Light gray `#F3F4F6` page background (cool canvas, not pure white)
- White `#FFFFFF` for product cards and sidebar panel
- Blue `#2563EB` as the sole accent — CTA buttons, active nav underline, focus rings, filter chip, badge
- Inter throughout — single typeface with hierarchy through weight only
- Sentence case for all headings (never all-caps)
- Always-visible search input in header (key differentiator ≥300px wide)
- Green `#059669` / `#047857` permitted for availability indicator only (semantic success)
- No dark content areas; footer `#111827` is the only dark element
- No gradients, no glow, no decorative accent colors beyond blue

---

## 2. Catalog Layout and Color Rules

### Page layout

| Element | Value |
|---------|-------|
| Left sidebar width | 260px (`grid-cols-[260px_minmax(0,1fr)]`) |
| Sidebar background | `#FFFFFF` with `1px solid #E5E7EB` border and 8px radius |
| Sidebar shadow | `0 1px 3px rgba(0,0,0,0.06)` |
| Main content area | Remaining width |
| Page gutter | 60px (`px-page-gutter`) |
| Card gap | 20px (`gap-grid-gap`) |

### Color tokens (confirmed in v1-code.html)

| Token | Value | Usage in CatalogPage |
|-------|-------|---------------------|
| `surface` | `#F3F4F6` | Page background, spec badge background |
| `surface-card` | `#FFFFFF` | Product cards, sidebar, header |
| `on-surface` | `#111827` | Primary text, product names, prices, result count |
| `on-surface-secondary` | `#4B5563` | Secondary text, breadcrumb links |
| `on-surface-muted` | `#6B7280` | Muted text, placeholder, breadcrumb separator |
| `secondary` | `#374151` | Navigation links, filter group legends, spec badge text |
| `primary` | `#2563EB` | Active nav, CTA buttons, filter chip text, focus rings, Filters badge |
| `on-primary` | `#FFFFFF` | CTA button text |
| `primary-hover` | `#1D4ED8` | CTA hover state |
| `primary-tint` | `#EFF6FF` | Active filter chip background |
| `outline` | `#E5E7EB` | Card borders, sidebar border, filter separators, sort control |
| `success` | `#059669` | Availability dot |
| `success-text` | `#047857` | "In stock" text |
| `footer` | `#111827` | Footer background |
| `footer-muted` | `#9CA3AF` | Footer links at rest |

**Green `#059669` / `#047857` is permitted for the availability indicator only.** It is a semantic success color, not a decorative accent. No other semantic colors appear on cards.

### Active filter chip design

- Background: `#EFF6FF` (`primary-tint`)
- Border: `1px solid rgba(37,99,235,0.3)` (`primary/30`)
- Text: Inter `label-sm` `#2563EB` "RAM: 32 GB"
- Border radius: `9999px` (pill shape)
- "×" remove: `#4B5563` (`on-surface-secondary`)
- "Clear all": Inter `label-sm` `#2563EB` underlined link

---

## 3. Filter Sidebar Design

### Category navigation (top of sidebar)

```
Laptops                 ← Inter label-sm UPPERCASE tracking, `#6B7280`
─────────────
▸ Gaming Laptop  ←active  ← Inter title-sm 600, 2px left border `#2563EB`, `#111827`
  Ultrabook               ← Inter body-sm `#4B5563`
```

### Filter groups

- Group label (legend): `font-title text-title-sm text-secondary` → Inter 14px 600 `#374151` with expand/collapse arrow
- `1px #E5E7EB` separator between groups (`border-b border-outline`)
- Filter inputs: `<input type="radio">` — single-select per parameter ✓
- Checked state: `h-4 w-4 text-primary` — blue radio button
- Selected option label: `font-title text-title-sm text-on-surface` → Inter 14px 600 `#111827`
- Default option label: `font-body text-body-sm text-secondary` → Inter 14px `#374151`
- Filter groups use `<fieldset>/<legend>` structure ✓ (accessible)
- "Filters (1)" count indicator: blue `#2563EB` pill badge `rounded-full`
- "Clear filters": Inter `label-sm` `#2563EB` underlined link

### Implementation rule — all parameters dynamically rendered

Do not hardcode the 4 visible filter groups. At implementation:

1. Fetch category parameters: `GET /api/categories/{categoryId}` → `parameters[]`
2. For each parameter, fetch values: `GET /api/categories/{categoryId}/parameters/{key}/values`
3. Render one filter group per parameter, ordered by `sortOrder`
4. Screen Size (`screen_size`) must be rendered when present (not visible in V1 mockup)

---

## 4. Product Grid

### Grid design

- 3-column desktop grid, 20px gap
- Product cards identical to Gaming HomePage V2 cards (same light theme card)

### Product card structure (confirmed in v1-code.html)

1. Product image — `object-contain`, 4:3 aspect ratio, `#FFFFFF` card background
2. Product name — `font-body text-body-md font-semibold text-on-surface` (Inter 15px 600 `#111827`)  
   Note: v1 uses `font-body` for product names, not `font-title`
3. Price — `font-title text-title-md text-on-surface tabular-nums` (Inter 18px 700)
4. Specification badges — `bg-surface text-secondary font-label text-label-sm rounded-sm` → `#F3F4F6` background, `#374151` text, 4px radius
5. Availability — `w-1.5 h-1.5 rounded-full bg-success` green dot + `font-label text-label-sm text-success-text` → "In stock" in `#047857` ✓
6. CTA button — `bg-primary hover:bg-primary-hover text-on-primary font-label text-label-md rounded-md` → "Add to Cart" (sentence case), blue fill `#2563EB`, white text, 6px radius

### Three badges per card (Professional-specific)

The Professional theme shows 3 specification badges per card:
1. GPU badge — abbreviated in v1 HTML (e.g., "RTX 4080 Ti") — see correction below
2. RAM badge — "32 GB DDR5"
3. CPU badge — abbreviated in v1 HTML (e.g., "Intel i9", "Intel i7", "Ryzen 9")

The CPU badge is a **Professional-exclusive addition** not present in Gaming or Premium themes.

### Card hover

Hover shadow: `hover:shadow-[0_4px_12px_rgba(37,99,235,0.12)]` — subtle blue glow consistent with blue accent identity.

---

## 5. Sort Bar and Result Count

- Result count: `font-body text-body-lg font-semibold text-on-surface` → Inter 16px 600 `#111827`; "6 Gaming Laptops" (sentence case, not UPPERCASE)
- Sort control: `bg-surface-card border border-outline rounded-md` → Inter 14px, white bg, `#E5E7EB` border, blue focus ring

---

## 6. Pagination

- Both Previous and Next buttons: disabled states present in v1 HTML ✓
- Style: `text-on-surface-muted` = `#6B7280` for disabled text
- Active page: `bg-primary text-on-primary` → blue `#2563EB` background, white text, 6px radius

---

## 7. Header

The CatalogPage header is identical to Modern Technology Store HomePage V2:

- Background: `#FFFFFF` with `border-b border-outline` bottom line
- Height: 64px
- Always-visible search form (`w-[300px] hidden lg:flex`) with `#E5E7EB` border
- ThemeSwitcher button: `border border-outline rounded-md`, dropdown with `Premium / Gaming / Professional` options
- Cart badge: `bg-primary` blue circle, `#FFFFFF` text
- "Laptops" active: `text-primary border-b-2 border-primary`

---

## 8. Required Implementation Corrections

| Issue | Required action |
|-------|----------------|
| RAM filter values include " GB" unit suffix (`value="16 GB"`) | At implementation, use raw API value ("16") for `params.ram`; display "16 GB" as label separately |
| GPU filter values abbreviated — missing "NVIDIA" prefix (`value="RTX 4080"`) | Use full value from API: `"NVIDIA RTX 4080"` — do NOT strip "NVIDIA" |
| CPU filter values mixed — some full (`"AMD Ryzen 7 7745HX"`, `"Intel Core i9-13980HX"`), some abbreviated (`"Ryzen 9"`, `"Intel i9"`, `"Intel i7"`) | Use full model names from API for all CPU values |
| GPU badge on cards abbreviated ("RTX 4080 Ti") | At implementation use full backend value from `gpu` field |
| CPU badge on cards abbreviated ("Intel i9", "Intel i7", "Ryzen 9") | Show truncated display label only; do not use as filter value |
| Screen Size filter not shown | Render `screen_size` parameter group dynamically from API |
| Product images | Replace `lh3.googleusercontent.com/aida/` with backend `imageUrls[]` |
| Filter values from API | Do not hardcode — populate from `GET /api/categories/:id/parameters/:key/values` |
| Footer links | Remove placeholder links for About, Privacy Policy, social, support email unless real targets are defined |

---

## 9. Accessibility Risks

| Risk | Detail | Mitigation |
|------|--------|-----------|
| `#374151` on `#FFFFFF` | ≈ 10:1 — passes WCAG AAA ✓ | No concern |
| `#4B5563` on `#F3F4F6` | ≈ 6.1:1 — passes WCAG AA ✓ | Verify at implementation |
| `#6B7280` muted text | ≈ 4.1:1 — borderline AA for 14px+ | Use only for muted 14px+ text |
| `#9CA3AF` footer links | ≈ 3.9:1 on `#111827` | Use only for ≥14px or bold footer links |
| CTA button `#2563EB` background | `#FFFFFF` on `#2563EB` ≈ 5.9:1 — passes WCAG AA ✓ | No concern |
| `#047857` availability text | ≈ 6.2:1 on `#FFFFFF` — passes WCAG AA ✓ | No concern |
| Active filter chip | `#2563EB` on `#EFF6FF` ≈ 4.8:1 | Passes WCAG AA; verify at implementation |
| Filter chip "×" `aria-label` | No `aria-label` on "×" button in static HTML | Add `aria-label="Remove RAM: 32 GB filter"` at implementation |
| Filter fieldset/legend | ✓ Used in Professional HTML | Preserve in React implementation |

WCAG compliance requires implementation-time axe-core + Playwright testing.

---

## 10. Responsive Behavior Requirements

| Feature | Desktop ≥1024px | Tablet 768–1023px | Mobile ≤767px |
|---------|:--------------:|:-----------------:|:-------------:|
| Filter sidebar | Visible in left column, white card panel | Hidden; "Filters" button shows | Hidden; "Filters" button shows |
| Product grid | 3 columns | 2 columns | 1 column |
| Search input | Visible 300px (`hidden lg:flex`) | Hidden | Hidden |
| Sort control | Inline with result count | Inline | Full-width, below count |

Filter drawer (mobile/tablet): white `#FFFFFF` surface, blue `#2563EB` active states. Pending Design Step 7.

---

## 11. V1 Review Score Summary

| Dimension | Score | Evidence |
|-----------|:-----:|---------|
| Visual identity | 5 | Blue-only accent confirmed; Inter throughout; professional tone preserved |
| Typography | 5 | Inter weight-hierarchy confirmed in HTML; sentence case headings ✓ |
| Color consistency | 5 | All tokens confirmed; green only for availability; no decorative accents |
| Functional consistency | 5 | Identical products, prices, filter, sort, pagination across all themes |
| Commercial quality | 5 | Highest information density; 3 spec badges; always-visible search |
| CPU badge (Professional-specific) | ✓ | Third badge confirmed in all 6 card HTML structures |
| Filter inputs | ✓ | `type="radio"` single-select confirmed |
| Availability indicator | ✓ | Green dot + `#047857` text; green correctly used as semantic success |
| Pagination disabled | ✓ | Disabled states confirmed in generated HTML |

**V1 total score: 56/65 — Conditionally approved**