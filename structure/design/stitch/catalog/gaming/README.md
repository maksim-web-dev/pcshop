# PCShop CatalogPage — Gaming & Technology — Stitch Output

Design outputs for the **Gaming & Technology** CatalogPage. No artifacts generated yet.

## Artifact Inventory

| File | Description | Status |
|------|-------------|--------|
| `v1-generated.png` | V1 CatalogPage mockup from Google Stitch | ☐ Pending generation |
| `v1-code.html` | V1 generated HTML from Stitch | ☐ Pending generation |
| `v1-prompt.md` | Exact prompt used for V1 generation | ☐ Pending generation |
| `DESIGN.md` | Design system spec exported from Stitch (only if generated) | ☐ Pending generation |

## Generation Instructions

1. Open the existing **Gaming & Technology** Stitch project (the one containing `v1-generated.png` and `v2-generated.png` for the HomePage)
2. Confirm that HomePage V1 and V2 pages are intact in the project — do not proceed if they are missing
3. Upload `../homepage/gaming/v2-generated.png` as a visual reference in Stitch
4. Use the full prompt from `catalog/gaming-prompt.md` — copy the entire content
5. Set the viewport to **1440px desktop width**
6. Create a new page called "CatalogPage - Gaming & Technology" — do not modify existing pages
7. Generate and export the result

See `catalog/README.md` for the complete step-by-step guide.

## Prompt Reference

**Template:** `catalog/gaming-prompt.md`

After generation, save the exact submitted text to `v1-prompt.md` (this may differ from the template if any adjustments were made).

## Design Reference

**HomePage V2 reference:** `../homepage/gaming/v2-generated.png`

The CatalogPage must visually extend the Gaming & Technology HomePage V2. Key elements to preserve:

- Near-black `#0A0A0F` page background — always dark atmospheric (no light content areas)
- Card surfaces `#111118` — elevated dark cards
- Purple `#8B5CF6` for primary CTAs and cart badge
- Cyan `#22D3EE` for secondary states, availability, spec badges, focus rings, active filter states
- Rajdhani Bold 700 UPPERCASE for section headings, filter group labels
- Inter for product names, prices, navigation, filter values, pagination
- Product card: `#111118` card, `1px #1E1E2E` border, 6px radius, purple hover glow
- Availability: "In stock" in cyan `#22D3EE` — **green is FORBIDDEN**
- CTA button: purple gradient, Rajdhani UPPERCASE "ADD TO CART", 6px radius
- Filter sidebar: dark surface `#111118` or `#16161E` — no light backgrounds
- Active filter chip: pill shape, dark `#16161E` background, cyan text
- Footer: `#070708` background with 1px purple-to-cyan gradient top line
- Page margins: 60px desktop

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

**Gaming-specific watch points:**
- **NO green** anywhere — availability must be cyan `#22D3EE` only
- Filter sidebar must remain dark (`#111118` or `#16161E`) — no light backgrounds
- Rajdhani must be used for section headings, NOT for product names or prices
- Purple glow on card hover — `box-shadow: 0 0 24px rgba(139, 92, 246, 0.35)`
- Active filter chip must be pill-shaped with cyan text
- No blue, red, orange, yellow, or any non-purple/non-cyan accent colors
- Footer must have purple-to-cyan gradient top line