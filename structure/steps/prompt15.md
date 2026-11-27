# Task 1.6.1 — Prepare ProductPage Design and Google Stitch Prompts

Act as a senior UI/UX designer, frontend architect and AI prompt engineer specializing in e-commerce applications and multi-theme Design Systems.

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
- structure/steps/result12.md
- structure/steps/result14.md
- structure/design/pages/home.md
- structure/design/pages/catalog.md
- structure/design/visual-requirements.md
- All three theme specifications.
- All HomePage and CatalogPage normalized design guidance files.
- All three original DESIGN.md files.
- structure/design/stitch/homepage/mock-products.md
- structure/design/stitch/catalog/mock-products.md
- structure/design/stitch/catalog/backend-capabilities.md
- structure/design/stitch/catalog/review-v1.md

Inspect the actual HomePage V2 and CatalogPage V1 screenshots.

Follow Design Step 5 — Generate ProductPage Concepts from plan_design.md.

## 2. Resolve previous CatalogPage review findings

Apply the following proposed review decisions:

- Use CatalogPage V1 as the baseline candidate for all three themes.
- Do not request CatalogPage V2 generation unless a critical issue is discovered.
- Use a compact visible desktop search field consistently across Premium pages.
- On mobile, search may be represented by an accessible icon opening a search interface.
- Preserve equivalent search functionality across all themes.
- Use original backend parameter values for API requests.
- Separate raw filter values from formatted display labels.
- Do not implement string transformations to reconstruct backend filter values.
- Render category parameters dynamically.
- Include Screen Size when returned by the category API.
- Use authoritative backend product images and data.

Correct inconsistent current documentation where necessary.

Recalculate CatalogPage evaluation totals from the 13 individual scores.

The expected totals are:

- Premium: 56/65.
- Gaming: 60/65.
- Professional: 62/65.

Document the inconsistent Professional total in result14.md without silently rewriting historical execution reports.

Record review decisions as pending human approval if explicit project owner approval has not been provided.

## 3. Verify ProductPage backend capabilities

Inspect actual backend source code, route registration, controllers, services, repositories, Prisma models, validation schemas and tests where available.

Verify:

- GET /api/products/:id endpoint registration.
- Product identifier format.
- Product response DTO.
- Product name.
- Description.
- Price format and currency conventions.
- Stock quantity.
- Product image URLs.
- Product parameters.
- Category metadata.
- Product type metadata.
- Product not found response.
- Inactive product behavior.
- Error response format.

Verify whether related products can be retrieved through the existing product listing endpoint using category filters.

Do not claim that a dedicated recommendations or related-products endpoint exists unless verified.

Verify whether backend cart operations exist.

If no cart API exists, preserve the planned local Zustand cart behavior.

Do not modify backend code or API contracts.

Create:

structure/design/stitch/product/backend-capabilities.md

Distinguish:

- Verified capabilities.
- Capabilities inferred from documentation.
- Unsupported features.
- Frontend-only behavior.
- Assumptions requiring confirmation.

## 4. Define shared ProductPage requirements

Create:

structure/design/pages/product.md

Include:

- Page objectives.
- Product identifier and routing.
- Shared Header and Footer.
- Breadcrumbs.
- Search.
- ThemeSwitcher.
- Cart control.
- Product image gallery.
- Image thumbnails.
- Image zoom.
- Product title.
- Product category.
- Product price.
- Product availability.
- Key specification badges.
- Quantity selection where supported by the existing cart requirements.
- Add to Cart action.
- Product description.
- Technical specification table.
- Related products, if supported by existing project requirements and API capabilities.
- Loading state.
- Product not found state.
- Out-of-stock state.
- API error state.
- Missing image fallback.
- Responsive behavior.
- Accessibility requirements.
- API dependencies.
- Application state requirements.

Product specifications must be rendered dynamically from backend data.

Use category metadata to resolve parameter labels and units.

Do not hardcode laptop-specific characteristics into shared ProductPage components.

The page must support other product categories, including PCs, monitors, keyboards and mice.

Theme switching must preserve selected product, gallery position, quantity, cart state and navigation state.

Theme switching must not trigger unnecessary API requests.

## 5. Define shared ProductPage mock data

Create:

structure/design/stitch/product/mock-product.md

Use the existing APEX Gaming Laptop 15" from the HomePage and CatalogPage datasets.

Preserve:

- Name: APEX Gaming Laptop 15".
- Price: $1,799.
- Product type: Laptop.
- Category: Gaming Laptop.
- CPU: Intel Core i7-13700H.
- GPU: NVIDIA RTX 4070.
- RAM: 32 GB DDR5.
- Storage: 1 TB NVMe SSD.
- Display: 15.6-inch FHD.
- Refresh rate: 144 Hz.
- Availability: In stock.

Use identical product information in all three theme prompts.

Define a short illustrative product description.

Do not introduce unsupported technical claims.

Clearly distinguish design-only mock fields from verified backend fields.

If related products are included, reuse existing compatible products from the CatalogPage mock dataset.

Do not invent discounts, original prices, ratings, reviews or commercial promises.

## 6. Preserve existing visual identity

All ProductPage concepts must reuse the corresponding HomePage V2 and CatalogPage V1:

- Brand identity.
- Header structure.
- Navigation.
- Search treatment.
- ThemeSwitcher.
- Typography.
- Color palette.
- Buttons.
- Availability indicators.
- Semantic colors.
- Border radius.
- Shadows.
- Footer structure.

Use existing PCShop designs as primary visual references.

Do not redesign the entire application.

## 7. Prepare Premium ProductPage prompt

Create:

structure/design/stitch/product/premium-prompt.md

Visual direction:

- Warm neutral surfaces.
- Refined editorial typography.
- Large product photography.
- Generous whitespace.
- Elegant thumbnail gallery.
- Minimalist purchase section.
- Prominent product title and price.
- Refined black primary CTA.
- Clean technical specification table.
- Subtle borders and shadows.

Preserve practical usability and readable technical information.

Do not hide primary actions.

## 8. Prepare Gaming ProductPage prompt

Create:

structure/design/stitch/product/gaming-prompt.md

Visual direction:

- Dark atmospheric surfaces.
- Purple and cyan accents.
- Rajdhani headings and Inter body typography.
- Expressive product gallery.
- Controlled lighting effects.
- Visually prominent GPU and CPU specifications.
- Readable technical specification table.
- Purple primary CTA.
- Visible availability indicator.
- Clear purchase controls.

Avoid excessive neon, decorative effects and low-contrast secondary text.

Decorative palette restrictions must not prohibit accessible semantic status colors.

## 9. Prepare Professional ProductPage prompt

Create:

structure/design/stitch/product/professional-prompt.md

Visual direction:

- Light surfaces.
- Blue and graphite accents.
- Inter typography.
- Structured product gallery.
- Clear product information hierarchy.
- Prominent price and availability.
- Functional purchase section.
- Information-rich technical specification table.
- Efficient use of available space.
- Clear blue primary CTA.

Maintain a polished commercial storefront appearance.

Avoid generic admin dashboard aesthetics.

## 10. Requirements for all three standalone Stitch prompts

Each prompt must include:

1. PCShop product and brand description.
2. ProductPage objective.
3. Existing visual identity.
4. Desktop viewport width of 1440px.
5. Instructions to create a new ProductPage in the existing theme-specific Stitch project.
6. Instructions to preserve HomePage and CatalogPage artifacts.
7. Existing HomePage V2 and CatalogPage V1 as primary visual references.
8. Complete page structure.
9. Identical shared mock product data.
10. Product gallery with illustrative images of the same product.
11. Product information hierarchy.
12. Price and availability presentation.
13. Add to Cart action.
14. Technical specification table.
15. Product description.
16. Related products only if consistent with the project scope.
17. Shared Header and Footer.
18. Theme-specific visual requirements.
19. Accessibility requirements.
20. Design anti-patterns.
21. Expected visual deliverables.

All prompts must be self-contained.

Google Stitch must not require access to local repository files.

Request a complete high-fidelity desktop ProductPage, not a wireframe.

Do not request a new homepage or catalog page.

Do not introduce unsupported purchasing, financing, delivery, warranty, rating, review or account functionality.

## 11. Create ProductPage review checklist

Create:

structure/design/stitch/product/review-checklist.md

Reuse the established 13-dimension visual evaluation rubric.

Add ProductPage-specific acceptance checks:

- Product image prominence.
- Image gallery clarity.
- Thumbnail discoverability.
- Product title readability.
- Price visibility.
- Availability visibility.
- Primary CTA prominence.
- Quantity control clarity, if included.
- Product specification readability.
- Product information consistency.
- Description readability.
- Related product consistency, if included.
- Header and Footer consistency.
- Consistency with HomePage and CatalogPage.
- Backend capability alignment.
- Out-of-stock behavior requirements.
- Responsive implementation feasibility.

Target at least 4/5 for subjective visual quality.

Separate subjective scores from measurable accessibility requirements.

Do not claim tested accessibility or functional compliance.

## 12. Prepare output directories and manual instructions

Create:

- structure/design/stitch/product/README.md
- structure/design/stitch/product/premium/README.md
- structure/design/stitch/product/gaming/README.md
- structure/design/stitch/product/professional/README.md

Describe:

- How to generate ProductPage in existing Stitch projects.
- How to use HomePage V2 and CatalogPage V1 as visual context.
- Which prompts to submit.
- How to preserve existing designs.
- How to export screenshots and HTML.
- How to preserve exact submitted prompts.
- How to export DESIGN.md only if a new or updated design system is actually generated.

Use the established naming convention:

- v1-generated.png
- v1-code.html
- v1-prompt.md
- DESIGN.md, only if applicable.

Do not create placeholder screenshots or fake exports.

## 13. Update project documentation

Update structure/progress.md and relevant current specifications.

Record:

- Step 14 — CatalogPage review completed.
- CatalogPage approval status.
- Step 15 — ProductPage prompt preparation.
- Step 16 — Manual ProductPage generation pending.
- Step 17 — ProductPage design review pending.

Preserve the actual Playwright MCP verification status.

Do not finalize global Design Tokens yet.

Do not claim unverified capabilities are implemented.

## 14. Constraints

- Documentation, backend capability inspection and prompt preparation only.
- Do not modify application source code.
- Do not modify backend API contracts.
- Do not install dependencies.
- Do not generate actual Stitch mockups.
- Do not create agents or skills yet.
- Do not overwrite original Stitch artifacts.
- Do not overwrite historical prompt and result files.
- Do not introduce unsupported business functionality.
- Do not fabricate backend capabilities.
- Write new documentation in English.

## 15. Save execution report

Write the complete report to:

structure/steps/result15.md

Include:

1. Task objective.
2. Previous review findings and resolutions.
3. CatalogPage score corrections.
4. Actual verified ProductPage backend capabilities.
5. Unsupported features and assumptions.
6. Shared ProductPage requirements.
7. Shared mock product data.
8. Summary of three Stitch prompts.
9. Created and modified files.
10. ProductPage review criteria.
11. Remaining risks and limitations.
12. Manual instructions for Step 16.
13. Questions requiring human approval.
14. Task completion status.

Stop after completing this task.

Do not proceed with Google Stitch generation.