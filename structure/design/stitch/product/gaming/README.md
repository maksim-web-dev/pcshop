# ProductPage — Gaming & Technology — Output Directory

**Theme:** Gaming & Technology  
**Status:** Awaiting generation  
**Prompt:** `../gaming-prompt.md`

---

## Artifact Inventory

| File | Description | Status |
|------|-------------|--------|
| `v1-generated.png` | Stitch screenshot — 462 × 757 px | ✓ Generated |
| `v1-code.html` | Stitch HTML source output — 553 lines | ✓ Generated |
| `v1-prompt.md` | Prompt used for V1 generation | ✓ Saved |
| `approved-design-guidance.md` | Normalized design guidance for implementation | ✓ Created |

**Approval status:** Conditionally approved — 60/65 — awaiting human sign-off

---

## Expected Visual Characteristics

Based on `../gaming-prompt.md` and `../../../stitch/catalog/gaming/approved-design-guidance.md`:

| Element | Expected value |
|---------|---------------|
| Page background | `#0A0A0F` near-black |
| Product card background | `#111118` elevated dark surface |
| Primary text | `#F0F0FF` near-white |
| Secondary text | `#A0A0C0` |
| Product name font | Inter 700, 26px `#F0F0FF` |
| Price font | Inter 700, 32px `#F0F0FF` |
| CTA button | Purple gradient `#8B5CF6` → `#5516BE`, height 48px |
| CTA label | Rajdhani Bold UPPERCASE "ADD TO CART" |
| Button radius | 6px |
| Availability | "● IN STOCK" cyan dot + text `#22D3EE` |
| Spec badges | 2 badges (RTX 4070, 32 GB DDR5), `#16161E` bg, cyan text |
| Section headings | Rajdhani Bold 700 UPPERCASE — "ABOUT THIS PRODUCT", "SPECIFICATIONS", "YOU MAY ALSO LIKE" |
| Footer | `#070708` background, purple-to-cyan top gradient line |
| Card hover | Purple glow `0 0 24px rgba(139, 92, 246, 0.35)` |
| Left gallery column | 480px, dark atmospheric product photography |

## Key Anti-Patterns to Watch For

- Any green color anywhere — green is FORBIDDEN in this theme
- Light backgrounds in content areas (everything must be dark)
- Sentence case CTA button — must be "ADD TO CART" (all caps)
- Pill-shaped buttons (must be 6px radius)
- Availability in any color other than cyan `#22D3EE`
- Rating stars, delivery promises, or discount badges

---

## Review Instructions

After generation, score using `../review-checklist.md`.

Minimum passing threshold:
- Each of dimensions 1–8 and 10–13: ≥ 4
- Dimension 9 (accessibility): ≥ 3
- Target total: ≥ 56 / 65

Record findings in `../review-v1.md` (created after all three themes are generated).

---

## Related Files

- `../gaming-prompt.md` — Full Stitch prompt
- `../review-checklist.md` — Scoring rubric
- `../backend-capabilities.md` — API reference
- `../mock-product.md` — Mock data used in prompt
- `../../../pages/product.md` — Full design specification
- `../../../stitch/catalog/gaming/approved-design-guidance.md` — CatalogPage baseline
- `../../../stitch/homepage/gaming/approved-design-guidance.md` — HomePage baseline