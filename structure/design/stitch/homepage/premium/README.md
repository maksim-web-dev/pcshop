# PCShop HomePage — Premium Minimalism — Stitch Output

Design outputs for the **Premium Minimalism** homepage concept. V1 and V2 have been generated.

## Artifact Inventory

| File | Description | Status |
|------|-------------|--------|
| `v1-generated.png` | V1 mockup from Google Stitch (383×751 px) | ✓ Generated |
| `v1-code.html` | V1 generated HTML from Stitch | ✓ Generated |
| `v1-prompt.md` | Exact prompt used for V1 generation | ✓ Generated |
| `DESIGN.md` | Design system spec exported from Stitch | ✓ Generated |
| `revision-v2-prompt.md` | Targeted revision prompt prepared for V2 | ✓ Prepared |
| `v2-generated.png` | V2 revised mockup (400×747 px) | ✓ Generated |
| `v2-code.html` | V2 generated HTML from Stitch | ✓ Generated |
| `v2-prompt.md` | Exact prompt used for V2 generation | ✓ Generated |
| `approved-design-guidance.md` | Implementation guidance derived from V2 | ✓ Created |

## Current Reference Design

**Use `v2-generated.png` and `v2-code.html` as the reference for React implementation.**  
V1 artifacts are preserved for history and comparison — do not delete.

## V1 → V2 Changes

| Change | V1 | V2 |
|--------|----|----|
| Product grid | 2×2 (4 products) | 3-column 3×2 (6 products) |
| Availability indicator | Absent | "In stock" in `#5C5C5C` on all cards |
| Category card CTA | No affordance | "Browse →" link on each card |
| Score | 53/65 | 55/65 |

## Approval Status

**Conditionally approved (V2)** — awaiting project owner sign-off.

All minimum score thresholds met (all visual quality dimensions ≥4, accessibility ≥4). V3 not required.

## Remaining Corrections for Implementation

| Issue | Required action |
|-------|----------------|
| STRIKER badge text | Use "Cherry MX" (not "Mechanical") — source: `mock-products.md` |
| SWIFT Mouse Pro badge | Use "25600 DPI", "Wireless" (not "26K DPI", "58g") — source: `mock-products.md` |
| Product images | Replace Stitch mock images with backend `imageUrls[]` API field |
| Product count | Confirm: 4 (original editorial) or 6 (V2 result) — human decision pending |

See `approved-design-guidance.md` for complete implementation guidance.