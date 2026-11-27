# PCShop HomePage — Gaming & Technology — Stitch Output

Design outputs for the **Gaming & Technology** homepage concept. V1 and V2 have been generated.

## Artifact Inventory

| File | Description | Status |
|------|-------------|--------|
| `v1-generated.png` | V1 mockup from Google Stitch (462×747 px) | ✓ Generated |
| `v1-code.html` | V1 generated HTML from Stitch | ✓ Generated |
| `v1-prompt.md` | Exact prompt used for V1 generation | ✓ Generated |
| `DESIGN.md` | Design system spec exported from Stitch | ✓ Generated |
| `revision-v2-prompt.md` | Targeted revision prompt prepared for V2 | ✓ Prepared |
| `v2-generated.png` | V2 revised mockup (467×756 px) | ✓ Generated |
| `v2-code.html` | V2 generated HTML from Stitch | ✓ Generated |
| `v2-prompt.md` | Exact prompt used for V2 generation | ✓ Generated |
| `approved-design-guidance.md` | Implementation guidance derived from V2 | ✓ Created |

## Current Reference Design

**Use `v2-generated.png` and `v2-code.html` as the reference for React implementation.**  
V1 artifacts are preserved for history and comparison — do not delete.

## V1 → V2 Changes

| Change | V1 | V2 |
|--------|----|----|
| Product grid | 4-col (4+2 unbalanced) | 3-col 3+3 balanced |
| Availability indicator | Absent | "In stock" in `#22D3EE` cyan on all 6 cards |
| Footer link contrast | `#60607A` on `#070708` ≈ 2.5:1 ⚠ | `#A0A0C0` on `#070708` ≈ 7.1:1 ✓ |
| Score | 57/65 | 60/65 |

## Approval Status

**Conditionally approved (V2)** — awaiting project owner sign-off.

All minimum score thresholds met (all visual quality dimensions ≥4, accessibility ≥4). V3 not required.

## Remaining Corrections for Implementation

| Issue | Required action |
|-------|----------------|
| Product images | Replace Stitch mock images with backend `imageUrls[]` API field (use dark studio-lit photography) |
| Availability color | Must use `#22D3EE` cyan — green is forbidden in this theme |
| Footer links | Must use `#A0A0C0` or brighter on `#070708` background — never revert to `#60607A` |
| Glow effects | Card hover glow: `box-shadow: 0 0 24px rgba(139, 92, 246, 0.35)` — standard CSS, achievable in Tailwind |

See `approved-design-guidance.md` for complete implementation guidance.