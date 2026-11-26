# Moodboard — Modern Technology Store (`professional`)

> **Collection status: PARTIALLY VERIFIED — 2026-11-26**
> Screenshots captured via Playwright Firefox (headless), viewport 1440×900.
> 8/8 URLs visited; 4/8 usable or partially usable; 2/8 blocked (Cloudflare);
> 2/8 show 404 or unrelated content.
> See individual entries for verification status and observations.

---

## Research Brief

**What we are looking for:**

A product catalog, filter panel, or product detail page that demonstrates:
- Efficient browsing — maximum useful information per viewport without clutter
- Clear filter and sort UX — users can narrow results quickly
- Product card information hierarchy — image, name, price, key specs, CTA visible at rest
- Pricing transparency — price always visible, no interaction required
- Breadcrumb and category navigation that makes location clear
- Light, clean surfaces — white cards on light gray page background

**We are NOT looking for:**
- Outdated marketplace UI (yellow/blue 2010s e-commerce aesthetic)
- Dashboard-style data-heavy layouts (not an admin panel)
- Excessive visual density that makes the catalog hard to scan

---

## Candidate References

---

### REF-PR01 — Best Buy Canada — product catalog
- **Source:** Best Buy Co. Inc. (Canadian site)
- **Candidate URL:** `https://www.bestbuy.ca/en-ca/category/laptops/36461`
- **Final URL after redirect:** `https://www.bestbuy.ca/en-ca/category/laptops/36461`
- **Verification status:** Partial — 404 page captured
- **Screenshot path:** `screenshots/ref-PR01-bestbuy-canada-laptops.png`
- **Access date:** 2026-11-26
- **Actual visual observations:**
  - 404 "Page not found" — URL structure may have changed
  - Best Buy Canada header visible: solid royal blue (`#0046BE` approx), white Best Buy logo centered
  - Clean sans-serif "Page not found." heading in black on white background
  - Navigation link "home page" in Best Buy blue
  - Overall: demonstrates Best Buy's clean blue-and-white brand identity even in error state
- **Principles worth adopting:** Blue accent for navigation and links on white background; clean error state messaging
- **Elements not to copy:** Best Buy yellow brand stripe; Best Buy-specific promotions
- **Relevance:** Very low — catalog not captured. URL needs updating.
- **Recommendation for Stitch:** Do not use. Update URL to current Best Buy Canada laptop category.

---

### REF-PR02 — B&H Photo Video — product catalog
- **Source:** B&H Photo Video Pro Audio
- **Candidate URL:** `https://www.bhphotovideo.com/c/browse/Laptops/ci/9039`
- **Final URL after redirect:** `https://www.bhphotovideo.com/c/browse/Laptops/ci/9039`
- **Verification status:** Blocked — Cloudflare bot protection
- **Screenshot path:** `screenshots/ref-PR02-bh-photo-laptops.png`
- **Access date:** 2026-11-26
- **Actual visual observations:**
  - Cloudflare "Performing security verification" page — full bot protection challenge
  - Content not accessible via headless browser
- **Principles worth adopting:** None observable
- **Relevance:** Inaccessible via headless browser
- **Recommendation for Stitch:** Remove from reference set. Requires manual human capture via regular browser.

---

### REF-PR03 — Newegg — laptop catalog
- **Source:** Newegg Commerce Inc.
- **Candidate URL:** `https://www.newegg.com/Laptops-Notebooks/SubCategory/ID-32`
- **Final URL after redirect:** `https://www.newegg.com/Laptops-Notebooks/SubCategory/ID-32`
- **Verification status:** Verified — full catalog page visible
- **Screenshot path:** `screenshots/ref-PR03-newegg-laptops.png`
- **Access date:** 2026-11-26
- **Actual visual observations:**
  - Cookie banner at very bottom (non-intrusive)
  - Page header: Newegg logo + search bar + utility nav
  - Breadcrumb visible: "Home > Computer Systems > Laptops / Notebooks" with "ALL LAPTOP" current page label
  - Promotional banner strip: Google Chromebook Plus advertisement (non-Newegg product)
  - Filter area: "SHOP BY PROCESSOR NAME" section — horizontal chip filters for Intel/AMD generations
  - Filter chip examples: "AMD Ryzen AI", "Intel Core Ultra 5", "Intel Core 15th Gen", "Intel Core 12th Gen"
  - Sort/filter bar: horizontal layout above product grid — standard e-commerce pattern
  - Page background: white/light gray
  - Overall: functional, information-dense catalog — standard e-commerce conventions clearly implemented
- **Principles worth adopting:** Breadcrumb navigation above catalog; processor-based horizontal filter chips as quick filters; promotional banner in designated strip (not full-page); clear page background contrast between filter area and product grid
- **Elements not to copy:** Newegg's visual density level (higher than PCShop target); promotional ad injection in catalog; Newegg egg branding
- **Relevance:** High for catalog conventions and filter chip pattern; moderate for visual quality
- **Recommendation for Stitch:** Use for filter chip/horizontal quick-filter pattern and breadcrumb placement

---

### REF-PR04 — PCPartPicker — component listings
- **Source:** PCPartPicker LLC
- **Candidate URL:** `https://pcpartpicker.com/products/cpu/`
- **Final URL after redirect:** `https://pcpartpicker.com/products/cpu/`
- **Verification status:** Verified — filter structure fully visible (product data error, not design error)
- **Screenshot path:** `screenshots/ref-PR04-pcpartpicker-cpu.png`
- **Access date:** 2026-11-26
- **Actual visual observations:**
  - Cookie banner at very bottom (non-intrusive)
  - Navigation bar: dark (`#1A1A1A` approx) background with white text — "Builder", "Products", "Guides", "Completed Builds", "Trends", "Benchmarks", "Forums"
  - Page header: "Choose A CPU" — clean centered H1 on a slate/indigo-tinted hero strip
  - LEFT SIDEBAR: "Part List" widget showing current build state (0 parts, $0.00, 0W)
  - Filter sidebar sections: "Merchants / Pricing", "PRICING OPTIONS" (Include mail-in rebates checkbox), "Filters", "PRICE" (range slider $0–$2999)
  - Filter sidebar style: white card on light gray background, clean accordion sections with + controls
  - Product area: "Error Fetching Products — Permission denied" (Cloudflare blocked product data, not site design)
  - Column headers visible: Name, Core Count, Performance Core Clock, Performance Core Boost Clock, Microarchitecture, TDP, Integrated Graphics, Rating, Price
  - Column sort controls: chevron icons beside each column header
  - Blue accent: "Add From Filter" button, blue link text, "Log in" link
  - Overall: very clean, functional table layout with comprehensive filter controls
- **Principles worth adopting:** Left sidebar filter structure with expandable sections; price range slider; sortable column headers in table/list view; blue accent for primary actions; build wizard side panel concept (applicable for cart/comparison in PCShop)
- **Elements not to copy:** Table-only display (PCShop uses grid cards, not pure tables); build wizard UI (PCShop is a standard store); PCPartPicker-specific "compatibility filter" UX
- **Relevance:** Very high for filter sidebar structure — directly applicable because PCShop has `params.key=value` filtering like PCPartPicker
- **Recommendation for Stitch:** Reference for filter sidebar accordion structure and price range slider placement

---

### REF-PR05 — Micro Center — product catalog
- **Source:** Micro Center (Micro Electronics Inc.)
- **Candidate URL:** `https://www.microcenter.com/category/4294966998/laptops`
- **Final URL after redirect:** `https://www.microcenter.com/category/4294966998/laptops`
- **Verification status:** Blocked — Cloudflare bot protection ("Sorry, you have been blocked")
- **Screenshot path:** `screenshots/ref-PR05-microcenter-laptops.png`
- **Access date:** 2026-11-26
- **Actual visual observations:**
  - Full Cloudflare block page — "You are unable to access microcenter.com"
  - Standard block explanation + Ray ID
  - Content not accessible via headless browser
- **Principles worth adopting:** None observable
- **Relevance:** Inaccessible via headless browser
- **Recommendation for Stitch:** Remove from reference set. Requires manual human capture.

---

### REF-PR06 — Amazon (electronics category — laptops)
- **Source:** Amazon.com Inc.
- **Candidate URL:** `https://www.amazon.com/s?k=laptops&rh=n%3A565108`
- **Final URL after redirect:** `https://www.amazon.com/s?k=laptops&rh=n%3A565108`
- **Verification status:** Verified — full product listing visible
- **Screenshot path:** `screenshots/ref-PR06-amazon-laptops.png`
- **Access date:** 2026-11-26
- **Actual visual observations:**
  - LEFT FILTER SIDEBAR: visible — Brands (Acer, ASUS, HP, Samsung, Razer, Apple, Dell, Alienware, MSI, Lenovo), Screen Size filters, Operating System, Customer Reviews
  - Product listings: list-view format visible with 3 products:
    - ASUS ROG Strix G14 (2026) — image left, full spec text, price visible, star rating
    - HP 14 Laptop — image left, specs, storage comparison note ("565MBps vs past results")
    - Acer Aspire — image left, specs with Windows/Office bundle note
  - White background page, standard Amazon orange accent for star ratings and Prime badge
  - Sort options visible top-right: "Sort by: Featured"
  - Products show: image + name + brief specs + price (or "See options") + star rating
  - Price visibility: partially obscured for some items ("See options" button instead of price)
- **Principles worth adopting:** Left filter sidebar with brand/spec filters; product listing information hierarchy (image + name + specs + rating + price); sort control top-right above listing
- **Elements not to copy:** Amazon orange accent; Amazon-specific widgets (Prime badge, "Ships to Bulgaria", Subscribe & Save); "See options" hiding price (dark pattern)
- **Relevance:** High for user mental model reference — most users are already familiar with this catalog pattern; filter sidebar layout is widely understood
- **Recommendation for Stitch:** Reference for filter sidebar position and product listing information hierarchy; explicitly request price always visible (not behind "see options")

---

### REF-PR07 — Coolblue (European electronics retailer)
- **Source:** Coolblue B.V.
- **Candidate URL:** `https://www.coolblue.nl/en/laptops`
- **Final URL after redirect:** `https://www.coolblue.nl/en/laptops`
- **Verification status:** Partial — cookie dialog (prominent) with product grid visible in background
- **Screenshot path:** `screenshots/ref-PR07-coolblue-laptops.png`
- **Access date:** 2026-11-26
- **Actual visual observations:**
  - Cookie dialog is prominent ("COOKIES. Duh, it's us.") — Coolblue brand personality humor
  - Blue accent on cookie accept button: "Accepteer alles" in Coolblue's signature blue
  - Navigation bar: Coolblue logo left, standard e-commerce nav visible
  - Breadcrumb visible: "Laptops" active page
  - Background product grid: clean laptop product cards visible (3-4 per row)
  - Product images: standard laptop catalog photography on white/light background
  - Page background: white/very light — clean professional look
  - "Type laptop" section header visible — categorized browsing section
  - Staff recommendation figure visible in sidebar (Coolblue "expert" feature)
- **Principles worth adopting:** Clean product grid on white background; breadcrumb navigation; staff recommendation as trust element; playful but functional brand personality in cookie/consent copy
- **Elements not to copy:** Coolblue blue exact shade; Dutch/Belgian market specifics; staff mascot/expert feature (requires backend support)
- **Relevance:** Very high — Coolblue represents the target quality level for the professional theme; highest design quality among professional references
- **Recommendation for Stitch:** Partial reference — describes clean product grid quality and breadcrumb placement; manually capture full view without dialog for best results

---

### REF-PR08 — Apple Store (Mac accessories / peripherals section)
- **Source:** Apple Inc.
- **Candidate URL:** `https://www.apple.com/shop/buy-mac/mac-accessories`
- **Final URL after redirect:** `https://www.apple.com/shop/buy-mac/mac-accessories`
- **Verification status:** Partial — same 404 as REF-P01
- **Screenshot path:** `screenshots/ref-PR08-apple-mac-accessories.png`
- **Access date:** 2026-11-26
- **Actual visual observations:**
  - Same as P01: Apple 404 "The page you're looking for can't be found"
  - Navigation bar observable (same as P01): clean horizontal nav, monochrome
  - Footer: 5-column layout — "Shop and Learn", "Account", "Apple Store", "For Business", "Apple Values", "For Education", "For Healthcare", "About Apple" — with many sub-links
  - Footer background: light gray `#F5F5F7` approx — clean footer contrast with page content
- **Principles worth adopting (from footer):** Multi-column footer structure; Footer background color as subtle separation from page content
- **Elements not to copy:** This is a 404 page — not a product catalog reference
- **Relevance:** Very low — accessories catalog not captured. URL changed.
- **Recommendation for Stitch:** Do not use. Update URL in next session.

---

## Anti-References — What to Avoid

| Anti-pattern | Description | Why problematic |
|--------------|-------------|----------------|
| Outdated marketplace aesthetic | Yellow + blue + red "sale" banners everywhere | Looks untrustworthy; dates the product |
| Excessive visual density | 8+ parameters visible per card in grid view | Hard to scan; overwhelming |
| Generic admin dashboard | Gray sidebar nav; data tables everywhere | Wrong context — consumer e-commerce |
| Too many competing accents | Blue CTA + orange sale + green in-stock simultaneously | No clear visual hierarchy |
| Hidden pricing | Price appearing only on hover, or "see price in cart" | Dark pattern |
| Overwhelming promotional density | Every card has 3+ badge stickers | Looks low-quality and spammy |

---

## Verification Summary

| Reference | Status | Usefulness | Notes |
|-----------|--------|------------|-------|
| REF-PR01 | 404 page | Very low | URL changed — replace next session |
| REF-PR02 | Cloudflare blocked | None | Requires manual human capture |
| REF-PR03 | **Fully verified** | **High** — filter chips pattern | Small cookie banner |
| REF-PR04 | **Verified** | **Very high** — filter sidebar | Product data blocked, design visible |
| REF-PR05 | Cloudflare blocked | None | Requires manual human capture |
| REF-PR06 | **Fully verified** | **High** — catalog conventions | Standard Amazon layout |
| REF-PR07 | Cookie dialog | **High** (partial) | Product grid visible in background |
| REF-PR08 | 404 page | Very low | URL changed — replace next session |

**Verified count:** 3 fully + 1 substantial partial (PR07) = 4 usable references out of 8
**Recommended for Stitch:** REF-PR03 (filter chips), REF-PR04 (filter sidebar), REF-PR06 (catalog layout), REF-PR07 (clean grid quality)