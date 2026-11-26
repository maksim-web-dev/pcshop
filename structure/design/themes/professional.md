# Theme Specification — Modern Technology Store (`professional`)

> **Status:** Draft — all proposed values require human approval before implementation.
> Final design tokens will be defined after visual concepts are generated and approved.
> This is the **default theme**.

---

## 1. Visual Identity

A modern, well-organized commercial electronics retailer. The visual language draws from contemporary e-commerce design — clean, information-dense, and efficient. This theme is built for practical shoppers who want to compare specifications, filter products quickly, and make confident purchasing decisions.

**Reference direction (not copies):** Best Buy Canada, B&H Photo, Newegg modern redesign.

---

## 2. Target Emotional Response

- **Efficiency:** "I can find what I need quickly and compare options without friction."
- **Reliability:** "This is a professional, organized store."
- **Confidence:** Detailed product information is easy to scan and compare.
- **Familiarity:** Conventions match expectations — no surprises, no learning curve.

---

## 3. Design Principles

1. **Clarity over beauty.** The primary goal is usability and information access.
2. **Consistent component behavior.** Interactions behave predictably across the entire interface.
3. **Density serves the user.** More product information per viewport reduces cognitive load for comparison shopping.
4. **Blue signals action.** A single accent color handles all CTAs, links, and active states.
5. **Typography is functional, not decorative.** One font family, consistent scale, no decorative styling.
6. **Whitespace is used purposefully** — not generous (premium) and not minimal (gaming), but balanced.

---

## 4. Proposed Color Palette  *(draft — requires approval)*

### Background & Surface

| Token name | Role | Proposed HEX |
|------------|------|--------------|
| `--color-bg-base` | Page background | `#F3F4F6` |
| `--color-bg-elevated` | Cards, modals | `#FFFFFF` |
| `--color-bg-subtle` | Filter sidebar, alternates | `#FFFFFF` |
| `--color-bg-muted` | Input backgrounds, secondary sections | `#F9FAFB` |
| `--color-bg-overlay` | Drawer backdrop | `rgba(17, 24, 39, 0.5)` |

### Text

| Token name | Role | Proposed HEX |
|------------|------|--------------|
| `--color-text-primary` | Headings, primary body | `#111827` |
| `--color-text-secondary` | Descriptions, metadata | `#4B5563` |
| `--color-text-muted` | Labels, placeholders | `#9CA3AF` |
| `--color-text-inverse` | Text on dark surfaces | `#FFFFFF` |

### Accent — Blue

| Token name | Role | Proposed HEX |
|------------|------|--------------|
| `--color-accent-primary` | Primary CTA, links, active state | `#2563EB` |
| `--color-accent-primary-hover` | Hover state | `#1D4ED8` |
| `--color-accent-primary-subtle` | Background tints, selected rows | `#EFF6FF` |
| `--color-accent-primary-muted` | Disabled accents | `#BFDBFE` |

### Accent — Graphite

| Token name | Role | Proposed HEX |
|------------|------|--------------|
| `--color-accent-graphite` | Secondary buttons, icons, secondary text | `#374151` |
| `--color-accent-graphite-hover` | Hover state | `#1F2937` |

### Border

| Token name | Role | Proposed HEX |
|------------|------|--------------|
| `--color-border-default` | Cards, inputs | `#E5E7EB` |
| `--color-border-strong` | Focused inputs, active elements | `#2563EB` |
| `--color-border-subtle` | Dividers, table rows | `#F3F4F6` |

### Semantic

| Token name | Role | Proposed HEX |
|------------|------|--------------|
| `--color-success` | In stock, confirmed | `#059669` |
| `--color-success-bg` | Success tint | `#ECFDF5` |
| `--color-error` | Out of stock, error | `#DC2626` |
| `--color-error-bg` | Error tint | `#FEF2F2` |
| `--color-warning` | Low stock | `#D97706` |
| `--color-warning-bg` | Warning tint | `#FFFBEB` |

---

## 5. Proposed Typography  *(draft — requires approval)*

### Font Families

| Role | Proposed font | License | Fallback |
|------|---------------|---------|----------|
| All text | **Inter** (Google Fonts, OFL) | Free | `system-ui, -apple-system, sans-serif` |

**Rationale for single font:** Inter is designed for screen readability at high information density. Its numeric characters are tabular (monospaced) by default — ideal for price comparison. Using a single family reduces visual noise and load time.

### Type Scale

| Level | Font | Size | Weight | Line height | Usage |
|-------|------|------|--------|-------------|-------|
| Display | Inter | 40px / 2.5rem | 700 | 1.1 | Hero headline |
| H1 | Inter | 32px / 2rem | 700 | 1.2 | Page titles |
| H2 | Inter | 24px / 1.5rem | 600 | 1.3 | Section headings |
| H3 | Inter | 18px / 1.125rem | 600 | 1.4 | Card titles, subsections |
| Body L | Inter | 15px / 0.9375rem | 400 | 1.6 | Product descriptions |
| Body M | Inter | 14px / 0.875rem | 400 | 1.5 | General UI text |
| Label | Inter | 12px / 0.75rem | 500 | 1.4 | Badges, metadata, prices |
| Price | Inter | 18px / 1.125rem | 700 | 1.2 | Product price (catalog) |
| Caption | Inter | 11px / 0.6875rem | 400 | 1.4 | Fine print |

### Letter Spacing

- Display and H1: `−0.01em` (slight tightening for large bold Inter)
- Body: `0em` (normal)
- Uppercase labels: `0.05em`

---

## 6. Spacing and Visual Density

**Philosophy:** Balanced density. More compact than premium, less dense than pure data-tables. Product cards show sufficient information without feeling cramped.

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-xs` | 4px | Icon padding, tight internal gaps |
| `--spacing-sm` | 8px | Between label and content |
| `--spacing-md` | 16px | Card internal padding |
| `--spacing-lg` | 20px | Between components |
| `--spacing-xl` | 32px | Section padding |
| `--spacing-2xl` | 48px | Between major page sections |
| `--spacing-3xl` | 64px | Hero section vertical padding |

**Page gutter:** 60px desktop, 32px tablet, 16px mobile.

---

## 7. Grid and Layout Principles

- **Desktop (1440px):** 12-column grid, 20px gutters, max content width 1320px
- **Tablet (768px):** 8-column grid, 16px gutters
- **Mobile (390px):** 4-column grid, 12px gutters

**Product grid on CatalogPage:**
- Desktop: 3–4 columns (user-selectable list/grid toggle, default 3)
- Tablet: 2–3 columns
- Mobile: 2 columns (compact), fallback 1 column

**Layout philosophy:** Conventional and expected. Sidebar-left + content-right on catalog. Standard product detail two-column. No surprises.

---

## 8. Border Radius and Shapes

**Philosophy:** Soft but not playful — standard modern web UI radiuses.

| Element | Proposed radius |
|---------|----------------|
| Product cards | 8px |
| Buttons | 6px |
| Inputs, selects | 6px |
| Badges / tags | 4px |
| Modals, drawers | 8px |
| Images in cards | 8px top, 0px bottom (card clips them) |
| Alert / notification banners | 6px |

---

## 9. Shadows and Visual Effects

**Philosophy:** Shadows establish structure and hierarchy in a light-on-light interface. Clear, purposeful, not dramatic.

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-card` | `0 1px 2px rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.05)` | Product cards at rest |
| `--shadow-card-hover` | `0 4px 12px rgba(0,0,0,0.10), 0 0 0 1px rgba(37,99,235,0.2)` | Product cards on hover |
| `--shadow-dropdown` | `0 10px 25px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.05)` | Dropdowns, popups |
| `--shadow-modal` | `0 20px 50px rgba(0,0,0,0.20)` | Modals |
| `--shadow-sticky` | `0 2px 8px rgba(0,0,0,0.08)` | Sticky header on scroll |

No glow effects. No colored shadows outside of `--shadow-card-hover` blue tint.

---

## 10. Animation and Transition Principles

**Philosophy:** Fast, functional, unobtrusive. Animation indicates state change — it does not entertain.

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | 100ms | Button state changes, toggles |
| `--duration-base` | 160ms | Card hover, input focus, dropdowns |
| `--duration-slow` | 250ms | Panel open/close, modals |
| `--easing-base` | `cubic-bezier(0.4, 0, 0.2, 1)` | General |
| `--easing-enter` | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering |
| `--easing-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Elements exiting |

**Permitted animations:**
- Shadow change and border color shift on card hover
- Input border and shadow on focus
- Dropdown slide-down
- Filter sidebar slide-in on mobile
- Skeleton shimmer for loading states

**Not permitted:**
- Scroll-triggered animations
- Page transition animations (instant navigation)
- Hover scale transforms on product images

---

## 11. Product Imagery Treatment

- **Style:** Clean product shots — white or light gray studio background preferred. Product-only, no lifestyle shots.
- **Aspect ratio:** 1:1 or 4:3 on catalog cards; 4:3 or 16:9 on product detail
- **Image size:** 50% of card height on catalog cards (balanced with metadata display)
- **Hover effect:** None (no scale, no overlay) — information density is the focus
- **Placeholder:** `#F3F4F6` rectangle (matches page background) with subtle shimmer
- **Multiple images:** Thumbnail strip on product detail, horizontal scroll on mobile
- **Image quality badge:** "Multiple images available" indicator if product has > 1 image

---

## 12. Header and Navigation Direction

- **Background:** `#FFFFFF` with 1px bottom border `#E5E7EB`
- **On scroll:** Adds `--shadow-sticky` shadow
- **Logo:** Clean wordmark in Inter Bold or simple geometric mark. Blue accent color.
- **Navigation links:** Inter 14px 500, `#374151`, hover: `#2563EB`
- **Active link:** `#2563EB` with 2px blue underline
- **Cart icon:** Standard icon with blue count badge
- **Search bar:** Visible in header on desktop (not hidden behind icon) — Inter 14px, `#E5E7EB` border
- **ThemeSwitcher:** Compact dropdown or pill toggle, right of header
- **Height:** 64px desktop, 56px mobile
- **Sticky:** Sticky on scroll

---

## 13. Hero Banner Direction

- **Layout:** Full-width — headline and CTA left 45%, product image right 55%
- **Background:** `#FFFFFF` or very light blue tint `#EFF6FF`
- **Headline:** Inter Display (40px) 700, 4–8 words
- **Subheadline:** Inter 16px `#4B5563`, 1–2 lines, practical benefit-focused
- **CTA button:** `#2563EB` fill, white text, Inter 15px 600, 6px radius, 48px height
- **Secondary CTA:** Ghost button with `#2563EB` border and text
- **Height:** 420px desktop, 340px tablet, auto mobile
- **No carousel.** Single, clear hero. May include a trust row (ratings, delivery, return policy) below.

---

## 14. Product Card Direction

- **Layout:** Image top (50% of card height), content below
- **Background:** `#FFFFFF` with `--shadow-card`
- **Hover:** `--shadow-card-hover` (slight blue-tinted border)
- **Product name:** Inter 14px 600, `#111827`, max 2 lines
- **Price:** Inter 18px 700, `#111827`
- **Old price (if discounted):** Inter 13px 400, `#9CA3AF`, strikethrough
- **Parameter badges:** 4px radius, `#F3F4F6` background, `#4B5563` text, Inter 12px 500
- **In-stock indicator:** Small colored dot + "In stock" / "Only 3 left" text
- **Add to cart:** Always visible (not hover-only), full-width, `#2563EB`, 40px height
- **Quick view option:** Secondary action link on hover (optional — decided at implementation)

---

## 15. Catalog and Filter Panel Direction

- **Layout:** Left sidebar (280px) + 3-column product grid
- **Filter sidebar:** `#FFFFFF` background, `1px` right border `#E5E7EB`
- **Filter headings:** Inter 12px 600 uppercase, `#374151`
- **Filter options:** Native-style checkboxes with `#2563EB` checked state
- **Active filters:** Blue chips below search, dismissible
- **Result count:** "Showing X of Y products" — Inter 13px `#4B5563`
- **Sort select:** Standard select element, 6px radius, `#2563EB` border on focus
- **Search input:** Standard text input with magnifier icon, `#E5E7EB` border
- **List/grid toggle:** Button group (grid 3 / grid 4 / list view) for desktop
- **Mobile filters:** Slide-in left drawer with "Apply" button at bottom

---

## 16. Product Detail Page Direction

- **Layout:** Left 45% — image gallery; Right 55% — product information (more info on right for professional)
- **Gallery:** White background, clean primary image, thumbnail strip with blue active border
- **Product name:** H1 Inter 32px 700
- **Price:** Inter 28px 700, `#111827`
- **In-stock status:** Prominent — green/red with icon, below price
- **Parameter table:** For this theme, a compact spec table (key: value) in addition to badges — better for comparison
- **Description:** Inter 15px, `#4B5563`, line height 1.6
- **Add to cart CTA:** Blue button, 48px height, full-width on mobile, 240px on desktop
- **Quantity selector:** ± buttons + input, before cart button
- **Breadcrumb:** Always visible at top (Home > Product Type > Category > Product)
- **Spacing:** `--spacing-lg` between sections — tighter than premium

---

## 17. Footer Direction

- **Background:** `#111827` (dark, clean separation)
- **Text:** `#9CA3AF` for body, `#FFFFFF` for headings
- **Links:** `#9CA3AF` hover `#FFFFFF`, no underline
- **Layout:** 4-column desktop, 2-column tablet, stacked mobile
- **Bottom bar:** `#1F2937` background, copyright + policy links in Inter 12px `#6B7280`
- **Style:** Clean, conventional. No decorative elements.

---

## 18. Responsive Behavior

| Breakpoint | Key layout changes |
|------------|-------------------|
| 1440px+ | Full 12-column, 3-col product grid, left sidebar visible, header search visible |
| 1024px | Sidebar collapses to filter toggle, 3-col grid maintained |
| 768px | 2-col product grid, filter drawer, stacked hero, header search collapses to icon |
| 390px | 2-col compact grid or 1-col, hamburger nav, full-width filter sheet |

**Typography scaling:**
- Display: 40px → 32px → 28px
- H1: 32px → 28px → 24px
- Body unchanged (15/14px)

---

## 19. Accessibility Requirements

- Color contrast: all text meets ≥ 4.5:1
  - `#111827` on `#FFFFFF` = 16.75:1 ✓
  - `#4B5563` on `#FFFFFF` = 7.0:1 ✓
  - `#2563EB` on `#FFFFFF` = 4.6:1 ✓ (verify at all usage sizes, especially small)
  - `#9CA3AF` on `#FFFFFF` = 2.5:1 ✗ — `#9CA3AF` is used for muted/placeholder only, not body text
- Focus rings: `2px solid #2563EB, offset 2px` — always visible
- Interactive tap targets: minimum 44×44px on mobile
- Reduced motion: transitions reduced to 0ms when `prefers-reduced-motion: reduce`
- Form inputs: all inputs have associated visible labels (not placeholder-only)
- Breadcrumb: uses `<nav aria-label="breadcrumb">` with proper structure
- Product grid: each card is a focusable link with descriptive aria-label

---

## 20. Anti-Patterns and Forbidden Design Choices

- ❌ Dark backgrounds in any part of the page (except footer and modal overlay)
- ❌ Multiple accent colors competing (blue is the single action color)
- ❌ Gradients on buttons or backgrounds
- ❌ Dramatic shadows or glow effects
- ❌ Decorative typography (serif, condensed, display fonts)
- ❌ Hover-only CTAs (all primary actions visible at rest)
- ❌ Full-width images without aspect-ratio constraints (causes layout shift)
- ❌ Auto-playing elements or looping animations
- ❌ Excessive card metadata beyond 4–5 visible parameters per card
- ❌ Hidden pricing (price always visible without hover or interaction)

---

## 21. Measurable Visual Acceptance Criteria

| Criterion | Required value |
|-----------|----------------|
| Background color | `#F3F4F6` page, `#FFFFFF` cards |
| Primary text contrast | ≥ 16:1 against `#FFFFFF` |
| Accent blue contrast | ≥ 4.5:1 against `#FFFFFF` |
| Product image area in catalog card | ≈ 50% of card height |
| Page gutter (desktop) | 60px ± 8px |
| Hero height (desktop) | 400–440px |
| Card border radius | 8px ± 1px |
| Button height (primary) | 44–48px |
| Animation duration (hover) | 100–180ms |
| Font family | Inter only — no secondary fonts |
| Zero hardcoded colors in components | Verified by code review |