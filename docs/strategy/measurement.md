# Measurement & Analytics

> What we track, how we instrument it, what we look at on what cadence. Built so we measure what matters and ignore the rest.

---

## North-star metric

**Qualified discovery calls booked per month** — the only metric that maps directly to revenue.

Everything else is a leading indicator. If it doesn't move the north star, we don't optimize for it.

---

## KPI tree

```
North star: Qualified discovery calls booked / month
├── Contact form submissions / month
│   ├── Form views / month
│   │   ├── Pageviews on conversion-relevant pages
│   │   ├── Average scroll depth on service pages
│   │   └── CTA click-through rate per page
│   └── Form submit → call-booked rate (manual qualification)
└── Inbound calls (when phone is added in Phase 4)
```

Each layer has owners + targets set per phase.

---

## Analytics stack

| Tool                                       | Purpose                                                             | Cost               | Phase added |
| ------------------------------------------ | ------------------------------------------------------------------- | ------------------ | ----------- |
| **Vercel Analytics**                       | Real-user Web Vitals + pageviews                                    | Free at our volume | Phase 0     |
| **Google Search Console**                  | Search impressions, clicks, queries, CWV from CrUX, coverage errors | Free               | Phase 1     |
| **Bing Webmaster Tools**                   | Bing equivalent of GSC                                              | Free               | Phase 1     |
| **Google Analytics 4**                     | Behavior, conversions, attribution                                  | Free               | Phase 1     |
| **Microsoft Clarity**                      | Free heatmaps + session recordings                                  | Free               | Phase 1     |
| **Plausible or PostHog** (optional, later) | Privacy-first alternative if we move off GA4                        | $9–$50/mo          | Phase 4+    |
| **Ahrefs or Semrush**                      | Keyword rank tracking, backlink monitoring                          | $100–$200/mo       | Phase 2     |

We do **not** install:

- Hotjar (overlap with Clarity, paid)
- Mixpanel/Amplitude (overkill for marketing site)
- Multiple competing analytics tools

---

## Instrumentation

### Vercel Analytics

Auto-enabled in `app/layout.tsx`:

```tsx
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
```

### Google Analytics 4

Loaded via `next/script` with `strategy="afterInteractive"`. Custom events:

| Event                    | Fired on                                              |
| ------------------------ | ----------------------------------------------------- |
| `page_view`              | Auto, every route change                              |
| `cta_click`              | Any tracked CTA — `data-analytics="cta:hero-primary"` |
| `form_view`              | Contact form scroll into view (50% visible)           |
| `form_start`             | First field focus                                     |
| `form_submit_attempt`    | Submit button click                                   |
| `form_submit_success`    | Server confirms email queued                          |
| `form_submit_error`      | Validation or server error                            |
| `outbound_click`         | Click on external link                                |
| `case_study_open`        | View any case study detail                            |
| `pricing_view`           | Pricing page view                                     |
| `service_view`           | Service detail view (with service slug param)         |
| `programmatic_page_view` | Service × location view (with city + service params)  |
| `industry_page_view`     | Industry view (with industry param)                   |
| `newsletter_signup`      | (Phase 3)                                             |
| `call_booked`            | (Phase 4 — confirmed from Cal.com webhook)            |

GA4 conversions:

- `form_submit_success` → conversion
- `call_booked` → conversion (Phase 4)
- `newsletter_signup` → micro-conversion

### Microsoft Clarity

Drop-in script, `strategy="lazyOnload"`. Goals:

- Heatmaps of home, top service pages
- Session recordings of users who DON'T submit the form (where did they drop off?)
- Rage-click detection (sign of UI confusion)

### Google Search Console

Verified via DNS TXT record. Submit sitemap index. Configure email alerts for:

- Manual actions
- Coverage errors (404, soft-404, server errors)
- Core Web Vitals issues
- Security issues

### Bing Webmaster Tools

Mirror of GSC setup; smaller traffic but easy to maintain.

---

## Privacy & consent

- **No cookies set before consent** for non-essential analytics (GA4, Clarity).
- **Cookie banner** added in Phase 1 — minimal, accessible, respects opt-out.
- **Vercel Analytics is cookieless** by default — runs without consent.
- **CCPA + GDPR compliance** — explicit "Do Not Sell" link in footer; data export request mechanism by Phase 3.
- **Privacy policy** ships with Phase 1; updated whenever a new tool is added.

---

## Dashboards

### Vercel project dashboard

- Build status, deploy history, function logs.

### Google Looker Studio (free) report — single Naxdor dashboard

Pulls from GA4 + GSC + (later) Ahrefs.

**Top section: this week**

- New users, sessions, pageviews
- Form submits + conversion rate
- Top 10 queries by clicks
- Top 10 pages by clicks
- CWV pass rate (% of URLs in "Good" bucket)

**Middle: trend**

- 90-day chart of pageviews, form submits, top-5 queries position

**Bottom: by page bucket**

- Home / Services / Industries / Locations / Blog / Case Studies — pageviews + form submits per bucket

Built in Phase 1; iterated as data accumulates.

### Ahrefs rank tracker (Phase 2)

Track ~100 target keywords (top of each cluster):

- Position
- Search volume
- CTR estimate
- URL ranking

Weekly snapshot exported to Looker Studio.

---

## Review cadence

| Cadence                      | What we review                                                                                                       | Who                    |
| ---------------------------- | -------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| Daily (Phase 0–2 ship weeks) | CI status, deploy errors, GSC alerts                                                                                 | Engineering            |
| Weekly                       | New impressions/clicks per page bucket; top queries; CTR by page; form-submit funnel                                 | Founders               |
| Bi-weekly                    | CWV field data; lab vs field drift                                                                                   | Engineering            |
| Monthly                      | Position changes for tracked keywords; competitor positions; backlink growth                                         | Founders               |
| Quarterly                    | Full content audit; refresh top-traffic posts; demote zero-impression programmatic pages; competitor analysis update | Founders + Engineering |

---

## Reporting templates

### Weekly snapshot (single page, sent to founders)

```
Week of YYYY-MM-DD

🎯 North star
Discovery calls booked: X (vs prior week Y; vs 4wk avg Z)

📈 Funnel
Pageviews: X (Δ vs prior week)
Form views: X (conv. X%)
Form submits: X (conv. X%)
Calls booked: X (conv. X%)

🔍 SEO
Impressions (GSC): X (Δ%)
Clicks: X (Δ%)
Avg position (top-50 tracked keywords): X
New keywords ranking top-20 this week: X
Pages with CWV "Good": X% (target: 90%+)

🏆 This week's wins
- ...

⚠️ This week's concerns
- ...

📍 Next week
- ...
```

### Monthly deep-dive (one section per page-bucket)

For Home / each Service / Industries / Locations / Blog / Case Studies:

- Top 5 queries that drove clicks
- Top 5 queries with high impressions but low CTR (meta description opportunity)
- Position trend for the 3 most valuable queries
- Form submits attributed to this bucket (last-touch + first-touch)
- Specific improvement actions for next 30 days

---

## Attribution model

Marketing-site lead attribution at our scale:

- **Last non-direct click** (GA4 default) — primary attribution.
- **First touch** captured via `referrer` query param + `lib/attribution.ts` cookie. Used for content marketing ROI assessment.
- **UTM discipline** for any outbound campaign (LinkedIn posts, guest content, podcast appearances):
  - `utm_source` — platform (`linkedin`, `clutch`, `podcast`)
  - `utm_medium` — channel (`social`, `directory`, `interview`)
  - `utm_campaign` — campaign name
  - `utm_content` — specific creative

No UTMs internally — they pollute internal-traffic data.

---

## Anti-metrics (we don't optimize for these)

| Metric                 | Why we ignore it                                         |
| ---------------------- | -------------------------------------------------------- |
| Bounce rate            | GA4 deprecated it; meaningless for single-page intent    |
| Time on page           | Inflated by tabs left open; uncorrelated with conversion |
| Pages per session      | High pages/session ≠ high quality                        |
| Social shares          | Vanity unless they drive backlinks                       |
| Domain Rating alone    | Means little without traffic context                     |
| Vanity follower counts | Doesn't pay the bills                                    |
