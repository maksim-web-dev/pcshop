# PCShop CatalogPage Design Review Checklist

Use this checklist to evaluate each generated Google Stitch CatalogPage design before approving it for implementation.

Score each dimension from 1 to 5 using the rubric below. Record notes alongside each score.

**Approval thresholds:**
- Visual quality dimensions (1–8, 10–13): minimum score **4** to proceed to implementation
- Accessibility direction (dimension 9): minimum score **3**
- Catalog-specific acceptance checks: minimum score **4** per check
- A score below the threshold on any dimension requires documented revision before implementation

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

## Part 1 — 13-Dimension Visual Quality Evaluation

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

Does the design reflect the intended theme identity? Does it feel distinctly different from the other two themes? Does the CatalogPage feel like a natural extension of the HomePage V2?

| Score | Criteria |
|-------|---------|
| 5 | Unmistakably reflects the target theme. CatalogPage and HomePage feel like the same application. |
| 4 | Clearly on-theme with one minor off-identity element. |
| 3 | On-theme overall but with a noticeable element that belongs to a different theme or generic template. |
| 2 | Ambiguous identity — could be mistaken for a different theme or a generic template. |
| 1 | Does not reflect the target theme identity at all. |

**Premium check:** Warm `#FAFAF8` page, editorial typography, Playfair headings, no dark content areas.  
**Gaming check:** Dark `#0A0A0F` page, purple + cyan only, Rajdhani section headings, atmospheric mood.  
**Professional check:** Light gray `#F3F4F6` page, blue `#2563EB` only accent, Inter throughout.

---

### 2. Visual Hierarchy

Is it clear at a glance that this is a product catalog? Does the user know where to look first (category, filters, products)?

| Score | Criteria |
|-------|---------|
| 5 | Clear hierarchy: breadcrumb → sort/count → products. Filter sidebar visually secondary to product grid. |
| 4 | Hierarchy mostly correct, one element competes for unintended prominence. |
| 3 | Hierarchy readable but requires effort — sidebar and content area compete visually. |
| 2 | Several elements compete — unclear where the product grid starts. |
| 1 | No clear hierarchy — page feels flat or chaotic. |

---

### 3. Typography

Are the specified typefaces used correctly? Is the type scale appropriate for a catalog page?

| Score | Criteria |
|-------|---------|
| 5 | Correct fonts throughout, correct weights and sizes, all catalog elements legible. |
| 4 | Correct fonts with one minor weight or size deviation. |
| 3 | Correct font families but inconsistent scale or weight in filter or sort areas. |
| 2 | Wrong font family used in one or more sections. |
| 1 | Font requirements ignored. |

**Premium check:** Playfair for result count / section heading, DM Sans for filter labels, prices, badges.  
**Gaming check:** Rajdhani UPPERCASE for section headings, Inter for filter labels, product names, prices.  
**Professional check:** Inter throughout, correct weight hierarchy.

---

### 4. Color Consistency

Are the specified hex values respected? Are filter UI elements correctly styled? Are forbidden colors absent?

| Score | Criteria |
|-------|---------|
| 5 | All colors match the specified palette. No forbidden colors. Filter active state uses correct accent. |
| 4 | 90%+ color-correct. One minor deviation. |
| 3 | Mostly correct palette but one unexpected color. |
| 2 | Several deviations, or a forbidden color present. |
| 1 | Color requirements ignored. |

**Premium check:** No blue/purple/green, filter active state uses `#1A1A1A` graphite only.  
**Gaming check:** Filter active state uses `#8B5CF6` purple (checked) and `#22D3EE` cyan (label). No green for availability.  
**Professional check:** Filter active state uses `#2563EB` blue. Green `#059669` permitted for availability dot only.

---

### 5. Product Presentation

Are products clearly the main content of the page? Is the grid proportioned correctly? Do product cards match the HomePage V2 cards?

| Score | Criteria |
|-------|---------|
| 5 | Products are clearly the focal point. Grid proportions correct. Cards identical to HomePage V2. |
| 4 | Good product presentation, one minor card or grid deviation. |
| 3 | Products visible but card design or grid differs from HomePage. |
| 2 | Product cards significantly differ from HomePage V2 design. |
| 1 | Product presentation absent or unusable. |

---

### 6. Header and Navigation

Is the header identical to the HomePage V2 header? Is the active nav item correct (Laptops)?

| Score | Criteria |
|-------|---------|
| 5 | Header matches HomePage V2 exactly. Laptops nav item is active. ThemeSwitcher visible. |
| 4 | Header matches with one minor deviation. |
| 3 | Header present but noticeably different from HomePage V2. |
| 2 | Header is missing required elements (ThemeSwitcher, search, active nav state). |
| 1 | Header does not match the theme at all. |

---

### 7. Product Card Quality

Does each product card show all required information at rest? Is the card design consistent with HomePage V2?

| Score | Criteria |
|-------|---------|
| 5 | Image, name, price, 2–3 badges, availability indicator, and CTA button all visible at rest. |
| 4 | All elements present, one minor deviation. |
| 3 | One element missing or hover-only (noted as revision required). |
| 2 | CTA button is hover-only, or availability indicator is absent, or image is wrong proportion. |
| 1 | Card structure does not match requirements. |

---

### 8. Layout Composition

Is the two-column layout (sidebar + main content) well-proportioned? Does the page feel complete?

| Score | Criteria |
|-------|---------|
| 5 | Sidebar and main content are well-proportioned. Product grid fills available width. Page feels complete. |
| 4 | Mostly balanced, one area slightly cramped or spacious. |
| 3 | Layout functional but sidebar-to-main ratio is off or spacing is inconsistent. |
| 2 | Sidebar dominates the page or is too narrow to be useful. |
| 1 | Two-column layout absent or broken. |

---

### 9. Accessibility Direction

Does the visual design support accessible implementation? Are color contrasts sufficient?

> **Note:** This dimension evaluates visual accessibility intent, not measured WCAG compliance.

| Score | Criteria |
|-------|---------|
| 5 | All text appears readable. Filter checkboxes have visible checked state. CTAs clearly distinguishable. |
| 4 | Text readable, one element has marginal contrast. |
| 3 | Most text readable, one area has clear contrast concern. |
| 2 | Significant contrast issues in filter panel or product grid. |
| 1 | Multiple contrast failures — design would fail WCAG AA at implementation. |

---

### 10. Commercial Quality

Does the design look like a real commercial catalog page? Would it be credible as a live e-commerce website?

| Score | Criteria |
|-------|---------|
| 5 | Fully credible as a production catalog page. Feels like a real hardware store. |
| 4 | Commercial quality with one generic-template element. |
| 3 | Mostly commercial but noticeably AI-generated in one section. |
| 2 | Feels like a demonstration page, not a real store. |
| 1 | Wireframe or demo quality only. |

---

### 11. Originality

Does the catalog page have a distinct character consistent with the theme?

| Score | Criteria |
|-------|---------|
| 5 | Distinctly original — consistent with HomePage identity and not a copy of any reference. |
| 4 | Original with one element that closely mirrors a known pattern (acceptable). |
| 3 | Noticeable visual borrowing but still a distinct combination. |
| 2 | Feels like a copy of a reference site with theme colors applied. |
| 1 | Direct copy of a known e-commerce catalog template. |

---

### 12. Functional Consistency

Do all three themes show the same catalog functionality?

> **Note:** Score this dimension once across all three themes together.

| Score | Criteria |
|-------|---------|
| 5 | All three themes show identical sections, identical products (same 6 cards), same active filter, same sort, same pagination. |
| 4 | 90%+ consistent — one minor functional difference. |
| 3 | Mostly consistent — one theme is missing a catalog element present in the others. |
| 2 | Themes have significantly different catalog functionality. |
| 1 | Themes show fundamentally different catalog pages. |

---

### 13. Implementation Feasibility

Can this catalog page be implemented in React + TailwindCSS?

| Score | Criteria |
|-------|---------|
| 5 | All visual elements are achievable with standard React + TailwindCSS + CSS. No impossible effects. |
| 4 | 95%+ feasible — one element requires a custom approach (acceptable if documented). |
| 3 | Mostly feasible but one effect requires significant custom CSS. |
| 2 | Several effects are difficult or impractical in the stated stack. |
| 1 | Design assumes capabilities not available in React + TailwindCSS. |

---

## Part 2 — Catalog-Specific Acceptance Checks

Score each check separately (minimum 4 required). These are in addition to the 13 dimensions above.

| # | Check | Premium | Gaming | Professional | Notes |
|---|-------|:-------:|:------:|:------------:|-------|
| C1 | Filter discoverability | | | | |
| C2 | Filter readability | | | | |
| C3 | Filter grouping | | | | |
| C4 | Active filter visibility | | | | |
| C5 | Clear filters affordance | | | | |
| C6 | Sorting visibility | | | | |
| C7 | Result count consistency | | | | |
| C8 | Product data consistency | | | | |
| C9 | Pagination clarity | | | | |
| C10 | Product card consistency with HomePage | | | | |
| C11 | Header and footer consistency | | | | |
| C12 | Alignment with backend capabilities | | | | |
| C13 | Feasibility of mobile filter drawer | | | | |

---

### C1. Filter Discoverability

Is the filter sidebar immediately visible without scrolling? Is it clear that filters can be applied?

| Score | Criteria |
|-------|---------|
| 5 | Filter sidebar visible in the viewport on page load. Clear visual affordance (checkboxes, labels). |
| 4 | Visible with one minor discoverability issue. |
| 3 | Sidebar present but requires effort to find or is below the fold. |
| 2 | Sidebar is not immediately visible or unclear in purpose. |
| 1 | No filter UI visible. |

---

### C2. Filter Readability

Are filter group labels and option labels legible? Can the user understand what they are filtering?

| Score | Criteria |
|-------|---------|
| 5 | Group labels clearly name the parameter. Option labels are precise ("32 GB", "NVIDIA RTX 4080"). |
| 4 | Labels readable, one label truncated or ambiguous. |
| 3 | Labels mostly readable but one group is unclear in its meaning. |
| 2 | Labels are truncated, overlapping, or too small to read. |
| 1 | Filter labels are illegible or absent. |

---

### C3. Filter Grouping

Are filter parameters organized into distinct, clearly labeled groups?

| Score | Criteria |
|-------|---------|
| 5 | Each parameter is a separate group with a clear heading. Groups are separated by visual dividers. |
| 4 | Groups present, one group lacks a clear separator or heading. |
| 3 | Grouping present but inconsistently applied. |
| 2 | All filters in one flat list without grouping. |
| 1 | No grouping visible. |

---

### C4. Active Filter Visibility

Is the RAM: 32 GB active filter clearly visible in both the sidebar (checked state) and in the chip row?

| Score | Criteria |
|-------|---------|
| 5 | Active filter is checked in sidebar AND shown as a chip above the grid. Both are clearly visible. |
| 4 | Both indicators present, one is visually subtle. |
| 3 | Only one of the two indicators is visible (chip OR sidebar check). |
| 2 | Active filter barely visible — easy to miss. |
| 1 | No active filter indicator visible. |

---

### C5. Clear Filters Affordance

Is the "Clear all" or "Clear filters" action visible and accessible?

| Score | Criteria |
|-------|---------|
| 5 | "Clear all" link clearly visible near the active filter chip. "Clear filters" also visible in the sidebar. |
| 4 | At least one clear-filters affordance visible. |
| 3 | Clear-filters affordance present but hard to find. |
| 2 | No clear-filters affordance — user has no way to remove filters without manually unchecking. |
| 1 | Clear-filters affordance absent. |

---

### C6. Sorting Visibility

Is the sort control visible and clearly labeled above the product grid?

| Score | Criteria |
|-------|---------|
| 5 | Sort dropdown is clearly visible above the grid. Current sort option is shown. |
| 4 | Sort control present, one minor label or position issue. |
| 3 | Sort control present but positioned unexpectedly or ambiguously labeled. |
| 2 | Sort control barely visible or confused with another control. |
| 1 | Sort control absent. |

---

### C7. Result Count Consistency

Does the result count ("6 Gaming Laptops") match the visible product count and the active filter?

| Score | Criteria |
|-------|---------|
| 5 | Result count says "6 Gaming Laptops" and exactly 6 products are visible in the grid. |
| 4 | Count and products match, minor label wording difference. |
| 3 | Count is present but does not exactly match the visible products. |
| 2 | Count and visible products are inconsistent. |
| 1 | No result count shown, or count is clearly wrong. |

---

### C8. Product Data Consistency

Do all three themes show the same 6 products with the same names, prices, and badges?

| Score | Criteria |
|-------|---------|
| 5 | All three themes show identical product names, prices, and badge text (FORGE $2,799, ARCTUS $2,299, KORA $2,099, ECHO $1,999, LYNX $1,899, APEX $1,799). |
| 4 | 5 of 6 products consistent, one minor name/price deviation. |
| 3 | Products are mostly consistent but one theme shows a different product or price. |
| 2 | Significant product data inconsistency between themes. |
| 1 | Themes show completely different products. |

---

### C9. Pagination Clarity

Is pagination visible below the product grid? Is it clear which page is active?

| Score | Criteria |
|-------|---------|
| 5 | Pagination shows "← Previous  1  Next →" with page 1 visually active. Previous is correctly disabled. |
| 4 | Pagination present, one minor styling or state issue. |
| 3 | Pagination present but current page is unclear or Previous/Next states are wrong. |
| 2 | Pagination present but non-functional in appearance (e.g., all items enabled including Previous on page 1). |
| 1 | Pagination absent. |

---

### C10. Product Card Consistency with HomePage

Do the catalog product cards match the HomePage V2 product card design?

| Score | Criteria |
|-------|---------|
| 5 | Card design identical to HomePage V2: same layout order, same badge style, same CTA style, same availability indicator. |
| 4 | 90%+ consistent, one minor difference from HomePage card. |
| 3 | Cards recognizable as the same design system but with notable differences. |
| 2 | Cards significantly differ from HomePage V2 design. |
| 1 | Cards are a completely different design — no visual connection to HomePage. |

---

### C11. Header and Footer Consistency

Are the header and footer identical to the HomePage V2 header and footer?

| Score | Criteria |
|-------|---------|
| 5 | Header and footer match HomePage V2 exactly (same elements, same colors, same font sizes). |
| 4 | Header and footer match with one minor difference. |
| 3 | Recognizably the same header/footer but with notable differences. |
| 2 | Header or footer is a simplified/different version from HomePage V2. |
| 1 | Header or footer does not match the theme. |

---

### C12. Alignment with Backend Capabilities

Does the design show only filters and UI elements that are supported by the actual backend API?

| Score | Criteria |
|-------|---------|
| 5 | Filter panel shows exact string/number match checkboxes only. No price range slider. No multi-select for the same parameter. No faceted counts. |
| 4 | 95%+ backend-aligned, one unsupported UI element noted as a risk. |
| 3 | Mostly backend-aligned, one unsupported element that requires scope discussion. |
| 2 | Significant unsupported elements (e.g., price range slider, OR-logic filters). |
| 1 | Design assumes backend capabilities that do not exist. |

**Check:** No price range slider. No "NVIDIA RTX 4070 (3)" faceted counts. Single-select per parameter. All filter values match values in `catalog/mock-products.md`.

---

### C13. Feasibility of Mobile Filter Drawer

Does the design include a visual hint or placeholder for the mobile filter drawer?

| Score | Criteria |
|-------|---------|
| 5 | Design includes a "Filters" button (mobile breakpoint shown or noted) and/or a drawer overlay placeholder. |
| 4 | Design includes a "Filters" button for mobile even without showing the drawer. |
| 3 | Mobile filter approach is implied but not explicitly designed. |
| 2 | No mobile filter consideration visible. |
| 1 | Design is desktop-only with no mobile consideration noted. |

> **Note:** The mobile filter drawer is not in scope for this Stitch generation. A score of 3 is acceptable here — the drawer will be designed in Design Step 7 (responsive variants).

---

## Part 3 — Measurable Accessibility Checks

Pass/fail checks. All must pass before a design is approved.

| Check | Premium | Gaming | Professional | P/F |
|-------|---------|--------|--------------|-----|
| Primary text readable on page background | `#1A1A1A` on `#FAFAF8` ≥ 16:1 | `#F0F0FF` on `#0A0A0F` ≥ 18:1 | `#111827` on `#F3F4F6` ≥ 14:1 | |
| CTA button visible at rest (not hover-only) | Confirm | Confirm | Confirm | |
| Availability indicator visible at rest | Confirm | Confirm | Confirm | |
| Active filter chip visible at rest | Confirm | Confirm | Confirm | |
| "Clear all" affordance visible | Confirm | Confirm | Confirm | |
| Sort control visible | Confirm | Confirm | Confirm | |
| Result count visible | Confirm | Confirm | Confirm | |
| No text visually below 11px | Confirm | Confirm | Confirm | |
| ThemeSwitcher visible in header | Confirm | Confirm | Confirm | |
| Professional search input always visible in header | — | — | Confirm | |
| Gaming: NO green colors used | — | Confirm | — | |
| Gaming: availability in cyan `#22D3EE` only | — | Confirm | — | |

Legend: **P** = Pass, **F** = Fail

---

## Review Decision

After scoring all dimensions and catalog-specific checks:

| Theme | Dim score | Catalog checks score | Min dim (1–8,10–13) | Accessibility (dim 9) | Decision |
|-------|:---------:|:--------------------:|:--------------------:|:---------------------:|---------|
| Premium | / 65 | avg / 5 | | | ☐ Approved ☐ Revise ☐ Regenerate |
| Gaming | / 65 | avg / 5 | | | ☐ Approved ☐ Revise ☐ Regenerate |
| Professional | / 65 | avg / 5 | | | ☐ Approved ☐ Revise ☐ Regenerate |

**Approval criteria:**
- 13-dimension minimum: all visual quality dims ≥ 4, accessibility dim ≥ 3
- Catalog-specific checks: all C1–C12 ≥ 4 (C13 ≥ 3 acceptable)
- Measurable accessibility: all pass/fail checks pass
- Subjective visual quality: target ≥ 4/5 overall

**Do not claim WCAG compliance.** Accessibility compliance requires implementation-time axe-core + Playwright testing.

**Approval status:** ☐ All themes approved · ☐ Revise and re-review · ☐ Regenerate all

**Reviewed by:** _______________  **Date:** _______________

---

## Notes

Add specific revision instructions or outstanding questions below.

**Premium revisions needed:**

**Gaming revisions needed:**

**Professional revisions needed:**

**Catalog-specific concerns:**

**Questions requiring human approval before implementation:**