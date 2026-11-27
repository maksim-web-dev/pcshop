# PCShop CatalogPage — Premium Minimalism — Stitch Output

Design outputs for the **Premium Minimalism** CatalogPage. No artifacts generated yet.

## Artifact Inventory

| File | Description | Status |
|------|-------------|--------|
| `v1-generated.png` | V1 CatalogPage mockup from Google Stitch | ☐ Pending generation |
| `v1-code.html` | V1 generated HTML from Stitch | ☐ Pending generation |
| `v1-prompt.md` | Exact prompt used for V1 generation | ☐ Pending generation |
| `DESIGN.md` | Design system spec exported from Stitch (only if generated) | ☐ Pending generation |

## Generation Instructions

1. Open the existing **Premium Minimalism** Stitch project (the one containing `v1-generated.png` and `v2-generated.png` for the HomePage)
2. Confirm that HomePage V1 and V2 pages are intact in the project — do not proceed if they are missing
3. Upload `../homepage/premium/v2-generated.png` as a visual reference in Stitch
4. Use the full prompt from `catalog/premium-prompt.md` — copy the entire content
5. Set the viewport to **1440px desktop width**
6. Create a new page called "CatalogPage - Premium Minimalism" — do not modify existing pages
7. Generate and export the result

See `catalog/README.md` for the complete step-by-step guide.

## Prompt Reference

**Template:** `catalog/premium-prompt.md`

After generation, save the exact submitted text to `v1-prompt.md` (this may differ from the template if any adjustments were made).

## Design Reference

**HomePage V2 reference:** `../homepage/premium/v2-generated.png`

The CatalogPage must visually extend the Premium Minimalism HomePage V2. Key elements to preserve:

- Warm `#FAFAF8` page background — no pure white in content areas
- Playfair Display 400 for section headings (result count heading, breadcrumb section)
- DM Sans for all UI text: navigation, filter labels, product names, prices, badges
- Product card design from V2: white `#FFFFFF` card, `1px #E5E0DB` border, 4px radius
- Availability indicator: "In stock" in DM Sans 12px 400 `#5C5C5C` (no dot, no color)
- CTA button: `#1A1A1A` fill, `#FAFAF8` text, 4px radius
- Filter sidebar: minimal, blends with page — no heavy border or dark background
- Active filter chip: rectangular (no pill shapes), `#F4F3F0` background
- 80px page gutters — whitespace is structural
- Footer: `#1A1A1A` background, no decorative top line

## Catalog Scenario

| Property | Value |
|----------|-------|
| Product type | Laptop |
| Category | Gaming Laptop |
| Active filter | RAM = 32 GB |
| Products shown | 6 (FORGE, ARCTUS, KORA, ECHO, LYNX, APEX) |
| Sort | Price: High to Low |
| Page | 1 of 1 |

## Approval Status

**Not generated** — awaiting Google Stitch generation (manual step).

## Review Criteria

Use `catalog/review-checklist.md` after generation. Target ≥ 4/5 on all visual quality dimensions and catalog-specific checks.

**Premium-specific watch points:**
- Filter sidebar must NOT have dark background or strong borders — must blend with `#FAFAF8`
- Active filter chip must NOT be pill-shaped — 2px or 4px radius only
- Availability must NOT use color dot — text only "In stock" in `#5C5C5C`
- No decorative accent colors anywhere in filter or sort UI
- Generous whitespace in product grid — 24px card gap, 80px gutters