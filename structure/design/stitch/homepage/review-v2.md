# PCShop HomePage V1 vs V2 Design Review

Evaluation method: visual inspection of PNG screenshots + HTML code analysis + cross-reference with DESIGN.md specifications and `mock-products.md`.

V1 scores are carried forward from `review-v1.md`.

---

## 1. Score Matrix

| # | Dimension | Premium V1 | Premium V2 | Δ | Gaming V1 | Gaming V2 | Δ | Prof V1 | Prof V2 | Δ |
|---|-----------|:----------:|:----------:|:-:|:---------:|:---------:|:-:|:-------:|:-------:|:-:|
| 1 | Visual identity | 4 | 4 | — | **5** | **5** | — | 3 ⚠ | 4 | +1 |
| 2 | Visual hierarchy | 4 | 4 | — | 4 | 4 | — | 4 | 4 | — |
| 3 | Typography | **5** | **5** | — | **5** | **5** | — | **5** | **5** | — |
| 4 | Color consistency | 4 | 4 | — | **5** | **5** | — | 4 | 4 | — |
| 5 | Product presentation | 3 ⚠ | 4 | +1 | 4 | **5** | +1 | 4 | 4 | — |
| 6 | Header/navigation | 4 | 4 | — | **5** | **5** | — | **5** | **5** | — |
| 7 | Product card quality | 4 | 4 | — | 4 | 4 | — | 4 | 4 | — |
| 8 | Layout composition | 4 | 4 | — | 4 | 4 | — | 4 | 4 | — |
| 9 | Accessibility direction | 4 | 4 | — | 3 ⚠ | 4 | +1 | 4 | 4 | — |
| 10 | Commercial quality | 4 | 4 | — | **5** | **5** | — | 3 ⚠ | 4 | +1 |
| 11 | Originality | 4 | 4 | — | **5** | **5** | — | 3 ⚠ | 4 | +1 |
| 12 | Functional consistency | 4 | **5** | +1 | 4 | **5** | +1 | 4 | **5** | +1 |
| 13 | Impl. feasibility | **5** | **5** | — | 4 | 4 | — | **5** | **5** | — |
| **Total** | | **53/65** | **55/65** | +2 | **57/65** | **60/65** | +3 | **52/65** | **56/65** | +4 |

⚠ = was below minimum threshold (4 for visual quality, 3 for accessibility)

---

## 2. Blocking Dimensions — Resolution Status

| Theme | V1 blocking dimensions | V2 resolution |
|-------|------------------------|---------------|
| Premium | Dim 5: Product presentation (3/5) | ✓ Resolved — 3-col grid + availability indicator → 4/5 |
| Gaming | Dim 9: Accessibility direction (3/5) | ✓ Resolved — footer links `#60607A`→`#A0A0C0` → 4/5 |
| Professional | Dim 1: Visual identity (3/5) | ✓ Resolved — `#EFF6FF` hero tint → 4/5 |
| Professional | Dim 10: Commercial quality (3/5) | ✓ Resolved — "fast delivery" removed, hero improved → 4/5 |
| Professional | Dim 11: Originality (3/5) | ✓ Resolved — blue tint hero + Browse affordance → 4/5 |

**All blocking dimensions resolved in V2.** No dimension scores below 4 (visual quality) or 3 (accessibility).

---

## 3. Evidence per Theme

### 3.1 Premium Minimalism V2

**What changed:**

**Dimension 5 — Product presentation (+1 → 4):**
V1 showed 4 products in a 2×2 grid with no availability indicators. V2 shows 6 products in a 3×2 grid (`lg:grid-cols-3`), and each card shows "In stock" in `#5C5C5C` (`on-surface-variant` token) via `text-body-sm` DM Sans. The 3-column grid is visually balanced and consistent with the editorial spacing philosophy. The larger product count improves commercial credibility without breaking the warm minimalist identity.

**Dimension 12 — Functional consistency (+1 → 5):**
V2 brings Premium to functional parity with Gaming and Professional: all three themes now show 6 products (Premium changed from 4 to 6), all show availability indicators, all have Browse links in the category section and Browse column in the footer. The ThemeSwitcher with 3 options is confirmed in the header.

**What did not change:**
- Warm editorial identity preserved: `#FAFAF8` background, `#1A1A1A` graphite accent, Playfair Display for headlines, DM Sans for body text — all confirmed in HTML token definitions.
- No forbidden colors introduced (no blue, purple, green, gold).
- Typography 5/5 preserved.
- "Browse →" text affordance added to all 4 category cards, confirmed at lines 205–238 in v2-code.html.

**Unresolved findings:**
- STRIKER Keyboard PRO badge reads "Mechanical" instead of "Cherry MX" (see section 5).
- SWIFT Mouse Pro badges read "26K DPI" / "58g" instead of "25600 DPI" / "68g" (see section 5).
- These are mock-data discrepancies, not visual design failures. They do not affect the design score.

---

### 3.2 Gaming & Technology V2

**What changed:**

**Dimension 5 — Product presentation (+1 → 5):**
V1 had an unbalanced 4+2 layout (4-column grid, 6 products = one full row + 2 orphaned products). V2 uses `lg:grid-cols-3` for the product grid (3+3 = two full rows). The category section uses `lg:grid-cols-4` (retained from V1 for 4 category types). The result is a visually balanced homepage grid. All 6 product cards show atmospheric dark photography with cyan availability indicators.

**Dimension 9 — Accessibility direction (+1 → 4):**
V1 footer link color `#60607A` on `#070708` footer background had an estimated contrast of approximately 2.5:1 — below WCAG AA (4.5:1). V2 footer links use `text-on-surface-variant` = `#A0A0C0` (confirmed at lines 455–481 in v2-code.html). The estimated contrast of `#A0A0C0` on `#070708` is approximately 7.1:1, well above the 4.5:1 WCAG AA requirement for normal text. Footer headings use `text-on-surface` = `#F0F0FF`.

**Dimension 12 — Functional consistency (+1 → 5):**
All three themes now show 6 products with availability indicators. Gaming V2 availability uses `text-secondary` = `#22D3EE` cyan (not green, which is forbidden in the gaming palette). ThemeSwitcher shows "Gaming ▾" with options Premium | Gaming | Professional in the dropdown.

**What did not change:**
- Dark atmospheric identity fully preserved: `#0A0A0F` page background, `#111118` card surfaces.
- Purple `#8B5CF6` and cyan `#22D3EE` are the only accent colors — no forbidden colors introduced.
- Rajdhani Bold for UPPERCASE display headlines, Inter for body text — confirmed in token definitions.
- "DOMINATE YOUR BUILD" hero at Rajdhani 72px UPPERCASE with purple gradient CTA.
- PCShop SVG logo with geometric purple/cyan mark preserved exactly.
- Purple-to-cyan gradient line at top of footer preserved.

---

### 3.3 Modern Technology Store (Professional) V2

**What changed:**

**Dimension 1 — Visual identity (+1 → 4):**
V1 had a plain white hero that felt generic. V2 hero section uses `bg-primary-tint` = `#EFF6FF` as the background (confirmed at line 170 in v2-code.html). This blue tint visually ties the hero to the `#2563EB` accent system and creates an immediately distinctive PCShop storefront identity. The layout remains a 45/55 split with the laptop image on the right, but now against a deliberate blue-tinted field rather than a default white panel.

**Dimension 10 — Commercial quality (+1 → 4):**
V1 contained the unsupported commercial promise "fast delivery" in the hero subheadline. V2 hero reads: "Laptops, components, and peripherals — hardware you can trust, clearly specified." (confirmed at line 176 in v2-code.html). No delivery promises, no warranty claims, no return policy links appear anywhere in the page. The store presents itself as a trusted product specification resource — consistent with the project's data model.

**Dimension 11 — Originality (+1 → 4):**
The blue tint hero `#EFF6FF` combined with the visible always-on search input and the "Browse" affordance on all 4 category cards gives the Professional theme a distinctive commercial identity that is clearly differentiated from both the warm editorial Premium theme and the dark atmospheric Gaming theme. The design no longer reads as a generic e-commerce template.

**Dimension 12 — Functional consistency (+1 → 5):**
All 6 products now have "In stock" indicators (green `#059669` via `success-text` token) on all 6 cards. Category section has "Browse" links. Sort control is present above the product grid. ThemeSwitcher visible in header.

**What did not change:**
- "Build Your Perfect PC" headline preserved.
- Visible always-on search input preserved (`min-h-[420px]` hero section with search in header).
- Blue `#2563EB` as sole accent, Inter throughout, `#F3F4F6` page background — all preserved.
- 3-column product grid with 6 products + sort control.
- 4 footer columns with correct content (Shop, Browse, Information, Contact).

---

## 4. Cross-Theme Consistency in V2

### Shared elements confirmed in all three V2 designs

| Element | Premium V2 | Gaming V2 | Professional V2 |
|---------|-----------|-----------|-----------------|
| 6 products displayed | ✓ (changed from V1's 4) | ✓ | ✓ |
| Availability indicator at rest | ✓ Gray `#5C5C5C` | ✓ Cyan `#22D3EE` | ✓ Green `#059669` |
| ThemeSwitcher in header | ✓ 3 options | ✓ 3 options | ✓ 3 options |
| 4 navigation items | ✓ | ✓ | ✓ |
| Browse footer column | ✓ | ✓ | ✓ |
| Information: About + Privacy Policy | ✓ | ✓ | ✓ |
| No "Sign In" / "My Orders" | ✓ | ✓ | ✓ |
| No delivery/warranty promises | ✓ | ✓ | ✓ |
| No "Deals" in navigation | ✓ | ✓ | ✓ |

### Availability color differentiation (design system rule)

| Theme | Availability color | Rationale |
|-------|-------------------|-----------|
| Premium | `#5C5C5C` on `#FAFAF8` | Editorial restraint — muted secondary text, no decorative color |
| Gaming | `#22D3EE` cyan on `#111118` | Cyan is the semantic badge color in the gaming palette; green is forbidden |
| Professional | `#059669` green on `#FFFFFF` | Standard semantic success color; `success-text` token = `#047857` |

This differentiation is intentional, correct, and must be preserved in the React implementation.

---

## 5. Remaining Findings and Discrepancies

### Finding 1 — Premium product count

The V2 revision prompt allowed either 4-in-a-row or 6-in-two-rows-of-3. Stitch generated 6 products. The original `mock-products.md` specified Premium shows 4 products (editorial restraint). The V2 result with 6 products is visually acceptable, but it represents a deviation from the original editorial restraint rationale.

**Decision required (human):** Accept 6 products in Premium (simpler implementation, full product parity) or revert to 4 (editorial deliberateness). The design system specification should record this decision before implementation.

### Finding 2 — Premium STRIKER badge

V2 HTML: `Mechanical`, `Wireless`
Authoritative: `Cherry MX`, `Wireless` (from `mock-products.md` line 101)
Gaming V2 and Professional V2 both show `Cherry MX` correctly.
Root cause: Stitch generated "Mechanical" from the product category name rather than the specified switch name.
**Resolution: `mock-products.md` is authoritative. Use `Cherry MX` badge text in React implementation. Do not copy the Premium HTML value.**

### Finding 3 — Premium SWIFT Mouse Pro badges

V2 HTML: `26K DPI`, `58g`
Authoritative: `25600 DPI`, `Wireless` (from `mock-products.md` line 102)
Gaming V2 and Professional V2 both show `25600 DPI` and `Wireless` correctly.
Note: The authoritative badge set uses `Wireless` (not weight) as the second badge. The weight "68g" appears in the product specification but was not specified as a badge in `mock-products.md`.
Root cause: Stitch invented badge text not in the prompt.
**Resolution: Use `25600 DPI` and `Wireless` as badge text in Premium React implementation. Do not use `26K DPI` or weight badges.**

### Finding 4 — DESIGN.md component references

All three DESIGN.md files reference `@components/badge.html`, `@components/button.html`, etc. These component files do not exist in the directory. DESIGN.md is a Stitch-generated document and these references are internal to the Stitch tool, not actual files in the repository. They do not affect implementation — they serve as documentation of component token usage patterns.

### Finding 5 — External image dependencies

All V2 HTML files use `lh3.googleusercontent.com/aida/...` AI-generated images. Premium V2 contains some base64-encoded PNG images in the HTML. These are mock assets from Google Stitch and must be replaced with backend API images during React implementation.

---

## 6. Recommended Approval Decision

| Theme | V2 total | Min visual dim | Accessibility | Decision |
|-------|----------|:-------------:|:-------------:|---------|
| Premium | 55/65 | 4 (all dims ≥4) | 4 | ✓ **Conditionally approved** |
| Gaming | 60/65 | 4 (all dims ≥4) | 4 | ✓ **Conditionally approved** |
| Professional | 56/65 | 4 (all dims ≥4) | 4 | ✓ **Conditionally approved** |

"Conditionally approved" means: all minimum thresholds are met; design is suitable for React implementation guidance; human sign-off is required before implementation begins.

### V3 generation assessment

V3 is **not recommended** for any theme.

| Theme | Reason V3 not required |
|-------|----------------------|
| Premium | All V1 blocking dimensions resolved. Remaining finding (product count 4 vs 6) is a scope decision, not a design failure. |
| Gaming | All V1 blocking dimensions resolved. Dark identity and palette discipline are production-quality. |
| Professional | All V1 blocking dimensions resolved. Blue tint hero significantly improves identity. No remaining critical issues. |

The project owner preference stated in prompt11 favors proceeding with V2 unless a critical problem requires another iteration. No critical problems remain.

---

## 7. Implementation Risks

| Risk | Theme | Mitigation |
|------|-------|-----------|
| Product count in Premium (4 vs 6) | Premium | Human decision before implementation |
| Mock badge text discrepancies | Premium | Use `mock-products.md` as authoritative source, not generated HTML |
| External images not production-ready | All | Replace with `imageUrls[]` from Product API |
| WCAG compliance not formally verified | All | Requires implementation-time automated testing (axe-core, Playwright) |
| Font loading on theme switch | All | Use theme-aware lazy font loading (see `visual-requirements.md` §15 Risk 5) |
| Glow effects vs text contrast in Gaming | Gaming | Glow applied to container borders only, never to text surfaces |
| Responsive behavior not designed | All | Design Step 7 (responsive variants) is pending |

---

## 8. Readiness for CatalogPage Design

V2 designs establish the following design language that must carry forward to CatalogPage:

| Element | Carry-forward rule |
|---------|--------------------|
| Header and navigation | Identical across all pages — preserved from HomePage |
| ThemeSwitcher | Visible in header on every page |
| Product card design | Dimension 7 (4/5 all themes) — card structure carries to catalog |
| Availability indicator | Mandatory on every product card, theme-specific color |
| Typography system | Per-theme system fully defined in DESIGN.md |
| Color tokens | Per-theme system locked in DESIGN.md |
| Footer structure | 4 columns (Shop, Browse, Information, Contact) — identical across pages |
| Border radius gradient | Premium 4px → Gaming 6px → Professional 8px — maintain in components |