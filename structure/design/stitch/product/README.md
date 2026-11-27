# ProductPage — Google Stitch Generation Guide

**Version:** 1.0 (2026-11-27)  
**Status:** Prompts ready — awaiting Google Stitch generation and human review

---

## Overview

This directory contains everything needed to generate and review the ProductPage design for all three PCShop themes using Google Stitch.

The ProductPage is the product detail and purchase surface. It is the third page to be designed (after HomePage and CatalogPage). Each theme generates one `ProductPage - {Theme Name}` Stitch page.

---

## Directory Structure

```
product/
├── README.md                    ← This file
├── backend-capabilities.md      ← Verified API capabilities from source code
├── mock-product.md              ← Mock data: APEX Gaming Laptop 15"
├── review-checklist.md          ← 13-dimension scoring rubric + ProductPage-specific checks
├── premium-prompt.md            ← Google Stitch prompt for Premium Minimalism
├── gaming-prompt.md             ← Google Stitch prompt for Gaming & Technology
├── professional-prompt.md       ← Google Stitch prompt for Modern Technology Store
├── premium/                     ← Output: Premium Minimalism artifacts
├── gaming/                      ← Output: Gaming & Technology artifacts
└── professional/                ← Output: Modern Technology Store artifacts
```

---

## Generation Steps

### Step 1 — Open the correct Stitch project

Each theme has its own Stitch project. Use the **same project** that contains the existing HomePage V1, HomePage V2, and CatalogPage V1 designs.

| Theme | Stitch project name |
|-------|-------------------|
| Premium Minimalism | The project that has "ProductPage - Premium Minimalism" pages |
| Gaming & Technology | The project that has "ProductPage - Gaming & Technology" pages |
| Modern Technology Store | The project that has "ProductPage - Modern Technology Store" pages |

### Step 2 — Verify existing pages are intact

Before generating, confirm the existing pages are present and unchanged:
- HomePage V1 (original)
- HomePage V2 (approved revision)
- CatalogPage V1

**Do not modify or delete these pages.**

### Step 3 — Paste the prompt

Copy the full text from the relevant prompt file:

| Theme | Prompt file |
|-------|------------|
| Premium Minimalism | `premium-prompt.md` |
| Gaming & Technology | `gaming-prompt.md` |
| Modern Technology Store | `professional-prompt.md` |

Paste the entire prompt (from `## Prompt` through the end) into the Stitch generation input.

### Step 4 — Set viewport

Set the viewport to **1440px desktop** before generating.

### Step 5 — Generate

Run the generation. Wait for the full output including HTML source.

### Step 6 — Save artifacts

For each theme, save to the corresponding output directory:

| File | Destination |
|------|-------------|
| Screenshot (PNG) | `{theme}/v1-generated.png` |
| HTML source | `{theme}/v1-code.html` |
| Prompt used | `{theme}/v1-prompt.md` (copy of the prompt file) |

### Step 7 — Review

Use `review-checklist.md` to score each generated page. Minimum passing threshold:
- Dimensions 1–8 and 10–13: score ≥ 4 each
- Dimension 9 (accessibility direction): score ≥ 3
- Total score: aim for ≥ 56/65

Record results in `review-v1.md` (to be created after generation).

### Step 8 — Human approval

Present findings to the project owner. Do not proceed to implementation without sign-off.

### Step 9 — If V2 is needed

If a theme scores below threshold or has critical defects, generate a V2 using a revised prompt. Document changes in `{theme}/v2-prompt.md` and save new artifacts as `v2-generated.png` / `v2-code.html`.

---

## Design References

Each prompt instructs Stitch to reference the existing HomePage V2 and CatalogPage V1 designs from the same project. The ProductPage must:

- Reuse the identical header and footer
- Match the product card design from CatalogPage V1
- Preserve the ThemeSwitcher placement and style
- Use colors, typography, and spacing defined in the theme's approved design guidance

Approved design guidance files:
- `structure/design/stitch/homepage/{theme}/approved-design-guidance.md`
- `structure/design/stitch/catalog/{theme}/approved-design-guidance.md`

---

## Shared Design Specification

The full ProductPage specification (all themes) is in:
- `structure/design/pages/product.md`

This specification documents API integration, component requirements, loading/error states, accessibility, and responsive behavior. It is the authoritative reference for implementation — not for Stitch generation.

---

## Backend Capabilities

The `backend-capabilities.md` file documents all verified API endpoints used by the ProductPage:

| Endpoint | Purpose |
|----------|---------|
| `GET /api/products/:id` | Product detail (UUID path param) |
| `GET /api/categories/:id` | Category name + product type for breadcrumb |
| `GET /api/products?categoryId={id}&limit=4` | Related products (no dedicated endpoint) |

**Cart is Zustand-only — no cart API exists.**

---

## Status

| Theme | Prompt | Generated | Score | Reviewed | Approved |
|-------|:------:|:---------:|:-----:|:--------:|:--------:|
| Premium Minimalism | ✓ | ✓ 400×751 | 55/65 | ✓ | Pending sign-off |
| Gaming & Technology | ✓ | ✓ 462×757 | 60/65 | ✓ | Pending sign-off |
| Modern Technology Store | ✓ | ✓ 505×758 | 63/65 | ✓ | Pending sign-off |

**Review report:** `review-v1.md`  
**V2 generation recommended:** No — all issues are implementation-time corrections.