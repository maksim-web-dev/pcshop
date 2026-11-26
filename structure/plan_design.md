# PCShop — Design Process Plan

← [plan.md](plan.md)

AI-driven design process producing approved visual specifications for all three themes
before any frontend implementation begins.

---

## Step 1 — Define Visual Requirements

**Objective:** Translate theme descriptions from `project.md` into concrete, measurable visual requirements for each theme.

**Deliverables:**
- Visual requirements document per theme covering:
  - Color mood and palette direction (primary, accent, neutral, semantic colors)
  - Typography direction (font families, weight, hierarchy)
  - Layout density (whitespace philosophy, grid structure)
  - Component style characteristics (border radius, shadow style, button shape)
  - Animation philosophy (presence, speed, easing)
  - Photography/imagery treatment (cropping, overlay, framing)

**Acceptance Criteria:**
- Each theme has a written requirements document, not just mood words
- Requirements are specific enough to evaluate a generated design against them
- Contradictions between themes identified and resolved

---

## Step 2 — Collect Visual References

**Objective:** Build a visual reference library per theme to ground AI generation and human review.

**Deliverables:**
- Moodboard per theme (8–12 reference images: existing e-commerce sites, UI kits, editorial layouts)
- Annotated references: highlight specific elements to adopt (card style, typography scale, color use)
- Anti-reference list: elements explicitly not wanted per theme

**Acceptance Criteria:**
- Each moodboard communicates a distinct, unambiguous visual identity
- References are sourced from real, high-quality products (not generic placeholders)
- Human approves moodboards before proceeding to design generation

---

## Step 3 — Generate HomePage Concepts

**Objective:** Generate AI design concepts for the HomePage in all three themes using Google Stitch.

**Pages scope:** HomePage layout: hero banner, featured categories row, top products grid, header, footer.

**Deliverables:**
- 1 AI-generated desktop concept per theme (3 concepts total)
- Prompt documentation: exact prompts used for each generation
- Annotated output: notes on what works, what to adjust

**Acceptance Criteria:**
- Each concept is visually consistent with its theme requirements and moodboard
- Layout covers all required sections (hero, categories, products, header, footer)
- Human reviews and approves or requests a regeneration with refined prompt

---

## Step 4 — Generate CatalogPage Concepts

**Objective:** Generate AI design concepts for the CatalogPage in all three themes.

**Page scope:** Product grid, filter sidebar, sort controls, pagination, category navigation, header.

**Deliverables:**
- 1 AI-generated desktop concept per theme (3 concepts total)
- Notes on filter sidebar treatment per theme (drawer vs. sidebar vs. inline)
- Product card design direction per theme (image prominence, metadata density)

**Acceptance Criteria:**
- Filter and product grid layouts are clear and functional in all 3 themes
- Product card design is distinct per theme and consistent with theme identity
- Human approves before proceeding

---

## Step 5 — Generate ProductPage Concepts

**Objective:** Generate AI design concepts for the ProductPage in all three themes.

**Page scope:** Product image gallery, product title, price, parameter badges, description, add-to-cart CTA, related products.

**Deliverables:**
- 1 AI-generated desktop concept per theme (3 concepts total)
- Notes on image gallery treatment (carousel style, thumbnail layout)
- CTA button prominence per theme

**Acceptance Criteria:**
- Product image is the visual hero in all 3 themes (not buried)
- Price and CTA are prominent and immediately visible
- Parameter badges are readable and don't clutter the layout
- Human approves before proceeding

---

## Step 6 — Define NotFoundPage Design

**Objective:** Define the 404 page design for all three themes.

**Note:** Google Stitch generation is optional for this page — it can be designed manually
using the established design language from steps 3–5.

**Deliverables:**
- NotFoundPage layout per theme: illustration/graphic treatment, copy, navigation CTA
- Consistent with the visual identity established in previous steps

**Acceptance Criteria:**
- Page is clearly branded per theme
- Navigation back to home or catalog is obvious
- No external design tool required — can be specified in writing if design language is clear

---

## Step 7 — Generate Responsive Design Variants

**Objective:** Produce tablet (768px) and mobile (390px) variants for all approved designs.

**Scope:** All 4 pages × 2 additional breakpoints = 8 responsive generations per theme (24 total).

**Deliverables:**
- Tablet and mobile variants for all 4 pages in all 3 themes
- Responsive layout notes: navigation collapse behavior, filter drawer on mobile, card grid changes

**Acceptance Criteria:**
- Mobile layouts are thumb-friendly (CTA buttons ≥ 44px tap target)
- Filter panel collapses to a drawer or bottom sheet on mobile
- Typography scales correctly (no overflow, no tiny text)
- Human approves all responsive variants before design system work begins

---

## Step 8 — Create Shared Design System Specification

**Objective:** Extract the shared component inventory and design system structure from approved designs.

**Deliverables:**
- Component inventory: list of all UI components used across all pages and themes
- For each component: shared props interface, visual states required (see Step 11)
- Layout grid specification: column counts and gutters per breakpoint
- Icon set selection (or custom icon direction)
- Image placeholder/fallback style per theme

**Acceptance Criteria:**
- Every visual element in the approved designs is mapped to a named component
- No "mystery" styled elements that aren't in the component inventory
- Document is complete enough to implement without referring back to raw designs

---

## Step 9 — Define Theme-Specific Design Tokens

**Objective:** Translate approved designs into a complete, implementable design token set for each theme.

**Deliverables:**
- Complete token tables for all 3 themes covering all token categories:

  | Category   | Token count estimate |
  |------------|----------------------|
  | Color      | 20–30 semantic tokens per theme |
  | Typography | 10–15 tokens per theme |
  | Spacing    | 8–12 tokens per theme |
  | Border     | 4–6 tokens per theme |
  | Shadow     | 4–8 tokens per theme |
  | Density    | 4–6 tokens per theme |
  | Animation  | 4–8 tokens per theme (gaming has more) |

- CSS custom property names agreed and documented
- Primitive token layer documented (raw hex/rem values before aliasing)

**Acceptance Criteria:**
- All token names follow a consistent naming convention (`--color-bg-primary` style)
- No token is a visual guess — each derives directly from an approved design
- Tokens cover all states: default, hover, active, disabled, error, focus

---

## Step 10 — Define Shared Components and Presentation Variants

**Objective:** Decide for each component: pure CSS tokens vs. theme-specific layout variant required.

**Deliverables:**
- Component classification table:

  | Component      | Implementation | Notes |
  |----------------|----------------|-------|
  | Button         | CSS tokens only | Radius + color change per theme |
  | ProductCard    | Variant per theme | Gaming uses full-bleed image, premium uses white card |
  | FilterPanel    | CSS tokens only | — |
  | ...            | ...             | ... |

- Variant file structure defined for components requiring layout variants
- Shared props interface for each component finalized

**Acceptance Criteria:**
- Decision rationale documented for every variant decision
- Variant count is minimal — default is CSS tokens only
- Interface for variants is type-safe and exhaustive

---

## Step 11 — Define Component States

**Objective:** Specify the visual appearance of every component state across all themes.

**States to cover for every interactive component:**

| State    | Description |
|----------|-------------|
| Default  | Normal rest state |
| Hover    | Mouse over |
| Active   | Mouse pressed / touch |
| Focus    | Keyboard focus (must be visible — accessibility) |
| Disabled | Non-interactive |
| Loading  | Skeleton / spinner variant |
| Empty    | No data to display |
| Error    | Failed state |

**Deliverables:**
- State specification table per component (can be text-only if design language is clear)
- Loading skeleton design per component
- Empty state illustrations or copy (ProductGrid empty, search no results)
- Error state messaging and visual treatment

**Acceptance Criteria:**
- No component has an undefined state — all 8 states covered or explicitly marked as N/A
- Focus rings are visible in all 3 themes (accessibility requirement)
- Reduced-motion variant specified where animations are present

---

## Step 12 — Review and Approve Designs

**Objective:** Final human review gate before implementation begins.

**Deliverables:**
- Complete design review checklist per page per theme:
  - [ ] Visual identity matches theme requirements
  - [ ] All required sections/components present
  - [ ] All 3 viewports reviewed
  - [ ] All component states defined
  - [ ] Design tokens complete and consistent
  - [ ] Component variants justified
  - [ ] Accessibility requirements met (focus states, contrast)
  - [ ] Animation reduced-motion alternatives defined

**Acceptance Criteria:**
- All checklist items passed for all 3 themes × 4 pages
- Design token tables reviewed and approved
- Written sign-off recorded before any frontend code is written
- Any post-approval design changes go through a mini revision cycle (steps 3–12 scoped to the changed element)