---
name: "PCShop Gaming & Technology"
description: "Dark, high-contrast gaming hardware e-commerce design system built around near-black studio surfaces, Rajdhani geometric display type, Inter UI copy, and disciplined purple (#8B5CF6) and cyan (#22D3EE) accents."
---

## Overview

PCShop Gaming & Technology is a performance-driven e-commerce design system targeting gamers, PC builders, and hardware enthusiasts aged 16–35. The visual language is dark, atmospheric, and decisive — presenting laptops, desktop towers, monitors, and peripherals like precision studio-lit hardware objects rather than cluttered consumer electronics.

The aesthetic combines **High-Contrast / Bold** display typography with **Low-Contrast Outlines** and controlled **Purple** and **Cyan** accents on deep neutral surfaces. There is zero tolerance for RGB rainbow clutter, warm/warning hues (red, green, yellow, orange), or light/white backgrounds.

## Colors

The palette is strictly dark-first and high-contrast. Deep near-black surfaces (`#0A0A0F` page ground, `#111118` elevated cards, `#070708` footer) create studio depth, while **Purple (`#8B5CF6`)** drives primary actions and **Cyan (`#22D3EE`)** highlights navigation, specs, and interactive focus states.

- **Primary (`#8B5CF6`):** Purple accent for active borders, cart count badge, and hover glow. Paired with `#6D3BD7` (`primary-dark`) and `#5516BE` (`primary-deep`) for accessible white-text CTA button gradients.
- **Secondary (`#22D3EE`):** Cyan accent for active/hover navigation underlines, parameter badge text, category tags, and focus rings.
- **Surfaces:** `#0A0A0F` base page ground, `#12101F` hero gradient end, `#111118` card surface, `#16161E` filter/dropdown surface, `#070708` deepest footer surface.
- **Text:** `#F0F0FF` primary text, `#A0A0C0` secondary/nav text, `#60607A` muted/footer link text.

```yaml
colors:
  primary: "#8B5CF6"
  on-primary: "#0A0A0F"
  primary-dark: "#6D3BD7"
  on-primary-dark: "#F0F0FF"
  primary-deep: "#5516BE"
  on-primary-deep: "#F0F0FF"
  primary-tint: "#1D1635"
  on-primary-tint: "#22D3EE"
  secondary: "#22D3EE"
  on-secondary: "#0A0A0F"
  surface: "#0A0A0F"
  on-surface: "#F0F0FF"
  surface-hero: "#12101F"
  on-surface-hero: "#F0F0FF"
  surface-card: "#111118"
  on-surface-card: "#F0F0FF"
  surface-elevated: "#16161E"
  on-surface-elevated: "#F0F0FF"
  surface-footer: "#070708"
  on-surface-footer: "#A0A0C0"
  on-surface-variant: "#A0A0C0"
  muted: "#8585A3"
  outline: "#1E1E2E"
```

## Typography

A dual-typeface system pairs **Rajdhani** for angular, geometric uppercase display headlines, section titles, and CTA labels with **Inter** for crisp, scannable product names, prices, specs, and navigation links. No italic text is used anywhere, and all display headlines are uppercase.

```yaml
typography:
  display-lg:
    fontFamily: "Rajdhani"
    fontSize: 72px
    fontWeight: 700
    lineHeight: 76px
    letterSpacing: 2.88px
  display-lg-mobile:
    fontFamily: "Rajdhani"
    fontSize: 32px
    fontWeight: 700
    lineHeight: 36px
    letterSpacing: 1.28px
  headline-lg:
    fontFamily: "Rajdhani"
    fontSize: 32px
    fontWeight: 600
    lineHeight: 38px
    letterSpacing: 0.64px
  headline-md:
    fontFamily: "Rajdhani"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 26px
    letterSpacing: 0.4px
  title-md:
    fontFamily: "Inter"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 24px
    letterSpacing: 0px
  title-sm:
    fontFamily: "Inter"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
    letterSpacing: 0px
  body-md:
    fontFamily: "Inter"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
    letterSpacing: 0px
  label-lg:
    fontFamily: "Rajdhani"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 20px
    letterSpacing: 0.8px
  label-md:
    fontFamily: "Inter"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
    letterSpacing: 0px
  label-sm:
    fontFamily: "Inter"
    fontSize: 12px
    fontWeight: 600
    lineHeight: 16px
    letterSpacing: 0px
  caption:
    fontFamily: "Inter"
    fontSize: 11px
    fontWeight: 600
    lineHeight: 14px
    letterSpacing: 0.2px
```

## Layout & Spacing

Desktop-first **1440px** layout with **60px** horizontal page gutters, **56px** vertical spacing between major sections, and a **4-column** product grid with **20px** card gaps and **16px** internal card padding. Medium-high density showcases 4–6 hardware items cleanly without crowding. On smaller viewports, grids collapse cleanly from 4 columns to 2 columns on tablet and 1 column on mobile.

```yaml
spacing:
  gutter-xs: 4px
  gutter-sm: 8px
  gutter-md: 16px
  gutter-lg: 20px
  gutter-xl: 32px
  section: 56px
  page-margin: 60px
  hero-py: 80px
```

## Elevation & Depth

Depth is achieved through subtle tonal stepping (`#070708` footer → `#0A0A0F` ground → `#111118` cards → `#16161E` dropdowns) and crisp `1px` `#1E1E2E` hairline borders. On hover, cards and primary CTAs reveal a controlled purple glow (`rgba(139, 92, 246, 0.35)`), while links and focus rings use a subtle cyan glow (`rgba(34, 211, 238, 0.30)`). Glows are decorative only and never the sole state indicator.

## Shapes

Sharp, technical geometry with a **6px** default corner radius on cards and primary buttons, **3px** on compact spec badges, and **9999px** on circular count badges.

```yaml
rounded:
  xs: 3px
  sm: 4px
  DEFAULT: 6px
  md: 8px
  lg: 12px
  full: 9999px
```

## Motion & Micro-interaction

Motion is crisp and immediate. Interactive state transitions (button hover, cyan nav underline, purple card border glow) resolve in `150ms` with `ease-out`, while dropdowns enter in `200ms` with `cubic-bezier(0.2, 0, 0, 1)`. Nothing loops or pulses at rest.

```yaml
motion:
  state-change:
    duration: 150ms
    delay: 0ms
    timingFunction: ease-out
  surface-enter:
    duration: 200ms
    delay: 0ms
    timingFunction: cubic-bezier(0.2, 0, 0, 1)
  surface-exit:
    duration: 120ms
    delay: 0ms
    timingFunction: cubic-bezier(0.3, 0, 1, 1)
```

## Voice & Content Strategy

- **Tone of voice:** Assertive, technical, and concise. Performance hardware speaks through exact specifications (`RTX 4070`, `240 Hz`, `64 GB DDR5`) rather than marketing fluff.
- **Capitalisation:** Display headlines and section titles are `UPPERCASE`; product names, navigation links, and UI controls use Title Case or Sentence case.
- **Button labels:** Direct action verbs (`SHOP LAPTOPS`, `ADD TO CART`).
- **Pricing & specs:** Fixed single prices (`$1,799`) with `tabular-nums`, no star ratings, no promotional clutter.

## Components

Component implementations live as individual HTML sticker sheet files in
`components/`. Each file contains the canonical, styled HTML components with
`<!-- COMPONENT: name -->` comment markers. Read each file before use.

- **Badge** → `@components/badge.html` — `badge-numeric`, `badge-dot`
- **Button** → `@components/button.html` — `button-primary`, `button-icon`, `button-with-icon`
- **Card** → `@components/card.html` — `card-elevated`, `card-action`, `card-interactive`, `card-interactive-2`
- **Typography** → `@components/typography.html` — `typography-display`, `typography-body`, `typography-label`
