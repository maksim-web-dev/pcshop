# Task 1.4.1 — Prepare Google Stitch HomePage Generation

Act as a senior UI/UX designer, prompt engineer and Design System architect.

## 1. Read project context

Read:

- `structure/project.md`
- `structure/plan_frontend.md`
- `structure/plan_design.md`
- `structure/plan_ai_workflow.md`
- `structure/progress.md`
- `structure/design/visual-requirements.md`
- All three theme specifications.
- All moodboard files.
- `structure/design/references/comparison.md`
- `structure/steps/result05.md`

Follow Design Step 3 — Generate HomePage Concepts.

## 2. Revalidate Playwright MCP

Check whether Playwright MCP tools are available after restarting the Claude Code session.

Perform a minimal smoke test using actual MCP tools:

- Open example.com.
- Retrieve the page snapshot.
- Resize the viewport.
- Capture a screenshot.
- Verify the screenshot.
- Close the browser.

Do not use a direct Playwright script as evidence of MCP functionality.

Record the actual results.

If MCP is still unavailable, document the limitation but continue with design prompt preparation.

## 3. Apply review decisions

Use the following reference shortlist for initial design generation.

### Premium
- REF-P02 — Apple Mac catalog.
- REF-P05 — Teenage Engineering.

### Gaming
- REF-G01 — ASUS ROG.
- REF-G04 — Alienware.
- REF-G06 — MSI.

### Professional
- REF-PR03 — Newegg.
- REF-PR04 — PCPartPicker.
- REF-PR06 — Amazon.

Use external references as inspiration, not templates to reproduce.

Do not use screenshots obscured by large dialogs, 404 pages or security challenges as direct image inputs.

The original target of 8–12 verified references per theme has not been met. Record this limitation. The shortlisted references are sufficient for initial concept generation, subject to project owner approval.

Do not claim that the full reference collection target has been achieved.

Keep the proposed color palettes, typography and spacing as provisional design directions.

## 4. Define shared HomePage requirements

Create a shared HomePage design specification.

Include:

- PCShop brand identity.
- Header and logo.
- Search interface.
- Category navigation.
- Theme switcher.
- Existing cart requirements.
- Hero banner.
- Featured categories.
- Top products section.
- Footer.
- Navigation hierarchy.
- Product information hierarchy.
- Accessibility requirements.

Preserve the existing project scope and backend API contracts.

Do not introduce unsupported features such as user accounts, ratings, reviews, discounts, wishlists or recommendations unless already specified in the project documentation.

Use representative mock product data consistently across all three concepts.

Clearly distinguish mock data from actual backend data.

## 5. Prepare three standalone Google Stitch prompts

Create:

- `structure/design/stitch/homepage/premium-prompt.md`
- `structure/design/stitch/homepage/gaming-prompt.md`
- `structure/design/stitch/homepage/professional-prompt.md`

Each prompt must be self-contained and ready to paste into Google Stitch.

Google Stitch must not require access to the local repository to understand the prompt.

Each prompt must contain:

1. Product and brand description.
2. Page objective.
3. Target audience.
4. Desktop viewport width of 1440px.
5. Complete page layout.
6. Theme-specific visual identity.
7. Proposed colors.
8. Typography direction.
9. Spacing and visual density.
10. Hero banner composition.
11. Product card design.
12. Product photography direction.
13. Category presentation.
14. Header and navigation.
15. Theme switcher appearance.
16. Footer design.
17. Accessibility requirements.
18. Relevant reference image instructions.
19. Design anti-patterns.
20. Expected visual deliverables.

Request a high-fidelity desktop website design, not a wireframe, moodboard, device mockup or generic dashboard.

Generate a complete homepage rather than only the above-the-fold section.

The three concepts must represent the same application and functionality with different visual presentations.

Keep the header navigation, product information and user actions functionally consistent.

### Premium direction

Create an elegant editorial shopping experience with warm neutral colors, refined typography, generous whitespace and large product photography.

Avoid excessive whitespace, low contrast and hidden actions.

### Gaming direction

Create a sophisticated dark technology store using purple and cyan accents, atmospheric lighting, expressive typography and controlled visual effects.

Avoid excessive neon, noisy backgrounds and distracting decoration.

### Professional direction

Create a polished modern electronics store with blue and graphite accents, practical typography, informative product cards and efficient navigation.

Avoid outdated marketplace aesthetics and generic admin dashboard styling.

## 6. Create Google Stitch usage instructions

Create:

`structure/design/stitch/README.md`

Describe:

- How to use the prepared prompts manually in Google Stitch.
- Which reference screenshots to attach for each theme.
- How to keep the three visual concepts independent while preserving shared functionality.
- How to iterate on generated designs.
- How to save exact prompts and revision prompts.
- How to export generated screenshots.
- How to export DESIGN.md and generated code if available.
- How to evaluate the visual concepts.

Do not fabricate current Google Stitch UI controls or export capabilities. Mark unverified interface details as requiring manual confirmation.

## 7. Prepare output directories

Create:

- `structure/design/stitch/homepage/premium/`
- `structure/design/stitch/homepage/gaming/`
- `structure/design/stitch/homepage/professional/`

Document the expected contents:

- Original generated mockup.
- Revised mockups, if needed.
- DESIGN.md, if exported by Stitch.
- Generated HTML/CSS or other available source export.
- Exact generation and revision prompts.
- Human review notes.

Do not create fake mockups, fake exports or placeholder screenshots.

## 8. Create visual review criteria

Create:

`structure/design/stitch/homepage/review-checklist.md`

Include a scoring rubric from 1 to 5 for:

- Visual identity.
- Visual hierarchy.
- Typography.
- Color consistency.
- Product presentation.
- Header and navigation.
- Product card quality.
- Layout composition.
- Accessibility direction.
- Commercial quality.
- Originality.
- Consistency with shared functionality.
- Feasibility of implementation using React and TailwindCSS.

Separate subjective design evaluation from measurable accessibility requirements.

## 9. Update progress

Update `structure/progress.md`.

Record:

- Task 1.3.1: Reference collection reviewed; original target partially met.
- Task 1.4.1: Google Stitch prompts prepared.
- Task 1.4.2: Manual Google Stitch generation — pending.

Keep MCP validation status accurate.

Do not mark generated designs as completed or approved.

## 10. Constraints

- Documentation and MCP validation only.
- Do not modify application source code.
- Do not generate Google Stitch designs automatically.
- Do not create agents or skills yet.
- Do not install application dependencies.
- Do not modify backend API contracts.
- Do not overwrite previous prompt or result files.
- Do not fabricate screenshots or tool results.
- Write documentation in English.

## 11. Save execution report

Write the complete report to:

`structure/steps/result06.md`

Include:

1. Task objective.
2. Actual MCP validation results.
3. Created and modified files.
4. Shared HomePage design requirements.
5. Summary of the three prepared Stitch prompts.
6. Selected reference images for each theme.
7. Identified risks and limitations.
8. Validation against acceptance criteria.
9. Manual instructions for the project owner.
10. Questions requiring human approval.
11. Task completion status.

Stop after completing Task 1.4.1.

Do not proceed with actual design generation.