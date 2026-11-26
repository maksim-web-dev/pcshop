# Visual Reference Comparison — All Three Themes

This document compares the visual direction of all three PCShop themes across key UI areas.
It is based on the visual specifications from `structure/design/themes/` and the reference
candidate research in `references/<theme>/moodboard.md`.

The goal is to confirm that the three themes are visually distinct while representing
the same application and sharing the same functional components.

---

## Component-by-Component Comparison

### Header

| Dimension | `premium` | `gaming` | `professional` |
|-----------|-----------|----------|----------------|
| Background | Warm off-white `#FAFAF8`, blends with page | Near-black `#0A0A0F`, always sticky with blur | White `#FFFFFF`, adds shadow on scroll |
| Bottom border | Warm tan `#E5E0DB` | Dark `#1E1E2E` | Light gray `#E5E7EB` |
| Logo style | Typographic wordmark, Playfair Display | Bold wordmark, Rajdhani, cyan/purple accent | Clean wordmark, Inter Bold |
| Nav links | DM Sans 14px, muted gray, underline on hover | Inter 14px, muted, cyan draw-underline on hover | Inter 14px, graphite, blue on hover |
| Active nav | 2px underline `#1A1A1A` | Cyan `#22D3EE` text + 2px underline | Blue `#2563EB` text + 2px underline |
| Search | Hidden (icon only or below fold) | Visible in header or hidden by icon | Visible text input in header (desktop) |
| Cart badge | Graphite fill `#1A1A1A` | Purple `#8B5CF6` fill | Blue `#2563EB` fill |
| Height | 72px | 64px | 64px |

**Shared principle:** Logo left, ThemeSwitcher right, cart icon always present.

---

### Navigation (Category Nav)

| Dimension | `premium` | `gaming` | `professional` |
|-----------|-----------|----------|----------------|
| Style | Sparse, typographic | Dense, glow on active | Standard, blue active |
| Category labels | DM Sans 14px, sparse | Inter 14px, uppercase tracked | Inter 14px, standard case |
| Active indicator | Soft 2px underline | Cyan glow + underline | Blue left border or underline |
| Mobile nav | Overlay drawer, minimal | Full-screen overlay, dark | Side drawer, conventional |

---

### Hero Banner

| Dimension | `premium` | `gaming` | `professional` |
|-----------|-----------|----------|----------------|
| Layout | 50/50 split (image right, text left) | Full-width dark with large product image, text overlay or left | 55/45 (image right, text left) |
| Background | `#FAFAF8` — no gradient | `--gradient-hero` dark + optional grid overlay | White or very light blue tint `#EFF6FF` |
| Headline font | Playfair Display 56px | Rajdhani 72px uppercase | Inter 40px 700 |
| Headline length | 2–4 words | 2–5 words | 4–8 words |
| CTA button | Rectangular `#1A1A1A` fill | Gradient purple, glow on hover | Blue `#2563EB` fill, 6px radius |
| Subheadline | DM Sans 18px, benefit or promise | Inter 16px, technical spec or key claim | Inter 16px, practical benefit |
| Height | 520px | 580px | 420px |
| Carousel | No | No | No |

**Key distinction:** Premium is editorial and restrained. Gaming is dramatic and immersive. Professional is clear and practical.

---

### Product Categories Section

| Dimension | `premium` | `gaming` | `professional` |
|-----------|-----------|----------|----------------|
| Card style | Large image, typographic label below | Dark card with image + glowing accent border on hover | Standard card with image, name, product count |
| Layout | 2–3 large editorial cards | 3–4 dark cards in a row | 4–5 cards with equal weight |
| Typography on card | Playfair Display label | Rajdhani bold label | Inter label |
| Hover effect | Subtle image scale (1.02) | Purple glow on card border | Blue border or shadow lift |

---

### Product Cards

| Dimension | `premium` | `gaming` | `professional` |
|-----------|-----------|----------|----------------|
| Card background | White `#FFFFFF` | Dark elevated `#111118` | White `#FFFFFF` |
| Image proportion | ≥ 55% of card height | ≈ 50–55% | ≈ 50% |
| Image background | Neutral/white studio | Dark studio or composited | White/light studio |
| Product name | DM Sans 14px 600 | Inter 14px 600 | Inter 14px 600 |
| Price | DM Sans 16px 600, graphite | Inter 16px 700, white/purple | Inter 18px 700, near-black |
| Parameter badges | Warm gray bg, muted text | Purple-tinted bg, cyan text | Light gray bg, graphite text |
| CTA | Hover-reveal (pointer), always reachable (touch/keyboard) | Always visible at rest | Always visible at rest |
| Hover effect | Subtle shadow lift + scale 1.02 | Purple glow border | Blue-tinted border + shadow lift |
| In-stock indicator | Minimal text `#2D7A4F` | Green dot + text | Green dot + "In stock" text |

**CSS vs React variant decision:**
- CTA hover-reveal (premium only): can be CSS `@media (hover: hover)` — no React variant needed
- If gaming uses full-bleed image with text overlay and professional uses standard card-below-image layout, this may require a React presentation variant — to be decided in Step 10

---

### Product Catalog Page

| Dimension | `premium` | `gaming` | `professional` |
|-----------|-----------|----------|----------------|
| Grid columns (desktop) | 3 | 4 | 3 (toggle: 3 or 4) |
| Sidebar width | 280px | 260px | 280px |
| Sidebar background | `#FAFAF8` (blends) | `#111118` (strong separation) | `#FFFFFF` (white card) |
| Sidebar border | None / very subtle | 1px right `#1E1E2E` | 1px right `#E5E7EB` |
| Filter headings | DM Sans 12px uppercase, muted | Inter 11px uppercase, muted | Inter 12px 600 uppercase |
| Checkboxes | Custom minimal — `#1A1A1A` checked | Custom dark — `#8B5CF6` checked | Standard-style — `#2563EB` checked |
| Active filter chips | Warm gray, dismissible | Purple-tinted, dismissible | Blue, dismissible |
| Search input | Bottom-border only (minimal) | Dark bg with cyan focus glow | Standard input, blue border on focus |
| Sort control | Minimal select | Custom dark select | Standard select, blue on focus |

---

### Filter Panel

| Dimension | `premium` | `gaming` | `professional` |
|-----------|-----------|----------|----------------|
| Visual weight | Low — blends with page background | High — dark sidebar clearly separated | Medium — white card with subtle border |
| Filter group expansion | Smooth height animation | Snap animation (fast) | Standard accordion |
| Checkbox style | Refined, minimal | Bold, accent-colored | Standard browser-adjacent |
| Mobile behavior | Left drawer, overlay | Left drawer, overlay, dark | Left drawer, conventional |

---

### Product Detail Page

| Dimension | `premium` | `gaming` | `professional` |
|-----------|-----------|----------|----------------|
| Image gallery proportion | 50% / 50% | 55% / 45% | 45% / 55% |
| Image background | Light neutral | Dark — product composited | Light white |
| Gallery navigation | Dot or line pagination, subdued | Dot with cyan active indicator | Thumbnail strip with blue border |
| Product name | H1 Playfair Display 40px | H1 Rajdhani 48px | H1 Inter 32px 700 |
| Price | DM Sans 24px 600, graphite | Inter 28px 700, white | Inter 28px 700, near-black |
| Parameter display | Badge row (horizontal scroll) | Badge row + optional spec table | Badge row + spec table |
| CTA button | Full-width mobile, 240px desktop, graphite | Full-width mobile, 280px desktop, gradient | Full-width mobile, 240px desktop, blue |
| Quantity selector | Minimal +/- with count | Bold +/- with technical style | Standard +/- |
| Description | Generous line height, editorial | Technical tone, standard line height | Practical tone, information-focused |
| Breadcrumb | Discreet, DM Sans 12px | Present, Inter 12px | Prominent, Inter 13px |

---

### Typography Comparison

| Dimension | `premium` | `gaming` | `professional` |
|-----------|-----------|----------|----------------|
| Font families | Playfair Display + DM Sans (2 fonts) | Rajdhani + Inter (2 fonts) | Inter only (1 font) |
| Headline character | Elegant serif — editorial | Condensed sans — assertive | Clean sans — functional |
| Headline size (Display) | 56px | 72px (largest) | 40px (smallest) |
| Body text | DM Sans 16px | Inter 16px | Inter 15px |
| Letter spacing (headings) | +0.02em (slight openness) | +0.04em (wider, impactful) | −0.01em (tight, dense) |
| All-caps usage | Labels only | Labels + H2 possible | Labels only |

---

### Photography

| Dimension | `premium` | `gaming` | `professional` |
|-----------|-----------|----------|----------------|
| Background style | Neutral white/cream studio | Dark studio or composited on dark | White or light gray studio |
| Lighting | Soft, diffuse — no dramatic shadows | Dramatic — directional, atmospheric | Standard product photography |
| Hover treatment | Scale 1.02, slow | Scale 1.03 + purple glow behind product | No scale; standard |
| Placeholder | Warm `#EEEBE7` | Dark `#111118` shimmer | Light gray `#F3F4F6` shimmer |
| Alt text | Required | Required | Required |

---

### Spacing

| Dimension | `premium` | `gaming` | `professional` |
|-----------|-----------|----------|----------------|
| Page gutter (desktop) | 80px (most generous) | 60px | 60px |
| Section spacing (2xl) | 64px | 56px | 48px (most compact) |
| Card internal padding | 16px | 16px | 16px |
| Between grid items | 24px | 20px | 20px |
| Overall density | Low — editorial breathing room | Medium | Medium-high |

---

### Colors — Summary

| Role | `premium` | `gaming` | `professional` |
|------|-----------|----------|----------------|
| Page background | Warm `#FAFAF8` | Near-black `#0A0A0F` | Light gray `#F3F4F6` |
| Card surface | White `#FFFFFF` | Dark `#111118` | White `#FFFFFF` |
| Primary text | Graphite `#1A1A1A` | Near-white `#F0F0FF` | Near-black `#111827` |
| Primary accent | Graphite `#1A1A1A` | Purple `#8B5CF6` | Blue `#2563EB` |
| Secondary accent | — | Cyan `#22D3EE` | Graphite `#374151` |
| Border | Warm `#E5E0DB` | Dark `#1E1E2E` | Standard `#E5E7EB` |

---

### Animation

| Dimension | `premium` | `gaming` | `professional` |
|-----------|-----------|----------|----------------|
| Duration (hover) | 250–400ms (slow) | 100–180ms (fast) | 100–160ms (moderate) |
| Card hover effect | Shadow lift + scale 1.02 | Purple glow + border shift | Shadow lift + blue border tint |
| Button hover | Shadow increase | Glow intensify | Background darken |
| Panel transitions | Slow slide (400ms) | Fast slide (300ms) | Standard slide (250ms) |
| Reduced motion | All disabled | All disabled | All disabled |

---

### Footer

| Dimension | `premium` | `gaming` | `professional` |
|-----------|-----------|----------|----------------|
| Background | Dark `#1A1A1A` | Near-black `#070708` | Dark gray `#111827` |
| Top accent | None | Thin gradient line (purple → cyan) | None |
| Columns | 4 desktop, 2 tablet | 4 desktop, 2 tablet | 4 desktop, 2 tablet |
| Link hover | White | Cyan `#22D3EE` | White |

---

## Shared UX Principles (All Themes)

Extracted from the comparison above — these patterns are consistent across all three themes:

1. **Image is always the primary element** in product cards and product detail pages
2. **Price is always visible** — no interaction required to see it
3. **CTA is always reachable** — hover-reveal is progressive enhancement only, never a gate
4. **Filter sidebar on desktop, drawer on mobile** — same behavior, different visual style
5. **No hero carousel** — single, confident hero in all three themes
6. **Breadcrumb on catalog and product detail pages** in all themes
7. **Skeleton loading** (not spinners) for product grids in all themes
8. **Reduced-motion compliance** in all themes — all animations disabled

---

## CSS-Only vs React Variants — Summary

### Achievable with CSS custom properties only

All color, typography, spacing, shadow/glow, border radius, and animation differences
are expressible through CSS custom properties. This covers approximately 90% of the
visual differences between themes.

### Cases where React presentation variants may be needed

| Component | Structural difference | Decision |
|-----------|-----------------------|----------|
| `ProductCard` | CTA visibility behavior differs (premium: hover-reveal; gaming/professional: always visible) | Likely CSS only via `@media (hover: hover)` — verify at implementation |
| `HeroBanner` | Gaming has a background overlay element (optional grid pattern) not present in others | Likely a small conditional render, not a full variant |
| `FilterPanel` | Professional has list/grid toggle; others do not | Could be a prop-driven feature flag, not a separate component |
| `Badge` (parameter) | Color scheme (warm neutral / purple-cyan / blue-graphite) | CSS tokens only |
| `Skeleton` | Background and shimmer colors differ significantly (light vs dark) | CSS tokens only via `--skeleton-base` and `--skeleton-highlight` |

**Principle confirmed:** Default to CSS tokens. Structural variants are rare exceptions, not the rule.

---

## Identity Check — One Application, Three Visual Interpretations

The comparison above confirms that all three themes represent the same application:

- Identical URL structure and routing
- Identical API calls and data model
- Identical cart behavior
- Identical filter and pagination behavior
- Identical page sections (hero, categories, product grid, detail, footer)
- Identical component inventory (Button, ProductCard, FilterPanel, etc.)

What differs: visual token values (colors, typography, spacing, shadow, animation) and
in exceptional cases, the layout variant of a single component.

The ThemeSwitcher enables switching between these interpretations without
any state loss or page reload — confirming the CSS-swap architecture is correct.