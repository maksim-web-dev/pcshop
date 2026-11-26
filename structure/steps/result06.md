# Result — Task 1.4.1: Prepare Google Stitch HomePage Generation

## 1. Task Objective

Prepare all materials required for the human-driven Google Stitch generation of three PCShop homepage design concepts. This task covers:
- Revalidation of Playwright MCP status
- Definition of shared HomePage design requirements
- Creation of three self-contained Google Stitch prompts
- Creation of Stitch usage instructions
- Creation of output directories with documentation
- Creation of a visual review checklist
- Update of project progress tracker

This task does **not** perform actual Google Stitch design generation. That is Task 1.4.2 and must be executed manually by the project owner.

---

## 2. Playwright MCP Revalidation

### Revalidation Result: **MCP Unavailable — same session, same limitation**

This task executed in the same Claude Code session as Task 1.3.1. The MCP configuration change made in Task 1.3.1 (`.mcp.json` → `--browser firefox`) takes effect only on the next Claude Code session restart. Mid-session changes to `.mcp.json` do not update the running MCP server.

**MCP tool availability:** Playwright MCP tools (`mcp__playwright__*`) remain listed as deferred tools but cannot be initialized in this session due to the Chrome/session-lock issue documented in Task 1.3.1.

**What this means:**
- MCP smoke test cannot be performed in this session
- Previous MCP documentation (`structure/ai/mcp/playwright.md`) remains accurate
- For the next session: start Claude Code fresh — `.mcp.json` has `--browser firefox` and Firefox is installed at `~/.cache/ms-playwright/firefox-1572`

**Recorded limitation:** MCP smoke test deferred to next session. No impact on Task 1.4.1 deliverables — this task requires only documentation work.

---

## 3. Created and Modified Files

### New files created

| File | Description |
|------|-------------|
| `structure/design/stitch/homepage/professional-prompt.md` | Self-contained Stitch prompt for the Modern Technology Store (Professional) theme |
| `structure/design/stitch/README.md` | Complete Stitch usage guide — step-by-step generation instructions, iteration, export, evaluation |
| `structure/design/stitch/homepage/review-checklist.md` | 1–5 scoring rubric for 13 dimensions + measurable accessibility pass/fail table |
| `structure/design/stitch/homepage/premium/README.md` | Output directory documentation for Premium theme |
| `structure/design/stitch/homepage/gaming/README.md` | Output directory documentation for Gaming theme |
| `structure/design/stitch/homepage/professional/README.md` | Output directory documentation for Professional theme |

### Pre-existing files confirmed complete (created in previous context)

| File | Description | Status |
|------|-------------|--------|
| `structure/design/stitch/homepage/premium-prompt.md` | Self-contained Stitch prompt for Premium Minimalism | Complete |
| `structure/design/stitch/homepage/gaming-prompt.md` | Self-contained Stitch prompt for Gaming & Technology | Complete |

### Modified files

| File | Change |
|------|--------|
| `structure/progress.md` | Added Task 1.4.1 (Completed) and Task 1.4.2 (Pending); updated Design Step 3 status |

---

## 4. Shared HomePage Design Requirements

The following requirements are consistent across all three themes.

### Brand Identity
- **Store name:** PCShop
- **Product range:** Laptops, desktop PCs, monitors, keyboards, mice
- **Mock product data:** Four to six consistent products used across all themes (see section 5)

### Page Sections (identical structure across all themes)
1. Header — sticky navigation bar
2. Hero Banner — full-width, theme-specific height
3. Featured Categories — 4 product type navigation cards
4. Top Products — product card grid
5. Footer — 4-column layout

### Functional Elements (consistent across all themes)
- Logo / wordmark (left of header)
- Navigation links: Laptops, PCs, Monitors, Peripherals, Deals
- Cart icon with item count badge
- ThemeSwitcher (compact, top-right of header)
- Hero CTA button ("Add to Cart" / "Shop Now" etc.)
- Product cards with: image, name, price, parameter badges, "Add to Cart" button
- Footer with 4 columns: Shop, Account, Information, Contact

### Product Information Hierarchy
Per product card, in this order:
1. Product image (top — theme-specific proportion)
2. Product name (Inter or theme font, medium weight)
3. Price (larger weight than name)
4. 2–3 parameter badges (specification pills)
5. "Add to Cart" button (always visible at rest)

### ThemeSwitcher
Compact dropdown showing current theme name. Options: Premium | Gaming | Professional.
Theme-specific styling but same position and function in all three headers.

### Accessibility Requirements (all themes)
- Primary text ≥ 4.5:1 contrast against background
- CTA buttons visible at rest (no hover-only primary actions)
- Focus indicators visible on all interactive elements
- No text below 12px (11px captions excepted)
- No single-color-only state indicators

### Mock Product Data (consistent across all three themes)
See section 5 of each individual prompt for theme-specific product naming. The mock products represent the same categories:
1. Gaming/performance laptop (~$1,300–$1,800)
2. Desktop PC tower (~$1,900–$2,500)
3. Monitor 27"–32" (~$550–$800)
4. Mechanical keyboard (~$190–$230)
5–6. Mouse and/or headset (~$89–$129) — optional

---

## 5. Summary of Three Prepared Stitch Prompts

### Premium Minimalism (`premium-prompt.md`)

**Visual direction:** Editorial, warm neutral, generous whitespace, large product photography.

| Element | Specification |
|---------|--------------|
| Page background | `#FAFAF8` warm off-white |
| Card background | `#FFFFFF` |
| Accent | `#1A1A1A` (no decorative accent color) |
| Fonts | Playfair Display (headlines) + DM Sans (body) |
| Hero height | 520px |
| Hero layout | 50% text / 50% product image |
| Product grid | 3 columns |
| Product image in card | 55% of card height |
| CTA style | Rectangular `#1A1A1A` button, always visible |
| Photography mood | White/cream studio, soft diffuse light |
| References | REF-P02 (Apple Mac catalog), REF-P05 (Teenage Engineering) |

**Key differentiator:** Whitespace is the design element. Playfair Display serif headlines contrast with DM Sans functional body text. No decorative accent color — only near-black graphite.

### Gaming & Technology (`gaming-prompt.md`)

**Visual direction:** Dark atmospheric, purple + cyan accents, bold uppercase Rajdhani typography, immersive product presentation.

| Element | Specification |
|---------|--------------|
| Page background | `#0A0A0F` near-black |
| Card background | `#111118` |
| Primary accent | Purple `#8B5CF6` |
| Secondary accent | Cyan `#22D3EE` |
| Fonts | Rajdhani (headlines, uppercase) + Inter (body) |
| Hero height | 580px |
| Hero layout | 40% text / 60% product image |
| Product grid | 4 columns |
| Product image in card | 50–55% of card height |
| CTA style | Purple gradient button, always visible |
| Photography mood | Dark studio backgrounds, atmospheric directional lighting |
| References | REF-G01 (ASUS ROG), REF-G04 (Alienware), REF-G06 (MSI) |

**Key differentiator:** Largest product grid (4 columns). Most dramatic visual effects (card glow on hover). Two-color accent system (purple primary, cyan secondary). No other accent colors permitted.

### Modern Technology Store (`professional-prompt.md`)

**Visual direction:** Clean, light, conventional e-commerce, blue accent, high information density, familiar conventions.

| Element | Specification |
|---------|--------------|
| Page background | `#F3F4F6` light gray |
| Card background | `#FFFFFF` |
| Header background | `#FFFFFF` |
| Primary accent | Blue `#2563EB` |
| Secondary accent | Graphite `#374151` |
| Fonts | Inter only (single typeface) |
| Hero height | 420px |
| Hero layout | 45% text / 55% product image |
| Product grid | 3 columns |
| Product image in card | 50% of card height |
| CTA style | Blue `#2563EB` button, always visible |
| Photography mood | White/light gray studio, clean catalog photography |
| References | REF-PR03 (Newegg), REF-PR04 (PCPartPicker), REF-PR06 (Amazon) |

**Key differentiator:** Only theme with a **visible search input** in the header (not hidden behind icon). Conventional e-commerce conventions (trust row, breadcrumb, sort controls). Single typeface (Inter). No decorative or atmospheric effects.

---

## 6. Selected Reference Images per Theme

### Premium

| Ref ID | Site | Usability | Key reference for |
|--------|------|-----------|------------------|
| REF-P02 | Apple Mac catalog | VERIFIED | Whitespace, product card proportion, editorial layout |
| REF-P05 | Teenage Engineering | FULLY VERIFIED | Extreme editorial confidence, product photography dominance |

> References P01, P03, P04, P06, P07, P08 were either inaccessible (404, Cloudflare) or partially obscured by cookie dialogs.

### Gaming

| Ref ID | Site | Usability | Key reference for |
|--------|------|-----------|------------------|
| REF-G01 | ASUS ROG | FULLY VERIFIED | Near-black background, uppercase hero headline, ROG dark structure |
| REF-G04 | Alienware | VERIFIED | Deep blue-purple atmospheric background, cool-toned photography |
| REF-G06 | MSI Laptops | FULLY VERIFIED | Product card grid on dark background, 3/4 product photography |

> References G02, G03, G05, G07, G08 were partially accessible or had dialog overlays.

### Professional

| Ref ID | Site | Usability | Key reference for |
|--------|------|-----------|------------------|
| REF-PR03 | Newegg | VERIFIED | Product card structure, breadcrumb, filter chips |
| REF-PR04 | PCPartPicker | VERIFIED | Left filter sidebar accordion, result count, sort controls |
| REF-PR06 | Amazon | VERIFIED | Homepage conventions, trust indicators, category grid |

> References PR01, PR02, PR05, PR08 were 404 or Cloudflare-blocked.

---

## 7. Identified Risks and Limitations

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Reference target not met (9/24+ usable vs. 24 fully verified target) | Stitch may not fully capture intended visual direction | Use verified refs only; iterate via revision prompts |
| Google Stitch UI controls not verified (documentation may be outdated) | Usage guide may require updates after first use | Guide notes Stitch interface changes; reviewer adapts steps |
| Stitch may not support image attachment in current tier/mode | Prompts may not benefit from visual reference images | Prompts are self-contained with explicit hex values and typography specs |
| Generated designs may blend themes or add unintended elements | Design identity lost | Prompt includes explicit anti-patterns list; reviewer rejects off-spec outputs |
| Mock products differ in naming across themes by design intent | Could appear inconsistent | Naming intentional (VORTEX/PHANTOM for gaming, Laptop Pro/UltraBook for premium, ProBook/WorkStation for professional) |
| Theme specs not formally human-approved | Implementation may require rework | All specs marked as draft; this design step is for concept approval, not final spec |
| Playwright MCP still unavailable in-session | Cannot auto-validate generated designs | Manual review; MCP available from next session restart |

---

## 8. Validation Against Acceptance Criteria

| Acceptance criterion (from prompt06) | Status |
|--------------------------------------|--------|
| Revalidate Playwright MCP | Documented — still unavailable in-session (same session as Task 1.3.1); config updated, takes effect on restart |
| Apply review decisions (reference shortlist) | Applied — shortlisted refs embedded in each prompt |
| Define shared HomePage requirements | Complete — section 4 of this document and embedded in prompts |
| Create `premium-prompt.md` with all 20 required elements | Complete |
| Create `gaming-prompt.md` with all 20 required elements | Complete |
| Create `professional-prompt.md` with all 20 required elements | Complete |
| Create `structure/design/stitch/README.md` | Complete |
| Create output directories with documentation | Complete — 3 theme subdirs, each with `README.md` |
| Create `review-checklist.md` with 1–5 rubric for 13 dimensions | Complete |
| Update `structure/progress.md` | Complete — Task 1.4.1 and 1.4.2 added |
| Each prompt: does not require repository access | Verified — all context embedded in prompt text |
| Each prompt: requests high-fidelity desktop design, not wireframe | Verified — explicit in each prompt |
| Each prompt: requests complete page, not above-the-fold only | Verified — explicit in each prompt |
| Three concepts represent same application with different visual presentation | Verified — same sections, same mock products, same functional elements |
| Do not generate designs automatically | Complied — no Stitch generation attempted |
| Do not modify application source code | Complied |
| Do not create agents or skills | Complied |
| Do not overwrite previous prompt or result files | Complied |
| Write documentation in English | Complied |

---

## 9. Manual Instructions for the Project Owner

### Immediate next step: Generate the three design concepts

1. Open Google Stitch in your browser.
2. Read `structure/design/stitch/README.md` for the full generation guide.
3. For each of the three themes, in separate sessions:
   a. Open the prepared prompt file (`premium-prompt.md`, `gaming-prompt.md`, `professional-prompt.md`)
   b. Copy the prompt text from `## Prompt Text (copy from here)` to `*End of prompt*`
   c. Paste into Stitch
   d. Attach the reference screenshots if the current Stitch version supports image input (see README for file paths)
   e. Generate the design
   f. Save the output image as `v1-generated.png` in the theme output directory
   g. Save the prompt used as `v1-prompt.md`

4. After generating all three, complete `structure/design/stitch/homepage/review-checklist.md`.
5. Record review scores and decisions in a `review-notes.md` in each theme output directory.
6. Share results for analysis and iteration if needed.

### If Stitch generates designs that don't match the prompts

Use the revision prompt structure described in `structure/design/stitch/README.md`. Save each revision as `v2-generated.png` / `v2-revision-prompt.md` etc. Do not overwrite v1.

### Before proceeding to implementation

All three designs must be approved (minimum score 3/5 on all 13 checklist dimensions) before React implementation begins. Theme specifications remain draft until formally approved.

---

## 10. Questions Requiring Human Approval

1. **Should the three themes use different mock product names, or identical product names?**
   Currently: different names per theme (VORTEX/PHANTOM for gaming, Laptop Pro/UltraBook for premium, ProBook/WorkStation for professional). Rationale: different names reinforce distinct brand character per theme. Alternative: identical names across all three for direct visual comparison.

2. **Are the specified hero heights acceptable?**
   - Premium: 520px
   - Gaming: 580px
   - Professional: 420px
   These differ to match each theme's visual character. The gaming hero is tallest (most dramatic); professional is shortest (most efficient). Confirm before Stitch generation.

3. **Should the professional theme include a "trust row" below the hero?**
   The professional prompt includes an optional trust row ("Free Shipping $49+", "2-Year Warranty", "30-Day Returns"). This is a common e-commerce pattern at Newegg and Amazon. Confirm whether to include or remove.

4. **Is image attachment to Stitch prompts required, or are text-only prompts sufficient for initial generation?**
   The prompts are designed to work without image attachments (all visual specifications are embedded as hex values and descriptions). Image attachment can be added for revision rounds if the initial text-only results are off-spec.

5. **What is the approval threshold for proceeding from design concepts to implementation?**
   Currently defined as score ≥ 3/5 on all 13 checklist dimensions. Confirm if a higher threshold (e.g., ≥ 4/5 on key dimensions) is required.

---

## 11. Task Completion Status

**Task 1.4.1: COMPLETE**

All deliverables created. No application code was modified. No Stitch generation was performed.

Blocking items for Task 1.4.2 (Manual Stitch Generation):
- Project owner must run generation manually in Google Stitch
- Project owner must review outputs against `review-checklist.md`
- Design approval by project owner required before proceeding to implementation

**Next task: Task 1.4.2** — Manual Google Stitch generation (project owner action required)