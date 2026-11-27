# Task 1.7–1.8 — NotFoundPage and Responsive Design Specification

Act as a senior UI/UX designer, frontend architect and Design System architect.

## 1. Read project context

Read:

- structure/project.md
- structure/plan.md
- structure/plan_frontend.md
- structure/plan_design.md
- structure/plan_ai_workflow.md
- structure/plan_frontend_testing.md
- structure/progress.md
- structure/steps/result17.md
- structure/design/design-phase-summary.md
- structure/design/visual-requirements.md
- All three theme specifications.
- All three page specifications.
- All nine normalized approved-design-guidance.md files.
- HomePage V2, CatalogPage V1 and ProductPage V1 screenshots and HTML files.

## 2. Record design baseline decisions

Use the following recommended baseline versions:

- HomePage V2 for all three themes.
- CatalogPage V1 for all three themes.
- ProductPage V1 for all three themes.

Do not request further Google Stitch generation.

Resolve the following proposed decisions:

- Six featured products on HomePage in all themes.
- Compact visible desktop search field in Premium.
- Professional remains the default theme.
- Semantic status colors are allowed in all themes.
- Original backend values are authoritative for filter requests.
- Backend product data and images are authoritative at runtime.
- Unsupported footer links and contact information must not be implemented.

Record explicit project owner approval only if it has actually been provided.

Otherwise keep human approval pending.

Documentation preparation may continue before final human approval, but frontend implementation requires approval of the final design baseline.

## 3. Correct documentation inconsistencies

Update relevant current documentation:

- Remove duplicated Design Steps 6–8 from progress.md.
- Correct outdated ProductPage generation statuses.
- Use consistent human approval requirements.
- Distinguish nine selected desktop design candidates from twelve saved page versions.
- Do not claim that the exact number of Google Stitch generation requests is known.
- Do not describe static HTML as evidence of working React, Zustand or backend integration.
- Keep the actual application currency convention unresolved until verified.
- Use only supported application routes for footer navigation.
- Preserve the actual Playwright MCP verification status.

Preserve historical execution reports.

Document corrections rather than silently changing historical observations.

## 4. Define NotFoundPage

Create:

structure/design/pages/not-found.md

Define a shared NotFoundPage specification for all three themes.

Requirements:

- Shared Header.
- Shared Footer.
- Visible ThemeSwitcher.
- Clear 404 status.
- Clear page-not-found message.
- Primary navigation action to the existing product catalog.
- Secondary navigation action to HomePage, if consistent with existing navigation requirements.
- Responsive centered layout.
- Accessible heading hierarchy.
- Keyboard-accessible navigation.
- Theme-specific presentation.

Premium direction:

- Warm neutral surfaces.
- Elegant serif heading.
- Restrained typography and decoration.
- Graphite primary CTA.

Gaming direction:

- Dark surfaces.
- Expressive 404 typography.
- Purple and cyan accents.
- Controlled decorative effects.
- Clear explanation that the requested page does not exist.

Professional direction:

- Light surfaces.
- Inter typography.
- Blue accents.
- Practical and concise navigation actions.

Do not introduce unsupported business functionality.

Do not require a separate Google Stitch mockup.

Describe the distinction between:

- Unknown application route.
- Product not found.
- Inactive product.
- Temporary API failure.

Do not treat network or server errors as ordinary 404 errors.

## 5. Define responsive design principles

Create:

structure/design/responsive-design.md

Use the existing desktop concepts as the primary design references.

Define:

- Mobile-first implementation principles.
- Proposed CSS breakpoint strategy.
- Container widths.
- Horizontal padding.
- Grid behavior.
- Responsive typography.
- Responsive spacing.
- Image scaling and aspect ratios.
- Content reflow.
- Navigation behavior.
- Touch target requirements.
- Reduced-motion support.
- Prevention of horizontal overflow.

Keep screenshot validation widths separate from CSS breakpoints.

Required validation widths:

- Mobile: 390px.
- Tablet: 768px.
- Desktop: 1440px.

Also consider intermediate viewport widths and narrow screens.

Do not assume that the width of exported Stitch PNG files is the original design viewport width.

## 6. Define responsive shared components

Document desktop, tablet and mobile behavior for:

- Header.
- Navigation.
- SearchInput.
- SearchOverlay.
- ThemeSwitcher.
- CartBadge.
- Footer.
- Breadcrumbs.
- ProductCard.
- ProductGrid.
- AvailabilityIndicator.
- Buttons.
- Form controls.
- Dialogs and drawers.

All three themes must preserve equivalent functionality.

Avoid duplicating business logic or entire pages for different viewport sizes.

Prefer responsive CSS and semantic design tokens.

## 7. Define responsive HomePage

Specify:

- Hero banner stacking behavior.
- Text and image hierarchy.
- Category grid behavior.
- Featured product grid behavior.
- CTA positioning.
- Image cropping.
- Theme-specific visual density.

Preserve six featured products.

Do not hide required content on mobile solely to simplify implementation.

## 8. Define responsive CatalogPage

Specify:

- Desktop FilterPanel sidebar.
- Tablet and mobile FilterDrawer.
- Accessible drawer opening and closing.
- Focus management and focus restoration.
- Active filter indicators.
- Filter removal.
- Clear filters action.
- Sorting controls.
- Result count.
- Responsive ProductGrid.
- Pagination.
- Loading, empty and error layouts.

Use dynamic backend category metadata.

Preserve single-selection semantics for each filter parameter.

Changing viewport size or active theme must preserve search, filters, sorting and pagination state.

Specify whether filters are applied immediately or through an explicit Apply action, ensuring consistent behavior and avoiding unnecessary API requests.

## 9. Define responsive ProductPage

Specify:

- Desktop image gallery and purchase section layout.
- Tablet layout adaptation.
- Mobile stacked layout.
- Responsive thumbnail controls.
- Image zoom behavior.
- Price and availability visibility.
- Quantity selector.
- Add to Cart placement.
- Optional mobile sticky purchase CTA.
- Technical specification table behavior.
- Product description.
- Related product grid.

Ensure that any sticky purchase CTA does not obscure content or interfere with keyboard navigation.

Preserve selected image, selected quantity and cart state when switching themes or resizing the viewport.

Use dynamic product data and support zero, one or multiple product images.

## 10. Define responsive NotFoundPage

Specify:

- Responsive message layout.
- Typography scaling.
- Header and Footer reuse.
- Accessible navigation actions.
- Theme-specific styling.
- Behavior on narrow mobile screens.

## 11. Create a responsive component matrix

Create:

structure/design/responsive-component-matrix.md

For each shared component and page section, document:

- Component name.
- Desktop behavior.
- Tablet behavior.
- Mobile behavior.
- Theme-specific differences.
- Shared functionality.
- Accessibility requirements.
- State preservation requirements.
- Implementation considerations.
- Validation criteria.

Identify potential components that require presentation variants rather than CSS changes alone.

## 12. Define responsive acceptance criteria

Update structure/plan_frontend_testing.md where necessary.

Include:

- All four pages tested at 390px, 768px and 1440px.
- All three visual themes.
- No unintended horizontal overflow.
- No clipped text or inaccessible actions.
- Readable technical specifications.
- Accessible mobile navigation.
- Accessible FilterDrawer.
- Keyboard and focus management.
- Theme switching preserves application state.
- Layout changes preserve application state.
- Visual regression testing after implementation.

Preserve the planned 36 baseline screenshots.

Clarify that screenshots will be captured from the implemented application, not invented from missing Stitch exports.

## 13. Update project plans

Update:

- structure/plan_design.md
- structure/plan.md
- structure/progress.md
- structure/design/design-phase-summary.md

Document the streamlined design strategy:

- Nine primary desktop designs are sufficient as baseline candidates.
- NotFoundPage will be designed using the shared Design System.
- Responsive designs will be implemented and validated during frontend development.
- No further Stitch generation is currently planned.
- Shared Design System specification is the next task.
- Theme-specific tokens and component states remain pending.
- Final human design approval remains an explicit gate before frontend implementation.

Do not skip responsive or accessibility requirements simply because no additional mockups are generated.

## 14. Constraints

- Documentation only.
- Do not implement frontend source code.
- Do not modify backend code or API contracts.
- Do not install dependencies.
- Do not generate new Stitch designs.
- Do not create agents or skills yet.
- Do not finalize theme-specific design tokens yet.
- Do not overwrite original generated artifacts.
- Do not overwrite previous prompt or result files.
- Do not fabricate human approval.
- Do not claim verified responsive behavior or WCAG compliance.
- Write documentation in English.

## 15. Save execution report

Write the complete report to:

structure/steps/result18.md

Include:

1. Task objective.
2. Baseline decisions and approval status.
3. Documentation corrections.
4. NotFoundPage specification summary.
5. Responsive design strategy.
6. Shared component responsive behavior.
7. Page-specific responsive behavior.
8. Responsive acceptance criteria.
9. Created and modified files.
10. Remaining design tasks.
11. Risks and unresolved decisions.
12. Readiness for Shared Design System creation.
13. Task completion status.

Stop after completing this task.

Do not proceed to Shared Design System creation yet.