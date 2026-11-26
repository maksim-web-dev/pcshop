# PCShop HomePage Design Review Checklist

Use this checklist to evaluate each generated Google Stitch design concept before approving it for implementation.

Score each dimension from 1 to 5 using the rubric below. Record notes alongside each score.

**Approval thresholds:**
- Visual quality dimensions (1–8, 10–13): minimum score **4** to proceed to implementation
- Accessibility direction (dimension 9): minimum score **3** (measurable WCAG compliance requires implementation-time testing, not design evaluation)
- A score of 3 on any visual quality dimension requires documented revision before implementation

---

## Scoring Rubric

| Score | Meaning |
|-------|---------|
| 5 | Exceeds requirements — production-ready, no changes needed |
| 4 | Meets requirements — minor refinements acceptable |
| 3 | Acceptable — specific revisions required before implementation |
| 2 | Below requirements — significant revision or regeneration required |
| 1 | Does not meet requirements — regenerate with revised prompt |

---

## Evaluation Dimensions

Complete this table once per generated design concept.

| # | Dimension | Premium score | Gaming score | Professional score | Notes |
|---|-----------|:---:|:---:|:---:|-------|
| 1 | Visual identity | | | | |
| 2 | Visual hierarchy | | | | |
| 3 | Typography | | | | |
| 4 | Color consistency | | | | |
| 5 | Product presentation | | | | |
| 6 | Header and navigation | | | | |
| 7 | Product card quality | | | | |
| 8 | Layout composition | | | | |
| 9 | Accessibility direction | | | | |
| 10 | Commercial quality | | | | |
| 11 | Originality | | | | |
| 12 | Functional consistency | | | | |
| 13 | Implementation feasibility | | | | |

**Total (max 65):** Premium: ___ / 65 · Gaming: ___ / 65 · Professional: ___ / 65

---

## Dimension Descriptions and Scoring Criteria

### 1. Visual Identity

Does the design reflect the intended theme identity? Does it feel distinctly different from the other two themes?

| Score | Criteria |
|-------|---------|
| 5 | Unmistakably reflects the target theme. Would not be confused with any other theme. |
| 4 | Clearly on-theme with one minor off-identity element. |
| 3 | On-theme overall but with a noticeable element that belongs to a different theme or generic template. |
| 2 | Ambiguous identity — could be mistaken for a different theme or a generic template. |
| 1 | Does not reflect the target theme identity at all. |

**Premium check:** Warm neutral palette, editorial typography, generous whitespace, no dark backgrounds.
**Gaming check:** Dark near-black page, purple + cyan accents only, Rajdhani headlines, atmospheric mood.
**Professional check:** Light gray page, blue-only accent, Inter throughout, conventional e-commerce structure.

---

### 2. Visual Hierarchy

Is it immediately clear what is the most important element on each section? Can the user scan the page from top to bottom and understand the page structure?

| Score | Criteria |
|-------|---------|
| 5 | Perfect hierarchy — hero headline dominates, section headings anchor sections, product cards are clearly secondary. |
| 4 | Hierarchy is mostly correct with one element competing for unintended prominence. |
| 3 | Hierarchy is readable but requires effort — some visual competition between elements. |
| 2 | Several elements compete with each other — difficult to know where to look first. |
| 1 | No clear hierarchy — the page feels flat or chaotic. |

---

### 3. Typography

Are the specified typefaces used correctly? Is the type scale appropriate? Is text readable?

| Score | Criteria |
|-------|---------|
| 5 | Correct fonts throughout, correct weights and sizes, no italic misuse, no small unreadable text. |
| 4 | Correct fonts with one minor weight or size deviation. |
| 3 | Correct font families but inconsistent scale or weight usage in some elements. |
| 2 | Wrong font family used in one or more sections, or key text is unreadable. |
| 1 | Font requirements ignored — wrong fonts throughout, or text is illegible. |

**Premium check:** Playfair Display for headlines, DM Sans for body. No all-caps headlines.
**Gaming check:** Rajdhani for headlines (uppercase), Inter for body. No mixed-case display text.
**Professional check:** Inter only. Correct weight hierarchy (700 hero / 600 headings / 600 product names / 400 body).

---

### 4. Color Consistency

Are the specified hex values respected? Are accent colors used correctly? Are forbidden colors absent?

| Score | Criteria |
|-------|---------|
| 5 | All colors match the specified palette. No forbidden colors present. Accent colors used deliberately. |
| 4 | 90%+ color-correct. One minor deviation (e.g., slightly wrong shade of background). |
| 3 | Mostly correct palette but one unexpected color present. |
| 2 | Several colors deviate from spec, or a forbidden color is present (e.g., red accent in gaming). |
| 1 | Color palette requirements ignored — wrong theme colors throughout. |

**Premium check:** Page `#FAFAF8`, no blue/purple/green accent, no dark backgrounds outside footer.
**Gaming check:** Page `#0A0A0F`, only purple `#8B5CF6` and cyan `#22D3EE` as accents. No red, no blue.
**Professional check:** Page `#F3F4F6`, only blue `#2563EB` as accent. No dark backgrounds outside footer.

---

### 5. Product Presentation

Are the products shown in a way that supports purchase decisions? Is product photography style correct for the theme?

| Score | Criteria |
|-------|---------|
| 5 | Products are clearly the focal point, photography mood matches theme, all required product information visible. |
| 4 | Good product presentation with one element slightly off (e.g., image too small, wrong photography background). |
| 3 | Products visible but not prominently featured, or photography style inconsistent with theme. |
| 2 | Products feel secondary or afterthought, or photography dramatically mismatches theme expectations. |
| 1 | Product presentation is absent or unusable. |

**Premium check:** Warm neutral/white backgrounds, editorial photography, generous image area.
**Gaming check:** Dark studio backgrounds, atmospheric lighting, RGB keyboard lighting visible.
**Professional check:** White/light gray backgrounds, clean catalog photography, 50% image in card.

---

### 6. Header and Navigation

Does the header function as a clear, navigable top bar? Are all required elements present?

| Score | Criteria |
|-------|---------|
| 5 | Logo, navigation, search/cart, and ThemeSwitcher all clearly placed and readable. Header matches theme style. |
| 4 | All elements present, one minor placement or styling issue. |
| 3 | All elements present but header feels generic or inconsistent with the theme. |
| 2 | One or more required elements missing (e.g., ThemeSwitcher absent, search not visible in professional). |
| 1 | Header is a placeholder or missing key structure. |

**Premium check:** Warm off-white `#FAFAF8` header, logo in Playfair Display, ThemeSwitcher visible.
**Gaming check:** Near-black `#0A0A0F` header, purple cart badge, cyan hover states.
**Professional check:** White `#FFFFFF` header, visible search input (not hidden behind icon), blue cart badge.

---

### 7. Product Card Quality

Does each product card show all required information at rest (without hover)? Is the card structure consistent?

| Score | Criteria |
|-------|---------|
| 5 | Product image, name, price, badges, and CTA button all visible at rest. Card structure matches spec. |
| 4 | All elements present, one minor deviation (e.g., CTA slightly too small). |
| 3 | Most elements present, one element missing or hidden (acceptable if hover-reveal is noted as an issue). |
| 2 | CTA button is hover-only, or price is absent, or image area is wrong proportion. |
| 1 | Card structure does not match requirements — unusable. |

---

### 8. Layout Composition

Does the overall page composition feel balanced? Are sections well-proportioned? Does the page feel complete?

| Score | Criteria |
|-------|---------|
| 5 | Sections are well-proportioned, spacing is correct for the theme, the page feels complete top to bottom. |
| 4 | Mostly balanced, one section feels slightly cramped or too spacious. |
| 3 | Layout is functional but spacing is inconsistent or one section is poorly proportioned. |
| 2 | Sections feel disconnected, spacing is inconsistent across the page. |
| 1 | Page feels incomplete — sections missing, layout broken, or only above-the-fold designed. |

---

### 9. Accessibility Direction

Does the visual design support accessible implementation? Are color contrasts sufficient for the target ratios?

> **Note:** This dimension evaluates visual accessibility intent, not measured WCAG compliance (which requires implementation-time testing). Score based on visual estimate.

| Score | Criteria |
|-------|---------|
| 5 | Text appears readable throughout. Focus indicators visible in context. CTAs clearly distinguishable. |
| 4 | Text readable, one element has marginal contrast (e.g., a badge at small size). |
| 3 | Most text readable, but one area has clear contrast concern (e.g., gray text on gray background). |
| 2 | Significant contrast issues visible — text difficult to read in one or more sections. |
| 1 | Multiple contrast failures — the design would fail WCAG AA at implementation. |

**Specific checks:**
- Premium: `#5C5C5C` on `#FAFAF8` (secondary text) — verify readability
- Gaming: `#8B5CF6` purple on `#0A0A0F` (CTA buttons) — verify large-text contrast
- Professional: `#2563EB` on `#FFFFFF` (links, buttons) — verify small-size contrast

---

### 10. Commercial Quality

Does the design look like a real, commercial-quality e-commerce store? Would it be credible as a live website?

| Score | Criteria |
|-------|---------|
| 5 | Fully credible as a production e-commerce website. No "template" feeling. |
| 4 | Commercial quality with one generic-template element that could be replaced. |
| 3 | Mostly commercial but visibly AI-generated in one section — fixable. |
| 2 | Feels like a demonstration or generic template rather than a real store. |
| 1 | Does not feel like a commercial website — wireframe-like, placeholder content, or demo-quality. |

---

### 11. Originality

Does the design have a distinct character? Does it feel like a deliberate design decision rather than a copy of a known website?

| Score | Criteria |
|-------|---------|
| 5 | Distinctly original — clearly inspired by references but not a copy. Has its own character. |
| 4 | Original with one element that closely mirrors a reference (acceptable if the reference approach is correct). |
| 3 | Noticeable visual borrowing from one reference but still a distinct combination. |
| 2 | Feels like a close copy of one of the reference sites. |
| 1 | Direct copy of a reference site with minor color changes. |

---

### 12. Functional Consistency

Do all three themes show the same functional elements (same sections, same user actions, same information hierarchy)?

> **Note:** Score this dimension once across all three themes together, not per theme.

| Score | Criteria |
|-------|---------|
| 5 | All three themes show identical sections, identical user actions (search, cart, ThemeSwitcher, Add to Cart), identical mock products. |
| 4 | 90%+ consistent — one minor functional difference between themes. |
| 3 | Mostly consistent — one theme is missing a functional element present in the others. |
| 2 | Themes have significantly different sections or missing functional elements. |
| 1 | Themes show fundamentally different pages — not variations of the same application. |

---

### 13. Implementation Feasibility

Can this design be reasonably implemented using React and TailwindCSS? Are the visual effects achievable with standard CSS?

| Score | Criteria |
|-------|---------|
| 5 | All visual elements are achievable with standard React + TailwindCSS + CSS. No impossible effects. |
| 4 | 95%+ feasible — one element requires a custom approach (acceptable if documented). |
| 3 | Mostly feasible but one effect requires significant custom CSS or a third-party library. |
| 2 | Several effects are difficult or impractical to implement in the stated stack. |
| 1 | Design assumes capabilities not available in React + TailwindCSS (e.g., complex 3D transforms, generative backgrounds). |

---

## Measurable Accessibility Checks

These are **pass/fail** checks separate from the subjective scoring above. All must pass before a design is approved.

| Check | Premium target | Gaming target | Professional target | P | G | PR |
|-------|---------------|---------------|--------------------|----|----|----|
| Primary text readable on page background | `#1A1A1A` on `#FAFAF8` ≥ 16:1 | `#F0F0FF` on `#0A0A0F` ≥ 18:1 | `#111827` on `#F3F4F6` ≥ 14:1 | | | |
| CTA button visible at rest | Visible (not hover-only) | Visible (not hover-only) | Visible (not hover-only) | | | |
| No text visually below 12px | Confirm | Confirm | Confirm | | | |
| No hover-only primary actions | Confirm | Confirm | Confirm | | | |
| ThemeSwitcher visible in header | Confirm | Confirm | Confirm | | | |

Legend: **P** = Pass, **F** = Fail

---

## Review Decision

After scoring all dimensions, record the decision:

| Theme | Total score | Min visual score (dim 1–8, 10–13) | Accessibility score (dim 9) | Decision |
|-------|-------------|:---------------------------------:|:---------------------------:|---------|
| Premium | / 65 | | | ☐ Approved ☐ Revise ☐ Regenerate |
| Gaming | / 65 | | | ☐ Approved ☐ Revise ☐ Regenerate |
| Professional | / 65 | | | ☐ Approved ☐ Revise ☐ Regenerate |

**Approval:** Visual quality ≥ 4 on all dimensions 1–8, 10–13. Accessibility ≥ 3 on dimension 9. Accessibility compliance requires implementation-time testing — do not claim WCAG conformance based on generated mockup alone.

**Overall decision:** ☐ Proceed to implementation · ☐ Revise and re-review · ☐ Regenerate all

**Reviewed by:** _______________  **Date:** _______________

---

## Notes

Add any specific revision instructions or outstanding questions below.

**Premium revisions needed:**

**Gaming revisions needed:**

**Professional revisions needed:**

**Questions for design team:**