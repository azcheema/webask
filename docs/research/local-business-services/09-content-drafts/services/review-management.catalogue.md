# 09 — `review-management` catalogue draft

> Pasteable for `data/services.ts` after the brainstorm; every `£` figure is `[D4]` and nothing here is
> merged. Title and meta counts are checked by `private/tools/counts.mjs` in S7; the planning notes and
> pass-1 self-check for the MDX half are in `../self-checks.md`.

## 1. Service object (App. I)

### I.2 `review-management`

```ts
{
  slug: "review-management",
  name: "Review Management",
  // category: "grow", status: "draft",
  summary:
    "Google reviews asked for the lawful way — everyone asked, nobody incentivised, nothing hidden — with replies drafted for you.",
  heroSubhead:
    "Every customer asked, nobody incentivised, nothing hidden — reviews run to the CMA's guidance and Google's policy, replies drafted for you.",
  whoItsFor:
    "local businesses chosen on their Google reviews — trades, garages, salons, clinics, practices — that ask nobody today, or ask only the happy ones.",
  pricing: {
    startingAmount: 0 /* [D4] */,
    currency: "GBP",
    cadence: "monthly",
    // setupAmount: 0 /* [D4] */,
    priceNote:
      "What moves the price: locations, the platforms watched beyond Google, and whether replies are drafted for you or also posted for you.",
  },
  includes: [
    "Request flows by SMS and email after the visit or job, timed per service, that ask every customer and filter nobody",
    "Google and Facebook reviews in one place, with replies drafted for your approval within two working days",
    "A site widget that shows your rating honestly — no hidden negatives, no cherry-picked wall (reviews stay on Google for aesthetic clinics until the advertising position is settled)",
    "A one-page policy for your team — no incentives, no gating, what to do with a bad review — so the automation and the front desk agree",
    "A monthly report: requests sent, reviews received, rating movement, reviews still unanswered",
  ],
  notIncluded: [
    "Suppressing genuine negative reviews, or writing reviews — the first is what the CMA's guidance treats as misleading presentation, the second a fake review the Act has banned since 6 April 2025; we do neither",
    "Crisis or press reputation work",
  ],
  primaryCta: { label: "Start a review programme", href: "/contact" },
  relatedServiceSlugs: ["google-business-profile", "email-sms-marketing"],
  faqs: [
    "What does review management cost per month?",
    "Is it legal to ask customers for Google reviews in the UK?",
    "Can we ask only the customers we know are happy?",
    "Can we offer a discount or a prize draw for a review?",
    "Who writes the replies, and can they go out without us seeing them?",
    "What happens when we get a bad review?",
    "We are a dental practice — do the GDC's rules change anything?",
    "Do you also handle Trustpilot, Checkatrade or Facebook?",
  ],
}
```

## 2. FAQ answers (App. Z)

### Z.2 `review-management` (R09, R13–R22)

```ts
faqs: [
  {
    question: "What does review management cost per month?",
    answer:
      "A one-off set-up fee and a monthly fee per location, with the starting figures shown on this page and on the pricing page, + VAT where applicable. Set-up covers connecting your Google and Facebook accounts, writing the request flows and their timing for each service, the one-page policy for your team, and the widget if you want one. The monthly fee covers the requests, the replies drafted for your approval, the monitoring and the report. What moves the price: how many locations you have, the platforms watched beyond Google, and whether replies are also posted for you after approval. What does not move it is how many reviews you want, because that is not a number we sell or promise.",
  },
  {
    question: "Is it legal to ask customers for Google reviews in the UK?",
    answer:
      "Yes, provided you ask in the way the rules allow. Since 6 April 2025 the Digital Markets, Competition and Consumers Act has made it illegal to write or commission fake reviews, to conceal that a review was incentivised, or to present reviews misleadingly, and the Competition and Markets Authority can fine directly, up to ten per cent of global annual turnover or £300,000, whichever is higher. Its guidance says that asking customers generally, without predetermining the contents or sentiment of the review, is not prohibited. Google's own policy adds that businesses must not selectively solicit positive reviews or offer anything for a review. Asking every customer, offering nothing and showing what comes back is what the guidance allows, and it is exactly how the programme works.",
  },
  {
    question: "Can we ask only the customers we know are happy?",
    answer:
      "No, and the programme is built so that you cannot. The CMA's guidance describes encouraging just those who are satisfied to leave reviews as a form of cherry-picking, alongside suppressing negative reviews, and Google's policy forbids selectively soliciting positive reviews. The tool feature that asks customers to rate you privately first and sends the public link only to the happy ones is that shortcut implemented as software, so we do not run it. Every customer gets the same request at the same point in the job. The rating you earn that way may be lower than a curated one would have been, and it is the only one you can defend if anyone looks.",
  },
  {
    question: "Can we offer a discount or a prize draw for a review?",
    answer:
      "Not on this plan. Under the Act an incentivised review is not banned, but it must be labelled prominently as incentivised, and the CMA's guidance says the label should read as an advert; concealing the incentive is the offence. Google's policy goes further and forbids offering payment, discounts or free goods for any review at all, so an incentive risks the reviews and the profile as well as the fine. Dental practices have a third rule of their own from the General Dental Council. Offering nothing satisfies all of them, so we offer nothing, and we will say no if you ask us to add one.",
  },
  {
    question: "Who writes the replies, and can they go out without us seeing them?",
    answer:
      "We draft them, and nothing is posted in your name until you have approved it. Each review gets a short, specific reply in your voice: thanking the good ones, taking the bad ones seriously without arguing, and never disputing a customer's account in public. Drafts reach you within two working days of the review appearing. If you want replies posted for you after a standing approval, that can be added, and even then any reply to a negative review comes to you first. A reply generated and posted unseen speaks in your name with nobody having read it, and we will not automate that.",
  },
  {
    question: "What happens when we get a bad review?",
    answer:
      "It stays up, it gets a reply, and it gets read. We do not remove or suppress genuine negative reviews; doing so is what the CMA's guidance says may infringe the Act's ban on misleading presentation, and a rating with no low scores looks curated to everyone who reads it. We draft a reply that acknowledges the complaint, says what you will do and moves the conversation offline, for your approval. If the review breaks Google's own rules, such as spam, an obvious fake or a competitor, we report it through Google's process, and whether it comes down is Google's decision, not ours. The monthly report lists every review still unanswered so none is missed.",
  },
  {
    question: "We are a dental practice — do the GDC's rules change anything?",
    answer:
      "They add one rule and remove one option. The General Dental Council requires genuine reviews with no incentives at all, not merely disclosed ones, so a practice may never offer anything for a review. The programme already meets that because it offers nothing to anyone. Everything else is the same: every patient asked at the right moment after the appointment, a plain request with nothing attached, replies drafted for your approval, and a widget that shows the rating as Google shows it. Recall reminders and review requests are kept as separate flows so a request never rides on a clinical message. The dental practices page sets out the wider GDC position on your website.",
  },
  {
    question: "Do you also handle Trustpilot, Checkatrade or Facebook?",
    answer:
      "Google and Facebook are connected on the standard plan, because those are the profiles the programme is built around. Trustpilot, Checkatrade, Reviews.io and similar platforms can be added to the watch list as a priced addition, so a review there gets a drafted reply too. We do not run separate request flows to several platforms at once; a customer gets one request, to one place, because asking the same person twice is how a programme starts to feel like pressure. If a trade platform is where your customers already are, we can point the single request there instead of Google and say so in the scope.",
  },
],
```
