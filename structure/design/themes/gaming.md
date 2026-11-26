# Theme Specification — Gaming & Technology (`gaming`)

> **Status:** Draft — all proposed values require human approval before implementation.
> Final design tokens will be defined after visual concepts are generated and approved.

---

## 1. Visual Identity

A high-performance gaming and technology brand. The visual language draws from modern gaming peripherals, cyberpunk aesthetics, and premium PC hardware presentation — dark, electric, and charged with energy. The UI conveys technical mastery and cutting-edge performance without being chaotic or unreadable.

**Reference direction (not copies):** Razer product pages, Nvidia RTX marketing, Corsair store.

---

## 2. Target Emotional Response

- **Excitement:** "This hardware is powerful. I want it."
- **Status:** "Owning this product signals that I am serious."
- **Immersion:** Dark, high-contrast interface creates focus on the product.
- **Confidence:** Technical specifications are presented boldly, not buried.

---

## 3. Design Principles

1. **Darkness creates focus.** Dark backgrounds push products forward. Light backgrounds are absent.
2. **Accent colors are energy, not decoration.** Purple and cyan are used to direct attention, not as wallpaper.
3. **Typography is bold and assertive.** Headlines are condensed, strong, and large.
4. **Glow is earned, not scattered.** Glow effects appear on interactive elements and product highlights — not everywhere.
5. **Information density is higher than premium — specs matter here.** Show more product attributes by default.
6. **Contrast is non-negotiable.** Even with glow effects, text must be readable at all times.

---

## 4. Proposed Color Palette  *(draft — requires approval)*

### Background & Surface

| Token name | Role | Proposed HEX |
|------------|------|--------------|
| `--color-bg-base` | Page background | `#0A0A0F` |
| `--color-bg-elevated` | Cards, modals | `#111118` |
| `--color-bg-subtle` | Filter sidebar, alternates | `#16161E` |
| `--color-bg-overlay` | Drawer backdrop | `rgba(0, 0, 0, 0.75)` |

### Text

| Token name | Role | Proposed HEX |
|------------|------|--------------|
| `--color-text-primary` | Headings, primary body | `#F0F0FF` |
| `--color-text-secondary` | Descriptions, metadata | `#A0A0C0` |
| `--color-text-muted` | Labels, placeholders | `#60607A` |
| `--color-text-inverse` | Text on light surfaces | `#0A0A0F` |

### Accent — Purple

| Token name | Role | Proposed HEX |
|------------|------|--------------|
| `--color-accent-purple` | Primary CTA, highlights | `#8B5CF6` |
| `--color-accent-purple-hover` | Hover state | `#7C3AED` |
| `--color-accent-purple-glow` | Glow / shadow | `rgba(139, 92, 246, 0.35)` |
| `--color-accent-purple-subtle` | Background tints | `rgba(139, 92, 246, 0.08)` |

### Accent — Cyan

| Token name | Role | Proposed HEX |
|------------|------|--------------|
| `--color-accent-cyan` | Secondary actions, links, badges | `#22D3EE` |
| `--color-accent-cyan-hover` | Hover state | `#06B6D4` |
| `--color-accent-cyan-glow` | Glow / shadow | `rgba(34, 211, 238, 0.30)` |
| `--color-accent-cyan-subtle` | Background tints | `rgba(34, 211, 238, 0.06)` |

### Border

| Token name | Role | Proposed HEX |
|------------|------|--------------|
| `--color-border-default` | Cards, inputs | `#1E1E2E` |
| `--color-border-strong` | Focused inputs, active | `#8B5CF6` |
| `--color-border-subtle` | Dividers | `#14141C` |

### Gradient

| Token name | Role | Proposed value |
|------------|------|----------------|
| `--gradient-hero` | Hero section background | `linear-gradient(135deg, #0A0A0F 0%, #12101F 100%)` |
| `--gradient-card-hover` | Card hover overlay | `linear-gradient(180deg, transparent 60%, rgba(139,92,246,0.08) 100%)` |
| `--gradient-cta` | Primary button | `linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)` |

### Semantic

| Token name | Role | Proposed HEX |
|------------|------|--------------|
| `--color-success` | In stock | `#10B981` |
| `--color-error` | Out of stock, error | `#EF4444` |
| `--color-warning` | Low stock | `#F59E0B` |
| `--color-info` | Informational | `#22D3EE` |

---

## 5. Proposed Typography  *(draft — requires approval)*

### Font Families

| Role | Proposed font | License | Fallback |
|------|---------------|---------|----------|
| Display / Hero headings | **Rajdhani** (Google Fonts, OFL) | Free | `Impact, system-ui, sans-serif` |
| Section headings (H2–H3) | **Rajdhani** | Free | `Impact, system-ui, sans-serif` |
| Body, UI, labels, specs | **Inter** (Google Fonts, OFL) | Free | `system-ui, -apple-system, sans-serif` |

**Note on Rajdhani:** Condensed, modern sans with strong geometric character. Well-suited for bold technical headings. Limited in italic styles — use sparingly. Orbitron is an alternative if a more futuristic feel is desired, but has lower readability at body sizes.

### Type Scale

| Level | Font | Size | Weight | Line height | Usage |
|-------|------|------|--------|-------------|-------|
| Display | Rajdhani | 72px / 4.5rem | 700 | 1.0 | Hero headline |
| H1 | Rajdhani | 48px / 3rem | 700 | 1.1 | Page titles |
| H2 | Rajdhani | 32px / 2rem | 600 | 1.2 | Section headings |
| H3 | Inter | 18px / 1.125rem | 600 | 1.4 | Card titles, subsections |
| Body L | Inter | 16px / 1rem | 400 | 1.6 | Product descriptions |
| Body M | Inter | 14px / 0.875rem | 400 | 1.5 | General UI text |
| Label | Inter | 12px / 0.75rem | 500 | 1.4 | Badges, metadata |
| Spec value | Inter | 14px / 0.875rem | 600 | 1.4 | Technical specs (RAM: 16 GB) |

### Letter Spacing

- Display and H1: `0.04em` (wider tracking for impact)
- Uppercase labels: `0.1em`
- Body text: `0em` (normal)

---

## 6. Spacing and Visual Density

**Philosophy:** Medium-high density. Gaming users are comfortable with more information per screen. Whitespace exists but is strategic, not generous.

| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-xs` | 4px | Tight internal gaps |
| `--spacing-sm` | 8px | Between label and content |
| `--spacing-md` | 16px | Card internal padding |
| `--spacing-lg` | 24px | Between components |
| `--spacing-xl` | 36px | Section padding |
| `--spacing-2xl` | 56px | Between major page sections |
| `--spacing-3xl` | 80px | Hero section vertical padding |

**Page gutter:** 60px desktop, 32px tablet, 16px mobile.

---

## 7. Grid and Layout Principles

- **Desktop (1440px):** 12-column grid, 20px gutters, max content width 1360px
- **Tablet (768px):** 8-column grid, 16px gutters
- **Mobile (390px):** 4-column grid, 12px gutters

**Product grid on CatalogPage:**
- Desktop: 4 columns (more products visible per row — higher density)
- Tablet: 2 columns
- Mobile: 2 columns (compact cards), fallback to 1 column

**Layout philosophy:** Bold asymmetry in hero sections. Tight, dense grid for catalog. Product detail uses full-width dramatic presentation.

---

## 8. Border Radius and Shapes

**Philosophy:** Mostly sharp with one exception — small radii for a modern "technical" feel, not soft "friendly" shapes.

| Element | Proposed radius |
|---------|----------------|
| Product cards | 6px |
| Buttons | 4px |
| Inputs, selects | 4px |
| Badges / tags | 3px |
| Modals, drawers | 8px top corners |
| Images | 4px |
| Active indicator strip | 0px (sharp) |

**Angular accents:** Subtle diagonal cuts or border-only corners (using CSS clip-path or box-shadow trick) are permitted on hero sections as decoration — used once, not system-wide.

---

## 9. Shadows and Visual Effects

**Philosophy:** Glow replaces traditional drop shadow. Light emanates from the product and accents.

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-card` | `0 0 0 1px #1E1E2E` | Card border at rest (outline style) |
| `--shadow-card-hover` | `0 0 20px rgba(139,92,246,0.25), 0 0 0 1px #8B5CF6` | Card glow on hover |
| `--shadow-cta-glow` | `0 4px 20px rgba(139,92,246,0.5)` | Primary button glow on hover |
| `--shadow-dropdown` | `0 8px 32px rgba(0,0,0,0.6)` | Dropdowns, popups |
| `--shadow-modal` | `0 0 60px rgba(0,0,0,0.8), 0 0 1px rgba(139,92,246,0.3)` | Modals |
| `--glow-cyan` | `0 0 12px rgba(34,211,238,0.4)` | Cyan accent glow (links, icons) |

**Gradient overlays:** Subtle gradient overlays on the bottom 30% of product images in cards are permitted to improve text readability.

---

## 10. Animation and Transition Principles

**Philosophy:** Fast and punchy. Animations feel like system response — immediate, responsive, never sluggish. Gaming users do not tolerate slowness.

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | 100ms | Button state changes, toggles |
| `--duration-base` | 180ms | Card hover, input focus |
| `--duration-slow` | 300ms | Panel open/close, page transitions |
| `--easing-base` | `cubic-bezier(0.4, 0, 0.2, 1)` | General |
| `--easing-enter` | `cubic-bezier(0, 0, 0.2, 1)` | Elements entering |
| `--easing-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Elements exiting |
| `--easing-snap` | `cubic-bezier(0.68, -0.3, 0.32, 1.3)` | Accent pops (use very sparingly) |

**Permitted animations:**
- Card glow pulse on hover
- Button glow intensify on hover
- Slide-in for filter drawer
- Fade + scale entrance for modals
- Cyan underline draw on nav hover (width 0 → 100% transition)

**Not permitted:**
- Infinite looping animations in the UI (no pulsing glows at rest)
- Parallax scrolling
- Heavy particle systems (acceptable only as a one-time loading animation if product requires it)
- Animations that delay content visibility

---

## 11. Product Imagery Treatment

- **Style:** Dark or dark-gradient backgrounds. Product should look studio-shot or composited onto a dark surface. High contrast between product and background is desirable.
- **Aspect ratio:** 1:1 or 4:3 on catalog cards; 16:9 or widescreen on product detail hero
- **Image size:** 50–60% of card height on catalog cards (density trade-off vs. premium)
- **Hover effect:** Scale `1.03` with purple glow behind the product image (`200ms`)
- **Placeholder:** Dark rectangle `#111118` with animated gradient shimmer
- **Multiple images:** Dot navigation with cyan active indicator on ProductPage gallery
- **Badges on images:** Allowed — "New", category label — in a sharp-cornered tag with accent color

---

## 12. Header and Navigation Direction

- **Background:** `#0A0A0F` with 1px bottom border `#1E1E2E`; on scroll: `rgba(10,10,15,0.9)` + `backdrop-filter: blur(12px)`
- **Logo:** Bold wordmark in Rajdhani, or geometric mark with cyan/purple accent
- **Navigation links:** Inter 14px 500, `#A0A0C0`, hover: `#F0F0FF` with cyan bottom-line draw animation
- **Active link:** `#22D3EE` with cyan 2px underline
- **Cart icon:** Line icon with count badge in `#8B5CF6` background
- **ThemeSwitcher:** Icon-based toggle, right-aligned
- **Height:** 64px desktop, 56px mobile
- **Sticky:** Always sticky with blur background

---

## 13. Hero Banner Direction

- **Layout:** Full-width dramatic — large product image (centered or right), headline left or overlaid
- **Background:** Dark gradient `--gradient-hero`, optional subtle grid pattern overlay (opacity ≤ 10%)
- **Headline:** Rajdhani Display (72px), uppercase, 2–5 words, tight tracking
- **Subheadline:** Inter 16px `#A0A0C0`, technical spec or key benefit
- **CTA button:** `--gradient-cta` fill, `--shadow-cta-glow` on hover, Rajdhani 16px uppercase
- **Accent element:** Cyan or purple thin border line as a decorative accent (1–2 elements only)
- **Height:** 580px desktop, 440px tablet, auto mobile
- **No carousel.** Single dramatic hero.

---

## 14. Product Card Direction

- **Layout:** Image top (50-55% of card height), content below
- **Background:** `#111118` with `--shadow-card` (outline border)
- **Hover:** `--shadow-card-hover` (purple glow + border color shift)
- **Product name:** Inter 14px 600, `#F0F0FF`, max 2 lines
- **Price:** Inter 16px 700, `#F0F0FF`, or `#8B5CF6` for emphasized price
- **Parameter badges:** Sharp 3px radius, `rgba(139,92,246,0.1)` background, `#22D3EE` text, Inter 11px 600
- **Add to cart:** Appears at rest (not hover-only) — gaming users expect to act quickly. Full-width, 40px, `--gradient-cta`
- **Category tag:** Top-left of image, sharp-cornered, `rgba(0,0,0,0.6)` background + accent text

---

## 15. Catalog and Filter Panel Direction

- **Layout:** Left sidebar (260px) + 4-column product grid
- **Filter sidebar background:** `#111118` with right border `#1E1E2E`
- **Filter headings:** Inter 11px uppercase 600, letter-spacing 0.1em, `#60607A`
- **Filter options:** Custom checkboxes — dark fill, `#8B5CF6` checked accent, `#F0F0FF` label
- **Active filter chips:** Sharp-cornered, `rgba(139,92,246,0.15)` background, `#8B5CF6` border, dismissible
- **Sort select:** Custom styled — dark background, cyan bottom border on focus
- **Search input:** Dark background `#111118`, `#1E1E2E` border, cyan glow on focus
- **Mobile filters:** Slide-in drawer from left, full-height

---

## 16. Product Detail Page Direction

- **Layout:** Left 55% — image gallery; Right 45% — product information
- **Gallery:** Dark background, large primary image, thumbnail strip with cyan active indicator
- **Product name:** H1 in Rajdhani (48px)
- **Price:** Inter 28px 700, `#F0F0FF`
- **Parameter badges:** Horizontal scrollable row, sharp 3px corners, accent color labels
- **Spec table (optional):** For products with many parameters, a compact table with alternating row tints
- **Description:** Inter 15px, `#A0A0C0`, line height 1.6
- **Add to cart CTA:** Full-width on mobile, 280px on desktop. `--gradient-cta` with glow. Prominent.
- **Stock status:** `--color-success` or `--color-error`, Inter 13px 500 with dot indicator
- **Spacing:** More compact than premium — `--spacing-lg` between sections

---

## 17. Footer Direction

- **Background:** `#070708` (slightly darker than page — dark separation)
- **Border top:** 1px `#1E1E2E`
- **Text:** `#60607A` for body, `#A0A0C0` for headings
- **Links:** `#60607A` with `#22D3EE` on hover
- **Layout:** 4-column desktop, 2-column tablet, stacked mobile
- **Accent element:** Thin gradient line at the top of footer (purple to cyan, low opacity)

---

## 18. Responsive Behavior

| Breakpoint | Key layout changes |
|------------|-------------------|
| 1440px+ | 4-column product grid, full hero with image |
| 1024px | 3-column product grid, narrower sidebar |
| 768px | 2-column product grid, filter drawer, stacked hero |
| 390px | 2-column compact product grid, hamburger nav, bottom-sheet filters |

**Typography scaling:**
- Display: 72px → 48px → 36px
- H1: 48px → 36px → 28px
- Body unchanged (16/14px)

---

## 19. Accessibility Requirements

- Color contrast: normal text ≥ 4.5:1; large text (≥ 24px regular or ≥ 18.67px bold) ≥ 3:1. All ratios provisional until verified during implementation.
  - `#F0F0FF` on `#0A0A0F` = 18.9:1 ✓
  - `#A0A0C0` on `#0A0A0F` = 7.8:1 ✓
  - `#22D3EE` on `#0A0A0F` = 9.6:1 ✓ (use as text only where this ratio is maintained)
  - `#8B5CF6` on `#0A0A0F` = 5.1:1 ✓ (borderline — verify at all usage sizes)
- Focus rings: `2px solid #22D3EE, offset 2px` — cyan focus ring, always visible
- Glow effects: decorative only — never the sole indicator of interactive state
- Interactive tap targets: minimum 44×44px on mobile
- Reduced motion: all glow pulses and transition effects disabled when `prefers-reduced-motion: reduce`
- Dark mode is permanent in this theme — no light mode variant

---

## 20. Anti-Patterns and Forbidden Design Choices

- ❌ Light backgrounds in any section of the page
- ❌ Excessive glow on non-interactive, non-focused elements
- ❌ Neon text that fails contrast requirements
- ❌ Animations that run continuously at rest (looping pulses are forbidden)
- ❌ Overly complex gradient meshes that obscure product photography
- ❌ Thin typography (< 400 weight) for body text on dark backgrounds
- ❌ Blue accent (conflicts with cyan — use purple or cyan, not both and not blue)
- ❌ White backgrounds in modals or cards (use elevated dark surface instead)
- ❌ Comic-book style starburst/explosion graphics
- ❌ Sans-serif body text smaller than 12px (legibility on dark backgrounds degrades faster)

---

## 21. Measurable Visual Acceptance Criteria

| Criterion | Required value |
|-----------|----------------|
| Background color | `#0A0A0F` ± 5% lightness |
| Primary text contrast | ≥ 15:1 against `#0A0A0F` |
| Secondary text contrast | ≥ 7:1 against `#0A0A0F` |
| Accent text contrast | ≥ 4.5:1 against background at all usage sizes |
| Product image area in catalog card | ≥ 50% of card height |
| Page gutter (desktop) | 60px ± 8px |
| Hero height (desktop) | 540–620px |
| Card border radius | 6px ± 1px |
| Button height (primary) | 44–48px |
| Animation duration (hover) | 150–200ms |
| Glow effects | Present on hover states, absent on rest states |
| Zero hardcoded colors in components | Verified by code review |