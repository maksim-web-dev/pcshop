# ProductPage — Modern Technology Store — Output Directory

**Theme:** Modern Technology Store (Professional)  
**Status:** Awaiting generation  
**Prompt:** `../professional-prompt.md`

---

## Artifact Inventory

| File | Description | Status |
|------|-------------|--------|
| `v1-generated.png` | Stitch screenshot — 1440px desktop | Not yet generated |
| `v1-code.html` | Stitch HTML source output | Not yet generated |
| `v1-prompt.md` | Prompt used for V1 generation | Not yet generated |

---

## Expected Visual Characteristics

Based on `../professional-prompt.md` and `../../../stitch/catalog/professional/approved-design-guidance.md`:

| Element | Expected value |
|---------|---------------|
| Page background | `#F3F4F6` cool light gray |
| Product card background | `#FFFFFF` |
| Primary text | `#111827` near-black |
| Secondary text | `#4B5563` |
| Product name font | Inter 700, 26px |
| Price font | Inter 700, 32px |
| CTA button background | `#2563EB` blue, hover `#1D4ED8` |
| CTA label | Inter 600 "Add to Cart" (sentence case) |
| Button radius | 6px |
| Availability | Green dot `#059669` + "In stock" text `#047857` |
| Spec badges | **3 badges** (RTX 4070, 32 GB DDR5, Intel i7), `#F3F4F6` bg |
| Section headings | Inter 700, 20px — "About this product", "Technical specifications", "Related products" |
| Header search | Always-visible search input (≥300px wide) — key differentiator |
| Footer | `#111827` background |
| ThemeSwitcher | "[Professional ▾]" |
| Left gallery column | 480px |
| Page gutters | 60px |

## Key Differentiators vs Other Themes

- **3 spec badges** (not 2) — adds CPU badge "Intel i7"
- **Always-visible search input** in header (Premium has compact input; Gaming has icon only)
- **Green availability indicator** — sole use of green; forbidden elsewhere
- Blue is the ONLY accent color — no purple, cyan, orange

## Key Anti-Patterns to Watch For

- Purple, cyan, or warm accent colors — only `#2563EB` blue
- Green anywhere except availability indicator
- All-caps headings — sentence case only
- Pill-shaped buttons (8px for cards, 6px for buttons)
- Hidden or icon-only search input
- Rating stars, delivery promises, or discount badges
- Dark backgrounds in content area (footer only)

---

## Review Instructions

After generation, score using `../review-checklist.md`.

Minimum passing threshold:
- Each of dimensions 1–8 and 10–13: ≥ 4
- Dimension 9 (accessibility): ≥ 3
- Target total: ≥ 56 / 65

**Note on CatalogPage V1 score:** The Modern Technology Store CatalogPage V1 scored **62/65** (sum of individual dimensions in `review-v1.md`). The `§12` summary in `result14.md` incorrectly shows 56/65; that is a transcription error. The authoritative score is 62/65.

Record findings in `../review-v1.md` (created after all three themes are generated).

---

## Related Files

- `../professional-prompt.md` — Full Stitch prompt
- `../review-checklist.md` — Scoring rubric
- `../backend-capabilities.md` — API reference
- `../mock-product.md` — Mock data used in prompt
- `../../../pages/product.md` — Full design specification
- `../../../stitch/catalog/professional/approved-design-guidance.md` — CatalogPage baseline
- `../../../stitch/homepage/professional/approved-design-guidance.md` — HomePage baseline