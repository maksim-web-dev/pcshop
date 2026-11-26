# Task 1.3 — Collect Visual References and Prepare Moodboards

Act as a senior UI/UX designer and visual research specialist with experience in premium e-commerce applications.

## 1. Read project context

Read:

- `structure/project.md`
- `structure/plan_design.md`
- `structure/progress.md`
- `structure/design/visual-requirements.md`
- `structure/design/themes/premium.md`
- `structure/design/themes/gaming.md`
- `structure/design/themes/professional.md`
- `structure/steps/result02.md`

Follow Design Step 2 — Collect Visual References from `plan_design.md`.

## 2. Address previous review findings

Update the visual specifications where necessary:

- Ensure primary actions are accessible on touch devices and through keyboard navigation. Premium hover-reveal effects must not make actions inaccessible.
- Do not require all theme fonts to be preloaded during initial application startup. Propose theme-aware font loading and caching.
- Treat WCAG AA compliance as a requirement until verified through actual testing.
- Correct WCAG large-text thresholds to 24 CSS px or approximately 18.67 CSS px for bold text.
- Distinguish screenshot test viewport widths from actual responsive CSS breakpoints.
- Prefer CSS-only theme switching where possible, while allowing React presentation variants for structurally different components.

Keep proposed colors, fonts and design values as provisional until visual concepts are approved.

## 3. Prepare visual reference directories

Create:

- `structure/design/references/README.md`
- `structure/design/references/premium/moodboard.md`
- `structure/design/references/gaming/moodboard.md`
- `structure/design/references/professional/moodboard.md`
- `structure/design/references/comparison.md`

## 4. Research Premium Minimalism references

Suggested starting points:

- Apple Store
- Bang & Olufsen
- Nothing
- Teenage Engineering
- Leica

Focus on:

- Editorial layouts.
- Premium product photography.
- Typography hierarchy.
- Generous whitespace.
- Minimalist navigation.
- Elegant product cards.
- Subtle visual effects.

## 5. Research Gaming & Technology references

Suggested starting points:

- ASUS ROG
- Razer
- Alienware
- Corsair
- MSI Gaming

Focus on:

- Dark visual environments.
- Technology-inspired typography.
- Product presentation.
- Gradient and lighting effects.
- Gaming hero banners.
- Dark product cards.
- Controlled visual intensity.

## 6. Research Modern Technology Store references

Suggested starting points:

- Best Buy
- Micro Center
- B&H Photo Video
- Newegg
- PCPartPicker

Focus on:

- Product catalog organization.
- Product card information hierarchy.
- Category navigation.
- Filtering and sorting.
- Technical specifications.
- Pricing presentation.
- Efficient shopping experience.

## 7. Moodboard requirements

Target 8–12 verified visual references per theme.

For every reference, document:

- Reference ID.
- Source name.
- Exact source URL.
- Access date.
- Verification status.
- Screenshot path, if actually captured.
- Relevant page or component.
- Observed design characteristics.
- Design principles worth adopting.
- Elements that should not be copied.
- Relevance to the PCShop theme.

If browser or web research tools are unavailable:

- Do not fabricate observations.
- Do not invent URLs or screenshots.
- Mark proposed sources as unverified candidates.
- Prepare a manual screenshot collection checklist.
- Clearly report the missing capability.

Do not claim that moodboards are complete unless the required visual references have actually been collected.

## 8. Define anti-references

For each theme, document undesirable design patterns.

Premium:
- Excessive whitespace that harms usability.
- Hidden primary actions.
- Low-contrast text.
- Generic luxury templates.

Gaming:
- Excessive neon and glow.
- Distracting animations.
- Unreadable decorative typography.
- Cluttered backgrounds.

Professional:
- Outdated marketplace aesthetics.
- Excessive visual density.
- Generic admin dashboard layouts.
- Too many competing accents.

## 9. Compare visual directions

In `comparison.md`, compare all three moodboards across:

- Header.
- Navigation.
- Hero banner.
- Product categories.
- Product cards.
- Product catalog.
- Filter panel.
- Product detail page.
- Typography.
- Photography.
- Spacing.
- Colors.
- Animation.
- Footer.

Identify shared UX principles and theme-specific visual characteristics.

Preserve the identity of PCShop as one application with three interchangeable visual themes.

## 10. Prepare AI design generation guidelines

In `references/README.md`, describe how verified visual references should be used during Google Stitch generation.

Include:

- How to select the most relevant references.
- How to combine textual specifications with visual references.
- How to avoid copying external designs.
- How to maintain visual consistency between pages.
- How to evaluate generated designs.
- How to store original references separately from AI-generated mockups.

Do not generate actual page designs yet.

## 11. Update progress tracking

Update `structure/progress.md`.

- Task 1.2: Reviewed, minor findings addressed.
- Task 1.3: Awaiting human review or awaiting reference collection, depending on actual results.
- Design Step 2: Record actual completion status.
- Design Step 3: Pending.

Do not mark unverified references as approved.

## 12. Constraints

- Documentation and visual reference collection only.
- Do not modify application source code.
- Do not install dependencies.
- Do not create AI agents or skills.
- Do not configure MCP servers.
- Do not generate designs using Google Stitch yet.
- Do not introduce new business features.
- Do not fabricate research findings.
- Write documentation in English.
- Preserve previous prompt and result files.

## 13. Save task result

Write the complete execution report to:

`structure/steps/result03.md`

Include:

1. Task objective.
2. Previous review findings and corrections.
3. Completed tasks.
4. Created files.
5. Modified files.
6. Available research tools.
7. Verified and unverified reference counts per theme.
8. Moodboard summary.
9. Identified design principles.
10. Validation against acceptance criteria.
11. Limitations and manual actions required.
12. Questions requiring human approval.
13. Confirmation that no application code was modified.
14. Task completion status.

Stop after Task 1.3.

Do not proceed to Google Stitch generation until the visual references have been reviewed and approved.