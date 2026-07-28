# UI/UX Guidelines

> How every page is laid out, how every CTA behaves, how every form looks. Conventions, not suggestions.

---

## Page anatomy (every marketing page)

```
┌──────────────────────────────────────────┐
│   Header (sticky)                        │
├──────────────────────────────────────────┤
│   Hero                                   │  ← one value prop, one primary + one secondary CTA
├──────────────────────────────────────────┤
│   Trust strip                            │  ← partner badges, client count, or quote
├──────────────────────────────────────────┤
│   Problem → Solution section             │
├──────────────────────────────────────────┤
│   Problem → Solution section             │  ← 2–4 alternating sections
├──────────────────────────────────────────┤
│   Proof (case study card or stat row)    │
├──────────────────────────────────────────┤
│   Process (4-step visual)                │
├──────────────────────────────────────────┤
│   Pricing anchor ("starting at $X")      │
├──────────────────────────────────────────┤
│   FAQ (6–8 questions, accordion)         │
├──────────────────────────────────────────┤
│   CTA band (restate offer, single CTA)   │
├──────────────────────────────────────────┤
│   Footer                                 │
└──────────────────────────────────────────┘
```

Deviations require an explicit reason documented in the PR.

---

## CTA rules

- **One primary CTA per viewport.** Solid filled button, brand primary, verb-first label.
- **Action labels are verbs + outcome**, not generic.
  - Good: "Book a discovery call", "See web development packages", "Get a custom quote"
  - Bad: "Submit", "Learn more", "Click here"
- **Secondary CTA** is outline or ghost, lives next to the primary, never competes.
- **Tertiary** is a text link inline in body copy.
- **Sticky CTAs** on long pages (mobile): one floating button anchored to bottom safe-area. Never on desktop.
- **CTA repetition cadence:** hero → mid-page (after proof) → bottom (CTA band). Three total on a service page.

---

## Hero patterns

### Home hero

```
[H1 = 6–10 word value prop]
[Subhead = 12–20 words clarifying the audience and offer]
[Primary CTA] [Secondary CTA]
[Trust strip: partner badges or client logos OR a strong stat]
```

- **No autoplay video.** Hero video kills LCP. Optional: a low-weight Lottie or CSS animation.
- **Hero image must be ≤ 80KB AVIF**, explicit width/height, `priority` flag, never `lazy`.

### Service hero

Add a starting-price tag next to the H1:

```
[Service name]
[Subhead: who it's for + outcome]
Starting at $X · [Primary CTA] · [Secondary: see packages]
```

### Industry hero

Lead with the audience pain in the H1:

```
[H1 = "Websites for [industry] that book appointments"]
[Subhead = our specific value for this vertical]
[Primary CTA: see [industry] portfolio]
```

### Location hub hero

```
[H1 = "Digital services for [City] SMBs"]
[Subhead = local positioning]
[Primary CTA: book a [City] call]
```

---

## Forms

### Contact form (Phase 1)

Fields:

- Name (required)
- Email (required, regex-validated)
- Company (optional)
- Service interest (Select; values from `data/services.ts` — all 9 services + "Not sure / multiple")
- **Budget range** (Select; required for lead qualification): `< $5,000` / `$5,000–$15,000` / `$15,000–$50,000` / `$50,000+` / `Not sure / depends on scope`
- **Timeline** (Select; required for lead qualification): `ASAP — within 4 weeks` / `1–3 months` / `3–6 months` / `Just exploring`
- Country (Select; optional — auto-detected from IP, user can override). Powers international routing in Phase 4+.
- Message (Textarea; required; 20–2000 chars)

The budget + timeline fields **pre-qualify leads** for the CRM (Phase 4 routes to different workflows by budget tier) and signal seriousness without being intrusive. Both are Select dropdowns, not free text, to keep filling fast on mobile.

UX:

- **Inline validation** via `react-hook-form` + `zod`. Errors appear below the field, red text, with icon, after blur (not on every keystroke).
- **Submit button** disabled until validation passes; loading spinner inside button on submission; never replaces the form to a separate page.
- **Honeypot field** (`<input name="company_url" tabIndex="-1" autoComplete="off" hidden>`). No CAPTCHA.
- **Success state** replaces the form in place — keep scroll position. "Thanks — we'll reply within 1 business day." + link to schedule a call.
- **Failure state** keeps form values, surfaces a toast.
- **Server Action** (`app/(marketing)/contact/actions.ts` `submitContact`, not an API route — per `coding-standards.md`'s React-19 "Server Actions for forms" rule; resolved 2026-05-29); Resend sends two emails (notification to us + autoresponder to the prospect). The send is **env-gated on `RESEND_API_KEY`** — absent locally/preview, it logs and returns success so the build and success UX stay green.
- **Failure state**: the contact page surfaces an **inline `aria-live` alert** rather than a toast — no `Toaster` is mounted sitewide, and an inline alert reads better to assistive tech (documented deviation, 2026-05-29).

### Newsletter form (Phase 3)

Single email field + button. Same UX rules. Posts to Resend Audiences (or chosen provider).

---

## Trust signals — placement matters

| Signal                        | Location                                                                |
| ----------------------------- | ----------------------------------------------------------------------- |
| Partner badges (GHL, HubSpot) | Above the fold (hero or trust strip), and footer                        |
| Client logos                  | Trust strip below hero                                                  |
| Testimonial quote             | Within hero (when strong) or right after first problem/solution section |
| Star ratings (Clutch, G2)     | Trust strip + contact page                                              |
| Year founded, jurisdiction    | Footer                                                                  |
| Response-time promise         | Contact page above form                                                 |
| Headshots of founders         | About page, contact page sidebar                                        |

Avoid: vague "Trusted by industry leaders" without logos. If we don't have logos yet, lead with a strong outcome metric instead.

---

## Accessibility checklist (WCAG 2.2 AA)

Every component PR ticks:

- [ ] Color contrast verified (body ≥ 4.5:1, large ≥ 3:1, UI components ≥ 3:1)
- [ ] Keyboard reachable, focus ring visible, focus order logical
- [ ] Skip-to-content link first focusable on every page
- [ ] ARIA labels on icon-only buttons
- [ ] Form labels associated; errors announced via `aria-live="polite"`
- [ ] Heading hierarchy: exactly one `h1`, sequential `h2`/`h3`
- [ ] `prefers-reduced-motion` respected — all animation drops to 0ms
- [ ] Target sizes ≥ 24×24 CSS px (WCAG 2.2 SC 2.5.8)
- [ ] No content/functionality requires pointer hover
- [ ] Lighthouse a11y = 100

### Common accessibility patterns

- **Icon-only button:** `<button aria-label="Close dialog"><X /></button>`
- **Image with caption:** image `alt` describes the image, caption is `<figcaption>`
- **Decorative image:** `alt=""` (empty, NOT missing)
- **External link:** `rel="noopener noreferrer"`; if it changes target, add visually-hidden "(opens in new tab)"
- **Loading state:** `aria-busy="true"` on container during fetch
- **Modal/dialog:** focus trapped, ESC closes, restores focus to trigger on close, has `aria-labelledby`

---

## Conversion patterns

### Pricing anchor

Every service page has a `PricingCard` block:

```
Starting at $X,XXX
   - What's included (3–5 bullets)
   - What's NOT included (1–2 honest bullets)
   [Primary CTA: get a custom quote]
   Most projects land between $X and $Y depending on scope.
```

Honest "not included" bullets out-convert exclusion via omission.

### Social proof patterns (in priority order)

1. **Outcome metrics** from real case studies ("3.4× enquiries in 90 days for a Cheshire aesthetic clinic")
2. **Named testimonials with photo + role + company logo**
3. **Partner badges** (GHL, HubSpot — once earned)
4. **Third-party ratings** (Clutch, G2)
5. **Founder credentials** (E-E-A-T)

Avoid: anonymous "John D., Real Estate Agent" testimonials. If we can't use a real name and photo, leave the slot empty.

### FAQ pattern

- 6–8 questions per service/industry/location page.
- Each question is something a real prospect asked or would search.
- Use `<details>` or shadcn `Accordion` — both expose content to crawlers when expanded.
- Render as `FAQPage` JSON-LD (see `schema-strategy.md`).
- First question gets the most-searched intent ("How much does X cost?"); pricing questions earn AI Overview citations.

---

## Mobile-first specifics

- Design at 360px first; everything ≥ 768px is enhancement.
- Tap targets ≥ 44×44 CSS px (Apple) / 48×48 (Material) — exceed the WCAG 24×24 minimum.
- Sticky header collapses to logo + hamburger + CTA at < 768px.
- Mega-menu collapses to a full-screen `Sheet`.
- Avoid horizontal scroll except for intentional carousels (and even then, native CSS scroll-snap).
- Form fields full-width on mobile; never side-by-side at < 640px.

---

## Anti-patterns (we don't ship these)

- Autoplay hero video with sound
- Carousels for primary content (low engagement, SEO-unfriendly)
- Modals on entry (newsletter pop-ups before user has read anything)
- Hover-only interactions (excludes touch)
- "We are passionate" / "best-in-class" / "world-class" copy
- Lorem ipsum left in any production state
- Generic stock photos of suits shaking hands
- Pricing hidden behind "Contact us" without an anchor
- More than one primary CTA in a viewport
- Heading levels skipped (`<h1>` → `<h3>`)
- Color used as the only signal (red error text without an icon)
- "Click here" or "Read more" as link text
- Auto-advance announcements that move on a timer

---

## Per-page conversion KPI

Tracked from day one (see `measurement.md`):

| Page               | Primary metric                                  |
| ------------------ | ----------------------------------------------- |
| Home               | CTA click → /contact                            |
| Service detail     | CTA click → /contact OR scroll-depth ≥ 75%      |
| Service × Location | CTA click → /contact                            |
| Industry           | CTA click → /contact                            |
| Pricing            | "Get a custom quote" click                      |
| Blog post          | Related-service link click + newsletter sign-up |
| Case study         | "Book a call" click                             |
| Contact            | Form submission                                 |

Heatmaps via Microsoft Clarity (free) to validate scroll/click patterns once we have traffic.
