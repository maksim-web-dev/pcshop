# Task 1.2 — Define Visual Requirements for Three Themes

Act as a senior UI/UX designer and Design System architect specializing in premium e-commerce applications.

## 1. Read project context

Read:
- `structure/project.md`
- `structure/plan.md`
- `structure/plan_frontend.md`
- `structure/plan_design.md`
- `structure/plan_ai_workflow.md`
- `structure/plan_frontend_testing.md`
- `structure/steps/result01.md`

Follow Step 1 — Define Visual Requirements from `plan_design.md`.

## 2. Create visual specification files

Create the following files:

- `structure/design/visual-requirements.md`
- `structure/design/themes/premium.md`
- `structure/design/themes/gaming.md`
- `structure/design/themes/professional.md`

## 3. Define shared visual requirements

In `visual-requirements.md`, specify:

- Product identity and target audience.
- Shared UX principles.
- Visual hierarchy.
- Navigation consistency.
- Shared functional requirements.
- Responsive design principles.
- Accessibility requirements.
- Product photography requirements.
- Theme switching experience.
- Consistency of user interactions.
- Loading, empty, error and disabled states.
- Shared requirements for HomePage, CatalogPage, ProductPage and NotFoundPage.

All three themes must represent the same product, not three independent applications.

Preserve business logic and functional requirements from existing specifications.

## 4. Define Premium Minimalism

Create a detailed visual specification for the `premium` theme.

Visual direction:
- Premium technology brand.
- Warm neutral backgrounds.
- Graphite and black accents.
- Elegant typography.
- Generous whitespace.
- Large product photography.
- Minimal visual noise.
- Subtle motion.
- Sophisticated editorial layouts.

Avoid generic templates and excessive decoration.

## 5. Define Gaming & Technology

Create a detailed visual specification for the `gaming` theme.

Visual direction:
- Futuristic technology brand.
- Dark backgrounds.
- Purple and cyan accents.
- Controlled gradients and glow effects.
- Expressive typography.
- Dynamic product presentation.
- Energetic but purposeful animations.
- Strong contrast and visual hierarchy.

Avoid excessive neon, unreadable text and distracting animations.

## 6. Define Modern Technology Store

Create a detailed visual specification for the `professional` theme.

Visual direction:
- Modern commercial electronics store.
- Light backgrounds.
- Blue and graphite accents.
- Clear and practical typography.
- Information-rich product cards.
- Efficient filtering and navigation.
- Balanced visual density.
- Minimal and functional animations.

This is the default theme.

Avoid generic dashboard aesthetics and unnecessary visual complexity.

## 7. Required structure for each theme specification

Each theme document must contain:

1. Visual identity.
2. Target emotional response.
3. Design principles.
4. Proposed color palette with HEX values.
5. Proposed typography and font hierarchy.
6. Spacing and visual density.
7. Grid and layout principles.
8. Border radius and shapes.
9. Shadows and visual effects.
10. Animation and transition principles.
11. Product imagery treatment.
12. Header and navigation direction.
13. Hero banner direction.
14. Product card direction.
15. Catalog and filter panel direction.
16. Product detail page direction.
17. Footer direction.
18. Responsive behavior.
19. Accessibility requirements.
20. Anti-patterns and forbidden design choices.
21. Measurable visual acceptance criteria.

Provide concrete proposed values where useful, including colors, font sizes, spacing, border radii and animation durations.

Mark all proposed values as draft values requiring human approval. Final design tokens will be defined after visual concepts are generated and approved.

Ensure that fonts have appropriate licensing and suitable fallback options.

## 8. Compare the themes

Add a theme comparison matrix to `visual-requirements.md`.

Compare:
- Color palette.
- Typography.
- Spacing.
- Layout density.
- Photography.
- Component shapes.
- Shadows.
- Animation.
- Product cards.
- Hero banners.
- Navigation.
- Catalog experience.
- Product detail experience.

Explain which differences can be implemented through CSS custom properties and which may require theme-specific presentation variants.

Identify potential conflicts between visual diversity, shared components and accessibility.

Clarify that theme switching should be CSS-only wherever possible, but presentation variants may require React re-rendering. Business state and server data must remain unchanged.

## 9. Update progress tracking

Create `structure/progress.md` if it does not exist.

Record:
- Task 1.1 — Completed.
- Task 1.2 — Awaiting human review.
- Remaining design steps — Pending.

Keep prompt numbers and roadmap task IDs separate.

Align the design step numbering with `plan_design.md`.

Clarify that Google Stitch generation for NotFoundPage is optional.

## 10. Constraints

- Documentation only.
- Do not modify backend or frontend source code.
- Do not install dependencies.
- Do not generate actual UI mockups yet.
- Do not create agents or skills yet.
- Do not use Google Stitch yet.
- Do not invent external references or claim to have reviewed websites.
- Do not introduce new business features.
- Write new documentation in English.
- Preserve existing project requirements.

## 11. Save task result

Write the complete execution report to:

`structure/steps/result02.md`

The report must include:

1. Task objective.
2. Completed tasks.
3. Created files.
4. Modified files.
5. Summary of visual decisions for each theme.
6. Shared design decisions.
7. Identified contradictions and risks.
8. Validation against acceptance criteria.
9. Questions requiring human approval.
10. Confirmation that no application code was modified.
11. Task completion status.

Do not overwrite `prompt02.md` or any previous prompt or result files.

Stop after completing Task 1.2. Wait for human approval before proceeding to the next task.