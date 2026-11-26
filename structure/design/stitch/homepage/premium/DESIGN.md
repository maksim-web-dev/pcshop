---
name: "PCShop — Premium Minimalism"
description: "An editorial, warm-minimalist design system for a refined computer hardware storefront."
---

## Overview

PCShop (Premium Minimalism) is an editorial e-commerce design system built for design-conscious technology buyers aged 28–45. It pairs generous warm-paper whitespace with classical serif headlines and clean humanist sans-serif metadata so hardware photography remains the undisputed focal point. The interface communicates quality through restraint, precision, and clarity—never promotional noise.

## Colors

The palette is anchored in warm off-white paper (`#FAFAF8`), crisp studio white cards (`#FFFFFF`), and near-black graphite (`#1A1A1A`) for both primary typography and rectangular calls to action. Warm neutral borders (`#E5E0DB`) and light stone badges (`#F4F3F0`) provide subtle structure without introducing competing hues.

- **No decorative accents:** Never add blue, purple, green, red, gold, or rose-gold anywhere in the UI.
- **Light-mode editorial ground:** All page sections sit on `#FAFAF8` or `#FFFFFF`, except the dark typographic footer (`#1A1A1A`).
- **No gradients:** Use flat, solid color fills across all buttons, cards, and backgrounds.

```yaml
colors:
  primary: "#1A1A1A"
  on-primary: "#FAFAF8"
  secondary: "#5C5C5C"
  on-secondary: "#FAFAF8"
  surface: "#FAFAF8"
  on-surface: "#1A1A1A"
  on-surface-variant: "#5C5C5C"
  surface-container-lowest: "#FFFFFF"
  surface-container: "#F4F3F0"
  outline: "#E5E0DB"
  outline-variant: "#E5E0DB"
  footer-surface: "#1A1A1A"
  on-footer-surface: "#FAFAF8"
  muted: "#9E9E9E"
```

## Typography

Two typefaces govern the entire interface: **Playfair Display** (weight 400) for editorial headlines, section titles, wordmark, and category labels, and **DM Sans** for navigation, product names, pricing, parameter badges, buttons, and footer copy. Headlines use subtle `+0.02em` openness and sentence/title case—never all-caps.

```yaml
typography:
  display-lg:
    fontFamily: "Playfair Display"
    fontSize: 56px
    fontWeight: 400
    lineHeight: 64px
    letterSpacing: 1.12px
  display-lg-mobile:
    fontFamily: "Playfair Display"
    fontSize: 32px
    fontWeight: 400
    lineHeight: 38px
    letterSpacing: 0.64px
  headline-lg:
    fontFamily: "Playfair Display"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 36px
    letterSpacing: 0.56px
  headline-md:
    fontFamily: "Playfair Display"
    fontSize: 22px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0.44px
  body-lg:
    fontFamily: "DM Sans"
    fontSize: 18px
    fontWeight: 400
    lineHeight: 28px
    letterSpacing: 0px
  title-md:
    fontFamily: "DM Sans"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 24px
    letterSpacing: 0px
  title-sm:
    fontFamily: "DM Sans"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 0px
  label-lg:
    fontFamily: "DM Sans"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0px
  body-sm:
    fontFamily: "DM Sans"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 18px
    letterSpacing: 0px
  label-xs:
    fontFamily: "DM Sans"
    fontSize: 11px
    fontWeight: 400
    lineHeight: 16px
    letterSpacing: 0px
```

## Layout & Spacing

The desktop experience targets a **1440px** wide canvas with generous **80px** left and right page gutters, **64px** vertical spacing between major sections, **24px** gaps between product and category cards, and **16px** internal card padding. Whitespace is treated as an active structural element. On narrower viewports, gutters step down to `24px` and multi-column grids collapse to a single column.

```yaml
spacing:
  gutter-xs: 4px
  gutter-sm: 8px
  gutter-md: 16px
  gutter-lg: 24px
  gutter-xl: 32px
  section: 64px
  hero-y: 60px
  page-gutter: 80px
  page-margin: 24px
  header-h: 72px
```

## Elevation & Depth

Hierarchy is established primarily through whitespace, typographic scale, and clean `#FFFFFF` card surfaces resting on the `#FAFAF8` warm off-white page ground. Cards use soft, low-opacity ambient shadows rather than heavy outlines. The sticky 72px header uses a crisp `1px` bottom border in `#E5E0DB` with an opaque `#FAFAF8` background—no backdrop blur or glassmorphism.

## Shapes

The shape language is crisp and architectural. Cards and rectangular CTA buttons use a **4px** border radius (`rounded-DEFAULT` / `rounded-md`). Technical specification badges use a tighter **2px** radius (`rounded-sm`). Pill-shaped buttons are forbidden; `rounded-full` is reserved strictly for the small cart count indicator.

```yaml
rounded:
  sm: 2px
  DEFAULT: 4px
  md: 4px
  lg: 4px
  full: 9999px
```

## Motion & Micro-interaction

Motion is restrained and tactile. Interactive text links and buttons transition color within `150ms`. Category and product cards respond to hover with a subtle `1.02` image scale and gentle shadow lift over `250ms`. Nothing loops, bounces, or animates purely for decoration.

```yaml
motion:
  state-change:
    duration: 150ms
    delay: 0ms
    timingFunction: ease-out
  card-hover:
    duration: 250ms
    delay: 0ms
    timingFunction: cubic-bezier(0.2, 0, 0, 1)
```

## Voice & Content Strategy

- **Tone:** Quietly confident, technical, and editorial—never promotional or urgent.
- **Forbidden copy:** No countdowns, "Limited Time", "Best Seller", star ratings, review counts, or variable "from $X" pricing.
- **Prices:** Always display fixed single-value prices (e.g., `$1,799`).
- **Product specs:** Concise 2–3 word technical badges (e.g., `RTX 4070`, `32 GB DDR5`).

## Components

Component implementations live as individual HTML sticker sheet files in
`components/`. Each file contains the canonical, styled HTML components with
`<!-- COMPONENT: name -->` comment markers. Read each file before use.

- **Badge** → `@components/badge.html` — `badge-numeric`, `badge-dot`
- **Button** → `@components/button.html` — `button-primary`, `button-icon`, `button-with-icon`
- **Card** → `@components/card.html` — `card-elevated`, `card-action`, `card-interactive`, `card-interactive-2`
- **Typography** → `@components/typography.html` — `typography-display`, `typography-body`, `typography-label`
