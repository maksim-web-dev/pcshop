# PCShop — Frontend Plan

← [plan.md](plan.md)


## Architecture: Feature-Sliced (simplified)

```
src/
├── components/ui/     # Atoms — base primitives, no business knowledge (Button, Input, Badge...)
├── components/        # Molecules — composed UI blocks (ProductCard, FilterPanel...)
├── pages/             # Pages — composed from components, connected to router
├── hooks/             # Custom hooks (useProducts, useFilters, useCart...)
├── services/          # API functions via Axios (productApi, categoryApi...)
├── store/             # Zustand stores (uiStore, cartStore, themeStore)
├── themes/            # CSS token maps per theme + TypeScript theme types
└── types/             # Local types + re-exports from shared/
```

**Rules:**
- `ui/` components — no knowledge of API, store, or router
- `pages/` — contain no business logic directly, delegate to hooks
- Each component is isolated: does not read a neighbor's store, does not call foreign hooks


## Multi-Theme Architecture

### Overview

One React application, three interchangeable visual themes (`premium`, `gaming`, `professional`).
Shared business logic, API services, routing, and application state across all themes.
Theme switching is CSS-only: no React re-renders of business components, no API calls.

### Token Layers

Themes are expressed as semantic design token layers implemented with CSS custom properties:

```
1. primitive tokens   — raw values (hex colors, rem sizes, font names)
2. semantic tokens    — role-based aliases (--color-bg-primary, --color-text-muted)
3. component tokens   — component-specific overrides (--card-shadow, --btn-radius)
```

TailwindCSS is configured to reference semantic tokens via `var(--token-name)`.
Components use only semantic token class names — never raw Tailwind color or spacing values.

### Token Categories (per theme)

| Category   | Examples |
|------------|----------|
| Color      | `--color-bg-*`, `--color-surface-*`, `--color-text-*`, `--color-accent-*`, `--color-border-*` |
| Typography | `--font-family-*`, `--font-size-*`, `--font-weight-*`, `--line-height-*` |
| Spacing    | `--spacing-*` (augments Tailwind defaults if needed) |
| Border     | `--radius-*`, `--border-width-*` |
| Shadow     | `--shadow-*` (gaming: glow effects; premium: soft; professional: sharp) |
| Density    | `--density-*` (professional is denser; premium uses generous whitespace) |
| Animation  | `--duration-*`, `--easing-*`, `--glow-opacity-*` (gaming only) |

### Theme Switching Mechanism

```
1. User clicks ThemeSwitcher
2. themeStore.setTheme(theme)  →  updates Zustand state + writes to localStorage
3. App component reads theme from store, sets data-theme="<theme>" on <html>
4. CSS variables for the selected theme become active (no React re-render of content)
5. All components reflect the new visual theme via CSS
```

No API requests are triggered. Cart, filter, and navigation state are unaffected.

### Theme-Specific Presentation Variants

For components with significantly different visual structure per theme
(e.g., ProductCard image layout), a variant file pattern is used:

```
components/
├── ProductCard/
│   ├── ProductCard.tsx           # shared logic + props interface
│   ├── ProductCard.premium.tsx   # premium layout variant (if needed)
│   ├── ProductCard.gaming.tsx    # gaming layout variant (if needed)
│   └── index.ts                  # selects active variant based on current theme
```

Variants are used sparingly — only when CSS-token differences alone are insufficient.


## Skills & Constraints

### 1. Design System (TailwindCSS + tokens)
- All colors, spacing, fonts defined via CSS custom properties referenced in `tailwind.config.ts`
- Three complete token sets: `premium`, `gaming`, `professional`
- Color palette per theme: bg, surface, text, accent, border, success, error, warning
- Typography per theme: font families, 5 sizes (xs → xl), 2 weights (regular / semibold)
- `ui/` components use only semantic token class names — never arbitrary values
- Token changes in CSS automatically affect all components without code modifications

### 2. Component Isolation
- A component receives data via props, not directly from a global store
- If store access is needed — wrap in a hook (`useProductCard`), not a direct call in JSX
- Components have no knowledge of the router (links passed via props or slots)
- This ensures testability without mocking the router or store

### 3. Server State (TanStack Query)
- All API communication — via TanStack Query only (no useState + useEffect pattern)
- Each endpoint has a dedicated `queryKey` (e.g. `['products', filters]`)
- Automatic caching, refetch on focus, stale time configured globally
- Loading / Error / Empty states handled explicitly in every component

### 4. Client State (Zustand)
- Zustand for client state only: cart, UI state (sidebar open/close), active theme
- Do not duplicate server state in Zustand (TanStack Query handles that)
- Each store is a separate file with a typed interface

### 5. Theme State Management
- `themeStore` holds the active theme identifier: `'premium' | 'gaming' | 'professional'`
- Default theme: `professional`
- Persistence: writes to `localStorage` on every theme change
- Hydration: on app mount, reads from `localStorage` (falls back to `professional` if absent)
- `App.tsx` reads theme from store and applies `data-theme` attribute to `<html>`
- **Theme switching must NOT:** reset cart, clear filters, trigger re-fetches, navigate away

### 6. Typing (TypeScript strict)
- `tsconfig.json`: `"strict": true`
- No `any` — use `unknown` + type guard or Zod parsing for API responses
- All component props are explicitly typed interfaces (no `React.FC<any>`)

### 7. Lazy Loading
- Every page (`pages/`) — `React.lazy()` + `<Suspense>`
- Reduces initial bundle size and shows a skeleton during navigation

### 8. Testing
- See [plan_frontend_testing.md](plan_frontend_testing.md) for the full testing strategy
- **Unit (Vitest + RTL):** testing isolated `ui/` components and hooks
- **Visual regression (Playwright):** 36 baseline screenshots (3 themes × 4 pages × 3 viewports)
- **E2E (Playwright):** key user flows (catalog → filters → product detail → cart)
- Every `ui/` component has at least one snapshot test
- Theme switching and persistence are covered by dedicated test suites


## Pages & Components

```
pages/
├── HomePage            # banner + featured categories + top products
├── CatalogPage         # product list + filters (sidebar) + sorting + pagination
├── ProductPage         # product detail: photo, parameters, price, add to cart
└── NotFoundPage        # 404

components/
├── ui/
│   ├── Button          # variant: primary | secondary | ghost; size: sm | md | lg
│   ├── Input           # text input with label and error state
│   ├── Badge           # for product parameters (RAM: 16 GB)
│   ├── Skeleton        # loading placeholder
│   ├── Pagination      # < 1 2 3 ... 10 >
│   └── ThemeSwitcher   # theme toggle: premium | gaming | professional
├── ProductCard         # catalog card: photo, name, price, parameters (badges)
├── ProductGrid         # grid/list of ProductCards + empty state
├── FilterPanel         # filters by category parameters (checkboxes/range)
├── SortSelect          # sort dropdown
├── CategoryNav         # navigation by product types and categories
└── Header / Footer
```


## Implementation Steps

1. `npm create vite` + TypeScript template
2. Configure TailwindCSS + CSS custom properties — 3 complete theme token sets in `tailwind.config.ts`
3. Create `themes/` directory — token maps per theme, `ThemeId` type, token application logic
4. Implement Zustand `themeStore` — default: `professional`, localStorage persistence, hydration
5. Apply `data-theme` attribute to `<html>` from `themeStore` in `App.tsx`
6. Build ThemeSwitcher component — verify visual switching works for all 3 themes
7. Configure React Router v6 — routes with `React.lazy()` + `<Suspense>` for all pages
8. Connect TanStack Query (`QueryClientProvider`) + Axios base instance (`services/api.ts`)
9. Implement `ui/` components bottom-up (Button → Input → Badge → Skeleton → Pagination)
10. Implement `services/` — API functions for all backend endpoints
11. Implement hooks (`useProducts`, `useCategories`, `useFilters`, `useCart`)
12. Implement composed components (ProductCard, FilterPanel, CategoryNav, Header, Footer...)
13. Compose pages from components and hooks
14. Verify all pages in all 3 themes × 3 viewports (desktop / tablet / mobile)
15. Write unit tests (Vitest + RTL) for all `ui/` components
16. Write E2E + visual regression tests (Playwright) — capture 36 baseline screenshots