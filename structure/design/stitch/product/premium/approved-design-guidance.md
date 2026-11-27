# ProductPage — Premium Minimalism — Approved Design Guidance

**Version:** 1.0 (2026-11-27)  
**Status:** Conditionally approved — awaiting human sign-off  
**Score:** 55 / 65  
**Reference screenshot:** `v1-generated.png` (400 × 751 px)  
**Reference HTML:** `v1-code.html`

---

## 1. Reference Baselines

| Page | File | Status |
|------|------|--------|
| HomePage V2 | `structure/design/stitch/homepage/premium/v2-generated.png` | Conditionally approved |
| CatalogPage V1 | `structure/design/stitch/catalog/premium/v1-generated.png` | Conditionally approved |
| ProductPage V1 | `v1-generated.png` | Conditionally approved (this document) |

Carry-forward design guidance:
- `structure/design/stitch/homepage/premium/approved-design-guidance.md`
- `structure/design/stitch/catalog/premium/approved-design-guidance.md`

---

## 2. Theme Identity

**Premium Minimalism** targets design-conscious technology buyers who value editorial restraint and classical typography. The ProductPage continues the warm neutral surfaces and generous whitespace from the HomePage and CatalogPage.

**Core identity confirmed from HTML:**
- Page background: `#FAFAF8` warm off-white (`surface`)
- Product card/input background: `#FFFFFF` (`surface-container-lowest`)
- Badge/subtle surface: `#F4F3F0` (`surface-container`)
- Primary text: `#1A1A1A` (`on-surface`)
- Secondary text: `#5C5C5C` (`on-surface-variant`, `secondary`)
- Muted text: `#9E9E9E` (`muted`)
- Primary accent: `#1A1A1A` graphite (CTA fill)
- Card/input borders: `#E5E0DB` (`outline`)
- Footer: `#1A1A1A` background, `#FAFAF8` text

**No colored accent elements** — no blue, green, purple, cyan, gold, red.

---

## 3. Typography

| Role | Font | Size | Weight | Color | Token |
|------|------|------|--------|-------|-------|
| Product name (h1) | Playfair Display | 32px | 400 | `#1A1A1A` | `display-lg-mobile` |
| Section headings (h2) | Playfair Display | **22px** *(spec: 24px)* | 400 | `#1A1A1A` | `headline-md` |
| Price | DM Sans | 28px | 700 | `#1A1A1A` | `headline-lg` (with `font-bold`) |
| Body text | DM Sans | 15–18px | 400 | `#5C5C5C` | `body-lg` / `body-sm` |
| Navigation | DM Sans | 14px | 500 | `#5C5C5C` | `label-lg` |
| Badges | DM Sans | 12px | 400 | `#1A1A1A` | `body-sm` |
| Button label | DM Sans | 14px | 600 | `#FAFAF8` | `title-sm` |

**Implementation correction:** Implement section headings (`h2`) at 24px Playfair Display 400 as specified in the prompt, not 22px as in the Stitch HTML.

---

## 4. Product Gallery

- Main image: white `#FFFFFF` card, `1px #E5E0DB` border, 4px radius, `object-contain`
- Aspect ratio: 1:1 or 4:3 (confirmed: 4:3 `aspect-[4/3]` on thumbnails)
- Thumbnails: 3 buttons below main image, same white card style
- Selected thumbnail: `border-2 border-primary` (2px solid `#1A1A1A`) ✓
- Unselected thumbnail: `border border-outline` (`1px #E5E0DB`)
- Thumbnail gap: 8px
- Gallery interaction: JavaScript thumbnail switching (replace with React state)
- Missing image fallback: show neutral placeholder surface with product silhouette

---

## 5. Product Information Panel

| Element | Implementation |
|---------|---------------|
| Category label | "Laptop · Gaming Laptop" — DM Sans 12px `#9E9E9E` |
| Product name (h1) | Playfair Display 400 32px `#1A1A1A` |
| Price | DM Sans 700 28px `#1A1A1A` tabular-nums |
| Availability | "In stock" text — DM Sans 14px `#5C5C5C` — **no color dot, no colored text** |
| Spec badges | 2 badges (GPU, RAM): `#F4F3F0` bg, DM Sans 12px `#1A1A1A`, 2px radius |
| Quantity selector | White `#FFFFFF`, `1px #E5E0DB` border, DM Sans 14px, 4px radius; initial: 1 |
| Add to Cart button | `#1A1A1A` fill, `#FAFAF8` text, DM Sans 600, 4px radius, h-12 (48px) |

**Availability is text-only.** No dot, no color. "Out of stock" in the same `#5C5C5C` style.

---

## 6. Product Description Section

- Section heading: "About this product" — Playfair Display 400 **24px** (implement at 24px; Stitch HTML uses 22px)
- Body text: DM Sans 400 15px `#5C5C5C`
- Max width: `max-w-prose` (≈65 characters / ~720px)
- Top separator: `1px solid #E5E0DB`
- If `product.description === null`: hide section entirely

---

## 7. Technical Specification Table

- Section heading: "Specifications" — Playfair Display 400 **24px**
- Table: `#FFFFFF` card, `1px #E5E0DB` border, 4px radius
- Alternating rows: `#FFFFFF` / `#FAFAF8`
- Parameter name column: DM Sans 14px `#5C5C5C`, 200px wide (`w-1/3`)
- Parameter value column: DM Sans 14px 600 `#1A1A1A`
- Row height: 44px with `1px #E5E0DB` horizontal dividers
- Dynamic rendering: use `product.parameters[]`; do not hardcode laptop specs
- If `product.parameters` is empty: hide section

---

## 8. Related Products Section

- Section heading: "You may also like" — Playfair Display 400 **24px**
- Card design: same as CatalogPage Premium product cards
  - White `#FFFFFF` background, `1px #E5E0DB` border, 4px radius
  - 2 spec badges (GPU, RAM) per card
  - "In stock" text in `#5C5C5C` (text-only availability)
  - `#1A1A1A` fill CTA "Add to Cart"
- Maximum 3 related products shown
- Hide section if fewer than 2 related products exist
- Source: `GET /api/products?categoryId={id}&limit=4`, exclude current product

---

## 9. Header and Footer

**Header** (identical to CatalogPage Premium V1):
- Background: `#FAFAF8`, `1px solid #E5E0DB` bottom border, h-72px (note: Stitch uses 72px header; spec says 64px — implement at 64px for consistency with other themes)
- Wordmark: PCShop in `#1A1A1A`
- Navigation: DM Sans 14px `#5C5C5C`; Laptops active with underline `text-decoration: underline; text-underline-offset: 4px`
- Search: visible compact field — `#FFFFFF` bg, `#E5E0DB` border, DM Sans 14px; `hidden sm:flex`
- Cart badge: `#1A1A1A` background (rounded-full)
- ThemeSwitcher: "[Premium ▾]" — DM Sans `#5C5C5C`

**Footer** (identical to CatalogPage Premium V1):
- Background: `#1A1A1A`
- 4 columns: Shop | Browse | Information | Contact
- Column headings: DM Sans 14px 600 `#FAFAF8`
- Column links: DM Sans 14px `#9E9E9E` → hover `#FAFAF8`

---

## 10. Required Implementation Corrections

| # | Correction | Detail |
|---|-----------|--------|
| C1 | Section heading size | Implement h2 at 24px Playfair Display 400 (Stitch uses 22px) |
| C2 | Replace placeholder images | Use `product.imageUrls[]` from API; fallback for empty array |
| C3 | Dynamic spec table | Render from `product.parameters[]`; display `"{value} {unit}"` |
| C4 | `isActive` check | Show not-found state if `product.isActive === false` despite HTTP 200 |
| C5 | `stock === 0` state | Disable quantity selector and CTA; show "Out of stock" text in `#5C5C5C` |
| C6 | Quantity max | Cap at `Math.min(product.stock, 99)` minus quantity already in cart |
| C7 | CTA hover color | Use `hover:bg-[#2D2D2D]` or `hover:opacity-80` (Stitch uses `hover:bg-secondary` #5C5C5C — wrong) |
| C8 | Footer links | Replace with React Router links |
| C9 | Strip Stitch attributes | Remove `data-stitch-*` and inline `data-design-text-token` from production HTML |

---

## 11. Accessibility Risks

| Risk | Detail | Mitigation |
|------|--------|-----------|
| Availability color-only? | "In stock" in `#5C5C5C` — text only, no color coding. No risk. | No action needed |
| CTA contrast | `#FAFAF8` on `#1A1A1A` = ~21:1 — passes WCAG AA ✓ | No action needed |
| Thumbnail labels | HTML has `aria-label` on each thumb button ✓ | Preserve in React |
| Quantity aria | `aria-label="Decrease/Increase quantity"` on buttons ✓ | Preserve in React |
| Focus rings | `focus-visible:outline-2 focus-visible:outline-primary` ✓ | Preserve in React |
| ThemeSwitcher ARIA | Uses `role="listbox"` / `role="option"` / `aria-selected` ✓ | Standard pattern |

---

## 12. Responsive Behavior Requirements

- Desktop (≥1024px): Two-column layout (520px gallery | remaining info)
- Tablet (768–1023px): Two-column compressed
- Mobile (≤767px): Single column — image above, info below
- Thumbnails: horizontal scroll on mobile
- CTA: sticky-bottom or inline on mobile
- Specification table: full width on all breakpoints
- Related products: 2-column on tablet, 1-column on mobile