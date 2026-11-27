# NotFoundPage — Shared Design Specification

**Version:** 1.0 (2026-11-27)
**Status:** Specification complete — no Google Stitch generation required
**Reference:** Established theme values from approved-design-guidance.md files for all three pages

---

## 1. Page Objectives

The NotFoundPage serves as the recovery surface for all navigation dead-ends. It must:

1. Clearly communicate that the requested resource is unavailable
2. Distinguish between permanent and temporary unavailability where possible
3. Provide immediate, unambiguous navigation back to the product catalog
4. Preserve the active theme identity so the user does not feel they have left the application
5. Never leave the user stranded — every error variant includes an actionable next step

---

## 2. Error State Taxonomy

The NotFoundPage layout is shared, but the message copy adapts to the error context. Four distinct situations must be handled:

| Situation | Trigger | Heading | Message | CTA |
|-----------|---------|---------|---------|-----|
| **Unknown route** | URL does not match any React Router route | "Page Not Found" | "The page you are looking for does not exist." | Browse all products |
| **Product not found** | `GET /api/products/:id` returns HTTP 404 | "Product Not Found" | "This product is not available." | Browse category or catalog |
| **Inactive product** | API returns HTTP 200 but `product.isActive === false` | "Product Not Available" | "This product is no longer available." | Browse category or catalog |
| **Temporary API failure** | Network error or 5xx on a required API call | Do NOT use 404 language | Use error state within the originating page (see `product.md §13` and `catalog.md §11`) | "Try again" button on the page where the error occurred |

**Critical rule:** Temporary API failures (network errors, 5xx responses) are **not** 404 errors and must not redirect to the NotFoundPage. Use in-page error states with a "Try again" action instead. The NotFoundPage is only for permanent unavailability.

---

## 3. Page Structure

All three themes implement the same section structure:

```
[Header]
  — identical to all other pages (see home.md §3)
  — ThemeSwitcher visible and functional

[NotFound Content]
  — 404 indicator
  — Heading
  — Message
  — Primary CTA: "Browse all products" → /catalog
  — Secondary CTA: "Go to Home" → /

[Footer]
  — identical to all other pages (see home.md §9)
```

The content area is **centered** — horizontally and vertically within the available viewport between header and footer.

---

## 4. Header and Footer

**Header:** Identical to the header on all other pages.
- ThemeSwitcher is visible and functional
- Cart badge is visible
- Navigation links are present (Laptops, PCs, Monitors, Peripherals)
- No "active" nav item (there is no matching section for a 404 page)

**Footer:** Identical to the footer on all other pages.

Theme-specific header and footer rules are defined in:
- `structure/design/stitch/homepage/{theme}/approved-design-guidance.md`

---

## 5. 404 Content Area

### Shared layout requirements

- Content is centered on the page (vertically within the space between header and footer; horizontally within the page container)
- Maximum content width: `max-w-lg` (~512px) — prevents the message from spanning full page width
- Vertical padding: generous — at least 80px top and bottom
- No decorative illustrations, background patterns, or images are required (theme-specific additions are optional and constrained)

### Required content elements

| Element | Requirement |
|---------|------------|
| 404 indicator | Visually prominent "404" or equivalent; must be the dominant visual element |
| Heading | `<h1>` — "Page Not Found" or context-specific variant (see §2) |
| Message | One sentence explaining the situation; avoid technical jargon |
| Primary CTA | Button: "Browse all products" → `/catalog`; primary button style per theme |
| Secondary CTA | Text link: "Go to Home" → `/`; understated, below primary CTA |

### What must NOT appear

- No request to "report the error" or "contact support" — no contact system exists
- No "did you mean..." search suggestions — no search suggestion endpoint exists
- No animated countdown timers or auto-redirects
- No star ratings, promotional content, or featured products
- No delivery promises, warranty claims, or marketing copy
- No error code beyond "404" (no stack traces, no technical details)

---

## 6. Routing and State Behavior

| Behavior | Requirement |
|----------|------------|
| URL | The original invalid URL remains in the address bar; do not redirect to `/404` |
| Cart state | Preserved — NotFoundPage does not reset Zustand cart |
| Theme state | Preserved — active theme applied to NotFoundPage header, footer, content |
| Browser back | Works normally — pressing Back returns to the previous page |
| Theme switching | Functional on NotFoundPage |

**React Router implementation:** Use a catch-all route (`path="*"`) that renders the NotFoundPage component. The URL is not modified.

---

## 7. Navigation CTAs

### Primary CTA: Browse all products

- Label: "Browse all products"
- Target: `/catalog` (no additional query params)
- Style: primary button per theme (same as "Add to Cart" or hero CTA style)
- Keyboard focus: receives focus on page load (via `autoFocus` or manual `useEffect`)

### Secondary CTA: Go to Home

- Label: "Go to Home"
- Target: `/`
- Style: subdued — text link or ghost button; not competing with primary CTA
- Position: below primary CTA

Both CTAs are always visible — not hover-only. Keyboard-reachable. ≥44×44px tap target on mobile.

---

## 8. Premium Minimalism Presentation

### Visual approach

Warm neutral surfaces, editorial restraint. The 404 is acknowledged with typographic elegance, not dramatic illustration.

| Element | Value |
|---------|-------|
| Page background | `#FAFAF8` warm off-white (identical to other pages) |
| 404 indicator | Playfair Display 400, large (96–120px), `#E5E0DB` — subdued, typographic |
| Heading (h1) | Playfair Display 400, 32px, `#1A1A1A` |
| Message | DM Sans 400, 16px, `#5C5C5C` |
| Primary CTA | `#1A1A1A` fill button, `#FAFAF8` text, DM Sans 600, 4px radius, 48px height |
| Secondary CTA | DM Sans 14px, `#5C5C5C`, underline-on-hover text link |
| Decorative element | Optional: single thin horizontal rule `1px solid #E5E0DB` above the heading |

**No colored accents.** The 404 numeral is intentionally de-emphasized in soft warm gray — consistent with the theme's principle that restraint communicates quality.

---

## 9. Gaming & Technology Presentation

### Visual approach

Dark surfaces, expressive 404 typography, purple and cyan accents. The error is presented with energy and directness — the user knows immediately they are in the wrong place.

| Element | Value |
|---------|-------|
| Page background | `#0A0A0F` near-black (identical to other pages) |
| 404 indicator | Rajdhani 700 UPPERCASE, large (96–120px), `#8B5CF6` purple with optional `0 0 40px rgba(139,92,246,0.4)` text-shadow glow |
| Heading (h1) | Rajdhani 700 UPPERCASE, 32px, `#F0F0FF` |
| Message | Inter 400, 16px, `#A0A0C0` — clearly explains the page does not exist |
| Primary CTA | Purple gradient button (`#8B5CF6` → `#5516BE`), Rajdhani 700 UPPERCASE "BROWSE ALL PRODUCTS", 6px radius, 48px height |
| Secondary CTA | Inter 14px, `#22D3EE` cyan text link, hover underline |
| Decorative element | Optional: 1px purple-to-cyan accent line (`#8B5CF6` → `#22D3EE`) above the 404 indicator |

**Green is forbidden.** Message copy must explicitly state the page does not exist (not vague or ambiguous). The 404 numeral can carry the purple glow effect — it is a static decorative element, not an animation at rest (no infinite looping glow).

---

## 10. Modern Technology Store Presentation

### Visual approach

Light surfaces, Inter typography, blue accents. Practical, information-first. The error is acknowledged concisely; the navigation actions are prominent.

| Element | Value |
|---------|-------|
| Page background | `#F3F4F6` cool light gray (identical to other pages) |
| 404 indicator | Inter 700, large (96–120px), `#E5E7EB` — quiet, structural |
| Heading (h1) | Inter 700, 32px, `#111827` |
| Message | Inter 400, 16px, `#4B5563` |
| Primary CTA | `#2563EB` blue fill, `#FFFFFF` text, Inter 600, 6px radius, 48px height |
| Secondary CTA | Inter 14px, `#2563EB` text link, hover underline |
| Decorative element | None — clean, unadorned |
| CTA card container | Optional: `#FFFFFF` card with `1px #E5E7EB` border and 8px radius containing both CTAs and message, centered |

**Blue is the only accent.** No decorative elements beyond the optional card container.

---

## 11. Responsive Layout

The NotFoundPage uses a simple centered layout that is naturally responsive.

| Breakpoint | Behavior |
|------------|---------|
| Desktop ≥1024px | Header + centered content block (max-w-lg) + Footer; comfortable vertical spacing |
| Tablet 768–1023px | Same centered layout; header may compress; footer may reflow |
| Mobile ≤767px | Same centered layout; 404 numeral scales down; CTAs stack vertically and become full-width; padding reduces |

### Typography scaling for the 404 indicator

| Breakpoint | 404 size |
|------------|---------|
| Desktop | 96–120px |
| Tablet | 72–96px |
| Mobile | 56–72px |

### CTA layout on mobile

Both CTAs stack vertically:
1. Primary CTA — full-width button (100% container width)
2. Secondary CTA — text link centered below

---

## 12. Accessibility Requirements

| Requirement | Specification |
|-------------|--------------|
| Heading hierarchy | `<h1>` for the error heading; no secondary headings needed on this page |
| 404 indicator | Visually prominent but `aria-hidden="true"` if it is decorative (the `<h1>` carries the semantic meaning) |
| Primary CTA focus | Receives keyboard focus on page mount — helps keyboard/screen reader users find the escape action immediately |
| CTAs | Both are native `<a>` or `<button>` elements; no `role="button"` on `<div>` |
| Color independence | The error state is communicated by text and heading, not by color alone |
| Reduced motion | Glow effects (Gaming) are static — no animations at rest |
| Tap targets | Both CTAs ≥44×44px on mobile |
| Document title | `<title>` updated to "404 — Page Not Found | PCShop" |

---

## 13. No Google Stitch Generation Required

The NotFoundPage does not require a Google Stitch generation. The design language is fully established from the approved designs for all three themes. The page uses standard header, footer, and typography components already defined.

If the project owner wants a mockup for review, a quick one-page Stitch prompt can be prepared on request — but it is not on the critical path and not recommended as a blocking dependency.