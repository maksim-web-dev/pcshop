# ProductPage — Premium Minimalism — Output Directory

**Theme:** Premium Minimalism  
**Status:** Awaiting generation  
**Prompt:** `../premium-prompt.md`

---

## Artifact Inventory

| File | Description | Status |
|------|-------------|--------|
| `v1-generated.png` | Stitch screenshot — 400 × 751 px | ✓ Generated |
| `v1-code.html` | Stitch HTML source output — 600 lines | ✓ Generated |
| `v1-prompt.md` | Prompt used for V1 generation | ✓ Saved |
| `approved-design-guidance.md` | Normalized design guidance for implementation | ✓ Created |

**Approval status:** Conditionally approved — 55/65 — awaiting human sign-off

---

## Expected Visual Characteristics

Based on `../premium-prompt.md` and `../../../stitch/catalog/premium/approved-design-guidance.md`:

| Element | Expected value |
|---------|---------------|
| Page background | `#FAFAF8` warm off-white |
| Product card background | `#FFFFFF` |
| Product name font | Playfair Display 400, 32px |
| Price font | DM Sans 700, 28px |
| Body text | DM Sans 400, 15px |
| CTA button background | `#1A1A1A` |
| CTA button text | `#FAFAF8` |
| Button radius | 4px |
| Availability | "In stock" text `#5C5C5C` — no dot, no color |
| Spec badges | 2 badges (RTX 4070, 32 GB DDR5), `#F4F3F0` bg |
| Footer | `#1A1A1A` background |
| Left gallery column width | 520px |
| Page gutters | 80px |
| Section heading font | Playfair Display 400 |
| Section heading sizes | "About this product" / "Specifications" / "You may also like" |

## Key Anti-Patterns to Watch For

- Any colored accent (blue, green, purple, cyan, gold) — only `#1A1A1A` graphite
- Gradients or glow effects anywhere
- Pill-shaped buttons (must be 4px radius)
- Playfair Display used for body text or prices
- Rating stars, delivery promises, or discount badges
- Dark backgrounds in content area (footer only)

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

- `../premium-prompt.md` — Full Stitch prompt
- `../review-checklist.md` — Scoring rubric
- `../backend-capabilities.md` — API reference
- `../mock-product.md` — Mock data used in prompt
- `../../../pages/product.md` — Full design specification
- `../../../stitch/catalog/premium/approved-design-guidance.md` — CatalogPage baseline
- `../../../stitch/homepage/premium/approved-design-guidance.md` — HomePage baseline