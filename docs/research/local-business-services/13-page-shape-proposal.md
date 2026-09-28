# 13 — Page shape: problem first, price clear (proposal, 27 September 2026)

> A discussion document for the founder, written after the 26 September brief. Nothing here is
> applied to `content/` or `data/` yet. Every price is the `[D4]` working set of 25 September 2026.
> Section 6 is a full rewrite of one page so the shape can be judged on a real example before the
> other fourteen are touched.

## 1. The brief, as understood

1. The pages lean on price and its explanation. They should lead with the problem people search
   for, the use cases, and the solution — in plain words — and let the price confirm the decision.
2. Publish prices because the UK market hides them, but only to fill that gap: one clear starting
   figure, never a wall of pricing prose.
3. A starting price buys a **basic** scope. The bullets under it list only what that figure
   includes; everything else is an add-on, named as one.
4. Consumer and marketing law is a differentiator, not the page. Keep the rules that protect the
   client, in one short section; move the rest to the blog and the legal pages.
5. There is no accountant. Find the VAT answer, keep it simple, and write the site wording.

## 2. Diagnosis: what the current pages do

The six new pages were written to the inherited anatomy in `docs/strategy/content-guidelines.md`
(hero → who it's for → what you get → process → tools → case studies → pricing anchor → FAQs), with
the compliance argument added as the page's spine. Measured on 26 September 2026:

| Page                    | Body words | Sections | Sections mainly about rules or price | First problem-led sentence appears |
| ----------------------- | ---------- | -------- | ------------------------------------ | ---------------------------------- |
| missed-call-text-back   | 1,626      | 12       | 6                                    | paragraph 1 (good)                 |
| review-management       | 1,370      | 12       | 7                                    | paragraph 1                        |
| ai-receptionist         | 1,493      | 11       | 5                                    | paragraph 1                        |
| google-business-profile | 1,356      | 12       | 5                                    | paragraph 3                        |
| landing-pages           | 1,327      | 11       | 5                                    | paragraph 1                        |
| email-sms-marketing     | 1,737      | 12       | 7                                    | paragraph 2                        |

Three patterns. The openings are already problem-led; it is the middle that turns into a legal and
pricing essay. Half the sections explain a rule or a price mechanism. And the FAQ answers run to
100–146 words each, eight per page, so the FAQ alone is 900 words of mostly rules and money.

The reasons it was built this way still hold — no proof we may show, a market that hides prices,
"cost" queries as the highest-intent searches, and CMA price-transparency rules — but they justify
**a clear price on every page**, not **a page organised around price**.

## 3. The new anatomy

For the six monthly plans and the landing-page service. Projects (websites, apps, CRM) keep the
inherited order but adopt the same word budgets and the same rule on the starting scope.

| #   | Section                          | Job                                                                                                                                                   | Budget           |
| --- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- |
| 1   | **Hero**                         | The problem in the visitor's words (the head search term, rephrased as a sentence), the outcome, one CTA. The price line stays in the hero as today.  | 35 words         |
| 2   | **Sound familiar?**              | Three use cases: who, the moment it goes wrong, what happens now. Written as scenes, not features.                                                    | 3 × 40 words     |
| 3   | **How it works**                 | Three or four plain steps. What you do, what we do, what the customer sees.                                                                           | 120 words        |
| 4   | **What the starting price buys** | The basic scope only, four to six bullets. A second short list, "Add when you need it", names the paid extras with their trigger, not their price.    | 2 lists          |
| 5   | **What keeps you safe**          | One section, only where a rule protects the client. States the rule in one sentence, what we do about it in one, and links the full explainer.        | ≤ 120 words      |
| 6   | **What it costs**                | The starting figure, the cadence, the set-up and usage lines, one sentence on what moves it, the VAT line. Nothing else.                              | 60 words         |
| 7   | **FAQs**                         | Six, pricing first (the rule stands: it is the most-searched intent). The other five come from the People-Also-Ask list in `03` § 9, in search order. | 6 × 60–100 words |
| 8   | **Related · CTA**                | Unchanged.                                                                                                                                            | —                |

Targets: **700–900 body words** (today 1,300–1,700); **one** rules section (today three to five);
FAQ answers **60–100 words** (today 80–150; the 80-word floor came from a US schema habit and the
answers that rank in UK AI Overviews are shorter).

What leaves the page and where it goes:

- The full legal reasoning (which regulation, which paragraph, what the regulator said) → the blog
  post already drafted for each service in `09-content-drafts/blog/` (`12` § 4 order), linked from
  section 5.
- The exchange-rate and usage-schedule mechanics → one paragraph on `/pricing`, linked from section 6.
- "We work remotely, with no UK office" → `/about` and the footer disclosure; one clause on the page
  at most.
- The competitor-survey sentences ("of the products we checked…") → the comparison posts. They read as
  proof by proximity and add nothing to the buyer's decision.

## 4. Search intent → pain point → page, per service

Source: `data/keywords.json` (intents), `03` § 6 (SERP shapes), § 7 (tiers), § 9 (People Also Ask).
"Basic scope" is what the starting figure buys under the founder's rule; "add-ons" are named on the
page without prices.

### 4.1 The six plans

> **28 September 2026 — usage is not included (founder).** Everything the platform meters — texts, calls, AI minutes, WhatsApp messages, email sends, number rental and add-ons — is billed on top at cost, based on what the client uses; on a plan WebAsk hosts, that is the published pound schedule. The included allowances below (100 conversations, 300 minutes, 10,000 emails and 200 or 500 segments) are withdrawn; the service pages no longer promise any. Recorded in `00` § 6.

| Service                 | Most-searched problem (head term · tier)                                           | The pain in the visitor's words                                                                 | Three use cases                                                                                                    | Basic scope at the starting figure                                                                                                                           | Add-ons (named, not priced on the page)                                                 |
| ----------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------- |
| Missed-Call Text-Back   | `missed call text back uk` · **High** (9/9 UK domains; GoHighLevel resellers rank) | "I'm on a job when the phone rings, and by the time I call back they've booked someone else."   | A plumber under a boiler · a salon mid-appointment · a garage with the phone on the counter                        | Divert from the number you publish · one text template · one inbox + app · a test from a real phone · 100 conversations a month · monthly report             | New UK number · web chat + WhatsApp in the inbox · more conversations                   |
| Review Management       | `review management service uk` · Medium; `incentivised reviews uk` · **High**      | "We do good work and nobody leaves a review. The one bad review is the first thing people see." | A trade with 12 reviews and a competitor with 200 · a dentist afraid of the GDC rule · a garage with a 1-star rant | Request by text or email after every job · Google + Facebook in one inbox · replies drafted for approval · one-page team policy · monthly report             | Replies posted for you · Trustpilot/Checkatrade watched · site widget · extra locations |
| AI Receptionist         | `ai receptionist uk` · **High**; `ai receptionist cost uk` · Medium                | "I can't answer every call and I can't afford someone to. Voicemail loses the job."             | Out-of-hours calls at a garage · overflow at a busy salon · a sole trader who cannot pick up                       | Inbound agent on a divert · booking into your calendar · summaries to your inbox · disclosure line · fallback to a person · 300 minutes · monthly tuning     | Extra minutes · call recording · a second line · CRM wiring beyond the calendar         |
| Google Business Profile | `google business profile management uk` · Medium; suspension queries → post        | "Our profile is half-filled, nobody looks after it, and a competitor shows up above us."        | An unclaimed profile · a second branch · a suspended profile                                                       | Audit + first full pass in your account · categories, services, hours, photos · weekly post · questions answered · monthly report from Google's insights     | Listings sync (Bing, Apple, Yell) · suspension appeal work · extra locations            |
| Landing Pages           | `landing page design uk` · transactional; "website or just a landing page?" PAA    | "I'm running an offer and my website can't take a new page quickly."                            | A seasonal offer · an event or open day · a Google Ads campaign with nowhere to land                               | One page in the builder · form or booking wired to your CRM · consent captured · tracking · one report at 30 days · copy edited from your draft · two rounds | Coded page · three-step funnel · copy written from a brief · payment step               |
| Email & SMS Marketing   | `email marketing agency uk` · **High**; `is sms marketing legal uk` → post         | "We have hundreds of past customers in a system and never message them."                        | A dentist's lapsed patients · a salon's quiet month · a trade's annual service reminders                           | Consent audit in month one · two campaigns a month · one automation built or reviewed · list hygiene · monthly report · 10,000 emails and 200 texts a month  | Four campaigns · quarterly landing page · WhatsApp channel · more texts                 |

### 4.2 The nine existing services (compact)

> **28 September 2026.** Prices adopted with CRM from £3,500 and Web Apps from £4,500 for a focused
> tool (platforms from £9,500); Mobile Apps stays at £12,000 with a "do we actually need an app in the
> stores?" FAQ. The nine pages were rewritten to § 3 the same day with a 900–1,300-word budget.

| Service         | Most-searched problem                                                     | Lead with                                                                   | Basic scope check                                                                                          |
| --------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| Web Development | `web design for small business uk`; `why is my website so slow uk`        | "Your site is slow, templated and not bringing enquiries."                  | £3,500 buys a five-page marketing site; blog, booking and copywriting are named add-ons                    |
| E-Commerce      | `shopify vs woocommerce uk`; `how much does an ecommerce website cost uk` | "Which platform, and what will it really cost to run?"                      | £6,500 buys a themed Shopify build with payments and shipping; migrations and custom features are add-ons  |
| Web Apps        | `booking system development uk`; `custom software vs off the shelf uk`    | "Off-the-shelf doesn't fit and spreadsheets are breaking."                  | £9,500 buys one workflow, sign-in and roles; integrations and multi-tenancy move it                        |
| UI / UX         | `ux audit services uk`; `how much does a ux audit cost uk`                | "People land and leave. We don't know why."                                 | £3,000 buys an audit and a redesign of the key flows; a design system is an add-on                         |
| SEO             | `seo for small business uk`; `is seo worth it`; `how long does seo take`  | "We're invisible for the searches that matter."                             | £750 buys technical fixes, local pages and monthly reporting; content volume moves it                      |
| Mobile Apps     | `app development cost uk`; `native vs cross platform`                     | "Customers want to book from their phone."                                  | £12,000 buys one codebase, one core flow, both store launches; offline and integrations move it            |
| CRM             | `gohighlevel setup uk`; `gohighlevel vs hubspot uk`                       | "Leads come in and fall through the cracks."                                | £2,500 (proposed £3,500) buys forms, pipeline, sequences, calendar; migrations and white-label are add-ons |
| AI Integration  | `ai chatbot agency uk`; `ai voice agent cost uk`                          | "We repeat the same answers all day."                                       | £4,500 buys one grounded chatbot or one workflow; voice and multi-system are add-ons                       |
| Maintenance     | `website maintenance cost uk`; `do i need a website maintenance plan`     | "Nobody has touched the site since launch and I'm not sure it still works." | £250 buys patching, monitoring and a small monthly hour bucket; response SLAs are the higher tiers         |

## 5. Consumer law: how much is enough

Split every rule on the site into two piles and treat them differently.

**Protects the client — keep, one section per page, plain words.** A text-back that carries an offer
is marketing to a number with no consent (PECR). A review flow that asks only happy customers is
cherry-picking under the CMA's guidance and Google's policy. An AI receptionist that pretends to be a
person will need an apology. A clinic message that names a treatment is an advert the ASA can act on.
Each of these is a thing that goes wrong for the visitor, so it earns a sentence and a link.

**Protects us — footer, terms, blog.** The DMCC Act's fake-review ban, the CMA's price-transparency
rules, PECR's fine ceiling, the trading disclosures a company must carry, the Consumer Contracts
Regulations on distance sales. None of these helps a visitor decide. They live in `/legal/*`, the
pricing page's one VAT line, and the compliance posts.

Rule of thumb for the writer: **if the sentence starts with a regulation, cut it or move it; if it
starts with what happens to the customer, keep it.**

## 6. Worked example — `missed-call-text-back`, rewritten to the new shape

Catalogue changes: `summary`, `heroSubhead`, `whoItsFor`, `includes`, `notIncluded` as below; FAQs
cut from eight to six and each to 60–100 words. Body as below (about 720 words; today 1,626).

### 6.1 Catalogue strings

```ts
summary:
  "Every call you miss gets a text back in seconds, so the customer waits for you instead of ringing the next name on the list.",
heroSubhead:
  "You're on a job. The phone rings out. Seconds later the caller has a text from your business — sorry we missed you, reply here or book.",
whoItsFor:
  "trades, garages, salons and practices whose phone rings while they are working, and who lose the enquiry to whoever answers first.",
includes: [
  "A divert from the number you already publish — nothing on your van or website changes",
  "One text, sent within seconds of every missed call, written with you and tested from a real phone",
  "One inbox and a phone app for the replies, so whoever is free can answer",
  "100 conversations a month — a text-back and the replies to it",
  "A one-page monthly report: calls missed, texts sent, replies, bookings",
],
notIncluded: [
  "A new UK number, web chat and WhatsApp in the same inbox, or more conversations — each is an add-on, priced when you need it",
  "Answering the call itself (that is the AI Receptionist) or promotional follow-up (that is Email & SMS Marketing)",
],
```

### 6.2 Body

**You're on a job. The phone rings out.**

The customer does not leave a voicemail. They ring the next business on the list, and by the time you
call back at five, they have booked. Every trade, garage and salon knows the feeling, and most have
no idea how many calls it happens to, because a missed call leaves no trace.

**Sound familiar?**

_The plumber under a boiler._ Three calls in an afternoon, hands full each time. Two of them were new
customers. Neither rang again.

_The salon on a Saturday._ The phone sits by the till and rings while every chair is busy. The
person who wanted a colour next week has gone to the salon across the road, which answered.

_The garage at half past five._ The last call of the day is someone whose car has just failed its
MOT. They want it booked before the weekend. The phone rings out and the job goes with it.

**How it works**

1. **You keep your number.** Unanswered calls are diverted to a line we set up; the number on your
   van, your website and your Google profile does not change.
2. **The caller gets a text in seconds.** It says who missed the call, how to reply and how to book,
   and it comes from a number registered to your business. We write it with you and test it from a
   real phone before it goes live.
3. **Replies land in one inbox.** On a phone app and on a screen, so whoever is free picks it up and
   the next person can see what was said.
4. **You see what it caught.** Once a month: calls missed, texts sent, conversations that replied,
   bookings that followed. Four numbers, nothing modelled.

**What the starting price buys**

The divert, the text, the inbox and app, a hundred conversations a month, the test and the report.
That is the whole product for a single-line business, and for most it is enough.

_Add when you need it:_ a new UK number instead of a divert · web chat and WhatsApp in the same inbox
· more conversations a month. Each is a setting with a price attached, not a new project.

**What keeps you safe**

The text is a service message, and it stays one only because of what it says: who missed the call,
how to reply, how to book, how to stop. No offer, no discount, no review link. Add a promotion and it
becomes marketing to a number you hold no consent for, and that is the one change we will not make,
however good the offer. The caller's number is used to reply to that call and for nothing else.
[Why the wording matters, under UK rules →](/blog/missed-call-text-back-uk-rules)

**What it costs**

From **£99 a month** with a **£249 set-up**, + VAT where applicable. Messages beyond the plan's
hundred conversations are passed through at cost on a published schedule. Web chat and WhatsApp in
the inbox is **£129 a month**. Your industry does not move the price; the add-ons do.

**Frequently asked questions**

_What does missed-call text-back cost, and what is in the set-up fee?_ — 90 words: the two figures,
what set-up covers (divert or number, template, inbox, test, thirty days of tuning), what the monthly
fee covers, one sentence on usage.

_Can I automatically text back a missed call in the UK?_ — 80 words: yes, as a service message;
what the text may and may not contain; link to the post.

_Do I need a new number?_ — 70 words: no; the divert; a new number is an add-on registered to your
business, not to us.

_Who replies when a caller texts back?_ — 70 words: you do, from the inbox; nothing replies
automatically after the first text; if nobody can watch the inbox, the receptionist may fit better.

_Can it text on WhatsApp too?_ — 70 words: the text-back itself is SMS; WhatsApp joins the inbox as
an add-on for customers who opted in.

_What if I want to leave?_ — 60 words: switch the divert off; a registered number stays yours;
contacts and conversations exported on request.

## 7. VAT, in plain words (D2, without an accountant)

> **Adopted by the founder on 28 September 2026** (`00` § 6), on an AI assistant's answer that
> matches this section; no HMRC or Skatteverket confirmation was obtained. The two checks below are
> optional.

**The position.** WebAsk sells to businesses. Services from a supplier outside the UK to a UK
business are taxed where the customer is, under the reverse charge: Naxdor adds no VAT to the
invoice and the customer accounts for it themselves if they are VAT-registered. Sweden treats the UK
as a non-EU country, so no Swedish VAT is charged either. Naxdor does not need a UK VAT registration
for this.

**The one thing that would change it.** Selling to a UK private individual. Ordinary services to a
consumer would carry Swedish VAT; a digital service (a hosted software plan could count) would be taxed
in the UK and force a UK registration from the first sale, with no threshold for a business with no UK
establishment. The site removes the question by saying, in the terms and on the pricing page, that
WebAsk supplies businesses only.

**Wording for the site.** Replace "+ VAT where applicable" with:

> All prices exclude VAT. WebAsk is operated from Sweden and supplies businesses only; UK business
> customers account for VAT under the reverse charge, so no VAT is added to our invoices.

**On the invoice.** The customer's VAT number where they have one, the words "Reverse charge —
customer to account for VAT", and no VAT line.

**In Sweden.** Sales of services to businesses outside the EU are reported on the VAT return as
services supplied outside the country (the "omsatta utom landet" box), not as EU sales — confirm the
box number on Skatteverket's page for selling services to the UK before the first return.

**Evidence to keep per customer.** A VAT number, a company number, or a business email plus the
signed scope. That is what shows the customer was a business if anyone asks.

**Before cutover, without an accountant.** Two free checks: HMRC's VAT general enquiries service, and
Skatteverket's business line, each asked one question — "we are a Swedish supplier of web, marketing
and software services to UK businesses only; do we charge VAT, and do we register anywhere?" If
either answer differs from the position above, a one-off paid consultation with a UK VAT adviser is a
few hundred pounds and settles it for good. A retainer is not needed.

Sources (read 26 September 2026): HMRC VAT Notice 741A on the place of supply of services; GOV.UK
"Register for VAT" and the VAT Registration Manual on non-established taxable persons; Skatteverket,
"Sälja varor och tjänster till Storbritannien"; ACCA, "VAT on supply of services to customers outside
the UK".

## 8. If adopted: the work, in order

1. Amend `docs/strategy/content-guidelines.md` § "Service page sections" with the § 3 anatomy for
   monthly plans and the word budgets, and the FAQ rule to 60–100 words (pricing first stays).
2. Rewrite the six drafts to § 3, starting from the § 6 example: roughly two hours each, the four
   gate greps and the uniqueness checks per page as before. They are `noindex`, so this can run
   before cutover.
3. Trim the nine live pages after cutover, one per cycle, alongside their publish order — the same
   budgets, the § 4.2 lead sentences, the basic-scope check on each `includes` list.
4. `/pricing`: one paragraph on usage and the exchange-rate schedule; the VAT line from § 7.
5. `data/copy/legal.ts` terms: "supplies businesses only" and the reverse-charge sentence.
6. Log the decisions in `00` § 6: the anatomy, the FAQ length, the basic-scope rule, the VAT
   position as the deliberate interim (D2 stays open until the two free checks are done).
