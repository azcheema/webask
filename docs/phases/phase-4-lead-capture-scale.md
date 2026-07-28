# Phase 4 — Lead Capture + Scale

> **Timeline:** Week 8 onward (ongoing)
> **Status:** Not started · **Depends on:** Phase 3 live
> **Outcome:** Live CRM-backed lead routing, calendar booking, and material programmatic-SEO scale.

---

## Goal

Connect the marketing site to the operational layer (CRM + calendar), and scale the programmatic SEO surface area now that domain authority has begun to build.

After Phase 4, every inquiry flows into a CRM with attribution, prospects can book themselves, and we have enough indexed pages to capture material organic traffic from the long tail.

---

## In scope

- CRM choice locked + integration shipped
- HubSpot + GoHighLevel partner applications + badges (carried from Phase 2 — pair with the CRM integration)
- Calendar booking integration
- Programmatic location scale-up: 20–50 city × service pages
- Industry × location matrix (Phase 4 stretch — once domain authority supports it)
- A/B testing harness on home hero
- Resources / lead-magnet section (lightweight)
- Performance + image audit
- Quarterly content refresh process documented

---

## Out of scope

- CMS migration → Phase 5
- Auth + client portal → Phase 6
- Paid ads (separate playbook, post-launch)

---

## Tasks

### Resolve open decisions

- [ ] **CRM choice:**
  - **Recommended default**: GoHighLevel primary (eats own dog food; demos our service) + HubSpot dual-write via webhook (for HubSpot-prospect demos).
  - Alternatives: GHL only / HubSpot only / sequential ("ask which CRM they want to see, route accordingly").
- [ ] **Booking provider:**
  - Recommended default: Cal.com (open source, embeddable, integrates with GHL/HubSpot).
  - Alternatives: GHL calendars, HubSpot meetings.

### CRM integration

- [ ] Contact form Server Action posts to a webhook (`POST /api/lead-webhook`)
- [ ] Webhook handler dual-writes:
  - GHL: contact + tag + workflow trigger (matches the service interest field)
  - HubSpot: contact + deal in "new inbound" stage (with source attribution UTMs)
- [ ] Lead source captured: page URL, referrer, UTMs, first-touch attribution from `lib/attribution.ts`
- [ ] Failure mode: webhook failures still send the email (Resend) so leads never silently drop — log to monitoring
- [ ] CRM property mapping documented in `docs/strategy/crm-integration.md` (added in this phase)

### Partner programs + badges [from P2]

- [ ] **Submit HubSpot Solutions Partner application** (founder admin action — carried from Phase 2 trust signals; pairs with the HubSpot integration above)
- [ ] **Submit GoHighLevel Affiliate application** (founder admin action — carried from Phase 2)
- [ ] Once HubSpot Solutions Partner status approved, display badge in hero/footer (placeholder until then; pages already ship badge-less)
- [ ] Once GoHighLevel Affiliate status approved, display badge on home + `/services/crm` (placeholder until then)

### Calendar booking

- [ ] Cal.com (or chosen provider) account configured with discovery-call event type
- [ ] Embed component (`<BookingDialog>`) — opens a modal with the calendar iframe
- [ ] CTA wired: "Book a discovery call" on home, every service page, every industry page, every location hub
- [ ] Calendar webhook → CRM (so booked calls update the contact's CRM record)
- [ ] Calendar webhook → GA4 conversion event (`call_booked`)
- [ ] Booking dialog lazy-loaded (Cal embed JS does not impact LCP)

### Programmatic scale-up

- [ ] Expand `data/locations.ts` to 20–30 cities with full enrichment
- [ ] Generate next batch of programmatic pages (`pnpm tsx scripts/generate-locations.ts` — script that scaffolds MDX shells)
- [ ] Manual content review per page using the `strategy/programmatic-seo.md` checklist
- [ ] Promote reviewed pages from `noindex` to `index`
- [ ] Submit URL inspection on a sample (Google Search Console) to validate indexability
- [ ] Sitemap updated automatically via build

### Industry × location (stretch)

- [ ] `app/(marketing)/industries/[industry]/[location]/page.tsx` template
- [ ] Start with the highest-confidence combination: med spa × top 3 metros
- [ ] Apply the same uniqueness + indexation discipline as service × location

### A/B testing

- [ ] Vercel Edge Config (or simple cookie-based flag) for hero variant
- [ ] Define 2 home hero variants (different value props or different CTA verbs)
- [ ] Track conversion via GA4 custom dimension
- [ ] Minimum sample size enforced (don't call winners on 100 visits)
- [ ] Result documented; winner becomes default; losing variant archived

### Resources / lead magnets

- [ ] `/resources` index page
- [ ] First lead magnet (one of):
  - "Med Spa CRM Setup Checklist" (PDF — gated by email)
  - "Dental Marketing ROI Calculator" (interactive React component, ungated)
  - "AI Voice Agent Cost Calculator" (interactive, ungated)
- [ ] Gating: minimal — first name + email; immediate download + autoresponder
- [ ] New CRM tag for downloaders ("lead-magnet:[name]")

### Performance + image audit

- [ ] Re-audit Core Web Vitals on field data (CrUX) after Phase 3 traffic
- [ ] Optimize any image > target weight
- [ ] Add `<link rel="preconnect">` for any newly-added third-party (Cal.com)
- [ ] Review JS bundle growth; tree-shake aggressively
- [ ] Ensure new third-party scripts use `strategy="lazyOnload"`

### Analytics

- [x] Install + wire `@vercel/analytics` and `@vercel/speed-insights` (`<Analytics />` + `<SpeedInsights />` in `app/layout.tsx`). ~~Carried forward from Phase 0 `vercel-hookup`~~ — **done early in Phase 1 `analytics`** (mounted always-on, cookieless, inside `AnalyticsProvider`). `measurement.md` places Vercel Analytics in Phase 0/1 and the Phase 1 task list owned it, so it shipped there rather than waiting. Still **toggle on in the Vercel project dashboard** if not auto-enabled.
- [ ] GA4 stays the conversion-of-record (wired + consent-gated in Phase 1 `analytics`); Vercel Analytics is the lightweight zero-config supplement (page views + top pages) and Speed Insights replaces synthetic LHCI with field CWV.
- [ ] **Consent withdrawal — full cookie cleanup** (Phase 1 `analytics` MVP limitation): when a visitor withdraws consent the GA4/Clarity `<Script>`s unmount and event sending stops, but cookies already set persist to natural expiry. Add explicit cookie deletion (or GA consent-mode `update`) on withdrawal.
- [ ] **Rate-limit the contact Server Action by IP** (Upstash KV / Vercel Edge Config) — carried forward from Phase 1 `contact-page`; pairs with the lead-capture-scale work here.

### Quarterly refresh process (document + run once)

- [ ] `docs/strategy/content-refresh-playbook.md` (add in this phase)
- [ ] Identify top-10 highest-traffic pages
- [ ] Refresh: update stats, add new FAQ, update `updatedAt` frontmatter
- [ ] Identify zero-impression programmatic pages > 6 months old → demote to `noindex` + review

---

## Deliverables

1. **Live CRM-backed lead routing** with GHL (and optionally HubSpot) capturing every form submit.
2. **Calendar booking flow** that creates a CRM record + GA4 conversion event.
3. **20–50 indexed programmatic city × service pages**, all passing uniqueness + content checks.
4. **A/B test result documented** (winner promoted; archived loser).
5. **Resources page live** with first lead magnet.
6. **Industry × location matrix** for at least one industry (stretch).
7. **Documented content refresh playbook** with first refresh run completed.

---

## Acceptance criteria

- [ ] End-to-end test: submit contact form → CRM contact appears with correct properties → autoresponder + internal notification both delivered
- [ ] End-to-end test: book calendar slot → CRM updated → GA4 conversion fires
- [ ] No PR may add a CTA without wiring it to GA4 + CRM (where applicable)
- [ ] Indexed programmatic page count matches sitemap count
- [ ] CWV field data still meets budget post-Cal.com embed
- [ ] Lead magnet downloads tracked + tagged in CRM
- [ ] Refresh playbook successfully run end-to-end

---

## Risks

| Risk                                             | Mitigation                                                                                     |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| Dual-write CRM diverges over time                | Single webhook is source of truth; CRM property mapping documented; daily reconciliation alert |
| Cal.com embed kills LCP                          | Lazy-load on user interaction only; not in critical path                                       |
| Programmatic batch hits Google quality threshold | Slow roll-out, weekly indexation check, prepared to demote                                     |
| A/B test underpowered                            | Wait for ≥ 500 sessions per variant; never call < 95% confidence                               |
| Lead-magnet PDF leaks (link sharing)             | Acceptable — the magnet is marketing, not the product                                          |
| Industry × location matrix too aggressive        | Limit to 1 industry × 3 metros first; expand only after impressions                            |

---

## Dependencies

- Phase 3 live (case studies + blog provide proof for new programmatic pages to link to)
- GHL account (paid tier with API access)
- HubSpot account (free tier with API works; Solutions Partner status helpful but not required)
- Cal.com (or chosen) account
- Resend or chosen email provider (already in place from Phase 1)

---

## Definition of done

Phase 4 ships when **every form submission and booked call flows automatically into the CRM with full attribution; the programmatic surface area has grown to 20–50 indexed pages with material organic impressions; at least one lead magnet is live; and the team is running the quarterly refresh playbook**.
