# Theme Specification — Premium Minimalism (`premium`)

> **Status:** Draft — all proposed values require human approval before implementation.
> Final design tokens will be defined after visual concepts are generated and approved.

---

## 1. Visual Identity

A premium technology boutique. The visual language draws from high-end consumer electronics brands and luxury editorial photography — restrained, confident, and refined. Every element earns its place. The UI steps aside and lets the product speak.

**Reference brands (direction only, not copies):** Apple Store, Bang & Olufsen, Braun.

---

## 2. Target Emotional Response

- **Confidence:** "I am purchasing from a trusted, quality-focused source."
- **Desire:** The product photography and generous whitespace create an aspirational quality.
- **Calm:** No clutter, no urgency patterns, no flashing banners.
- **Trust:** Consistency and restraint signal reliability over excitement.

---

## 3. Design Principles

1. **Whitespace is not empty space — it is structure.** Generous padding creates visual breathing room and signals quality.
2. **Typography carries the brand.** The serif headline font does the visual heavy lifting. Body text is clean and highly legible.
3. **One accent, used sparingly.** Graphite and near-black are the accents. No competing colors.
4. **Photographs deserve the stage.** Product images are large, high-quality, unobstructed.
5. **Motion should be nearly invisible.** Transitions are present but should not be consciously noticed.
6. **No decoration for decoration's sake.** No gradients, no shadows for depth theater, no rounded pill shapes.

---

## 4. Proposed Color Palette  *(draft — requires approval)*

### Background & Surface

| Token name | Role | Proposed HEX |
|------------|------|--------------|
| `--color-bg-base` | Page background | `#FAFAF8` |
| `--color-bg-elevated` | Cards, modals | `#FFFFFF` |
| `--color-bg-subtle` | Section alternates, filters | `#F4F3F0` |
| `--color-bg-overlay` | Drawer backdrop | `rgba(26, 26, 26, 0.5)` |

### Text

| Token name | Role | Proposed HEX |
|------------|------|--------------|
| `--color-text-primary` | Headings, primary body | `#1A1A1A` |
| `--color-text-secondary` | Descriptions, metadata | `#5C5C5C` |
| `--color-text-muted` | Labels, placeholders | `#9E9E9E` |
| `--color-text-inverse` | Text on dark surfaces | `#FAFAF8` |

### Accent

| Token name | Role | Proposed HEX |
|------------|------|--------------|
| `--color-accent-primary` | Primary CTA, links | `#1A1A1A` |
| `--color-accent-secondary` | Hover, secondary actions | `#3D3D3D` |

### Border

| Token name | Role | Proposed HEX |
|------------|------|--------------|
| `--color-border-default` | Cards, inputs | `#E5E0DB` |
| `--color-border-strong` | Focused inputs | `#1A1A1A` |
| `--color-border-subtle` | Dividers | `#EEEBE7` |

### Semantic

| Token name | Role | Proposed HEX |
|------------|------|--------------|
| `--color-success` | In stock, confirmed | `#2D7A4F` |
| `--color-error` | Out of stock, error | `#C0392B` |
| `--color-warning` | Low stock | `#B7791F` |
| `--color-info` | Informational | `#2563EB` |

---

## 5. Proposed Typography  *(draft — requires approval)*

### Font Families

| Role | Proposed font | License | Fallback |
|------|---------------|---------|----------|
| Display / Hero headings | **Playfair Display** (Google Fonts, OFL) | Free | `Georgia, serif` |
| Section headings (H2–H3) | **Playfair Display** | Free | `Georgia, serif` |
| Body, UI, labels | **DM Sans** (Google Fonts, OFL) | Free | `system-ui, sans-serif` |

### Type Scale

| Level | Font | Size | Weight | Line height | Usage |
|-------|------|------|--------|-------------|-------|
| Display | Playfair Display | 56px / 3.5rem | 400 | 1.1 | Hero headline |
| H1 | Playfair Display | 40px / 2.5rem | 400 | 1.2 | Page titles |
| H2 | Playfair Display | 28px / 1.75rem | 400 | 1.3 | Section headings |
| H3 | DM Sans | 20px / 1.25rem | 600 | 1.4 | Card titles, subsections |
| Body L | DM Sans | 16px / 1rem | 400 | 1.6 | Product descriptions |
| Body M | DM Sans | 14px / 0.875rem | 400 | 1.5 | General UI text |
| Label | DM Sans | 12px / 0.75rem | 500 | 1.4 | Badges, metadata, prices |
| Caption | DM Sans | 11px / 0.6875rem | 400 | 1.4 | Fine print |

### Letter Spacing

- Display and H1: `0.02em` (slight tracking for elegance)
- H2: `0.01em`
- Labels and uppercase text: `0.08em` (spaced caps for brand feel)

---

## 6. Spacing and Visual Density

**Philosophy:** Loose density. Whitespace is a first-class design element.

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-xs` | 4px | Icon padding, tight internal gaps |
| `--spacing-sm` | 8px | Between label and content |
| `--spacing-md` | 16px | Card internal padding |
| `--spacing-lg` | 24px | Between components |
| `--spacing-xl` | 40px | Section padding, page gutters |
| `--spacing-2xl` | 64px | Between major page sections |
| `--spacing-3xl` | 96px | Hero section vertical padding |

**Page gutter:** 80px desktop, 40px tablet, 20px mobile.

---

## 7. Grid and Layout Principles

- **Desktop (1440px):** 12-column grid, 24px gutters, max content width 1280px
- **Tablet (768px):** 8-column grid, 20px gutters
- **Mobile (390px):** 4-column grid, 16px gutters

**Product grid on CatalogPage:**
- Desktop: 3 columns
- Tablet: 2 columns
- Mobile: 1 column (full-width cards)

**Layout philosophy:** Asymmetric layouts encouraged in hero and feature sections (product + text side-by-side); symmetric grid for catalog.

---

## 8. Border Radius and Shapes

**Philosophy:** Softly geometric. Not pill-shaped, not sharp-cornered.

| Element | Proposed radius |
|---------|----------------|
| Product cards | 4px |
| Buttons | 4px |
| Inputs, selects | 4px |
| Badges / tags | 2px |
| Modals, drawers | 0px (full-height drawers use no radius) |
| Images | 2px |

---

## 9. Shadows and Visual Effects

**Philosophy:** Shadows exist to establish hierarchy — not decoration. Used minimally.

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-card` | `0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)` | Product cards at rest |
| `--shadow-card-hover` | `0 4px 16px rgba(0,0,0,0.10)` | Product cards on hover |
| `--shadow-dropdown` | `0 8px 24px rgba(0,0,0,0.12)` | Dropdowns, popups |
| `--shadow-modal` | `0 20px 60px rgba(0,0,0,0.18)` | Modals |

No glow effects. No colored shadows. No inset shadows on inputs.

---

## 10. Animation and Transition Principles

**Philosophy:** Motion should feel like natural physical response — never showboating.

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | 150ms | Button state changes, toggles |
| `--duration-base` | 250ms | Card hover, input focus |
| `--duration-slow` | 400ms | Panel open/close, page transitions |
| `--easing-base` | `cubic-bezier(0.4, 0, 0.2, 1)` | General (ease-in-out feel) |
| `--easing-enter` | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering the screen |
| `--easing-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Elements exiting |

**Permitted animations:**
- Fade in on page load (`opacity 0 → 1`)
- Card subtle lift on hover (`translateY(-2px) + shadow increase`)
- Smooth underline on nav hover
- Filter panel slide-in on mobile

**Not permitted:**
- Bounce, spring, elastic easings
- Rotation or flip effects
- Particle or parallax effects
- Stagger chains that delay content display

---

## 11. Product Imagery Treatment

- **Style:** Clean, well-lit product shots on neutral backgrounds. White or light gray studio background preferred.
- **Aspect ratio:** 4:3 or 1:1 on catalog cards; 16:9 or 3:2 on product detail hero
- **Image size:** Large — the product is the hero. Catalog cards dedicate ≥ 55% of card height to image.
- **Hover effect:** Subtle scale `1.02` on product image in cards (slow, 400ms)
- **Placeholder:** Light warm gray rectangle (`#EEEBE7`) matching page background tone
- **Multiple images:** Clean dot or line pagination indicator on ProductPage gallery

---

## 12. Header and Navigation Direction

- **Background:** `#FAFAF8` (matches page, no contrast separation)
- **Border:** 1px bottom border `#E5E0DB`
- **Logo:** Typographic wordmark in Playfair Display, or abstract mark. No heavy icon.
- **Navigation links:** DM Sans 14px, 500 weight, `#5C5C5C`, hover `#1A1A1A` with 2px underline
- **Cart icon:** Minimal line icon, count badge in `#1A1A1A` background
- **ThemeSwitcher:** Small text toggle ("Premium / Gaming / Pro") or minimal icon set, right-aligned
- **Height:** 72px desktop, 60px mobile
- **Sticky:** Sticky on scroll with `backdrop-filter: blur(8px)` and slight opacity reduction

---

## 13. Hero Banner Direction

- **Layout:** Full-width editorial — large product image on the right 50%, headline and CTA on the left 50%
- **Background:** `#FAFAF8` with no gradient
- **Headline:** Playfair Display Display size (56px), 2–4 words max, no taglines
- **Subheadline:** DM Sans 18px, `#5C5C5C`, 1–2 lines
- **CTA button:** Rectangular (4px radius), `#1A1A1A` fill, white text, DM Sans 14px 600 weight. Secondary ghost variant available.
- **Height:** 520px desktop, 400px tablet, auto mobile (stacked)
- **No carousel.** Single, strong hero. Static.

---

## 14. Product Card Direction

- **Layout:** Image top (55–60% of card height), content bottom
- **Background:** `#FFFFFF`
- **Image:** Full-width within card, 2px top radius, no padding around image
- **Product name:** DM Sans 14px 600, `#1A1A1A`, max 2 lines
- **Price:** DM Sans 16px 600, `#1A1A1A`
- **Parameter badges:** Small, 2px radius, `#F4F3F0` background, `#5C5C5C` text, DM Sans 12px
- **Add to cart:** Appears on hover (opacity transition), bottom of card, full-width, minimal height (40px)
- **Shadow:** `--shadow-card` at rest, `--shadow-card-hover` on hover

---

## 15. Catalog and Filter Panel Direction

- **Layout:** Left sidebar (280px) + product grid
- **Filter sidebar background:** `#FAFAF8` (blends with page, no strong separation)
- **Filter headings:** DM Sans 12px uppercase 500 weight, letter-spacing 0.08em, `#9E9E9E`
- **Filter options:** Checkboxes with `#1A1A1A` checked state, 14px label
- **Active filters:** Small tags below search bar, dismissible with × icon
- **Sort select:** Clean select element, no custom styling beyond border and radius
- **Search input:** Minimal — bottom border only (no full border box)
- **Mobile filters:** Full-height drawer from left, overlay backdrop

---

## 16. Product Detail Page Direction

- **Layout:** Left 50% — image gallery; Right 50% — product information
- **Gallery:** Large primary image, thumbnail strip below, horizontal scroll on mobile
- **Product name:** H1 in Playfair Display
- **Price:** DM Sans 24px 600, `#1A1A1A`
- **Parameter badges:** Horizontal scrollable row of badges, same style as catalog cards
- **Description:** DM Sans 16px, `#5C5C5C`, generous line height 1.6
- **Add to cart CTA:** Full-width button on mobile, fixed 240px on desktop. High visual weight.
- **Stock status:** Small text below CTA. Green for in stock, red for out of stock.
- **Spacing:** Generous vertical rhythm between all sections — `--spacing-xl` between sections

---

## 17. Footer Direction

- **Background:** `#1A1A1A` (dark, clean separation)
- **Text:** `#9E9E9E` for body, `#FAFAF8` for headings
- **Links:** `#9E9E9E` with `#FAFAF8` on hover, no underline
- **Layout:** 4-column on desktop, 2-column on tablet, stacked on mobile
- **Style:** Minimal — no illustrations, no heavy icons. Pure typographic footer.
- **Bottom bar:** Copyright in DM Sans 12px `#5C5C5C`

---

## 18. Responsive Behavior

| Breakpoint | Key layout changes |
|------------|-------------------|
| 1440px+ | Full 12-column grid, side-by-side layouts, 3-column product grid |
| 1024px | Narrower sidebar (240px), 3-column grid maintained |
| 768px | Sidebar collapses to filter drawer, 2-column product grid, stacked hero |
| 390px | 1-column product grid, full-width cards, hamburger nav, bottom-sheet filters |

**Typography scaling:**
- Display: 56px → 40px → 32px
- H1: 40px → 32px → 28px
- H2: 28px → 24px → 20px
- Body unchanged (16/14px readable at all sizes)

---

## 19. Accessibility Requirements

- Color contrast ratio: all text ≥ 4.5:1 against background (`#1A1A1A` on `#FAFAF8` = 15.3:1 ✓)
- Focus rings: `2px solid #1A1A1A, offset 2px` — always visible, never hidden
- Interactive tap targets: minimum 44×44px on mobile
- Reduced motion: all animations disabled when `prefers-reduced-motion: reduce`
- Font minimum: 12px (11px captions exempt for non-critical labels)
- Images: `alt` text required for all product images
- Filter checkboxes: properly labeled with `<label>` or `aria-label`

---

## 20. Anti-Patterns and Forbidden Design Choices

- ❌ Gradients on backgrounds or buttons
- ❌ Rounded pill shapes (border-radius > 8px for rectangular elements)
- ❌ Drop shadows larger than `--shadow-modal`
- ❌ Colored text (anything other than the defined palette)
- ❌ Animated background elements (particles, moving gradients)
- ❌ Countdown timers or urgency banners
- ❌ Excessive badges ("HOT", "SALE", "BEST SELLER") — maximum one tag per card
- ❌ Carousel hero sections
- ❌ Stock photography with people
- ❌ Oversized icons used as decorative elements
- ❌ Hover states with color changes (use opacity or shadow, not new colors)

---

## 21. Measurable Visual Acceptance Criteria

| Criterion | Required value |
|-----------|----------------|
| Background color | `#FAFAF8` ± 2% lightness |
| Primary text contrast | ≥ 15:1 against `#FAFAF8` |
| Secondary text contrast | ≥ 4.5:1 against `#FAFAF8` |
| Product image area in catalog card | ≥ 55% of card height |
| Page gutter (desktop) | 80px ± 8px |
| Hero height (desktop) | 480–560px |
| Card border radius | 4px ± 1px |
| Button height (primary) | 44–48px |
| Animation duration (hover) | 200–300ms |
| Font rendering | Anti-aliased, no pixel rendering artifacts |
| Zero hardcoded colors in components | Verified by code review |