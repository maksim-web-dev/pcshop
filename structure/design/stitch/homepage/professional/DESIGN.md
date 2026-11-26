---
name: "PCShop Modern Technology Store"
description: "Clean, information-dense commercial electronics retailer design system built on Inter typography, cool light-gray surfaces, crisp white product cards, and trusted blue accents."
---

## Overview

PCShop Modern Technology Store is a commercial computer hardware e-commerce design system built for practical shoppers and IT professionals aged 25–50. It pairs a structured, high-clarity **Corporate / Modern** retail aesthetic with familiar e-commerce conventions—visible search, clear category navigation, scannable specification badges, and unambiguous pricing—to support confident hardware comparisons without visual clutter or promotional noise.

## Colors

The palette is strictly light-mode across the storefront, anchored by a neutral cool-toned light gray page canvas (`#F3F4F6`), crisp white product cards (`#FFFFFF`), near-black primary typography (`#111827`), and a single trusted blue accent (`#2563EB`) for primary actions, active navigation, and focus states. Only the global footer uses a dark `#111827` surface for clear page termination.

- **Primary (`#2563EB`):** Primary CTA buttons, links, cart badge, active navigation underline, and focus rings. Darkens to `#1D4ED8` on hover.
- **Secondary (`#374151`):** Graphite tone for secondary buttons, utility icons, and resting navigation links.
- **Surfaces:** `#F3F4F6` page and section background; `#FFFFFF` for cards, header, and hero; `#EFF6FF` pale blue tint for subtle hover/hero accents.
- **Text:** `#111827` primary text, `#4B5563` secondary text, `#6B7280` muted captions on light surfaces, `#9CA3AF` muted links on dark footer.
- **Semantic:** `#059669` exclusively for "In stock" availability indicators.

```yaml
colors:
  primary: "#2563EB"
  on-primary: "#FFFFFF"
  primary-hover: "#1D4ED8"
  primary-tint: "#EFF6FF"
  secondary: "#374151"
  on-secondary: "#FFFFFF"
  surface: "#F3F4F6"
  surface-card: "#FFFFFF"
  on-surface: "#111827"
  on-surface-secondary: "#4B5563"
  on-surface-muted: "#6B7280"
  outline: "#E5E7EB"
  success: "#059669"
  success-text: "#047857"
  footer: "#111827"
  on-footer: "#FFFFFF"
  footer-muted: "#9CA3AF"
  footer-bottom: "#1F2937"
```

## Typography

A single typeface—**Inter**—handles every typographic role across the storefront. Hierarchy is established through weight (400, 500, 600, 700) and measured scale jumps rather than decorative fonts, italics, or all-caps headlines.

```yaml
typography:
  headline-lg:
    fontFamily: "Inter"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 48px
    letterSpacing: -0.4px
  headline-lg-mobile:
    fontFamily: "Inter"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 36px
    letterSpacing: -0.25px
  headline-md:
    fontFamily: "Inter"
    fontSize: 20px
    fontWeight: 600
    lineHeight: 28px
  title-md:
    fontFamily: "Inter"
    fontSize: 18px
    fontWeight: 700
    lineHeight: 24px
  title-sm:
    fontFamily: "Inter"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 20px
  body-lg:
    fontFamily: "Inter"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 24px
  body-md:
    fontFamily: "Inter"
    fontSize: 15px
    fontWeight: 400
    lineHeight: 22px
  body-sm:
    fontFamily: "Inter"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 20px
  label-lg:
    fontFamily: "Inter"
    fontSize: 15px
    fontWeight: 600
    lineHeight: 20px
  label-md:
    fontFamily: "Inter"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 20px
  label-sm:
    fontFamily: "Inter"
    fontSize: 12px
    fontWeight: 500
    lineHeight: 16px
  caption:
    fontFamily: "Inter"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 16px
```

## Layout & Spacing

The desktop layout targets a **1440px** viewport with **60px** left and right page gutters, **48px** vertical spacing between major sections, and a **3-column** product grid with **20px** gaps. Cards use **16px** internal padding for balanced information density.

```yaml
spacing:
  gutter-xs: 4px
  gutter-sm: 8px
  gutter-md: 12px
  card-pad: 16px
  grid-gap: 20px
  gutter-lg: 24px
  gutter-xl: 32px
  section: 48px
  page-gutter: 60px
  hero-py: 64px
```

## Elevation & Depth

Cards sit on a cool `#F3F4F6` surface with crisp `1px solid #E5E7EB` borders and subtle resting elevation (`0 1px 3px rgba(0, 0, 0, 0.06)`). On hover, cards lift to `0 4px 12px rgba(0, 0, 0, 0.10)` paired with a subtle blue-tinted border (`rgba(37, 99, 235, 0.2)` or `#2563EB` on category cards). The sticky header adds `0 2px 8px rgba(0, 0, 0, 0.08)` on scroll while keeping its `#FFFFFF` background.

## Shapes

Sharp, practical geometry defines the store. Badges use `4px` corners, buttons and inputs use `6px` corners, and product/category cards and dropdowns use `8px` corners.

```yaml
rounded:
  sm: 4px
  md: 6px
  DEFAULT: 8px
  full: 9999px
```

## Motion & Micro-interaction

Transitions are crisp and functional, limited to color, opacity, and box-shadow changes within `150ms` so controls feel immediate without decorative animation.

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
```

## Voice & Content Strategy

- **Tone of voice:** Direct, practical, and trustworthy. Focus on hardware specifications, availability, and clear pricing without hype, urgency countdowns, or promotional buzzwords.
- **Capitalisation:** Sentence case for hero headlines ("Build Your Perfect PC") and body copy; concise title case for navigation links, category names, and section headings.
- **Product metadata:** Show hardware model name, single fixed price (`$1,799`), 2–3 concise spec badges, optional stock status ("In stock"), and an always-visible "Add to Cart" button. Never show star ratings or discount badges.

## Components

Component implementations live as individual HTML sticker sheet files in
`components/`. Each file contains the canonical, styled HTML components with
`<!-- COMPONENT: name -->` comment markers. Read each file before use.

- **Badge** → `@components/badge.html` — `badge-numeric`, `badge-dot`
- **Button** → `@components/button.html` — `button-primary`, `button-icon`, `button-with-icon`
- **Card** → `@components/card.html` — `card-elevated`, `card-action`, `card-interactive`, `card-interactive-2`
- **Searchbar** → `@components/searchbar.html` — `searchbar-standard`, `searchbar-with-suggestions`
- **Typography** → `@components/typography.html` — `typography-display`, `typography-body`, `typography-label`
