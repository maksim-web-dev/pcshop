# ProductPage — Gaming & Technology — Approved Design Guidance

**Version:** 1.0 (2026-11-27)  
**Status:** Conditionally approved — awaiting human sign-off  
**Score:** 60 / 65  
**Reference screenshot:** `v1-generated.png` (462 × 757 px)  
**Reference HTML:** `v1-code.html`

---

## 1. Reference Baselines

| Page | File | Status |
|------|------|--------|
| HomePage V2 | `structure/design/stitch/homepage/gaming/v2-generated.png` | Conditionally approved |
| CatalogPage V1 | `structure/design/stitch/catalog/gaming/v1-generated.png` | Conditionally approved |
| ProductPage V1 | `v1-generated.png` | Conditionally approved (this document) |

Carry-forward design guidance:
- `structure/design/stitch/homepage/gaming/approved-design-guidance.md`
- `structure/design/stitch/catalog/gaming/approved-design-guidance.md`

---

## 2. Theme Identity

**Gaming & Technology** targets gamers and hardware enthusiasts who want an expressive, immersive experience. The ProductPage maintains the dark atmospheric surfaces and purple/cyan accent system from the HomePage and CatalogPage.

**Core identity confirmed from HTML:**
- Page background: `#0A0A0F` near-black (`surface`)
- Product card/elevated surface: `#111118` (`surface-card`)
- Hover overlay: `#16161E` (`surface-elevated`)
- Primary text: `#F0F0FF` near-white (`on-surface`)
- Secondary text: `#A0A0C0` (`on-surface-variant`)
- Muted text: `#8585A3` (`muted`)
- Primary accent: `#8B5CF6` purple (`primary`)
- Secondary accent: `#22D3EE` cyan (`secondary`) — availability, badges, focus rings, active nav
- Card borders: `1px solid #1E1E2E` (`outline`)
- Footer background: `#070708` (`surface-footer`)

**Green is FORBIDDEN** — availability must use cyan `#22D3EE` only.

---

## 3. Typography

| Role | Font | Size | Weight | Color | Token |
|------|------|------|--------|-------|-------|
| Section headings (h2) | Rajdhani | 20px UPPERCASE | 700 | `#F0F0FF` | `headline-md` |
| CTA button label | Rajdhani | 16px UPPERCASE | 700 | `#F0F0FF` | `label-lg` |
| Product name (h1) | Inter | **26px** *(Stitch: 20px)* | 700 | `#F0F0FF` | — |
| Price | Inter | 32px | 700 | `#F0F0FF` | `headline-lg` |
| Body text | Inter | 16px | 400 | `#A0A0C0` | `body-md` |
| Navigation | Inter | 14px | 500 | `#A0A0C0` | `label-md` |
| Badges | Inter | 11px | 600 | `#22D3EE` | `caption` |
| Availability text | Inter | 11px | 600 UPPERCASE | `#22D3EE` | `caption` |

**Implementation correction:** Implement product name `h1` at Inter 26px 700 `#F0F0FF`. The Stitch HTML uses `headline-md` = 20px. Increase to 26px in React.

---

## 4. Product Gallery

- Main image: dark `#111118` card, 6px radius, `object-cover`
- Purple glow behind product: `box-shadow: 0 0 60px rgba(139, 92, 246, 0.2)` on the image container
- Aspect ratio: 1:1 or 4:3 (`aspect-[4/3]` confirmed in thumbnails)
- Thumbnails: 3 buttons below main image, same dark card style
- Selected thumbnail: `border-2 border-secondary` (2px solid `#22D3EE`) ✓
- Unselected thumbnail: `border border-outline` (`1px #1E1E2E`)
- Thumbnail gap: 8px
- Gallery interaction: JavaScript thumbnail switching (replace with React state)
- Missing image fallback: dark placeholder surface with product silhouette

---

## 5. Product Information Panel

| Element | Implementation |
|---------|---------------|
| Category label | "Laptop · Gaming Laptop" — Inter 13px `#8585A3` muted |
| Product name (h1) | Inter **26px** 700 `#F0F0FF` (implement at 26px; Stitch uses 20px) |
| Price | Inter 32px 700 `#F0F0FF` tabular-nums |
| Availability | `●` cyan dot (`bg-secondary` = `#22D3EE`) + "IN STOCK" Inter 11px 600 `#22D3EE` UPPERCASE |
| Spec badges | 2 badges (GPU, RAM): `#16161E` bg (use spec value; Stitch uses `#1D1635`), Inter 12px `#22D3EE`, 3px radius |
| Quantity selector | `#111118` bg, `1px #1E1E2E` border, Inter 14px `#F0F0FF`; `−`/`+` in `#A0A0C0`; initial: 1 |
| ADD TO CART button | Purple gradient `#8B5CF6` → `#5516BE` (via `#6D3BD7` to `#5516BE`), Rajdhani 700 UPPERCASE, 6px radius, h-12 (48px) |

**Availability:** "IN STOCK" or "OUT OF STOCK" — always uppercase, always cyan `#22D3EE`. Never green.

---

## 6. Product Description Section

- Section heading: "ABOUT THIS PRODUCT" — Rajdhani 700 20px UPPERCASE `#F0F0FF`
- Body wrapper: `#111118` card, `1px #1E1E2E` border, 6px radius, padded
- Body text: Inter 400 16px `#A0A0C0`
- Max width: `max-w-[800px]`
- Top separator: `1px solid #1E1E2E`
- If `product.description === null`: hide section entirely

---

## 7. Technical Specification Table

- Section heading: "SPECIFICATIONS" — Rajdhani 700 20px UPPERCASE `#F0F0FF`
- Table: `#111118` card, `1px #1E1E2E` border, 6px radius
- Alternating rows: `#111118` / `#16161E`
- Parameter name column: Inter 14px `#A0A0C0` (left, `w-1/3`)
- Parameter value column: Inter 14px 600 `#F0F0FF` (right)
- Row height: 44px with `1px #1E1E2E` horizontal dividers
- Dynamic rendering: use `product.parameters[]`; do not hardcode laptop specs
- If `product.parameters` is empty: hide section

---

## 8. Related Products Section

- Section heading: "YOU MAY ALSO LIKE" — Rajdhani 700 20px UPPERCASE `#F0F0FF`
- Card design: same as CatalogPage Gaming product cards
  - `#111118` background, `1px #1E1E2E` border, 6px radius
  - 2 spec badges (GPU, RAM) per card — `#16161E` bg, `#22D3EE` text
  - "IN STOCK" text in `#22D3EE` UPPERCASE (cyan, no dot)
  - Purple gradient CTA "ADD TO CART" (Rajdhani UPPERCASE)
- Maximum 3 related products shown
- Hide section if fewer than 2 related products exist
- Source: `GET /api/products?categoryId={id}&limit=4`, exclude current product

---

## 9. Header and Footer

**Header** (identical to CatalogPage Gaming V1):
- Background: `#0A0A0F` with `1px solid #1E1E2E` bottom border and `backdrop-blur-md`
- Wordmark: PCShop in `#F0F0FF` with cyan/purple SVG icon
- Navigation: Inter 14px `#A0A0C0`; Laptops active with `border-b-2 border-secondary` (cyan underline)
- Search: visible field — `#111118` bg, `#1E1E2E` border, Inter, cyan focus ring; `hidden sm:flex`
- Cart badge: `#8B5CF6` purple background (rounded-full)
- ThemeSwitcher: "[Gaming]" — Inter, border on dark surface, cyan focus ring

**Footer** (identical to CatalogPage Gaming V1):
- Background: `#070708`
- 1px top line: purple-to-cyan gradient (`#8B5CF6` → `#22D3EE`) ✓ confirmed in HTML
- 4 columns: Shop | Browse | Information | Contact
- Column headings: Rajdhani 14px UPPERCASE `#F0F0FF`
- Column links: Inter 14px `#A0A0C0` → hover `#22D3EE` (secondary)

---

## 10. Required Implementation Corrections

| # | Correction | Detail |
|---|-----------|--------|
| C1 | Product name size | Implement h1 at Inter 26px 700 (Stitch uses 20px) |
| C2 | Badge background color | Use `#16161E` (spec); Stitch uses `#1D1635` |
| C3 | Replace placeholder images | Use `product.imageUrls[]` from API; dark placeholder fallback |
| C4 | Dynamic spec table | Render from `product.parameters[]` |
| C5 | `isActive` check | Show not-found state if `product.isActive === false` |
| C6 | `stock === 0` state | Disable quantity and CTA; show "OUT OF STOCK" in cyan |
| C7 | Quantity max | Cap at `Math.min(product.stock, 99)` minus cart quantity |
| C8 | Footer links | Replace with React Router links |
| C9 | ThemeSwitcher ARIA | Standardize to `role="listbox"` / `role="option"` / `aria-selected` |

---

## 11. Accessibility Risks

| Risk | Detail | Mitigation |
|------|--------|-----------|
| Cyan on dark contrast | `#22D3EE` on `#111118` = ~8:1 — passes WCAG AA ✓ | No action needed |
| CTA button gradient contrast | `#F0F0FF` text on purple gradient — passes | Verify at implementation |
| Availability text | "IN STOCK" is text (not color-only) ✓ | No action needed |
| Focus rings | Cyan focus rings confirmed in HTML ✓ | Preserve in React |
| Thumbnail aria-labels | Present in HTML ✓ | Preserve in React |
| Quantity aria-labels | Present in HTML ✓ | Preserve in React |
| ThemeSwitcher ARIA | Uses `role="menu"` / `role="menuitem"` — non-standard | Standardize to listbox/option |

---

## 12. Responsive Behavior Requirements

- Desktop (≥1024px): Two-column layout (480px gallery | remaining info)
- Tablet (768–1023px): Two-column compressed
- Mobile (≤767px): Single column — dark image above, info below
- Thumbnails: horizontal scroll on mobile
- CTA: sticky-bottom or inline on mobile
- Specification table: full width, dark card, all breakpoints
- Related products: 2-column on tablet, 1-column on mobile