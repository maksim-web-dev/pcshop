# Task 1.6.3 — ProductPage Design Review and Baseline Preparation

Act as a senior UI/UX reviewer, frontend architect and Design System architect specializing in multi-theme e-commerce applications.

## 1. Read project context

Read:

- structure/project.md
- structure/plan_frontend.md
- structure/plan_design.md
- structure/plan_ai_workflow.md
- structure/plan_frontend_testing.md
- structure/progress.md
- structure/steps/result11.md
- structure/steps/result14.md
- structure/steps/result15.md
- structure/steps/prompt16_manualy.md
- structure/design/pages/home.md
- structure/design/pages/catalog.md
- structure/design/pages/product.md
- structure/design/visual-requirements.md
- All three theme specifications.
- All HomePage and CatalogPage normalized design guidance files.
- structure/design/stitch/product/backend-capabilities.md
- structure/design/stitch/product/mock-product.md
- structure/design/stitch/product/review-checklist.md

## 2. Validate generated ProductPage artifacts

For each theme, inspect:

- README.md
- v1-generated.png
- v1-code.html
- v1-prompt.md

Verify:

- All required artifacts exist.
- Screenshots are readable.
- HTML files are present.
- Submitted prompts contain the corresponding original prompt and final mandatory cross-theme requirements.
- Each artifact belongs to the correct theme.
- Existing HomePage and CatalogPage artifacts remain preserved.

Record actual screenshot dimensions.

Do not require a new DESIGN.md if Stitch did not generate one.

## 3. Document manual Step 16

Create:

structure/steps/result16.md

Include:

- Actual Google Stitch generation results.
- Artifact inventory.
- Screenshot dimensions.
- Submitted prompts.
- Generated HTML files.
- Existing Design System reuse.
- Known limitations.

Do not invent execution times, generation statistics or undocumented manual actions.

## 4. Perform visual design review

Visually inspect all three ProductPage screenshots.

Compare each ProductPage with its corresponding HomePage V2 and CatalogPage V1.

Evaluate all 13 criteria from review-checklist.md using the established 1–5 scoring rubric.

Provide evidence and reasoning for each score.

Calculate totals from the individual scores and verify their arithmetic consistency.

Separate subjective visual quality from verified technical compliance.

## 5. Validate ProductPage-specific requirements

Inspect actual screenshots and HTML.

Verify:

- APEX Gaming Laptop 15" product identity.
- Price of $1,799.
- Visible availability indicator.
- Main product image.
- Three gallery thumbnails.
- Quantity selector with initial value 1.
- Visible Add to Cart button.
- Identical product description.
- Five correct technical specification parameters.
- Three related products.
- Identical related product names and prices.
- Breadcrumbs.
- Search, cart and theme switching controls.
- Absence of unsupported ratings, reviews, discounts, financing and purchasing functionality.

Distinguish static HTML representation from actual working functionality.

## 6. Validate previous review findings

### Shared findings

- All three themes preserve identical main product identity and price.
- All three themes contain five technical specification parameters.
- Product descriptions are identical.
- All three themes display the same related products.
- Product imagery differs across themes.
- Footer contains potentially unsupported links and contact controls.
- Responsive behavior and accessibility remain unverified.
- Generated product badges may contain information not available in backend metadata.

### Premium

- Refined editorial typography and neutral surfaces are preserved.
- Secondary text readability requires verification.
- Generous vertical spacing should remain purposeful.

### Gaming

- Dark visual identity and atmospheric product presentation are preserved.
- Purple and cyan accents are consistent.
- Secondary text contrast requires verification.
- Inspect ThemeSwitcher markup: the active selection indicator appears to be associated with Professional rather than Gaming.

### Professional

- Purchase section and product information hierarchy are clear.
- Stock quantity is displayed as "10 in stock".
- Product cards include additional CPU badges.
- Verify that these presentation differences remain consistent with shared product data.

Validate these observations against actual artifacts.

Do not automatically treat previous review observations as correct.

## 7. Resolve implementation requirements

Update the ProductPage specification where necessary.

Requirements:

- Route products using UUID identifiers.
- Use backend data as the authoritative product information source.
- Render technical specifications dynamically from parameters[].
- Use parameter names and units provided by backend.
- Do not invent technical specifications or reconstruct missing values.
- Use shared product images from imageUrls[].
- Support zero, one or multiple product images.
- Do not assume that every product has exactly three images.
- Handle missing descriptions.
- Handle inactive products and out-of-stock products.
- Prevent Add to Cart for inactive or unavailable products.
- Preserve gallery selection and selected quantity when switching themes.
- Preserve local cart state.
- Correctly indicate the active theme.
- Separate raw backend values from formatted display labels.
- Use a shared currency formatting strategy once the backend currency convention is confirmed.
- Do not copy unsupported footer functionality from Stitch exports.

Quantity selection must account for available stock and quantities already present in the local cart.

Local cart validation must not be described as a backend stock reservation.

## 8. Define related product behavior

Review the verified backend capabilities.

Use the existing product listing endpoint with category filtering.

Requirements:

- Exclude the current product.
- Exclude inactive products where supported by the existing API.
- Display a maximum of three related products for the initial design.
- Handle fewer than three available products.
- Hide the section when no suitable products exist.
- Reuse the shared ProductCard component.
- Do not introduce a dedicated recommendation service.
- Do not claim AI-powered recommendations.

Document any unresolved API limitations.

## 9. Compare all existing page designs

Compare HomePage V2, CatalogPage V1 and ProductPage V1 across all three themes.

Identify consistency and conflicts in:

- Header.
- Navigation.
- Search.
- ThemeSwitcher.
- Cart controls.
- Breadcrumbs.
- Typography.
- Primary and secondary buttons.
- ProductCard.
- Availability indicators.
- Semantic colors.
- Product imagery.
- Spacing.
- Border radii.
- Shadows.
- Footer.

Identify shared components and potential theme-specific presentation variants.

Do not finalize global design tokens yet.

## 10. Create normalized ProductPage design guidance

Create:

- structure/design/stitch/product/premium/approved-design-guidance.md
- structure/design/stitch/product/gaming/approved-design-guidance.md
- structure/design/stitch/product/professional/approved-design-guidance.md

Each file must include:

- Reference screenshot.
- Reference generated HTML.
- Existing HomePage and CatalogPage design guidance.
- Theme identity.
- ProductPage-specific design rules.
- Shared component requirements.
- Product gallery presentation.
- Purchase section presentation.
- Technical specification presentation.
- Related product presentation.
- Required implementation corrections.
- Accessibility risks.
- Responsive behavior requirements.

Preserve original Stitch exports.

Treat normalized design guidance as provisional until explicit human approval is recorded.

## 11. Create ProductPage review report

Create:

structure/design/stitch/product/review-v1.md

Include:

- Artifact validation results.
- Full 13-criterion evaluation matrix.
- Evidence for each score.
- ProductPage-specific acceptance checklist.
- Cross-theme functional consistency.
- HomePage and CatalogPage consistency.
- Backend capability alignment.
- Identified issues.
- Required implementation corrections.
- Recommended approval status.
- Whether V2 generation is necessary.

Prefer accepting V1 if no critical design problem requires regeneration.

## 12. Update documentation

Update:

- structure/design/pages/product.md
- All three ProductPage README.md files.
- structure/design/stitch/product/README.md
- structure/progress.md

Record:

- Step 16 — Manual ProductPage generation completed.
- Step 17 — ProductPage review prepared.
- Actual human approval status.
- Step 18 — NotFoundPage and Responsive Design Planning pending.

Preserve actual Playwright MCP verification status.

Do not fabricate human approval.

## 13. Prepare for the remaining design phase

Create:

structure/design/design-phase-summary.md

Summarize:

- Nine generated primary desktop page designs.
- Recommended baseline version for each page and theme.
- Shared visual principles.
- Cross-page component inventory.
- Known design inconsistencies.
- Required implementation corrections.
- Outstanding responsive design requirements.
- Outstanding accessibility requirements.
- Remaining Design System work.

Recommend a minimal approach to NotFoundPage design.

Recommend an efficient responsive design strategy based on existing desktop concepts.

Avoid unnecessary Google Stitch generation cycles.

Identify which remaining design tasks can be handled during frontend implementation and visual validation.

Do not implement these tasks yet.

## 14. Constraints

- Review and documentation only.
- Do not modify application source code.
- Do not modify backend API contracts.
- Do not install dependencies.
- Do not create AI agents or skills yet.
- Do not overwrite original Stitch artifacts.
- Do not generate new mockups.
- Do not fabricate visual observations.
- Do not claim verified WCAG compliance.
- Do not claim working functionality based on static HTML.
- Preserve historical prompts and result files.
- Write new documentation in English.

## 15. Save execution report

Write the complete report to:

structure/steps/result17.md

Include:

1. Task objective.
2. Reviewed artifacts.
3. Artifact validation results.
4. Visual evaluation scores.
5. ProductPage-specific acceptance results.
6. Cross-theme consistency.
7. Cross-page Design System consistency.
8. Backend capability alignment.
9. Identified issues.
10. Required implementation corrections.
11. Created and modified files.
12. Recommended approval status.
13. Remaining design tasks.
14. Recommendations for completing the design phase efficiently.
15. Remaining limitations.
16. Task completion status.

Stop after completing Task 1.6.3.

Wait for human approval before proceeding.