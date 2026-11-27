# ProductPage — Modern Technology Store — Approved Design Guidance

**Version:** 1.0 (2026-11-27)  
**Status:** Conditionally approved — awaiting human sign-off  
**Score:** 63 / 65  
**Reference screenshot:** `v1-generated.png` (505 × 758 px)  
**Reference HTML:** `v1-code.html`

---

## 1. Reference Baselines

| Page | File | Status |
|------|------|--------|
| HomePage V2 | `structure/design/stitch/homepage/professional/v2-generated.png` | Conditionally approved |
| CatalogPage V1 | `structure/design/stitch/catalog/professional/v1-generated.png` | Conditionally approved (62/65) |
| ProductPage V1 | `v1-generated.png` | Conditionally approved (this document) |

Carry-forward design guidance:
- `structure/design/stitch/homepage/professional/approved-design-guidance.md`
- `structure/design/stitch/catalog/professional/approved-design-guidance.md`

---

## 2. Theme Identity

**Modern Technology Store** targets practical shoppers and IT professionals who prioritize clear specifications and easy comparison. This is the most information-dense of the three themes.

**Core identity confirmed from HTML:**
- Page background: `#F3F4F6` cool light gray (`surface`)
- Product/sidebar card background: `#FFFFFF` (`surface-card`)
- Badge/subtle surface: `#F3F4F6` same as page bg (`surface`)
- Primary text: `#111827` near-black (`on-surface`)
- Secondary text: `#4B5563` (`on-surface-secondary`)
- Muted text: `#6B7280` (`on-surface-muted`)
- Primary accent: `#2563EB` blue (`primary`)
- Primary hover: `#1D4ED8` (`primary-hover`)
- Card/input borders: `#E5E7EB` (`outline`)
- Availability dot: `#059669` green (`success`) — PERMITTED for availability ONLY
- Availability text: `#047857` darker green (`success-text`) — PERMITTED for availability ONLY
- Footer background: `#111827` (`footer`)

**Blue `#2563EB` is the ONLY accent.** Green is permitted ONLY for availability indicator.

---

## 3. Typography

| Role | Font | Size | Weight | Color | Token |
|------|------|------|--------|-------|-------|
| Product name (h1) | Inter | **28px** *(spec: 26px — Stitch used larger value; acceptable)* | 700 | `#111827` | `headline-lg-mobile` |
| Price | Inter | 32px | 700 | `#111827` | `headline-lg-mobile` |
| Section headings (h2) | Inter | 20px | 600 | `#111827` | `headline-md` |
| Body text | Inter | 15px | 400 | `#4B5563` | `body-md` |
| Navigation | Inter | 14px | 500 | `#374151` | `label-md` |
| Badges | Inter | 12px | 500 | `#374151` | `label-sm` |
| Button label | Inter | 14px | 500–600 | `#FFFFFF` | `label-md` |
| Muted labels | Inter | 12px | 400 | `#6B7280` | `caption` |

All Inter — no secondary typeface. Hierarchy through weight only.

---

## 4. Product Gallery

- Main image: white `#FFFFFF` card, `1px #E5E7EB` border, 8px radius, `object-contain`
- Aspect ratio: 4:3 (`aspect-[4/3]` confirmed in thumbnails)
- Thumbnails: 3 buttons below main image, same white card style
- Selected thumbnail: highlighted with `2px solid #2563EB` (blue border) ✓
- Unselected thumbnail: `1px #E5E7EB` border, hover `border-primary/50`
- Thumbnail gap: 8px
- Gallery interaction: JavaScript thumbnail switching (replace with React state)
- Missing image fallback: white `#FFFFFF` card placeholder with neutral silhouette

---

## 5. Product Information Panel

| Element | Implementation |
|---------|---------------|
| Category label | "Laptop · Gaming Laptop" — Inter 13px `#6B7280` muted |
| Product name (h1) | Inter 700 28px `#111827` (Stitch: 28px; spec: 26px; keep 28px — more readable) |
| Price | Inter 700 32px `#111827` tabular-nums |
| Availability | Green dot `#059669` 6px (`bg-success`) + "In stock" Inter 14px 500 `#047857` (`text-success-text`) |
| Stock note | "10 in stock" — Inter 12px `#6B7280` below availability |
| Spec badges | **3 badges** (GPU, RAM, CPU): `#F3F4F6` bg, Inter 12px `#374151`, 4px radius |
| Quantity selector | White `#FFFFFF`, `1px #E5E7EB` border, Inter 14px `#111827`, 6px radius; initial: 1 |
| Add to Cart button | `#2563EB` bg, hover `#1D4ED8`, `#FFFFFF` text, Inter 14px 500, 6px radius, h-12 (48px) |

**Professional is the ONLY theme with 3 spec badges (GPU + RAM + CPU).** Premium and Gaming use 2.

---

## 6. Product Description Section

- Section heading: "About this product" — Inter 700 20px `#111827` (sentence case)
- Body text: Inter 400 15px `#4B5563`
- Max width: `max-w-[760px]`
- Top separator: `1px solid #E5E7EB`
- If `product.description === null`: hide section entirely

---

## 7. Technical Specification Table

- Section heading: "Technical specifications" — Inter 700 20px `#111827` (sentence case)
- Table: `#FFFFFF` card, `1px #E5E7EB` border, 8px radius
- Alternating rows: `#FFFFFF` / `#F9FAFB`
- Parameter name column: Inter 14px 500 `#374151` (left, `w-[200px]`)
- Parameter value column: Inter 14px `#111827` (right)
- Row height: 44px with `1px #E5E7EB` horizontal dividers
- **Refresh Rate row** uses `text-primary` (#2563EB) for the row to visually differentiate — this is a Stitch aesthetic choice; acceptable as long as it's not used as a semantic signal
- Dynamic rendering: use `product.parameters[]`; do not hardcode laptop specs
- If `product.parameters` is empty: hide section

---

## 8. Related Products Section

- Section heading: "Related products" — Inter 700 20px `#111827` (sentence case)
- Card design: same as CatalogPage Professional product cards
  - `#FFFFFF` background, `1px #E5E7EB` border, 8px radius
  - **3 badges per card** (GPU, RAM, CPU) — `#F3F4F6` bg, Inter 12px `#374151`
  - Green dot `#059669` + "In stock" `#047857`
  - Blue `#2563EB` CTA "Add to Cart"
  - Hover shadow: `0 4px 12px rgba(37, 99, 235, 0.12)`
- Maximum 3 related products shown
- Hide section if fewer than 2 related products exist
- Source: `GET /api/products?categoryId={id}&limit=4`, exclude current product
- **Related product CPU badge values:** LYNX: "Ryzen 9", ECHO: "Ryzen 9", KORA: "Intel i7" — abbreviated display labels (same convention as CatalogPage)

---

## 9. Header and Footer

**Header** (identical to CatalogPage Professional V1):
- Background: `#FFFFFF` (`surface-card`), `1px solid #E5E7EB` bottom border, h-16 (64px)
- Left: PCShop wordmark (blue square icon + "PCShop" in `#111827`)
- Center nav: Inter 14px 500 `#374151`; Laptops active: blue `#2563EB` text + `2px solid #2563EB` bottom border
- **Always-visible search input** (300px wide, `hidden lg:flex`): `#FFFFFF` bg, `#E5E7EB` border, `#6B7280` placeholder, focus: blue ring; this is the key Professional differentiator
- Cart badge: `#2563EB` blue background (rounded-full)
- ThemeSwitcher: "[Professional ▼]" — Inter 12px `#374151`; "Professional" option highlighted with `bg-primary-tint` (#EFF6FF) in dropdown

**Footer** (identical to CatalogPage Professional V1):
- Background: `#111827` (`footer`)
- 4 columns: Shop | Browse | Information | Contact
- Column headings: Inter 14px 600 `#FFFFFF`
- Column links: Inter 14px `#9CA3AF` (`footer-muted`) → hover `#FFFFFF`
- Bottom bar: `#1F2937` with copyright and legal links

---

## 10. Required Implementation Corrections

| # | Correction | Detail |
|---|-----------|--------|
| C1 | Replace placeholder images | Use `product.imageUrls[]` from API; white card placeholder fallback |
| C2 | Dynamic spec table | Render from `product.parameters[]`; display `"{value} {unit}"` where unit is non-null |
| C3 | `isActive` check | Show not-found state if `product.isActive === false` despite HTTP 200 |
| C4 | `stock === 0` state | Disable quantity and CTA; green dot → gray dot; "In stock" → "Out of stock" in `#6B7280` |
| C5 | Quantity max | Cap at `Math.min(product.stock, 99)` minus quantity already in cart |
| C6 | Footer links | Replace with React Router links |
| C7 | Refresh Rate row color | Confirm whether blue `text-primary` row styling is intentional; if not, use standard `#111827` |
| C8 | "10 in stock" note | Derive from `product.stock` dynamically; show "N in stock" or hide if stock > threshold |
| C9 | Strip Stitch attributes | Remove `data-stitch-*` and `data-design-text-token` from production HTML |

---

## 11. Accessibility Risks

| Risk | Detail | Mitigation |
|------|--------|-----------|
| Green availability color-only? | Availability uses both dot AND text "In stock" — text carries semantic meaning ✓ | Verify `aria-hidden="true"` on dot |
| CTA contrast | `#FFFFFF` on `#2563EB` = ~4.5:1 — passes WCAG AA ✓ | No action needed |
| Thumbnail aria-labels | Present in HTML ✓ | Preserve in React |
| Quantity aria-labels | Present: `aria-label="Decrease/Increase quantity"` ✓ | Preserve in React |
| Focus rings | Blue `ring-2 ring-primary` on interactive elements ✓ | Preserve in React |
| ThemeSwitcher | Uses `role="listbox"` / `role="option"` / `aria-selected` ✓ | Standard pattern |
| Always-visible search | Search must remain visible at desktop (`hidden lg:flex`) | Do not remove on mobile — icon fallback acceptable |

---

## 12. Responsive Behavior Requirements

- Desktop (≥1024px): Two-column layout (480px gallery | remaining info); always-visible search (300px)
- Tablet (768–1023px): Two-column compressed; search may shrink
- Mobile (≤767px): Single column — white card gallery above, info below; search icon opens overlay
- Thumbnails: horizontal scroll on mobile
- CTA: sticky-bottom or inline on mobile
- Specification table: full width, all breakpoints
- Related products: 2-column on tablet, 1-column on mobile