# 09 — Services index and navigation (exact strings, read 2026-09-24)

> The grouped `SERVICE_NAV` proposal and the `/services` index copy. Every current string is quoted
> verbatim with its file and line; every replacement is a proposal pending D13.

**`/services` page constants (`app/(marketing)/services/page.tsx` L31-43):**

```ts
const META = {
  title: "Services",
  description:
    "Web design, SEO, CRM automation, AI and monthly plans for UK local businesses — missed-call text-back, reviews, an AI receptionist. One person accountable.", // 155 — the same string as the I.9 row
};

const HERO = {
  h1: "Build it, grow it, run it. One person accountable for all of it.",
  subhead:
    "Websites and software you own, the search and the phone that bring the work in, and the system that keeps it running — scoped honestly, priced on the page, delivered without handing you between agencies.",
  primaryCta: { label: "Book a discovery call", href: "/contact" } satisfies CtaLink,
  secondaryCta: { label: "Get a free site audit", href: "/free-audit" } satisfies CtaLink,
};
```

**Category headings and intros for the grouped grid (`SERVICE_CATEGORIES` in `data/services.ts`):**

```ts
export const SERVICE_CATEGORIES = [
  {
    id: "build",
    label: "Build",
    blurb: "Websites and software you own — priced as projects, handed over, kept in your name.",
  },
  {
    id: "grow",
    label: "Grow",
    blurb:
      "Being found, chosen and booked: search, your profile, your reviews, the calls you miss and the follow-up you never send. All monthly.",
  },
  {
    id: "automate",
    label: "Automate & run",
    blurb: "The system behind it, kept running — hosted plans, CRM builds, AI, maintenance.",
  },
] as const;
```

**Nav labels and descriptions (≤ 12 words; the nine existing descriptions are kept verbatim):**

| Group          | Label                   | Href                                | Description                                                                          |
| -------------- | ----------------------- | ----------------------------------- | ------------------------------------------------------------------------------------ |
| Build          | Web Development         | `/services/web-development`         | (existing) Custom marketing sites and product surfaces engineered for performance.   |
| Build          | E-Commerce              | `/services/ecommerce-development`   | (existing)                                                                           |
| Build          | Web Applications        | `/services/web-app-development`     | (existing)                                                                           |
| Build          | Mobile Apps             | `/services/mobile-app-development`  | (existing)                                                                           |
| Build          | UI / UX Design          | `/services/ui-ux-design`            | (existing)                                                                           |
| Build          | Landing Pages           | `/services/landing-pages`           | One page for one job, wired to your CRM and measured.                                |
| Grow           | SEO                     | `/services/seo`                     | (existing)                                                                           |
| Grow           | Google Business Profile | `/services/google-business-profile` | Your profile run properly, in your own account.                                      |
| Grow           | Review Management       | `/services/review-management`       | Every customer asked, nobody incentivised, nothing hidden.                           |
| Grow           | Missed-Call Text-Back   | `/services/missed-call-text-back`   | Every missed call texted back in seconds, from a number registered to your business. |
| Grow           | AI Receptionist         | `/services/ai-receptionist`         | Inbound calls answered, booked and handed over — disclosed up front.                 |
| Grow           | Email & SMS Marketing   | `/services/email-sms-marketing`     | Campaigns written and sent monthly to the people you may lawfully message.           |
| Automate & run | Local Business Plans ◆  | `/services/local-business-plans`    | The phone, follow-up and reviews, run for you month to month.                        |
| Automate & run | CRM                     | `/services/crm-automation`          | (existing)                                                                           |
| Automate & run | AI Integration          | `/services/ai-integration`          | (existing)                                                                           |
| Automate & run | Maintenance             | `/services/maintenance-support`     | (existing)                                                                           |

**Footer:** three service columns headed Build / Grow / Automate & run, then Industries, Locations,
Company; two columns on mobile, three at `sm`, six at `lg`; the brand block on its own row above.
**Mobile:** the Services accordion gains the three group sub-headings in the same order.

**`/services` index CTA band (L121-126):** keep the title; body becomes "One problem can need two or three of
these. Tell us what you are trying to fix and we will say which apply — including when the
answer is none of them." (the current "Most engagements" is a watch-list form — the change ships with
this initiative).
