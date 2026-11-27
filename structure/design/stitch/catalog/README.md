# PCShop CatalogPage — Google Stitch Generation Guide

This directory contains all materials needed to generate, review, and preserve CatalogPage designs in Google Stitch.

## Overview

The CatalogPage is generated as a new page within each of the three existing Stitch projects. All three themes use the same catalog scenario (Gaming Laptop category, RAM = 32 GB active filter) so designs can be compared consistently.

## Directory Structure

```
catalog/
├── README.md                    ← This file
├── backend-capabilities.md      ← Verified API capabilities and limitations
├── mock-products.md             ← 12 mock gaming laptops for catalog demo
├── premium-prompt.md            ← Stitch prompt for Premium Minimalism CatalogPage
├── gaming-prompt.md             ← Stitch prompt for Gaming & Technology CatalogPage
├── professional-prompt.md       ← Stitch prompt for Modern Technology Store CatalogPage
├── review-checklist.md          ← 13-dimension + catalog-specific review criteria
├── premium/                     ← Premium theme output directory
│   └── README.md
├── gaming/                      ← Gaming theme output directory
│   └── README.md
└── professional/                ← Professional theme output directory
    └── README.md
```

## Status

| Theme | Prompt | Generated | Reviewed | Approved |
|-------|--------|:---------:|:--------:|:--------:|
| Premium Minimalism | ✓ Ready | ☐ | ☐ | ☐ |
| Gaming & Technology | ✓ Ready | ☐ | ☐ | ☐ |
| Modern Technology Store | ✓ Ready | ☐ | ☐ | ☐ |

---

## Step-by-Step Generation Instructions

### Prerequisites

Before generating CatalogPage designs, confirm:

- [ ] All three HomePage V2 designs are saved in their respective Stitch projects
- [ ] HomePage V1 and V2 artifacts are confirmed in `homepage/{theme}/` directories
- [ ] The correct Stitch project is open for the theme being generated
- [ ] You are working at **1440px desktop viewport width**

---

### Step 1 — Open the Correct Stitch Project

Each theme has its own Stitch project. Open the project for the theme you are generating:

| Theme | Stitch project name |
|-------|---------------------|
| Premium Minimalism | The project where `premium/v1-generated.png` and `v2-generated.png` were created |
| Gaming & Technology | The project where `gaming/v1-generated.png` and `v2-generated.png` were created |
| Modern Technology Store | The project where `professional/v1-generated.png` and `v2-generated.png` were created |

**Do not start a new project.** CatalogPage must be a new page in the existing project.

---

### Step 2 — Confirm Existing Pages Are Intact

Before generating, verify in Stitch that:
- HomePage V1 page is present and unmodified
- HomePage V2 page is present and unmodified

If either page is missing, do not proceed — recover from the original exported files in `homepage/{theme}/v1-code.html` and `v2-code.html`.

---

### Step 3 — Prepare the Prompt

Open the theme-specific prompt file:

| Theme | Prompt file |
|-------|------------|
| Premium Minimalism | `catalog/premium-prompt.md` |
| Gaming & Technology | `catalog/gaming-prompt.md` |
| Modern Technology Store | `catalog/professional-prompt.md` |

Copy the full prompt content. Each prompt is self-contained — Google Stitch cannot read files from this repository.

---

### Step 4 — Reference the HomePage V2 Design

In Stitch, provide the HomePage V2 as a visual reference:
- Upload `homepage/{theme}/v2-generated.png` as the reference image
- Mention in the prompt that the new CatalogPage should visually extend the existing V2 design

The prompts already include this instruction. No additional setup is needed.

---

### Step 5 — Generate the CatalogPage

Paste the full prompt into Stitch and generate. The expected output is:

- A complete 1440px desktop CatalogPage
- Two-column layout (filter sidebar + catalog main)
- 6 gaming laptop product cards in a 3×2 grid
- Active filter chip: "RAM: 32 GB ×"
- Sort bar + result count
- Pagination

---

### Step 6 — Export and Save Artifacts

After generation, export and save to `catalog/{theme}/`:

| Artifact | Filename | Notes |
|----------|----------|-------|
| Screenshot | `v1-generated.png` | Full-page screenshot or Stitch-captured viewport |
| Generated HTML | `v1-code.html` | Export raw HTML from Stitch; do not prettify |
| Exact prompt used | `v1-prompt.md` | Copy the exact text that was submitted — not the template |
| Design system export | `DESIGN.md` | Only if Stitch exports a new design spec; do not create manually |

**Use `v1-` prefix for the first CatalogPage generation.** If a revision is needed, use `v2-` for the revised version.

**Do not overwrite `v1-` artifacts with `v2-` files.** Both versions must be preserved.

---

### Step 7 — Preserve Exact Prompt

Save the **exact text** you submitted to Stitch in `v1-prompt.md`. This is for reproducibility — the template prompts in this directory are specifications, not necessarily the exact text that was submitted.

If you modified the template prompt before submission, record all modifications in `v1-prompt.md`.

---

### Step 8 — Review the Design

Use `catalog/review-checklist.md` to evaluate the generated design against:
- 13 visual quality dimensions (target ≥ 4/5)
- 13 catalog-specific acceptance checks (target ≥ 4/5)
- Measurable accessibility pass/fail checks

Record the review results in the checklist.

---

### Step 9 — Save DESIGN.md If Generated

If Stitch exports a new design system specification for the CatalogPage:
- Save it as `catalog/{theme}/DESIGN.md`
- **Do not overwrite** `homepage/{theme}/DESIGN.md`
- Note in the README which tokens were added for the CatalogPage vs which were inherited from the HomePage

If Stitch does not generate a separate design system export, do not create `DESIGN.md` manually.

---

## Catalog Scenario Summary

| Property | Value |
|----------|-------|
| Product type | Laptop |
| Category | Gaming Laptop |
| Active filter | RAM = 32 GB |
| Visible products | 6 (filtered) |
| Total products (no filter) | 12 |
| Sort | Price: High to Low |
| Page | 1 of 1 (filtered view) |

All three themes use this identical scenario so results are directly comparable.

---

## Catalog Mock Products

The 6 products visible in the filtered catalog view (all three themes):

| # | Product | Price | Badges |
|---|---------|-------|--------|
| 1 | FORGE Gaming Laptop 15" | $2,799 | "RTX 4080 Ti" / "32 GB DDR5" |
| 2 | ARCTUS Gaming Laptop 17" | $2,299 | "RTX 4080" / "32 GB DDR5" |
| 3 | KORA Gaming Laptop 17" | $2,099 | "RTX 4070 Ti" / "32 GB DDR5" |
| 4 | ECHO Gaming Laptop 14" | $1,999 | "RTX 4070 Ti" / "32 GB DDR5" |
| 5 | LYNX Gaming Laptop 15" | $1,899 | "RTX 4070" / "32 GB DDR5" |
| 6 | APEX Gaming Laptop 15" | $1,799 | "RTX 4070" / "32 GB DDR5" |

Full dataset (12 products) and filter values in `catalog/mock-products.md`.

---

## Common Issues

| Issue | Likely cause | Action |
|-------|-------------|--------|
| Stitch generates only the filter sidebar | Prompt too long — Stitch focused on sidebar | Regenerate emphasizing Step 10 (product grid) |
| Product cards differ from HomePage V2 | Stitch used generic card design | Add "product cards must match the existing V2 homepage cards exactly" to prompt |
| Green used for availability in Gaming theme | Stitch default availability colors | Add explicit instruction: "gaming availability must use cyan `#22D3EE`, never green" |
| Price range slider appears | Stitch adds common e-commerce features | Remove slider in revision; add "do not add a price range slider" explicitly |
| Faceted counts appear ("RTX 4070 (3)") | Stitch adds common filter features | Remove in revision; add "do not add product counts next to filter values" |
| Filter sidebar too visually heavy | Stitch made sidebar too prominent | Request revision: "sidebar should be visually lighter than the product grid" |