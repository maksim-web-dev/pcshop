# Visual References — Usage Guide for AI Design Generation

This directory contains curated visual references for all three PCShop themes.
References are used to ground Google Stitch generation with concrete visual context
and to evaluate generated designs against real-world quality benchmarks.

---

## Directory Structure

```
references/
├── README.md                    ← this file: usage guide
├── comparison.md                ← cross-theme comparison of collected references
├── premium/
│   └── moodboard.md             ← Premium Minimalism reference candidates
├── gaming/
│   └── moodboard.md             ← Gaming & Technology reference candidates
└── professional/
    └── moodboard.md             ← Modern Technology Store reference candidates
```

Screenshots captured during manual collection should be stored alongside moodboard.md:
```
premium/
├── moodboard.md
└── screenshots/
    ├── ref-P01-apple-store-homepage.png
    ├── ref-P02-apple-store-product.png
    └── ...
```

---

## Reference Verification Status

All sources in moodboard files are initially marked as **unverified candidates** until a human
researcher visits the URL, confirms the design matches the described characteristics,
and captures a screenshot. Do not use unverified references in Google Stitch prompts.

**Verification workflow:**
1. Open the candidate URL in a browser
2. Confirm the design is live and matches the described characteristics
3. Capture a full-page or viewport screenshot (`Cmd+Shift+4` / browser DevTools)
4. Save to `references/<theme>/screenshots/ref-<ID>-<slug>.png`
5. Update the reference entry: set `Verification status: Verified`, add `Screenshot path`

---

## How to Select References for Google Stitch Generation

When preparing a prompt for Google Stitch, select **2–4 references** per page concept:

1. **Pick references that represent different aspects**, not 4 versions of the same thing.
   - 1 reference for overall layout direction
   - 1 reference for typography/hierarchy
   - 1 reference for product card or specific component
   - 1 reference for color/atmosphere (optional)

2. **Prefer component-level references over full-page references** when generating a specific component.
   A product card reference is more useful than a whole homepage when designing the card.

3. **Only use verified references** (screenshot captured and confirmed).

4. **Never use more than one reference from the same source** in a single generation prompt —
   this reduces the risk of accidentally copying a competitor's design.

---

## How to Combine Specifications with References

A well-constructed Google Stitch prompt combines:

```
[Theme description from theme spec]
+
[Specific page or component goal]
+
[1-2 visual references described in words]
+
[Explicit constraints from anti-patterns list]
```

Example structure:
> "Design a product card for a premium minimalist technology store. The card should have a large
> product image occupying the top 55% of the card, clean typographic hierarchy for name and price,
> and generous whitespace. Inspired by the editorial product presentation of [Reference P-03],
> but with a warmer neutral color palette instead of pure white. Avoid decorative elements,
> pill-shaped buttons, and hover-only primary actions."

Do **not** paste reference URLs into Google Stitch. Describe the visual characteristics you want
to adopt in words. References are your inspiration and evaluation benchmark, not direct inputs.

---

## How to Avoid Copying External Designs

- **Adopt principles, not layouts.** "Generous whitespace and large image" is a principle.
  Replicating a specific 3-column editorial layout from a known brand is copying.
- **Change at least 3 significant dimensions** from any reference:
  color palette, typography choice, layout proportions, component shapes, or photography style.
- **Ask during review:** "Does this look like it could be confused with [Reference brand]?"
  If yes, request a revision.
- **Anti-references** in each moodboard document define what NOT to copy.

---

## How to Maintain Visual Consistency Between Pages

Each Google Stitch generation session for a single theme must reference the same:
- Color palette (from theme spec)
- Typography pair (from theme spec)
- Spacing density (from theme spec)
- Border radius values (from theme spec)

Before generating page N, review the already-approved page N-1 output and include
a brief description of the established visual language in the new prompt. This creates
visual continuity across pages without requiring a single-session generation.

---

## How to Evaluate Generated Designs

Use this checklist when reviewing any Google Stitch output:

### Functional completeness
- [ ] All required sections are present (see per-page requirements in `visual-requirements.md` §12)
- [ ] Product card shows: image, name, price, parameter badges, add to cart
- [ ] All interactive elements are visually distinguishable

### Theme fidelity
- [ ] Color palette matches theme specification (no off-palette colors)
- [ ] Typography matches the specified font direction
- [ ] Spacing density matches the theme (loose/medium/dense)
- [ ] Border radius matches specification
- [ ] Shadow/glow treatment is correct for this theme

### Accessibility signals
- [ ] Text appears to have sufficient contrast against background
- [ ] Interactive elements are visually distinct (not conveyed by color alone)
- [ ] No text is placed directly on a photographic background without contrast treatment

### Responsiveness readiness
- [ ] Layout structure can be reasonably adapted to narrower viewports
- [ ] No fixed-width elements that would break at smaller sizes

### Brand differentiation
- [ ] Looks distinct from the other two themes
- [ ] Does not look like an existing commercial brand
- [ ] Avoids patterns listed in the anti-references section

---

## Storing References vs AI-Generated Mockups

| Asset type | Location | Naming |
|------------|----------|--------|
| External reference screenshots | `references/<theme>/screenshots/ref-<ID>-<slug>.png` | `ref-` prefix |
| AI-generated concepts (future) | `design/concepts/<theme>/<page>/<iteration>.png` | No `ref-` prefix |
| Approved designs (future) | `design/approved/<theme>/<page>.png` | Flat, no iteration number |

**Never mix** external references with AI-generated output in the same directory.
This keeps the approval chain clear — a reviewer must always know whether they are
looking at external inspiration or AI-produced work.