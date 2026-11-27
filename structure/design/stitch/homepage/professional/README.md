# PCShop HomePage — Modern Technology Store — Stitch Output

Design outputs for the **Modern Technology Store** (Professional) homepage concept. V1 and V2 have been generated.

## Artifact Inventory

| File | Description | Status |
|------|-------------|--------|
| `v1-generated.png` | V1 mockup from Google Stitch (462×742 px) | ✓ Generated |
| `v1-code.html` | V1 generated HTML from Stitch | ✓ Generated |
| `v1-prompt.md` | Exact prompt used for V1 generation | ✓ Generated |
| `DESIGN.md` | Design system spec exported from Stitch | ✓ Generated |
| `revision-v2-prompt.md` | Targeted revision prompt prepared for V2 | ✓ Prepared |
| `v2-generated.png` | V2 revised mockup (463×747 px) | ✓ Generated |
| `v2-code.html` | V2 generated HTML from Stitch | ✓ Generated |
| `v2-prompt.md` | Exact prompt used for V2 generation | ✓ Generated |
| `approved-design-guidance.md` | Implementation guidance derived from V2 | ✓ Created |

## Current Reference Design

**Use `v2-generated.png` and `v2-code.html` as the reference for React implementation.**  
V1 artifacts are preserved for history and comparison — do not delete.

## V1 → V2 Changes

| Change | V1 | V2 |
|--------|----|----|
| Hero background | White `#FFFFFF` (generic) | Blue tint `#EFF6FF` (distinctive) |
| Hero subheadline | Contains "fast delivery" ⚠ | "hardware you can trust, clearly specified" ✓ |
| Category card affordance | No "Browse" link | "Browse" link on all 4 cards |
| Score | 52/65 | 56/65 |

## Approval Status

**Conditionally approved (V2)** — awaiting project owner sign-off.

All minimum score thresholds met (all visual quality dimensions ≥4, accessibility ≥4). V3 not required.

## Remaining Corrections for Implementation

| Issue | Required action |
|-------|----------------|
| Product images | Replace Stitch mock images with backend `imageUrls[]` API field |
| "In stock" dot | Implement as 6px solid green circle (`#059669`), not outlined ring or icon |
| Sort control | Required above product grid — connects to `?sortBy=&sortDir=` query params |
| Footer links | Use `#9CA3AF` at rest, `#FFFFFF` on hover — do not darken |
| Search input | Always visible on desktop (≥1024px); never hidden behind icon on desktop |

See `approved-design-guidance.md` for complete implementation guidance.