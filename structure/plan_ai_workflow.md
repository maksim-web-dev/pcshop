# PCShop — AI Development Workflow

← [plan.md](plan.md)

Description of the planned AI development environment for the frontend phase.
No agents or skills are created yet — this document defines their future configuration.

---

## AI Development Environment

### CLAUDE.md

A `CLAUDE.md` file at the project root provides persistent context for every Claude Code session.

**Contents:**
- Project overview and goals
- Stack and versions (React 18, TypeScript strict, TailwindCSS, Zustand, TanStack Query)
- File naming conventions and directory structure
- Component authoring rules (props typing, no `any`, token-only styling)
- Multi-theme rules (never hardcode colors, always use CSS custom property tokens)
- Zustand store patterns
- TanStack Query patterns (queryKey conventions, error handling)
- Testing conventions (Vitest + RTL for unit, Playwright for E2E)
- Commit message format
- What to do / not do (no business logic in `ui/`, no direct store reads in components)

**Goal:** Any Claude Code session started on this project produces code consistent
with existing code without needing to re-explain conventions in every prompt.

---

### Custom Claude Code Skills

Five reusable skills cover the most frequent AI-assisted tasks in the frontend.

#### 1. Frontend Design Skill
**Purpose:** Bridge between approved design specs and implementation planning.
**Input:** Page name, theme, viewport, design token reference.
**Output:** Component breakdown, layout structure, token mapping for the target page/component.
**When to use:** Before implementing a new page or complex component.

#### 2. Design System Skill
**Purpose:** Generate or update design token definitions and CSS custom property files.
**Input:** Token category, theme name, approved design values.
**Output:** CSS custom property declarations for a theme token set.
**When to use:** When defining or updating the token layer for a theme.

#### 3. React Component Skill
**Purpose:** Generate a typed, testable React component from a spec.
**Input:** Component name, props interface, visual states required, token classes to use.
**Output:** Component `.tsx` file + unit test file (Vitest + RTL).
**When to use:** Implementing any `ui/` or composed component.

#### 4. Visual Review Skill
**Purpose:** AI-assisted comparison of a Playwright screenshot against an approved design.
**Input:** Screenshot path, approved design reference, review criteria.
**Output:** Structured review report (matches / deviations / severity / suggested fixes).
**When to use:** After implementing a page or component, before human approval.

#### 5. Implement Page Skill
**Purpose:** Orchestrate the full page implementation workflow end-to-end.
**Input:** Page name, component inventory, hook dependencies, API endpoints used.
**Output:** Page component, hook wiring, service calls, all states handled.
**When to use:** Starting implementation of a new page.

---

### Playwright MCP Integration

Playwright MCP server enables AI agents to control a real browser during development.

**Capabilities used:**
- Navigate to pages in the running frontend dev server
- Take full-page screenshots at specified viewports
- Interact with the ThemeSwitcher and verify visual changes
- Run axe-core accessibility checks in-browser
- Capture baseline screenshots for visual regression tests
- **Collect visual references** from public websites during the design phase

**Configuration:** Playwright MCP is configured as a local MCP server in the project
via `.mcp.json` at the project root. Claude Code agents use it via tool calls.

**Browser:** Firefox (headless) — configured via `--browser firefox` in `.mcp.json`.
Firefox is installed at `~/.cache/ms-playwright/firefox-1572`.
See `structure/ai/mcp/playwright.md` for full setup documentation.

**Note on integration sequence:** Playwright MCP integration was performed in Task 1.3.1
(prompt05), earlier than originally planned for Phase 2. This was required because
Design Step 2 (visual reference collection) needed live browser access.
Avoid duplicating MCP setup in subsequent phases — it is already configured.

**Detailed documentation:** `structure/ai/mcp/playwright.md`

---

### Multi-Agent Orchestration

Complex frontend tasks are broken into an orchestrated chain of specialized agents.
Each agent has a narrow responsibility, produces a reviewable output, and hands off to the next.

#### Page Implementation Workflow

```
Specification
     │
     ▼
[UI Designer Agent]          generates design breakdown from spec + design tokens
     │  output: component layout, token usage, variant decisions
     ▼
[Design System Architect Agent]  ensures token consistency, identifies missing tokens
     │  output: token additions / corrections
     ▼
[Frontend Architect Agent]   plans component structure, hook wiring, API integration
     │  output: implementation plan, file list, dependency graph
     ▼
[Frontend Developer Agent]   implements the page and components
     │  output: .tsx files, hooks, service calls
     ▼
[Visual Reviewer Agent]      compares live screenshot to approved design (Playwright MCP)
     │  output: visual review report with deviation list
     ▼
[Code Reviewer Agent]        reviews code quality, conventions, TypeScript, tokens
     │  output: code review report with suggested fixes
     ▼
Human Approval Gate          human reviews agent outputs and approves or requests changes
     │
     ▼
[QA Engineer Agent]          writes / runs E2E and visual regression tests
     │  output: Playwright test files, baseline screenshots
     ▼
  Done
```

**Human approval gates** occur after the Visual Reviewer and Code Reviewer — no agent
proceeds past these gates without explicit human sign-off.

---

## Agent Roles

### UI Designer Agent

**Responsibility:** Translate approved design specifications into actionable implementation briefs.

**Inputs:**
- Approved design (page, theme, viewport)
- Design token reference
- Component inventory from plan_design.md

**Outputs:**
- Component layout breakdown (which components, in what structure)
- Token-to-class mapping for each component
- Variant decisions (CSS tokens sufficient vs. layout variant required)
- List of states to implement per component

**Handoff to:** Design System Architect Agent (if token gaps found) → Frontend Architect Agent

**Approval criteria:** Implementation brief is complete, unambiguous, and consistent with approved design

---

### Design System Architect Agent

**Responsibility:** Maintain token consistency and completeness across all themes and components.

**Inputs:**
- Current token definitions
- UI Designer Agent output (new token requirements)
- Existing `tailwind.config.ts` and `themes/` files

**Outputs:**
- Updated or new CSS custom property declarations
- Updated token documentation
- Warning if a token would break existing components

**Handoff to:** Frontend Architect Agent

**Approval criteria:** No token is added without a clear semantic name and coverage in all 3 themes

---

### Frontend Architect Agent

**Responsibility:** Plan the implementation structure before any code is written.

**Inputs:**
- UI Designer Agent output (component breakdown)
- Existing project structure and conventions
- API endpoints and hook patterns from existing code

**Outputs:**
- File list to create/modify
- Dependency graph (which components depend on which hooks/stores)
- Props interfaces
- API integration plan (which TanStack Query hooks, queryKeys)
- Potential risks or conflicts with existing code

**Handoff to:** Frontend Developer Agent

**Approval criteria:** Plan is consistent with project conventions and covers all required functionality

---

### Frontend Developer Agent

**Responsibility:** Implement the page or component according to the architect's plan.

**Inputs:**
- Frontend Architect Agent output (implementation plan)
- Design System Architect Agent output (token classes to use)
- CLAUDE.md conventions

**Outputs:**
- `.tsx` component and page files
- Custom hooks
- Service layer additions
- TypeScript strict-compliant code

**Handoff to:** Visual Reviewer Agent + Code Reviewer Agent (parallel)

**Approval criteria:** Code compiles, follows conventions, all required states implemented

---

### Visual Reviewer Agent

**Responsibility:** Compare live browser screenshots against approved designs and report deviations.

**Inputs:**
- Running frontend dev server (via Playwright MCP)
- Approved design reference per page per theme per viewport
- Visual review criteria checklist

**Outputs:**
- Screenshots at all 3 viewports for all applicable themes
- Structured deviation report:
  - Component name
  - Deviation description
  - Severity: `critical` / `major` / `minor` / `cosmetic`
  - Screenshot crop showing the deviation
  - Suggested fix

**Handoff to:** Human Approval Gate

**Approval criteria:** No critical or major deviations; minor/cosmetic deviations documented and accepted

---

### Code Reviewer Agent

**Responsibility:** Review code quality, convention compliance, TypeScript correctness, and security.

**Inputs:**
- Diff of all changed files
- CLAUDE.md conventions
- Project coding standards

**Outputs:**
- Code review report:
  - Convention violations
  - TypeScript issues (any usage, non-strict patterns)
  - Hardcoded values instead of tokens
  - Business logic in wrong layer
  - Missing prop types or state handling
  - Security concerns

**Handoff to:** Human Approval Gate (in parallel with Visual Reviewer)

**Approval criteria:** No convention violations, no hardcoded styling, TypeScript strict passes

---

### QA Engineer Agent

**Responsibility:** Write and run Playwright tests covering functionality, visual regression, and accessibility.

**Inputs:**
- Completed and approved page implementation
- Test strategy from plan_frontend_testing.md
- Playwright MCP access to running app

**Outputs:**
- Playwright test file for the page (E2E flows)
- 36 baseline screenshots (or subset for newly added page × themes × viewports)
- Accessibility report (axe-core)
- Test run results

**Handoff to:** Human (baseline screenshot approval)

**Approval criteria:** All tests pass, baselines reviewed and committed, no accessibility violations

---

## Human Approval Gates

| Gate | Trigger | What human reviews | Required before |
|------|---------|--------------------|-----------------|
| Design Gate | After Step 12 of plan_design.md | All designs, tokens, component specs | Any code written |
| Implementation Gate | After Visual Review + Code Review | Deviations report + code review | Merging implementation |
| Baseline Gate | After QA Agent captures screenshots | 36 baseline screenshots | Committing baselines |
| Final Gate | After Phase 6 complete | Full test suite, Lighthouse report, all baselines | Phase 7 begins |

Human responses at each gate: **Approve** / **Request changes** (with specific notes) / **Reject** (restart affected step)