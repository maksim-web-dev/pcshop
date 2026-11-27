# Task 1.5.1 — Prepare CatalogPage Design and Google Stitch Prompts

Act as a senior UI/UX designer, frontend architect and AI prompt engineer specializing in e-commerce applications.

## 1. Read project context

Read:

- structure/project.md
- structure/plan.md
- structure/plan_frontend.md
- structure/plan_backend.md
- structure/plan_design.md
- structure/plan_ai_workflow.md
- structure/plan_frontend_testing.md
- structure/progress.md
- structure/steps/result11.md
- structure/design/pages/home.md
- structure/design/visual-requirements.md
- All three theme specifications.
- All three approved-design-guidance.md files.
- All three DESIGN.md files.
- structure/design/stitch/homepage/review-v2.md
- structure/design/stitch/homepage/mock-products.md

Inspect the actual HomePage V2 screenshots and HTML files.

Follow Design Step 4 — Generate CatalogPage Concepts from plan_design.md.

## 2. Resolve HomePage review decisions

Apply the following proposed review decisions:

- Use HomePage V2 as the design baseline candidate for all three themes.
- Do not request HomePage V3 generation.
- Display six featured products in every theme, including Premium.
- Use a balanced 3-column, 2-row desktop featured product grid.
- Preserve theme-specific availability indicator styling.
- Gaming decorative palette restrictions must not prohibit accessible semantic success, warning and error colors.
- Search must remain discoverable and functionally equivalent across themes.
- Missing Stitch components/*.html references are not implementation dependencies.
- Global design tokens remain provisional.

Update home.md, mock-products.md, normalized design guidance and other relevant current specifications where necessary.

Preserve original Stitch exports and historical execution reports.

Record the decisions as pending explicit project owner approval if that approval has not been provided.

Do not fabricate human sign-off.

## 3. Analyze backend API capabilities

Inspect the actual backend documentation and source code where available.

Identify:

- Product listing endpoint.
- Category listing endpoint.
- Supported category identifiers.
- Search parameters.
- Supported filtering parameters.
- Category-specific product attributes.
- Supported sorting options.
- Pagination request and response format.
- Total product count.
- Product availability.
- Product images.
- Error response format.

Create:

structure/design/stitch/catalog/backend-capabilities.md

Distinguish:

- Verified API capabilities.
- Frontend presentation requirements.
- Unsupported features.
- Assumptions requiring confirmation.

Do not invent API capabilities.

If range filters, price filters, specific sorting options or other filters are unsupported, document the limitation.

Do not modify backend code or API contracts.

## 4. Define shared CatalogPage requirements

Create:

structure/design/pages/catalog.md

Include:

- Page objectives.
- Navigation and breadcrumbs.
- Shared header.
- Search.
- ThemeSwitcher.
- Cart control.
- Category navigation.
- Filter panel.
- Active filter indicators.
- Clear filters action.
- Sort control.
- Product result count.
- Product grid.
- Product cards.
- Pagination.
- Shared footer.
- Responsive behavior.
- Loading state.
- Empty state.
- Error state.
- Accessibility requirements.
- API dependencies.
- URL and application state requirements.

Preserve selected filters, search, sorting and pagination state when switching themes.

Theme switching must not cause unnecessary API requests.

Reuse HomePage components wherever possible.

Clearly identify unsupported or provisional functionality.

## 5. Create a shared CatalogPage mock dataset

Create:

structure/design/stitch/catalog/mock-products.md

Reuse the six existing HomePage products without changing their names, prices or specifications.

Extend the dataset only where necessary to demonstrate a coherent catalog category, filtering and pagination experience.

Clearly label additional products as mock data.

Use the same dataset across all three themes.

Ensure consistency between:

- Selected category.
- Applied filters.
- Visible products.
- Product count.
- Sorting order.
- Pagination metadata.
- Product specifications.
- Product availability.

Do not display incompatible products under a selected category.

Choose a representative catalog scenario that demonstrates actual backend-supported filter capabilities.

Do not invent backend records.

## 6. Preserve the established HomePage design language

All CatalogPage concepts must reuse the corresponding HomePage V2:

- Brand identity.
- Header structure.
- Navigation.
- Search treatment.
- ThemeSwitcher.
- Typography.
- Product card styling.
- Availability indicators.
- Semantic colors.
- Border radius.
- Shadows.
- Footer structure.

Use the actual V2 screenshot and normalized design guidance as the primary visual references.

External moodboards are secondary references only.

Do not redesign the application identity.

## 7. Prepare Premium CatalogPage prompt

Create:

structure/design/stitch/catalog/premium-prompt.md

Visual direction:

- Warm neutral surfaces.
- Refined editorial typography.
- Generous whitespace.
- Large product photography.
- Minimalist filter sidebar.
- Elegant active filter indicators.
- Three-column desktop grid as the initial design direction.
- Restrained borders and shadows.
- Subtle interaction affordances.

Maintain practical usability.

Do not hide primary actions.

Preserve Premium HomePage V2 identity.

## 8. Prepare Gaming CatalogPage prompt

Create:

structure/design/stitch/catalog/gaming-prompt.md

Visual direction:

- Dark atmospheric surfaces.
- Purple and cyan accents.
- Rajdhani headings and established body typography.
- Technology-inspired filter controls.
- Informative product cards.
- Controlled glow effects.
- Balanced three- or four-column desktop grid where space allows.
- Readable technical parameters.
- Accessible secondary text.

Avoid excessive neon and visual noise.

Preserve Gaming HomePage V2 identity.

## 9. Prepare Professional CatalogPage prompt

Create:

structure/design/stitch/catalog/professional-prompt.md

Visual direction:

- Light surfaces.
- Blue and graphite accents.
- Inter typography.
- Efficient product discovery.
- Clear filter hierarchy.
- Information-rich product cards.
- Compact but readable layout.
- Functional sorting and pagination controls.
- Balanced product grid.

Avoid generic admin dashboard aesthetics.

Preserve Professional HomePage V2 identity.

## 10. Requirements for all three standalone prompts

Each Google Stitch prompt must include:

1. PCShop product description.
2. CatalogPage objective.
3. Existing theme identity.
4. Desktop viewport width of 1440px.
5. Instructions to create a new CatalogPage within the existing theme-specific Stitch project.
6. Instructions to preserve HomePage V1 and V2.
7. Reference to the existing HomePage V2 design.
8. Complete page structure.
9. Shared mock product data.
10. Selected catalog category.
11. Supported filters.
12. Active filter example.
13. Supported sorting controls.
14. Pagination example.
15. Product result count.
16. Theme-specific visual requirements.
17. Product card requirements.
18. Accessibility requirements.
19. Design anti-patterns.
20. Expected visual deliverables.

Each prompt must be self-contained.

Do not assume Google Stitch can read files from the local repository.

Request a high-fidelity complete desktop website page.

Do not request a wireframe or a generic dashboard.

All themes must provide equivalent functionality.

## 11. Create a CatalogPage review checklist

Create:

structure/design/stitch/catalog/review-checklist.md

Reuse the 13-dimension HomePage evaluation rubric.

Add separate catalog-specific acceptance checks:

- Filter discoverability.
- Filter readability.
- Filter grouping.
- Active filter visibility.
- Clear filters affordance.
- Sorting visibility.
- Result count consistency.
- Product data consistency.
- Pagination clarity.
- Product card consistency with HomePage.
- Header and footer consistency.
- Alignment with backend capabilities.
- Feasibility of mobile filter drawer.

Target at least 4/5 for subjective visual quality.

Keep measurable accessibility requirements separate from subjective scoring.

Do not claim tested WCAG compliance.

## 12. Prepare output directories and manual instructions

Create:

- structure/design/stitch/catalog/README.md
- structure/design/stitch/catalog/premium/README.md
- structure/design/stitch/catalog/gaming/README.md
- structure/design/stitch/catalog/professional/README.md

Document:

- How to generate CatalogPage in the existing Stitch projects.
- Which HomePage V2 references to provide.
- Which prompts to use.
- How to preserve existing HomePage designs.
- How to export screenshots and HTML.
- How to save updated DESIGN.md if actually generated.
- How to preserve exact prompts.

Use the same artifact naming convention as HomePage:

- v1-generated.png
- v1-code.html
- v1-prompt.md
- DESIGN.md, only if a new design system is exported.

Do not create fake generated artifacts.

## 13. Update progress

Update structure/progress.md.

- Correct obsolete visual reference collection statuses.
- Preserve the incomplete original reference collection target.
- Record HomePage V2 review completion.
- Keep human approval status accurate.
- Record CatalogPage prompt preparation.
- Mark manual CatalogPage generation as pending.
- Preserve actual Playwright MCP verification status.

Do not mark planned or unverified capabilities as implemented.

## 14. Constraints

- Documentation and design prompt preparation only.
- Do not modify application source code.
- Do not modify backend API contracts.
- Do not install dependencies.
- Do not generate actual Stitch mockups.
- Do not create agents or skills yet.
- Do not overwrite original HomePage artifacts.
- Do not introduce unsupported business features.
- Do not fabricate API capabilities.
- Write new documentation in English.
- Preserve previous prompt and result files.

## 15. Save execution report

Write the complete report to:

structure/steps/result12.md

Include:

1. Task objective.
2. HomePage review decisions and approval status.
3. Verified backend capabilities.
4. Unsupported features and limitations.
5. Shared CatalogPage requirements.
6. Shared mock dataset.
7. Summary of all three Stitch prompts.
8. Created and modified files.
9. CatalogPage review criteria.
10. Remaining risks.
11. Manual instructions for Step 13.
12. Questions requiring human approval.
13. Task completion status.

Stop after completing Task 1.5.1.

Do not proceed with actual Google Stitch generation.