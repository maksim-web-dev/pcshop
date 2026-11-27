# Approved Design Guidance — PCShop Premium Minimalism CatalogPage

**Status:** Conditionally approved (V1) — awaiting human sign-off  
**Reference design:** `v1-generated.png` (605×757 px viewport capture)  
**Reference HTML:** `v1-code.html`  
**Corresponding HomePage guidance:** `structure/design/stitch/homepage/premium/approved-design-guidance.md`  
**Original DESIGN.md:** None generated for CatalogPage — reuses HomePage design system

---

## 1. Theme Identity

The CatalogPage preserves the Premium Minimalism editorial identity established in HomePage V2:

- Warm `#FAFAF8` page background — paper-like, not pure white
- Playfair Display 400 for section headings (category sidebar heading, result count h1)
- DM Sans for all UI text: navigation, filter labels, prices, badges, pagination
- Near-black `#1A1A1A` graphite as the only accent — CTA buttons, borders, active filter chips
- Generous breathing room: 24px card gap, 80px page gutters
- No gradients, no glow, no decorative accent colors
- Filter sidebar is minimal and blends with the `#FAFAF8` page surface

---

## 2. Catalog Layout and Color Rules

### Page layout

| Element | Value |
|---------|-------|
| Left sidebar width | Approx. 240px |
| Sidebar background | `#FAFAF8` (blends with page, no dark panel) |
| Sidebar right border | `1px solid #E5E0DB` separator |
| Main content area | Remaining width with 80px outer gutters |
| Card gap | 24px |

### Color tokens (confirmed in v1-code.html)

| Token | Value | Usage in CatalogPage |
|-------|-------|---------------------|
| `surface` | `#FAFAF8` | Page background, sidebar, header |
| `surface-container-lowest` | `#FFFFFF` | Product cards, search form |
| `surface-container` | `#F4F3F0` | Specification badges, active filter chip background |
| `on-surface` | `#1A1A1A` | Primary text, result count h1, prices, headings |
| `on-surface-variant` | `#5C5C5C` | Secondary text, "In stock", filter labels, breadcrumb |
| `secondary` | `#5C5C5C` | (same as on-surface-variant — no second accent) |
| `primary` | `#1A1A1A` | CTA buttons, radio checked state, filter chip border |
| `on-primary` | `#FAFAF8` | CTA button text |
| `outline` | `#E5E0DB` | Card borders, header border, sidebar divider, filter group separator |
| `muted` | `#9E9E9E` | Truly de-emphasized text |
| `footer-surface` | `#1A1A1A` | Footer background |
| `on-footer-surface` | `#FAFAF8` | Footer headings and links |

### Active filter chip design

- Background: `#F4F3F0` (`surface-container`)
- Border: `1px solid #E5E0DB`
- Text: DM Sans 13px `#1A1A1A`
- Border radius: 4px or 2px (rectangular — no pill shapes in Premium)
- "×" remove: `#9E9E9E`
- "Clear all": DM Sans 12px `#5C5C5C`, underline on hover

---

## 3. Filter Sidebar Design

### Category navigation (top of sidebar)

```
Laptops                 ← Playfair Display 14px heading, `#1A1A1A`
Gaming Laptop ←active   ← 600 weight DM Sans, `2px solid #1A1A1A` left border
Ultrabook
```

### Filter groups

- Group label: DM Sans 12px 600 uppercase with letter-spacing, `#5C5C5C`
- `1px #E5E0DB` separator above each group
- Filter inputs: `<input type="radio">` — single-select per parameter
- Checked state: `#1A1A1A` filled square (browser-rendered, Tailwind-styled)
- Option text: DM Sans 14px `#1A1A1A`
- Selected option: DM Sans 14px 600 `#1A1A1A`
- "1 filter active" or "Filter active": DM Sans 12px `#5C5C5C`
- "Clear all": DM Sans 12px `#5C5C5C`, underline on hover

### Implementation rule — all parameters dynamically rendered

Do not hardcode the 4 filter groups (RAM, GPU, CPU, Refresh Rate). At implementation:

1. Fetch category parameters: `GET /api/categories/{categoryId}` → `parameters[]`
2. For each parameter, fetch values: `GET /api/categories/{categoryId}/parameters/{key}/values`
3. Render one filter group per parameter, ordered by `sortOrder`
4. Screen Size (`screen_size`) must be rendered when present (not visible in V1 mockup but backend provides it)

Filter group label: `{parameter.name}` + (optional) ` ({parameter.unit})` where unit is non-null

---

## 4. Product Grid

### Grid design

- 3-column desktop grid, 24px gap
- Product cards identical to HomePage V2 cards

### Product card structure (confirmed in v1-code.html)

1. Product image — `object-cover`, `group-hover:scale-[1.02]` subtle zoom
2. Product name — `font-title text-title-sm text-on-surface` (DM Sans 14px 600 — Note: v1 uses `font-title` not `font-headline`)
3. Price — `font-title text-title-md text-on-surface tabular-nums` (DM Sans 18px 700)
4. Specification badges — `surface-container` background (`#F4F3F0`), `#1A1A1A` text, `rounded` (4px)
5. Availability — `font-body text-body-sm text-on-surface-variant` → "In stock" in `#5C5C5C`, no color dot ✓
6. CTA button — `bg-primary text-on-primary font-label text-label-lg` (DM Sans, `#1A1A1A` fill, `#FAFAF8` text)

### Note on product name typography

The v1-code.html uses `font-title` (DM Sans) for product names in the catalog — not `font-headline` (Playfair Display). This is correct: product names and prices use DM Sans, not Playfair. Only section headings (result count h1, category sidebar heading) use Playfair Display.

---

## 5. Sort Bar and Result Count

- Result count: `h1` with `font-headline text-headline-lg text-on-surface` → Playfair Display 28px 400 `#1A1A1A`
- Sort control: DM Sans 14px, `#FFFFFF` background, `1px #E5E0DB` border, 4px radius

---

## 6. Pagination

- Both Previous and Next buttons: `disabled aria-disabled="true"` ✓ (single-page result)
- CTA style: `bg-surface-container border border-outline cursor-not-allowed` with `text-on-surface-variant`
- Page number: `bg-primary text-on-primary` → `#1A1A1A` background, `#FAFAF8` text

---

## 7. Header

The CatalogPage header matches the Premium homepage V2 header structure. One deviation noted:

**Search form:** The generated v1-code.html includes a visible search form (`role="search"`, `hidden sm:flex`) in the header. The Premium homepage specified icon-only search on desktop. This requires a decision:
- **Option A:** Adopt visible search input across all pages in Premium (improves catalog usability, aligns with other themes)
- **Option B:** Revert to icon-only search to match Premium homepage spec

This decision is deferred to the project owner. The catalog design functions correctly either way.

---

## 8. Required Implementation Corrections

| Issue | Required action |
|-------|----------------|
| RAM filter values include " GB" unit suffix (`value="16 GB"`) | At implementation, use raw API value ("16") for `params.ram`; display "16 GB" as label separately |
| GPU filter values correct ("NVIDIA RTX 4080") | No correction needed — matches backend ✓ |
| Screen Size filter not shown | Render `screen_size` parameter group dynamically (from API) |
| Product images | Replace `lh3.googleusercontent.com/aida/` mock images with backend `imageUrls[]` |
| Footer links | Remove placeholder links for About, Privacy Policy, social, email unless real targets are defined |
| Search form in header | Decide: visible input vs icon-only for Premium (not blocking) |
| Filter values from API | Do not hardcode filter option values — populate from `GET /api/categories/:id/parameters/:key/values` |

---

## 9. Accessibility Risks

| Risk | Detail | Mitigation |
|------|--------|-----------|
| `#5C5C5C` on `#FAFAF8` | ≈ 6.3:1 — passes WCAG AA for normal text ✓ | Verify at implementation |
| `#9E9E9E` muted text | ≈ 3.0:1 — fails WCAG AA for small normal text | Use muted only for truly tertiary text ≥24px |
| Radio button checked state | Browser-rendered native radios | Visible in all browsers; test keyboard navigation |
| CTA button disabled states | Previous/Next correctly use `cursor-not-allowed` | Confirm `aria-disabled="true"` is preserved ✓ |
| Active filter chip "×" button | Must have `aria-label="Remove RAM: 32 GB filter"` at implementation | Not present in static HTML |

WCAG compliance requires implementation-time axe-core + Playwright testing.

---

## 10. Responsive Behavior Requirements

Design Step 7 (responsive variants) is pending. For the CatalogPage:

| Feature | Desktop ≥1024px | Tablet 768–1023px | Mobile ≤767px |
|---------|:--------------:|:-----------------:|:-------------:|
| Filter sidebar | Visible in left column | Hidden; "Filters" button shows | Hidden; "Filters" button shows |
| Product grid | 3 columns | 2 columns | 1 column |
| Sort control | Inline with result count | Inline | Full-width, below count |

Filter drawer (mobile/tablet) design is pending Design Step 7.

---

## 11. V1 Review Score Summary

| Dimension | Score | Evidence |
|-----------|:-----:|---------|
| Visual identity | 4 | `#FAFAF8` background, Playfair headings, minimal sidebar confirmed |
| Typography | 5 | Playfair + DM Sans confirmed in HTML tokens |
| Color consistency | 5 | All tokens confirmed correct; no decorative accent colors |
| Functional consistency | 5 | Identical products, prices, filter, sort, pagination across all themes |
| Availability | ✓ | "In stock" in `#5C5C5C`, no dot, confirmed |
| Filter inputs | ✓ | `type="radio"` single-select confirmed |
| Pagination disabled | ✓ | `disabled aria-disabled="true"` on both buttons confirmed |

**V1 total score: 56/65 — Conditionally approved**