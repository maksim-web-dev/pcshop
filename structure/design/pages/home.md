# HomePage — Shared Design Specification

**Version:** V2 baseline (2026-11-27)  
**Reference designs:** `structure/design/stitch/homepage/{theme}/v2-generated.png`  
**Status:** Provisional — awaiting human design approval (Design Step 12)

---

## 1. Page Objectives

The HomePage serves as the primary entry point for new and returning visitors. It must:

1. Immediately communicate the PCShop brand identity in the active theme
2. Orient the user to the product categories available (Laptops, PCs, Monitors, Peripherals)
3. Surface featured hardware products to support quick discovery and purchase decisions
4. Provide clear navigation to the CatalogPage and individual ProductPages
5. Confirm that the store is real, trustworthy, and has the products the user needs

---

## 2. Page Structure

All three themes implement the same section structure in the same top-to-bottom order:

```
[Header]
  Logo | Navigation | Search | Cart | ThemeSwitcher

[Hero Banner]
  Headline | Subheadline | Primary CTA | Product image

[Shop by Category]
  Category cards (4 cards: Laptops, PCs, Monitors, Peripherals)

[Featured Products]
  Sort control | Product grid (6 products)

[Footer]
  Shop | Browse | Information | Contact
```

---

## 3. Header and Navigation

### Shared requirements

- Logo: left-aligned, text-based (PCShop wordmark), links to `/`
- Navigation: horizontal links (desktop), hamburger drawer (mobile) to 4 items:
  - `Laptops` → `/catalog?productTypeId=<laptop-id>`
  - `PCs` → `/catalog?productTypeId=<pc-id>`
  - `Monitors` → `/catalog?productTypeId=<monitor-id>`
  - `Peripherals` → `/catalog?productTypeId=<peripheral-id>`
- Cart icon: right-aligned, shows item count badge, links to `/cart`
- ThemeSwitcher: visible in header on all pages (see section 4)
- Header is sticky on scroll (top: 0)
- Header height: 72px (Premium), 64px (Gaming), 64px (Professional)

### No unsupported links

The following are **not in scope** and must not be added:
- "Sign In", "My Account", "My Orders", "Wishlist" — no user account system
- "Deals", "Sale", "New Arrivals" — no promotional navigation item
- Phone number, store locator, chat widget — not in the data model

### Theme-specific header style

| Element | Premium | Gaming | Professional |
|---------|---------|--------|--------------|
| Header background | `#FAFAF8` | `#0A0A0F` | `#FFFFFF` |
| Nav link color | `#1A1A1A` | `#A0A0C0` | `#374151` |
| Nav active underline | `#1A1A1A` | `#22D3EE` | `#2563EB` |
| Cart badge | `#1A1A1A` bg / `#FAFAF8` text | `#8B5CF6` bg / `#F0F0FF` text | `#2563EB` bg / `#FFFFFF` text |
| Search visibility | Icon-only (not always-visible) | Icon-only | Always-visible input field |
| Header border | 1px `#E5E0DB` bottom | None (absorbed into dark surface) | Scroll shadow |

---

## 4. ThemeSwitcher

The ThemeSwitcher component is present in the header on **every page** in all three themes.

- Renders as a compact dropdown button: "[ThemeName] ▾"
- Dropdown options: Premium | Gaming | Professional
- Active theme is visually indicated (highlighted/checked option)
- Selection persists to `localStorage` key: `pcshop-theme`
- Theme switch is instantaneous — no loading state
- Theme switch does not trigger API requests, reset cart, or change navigation state
- Zustand `themeStore` holds active theme and updates `data-theme` attribute on `<html>`

---

## 5. Hero Banner

### Shared requirements

- Full-width, constrained to 1440px max-width container
- Contains: headline, subheadline, primary CTA button, product photography
- Hero CTA navigates to `/catalog`
- No delivery promises ("Free Shipping", "2-Year Warranty", "30-Day Returns")
- No countdown timers or urgency signals
- Product image is real hardware photography (not illustrations)

### Theme-specific hero

| Element | Premium | Gaming | Professional |
|---------|---------|--------|--------------|
| Background | `#FAFAF8` warm off-white | `#0A0A0F`→`#12101F` gradient | `#EFF6FF` blue tint |
| Layout | 50/50 text + image | Full-width with image on right | 45/55 text + image |
| Headline copy | "Crafted for Performance" | "DOMINATE YOUR BUILD" | "Build Your Perfect PC" |
| Headline style | Playfair 56px 400 | Rajdhani 72px 700 UPPERCASE | Inter 40px 700 |
| Subheadline | "Powerful hardware, [editorial copy]" | "Next-gen gaming laptops. No compromises." | "Laptops, components, and peripherals — hardware you can trust, clearly specified." |
| CTA label | "Shop Laptops" | "SHOP LAPTOPS" | "Shop Now" |
| CTA style | `#1A1A1A` rect fill, 4px | Purple gradient + glow, 6px | `#2563EB` fill, 6px |
| Secondary CTA | None | None | "Browse All Products" (outline) |
| Hero height | 520px | 580px | 420px |

---

## 6. Category Section

### Shared requirements

- Section heading: theme-appropriate style (Playfair "Explore by Category" / Rajdhani "SHOP BY CATEGORY" / Inter "Shop by Category")
- 4 category cards, one per navigation item: Laptops, PCs, Monitors, Peripherals
- Each card links to `/catalog?productTypeId=<type-id>`
- Each card shows: product type image, category label
- Each card shows a "Browse" affordance:
  - Premium: "Browse →" DM Sans 12px `#5C5C5C`, hover-underline
  - Gaming: arrow icon `→` in `on-surface-variant`, hover-cyan
  - Professional: "Browse" text link in `#2563EB`, hover-underline
- Category images: themed photography (warm for premium, dark atmospheric for gaming, clean catalog for professional)

### Not in scope

- Sub-category expansion (the category cards link to the catalog with productTypeId filter)
- Pricing information in category cards
- Product count in category cards

---

## 7. Featured Products Section

### Shared requirements

- Section heading: "Featured Products" (Premium/Professional) / "FEATURED HARDWARE" (Gaming, uppercase)
- Sort control: "Sort: Featured ▾" dropdown above the grid (links to `?sortBy=&sortDir=`)
- Product grid: 3-column desktop, 2-column tablet, 1-column mobile (all three themes in V2)
- 6 products displayed across all three themes (see section 7.1 for Premium decision)
- Each product card shows (see section 8): image, name, price, badges, availability, CTA

### 7.1 Premium product count decision pending

The original specification (`mock-products.md`) defined Premium as showing 4 products for editorial restraint. The V2 generation shows 6 products. This is an open decision for the project owner:

- **Option A (6 products):** Full parity with Gaming and Professional. Simpler implementation. V2 design quality is acceptable.
- **Option B (4 products, editorial):** Preserves original restraint rationale — a 1-row-of-4 or 2-rows-of-2 layout with generous spacing per product. Requires a separate product count configuration per theme.

**Default for implementation: 6 products** unless the project owner explicitly chooses 4.

---

## 8. Product Card Requirements

All three themes show product cards with the following elements, in this visual order:

1. **Product image** — aspect-ratio 4:3 or 16:10, `object-fit: cover`, `loading="lazy"` for below-fold
2. **Product name** — single line or clean 2-line wrap; Inter or theme-appropriate font; 14px 600
3. **Price** — fixed single value from API `price decimal(10,2)` field; 16px 700
4. **Specification badges** — 2–3 badges per card (see `mock-products.md` for badge text)
5. **Availability indicator** — "In stock" at rest without hover (required)
6. **"Add to Cart" button** — always visible at rest (not hover-only); full-width in card

### Availability indicator by theme

| Theme | Format | Color |
|-------|--------|-------|
| Premium | "In stock" text, DM Sans 12px 400 | `#5C5C5C` |
| Gaming | "In stock" text, Inter 11px 600, optional cyan dot | `#22D3EE` |
| Professional | solid 6px green dot + "In stock" text, Inter 12px 500 | dot: `#059669` / text: `#047857` |

### Mock product dataset (authoritative)

| Product | Price | Badges (2 standard) | 3rd badge (Professional only) |
|---------|-------|---------------------|-------------------------------|
| APEX Gaming Laptop 15" | $1,799 | "RTX 4070", "32 GB DDR5" | "Intel i7" |
| NOVA Ultrabook 14" | $1,199 | "16 GB RAM", "512 GB SSD" | "Intel i5" |
| TITAN PC Tower | $2,499 | "RTX 4080", "64 GB DDR5" | "Intel i9" |
| NEXUS Monitor 32" | $799 | "240 Hz", "QHD" | — |
| STRIKER Keyboard PRO | $229 | "Cherry MX", "Wireless" | — |
| SWIFT Mouse Pro | $89 | "25600 DPI", "Wireless" | — |

**At runtime, all data must come from the backend API.** The mock dataset above is for design and development reference only.

### What must NOT appear on product cards

- Star ratings or review counts — not in the product entity
- Discount badges ("20% OFF", "SALE") — not in the data model
- Variable pricing ("from $89") — price is a fixed `decimal(10,2)` field
- "Best Seller" or "New" labels — not in the data model
- Delivery time estimates — not in scope

---

## 9. Footer

### Shared structure (all three themes)

4 columns: Shop | Browse | Information | Contact

**Shop column:** Laptops, PCs, Monitors, Keyboards, Mice  
**Browse column:** Gaming Laptops, Ultrabooks, Desktop PCs, All Products  
**Information column:** About, Privacy Policy  
**Contact column:** Contact support link, social media icons (3 icons)

The footer is a **placeholder structure**. At implementation:
- If a real "About" page exists, link it. Otherwise remove.
- If the project has real contact information, replace the placeholder support link.
- If no social media accounts exist, remove the social icon row.
- Do not implement social links, About page, or Privacy Policy as real pages unless they are in scope.

### Theme-specific footer

| Element | Premium | Gaming | Professional |
|---------|---------|--------|--------------|
| Background | `#1A1A1A` | `#070708` | `#111827` |
| Top accent | None | 1px purple-to-cyan gradient line | None |
| Heading color | `#FAFAF8` | `#F0F0FF` | `#FFFFFF` |
| Link color | `#FAFAF8` / `#9E9E9E` | `#A0A0C0` | `#9CA3AF` |
| Link hover | Underline | `#22D3EE` cyan | `#FFFFFF` |

---

## 10. Theme-Specific Presentation Variants

The HomePage sections above differ in visual style but are structurally identical across all three themes. The following table summarizes which differences require a React layout variant vs. which are achievable with CSS tokens only:

| Component | CSS tokens only | React variant needed | Notes |
|-----------|:--------------:|:-------------------:|-------|
| Header | ✓ | No | Only colors and search visibility differ |
| Hero section | Partial | Yes | Different layout split (50/50 vs 45/55 vs full-width) |
| Category card | ✓ | No | Same structure, different colors/fonts |
| Product card | Partial | Yes | Gaming: full-bleed image with badge overlay; Premium/Professional: image above metadata |
| Footer | ✓ | No | Same structure; gradient line in Gaming is CSS-only |
| ThemeSwitcher | ✓ | No | Same structure, different colors |

For Gaming, the product card uses an image that fills the top portion with a category badge overlaid on the image. This structural difference (badge position: absolute on image vs below image) may require a card variant.

---

## 11. Responsive Behavior Requirements

Design Step 7 (responsive variants) is pending — no responsive mockups have been generated yet. The following requirements are derived from `visual-requirements.md` and must be respected during implementation.

| Breakpoint | Navigation | Product grid | Category grid | Hero |
|------------|-----------|:----------:|:----------:|:----------:|
| Desktop (≥1024px) | Full horizontal | 3 columns | 4 columns | Full layout |
| Tablet (768–1023px) | Collapsed to hamburger | 2 columns | 2 columns | Stacked |
| Mobile (≤767px) | Hamburger drawer | 1 column | 1 column | Stacked |

Additional responsive rules:
- Filter drawer (not on HomePage but referenced for design system consistency)
- Search input: always visible on desktop Professional; icon-only on mobile for all themes
- Touch targets: ≥44×44px for all interactive elements on touch breakpoints
- No horizontal overflow at any breakpoint

---

## 12. Accessibility Requirements

| Requirement | Specification |
|-------------|--------------|
| Text contrast | WCAG AA minimum: 4.5:1 for normal text, 3:1 for large text (≥24px regular or ≥18.67px bold) |
| Focus rings | Visible 2px minimum on all interactive elements; never `outline: none` without replacement |
| Interactive targets | ≥44×44px on mobile and tablet |
| Keyboard navigation | All interactive elements reachable and operable via keyboard |
| Alt text | Product images: descriptive alt text from product name. Category images: "[Category name] products". |
| ThemeSwitcher ARIA | `aria-expanded`, `aria-haspopup="menu"`, keyboard navigation with arrow keys |
| Cart badge ARIA | `aria-label="Shopping cart, N items"` where N is the item count |
| Availability indicator | Use semantic `<span>` with text; do not rely on color alone |
| Reduced motion | `prefers-reduced-motion: reduce` disables all CSS transitions and animations |

---

## 13. API Dependencies

The HomePage requires the following API endpoints at runtime:

| Data | Endpoint | Used for |
|------|----------|---------|
| Featured products | `GET /api/products?limit=6&sortBy=createdAt&sortDir=desc` | Product grid |
| Product types | `GET /api/product-types` | Category cards (names and IDs for navigation links) |
| Individual product | `GET /api/products/:id` | Navigation from product card click |

The HomePage does **not** require:
- Authentication or session management
- User profile data
- Order history
- Wishlist data
- Real-time inventory (stock count is shown as binary "In stock" / "Out of stock")

---

## 14. Loading, Empty, and Error States

### Loading state (product grid)

Show skeleton cards matching the product card layout:
- Image placeholder: theme-specific subtle background (`#F4F3F0` Premium, `#111118` Gaming, `#E5E7EB` Professional)
- Animated shimmer: use token `--skeleton-base` and `--skeleton-highlight` per theme
- Do not show a spinner for the product grid — always use layout-matched skeletons
- 6 skeleton cards in the same 3-column grid

### Empty state (product grid)

If the API returns 0 products (unexpected):
- Message: "No products available" with a "Browse Catalog" link to `/catalog`
- Do not show an empty grid

### Error state (product grid)

If the API request fails:
- Message: "Unable to load products" with a "Try Again" button that re-triggers the fetch
- Implement via TanStack Query's `isError` state

### Loading state (category section)

Show 4 skeleton cards with the same aspect ratio as category cards. No text placeholder.

---

## 15. Unsupported Links and Placeholder Content

The following visible in the generated V2 HTML are **design placeholders only** and must not be implemented as real functionality:

| Placeholder | Location | Action at implementation |
|-------------|----------|--------------------------|
| Email address in footer | Footer Contact column | Remove if no real email; add real email if available |
| Social media icons | Footer Contact column | Remove if no social accounts; link real accounts if available |
| "About" link | Footer Information column | Remove if no About page in scope |
| "Privacy Policy" link | Footer Information column | Remove if not in scope; add real policy if required |
| `href="#"` and `href="#products"` anchor links | Multiple locations | Replace with real route links during implementation |