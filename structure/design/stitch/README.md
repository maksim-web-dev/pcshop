# Google Stitch — Usage Guide for PCShop Design Generation

This guide explains how to use the prepared prompts in Google Stitch to generate homepage design concepts for PCShop's three visual themes.

---

## Overview

Three self-contained prompts have been prepared for Google Stitch, one per theme:

| Theme | Prompt file | Reference images to attach |
|-------|-------------|---------------------------|
| Premium Minimalism | `homepage/premium-prompt.md` | REF-P02, REF-P05 |
| Gaming & Technology | `homepage/gaming-prompt.md` | REF-G01, REF-G04, REF-G06 |
| Modern Technology Store | `homepage/professional-prompt.md` | REF-PR03, REF-PR04, REF-PR06 |

Each prompt is complete — it does not require access to this repository.

---

## Step-by-Step: Generating a Design

### 1. Open Google Stitch

Navigate to Google Stitch in your browser. *(Verify current URL — do not rely on cached links.)*

### 2. Select the generation mode

Stitch supports image generation from text prompts. Select the UI/UX or website design generation mode if prompted.

> **Note:** The exact Stitch UI controls and export options change between releases. If a step below does not match the current interface, adapt accordingly and document what you observed.

### 3. Copy the prompt text

Open the relevant `.md` file from `homepage/`. Copy the entire content from `## Prompt Text (copy from here)` down to `*End of prompt*`.

Do not modify the prompt before the first generation attempt. Only revise after reviewing the first output.

### 4. Attach reference images (if supported)

Google Stitch may support image attachments as style references. *(Verify whether image attachment is currently supported — it may require a specific Stitch mode or tier.)*

If image attachment is supported:
- Locate screenshot files in `structure/design/references/<theme>/screenshots/`
- Attach only the references listed in the prompt's "Reference Image Instructions" section
- Use only fully verified screenshots (marked VERIFIED or FULLY VERIFIED in the moodboard)

Do not attach screenshots obscured by cookie dialogs, 404 pages, or Cloudflare challenges.

**Reference image files:**

| Ref ID | File path | Use for |
|--------|-----------|---------|
| REF-P02 | `references/premium/screenshots/ref-P02-apple-mac.png` | Premium |
| REF-P05 | `references/premium/screenshots/ref-P05-teenage-engineering.png` | Premium |
| REF-G01 | `references/gaming/screenshots/ref-G01-asus-rog.png` | Gaming |
| REF-G04 | `references/gaming/screenshots/ref-G04-alienware.png` | Gaming |
| REF-G06 | `references/gaming/screenshots/ref-G06-msi-laptops.png` | Gaming |
| REF-PR03 | `references/professional/screenshots/ref-PR03-newegg.png` | Professional |
| REF-PR04 | `references/professional/screenshots/ref-PR04-pcpartpicker.png` | Professional |
| REF-PR06 | `references/professional/screenshots/ref-PR06-amazon.png` | Professional |

### 5. Generate the design

Submit the prompt. Wait for generation to complete.

### 6. Save the output

Immediately save:
- The generated image — name it `v1-generated.png` and save to the theme output directory
- The exact prompt text used — save it as `v1-prompt.md` (copy from the prepared prompt file)
- Note the generation date and approximate time

Output directories:
- Premium: `homepage/premium/`
- Gaming: `homepage/gaming/`
- Professional: `homepage/professional/`

---

## Keeping Three Concepts Independent

Generate the three themes in separate Stitch sessions. Do not carry reference images or context from one theme into another session.

The three themes share:
- The same PCShop brand name and product range
- The same page sections (Header, Hero, Categories, Products, Footer)
- The same mock product data (use product names from the prompts consistently)
- The same functional elements (search, cart, ThemeSwitcher)

The three themes differ in:
- Color palette and tone
- Typography (Playfair + DM Sans / Rajdhani + Inter / Inter only)
- Visual density and spacing
- Photography mood (warm neutral / dramatic dark / clean light)

If a generated concept bleeds style from another theme (e.g., dark backgrounds in the premium result), treat it as a generation failure — revise and regenerate.

---

## Iterating on Generated Designs

If the first generation does not meet the requirements, prepare a revision prompt.

**Revision prompt structure:**

```
This design has [specific issue]. Please revise:
- [Issue 1]: [What it should be instead]
- [Issue 2]: [What it should be instead]
Keep all other elements unchanged.
```

Save each revision:
- `v2-generated.png`, `v2-revision-prompt.md`
- `v3-generated.png`, `v3-revision-prompt.md`
- etc.

Do not overwrite previous versions. Keep the full revision history.

**Common revision targets:**
- Background color not matching the specified hex value
- Accent color drift (wrong accent appearing)
- Font style not matching (serif when sans-serif required, etc.)
- Layout structure incorrect (column count, hero proportion)
- Product card structure missing required elements (CTA button not visible, missing badges)

---

## Exporting from Stitch

> **Note:** The following describes expected Stitch export capabilities. Verify against the current Stitch interface — these may differ.

If Stitch supports code export:
- Export generated HTML/CSS as a file
- Save to the theme output directory as `v1-export.html` or `v1-export-code.zip`

If Stitch generates a `DESIGN.md` or design specification file:
- Save it as `v1-DESIGN.md` in the theme output directory

If only image export is available:
- Export at the highest available resolution
- Save as `v1-generated.png`
- Note that code will need to be written from scratch referencing the image

Do not use generated code directly in production. Use it as a reference for React + TailwindCSS implementation.

---

## Evaluating Visual Concepts

After generating all three concepts, evaluate them using `homepage/review-checklist.md`.

The review checklist includes a 1–5 scoring rubric for 13 dimensions. Score each theme independently before comparing.

**Minimum acceptable score:** 3 out of 5 on all dimensions to proceed to implementation.

**Decision outcomes:**
- Score ≥ 3 on all dimensions: approved for implementation with noted refinements
- Score = 2 on any dimension: revision required before implementation
- Score = 1 on any dimension: regenerate with revised prompt

Record review scores and notes in a `review-notes.md` file in each theme output directory.

---

## Expected Output Directory Contents

Each theme directory (`homepage/premium/`, `homepage/gaming/`, `homepage/professional/`) should contain after generation:

```
v1-generated.png          — Original generated mockup
v1-prompt.md              — Exact prompt used for v1 (copy of prepared prompt)
v2-generated.png          — Revised mockup (if applicable)
v2-revision-prompt.md     — Revision prompt used for v2 (if applicable)
v1-DESIGN.md              — Design specification exported from Stitch (if available)
v1-export.html            — Generated code exported from Stitch (if available)
review-notes.md           — Human review notes and checklist scores
```

Do not create placeholder images or fake exports. If generation has not occurred, the directory contains only a `README.md` documenting expected contents.

---

## Known Limitations

- **Reference target not fully met:** The original target was 8–12 fully verified references per theme. Currently 9 references are usable across all three themes combined (3 premium, 4 gaming, 3 professional). This is below target but sufficient for initial concept generation.
- **MCP browser automation not yet available in-session:** Playwright MCP is configured for future sessions (`--browser firefox` in `.mcp.json`). Visual validation of generated designs will need to be done manually or in a new session.
- **Stitch interface not verified:** This guide assumes expected Stitch functionality based on documentation. Actual UI controls and export capabilities require manual verification.