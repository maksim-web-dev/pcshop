# PCShop ProductPage Design Review Checklist

Use this checklist to evaluate each generated Google Stitch ProductPage design before approving it for implementation.

Score each dimension from 1 to 5 using the rubric below. Record notes alongside each score.

**Approval thresholds:**
- Visual quality dimensions (1–8, 10–13): minimum score **4** to proceed to implementation
- Accessibility direction (dimension 9): minimum score **3**
- ProductPage-specific acceptance checks (P1–P17): minimum score **4** per check
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

| # | Dimension | Premium score | Gaming score | Professional score | Notes |
|---|-----------|:---:|:---:|:---:|-------|
| 1 | Visual identity | | | | |
| 2 | Visual hierarchy | | | | |
| 3 | Typography | | | | |
| 4 | Color consistency | | | | |
| 5 | Product presentation | | | | |
| 6 | Header and navigation | | | | |
| 7 | Product section quality | | | | |
| 8 | Layout composition | | | | |
| 9 | Accessibility direction | | | | |
| 10 | Commercial quality | | | | |
| 11 | Originality | | | | |
| 12 | Cross-page consistency | | | | |
| 13 | Implementation feasibility | | | | |

**Total (max 65):** Premium: ___ / 65 · Gaming: ___ / 65 · Professional: ___ / 65

---

## Dimension Descriptions

### 1. Visual Identity

Does the ProductPage feel like a natural continuation of the HomePage V2 and CatalogPage V1? Does it unmistakably belong to its theme?

**Premium check:** Warm `#FAFAF8` page, editorial Playfair heading for product name, generous whitespace, clean white card gallery.  
**Gaming check:** Dark `#0A0A0F` page, purple CTA, cyan availability, Rajdhani UPPERCASE section headings, atmospheric product photography.  
**Professional check:** Light gray `#F3F4F6` page, blue `#2563EB` CTA, Inter throughout, always-visible search, green dot availability.

---

### 2. Visual Hierarchy

Is it immediately clear that this is a product detail page? Is the product image the visual hero? Is the price visible without scrolling?

| Score | Criteria |
|-------|---------|
| 5 | Product image dominates. Name, price, CTA all visible above fold. Specification table clearly secondary to purchase section. |
| 4 | Good hierarchy, one element slightly misplaced in importance. |
| 3 | Hierarchy readable but price or CTA are below the fold or compete with secondary elements. |
| 2 | Unclear hierarchy — cannot immediately identify the product image, price, or CTA. |
| 1 | No discernible hierarchy. |

---

### 3. Typography

Are the specified typefaces used correctly for all ProductPage elements?

**Premium check:** Playfair Display 400 for product name and section headings; DM Sans for price, body, badges.  
**Gaming check:** Rajdhani Bold UPPERCASE for section headings; Inter for product name, price, body.  
**Professional check:** Inter throughout with correct weight hierarchy.

---

### 4. Color Consistency

Are the specified hex values respected? Are forbidden colors absent?

**Premium check:** Only `#1A1A1A` graphite as accent; no blue/purple/green.  
**Gaming check:** Purple `#8B5CF6` for CTA; cyan `#22D3EE` for availability and badges; NO green.  
**Professional check:** Blue `#2563EB` only accent; green `#059669`/`#047857` permitted for availability only.

---

### 5. Product Presentation

Is the product image clearly the visual centerpiece? Is the image large enough to evaluate the product?

| Score | Criteria |
|-------|---------|
| 5 | Product image is the dominant visual element. Fills the left column. |
| 4 | Image prominent with one minor sizing or proportion issue. |
| 3 | Image present but competing with text or secondary elements. |
| 2 | Image too small or absent. |
| 1 | No product image. |

---

### 6. Header and Navigation

Is the header identical to the HomePage V2 and CatalogPage V1 headers? Is the active nav item correct?

| Score | Criteria |
|-------|---------|
| 5 | Header matches exactly. Laptops is active. ThemeSwitcher visible. |
| 4 | Header matches with one minor deviation. |
| 3 | Header present but noticeably different. |
| 2 | Missing required elements. |
| 1 | Header does not match the theme. |

---

### 7. Product Section Quality

Are all required elements in the right column visible at rest? Image + name + price + availability + badges + quantity + CTA?

| Score | Criteria |
|-------|---------|
| 5 | All 7 elements visible at rest without hover. Well-spaced, clearly labeled. |
| 4 | All elements present with one minor spacing or sizing issue. |
| 3 | One element missing or requires hover to see. |
| 2 | CTA or price is missing or below the fold on a typical desktop. |
| 1 | Product section not usable. |

---

### 8. Layout Composition

Is the two-column layout (gallery left, product info right) well-proportioned? Does the page flow naturally top to bottom?

| Score | Criteria |
|-------|---------|
| 5 | Gallery and product info well-proportioned. Description, spec table, related products flow naturally below. |
| 4 | Mostly well-proportioned, one area slightly off. |
| 3 | Layout functional but proportions or spacing inconsistent. |
| 2 | Left column dominates or sections below the fold feel disconnected. |
| 1 | Two-column layout absent or broken. |

---

### 9. Accessibility Direction

Does the visual design support accessible implementation?

| Score | Criteria |
|-------|---------|
| 5 | All text readable. CTA clearly distinguishable. Availability has text (not color-only). |
| 4 | Text readable, one element has marginal contrast. |
| 3 | Most text readable, one area has clear contrast concern. |
| 2 | Significant contrast issues. |
| 1 | Multiple contrast failures. |

---

### 10. Commercial Quality

Does the design look like a real commercial product page from a hardware retailer?

| Score | Criteria |
|-------|---------|
| 5 | Fully credible as production ProductPage. No wireframe elements. |
| 4 | Commercial quality with one generic-template element. |
| 3 | Mostly commercial but noticeably AI-generated in one section. |
| 2 | Feels like a demonstration, not a real store. |
| 1 | Wireframe or demo quality only. |

---

### 11. Originality

Does the ProductPage have a distinct character consistent with the theme? Is it recognizably different from the other two themes?

---

### 12. Cross-Page Consistency

Do the header, footer, and product cards match their HomePage V2 and CatalogPage V1 equivalents exactly?

| Score | Criteria |
|-------|---------|
| 5 | Header, footer, and product cards in related products section are identical to CatalogPage V1. |
| 4 | 90%+ consistent, one minor difference. |
| 3 | Recognizably the same design but with notable differences. |
| 2 | Header or footer differs significantly from CatalogPage V1. |
| 1 | No visual connection to HomePage or CatalogPage. |

---

### 13. Implementation Feasibility

Can this ProductPage be implemented in React + TailwindCSS?

| Score | Criteria |
|-------|---------|
| 5 | All effects achievable with standard React + TailwindCSS. |
| 4 | 95%+ feasible — one element requires custom approach (documented). |
| 3 | Mostly feasible but one effect requires significant custom CSS. |
| 2 | Several effects are difficult or impractical. |
| 1 | Design assumes capabilities not available in the stated stack. |

---

## Part 2 — ProductPage-Specific Acceptance Checks

Score each check separately (minimum 4 required, except P17 where 3 is acceptable).

| # | Check | Premium | Gaming | Professional | Notes |
|---|-------|:-------:|:------:|:------------:|-------|
| P1 | Product image prominence | | | | |
| P2 | Image gallery clarity | | | | |
| P3 | Thumbnail discoverability | | | | |
| P4 | Product title readability | | | | |
| P5 | Price visibility | | | | |
| P6 | Availability visibility | | | | |
| P7 | Primary CTA prominence | | | | |
| P8 | Quantity control clarity | | | | |
| P9 | Product specification readability | | | | |
| P10 | Product information consistency | | | | |
| P11 | Description readability | | | | |
| P12 | Related product consistency | | | | |
| P13 | Header and Footer consistency | | | | |
| P14 | Consistency with HomePage and CatalogPage | | | | |
| P15 | Backend capability alignment | | | | |
| P16 | Out-of-stock behavior requirements | | | | |
| P17 | Responsive implementation feasibility | | | | |

---

### P1. Product Image Prominence

Is the product image unmistakably the visual hero of the page?

| Score | Criteria |
|-------|---------|
| 5 | Product image fills the left column, clearly the most prominent visual element on the page. |
| 4 | Image prominent, one minor sizing or proportion issue. |
| 3 | Image present but competing with text elements. |
| 2 | Image too small — same visual weight as the product info column. |
| 1 | Product image absent or barely visible. |

---

### P2. Image Gallery Clarity

Is it clear that there is a gallery with multiple images? Is the main image large and legible?

| Score | Criteria |
|-------|---------|
| 5 | Main image large and clear. Thumbnails visible below. Gallery affordance obvious. |
| 4 | Gallery present with one minor affordance issue. |
| 3 | Gallery present but thumbnail area is unclear or hidden. |
| 2 | Only one image visible, no gallery affordance. |
| 1 | No gallery. |

---

### P3. Thumbnail Discoverability

Are thumbnails visible and do they clearly indicate that the main image can be changed?

| Score | Criteria |
|-------|---------|
| 5 | 3 thumbnails clearly visible below main image. Selected thumbnail visually distinct. |
| 4 | Thumbnails visible, one discoverability issue. |
| 3 | Thumbnails present but hard to find or visually unclear. |
| 2 | Thumbnails barely visible or confused with another element. |
| 1 | No thumbnails. |

---

### P4. Product Title Readability

Is the product name immediately readable? Is it clearly the page heading?

| Score | Criteria |
|-------|---------|
| 5 | Product name clearly the first heading in the right column. Font size and weight make it unmistakable. |
| 4 | Title readable with one minor weight or size issue. |
| 3 | Title readable but competing with another heading for prominence. |
| 2 | Title too small or not visually distinct from body text. |
| 1 | Product name absent or illegible. |

---

### P5. Price Visibility

Is the price clearly visible above the fold? Is it formatted correctly?

| Score | Criteria |
|-------|---------|
| 5 | Price visible without scrolling. Large, bold, clearly formatted as currency ($1,799). |
| 4 | Price visible, one minor size or position issue. |
| 3 | Price present but requires scrolling on a typical desktop, or too small. |
| 2 | Price barely visible or competing with other numbers. |
| 1 | Price absent. |

---

### P6. Availability Visibility

Is the availability indicator clearly visible? Does it use the correct theme-specific style?

| Score | Criteria |
|-------|---------|
| 5 | "In stock" visible at rest. Correct theme style: Premium text-only, Gaming cyan, Professional green dot. |
| 4 | Visible with one minor styling deviation from theme spec. |
| 3 | Present but hard to see or uses wrong color. |
| 2 | Barely visible. |
| 1 | Absent. |

**Gaming check:** "IN STOCK" in cyan `#22D3EE` — NO green.  
**Professional check:** Green dot `#059669` + "In stock" text `#047857`.  
**Premium check:** "In stock" in `#5C5C5C` — no dot, no color.

---

### P7. Primary CTA Prominence

Is the "Add to Cart" button clearly the primary action? Is it visible without scrolling?

| Score | Criteria |
|-------|---------|
| 5 | "Add to Cart" button clearly primary. Full-width in product info column. Visible above fold. Never hover-only. |
| 4 | CTA prominent with one minor issue. |
| 3 | CTA present but visually similar to secondary actions or below fold. |
| 2 | CTA not clearly primary or below fold on typical desktop. |
| 1 | CTA absent or hover-only. |

---

### P8. Quantity Control Clarity

Is the quantity selector visible and usable?

| Score | Criteria |
|-------|---------|
| 5 | [−] [1] [+] pattern clearly visible. Styled to match theme. Near the CTA button. |
| 4 | Present with one minor styling issue. |
| 3 | Present but hard to find or awkwardly positioned. |
| 2 | Barely visible or confused with another control. |
| 1 | Absent. |

---

### P9. Product Specification Readability

Is the specification table clear and legible? Are all 5 Gaming Laptop parameters shown?

| Score | Criteria |
|-------|---------|
| 5 | All 5 parameters shown (CPU, RAM, Screen Size, GPU, Refresh Rate). 2-column table clear and legible. |
| 4 | Table present, 4+ parameters shown, one minor readability issue. |
| 3 | Table present but one parameter missing or text too small. |
| 2 | Specification section present but table is unclear or incomplete. |
| 1 | Specification table absent. |

---

### P10. Product Information Consistency

Are the same product name, price, and specifications shown across all three themes?

| Score | Criteria |
|-------|---------|
| 5 | APEX Gaming Laptop 15", $1,799, all 5 parameters identical across all three themes. |
| 4 | 90%+ consistent, one minor label difference. |
| 3 | Mostly consistent but one theme shows different data. |
| 2 | Significant inconsistency between themes. |
| 1 | Themes show fundamentally different product data. |

---

### P11. Description Readability

Is the product description clearly legible? Is the section clearly labeled?

| Score | Criteria |
|-------|---------|
| 5 | Description text clearly legible. Section heading visible. Max 3–5 short paragraphs. |
| 4 | Readable with one minor text size or spacing issue. |
| 3 | Readable but section heading absent or text too long/small. |
| 2 | Description barely legible. |
| 1 | Description absent. |

---

### P12. Related Product Consistency

Do the related product cards match the CatalogPage V1 card design?

| Score | Criteria |
|-------|---------|
| 5 | Card design identical to CatalogPage V1 (same layout, same badge style, same CTA style). |
| 4 | 90%+ consistent, one minor difference. |
| 3 | Cards recognizable but with notable differences from CatalogPage. |
| 2 | Cards significantly differ from CatalogPage V1 design. |
| 1 | Related products absent or completely different card design. |

---

### P13. Header and Footer Consistency

Are the header and footer identical to the CatalogPage V1 header and footer?

| Score | Criteria |
|-------|---------|
| 5 | Header and footer match CatalogPage V1 exactly. |
| 4 | Match with one minor difference. |
| 3 | Recognizably the same but with notable differences. |
| 2 | Simplified or different version. |
| 1 | Does not match the theme at all. |

---

### P14. Consistency with HomePage and CatalogPage

Does the ProductPage feel like it belongs to the same application as the HomePage and CatalogPage?

| Score | Criteria |
|-------|---------|
| 5 | Same color palette, same fonts, same component styles. User would not notice a visual theme change between pages. |
| 4 | Consistent with one element that feels slightly different. |
| 3 | Mostly consistent but one section looks like a different design. |
| 2 | Noticeably different — user would notice a visual discontinuity between pages. |
| 1 | Does not match the HomePage or CatalogPage. |

---

### P15. Backend Capability Alignment

Does the design show only functionality that is supported by the actual backend API?

| Score | Criteria |
|-------|---------|
| 5 | No unsupported features: no ratings, no reviews, no discount prices, no delivery estimates, no financing, no wishlist. All specification data matches backend format. |
| 4 | 95%+ backend-aligned, one unsupported element noted as a risk. |
| 3 | Mostly aligned, one unsupported element that requires scope discussion. |
| 2 | Significant unsupported elements present. |
| 1 | Design assumes backend capabilities that do not exist. |

**Check:** No star ratings. No "Original price: $2,099". No "Free Shipping". No "2-Year Warranty". No "Compare". No "Save to Wishlist". Specification table uses correct parameter keys from Gaming Laptop category.

---

### P16. Out-of-Stock Behavior Requirements

Is there a visible design decision for the out-of-stock state?

| Score | Criteria |
|-------|---------|
| 5 | Out-of-stock state shown or described: availability indicator shows "Out of stock", CTA button disabled/greyed. |
| 4 | In-stock state shown; out-of-stock behavior implied but not shown (acceptable). |
| 3 | No out-of-stock consideration visible — noted as requiring documentation. |
| 2 | CTA button appears active even in context suggesting out-of-stock. |
| 1 | No consideration of stock state. |

---

### P17. Responsive Implementation Feasibility

Can the two-column layout be adapted to mobile and tablet breakpoints?

| Score | Criteria |
|-------|---------|
| 5 | Design explicitly notes mobile behavior or uses structure that clearly adapts (stacked single column). |
| 4 | Desktop layout clearly adaptable to single-column mobile. |
| 3 | Desktop layout adaptable but would require significant restructuring. |
| 2 | Desktop layout would be impractical on mobile without major redesign. |
| 1 | Layout fundamentally incompatible with mobile. |

> **Note:** Mobile responsive design is Design Step 7 — not in scope for V1 Stitch generation. Score 3 acceptable.

---

## Part 3 — Measurable Accessibility Checks

Pass/fail checks. All must pass before a design is approved.

| Check | Premium | Gaming | Professional |
|-------|---------|--------|--------------|
| Product name as `<h1>` (single page heading) | Confirm | Confirm | Confirm |
| "Add to Cart" button always visible (not hover-only) | Confirm | Confirm | Confirm |
| Availability shown as text (not color-only) | "In stock" text | "IN STOCK" text | "In stock" text |
| Price clearly formatted as currency | "$1,799" | "$1,799" | "$1,799" |
| ThemeSwitcher visible in header | Confirm | Confirm | Confirm |
| Gaming: NO green colors used | n/a | Confirm | n/a |
| Gaming: availability in cyan `#22D3EE` only | n/a | Confirm | n/a |
| Professional: search input always visible | n/a | n/a | Confirm |
| Professional: green only for availability | n/a | n/a | Confirm |
| No ratings, reviews, discounts shown | Confirm | Confirm | Confirm |
| No delivery estimates or financing shown | Confirm | Confirm | Confirm |

---

## Review Decision

| Theme | Dim score | Product checks | Min dim (1–8,10–13) | Accessibility (dim 9) | Decision |
|-------|:---------:|:--------------:|:--------------------:|:---------------------:|---------|
| Premium | / 65 | avg / 5 | | | ☐ Approved ☐ Revise ☐ Regenerate |
| Gaming | / 65 | avg / 5 | | | ☐ Approved ☐ Revise ☐ Regenerate |
| Professional | / 65 | avg / 5 | | | ☐ Approved ☐ Revise ☐ Regenerate |

**Approval criteria:**
- 13-dimension minimum: all visual quality dims ≥ 4, accessibility dim ≥ 3
- ProductPage checks: P1–P16 ≥ 4 (P17 ≥ 3 acceptable)
- Measurable accessibility: all pass/fail checks pass

**Do not claim WCAG compliance.** Accessibility compliance requires implementation-time axe-core + Playwright testing.

**Reviewed by:** _______________  **Date:** _______________