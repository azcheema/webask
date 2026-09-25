# 09 — `google-business-profile` catalogue draft

> Pasteable for `data/services.ts` after the brainstorm; every `£` figure is `[D4]` and nothing here is
> merged. Title and meta counts are checked by `private/tools/counts.mjs` in S7; the planning notes and
> pass-1 self-check for the MDX half are in `../self-checks.md`.

## 1. Service object (App. I)

### I.6 `google-business-profile`

```ts
{
  slug: "google-business-profile",
  name: "Google Business Profile",
  category: "grow",
  status: "draft",
  summary:
    "Your profile run properly — categories, services, posts, photos, questions and listings — for a real premises or service area, by a firm honest about having none.",
  heroSubhead:
    "Your profile run properly in your own account, for a real premises or service area, by a firm with none.",
  whoItsFor:
    "local businesses with premises or a genuine service area whose profile is unclaimed, half-filled or suspended, and who want the map-pack work done without a full SEO retainer.",
  pricing: {
    startingAmount: 129 /* [D4] — working set, 25 September 2026 */,
    currency: "GBP",
    cadence: "monthly",
    setupAmount: 249 /* [D4] */,
    usageNote: "The listings add-on is passed through at cost on the published GBP schedule.",
    priceNote:
      "What moves the price: locations, a suspension to work through, and listings sync to the directories that matter.",
  },
  includes: [
    "Audit and set-up in your Google account — you as owner, us as a manager, never the other way round",
    "Categories, services, attributes, hours, photos and description written to Google's guidelines, with name, phone and address matching your website character for character",
    "Weekly posts, questions answered, photos guided, and suspicious competitor listings reported",
    "Listings kept consistent by hand on Bing Places, Apple Business Connect, Yell and FreeIndex, with a sync add-on at cost where several locations make it worth it",
    "A monthly report from Google's own insights",
  ],
  notIncluded: [
    "Creating a profile for an address nobody works from — a virtual office, a mailbox, your accountant's address — Google rules them ineligible and can suspend them, and we have none of our own for the same reason",
    "Content, links and technical SEO — that is the SEO retainer",
  ],
  primaryCta: { label: "Get your profile managed", href: "/contact" },
  relatedServiceSlugs: ["seo", "review-management"],
  faqs: [
    "What does Google Business Profile management cost?",
    "Are we eligible for a profile at all?",
    "Our profile is suspended — can you get it reinstated?",
    "Why do you not have a profile yourselves?",
    "Who owns the profile and the account?",
    "Do we need this if we already pay for SEO?",
    "How do reviews fit in?",
    "What about Bing, Apple Maps and Yell?",
  ],
}
```

## 2. FAQ answers (App. Z)

### Z.6 `google-business-profile` (R13, R46; D1 ruling; § 10 row 13)

```ts
faqs: [
  {
    question: "What does Google Business Profile management cost?",
    answer:
      "A one-off set-up fee of £249 and a monthly fee starting at £129 per location, + VAT where applicable. Set-up covers the audit of your existing profile against Google's guidelines, being added as a manager on your account, and the full pass over categories, services, attributes, hours, photos and description. The monthly fee covers weekly posts, questions answered, photo guidance, listings kept consistent and the report from Google's own insights. What moves the price: how many locations you have, a suspension to work through, and syncing to the wider directories, which is added at cost. What does not move it is your industry, and nothing in the price is tied to a ranking.",
  },
  {
    question: "Are we eligible for a profile at all?",
    answer:
      "Google's test is short: if your business either has a physical location that customers can visit, or travels to customers where they are, you can create a Business Profile. A shop, salon, practice or garage qualifies on the first half; a plumber, a cleaner or a mobile groomer qualifies on the second as a service-area business, and Google says such businesses should hide their address and show the area served. What does not qualify: a rented mailing address you do not work from, which Google calls a virtual office and rules ineligible, and a coworking office unless it has signage, receives customers and is staffed by your people in business hours. We check on the first call and tell you before anything is created.",
  },
  {
    question: "Our profile is suspended — can you get it reinstated?",
    answer:
      "We can read the profile against Google's guidelines, fix what breaks them, gather the evidence Google asks for and file the appeal properly, and we will tell you which rules the profile breaks. What we cannot do is promise a date or an outcome. Reinstatement is Google's process on Google's timetable, and a profile suspended for an ineligible address stays suspended until the address problem is fixed, not the appeal. If the cause was an address nobody works from, the honest answer is to fix the premises question first, and we will say so rather than file an appeal we expect to fail.",
  },
  {
    question: "Why do you not have a profile yourselves?",
    answer:
      "Because we are not eligible for one, and we would rather say so than pretend. WebAsk works remotely with no UK office, and Google's rules require either a location customers can visit or a business that travels to them; a fully remote agency does neither, and a mailbox, a virtual office or an unstaffed desk does not qualify and can be suspended. So we have none and will not create one. It is also why we read the rules closely enough to run yours: the guidelines that shut us out are the ones that decide whether your profile stays up, and a firm with something to lose from bending them is a poor choice to manage a profile that belongs to you.",
  },
  {
    question: "Who owns the profile and the account?",
    answer:
      "You do, in your own Google account, and that never changes. We are added as a manager, which is how Google expects a third party to work on an owner's behalf with the owner's consent, and you can remove us in a minute without losing the profile, its reviews or its history. We never hold the owner role, never create a profile in our name for a client, and never verify a location we have not confirmed you operate from. If a previous agency holds the owner role on your profile, recovering it is the first job, before anything else is touched.",
  },
  {
    question: "Do we need this if we already pay for SEO?",
    answer:
      "They are different work. The SEO retainer moves your website in the organic results with content, links and technical fixes; this plan runs the profile that appears in the map results and the knowledge panel. Both use the same name, address and phone, and both benefit from reviews, but the profile is maintained inside Google's product on Google's rules rather than on your site. If your SEO provider already manages the profile properly, you do not need this. If nobody has opened the profile since it was claimed, this plan fixes that without the retainer. The two are priced separately so you can buy the one you are missing.",
  },
  {
    question: "How do reviews fit in?",
    answer:
      "They are the part of the profile with a regulator behind it, so they run as their own plan, Review Management, built to the rule of asking every customer, incentivising nobody and hiding nothing. This plan does not send review requests; it keeps the profile the reviews land on complete, accurate and active, and it replies to questions rather than reviews. Where you buy both, the two are set up together so that the request timing and the profile's own posts do not collide. What we will never do on either plan is buy, seed or incentivise reviews; concealing an incentive has been illegal in the UK since 6 April 2025.",
  },
  {
    question: "What about Bing, Apple Maps and Yell?",
    answer:
      "They are kept consistent as part of the plan. Bing Places feeds Copilot and, indirectly, ChatGPT; Apple Business Connect feeds Maps on every iPhone; Yell, FreeIndex and the other directories your customers still use carry your details whether you maintain them or not, and a wrong phone number on any of them is a customer who cannot reach you, exactly as on Google. We maintain the ones that matter by hand, with the name, address and phone matching your website character for character. Where a sync tool helps, for several locations or a long directory list, it is added at cost and shown as its own line rather than folded into the fee.",
  },
],
```
