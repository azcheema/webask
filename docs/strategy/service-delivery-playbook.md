# Service Delivery Playbook

> The standard four-phase process Naxdor runs on every project. Drives the `/process` page content + service-page "Process" sections + client expectations.

---

## Why this exists

Every Naxdor service page promises a process. Without a concrete playbook, "our process" reads as marketing fluff. This doc is the source of truth — service pages quote it verbatim where possible, and the public `/process` page renders a condensed version of it.

It also serves as our **cold-start credibility lever**: clear methodology in place of missing case studies.

---

## The four phases (Discover → Design → Build → Grow)

```
[Discover]  →  [Design]  →  [Build]  →  [Grow]
  1 week         1–2 wks      2–6 wks    ongoing
```

Each phase has: **goal, artifacts, timeline, what we need from you, sign-off gate.**

---

## Phase 1 — Discover (1 week)

**Goal.** Understand the business deeply enough that nothing in Design comes as a surprise.

**Artifacts produced**

- **Discovery brief** (Notion or PDF, 5–10 pages): business model, target customers, current pain points, success metrics, constraints, brand assumptions, competitor scan.
- **Tech audit** (if rebuilding existing site/app): current stack, Core Web Vitals baseline, SEO baseline, accessibility baseline, security review.
- **Stakeholder map**: who decides, who reviews, who's the day-to-day point of contact.
- **Project plan** with milestones and gates.

**Typical activities**

- 90-minute kickoff call (recorded with consent).
- 1–2 follow-up calls with stakeholders.
- Asynchronous brand asset gathering.
- Independent research: customer interviews if scope allows, competitor walk-through.

**What we need from you**

- Access to current site analytics (GA4 read access or CSV exports).
- Brand assets if they exist.
- Stakeholder availability for the kickoff + 1–2 short follow-ups.
- One reference: a site/app you admire (and one you don't).

**Sign-off gate.** Client approves the discovery brief. No design starts until this is signed.

---

## Phase 2 — Design (1–2 weeks)

**Goal.** Lock the look, feel, and information architecture before a line of production code ships.

**Artifacts produced**

- **Information architecture** — sitemap + URL map (for web), screen map (for app).
- **Design tokens** — colors, typography, spacing, motion. Mirrors `docs/strategy/design-system.md`.
- **Component inventory** — list of every component to be built.
- **High-fidelity mockups** of 3–5 representative pages/screens in Figma (or your tool of choice).
- **Mobile + desktop** for every mockup. Mobile-first.
- **Accessibility check** on mockups (contrast, target size, focus order).
- **Updated project plan** if scope shifted.

**Typical activities**

- Iterate via async Figma comments + 2–3 review calls.
- Two design rounds maximum at this stage (further rounds bill separately).
- Prototype interactive flows for critical journeys (booking, checkout, contact).

**What we need from you**

- Decision-maker on each design call.
- Same-week feedback turnaround.
- Final brand assets if not provided in Discover.

**Sign-off gate.** Client approves the high-fidelity mockups. No production engineering starts until signed.

---

## Phase 3 — Build (2–6 weeks; longer for apps)

**Goal.** Ship to production with confidence — performance, accessibility, SEO meeting our budgets.

**Artifacts produced**

- **Production codebase** in a private Git repo (client gets read access by default; full ownership transfer on final payment).
- **Deployment pipeline** — CI/CD configured (typically Vercel, AWS, or Cloudflare).
- **Staging environment** — every commit auto-deploys for review.
- **Performance report** — Lighthouse CI baseline meeting our budgets (LCP ≤ 2.0s mobile, INP ≤ 200ms, CLS ≤ 0.05, ≥ 95 Mobile Perf).
- **Accessibility report** — axe-core + manual keyboard pass; WCAG 2.2 AA.
- **SEO checklist** — metadata, JSON-LD, sitemap, robots, canonical URLs, internal links.
- **Analytics installed** — GA4, Vercel Analytics, optionally Microsoft Clarity.
- **Documentation** — README, deployment runbook, "how to edit content" guide.

**Typical activities**

- Weekly demo of work-in-progress on staging.
- Async Loom updates between demos.
- Bug + change tracker in Linear / Notion.

**What we need from you**

- Final copy and images (or our content help if scoped).
- Weekly 30-min demo attendance.
- DNS access for go-live.

**Sign-off gate.** Client approves a pre-launch checklist: all pages function, accessibility passes, performance budget met, analytics tracking, legal pages live. Site goes live.

---

## Phase 4 — Grow (ongoing — Care Plan or fixed-scope retainer)

**Goal.** Compound results after launch: SEO, performance, conversion improvements, security/maintenance.

**Artifacts produced (monthly)**

- **Monthly report** — analytics summary, SEO position changes, CWV trends, work done, recommendations for next month.
- **Quarterly content refresh** of high-traffic pages.
- **Quarterly performance + accessibility audit** with remediation.
- **Security patches** as needed (24h response on critical CVEs).
- **Backup verification** monthly.

**Care Plan tiers (anchors — final pricing tuned per project)**

- **Bronze** ($300/mo): security patches, monthly backup verification, quarterly performance check.
- **Silver** ($800/mo): all of Bronze + monthly content updates (up to 4 hours) + monthly analytics review call.
- **Gold** ($2,000/mo): all of Silver + monthly SEO + CRO work + dedicated 8-hour development budget.

Care Plans are recommended but not required — clients can pay-as-you-go instead.

**Typical activities**

- Monthly review call (30 min).
- Async work tracked in a shared project board.
- Always-on monitoring (uptime, performance).

**No sign-off gate** — Grow is open-ended. Cancellable any time with 30 days' notice.

---

## How this maps to service pages

Every service page's "Our Process" section quotes Discover → Design → Build → Grow with timeline ranges specific to that service:

| Service                            | Typical timeline                        |
| ---------------------------------- | --------------------------------------- |
| Web Development                    | 4–8 weeks total                         |
| E-commerce Development             | 6–12 weeks                              |
| Web App / Custom Software          | 8–20 weeks                              |
| UI/UX Design (audit/redesign)      | 2–6 weeks                               |
| SEO & Performance                  | 30-day audit + ongoing monthly retainer |
| Mobile App Development             | 12–24 weeks                             |
| CRM Automation (GHL/HubSpot setup) | 2–6 weeks                               |
| CRM Migration                      | 2–4 weeks                               |
| AI Voice Agent                     | 3–6 weeks                               |
| AI Chatbot                         | 2–6 weeks                               |
| AI Workflow Automation             | 1–4 weeks per workflow                  |
| Maintenance & Care Plans           | Ongoing monthly                         |

---

## What this playbook does NOT promise

To stay honest:

- **We're not the cheapest.** This process bills more than a freelancer or a templated platform. The trade-off is what we deliver.
- **We don't ship without sign-offs.** If a client wants us to skip Discovery, we decline the work — not the client we serve well.
- **We don't do rushed launches** without an explicit "rush fee" and shortened scope. Quality budget is non-negotiable.
- **We don't do unlimited revisions.** Two design rounds at the Design phase; further rounds bill at hourly.
- **We don't lock clients in.** Code, designs, accounts, domains — all owned by the client. Care Plans cancel with 30 days' notice.

These boundaries protect quality. They go on the `/process` page in a "How we work" section.

---

## Updates to this doc

Updated when:

- Process changes in practice (a new artifact, a re-ordered phase).
- Care Plan tiers change.
- Timeline benchmarks drift.

Service pages reference this doc by section; updates here cascade to next content review.
