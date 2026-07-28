# Coding Standards

> Stack-specific rules for the Naxdor codebase. Deeper detail in `docs/strategy/*.md`. Read alongside `ai-interaction.md`.

---

## TypeScript

- **Strict mode enabled**, plus `noUncheckedIndexedAccess: true`, `exactOptionalPropertyTypes: true`, `verbatimModuleSyntax: true`
- **No `any` types** — use proper typing or `unknown`
- Define interfaces / types for all props, API responses, data models, frontmatter, env vars
- Use type inference where obvious, explicit types where helpful (e.g. exported function returns)
- Prefer `type` over `interface` unless extension/merging is needed
- Validate every system boundary with **zod**: forms, API payloads, env vars, MDX frontmatter

---

## React 19

- **Functional components only** — no class components
- Use hooks for state and side effects
- Keep components focused — one job per component
- Extract reusable logic into custom hooks (`use*` naming)
- Use the React 19 `use()` API where it simplifies fetching
- Use Server Actions (not API routes) for forms and mutations unless an API route is genuinely needed

---

## Next.js 16 (App Router)

- **Server Components by default.** Only use `'use client'` when needed (interactivity, hooks, browser APIs)
- Server Actions for form submissions and simple mutations
- API routes (`app/api/[name]/route.ts`) only when you need:
  - Webhooks (Stripe, GitHub, GHL, HubSpot, etc.)
  - File uploads with progress tracking
  - Long-running operations / streaming
  - Specific HTTP status codes or headers
  - Endpoints for future mobile/CLI clients
  - Third-party integrations that can't run in a Server Action
- Otherwise, fetch data directly in Server Components
- Dynamic routes for services / locations / industries / blog / case-studies
- **Static generation** (`force-static` or `revalidate: false`) for all marketing pages
- **ISR** (revalidate-on-push) for blog and case studies in Phase 5+
- All route metadata via `generateMetadata` calling `lib/seo.ts` — never duplicate metadata logic

---

## Tailwind CSS v4.3

**CRITICAL**: We are on Tailwind v4, which uses CSS-based configuration.

- **DO NOT** create `tailwind.config.ts` or `tailwind.config.js` (those are v3)
- All theme configuration in CSS using `@theme` in `app/globals.css`
- Use CSS custom properties for colors, spacing, etc. (the design tokens)
- No JavaScript-based config allowed
- Design tokens live in `styles/tokens.css`, mirrored into `@theme` in `app/globals.css`

Example:

```css
@import "tailwindcss";

@theme {
  --color-brand-500: #5b4cdb; /* electric indigo — locked */
  --color-accent-500: #00d4b4; /* vivid teal — locked */
}
```

**Never hardcode hex / spacing / font sizes in components.** Always reference tokens via Tailwind classes or `var(--token-name)`.

---

## shadcn/ui on Base UI

- We use **shadcn/ui with the Base UI engine** (NOT Radix). Initialized via `pnpm dlx shadcn@latest init --base base-ui`.
- shadcn components live in `components/ui/` — copied in, owned by us, never auto-upgraded
- Don't import from `@radix-ui/*` directly — Base UI is the React 19-aligned successor
- When adding a new shadcn component, run `pnpm dlx shadcn@latest add [component]`
- Customizations go in the component file directly; document non-trivial changes in a comment

---

## File organization

```
app/
  (marketing)/         ← public marketing site (route group)
  (app)/               ← reserved for Phase 6 client portal
  api/
  layout.tsx
  globals.css
components/
  ui/                  ← shadcn primitives (Base UI engine)
  marketing/           ← Hero, FeatureGrid, PricingCard, etc.
  seo/                 ← JsonLd, Breadcrumbs
  layout/              ← Header, Footer, MobileNav
content/               ← MDX (services, locations, industries, case-studies, blog)
data/                  ← canonical TS catalogs + keywords.json + faqs
lib/                   ← mdx, seo, jsonld, analytics, env
public/
  brand/               ← logos, favicons
  images/
styles/
  tokens.css           ← CSS variable design tokens
scripts/               ← build-time checks (uniqueness, JSON-LD validation)
tests/e2e/             ← Playwright smoke tests
```

We do **not** use a `src/` directory — `app/`, `components/`, `lib/`, etc. live at the project root.

---

## Naming

- Components: PascalCase (`ServiceCard.tsx`, `Hero.tsx`)
- Files: match component name; non-component TS files use kebab-case (`use-mobile.ts`, `seo-helpers.ts`)
- Functions: camelCase (`getServiceBySlug`, `buildMetadata`)
- Constants: SCREAMING_SNAKE_CASE (`MAX_FORM_LENGTH`, `ORG_ID`)
- Types/Interfaces: PascalCase, no prefix (`Service`, `Location`, `BlogPost` — not `IService`)
- Boolean variables: `is*`, `has*`, `should*`, `can*`

---

## Styling

- Tailwind CSS for all styling
- Use shadcn/ui components where applicable
- **No inline styles** (use Tailwind classes or design-token CSS variables)
- **Dark mode**: respect system preference by default (`data-theme` toggle on `<html>`; localStorage override). NOT dark-mode-first.
- Use `prefers-reduced-motion` for any animation; honor it without exception
- Tap targets ≥ 24×24 CSS px (WCAG 2.2); ≥ 44×44 for primary touch actions

---

## Content / MDX

- MDX files live under `content/[collection]/[slug].mdx`
- Frontmatter validated with zod at build time (`lib/mdx.ts`) — bad content fails the build, not production
- Custom MDX components: `<Callout>`, `<Stat>`, `<Comparison>`, `<CodeBlock>` (shiki), etc.
- Reading time auto-computed for blog posts
- All MDX files have author + dates in frontmatter for E-E-A-T signals

---

## SEO & JSON-LD

- All page metadata via `lib/seo.ts` `buildMetadata({ title, description, path, image, type })`
- All structured data via typed `lib/jsonld.ts` builders using `schema-dts`
- One canonical `Organization` `@id` sitewide: `https://naxdor.com/#organization`
- Every page emits a `@graph` referencing Organization by `@id`
- `BreadcrumbList` on every non-home page
- FAQ blocks render `FAQPage` JSON-LD
- See `docs/strategy/schema-strategy.md` for full blueprints

---

## Forms

- `react-hook-form` + `zod` via `@hookform/resolvers`
- Inline validation, errors below the field, after blur (not on every keystroke)
- Submit via **Server Action**; never client-side fetch to our own API for simple mutations
- Honeypot field on every public form; no CAPTCHA
- Success state replaces the form in place — never redirect

---

## Database

We do **not** have a database in Phases 0–5. Phase 6 introduces:

- **Postgres** (Neon or self-hosted)
- **Drizzle ORM** (NOT Prisma)
- **Auth.js v5** for auth

Skip this section until Phase 6.

---

## Data fetching

- **Server components fetch directly** (`data/*.ts` catalogs, MDX via `lib/mdx.ts`, future CMS via `lib/cms.ts`)
- Client components use Server Actions for mutations
- **Validate all inputs with zod** at the boundary

---

## Error handling

- Use `try/catch` in Server Actions
- Return `{ success: true, data } | { success: false, error }` pattern
- Display user-friendly error messages via shadcn `Toast`
- Log unexpected errors to a monitoring service (Phase 4+)
- Never swallow errors silently — at minimum log them

---

## Performance budgets (CI-enforced)

| Metric                    | Budget  |
| ------------------------- | ------- |
| LCP (mobile, 4G)          | ≤ 2.0s  |
| INP                       | ≤ 200ms |
| CLS                       | ≤ 0.05  |
| Total JS (gz) on home     | ≤ 170KB |
| Lighthouse Mobile Perf    | ≥ 95    |
| Lighthouse A11y           | **100** |
| Lighthouse Best Practices | **100** |
| Lighthouse SEO            | ≥ 95    |

Full detail in `docs/strategy/performance-accessibility.md`. PR fails if any budget breached.

---

## Accessibility (WCAG 2.2 AA)

- Color contrast ≥ 4.5:1 body, ≥ 3:1 large text and UI components
- Keyboard reachable everywhere; visible focus ring (2px solid `--color-ring` + 2px offset)
- Skip-to-content link first focusable on every page
- ARIA labels on icon-only buttons
- One `h1` per page, sequential heading levels
- `prefers-reduced-motion` respected
- Target sizes ≥ 24×24 CSS px (WCAG 2.2 SC 2.5.8)
- No information conveyed by color alone
- Run `axe-core` in Playwright on representative URLs

---

## Code quality

- No commented-out code unless explicitly marked `// TODO(scope): why`
- No unused imports or variables (ESLint catches)
- Functions under 50 lines when reasonable
- No magic numbers — name them as constants
- Prefer composition over inheritance
- Co-locate tests with code (`Component.tsx` + `Component.test.ts`) when added

---

## Quality gates (must pass before commit)

```bash
pnpm typecheck       # zero errors
pnpm lint            # zero warnings
pnpm build           # succeeds
pnpm test:e2e        # if E2E added; smoke tests pass
pnpm lhci            # Lighthouse CI; budgets green
```

CI runs all five on every PR. Local pre-commit hook (Husky + lint-staged) runs at least lint + typecheck.
