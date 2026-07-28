# Phase 6 — Auth + Client Dashboard

> **Timeline:** Later (after sufficient client volume justifies the build)
> **Status:** Not started · **Depends on:** Active client base
> **Outcome:** Logged-in client portal where active clients see project status, deliverables, invoices, and support tickets.

---

## Goal

Add a private, authenticated client experience to Naxdor without affecting the public marketing site. Live at `naxdor.com/dashboard` (or `app.naxdor.com` — choice made in this phase). Built in the reserved `app/(app)/` route group from Phase 0.

After Phase 6, every active Naxdor client logs in to a single source of truth for their engagement.

---

## When to start (not before)

Trigger conditions — wait until at least 2 are true:

- We have 5+ active clients
- Email-based status updates are causing friction (lost threads, "what's the status?" questions)
- We're paying for a separate client-portal SaaS we'd rather replace
- We want to offer self-service invoice access
- A specific client has asked for one

If none, **defer**. A bad client portal is worse than no client portal.

---

## In scope

- Auth.js v5 (NextAuth successor) integrated
- Database (Postgres) + Drizzle ORM
- `app/(app)/` route group implementation
- Login (email magic link primary; Google OAuth secondary)
- Dashboard home with project status
- Project detail with milestones, deliverables, files
- Invoice view (read-only; payment is external for now)
- Support ticket creation + thread view
- Account settings
- Admin (Naxdor team) views to manage projects, deliverables, invoices, tickets
- Email notifications via Resend

---

## Out of scope

- Payment processing inside the portal (use Stripe-hosted invoices for now)
- Real-time chat (use email or Slack Connect)
- Marketing-site auth (the public site stays anonymous)
- File-collaboration features beyond simple file delivery

---

## Tasks

### Resolve open decisions

- [ ] **URL pattern**: `naxdor.com/dashboard/*` (single domain, simpler) vs `app.naxdor.com` (separate concern, separate analytics). **Recommended default**: `naxdor.com/dashboard` — fewer DNS + cookie concerns.
- [ ] **Postgres host**: Neon (recommended — serverless, branch-per-PR), Supabase, or Railway.
- [ ] **Auth providers**: magic link primary; Google OAuth secondary; no password-based auth.
- [ ] **MFA**: required for admin role from day one; optional for clients.

### Auth setup

- [ ] Install `next-auth@^5`, `@auth/drizzle-adapter`, `drizzle-orm`, `@neondatabase/serverless` (or chosen driver), `resend` adapter
- [ ] Schema: `users`, `accounts`, `sessions`, `verificationTokens` per Auth.js Drizzle adapter spec
- [ ] Schema additions: `roles` (admin, editor, client), `organizations` (client companies)
- [ ] Magic link via Resend
- [ ] Google OAuth app configured
- [ ] `middleware.ts` enforces auth on every `/(app)/*` route
- [ ] Public site (`/(marketing)/*`) untouched
- [ ] Robots disallow `/(app)/*`
- [ ] CSP updated to allow Auth.js endpoints

### Database schema

- [ ] `clients` (organizations Naxdor works with)
- [ ] `projects` (one client → many projects)
- [ ] `milestones` (one project → many)
- [ ] `deliverables` (project artifacts with status: pending, in_review, approved)
- [ ] `files` (S3-pointers, attached to deliverable or project)
- [ ] `invoices` (read-only mirror of Stripe; or hand-entered)
- [ ] `support_tickets` (one client → many, threaded messages)
- [ ] Migrations via Drizzle Kit
- [ ] Seed script for development

### Routes

- [ ] `app/(app)/layout.tsx` — auth-gated layout with sidebar + top bar
- [ ] `app/(app)/login/page.tsx`
- [ ] `app/(app)/dashboard/page.tsx` — overview
- [ ] `app/(app)/projects/page.tsx` + `[id]/page.tsx`
- [ ] `app/(app)/invoices/page.tsx` + `[id]/page.tsx`
- [ ] `app/(app)/support/page.tsx` + `[id]/page.tsx`
- [ ] `app/(app)/account/page.tsx`
- [ ] `app/(app)/admin/*` — gated to admin role
- [ ] `app/api/webhooks/stripe/route.ts` (when payments wired)

### UI

- [ ] Distinct visual treatment for `/(app)/` — same design system, but admin-y density. Sidebar nav, condensed components.
- [ ] Status badges (pending / in_review / approved / archived) with consistent semantic colors
- [ ] File upload via signed S3 URLs
- [ ] Markdown rendering inside ticket threads (reuse blog MDX stack)

### Notifications

- [ ] Email on: invoice issued, deliverable ready for review, ticket reply, project milestone completed
- [ ] Preferences page where clients can opt out of categories
- [ ] In-app notification bell (header) with unread badge

### Security

- [ ] Auth.js JWT or database sessions (database sessions recommended for revocation)
- [ ] Rate limiting on auth endpoints
- [ ] CSRF protection (Auth.js default)
- [ ] Row-level authorization: client A can only see client A's data; admins see all
- [ ] Audit log of admin actions
- [ ] File access via signed URLs only; no public S3 buckets
- [ ] Security headers tightened (CSP, HSTS, etc.)
- [ ] Penetration-test checklist run before launch

### Analytics (separate from marketing)

- [ ] Vercel Analytics ignored on `/(app)/*` (no marketing-funnel pollution)
- [ ] Internal product analytics: PostHog or Plausible self-hosted (no GA4 on logged-in routes — privacy)
- [ ] No third-party trackers on the portal

### Documentation

- [ ] `docs/phases/phase-6-auth-client-dashboard.md` (this doc) finalized with chosen decisions
- [ ] `docs/strategy/portal-data-model.md` (added in this phase)
- [ ] `docs/strategy/portal-security.md` (added in this phase)
- [ ] Internal admin runbook: how to add a client, create a project, attach a deliverable

---

## Deliverables

1. **`/(app)/` route group fully implemented**, gated by auth.
2. **First 2–3 real clients onboarded** to the portal with active projects.
3. **Email notifications working** end-to-end.
4. **Admin tools** for Naxdor team to manage clients/projects/deliverables/invoices.
5. **Security audit checklist** complete with no open critical items.
6. **Portal data model + security docs** in `docs/strategy/`.

---

## Acceptance criteria

- [ ] Anonymous user visiting any `/(app)/*` URL is redirected to `/(app)/login`
- [ ] Magic link login works end-to-end (test from external email)
- [ ] Google OAuth login works
- [ ] Client A authenticated cannot see Client B's data (manual + automated test)
- [ ] Admin can create a new client + project + deliverable in < 90 seconds
- [ ] Client sees only their own data
- [ ] All `/(app)/*` URLs return `noindex` headers + are `Disallow`'d in robots.txt
- [ ] No marketing analytics on `/(app)/*`
- [ ] Lighthouse a11y = 100 on every portal route
- [ ] Public marketing site Core Web Vitals unaffected by portal launch

---

## Risks

| Risk                                               | Mitigation                                                                           |
| -------------------------------------------------- | ------------------------------------------------------------------------------------ |
| Scope creep — "could the portal also handle X"     | Strict in/out scope; new asks land in a backlog, not the current phase               |
| Auth.js v5 changes                                 | Pin to a specific minor; track upstream changelog quarterly                          |
| Postgres cost on Neon at scale                     | Monitor read units; switch to non-serverless if usage is steady                      |
| Security regression slips through                  | Required security review on every PR touching `/(app)/*`                             |
| Client confusion about which login (CRM vs portal) | Clear language in onboarding emails; SSO between Stripe/Cal/portal is a future story |
| Building features clients don't actually use       | Don't build it until a client asks; instrument usage from day one                    |

---

## Dependencies

- Active client base (2+ clients)
- Postgres host
- S3-compatible storage
- Resend (email)
- Optional: Stripe account (for invoices read-mirror)

---

## Definition of done

Phase 6 ships when **2+ real clients have logged in, viewed their project status, downloaded a deliverable, and replied to a support ticket — entirely through the portal, without email back-channel — and the team agrees the portal has reduced (not added to) operational overhead**.
