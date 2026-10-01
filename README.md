# WebAsk

Marketing website for **WebAsk** — the UK trading name of Naxdor — for UK small businesses, with a vertical focus on aesthetic clinics, dental practices, and beauty/wellness clinics. British English (`en-GB`), prices in GBP.

National and service-led: home and service pages speak to any UK small business; the vertical focus surfaces through `/industries/*`, the city focus through `/locations/*`.

## Status

Phase 1 (Credible MVP + Cutover) — see `docs/06-build-plan.md`. The site is not live yet; the launch steps are in [`docs/launch-checklist.md`](docs/launch-checklist.md).

## Stack

- Next.js 16.2.6 (App Router, Turbopack, React Compiler)
- React 19.2.x
- TypeScript 5.7+ strict (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `verbatimModuleSyntax`)
- Tailwind CSS v4.3 (`@theme` in CSS — no `tailwind.config.ts`)
- shadcn/ui on the **Base UI** engine (not Radix)
- MDX via `@next/mdx`
- pnpm 11

## Local setup

Requirements: Node 24 (`.nvmrc`), pnpm 11+.

```bash
pnpm install
pnpm dev          # http://localhost:3000
```

## Scripts

| Script              | Purpose                                      |
| ------------------- | -------------------------------------------- |
| `pnpm dev`          | Dev server (Turbopack default).              |
| `pnpm build`        | Production build (`next build --turbopack`). |
| `pnpm start`        | Serve the production build.                  |
| `pnpm typecheck`    | `tsc --noEmit`.                              |
| `pnpm lint`         | ESLint flat config.                          |
| `pnpm lint:fix`     | ESLint with autofix.                         |
| `pnpm format`       | Prettier write.                              |
| `pnpm format:check` | Prettier check (CI).                         |
| `pnpm test:e2e`     | Playwright smoke tests.                      |
| `pnpm lhci`         | Lighthouse CI run.                           |

## Quality gates

Every PR must pass:

```bash
pnpm typecheck && pnpm lint && pnpm build
```

Plus Playwright smoke + Lighthouse budgets (`docs/strategy/performance-accessibility.md`). Husky + lint-staged enforce lint + format on pre-commit.

## Deployment

Hosted on **Vercel** (Pro), deploying from GitHub `azcheema/webask`:

- Push to `main` → **production** deploy (`https://webask.co.uk` once DNS is pointed; the project's `*.vercel.app` address until then).
- Push to any other branch with an open PR → **preview** deploy on a `*.vercel.app` URL.

**Not set up yet.** The project, the Resend domain, GA4, the DNS cutover and Search Console are the founder's steps in [`docs/launch-checklist.md`](docs/launch-checklist.md), in order.

### Environment variables

Managed in the Vercel project. Source of truth — _not_ in this repo. `.env.example` documents the shape; copy it to `.env.local` for local dev.

| Var                            | Production                    | Preview                | Development                       |
| ------------------------------ | ----------------------------- | ---------------------- | --------------------------------- |
| `ENABLE_EXPERIMENTAL_COREPACK` | `1`                           | `1`                    | _not needed_                      |
| `NEXT_PUBLIC_SITE_URL`         | `https://webask.co.uk`        | `https://webask.co.uk` | `http://localhost:3000`           |
| `NEXT_PUBLIC_GA_ID`            | `G-…`                         | _unset_                | _unset — banner off_              |
| `RESEND_API_KEY`               | `re_…` (secret)               | _unset — form no-ops_  | _optional — unset → form no-ops_  |
| `CONTACT_FROM_EMAIL`           | `WebAsk <hello@webask.co.uk>` | _unset_                | _optional — code default applies_ |
| `CONTACT_NOTIFY_EMAIL`         | `info@webask.co.uk`           | _unset_                | _optional — code default applies_ |

Preview is intentionally set to the apex domain so canonical URLs, OG `og:url`, and JSON-LD `@id` values stay stable across preview and production. The page is still **served** on `*.vercel.app`; only the metadata anchors at the apex. Vercel adds `X-Robots-Tag: noindex` to preview deployments, so this doesn't risk indexation.

`NEXT_PUBLIC_*` values are inlined at build time: changing one needs a redeploy.

### Email (contact form)

The contact form **sends** via [Resend](https://resend.com) (Server Action `app/(marketing)/contact/actions.ts`, validated in `lib/env.server.ts`) and **receives** at the business mailbox. The two halves are independent — Resend never gives you an inbox.

- **Sending:** Resend signs as the verified `webask.co.uk` domain; its records live on `send.` and `resend._domainkey.`, so they never collide with the mailbox's root MX and SPF. `CONTACT_FROM_EMAIL` is kept **distinct from** `CONTACT_NOTIFY_EMAIL`, because a `from == to` self-send can be greylisted by inbound spam filters. The notification's Reply-To is the enquirer; the autoresponder's Reply-To is `CONTACT_NOTIFY_EMAIL`, so prospect replies reach the monitored inbox whatever the `From` is.
- **Receiving:** `info@webask.co.uk` is the published address and the real mailbox. The provider is not chosen yet (launch checklist A1); until it is, the domain's MX records still point at SiteGround.
- **Gating:** with no `RESEND_API_KEY` the Server Action logs and returns success (no send) — local dev and preview builds stay green; live sending lights up once the key + verified domain are in the environment.
- **Domain:** apex `webask.co.uk` serves directly; `www` issues a permanent (308) redirect to apex, matching the apex canonical/sitemap/`@id`s.

### Running the e2e specs against a deployment

`PLAYWRIGHT_BASE_URL` points Playwright at a deployed site instead of starting `next start`; `VERCEL_AUTOMATION_BYPASS_SECRET` gets it past Deployment Protection. This is how `e2e/redirects.spec.ts` is run on Vercel before and after the DNS cutover (launch checklist D1 and E4) — Vercel executes redirects at its edge, so a local pass is not proof.

### Local Vercel CLI

```bash
pnpm dlx vercel@latest login           # one-time
pnpm dlx vercel@latest env pull        # writes .env.local from Vercel
pnpm dlx vercel@latest pull            # syncs .vercel/project.json
```

CLI is **not** installed as a dependency — it's a setup tool, not a build tool. CI never invokes it (Vercel's GitHub integration handles deploys).

## Project context

- **Full project brief**: `CLAUDE.md` (auto-loaded by Claude Code).
- **Workflow contract**: `docs/context/ai-interaction.md`.
- **Coding standards**: `docs/context/coding-standards.md`.
- **Current feature**: `docs/context/current-feature.md`.
- **Phase docs**: `docs/phases/`.
- **Strategy deep-dives**: `docs/strategy/`.

## License

Proprietary. © Naxdor.
