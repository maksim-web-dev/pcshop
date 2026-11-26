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
├── store/             # Zustand stores (uiStore, cartStore...)
└── types/             # Local types + re-exports from shared/
```

**Rules:**
- `ui/` components — no knowledge of API, store, or router
- `pages/` — contain no business logic directly, delegate to hooks
- Each component is isolated: does not read a neighbor's store, does not call foreign hooks


## Skills & Constraints

### 1. Design System (TailwindCSS + tokens)
- All colors, spacing, fonts — defined in `tailwind.config.ts` (no hardcoded values in classes)
- Color palette: primary, secondary, neutral, success, error, warning
- Typography: 5 sizes (xs → xl), 2 weights (regular / semibold)
- `ui/` components use only tokens, never arbitrary values

### 2. Component Isolation
- A component receives data via props, not directly from a global store
- If store access is needed — wrap it in a hook (`useProductCard`), not a direct call in JSX
- Components have no knowledge of the router (links passed via props or slots)
- This ensures testability without mocking the router or store

### 3. Server State (TanStack Query)
- All API communication — via TanStack Query only (no useState + useEffect pattern)
- Each endpoint has a dedicated `queryKey` (e.g. `['products', filters]`)
- Automatic caching, refetch on focus, stale time configured globally
- Loading / Error / Empty states handled explicitly in every component

### 4. Client State (Zustand)
- Zustand only for client state: cart, UI state (sidebar open/close), filters
- Do not duplicate server state in Zustand (TanStack Query handles that)
- Each store is a separate file with a typed interface

### 5. Typing (TypeScript strict)
- `tsconfig.json`: `"strict": true`
- No `any` — use `unknown` + type guard or Zod parsing for API responses instead
- All component props are explicitly typed interfaces (no `React.FC<any>`)

### 6. Lazy Loading
- Every page (`pages/`) — `React.lazy()` + `<Suspense>`
- Reduces initial bundle size and shows a skeleton during navigation

### 7. Testing
- **Unit (Vitest + RTL):** testing isolated `ui/` components and hooks
- **Screenshot / E2E (Playwright):** testing key flows (catalog → filters → product detail)
- Every `ui/` component has at least one snapshot test


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
│   └── Pagination      # < 1 2 3 ... 10 >
├── ProductCard         # catalog card: photo, name, price, parameters (badges)
├── ProductGrid         # grid/list of ProductCards + empty state
├── FilterPanel         # filters by category parameters (checkboxes/range)
├── SortSelect          # sort dropdown
├── CategoryNav         # navigation by product types and categories
└── Header / Footer
```


## Implementation Steps

1. `npm create vite` + TypeScript template
2. Configure TailwindCSS + `tailwind.config.ts` (design tokens)
3. Configure React Router v6 — routes, lazy pages
4. Connect TanStack Query (`QueryClientProvider`) + Axios instance (`services/api.ts`)
5. Connect Zustand stores
6. Implement `ui/` components (bottom-up: Button → Card → Pagination...)
7. Implement `services/` — API functions for all endpoints
8. Implement hooks (`useProducts`, `useCategories`, `useFilters`)
9. Compose pages from components and hooks
10. Write tests (unit → screenshot)
11. Verify responsiveness (mobile / tablet / desktop)