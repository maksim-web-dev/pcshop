# PCShop CatalogPage — Modern Technology Store — Stitch Output

Design outputs for the **Modern Technology Store** (Professional) CatalogPage. No artifacts generated yet.

## Artifact Inventory

| File | Description | Status |
|------|-------------|--------|
| `v1-generated.png` | V1 CatalogPage mockup from Google Stitch | ☐ Pending generation |
| `v1-code.html` | V1 generated HTML from Stitch | ☐ Pending generation |
| `v1-prompt.md` | Exact prompt used for V1 generation | ☐ Pending generation |
| `DESIGN.md` | Design system spec exported from Stitch (only if generated) | ☐ Pending generation |

## Generation Instructions

1. Open the existing **Modern Technology Store** Stitch project (the one containing `v1-generated.png` and `v2-generated.png` for the HomePage)
2. Confirm that HomePage V1 and V2 pages are intact in the project — do not proceed if they are missing
3. Upload `../homepage/professional/v2-generated.png` as a visual reference in Stitch
4. Use the full prompt from `catalog/professional-prompt.md` — copy the entire content
5. Set the viewport to **1440px desktop width**
6. Create a new page called "CatalogPage - Modern Technology Store" — do not modify existing pages
7. Generate and export the result

See `catalog/README.md` for the complete step-by-step guide.

## Prompt Reference

**Template:** `catalog/professional-prompt.md`

After generation, save the exact submitted text to `v1-prompt.md` (this may differ from the template if any adjustments were made).

## Design Reference

**HomePage V2 reference:** `../homepage/professional/v2-generated.png`

The CatalogPage must visually extend the Modern Technology Store HomePage V2. Key elements to preserve:

- Cool light gray `#F3F4F6` page canvas — neutral and professional
- White `#FFFFFF` cards and sidebar panel
- Blue `#2563EB` as the sole accent — no second accent color
- Always-visible search input in header on desktop (key differentiator)
- Inter throughout — single typeface, hierarchy through weight
- Product card: white `#FFFFFF` card, `1px #E5E7EB` border, 8px radius, blue hover shadow
- Availability: 6px solid `#059669` green dot + "In stock" Inter 12px 500 `#047857` text
- CTA button: `#2563EB` fill, `#FFFFFF` text, 6px radius, "Add to Cart"
- Filter sidebar: white card with `#E5E7EB` border — clean and professional
- Active filter chip: `#EFF6FF` blue tint background, `#2563EB` text, pill shape
- Breadcrumb using Inter 14px `#4B5563`
- 3 badges per card (includes CPU badge: "Intel i7", "Ryzen 9", etc.)
- Footer: `#111827` background, no decorative top line

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

**Professional-specific watch points:**
- Always-visible search input must be present in the header (not hidden behind icon)
- Filter sidebar must be a white card with clean borders — not merged with page background
- Blue `#2563EB` must be the ONLY accent — no purple, no cyan, no warm colors
- Green `#059669` / `#047857` is permitted ONLY for the availability indicator
- Active filter chip should be pill-shaped with `#EFF6FF` blue tint background
- 3 badges per card (not 2) — includes CPU brand badge
- Do not add admin dashboard styling (gray stripes, table rows, etc.) — this is a commercial store
- Footer links: `#9CA3AF` at rest (not darker), hover to `#FFFFFF`