# Phase 5 — CMS Migration

> **Timeline:** When editor volume justifies it (not before)
> **Status:** Not started · **Depends on:** Phase 3 live (need content to migrate)
> **Outcome:** Editors can publish blog posts and case studies without a developer in the loop.

---

## Goal

Migrate editorial content (blog + case studies) from MDX-in-repo to a self-hosted Payload CMS while keeping structural content (services, locations, industries) in the repo where it belongs.

After Phase 5, a non-engineer can write, preview, and publish a blog post or case study without touching code.

---

## When to start (not before)

Trigger conditions — wait until at least 2 of these are true:

- We have 10+ published blog posts AND new posts are slowing down due to PR friction
- A non-engineer team member is responsible for editorial output
- We need draft/preview workflows beyond what Vercel preview branches give us
- We need scheduled publishing
- We've outgrown the "engineer writes the MDX" model

If none of those are true, **stay on MDX**. Migration cost is real.

---

## In scope

- Self-hosted Payload CMS deployed
- `content/blog` and `content/case-studies` migrated to CMS
- `lib/mdx.ts` updated to read from CMS API for blog/case studies; MDX still for structural content
- Editor accounts + roles configured
- Draft/preview workflow
- Scheduled publishing
- Editor documentation

---

## Out of scope

- Services / locations / industries → stay as MDX in repo (structural, not editorial)
- Auth for the public site → Phase 6
- E-commerce / paid content gating

---

## Tasks

### Resolve open decisions

- [ ] **Payload hosting platform:**
  - **Recommended default**: self-host on Hetzner (cheap; full control) or Railway (zero-config).
  - Alternative: Vercel (works but pricier; admin UI may need separate service).
- [ ] **Database**: Postgres via Neon (serverless, free tier generous) or self-hosted on the same VPS as Payload.
- [ ] **Media storage**: S3-compatible (Cloudflare R2 cheapest) for images uploaded via Payload.

### Payload setup

- [ ] Spin up Payload CMS project (`pnpm create payload-app`) — separate repo or monorepo with main site
- [ ] Configure Postgres connection
- [ ] Configure S3-compatible media storage
- [ ] Configure email (Resend reused)
- [ ] Deploy admin UI to `admin.naxdor.com` (or wherever) — auth-gated, never `/admin` on the main site
- [ ] HTTPS, secure cookies, CSRF protections enabled

### Schema

- [ ] `BlogPost` collection — fields match `content/blog` MDX frontmatter exactly (title, description, publishedAt, updatedAt, author, topic, tags, heroImage, body as MDX/rich text, frontmatter passthrough)
- [ ] `CaseStudy` collection — match `content/case-studies` schema
- [ ] `Author` collection — Person bios, photos, social links
- [ ] `Topic` collection — taxonomy for blog clusters
- [ ] Validation rules in Payload mirror zod schemas from `lib/mdx.ts`
- [ ] Access control: editor role (CRUD on blog/case studies + own author profile), admin role (everything)

### Site integration

- [ ] `lib/cms.ts` — fetches from Payload REST/GraphQL API
- [ ] `app/(marketing)/blog/[slug]/page.tsx` — switch to `lib/cms.ts` for blog
- [ ] Same for case studies
- [ ] Draft preview: Payload publishes a draft → Next.js draft mode reads it via secure cookie → preview URL works
- [ ] On-demand revalidation: Payload publish hook → POST `/api/revalidate` on the site → ISR invalidates affected paths
- [ ] Sitemap regenerated on publish

### Migration

- [ ] Migration script (`scripts/migrate-content-to-cms.ts`) reads `content/blog/*.mdx` + frontmatter, creates CMS records via Payload API
- [ ] Same for `content/case-studies/*.mdx`
- [ ] Verify: every URL still resolves with the same canonical
- [ ] Verify: rendered HTML diff against pre-migration build is minimal (formatting only)
- [ ] Keep MDX files in repo until CMS is proven for 30 days, then delete

### Editorial workflow

- [ ] Editor onboarding doc in `docs/strategy/cms-editorial-workflow.md` (added in this phase)
- [ ] Draft → review → publish flow defined
- [ ] Scheduled publishing tested
- [ ] Preview links shareable with non-editor reviewers (signed URLs)
- [ ] Image upload workflow (cropping, alt text required, max file size enforced)
- [ ] SEO assistance: editor sees character counts on title + meta description as they type
- [ ] AEO assistance: editor warned if first sentence of body doesn't answer-shape

### SEO continuity

- [ ] No URL changes during migration
- [ ] No JSON-LD changes
- [ ] No sitemap discrepancies
- [ ] GSC inspected on 5 representative URLs post-migration to confirm
- [ ] Last-mod dates preserved (use the original `publishedAt`/`updatedAt`)

---

## Deliverables

1. **Payload CMS deployed and accessible** at `admin.naxdor.com`.
2. **All blog posts + case studies migrated** with no URL or content drift.
3. **Editor accounts + roles** configured for current team.
4. **Draft/preview workflow** working end-to-end.
5. **Scheduled publishing** working end-to-end.
6. **Editorial workflow documentation** in `docs/strategy/`.
7. **On-demand ISR revalidation** working — published post is live within seconds.

---

## Acceptance criteria

- [ ] Editor can create a draft post, see a preview, schedule for future publish, and have it go live automatically
- [ ] Published post triggers ISR revalidation → live on `naxdor.com/blog/...` within 60s
- [ ] No URLs broken in the migration (full crawl from `/sitemap.xml` returns 200 on every URL)
- [ ] No JSON-LD changes (compare pre- and post-migration HTML)
- [ ] GSC shows no new coverage errors
- [ ] CWV unchanged
- [ ] Payload admin UI passes a basic security audit (auth, CSRF, rate limiting, file-upload validation)

---

## Risks

| Risk                                                             | Mitigation                                                                            |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Migration introduces silent content drift                        | Diff rendered HTML pre/post for every URL; require manual sign-off                    |
| Payload self-host introduces ops burden                          | Choose a managed option (Railway / Vercel Postgres + Neon) if ops capacity is limited |
| Editor UX is bad enough that editors revert to PR-based workflow | UAT with the actual editor before locking; iterate                                    |
| On-demand ISR webhook fails silently → stale content             | Monitoring alert if revalidation hasn't fired in 24h after a publish                  |
| Payload version upgrades require code changes                    | Lock to a Payload minor; upgrade quarterly with regression tests                      |

---

## Dependencies

- Phase 3 live (we need content to migrate)
- Postgres host (Neon, Railway, or self)
- S3-compatible storage (R2)
- Resend or chosen email
- Editorial team identified (the person(s) who'll actually use the CMS)

---

## Definition of done

Phase 5 ships when **a non-engineer team member has independently created, scheduled, and published a blog post — and that post is live with correct schema, OG image, sitemap entry, and analytics — without any developer involvement**.
