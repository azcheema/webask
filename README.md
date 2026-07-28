# Naxdor

Marketing website for **Naxdor** — an international digital services firm targeting SMBs (US-primary, English-only at launch) with a vertical focus on aesthetic clinics, dental practices, and beauty/wellness clinics.

Service-led, not industry-led: home and service pages speak to any SMB; the vertical focus surfaces through `/industries/*` pages and industry-aware programmatic city pages.

## Status

Phase 0 (Foundations) — see `docs/phases/phase-0-foundations.md`. Active feature in `docs/context/current-feature.md`.

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

Hosted on **Vercel**. Project name: `naxdor`. GitHub integration wired via `vercel git connect` to `azcheema/naxdor`:

- Push to `main` → **production** deploy (`https://naxdor.com` once DNS attached; `naxdor.vercel.app` until then).
- Push to any other branch with an open PR → **preview** deploy on a `*.vercel.app` URL.

### Environment variables

Managed in the Vercel project (`vercel env ls`). Source of truth — _not_ in this repo. `.env.example` documents the shape; copy it to `.env.local` for local dev.

| Var                    | Production                 | Preview                    | Development                       |
| ---------------------- | -------------------------- | -------------------------- | --------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | `https://naxdor.com`       | `https://naxdor.com`       | `http://localhost:3000`           |
| `RESEND_API_KEY`       | `re_…` (secret)            | `re_…` (secret)            | _optional — unset → form no-ops_  |
| `CONTACT_FROM_EMAIL`   | `Naxdor <info@naxdor.com>` | `Naxdor <info@naxdor.com>` | _optional — code default applies_ |
| `CONTACT_NOTIFY_EMAIL` | `contact@naxdor.com`       | `contact@naxdor.com`       | _optional — code default applies_ |

Preview is intentionally set to the apex domain so canonical URLs, OG `og:url`, and JSON-LD `@id` values stay stable across preview and production. The page is still **served** on `*.vercel.app`; only the metadata anchors at the apex. Vercel automatically adds `X-Robots-Tag: noindex` to preview origins, so this doesn't risk indexation.

### Email (contact form)

The contact form **sends** via [Resend](https://resend.com) (Server Action `app/(marketing)/contact/actions.ts`, validated in `lib/env.server.ts`) and **receives** at a SiteGround mailbox. The two halves are independent — Resend never gives you an inbox.

- **Sending:** Resend signs as the verified `naxdor.com` domain. `CONTACT_FROM_EMAIL` is a **send-only** `info@` address (no mailbox needed), kept **distinct from** `CONTACT_NOTIFY_EMAIL` because a `from == to` self-send gets greylisted by inbound spam filters. The autoresponder sets `Reply-To: contact@naxdor.com`, so prospect replies reach the monitored inbox regardless of the `From`.
- **Receiving:** `contact@naxdor.com` is a real mailbox **on SiteGround** — the domain's **MX records point to SiteGround** (added in Vercel DNS), not Resend. An optional `info@ → contact@` SiteGround forwarder catches stray direct-to-`info@` mail.
- **Gating:** with no `RESEND_API_KEY` the Server Action logs and returns success (no send) — local dev and preview builds stay green; live sending lights up once the key + verified domain are in the environment.
- **Domain:** apex `naxdor.com` serves directly; `www` issues a permanent (308) redirect to apex, matching the apex canonical/sitemap/`@id`s.

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
