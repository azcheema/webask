# Tech Stack

> Exact versions pinned as of May 2026. Every choice has a reason — if you swap something, update this file with the new rationale.

---

## Core runtime

| Package      | Version   | Why                                                                                                                                     |
| ------------ | --------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `next`       | `^16.2.6` | App Router, RSC, Server Actions, Turbopack stable. 16.2.6 is the May 7 2026 security release (13 advisories patched). Required minimum. |
| `react`      | `^19.2.6` | May 6 2026 release. Stable Actions, `use()`, Suspense improvements. Required by shadcn Base UI engine.                                  |
| `react-dom`  | `^19.2.6` | Pair with react.                                                                                                                        |
| `typescript` | `^5.7`    | Strict, `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `verbatimModuleSyntax`.                                               |
| `node`       | `^24`     | Active LTS line; Next.js 16 supports 22+. We pin 24 on developer machines + CI (`.nvmrc`).                                              |
| `pnpm`       | `^11`     | Faster, deterministic, monorepo-ready if we split later. Build-script approval is opt-in via `pnpm-workspace.yaml`.                     |

---

## Styling & UI

| Package                    | Version | Why                                                                                                                                                                                     |
| -------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tailwindcss`              | `^4.3`  | v4 engine is 5× faster full / 100× faster incremental builds. v4.3 adds scrollbar utilities + more logical properties. No `tailwind.config.ts` needed — tokens live in `@theme` in CSS. |
| `@tailwindcss/typography`  | `^0.5`  | Prose styles for MDX blog.                                                                                                                                                              |
| `@tailwindcss/postcss`     | `^4.3`  | PostCSS plugin (we use Vite-style integration via Next.js).                                                                                                                             |
| `class-variance-authority` | latest  | Component variant API (shadcn dependency).                                                                                                                                              |
| `tailwind-merge`           | latest  | Conflict-free className merging.                                                                                                                                                        |
| `clsx`                     | latest  | Conditional classNames.                                                                                                                                                                 |
| `lucide-react`             | latest  | Icon set. ~1KB per icon, tree-shaken.                                                                                                                                                   |
| `framer-motion`            | `^12`   | Purposeful motion only (button feedback, scroll reveals, page transitions). Honor `prefers-reduced-motion`.                                                                             |

### shadcn/ui — Base UI engine (not Radix)

shadcn/cli v4 (released March 2026) lets us pick the underlying engine. As of CLI v4.8 the flag value is `base` (not `base-ui`); the choices are `radix` or `base`:

```bash
pnpm dlx shadcn@latest init --template next --base base --preset nova
```

We choose **Base UI** over Radix because:

- Base UI was designed _after_ React 19's changes — no rough edges around `useEffect` timing, refs, or transitions.
- Identical component API to the Radix variant — same `Button`, `Dialog`, `Select`, etc.
- Smaller install footprint than the unified `radix-ui` package.
- Better long-term React 19+ alignment.

Components we'll install in Phase 0 (in the `shadcn-components` feature, after `scaffold-nextjs`):
`button`, `card`, `input`, `textarea`, `label`, `select`, `dialog`, `sheet`, `tabs`, `accordion`, `badge`, `separator`, `tooltip`, `skeleton`, `sonner`, `breadcrumb`, `navigation-menu`, `dropdown-menu`, `popover`, `command`, `avatar`, `aspect-ratio`, `scroll-area`.

In shadcn v4, `toast` is replaced by `sonner` (the existing toast primitive is unmaintained), and `combobox` is a recipe — assembled from `command` + `popover`, not installed as its own component.

---

## Content

| Package              | Version | Why                                                           |
| -------------------- | ------- | ------------------------------------------------------------- |
| `@next/mdx`          | `^16`   | First-party MDX integration with App Router.                  |
| `next-mdx-remote`    | `^5`    | For dynamic/CMS-driven MDX in Phase 5.                        |
| `@mdx-js/loader`     | `^3`    | MDX → JS pipeline.                                            |
| `gray-matter`        | latest  | YAML frontmatter parsing.                                     |
| `remark-gfm`         | latest  | GitHub-flavored markdown (tables, task lists).                |
| `rehype-pretty-code` | latest  | Syntax highlighting via Shiki — no client JS for code blocks. |
| `reading-time`       | latest  | Blog post read estimates.                                     |

---

## Forms & validation

| Package               | Version | Why                                                                                                                                                   |
| --------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `zod`                 | `^4`    | Single source of truth: env vars, content frontmatter, form schemas, API payloads. v4 ships materially better DX over v3 (cleaner error API, faster). |
| `react-hook-form`     | `^7`    | Performant, RSC-friendly.                                                                                                                             |
| `@hookform/resolvers` | latest  | zod ↔ RHF bridge.                                                                                                                                     |

---

## SEO infrastructure

| Package                   | Version | Why                                                                                       |
| ------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| Built-in `app/sitemap.ts` | —       | Multi-sitemap index pattern (see `seo-strategy.md`).                                      |
| Built-in `app/robots.ts`  | —       | Single-source robots config.                                                              |
| Built-in `next/og`        | —       | Dynamic Open Graph image generation.                                                      |
| `schema-dts`              | latest  | TypeScript types for schema.org. Lets the compiler catch invalid JSON-LD before it ships. |

We do **not** install:

- Plugin-based sitemap generators (built-in covers it).
- Any "AI SEO" / `llms.txt` packages — per Google's May 2026 guide, not needed.
- `next-seo` — App Router's built-in Metadata API supersedes it.

---

## Email (Phase 1)

| Package       | Version | Why                                                                    |
| ------------- | ------- | ---------------------------------------------------------------------- |
| `resend`      | `^4`    | Cheapest deliverable transactional email; great DX; first-class React. |
| `react-email` | `^3`    | JSX email templates with previews.                                     |

---

## Tooling

| Package                       | Version         | Why                                       |
| ----------------------------- | --------------- | ----------------------------------------- |
| `eslint`                      | `^9`            | Flat config.                              |
| `eslint-config-next`          | matches Next.js | Core-web-vitals rules.                    |
| `@typescript-eslint/*`        | latest          | Strict TS rules.                          |
| `prettier`                    | `^3`            | Code formatting.                          |
| `prettier-plugin-tailwindcss` | latest          | Class-order sorting.                      |
| `husky`                       | `^9`            | Git hooks.                                |
| `lint-staged`                 | `^15`           | Run linters on staged files only.         |
| `playwright`                  | `^1.49`         | One smoke E2E per critical path.          |
| `@lhci/cli` (Lighthouse CI)   | `^0.14`         | Budget enforcement on every PR.           |
| `tsx`                         | `^4`            | Run TS scripts (e.g. uniqueness checker). |

---

## Hosting & infra

| Service          | Why                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------- |
| Vercel           | Native Next.js host; edge network; free Hobby → Pro upgrade when traffic justifies. |
| Vercel Analytics | Web Vitals from real users, not just lab.                                           |
| Resend           | Email (see above).                                                                  |
| GitHub           | Source of truth + Actions CI.                                                       |
| Cloudflare       | DNS only (not proxied) — let Vercel handle the edge.                                |

---

## Deferred (don't install yet)

Install in the phase that needs them:

| Phase | Add                                                                                |
| ----- | ---------------------------------------------------------------------------------- |
| 4     | `@gohighlevel/api-sdk` (or webhooks), `@hubspot/api-client`, Cal.com embed         |
| 5     | `payload`, `@payloadcms/db-postgres`, S3-compatible storage SDK                    |
| 6     | `next-auth@^5`, `drizzle-orm`, `@neondatabase/serverless`, `@auth/drizzle-adapter` |

---

## What we explicitly are NOT using

| Rejected            | Why                                                                          |
| ------------------- | ---------------------------------------------------------------------------- |
| Tailwind v3         | v4 is faster and v4.3 is shipping; no reason to start on the previous major. |
| Radix UI directly   | Base UI is the post-React-19 successor; shadcn supports both.                |
| `next-seo`          | App Router Metadata API supersedes it.                                       |
| `contentlayer`      | Unmaintained; we'll use `@next/mdx` + a thin `lib/mdx.ts`.                   |
| WordPress / Webflow | Doesn't showcase our engineering capability and weaker performance ceiling.  |
| Firebase            | Phase 6 wants Postgres + Drizzle; Firebase is the wrong shape for our app.   |
| Auth0               | Auth.js v5 is cheaper, owned, and integrates with our DB.                    |
| reCAPTCHA           | Costs ~15% conversion; honeypot + Vercel bot protection is sufficient.       |

---

## Upgrade discipline

- **Next.js patch releases** — apply within a week, especially security releases.
- **Next.js minor releases** — wait two weeks for ecosystem to catch up, then upgrade.
- **Major releases** — read the codemod docs, do a feature-branch upgrade, run the full test + Lighthouse suite, ship.
- **Tailwind / React** — same cadence.
- **shadcn components** — they're copied into our repo; we don't auto-upgrade. Re-`npx shadcn add` only when we want a specific new feature.

Document every upgrade in a CHANGELOG entry.
