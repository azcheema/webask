# 01 — GoHighLevel product study

> Purpose: what the platform sells, what it costs a UK reseller, where the data sits, and how
> sub-accounts move. Research window: 24 September 2026 → open. Nothing in this folder is
> implemented. Figures are proposals pending D4 unless marked **finding**. Every figure below is a
> **vendor list price in USD** as published on the day cited; none is converted to sterling
> anywhere in this folder (the FX band lives in `private/07-cost-model.md` § 2). Vendor-only
> claims are 🟡. Written in S2 (24 September 2026) from the vendor pages named in § 1; the
> planning-session reads of 23–24 September are superseded where the two differ, and every such
> difference is listed in § 11.

## 1. Method (planning § 5.1)

Vendor pages first: `gohighlevel.com/pricing`, the help-centre articles on LC Phone, email and AI
rates, sub-accounts, snapshots, SaaS Mode, rebilling (including the plan rule for AI rebilling),
WhatsApp, listings, the UK Regulatory Compliance bundle and KYC, data residency, the DPA,
sub-processors, sub-account transfer and eject; the Terms of Service and privacy policy; the status
page; the Data Privacy Framework list; Stripe's UK pricing; the affiliate and certification terms.
WebFetch first, Playwright where a page's lists are images or the page needs a browser, and
"blocked" recorded where neither worked. Every article is cited with the "Modified on" date the
help centre prints, which is the page's own date, not the retrieval date.

**What changed in the method on the day.** The LC Phone guide's country pricing files, which the
planning session recorded as available only inside an account, are public attachments on the help
article (HTTP 200 without a login). They were downloaded and read (§ 4.1), which moves UK messaging
and call rates from 🔴 unverified to 🟡 vendor-published. The founder's in-account export is now a
spot-check rather than the source (`00` § 6). The "AI Product Pricing" article, which planning could
not find by name, exists under that title (§ 4.2 [S143]).

## 2. Platform constraints already found in planning

The regulatory and platform pre-check is tabled in `08-compliance-addendum.md` § 1. Rows 4–6, 11
and 13 there are the platform rows this file re-read on the vendor pages; the resolutions are in
§ 6 (transfer and eject), § 4.2 (AI rebilling), § 5 (hosting and the DPA) and § 7 (UK numbers).

## 3. Plan matrix (🟡 pricing page re-read 2026-09-24 [S01]; pricing & billing guide, modified 22 Aug 2026 [S50]; Terms of Service, "Last Updated: June 2026" [S147])

| Plan           | Price (USD)                      | Sub-accounts | Usage rebilling                                                                                                                                                                                                | Other gates                                                                                  | Relevance to the models in `02` § 1                                                                     |
| -------------- | -------------------------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Starter**    | "$97 /Month", "$970 /Year"       | "3"          | none                                                                                                                                                                                                           | "All Core Features", "Unlimited Contacts", "Unlimited Users", "24/7 Support"                 | M2 for hosted clients 1–3; usage is a cost line WebAsk absorbs into the plan fee                        |
| **Unlimited**  | "$297 /Month", "$2970 /Year"     | "Unlimited"  | "Rebill Phone & Email (no markup)"; guide: "Rebilling without markup is available on $297/mo Unlimited plan and $497/mo Agency Pro plan for supported services"                                                | "Basic API Access"                                                                           | M2 from the fourth hosted client; at-cost pass-through of phone and email becomes possible, AI does not |
| **Agency Pro** | "$497 /Month", "$4970 /Year"     | unlimited    | "Rebill Phone & Email with Markup"; guide: "Rebilling with agency markup is available on $497/mo Agency Pro plan" and "is part of SAAS mode"; **the only plan that rebills AI Employee usage** ([S54], [S143]) | "SaaS Mode", "Automated Sub-Account Creation", "User/Agent Reporting", "Advanced API Access" | M3 (rejected for v1); also the precondition for charging any client for AI minutes as a pass-through    |
| **Enterprise** | "Speak with Our Enterprise Team" | —            | —                                                                                                                                                                                                              | "White Label Mobile App", "HIPAA compliance", CSM, premium support, custom development       | not relevant                                                                                            |

Billing terms the page states [S01]: an account can "upgrade, downgrade, or cancel … at any time";
"Billing begins automatically at the end of any free trial unless canceled"; "usage-based fees for
telecommunications or third-party services may apply"; a mid-month upgrade is "charged the prorated
difference". The Terms [S147] add that "All Fees are exclusive of any sales, VAT, GST and use
taxes"; that "All Fees assessed by HighLevel are non-refundable, including subscription Fees,
Communication Surcharges, and HighLevel's resale of Third Party Services"; that a subscription
"will automatically renew … at the then-current rates"; that "Fee rates and amounts may change from
time to time"; and that a reseller "may not digitally advertise access to any HighLevel package or
plan for an effective price that is less than HighLevel's then-current standard pricing" (a
minimum-advertised-price clause that binds M3 only — a WebAsk plan is a service, not a HighLevel
package, and is never described as one).

**Add-ons and priced extras** (per sub-account unless stated; pricing page [S01] unless marked
"guide" [S50]): AI Employee Growth "$50/month per sub-account"; AI Employee Unlimited "$97/month per
sub-account"; Branded Client Portal App "$49/month per sub-account"; dedicated email IPs "$59/month
per IP"; HighLevel Certification Program "$97/month" (guide: "$97/mo or $970/yr"); HIPAA "$297/month";
online listings management "$30/month per sub-account" (guide: "$30/mo"; the listings articles add
"$150 for 6 months" and "$300 for 12 months" [S150]); premium prospecting "$29/month per sub-account";
premium support "$500/month" (guide: "$500/mo or $5000/yr"); SEO "(powered by Search Atlas)"
"$79/month per sub-account"; WhatsApp "$10/month per sub-account" plus usage; white-label mobile app
"$497/month" (guide: "$497/mo or $1491/quarter"); WordPress hosting "Starts at $10/month per site"
(guide: "$10-497/mo based on plan"); domain purchasing "Market leading prices". Guide-only lines:
Email Validation "$2.50 per 1,000 validations"; Workflow premium features "$0.01 per execution";
Workflow Pro Plan "$10/mo, $25/mo, $50/mo"; Whitelabel Zap "$50/mo"; Advanced Account Setup "$1000";
Ad Manager "$0/mo". Payment providers named: "Stripe, PayPal, NMI, Authorize.net, Square, Adyen,
Razorpay, and many more".

**The wallet.** "The Agency Wallet is used to pay for usage-based services. Instead of paying for a
fixed package, agency is charged based on actual use." "When wallet balance falls below minimum
balance, HighLevel automatically charges agency card to refill wallet." Wallet-funded services
"include Phone System, Email System, Email Validation, AI usage, Autocomplete Addresses, Workflow
Premium Features" [S50]. Every usage line in § 4 is therefore a card charge in USD to WebAsk, in
advance, with the plan fee.

## 4. Feature inventory and verdicts

Verdicts are S2 hypotheses that follow `02` § 2; the demand evidence that confirms or overturns each
one arrives in `03` (S3) and the incumbent price point in `04` (S4). "Plan/add-on" is what WebAsk's
agency account needs before the feature can be sold at all.

| Vendor feature (name as the vendor prints it, [S01]/[S02])                                                                      | Plan / add-on needed                                                                                       | Verdict                                                                                   | Lands in                                                                            |
| ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| missed call text-back; inbound SMS & social DMs; chat widget; unified conversations                                             | any plan; UK long code with an approved RC bundle (§ 7)                                                    | **standalone service** (text-back) with inbox/chat/WhatsApp as sections of it             | `missed-call-text-back`                                                             |
| automated review requests; online reputation management; Reviews AI                                                             | any plan; Reviews AI is "$0.01/ review" pay-per-use or unlimited on either AI plan [S143]                  | **standalone service**; Reviews AI drafts only, human-approved replies (R09–R22)          | `review-management`                                                                 |
| Voice AI; Conversation AI; AI Employee                                                                                          | AI Employee Growth $50 or Unlimited $97 per sub-account, or pay-per-use; **rebilling needs the $497 plan** | **standalone service**, inbound only; minutes bundled, never rebilled below $497          | `ai-receptionist` (clinics stay on the bespoke `ai-integration` build)              |
| email + SMS; broadcast campaigns (email/SMS/WhatsApp/Messenger); newsletter automation; smart lists; dedicated IP               | any plan; email $0.675 per 1,000; SMS per segment (§ 4.1); WhatsApp $10 + usage; IP $59                    | **standalone service** (campaigns and automations the CRM build stops at)                 | `email-sms-marketing`                                                               |
| website & funnel builder; Funnel AI; domain management; forms/surveys/quizzes; WordPress hosting                                | any plan; WordPress hosting from $10/site                                                                  | **standalone project service** (builder or Next.js — the trade-off stated on the page)    | `landing-pages`                                                                     |
| online listings management (Yext or Uberall engine)                                                                             | listings add-on $30/mo per sub-account; UK "55+" publishers [S149]                                         | **section of** the profile service (listings sync), not a page                            | `google-business-profile`                                                           |
| booking calendars; appointment reminders                                                                                        | any plan                                                                                                   | **feature of** the bundle and of text-back; `03` tests the fold                           | `local-business-plans` (Answer tier)                                                |
| CRM & pipelines; workflow automation; dashboards & reporting; mobile app; API                                                   | any plan                                                                                                   | already sold — the existing `crm-automation` page; the bundle hosts them monthly          | `crm-automation`; `local-business-plans`                                            |
| payments & invoicing; text-2-pay; tap-2-pay; estimates & proposals; gift cards; loyalty programmes                              | any plan; card fees per provider (Stripe UK, § 4.5)                                                        | **section of** the bundle page at most; no page                                           | `local-business-plans`                                                              |
| social media management; Ad Manager ("$0/mo" [S50]); prospecting tool; affiliate manager; courses; communities; webinar funnels | any plan / add-on                                                                                          | **no** — out of scope for the line (paid media and social posting excluded on every page) | —                                                                                   |
| call tracking; ringless voicemail; lead scoring; QR codes; AI biz card scanner                                                  | any plan                                                                                                   | **no** as pages; ringless voicemail is outbound synthetic-voice marketing and stays out   | —                                                                                   |
| SEO (Search Atlas) add-on                                                                                                       | $79/mo per sub-account                                                                                     | **open** (Q17) — what it delivers is unverified; nothing is resold until read             | tier of `seo` / section of the profile page / own page — decided in `02` after `03` |
| Content AI; Ask AI; AI Studio; Agent Studio; Workflow AI; Email AI; Knowledge Base                                              | pay-per-use or the AI plans [S143]                                                                         | **feature of** delivery, never a page                                                     | —                                                                                   |
| SaaS Mode; Automated Sub-Account Creation; branded client portal; white-label mobile app                                        | $497 plan; $49 / $497 add-ons                                                                              | **no** — M3 rejected for v1 (`02` § 1)                                                    | —                                                                                   |

### 4.1 UK messaging and call rates — the LC Phone country files (🟡 vendor-published; retrieved 2026-09-24; guide modified 24 Sep 2026 [S48]; files [S140] [S141] [S142])

The guide's US/Canada tables are followed by "For all other countries, refer to the country-specific
pricing PDFs attached at the bottom of this page." The three attachments are CSV files, not PDFs:
`NumbersPricing_Updated.csv`, `voice pricing Updated .csv` and
`Messaging_pricing_v300626 - Sms_Pricing (4) (2).csv` (the version string reads as 30 June 2026;
the file itself carries no date). Working copies are in `private/lc-phone/` with a provenance note.
United Kingdom rows, USD, as printed:

| Item                                        | Rate (USD)                                                                                                              | File   | Note                                                                                                                   |
| ------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------------------------- |
| UK Local number                             | 1.15 per month                                                                                                          | [S140] | voice, trunking and SMS enabled; MMS no; "Address Required: Yes"                                                       |
| UK Mobile number                            | 1.15 per month                                                                                                          | [S140] | same capabilities as Local; the type a non-UK-registered business must use (§ 7)                                       |
| UK Toll Free number                         | 2.15 per month                                                                                                          | [S140] | voice only, "Domestic Voice Only: Yes", no SMS — unusable for text-back                                                |
| Inbound call to a UK Local or Mobile number | 0.01 per minute                                                                                                         | [S140] | the first leg; "Inbound Trunking" 0.006                                                                                |
| Inbound call to a UK Toll Free number       | 0.06 per minute                                                                                                         | [S140] | 0.05 from a landline, 0.064 from a mobile                                                                              |
| Inbound SMS to a UK Local or Mobile number  | 0.0075 per message                                                                                                      | [S140] | replies to a text-back are billed at this rate                                                                         |
| Outbound call to a UK landline              | 0.0158 per minute                                                                                                       | [S141] | "Programmable Outbound Minute - United Kingdom"                                                                        |
| Outbound call to a UK mobile                | 0.0305 per minute                                                                                                       | [S141] | the forwarded leg when a client answers on a mobile                                                                    |
| Outbound call, other UK classes             | Mobile – Other 0.32; Personal 0.5577; Premium Services 1.0479; Special Services 0.2625; Special Services – Other 0.0368 | [S141] | never dialled by design (inbound-only receptionist; divert-first text-back)                                            |
| Outbound SMS to any UK network              | **0.0524 per segment**                                                                                                  | [S142] | 18 rows (3, EE, O2, Vodafone, Virgin, Sky, T-Mobile, Orange, "Other" and the Guernsey and Jersey networks), all 0.0524 |

Three rules from the guide's own text change how those figures are read [S48]:

- **Both legs of an inbound call are billed.** "Inbound calls have two legs: the call arriving at your
  platform number, and the forwarded leg to where you answer. Both are billed." "Calls are billed in
  full minutes, any partial minute rounds up." "Forwarding to an international number (e.g., a UK
  mobile) uses Twilio's international rates for the second leg." For a UK number diverting to a UK
  mobile the two legs are the 0.01 and 0.0305 rows above; the guide's US "Client Minutes $0.004/min"
  line is not stated for other countries (§ 10).
- **The discounts are US/Canada only.** The guide's FAQ: "Phone Numbers — US and Canada only, all
  number types. SMS — US/Canada to US/Canada only, both inbound and outbound. Voice Calls — US/Canada to
  US/Canada only". The messaging file lists the US at 0.0083, which the guide discounts by 10% to
  0.00747; the UK figure is therefore read at face value, with no discount.
- **A 5% location-level markup applies to pass-through categories.** "A fixed 5% markup is applied to
  these charges at the location (sub-account) level, regardless of whether your agency has re-billing
  enabled." The categories listed are A2P registration fees, SMS carrier fees, MMS carrier fees,
  Verified Caller ID and RCS carrier fees — US carrier surcharges; the UK file has no carrier-fee rows,
  and whether any UK pass-through exists is not stated (§ 10). With rebilling on: "Base cost → +5%
  location markup → + agency's configured re-billing amount."

Other per-unit lines on the guide (US-listed; region not stated): call recording $0.0025/min, recording
storage $0.0005/min/month ("Any call recording stored — including older recordings — incurs ongoing
storage charges billed daily per sub-account"), transcription $0.024/min, answering-machine detection
$0.0075/call, Amazon Polly text-to-speech $0.00084 per 100 characters. Segment rules [S49, modified
23 Jul 2026]: "Each segment consists of 160 characters if GSM-7 encoding is used"; UCS-2 "can only hold
70 characters per message"; concatenated segments "can carry up to 67 characters"; emojis trigger
Unicode and "reduce the character limit per segment to 70 instead of 160"; "If you receive a reply from
that number, you're charged for inbound messages as well." Email: "Email usage is $0.675 per 1,000
emails across all plans" [S50].

**Against the Twilio proxy.** Twilio's UK SMS page, "Pricing current as of July 2026", read
2026-09-24 [S64]: long code $0.056, alphanumeric sender ID $0.056, short code $0.0524, inbound
$0.0075, local number $1.15 per month, mobile number $2.5 per month. The LC Phone file's 0.0524 is
below Twilio's July long-code list and equal to its short-code figure; the file predates the July page
by its version string. Which figure a UK send actually debits from the wallet is only visible on a
wallet transaction line inside the account, which is the one in-account check still asked of the
founder (§ 10; `00` § 6). The planning proxy's number-rental conflict ($1.15 on Twilio's SMS page
against $3.50 on its voice page) is settled by the file: 1.15.

### 4.2 AI rates and the AI Employee plans (🟡; "AI Product Pricing", modified 22 Sep 2026 [S143]; AI Employee article, modified 14 Sep 2026 [S54]; fixed-rate rebilling, modified 11 Aug 2026 [S55]; AI tools overview, modified 14 Sep 2026 [S144])

"All prices are in USD." "Pricing and model availability may change."

| Product                              | Pay-per-use                                                                                                                                                                                                                                                                                        | AI Employee Growth ($50/mo per enabled location)                                                                                              | AI Employee Unlimited ($97/mo per enabled location)                                                                                                  |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| Voice AI (inbound, outbound, widget) | "Voice + token cost": "call duration in minutes × (Voice Engine rate + selected TTS rate) + LLM token cost", plus phone-system charges. "Voice Engine rate is $0.045/min effective May 20, 2026 onward." TTS: "OpenAI $0.015/min, Cartesia $0.015/min, ElevenLabs V3 $0.170/min, V2.5 $0.035/min." | "100 AI Agent minutes/month" — "applies across all Voice AI usage types - inbound phone calls, outbound phone calls, and the Voice AI widget" | "Unlimited" — the AI Employee article: "includes unlimited Voice AI for inbound calls, outbound calls, and the Voice AI widget, subject to fair use" |
| Conversation AI                      | token cost by model                                                                                                                                                                                                                                                                                | "1,000 Agent responses/month. Overages billed at pay-per-use rates."                                                                          | "Unlimited, subject to fair use"                                                                                                                     |
| Reviews AI                           | "$0.01/ review"                                                                                                                                                                                                                                                                                    | "Unlimited"                                                                                                                                   | "Unlimited"                                                                                                                                          |
| Content AI                           | "$0.063/image and $0.0945/1,000 words"                                                                                                                                                                                                                                                             | "Unlimited"                                                                                                                                   | "Unlimited"                                                                                                                                          |
| Funnel & Website AI                  | "Free"                                                                                                                                                                                                                                                                                             | "Free"                                                                                                                                        | "Free"                                                                                                                                               |
| Workflow AI                          | "Included, subject to fair use"; premium actions "$0.01/execution"                                                                                                                                                                                                                                 | same                                                                                                                                          | same                                                                                                                                                 |
| Ask AI · AI Studio                   | "At token cost"                                                                                                                                                                                                                                                                                    | "Usage included"                                                                                                                              | "3x usage included"                                                                                                                                  |
| Agent Studio                         | "not included in any subscription plan" — pay-per-use on every tier                                                                                                                                                                                                                                | —                                                                                                                                             | —                                                                                                                                                    |
| Email AI · Knowledge Base            | "Included at no additional cost, subject to fair use"                                                                                                                                                                                                                                              | same                                                                                                                                          | same                                                                                                                                                 |

LLM token prices printed on the page, USD per 1M input / output tokens: "OpenAI Chat GPT-5: $1.25 /
$10.00 | GPT-5 Mini: $0.25 / $2.00 | GPT-4.1: $2.00 / $8.00 | GPT-4.1 Mini: $0.40 / $1.60"; the page
lists further models (an Anthropic and a Google row were returned on one read and not on another —
re-read before any figure is used in `private/07`). Fair use: "If usage is excessive, abusive, or
negatively affects platform performance, HighLevel may throttle, limit, require service upgrades, or
terminate access."

**Rebilling rule (finding on the vendor's own pages, 🟡):** "Agencies must be on the $497/month plan
to rebill AI Employee usage" [S143], repeated in [S54]. The fixed-rate article [S55] defines the two
mechanics — "a predictable flat rate per unit of AI usage — such as $0.50 per Conversation AI message
or $0.10 per Voice AI minute" versus "a percentage markup (e.g., 1.5x or 2x) on top of the actual
token cost HighLevel charges your agency" — "applies to Conversation AI and Voice AI products", and
lands on the sub-account's "next invoice as a line item"; it does not itself state the plan rule, the
two AI articles do. **Consequence for the receptionist:** on Starter or Unlimited, WebAsk cannot
charge a client for AI minutes as a pass-through at all; the minutes are a cost inside the plan fee.
The design choice `02` § 3 records is between the $97 AI Employee Unlimited plan per sub-account
(inbound and outbound minutes unbounded "subject to fair use", so the plan's own cap is the vendor's
fair-use wording, not a minute count) and pay-per-use at the per-minute formula above (the vendor's
worked example: a 10-minute call on OpenAI TTS "would be $0.60 before LLM token usage and Phone
System charges" [S143]). `private/07` § 3 models both; the public ladder shows an allowance and a
GBP overage only if pay-per-use wins.

### 4.3 WhatsApp (🟡; guide modified 22 Sep 2026 [S51]; platform comparison, modified 2 Apr 2026 [S151])

"$10 / month per sub-account" to the agency for each WhatsApp-enabled sub-account. Messages are billed
per delivered message in USD; the rate table's United Kingdom row reads "United Kingdom Updated Jul
2026 | $US | $0.0667 | $0.0231 | FREE" (Marketing, Utility, Service). "The default multiplier is set at
1.05X to cover payment processing fees." "A 5% Stripe fee is added to these rates, which should be
considered when setting up rebilling." From 1 October 2026: "All service messages will be charged on a
per-message basis", with "the first 1,000 service messages per phone number" per month free, and
"Utility messages sent in response to users will be charged on a per-message basis" inside the open
24-hour window. The agency plan needed to rebill WhatsApp is not stated (§ 10). Meta's own UK card
[S59] is Meta's price, not what the wallet debits.

### 4.4 Listings (🟡; supported countries, modified 11 Jun 2026 [S149]; engine selection, modified 30 Apr 2026 [S150])

"Listings is available in 47 countries"; the United Kingdom row shows "55+" supported publishers.
"Each sub‑account's coverage depends on its country setting." Two engines exist, Uberall and Yext;
"The selected engine will apply to all your agency's sub-accounts and the business entities they
manage" — the choice is agency-wide, not per client. Both cost "$30 for 1 month", "$150 for 6 months",
"$300 for 12 months". Uberall's coverage is described as "Google, Bing, Facebook, Apple Maps, TomTom,
etc."; the UK publisher list itself is not printed. The Search Atlas SEO add-on was not read (Q17).

### 4.5 Card fees if a plan is ever card-billed (🟢 Stripe UK pricing page, read 2026-09-24 [S156])

Standard UK cards "1.5% + 20p"; premium UK cards "2.8% + 20p"; EEA cards "2.5% + 20p"; international
cards "3.15% + 20p"; "2%" more where currency conversion applies; Bacs Direct Debit "1%", "Minimum fee
of 20p", "£4.00 cap". These are Stripe's sterling fees for a sterling invoice and are the only
sterling figures in this file; they are not conversions.

### 4.6 Billing currency and FX exposure (stated, never converted)

Every vendor figure in §§ 3–4.4 is USD: the pricing guide's "All prices are in USD" [S50], the AI
page's "All prices are in USD" [S143], the WhatsApp table's "$US" column [S51], the phone files'
"Prices in USD" header [S141]. The plan fee and every usage line are charged to WebAsk's card in USD
through the wallet, in advance, with no refunds [S147]. A hosted client is invoiced in sterling.
The exposure is therefore WebAsk's, on every line, every month; `07` § 2 states the rule (plan fee
fixed in GBP for twelve months; usage passed through at the rates on a published GBP schedule, reset
when the schedule is reviewed) and `private/07` § 2 shows the margin at both ends of a dated Bank of
England range. No `= £` appears anywhere in this folder.

## 5. Where the data sits: hosting, the DPA, sub-processors, the DPF and the UK representative

- **Hosting (🟡 security overview, modified 16 Jun 2026 [S43]).** "Our product infrastructure
  resides in the United States"; hosting is outsourced to "Google Cloud Platform Services and Amazon
  Web Services"; no EU or UK residency option is offered. "All data is encrypted in transit with TLS
  version 1.2, or 1.3"; "Platform data is stored using AES-256 encryption"; "Seven days' worth of
  backups are kept"; "SOC 2 Type II" and an "ISO/IEC 27001:2022 Certificate" are named; "use of the
  HighLevel product alone does not make you GDPR compliant"; "HighLevel does not store, process, or
  collect credit card information"; breach notice "as required by law".
- **DPA (🟡, "Last Updated July 2026" [S41]).** Contracting entity "HighLevel, Inc., a corporation
  incorporated under the laws of Dallas, Texas". "HighLevel will act as a Processor of Customer
  Personal Data. Customer will act as the Controller" — and, the clause that fits M2 exactly: "To the
  extent Customer acts as a Processor to other parties when processing Customer Personal Data,
  HighLevel will act as the Sub-Processor to Customer." Transfers: "HighLevel is certified to the
  EU-U.S. Data Privacy Framework, the UK Extension to the EU-U.S. Data Privacy Framework, and the
  Swiss-U.S. Data Privacy Framework"; restricted transfers "shall be conducted in accordance with
  Exhibit B"; the Addendum "incorporates by reference the EU 2021 SCCs, which have been adopted for use
  by the UK ICO with certain modifications and the addition of the UK Transfer Addendum".
  Sub-processors: the list is at the sub-processors URL; "Customer will be deemed to have consented to
  the additional Contracted Processor if no objection is received within thirty (30) days of
  HighLevel's notice"; on objection, "Customer may terminate the Agreement immediately upon written
  notice to HighLevel, with no further fees due". Termination: "HighLevel shall promptly delete or
  return all Customer Personal Data (including copies) to Customer, with the exception of any Customer
  Personal Data that may be retained pursuant to applicable laws", with back-up copies "securely
  isolate[d]" rather than deleted at once. Audits: "HighLevel shall allow for and contribute to audits,
  including remote inspections", and "Customer shall reimburse HighLevel for any time expended for any
  such audit at HighLevel's then-current professional services rates". Breach: notice "within
  seventy-two (72) hours of becoming aware". Data subjects may include "users of those businesses and
  other entities" contracting with the Customer — the hosted client's customers, in WebAsk's case.
- **Sub-processors (🟡, "Last Modified: September 2025" [S42]).** Storage: Google Cloud, Amazon Web
  Services (United States). Other: Twilio, Mailgun, Chargebacks911, Pendo, ChartMogul, People Data
  Labs, Freshworks, Zapier, Stripe, Mozart Data, Persona Identities (all United States). AI: BotPress,
  RetellAI, Synthflow, OpenAI (United States). Affiliates: HighLevel India (India), LeadConnector LLC
  (United States). The AI rows matter for the receptionist: a caller's voice and the call summary pass
  to a named US AI provider, which the client's privacy notice and WebAsk's DPA flow-down must say
  (`08` § 1 row 6; R23–R29).
- **Terms of Service (🟡, "Last Updated: June 2026" [S147]).** "Following the termination or
  cancellation of your Platform Account, HighLevel will retain any data associated with your account
  for a period of ninety (90) days", after which HighLevel "reserves the right, in its sole discretion,
  to permanently delete all of your data". A reseller "agree[s] that you are fully liable to your
  customers for their access to and use of the Platform" and "will require that your customers accept
  terms at least as restrictive as these Terms". Communications: "You represent and warrant that you
  have obtained all necessary consents, permissions, and authorizations from recipients before
  contacting them" — the named statutes are US (TCPA, TSR, CAN-SPAM). AI: use is subject to an
  "Artificial Intelligence Acceptable Use Policy" (Exhibit B, not read). Texas law; AAA arbitration in
  Dallas; class-action waiver; liability capped at the fees paid "during the three (3) month period
  before the act giving rise to the liability".
- **Privacy policy (🟡, "Last Updated JULY 2026" [S40]).** Entity "HighLevel LLC (a subsidiary of
  GoHighLevel Inc.)"; US address in Dallas; a **UK address** — "Rickert Services Ltd U - HighLevel LLC -
  PO Box 1487 Peterborough PE1 9XX United Kingdom" — and an EU address at Rickert
  Rechtsanwaltsgesellschaft mbH, Bonn: the vendor has appointed UK and EU representatives, which is
  what Art. 27 requires of a non-UK processor within Art. 3(2) (`08` § 1 row 10). "HighLevel LLC and
  LeadConnector LLC comply with the EU-U.S. Data Privacy Framework". Data may be transferred "between
  the United States and our affiliates".
- **Data Privacy Framework list (🟢 re-checked in the browser 2026-09-24 [S44]).** A search for
  "HighLevel" returns one participant, "HighLevel Inc", Dallas, TX, with three rows — "EU-U.S. Data
  Privacy Framework", "Swiss-U.S. Data Privacy Framework" and "UK Extension to the EU-U.S. Data
  Privacy Framework" — each "Active - Re-certification under Review", covered data "Non-HR Data". The
  certification dates read in planning (certified 29 Sep 2023, next due 15 Sep 2027) and the covered
  entity LeadConnector LLC sit on the participant's full profile. "Re-certification under Review" is
  an active status, not a lapse; the D10 precondition holds while it stays active, and `10` § 2 lists
  the listing for a monthly re-check.
- **Entity naming.** Pricing footer "© 2026 HighLevel LLC" [S01]; Terms "HIGHLEVEL LLC" [S147];
  privacy policy "HighLevel LLC (a subsidiary of GoHighLevel Inc.)" [S40]; DPA "HighLevel, Inc." [S41];
  DPF "HighLevel Inc" [S44]. Cosmetic for the transfer chain (the DPA and the DPF listing agree); the
  entity that invoices WebAsk is visible only on an in-account invoice (§ 10).

## 6. How sub-accounts move: snapshots, transfer, eject, SaaS Mode, and what a client keeps

- **Snapshots (🟡, modified 23 Sep 2026 [S148]).** A snapshot copies configuration assets —
  workflows, funnels, forms, calendars, dashboards, campaigns, templates, custom fields, pipelines —
  and does **not** copy "Contacts, Appointments, Conversations, Conversation history, Messages,
  Reputation data, Live account activity, Stripe connections, Integrations and third-party account
  connections, Assigned phone numbers for Voice AI Agents"; WordPress licences need re-authentication.
  Loading into an existing sub-account "is intended to add selected assets. Existing data is only
  affected when you choose to override a conflicting asset." Share links include "reusable, one-time,
  email, agency-restricted, sub-account restricted" types. **So the "rebuild in your own account" exit
  route is a snapshot of the build plus a contact export; conversations, reviews data and history move
  only by transfer or eject.**
- **Agency-to-agency transfer (🟡, modified 7 Aug 2026 [S52]; read in the browser because the two
  asset lists are images).** "By default, only the Agency Owner can request or complete a sub-account
  transfer"; the Owner "can grant sub-account transfer permission to specific Agency Admins". "The
  receiving agency must be active and eligible to accept the additional sub-account … the required
  account capacity, compliance add-ons, and active account status." The "What Information and Assets
  are Transferred Over?" and "Not Transferred Over" sections are each a single image with no text
  alternative; the eject article's text lists (next bullet) are used as the reference, with the
  transfer guide's own text adding: numbers — "If Both Agencies Use LC Phone": "Phone numbers transfer
  with the sub-account", "Eligible A2P registration stays with the numbers", "Future phone usage is
  billed to the receiving agency"; "If Either Agency Uses Twilio": "Phone numbers do not transfer
  automatically. The agencies and Twilio account owner must coordinate the move separately." Email:
  an "Agency-assigned dedicated domain … is removed during the transfer"; a "Sub-account-owned
  dedicated domain … transfers with the sub-account"; a "Dedicated IP … is unassigned and the related
  subscription is removed"; "Existing Mailgun or SMTP configurations are removed." "Partial sub-account
  transfers are not supported"; a HIPAA sub-account needs the add-on on the receiving side; "The
  sub-account transfers after the receiving agency approves the request"; requests "can also be
  canceled"; bulk transfer is supported in-app. No fee is mentioned; no white-label rule is mentioned.
- **Eject to a new agency (🟡, modified 22 Apr 2026 [S53]).** Converts "a sub-account within your
  agency into a separate, independent agency account"; the sender nominates a user whose "User Type
  must be 'Account'" and who is "assigned only to that specific sub-account"; "SaaS mode must be
  disabled"; "All active subscriptions like Wordpress, Yext, Whatsapp, Dedicated IP etc. will have to
  be cancelled before the transfer". Moves: "Websites and funnels will all be transferred. GHL
  calendars will get transferred over. All automation will be transferred over. Contacts and their
  conversations, appointments, opportunities, and history will be transferred over. … Contacts will
  remain in the workflow. The workflow enrolled data remains as it is in workflows. Sub-account level
  API Keys will remain the same." — and, the sentence the exit clause is built on: **"All automation
  will be transferred over. Note: They will all be set to Draft."** Does not move: "All auth
  connections will be deleted. All Facebook and Google settings will be cleared. Sub-Account-level
  Stripe fields will be cleared. Any SaaS setting will not be transferred over. Smartlists do not get
  transferred over. Mailgun/SMTP won't get transferred." Numbers: "If BOTH the releasing and receiving
  agencies along with the sub-account that needs to be transferred is on LC, then the phone numbers
  will automatically be transferred". White label: "If your agency has a whitelabel domain—commonly
  something like app.yourbrand.com—that also does not transfer automatically." **The ejected client's
  own account:** "The nominated user will then receive an invitation via email to sign up for the
  $97/month plan", and "Upon their successful signup, you will be rewarded with 40% affiliate
  commission on all of their future renewals." No fee for ejecting is mentioned; what the releasing
  agency retains is not stated.
- **The white-label conflict — resolved.** Neither article contains the rule that a white-labelled
  sub-account cannot be transferred. The only white-label sentence in either is the eject article's
  note that the agency's branded domain does not move. The search-summary claim carried into planning
  (`08` § 1 row 11) is unsupported and is closed.
- **SaaS Mode (🟡, FAQs modified 18 Sep 2026 [S152]).** Disabling SaaS on a sub-account: "Subscription
  is cancelled", "Wallet is permanently deleted", "Agency must handle refunds manually". Nothing on what
  a SaaS client keeps on cancelling. M3 is rejected for v1 (`02` § 1) and this is one more reason.
- **What a hosted client keeps on cancellation — the finding that shapes the exit clause.** The
  vendor's documents give the client nothing: a sub-account is the agency's, the 90-day retention in
  the Terms [S147] runs on the agency's account, and the transfer and eject routes are initiated by the
  agency owner. Everything a client keeps is therefore **contractual with WebAsk**: the export on
  request, the snapshot-plus-export rebuild at a fixed fee, and the documented eject or transfer with
  workflows re-enabled and channels (WhatsApp, listings, Stripe, Google, Facebook, auth connections)
  re-connected — never a seamless move. Two facts feed the clause: add-on subscriptions are cancelled
  before an eject, so the client's WhatsApp and listings lapse and restart; and an eject earns WebAsk a
  40% recurring commission on the client's new $97 account, which the client is told in the contract
  (founder decision, 24 September 2026: the contract only, not the public page, with the transfer
  route offered as the commission-free alternative; D11; `08` R30–R35).

## 7. UK number provisioning: the Regulatory Compliance bundle, sender types and the messaging policy

- **KYC (🟡, modified 18 Jul 2024 [S46]).** Approved RC bundles are required for "Local, national,
  mobile, and toll-free phone numbers". A business bundle asks for the business name, registration
  authority, business registration number, "UK Business Address", "UK Emergency Address", the
  authorised representative's name, work email and business classification; "If your business is
  registered in the UK house register, then you don't need to upload your documentation"; identity
  documents are needed only "if businesses not using a UK Companies House Registration Number".
  "My business is not registered in the UK, which long codes am I eligible to use? You should use UK
  Mobile or UK Toll Free numbers." Numbers bought "before 27 May which do not have a KYC bundle by 30th
  September will have all traffic blocked" (2024). The article does not say whether a bundle is
  per sub-account or per agency; each bundle carries one business's registration and address, so a
  client's number is provisioned in the client's sub-account against the client's details (design
  rule, `02` § 3), and WebAsk — a trading name of a Swedish company with no UK address — can hold only
  UK Mobile or Toll Free numbers itself.
- **Sender types (🟡, UK SMS article modified 4 Sep 2026 [S45]).** "UK Long Code: Requires applicable
  KYC information and an approved Regulatory Compliance bundle" (two-way); "Alphanumeric Sender ID:
  Suitable for supported one-way branded messaging use cases"; "Short Code: An option for supported
  higher-volume messaging use cases that require dedicated provisioning". "June 1, 2023 – UK carriers
  began blocking international long-code A2P traffic"; US→UK sends "can fail with Error 21612". The
  article carries no approval times and no pricing. **Text-back needs replies, so it needs a long
  code** — a UK Local or Mobile number with the client's bundle — and a divert from the client's
  published number; an alphanumeric sender suits one-way reminders only.
- **Messaging policy (🟡, modified 15 Sep 2026 [S153]).** "Send SMS only to contacts who have provided
  valid permission. Consent cannot be purchased, sold, or exchanged." "Initial messages must clearly
  identify the business that obtained the consent." "Contacts must have a clear way to revoke
  consent, such as replying STOP"; standard unsubscribe replies "can activate SMS DND for the contact",
  after which "additional SMS attempts to that contact are blocked"; "No Filtering Evasion". The policy
  is US-framed and does not mention PECR; PECR is stricter on the first message (`08` § 3 R01–R07) and
  wins.

## 8. Agency-side cost per hosted client

The USD inputs register and the plan-share table at N = 1 / 3 / 5 / 10 / 20 are in
`private/07-cost-model.md` § 1. No cost figure appears in this tracked file beyond the vendor list
prices above.

## 9. Affiliate, certification and the directory

- **Affiliate Agreement (🟡, "Last Updated: June 2026" [S57]; affiliates page [S56]).** "40% for
  Single Location Account, Agency Unlimited Account, Agency Pro (SaaS)" on direct referrals, recurring
  while the referred subscription stays active; "5%" second tier; "last-click basis within a 90-day
  window"; paid "monthly, typically on the 15th of the month"; "$50.00 USD" minimum, forfeitable after
  120 days; "independent contractor"; "You may not imply that you are an employee, contractor, or legal
  representative of HighLevel"; "Use only the HighLevel Marks we provide, without modification"; "You
  will comply with all applicable laws, including the FTC Endorsement Guides" (no disclosure wording of
  its own); either party may terminate on "30 days' written notice"; clawback of fraudulent or
  non-compliant sales. Texas law, AAA arbitration in Dallas. **The eject route enrols the agency as an
  affiliate of its former client automatically (§ 6)**, so D11 is not optional once a client is
  ejected: the UK disclosure duty (CAP Code) and `rel="sponsored"` on every affiliate link apply, and
  the commission is stated in the client contract.
- **Certification (🟡 [S58]).** "$97 /month" with "no long-term commitment" or "$970 /year"; the
  Certified Admin track is "expert-led training" over "7-10 days" and a "live proctor exam"; on passing,
  "You'll be listed in the HighLevel Certified Directory"; "Your HighLevel Admin Badge is valid for two
  years from the date you pass the live proctor exam"; "To stay certified, you must earn at least two
  additional skills badges per year"; "If your HighLevel subscription ends, your certification becomes
  inactive, and your name is removed from the directory." Specialised badges named: A2P Compliance,
  Course Creator, SaaSPRENEUR "Local Hero", AI Employee, HIPAA Compliance, Paid Ads, Social Media
  Manager, Automated Swag Store, Quick Wins. This resolves the planning unknown: directory listing
  requires the paid programme, the proctored exam, and a live HighLevel subscription, and lapses with
  any of them.
- **Partners page (🟡 [S154]).** Two programmes: the "Certified Admin Directory" ("Browse for
  HighLevel experts based on the services they offer and the industries they serve") and a Developer
  Partner Program (API integrations, consulting, marketplace deployment). No application process, tier
  or fee is described.
- **Status page (🟡 [S155], read 2026-09-24).** "All services are online"; components carry a "not
  monitored" designation; no uptime percentage is published; two incidents in the prior 30 days
  (21 and 23 September). No uptime figure can be quoted on any page.

## 10. Unknowns (open at S2 close)

1. **The wallet figure for a UK send and a UK call.** The public file says 0.0524 per segment and
   0.01 / 0.0305 per minute on the two legs; whether the 5% pass-through markup, the "Client Minutes"
   line or any discount touches UK traffic is not stated. Verified only from a wallet transaction line
   in the account after one UK test text and one diverted call — **founder action, before S5 closes**
   (`00` § 6, revised).
2. Whether the attachment inside the account is the same file as the public attachment (same article;
   a spot-check of the UK rows).
3. Which entity invoices WebAsk (LLC or Inc.) — visible on an in-account invoice only.
4. Fees on transfer or eject: none stated in either article; recorded as "none stated", not "none".
5. The transfer guide's two asset lists are images; the eject lists stand in for them until the
   vendor prints text.
6. What the Search Atlas SEO add-on delivers for a UK sub-account (Q17).
7. Conversation AI Growth allowance: the page as read says "1,000 Agent responses/month"; an older
   search snippet showed a per-day figure — monthly re-read per `10` § 2.
8. The agency plan needed to rebill WhatsApp (not stated; the phone/email rule suggests Unlimited or
   above — assumption, not a finding).
9. RC bundle scope (per sub-account or per agency) — not stated; the design assumes one bundle per
   business.
10. Whether the Certified Directory lists an agency's industries and services in a form clients search
    — the directory itself was not browsed.
11. The Terms' AI Acceptable Use Policy (Exhibit B) — not read; needed before the receptionist ships.
12. The additional LLM rows on the AI pricing page (re-read on the day a token figure is modelled).

## 11. Conflicts and resolutions register (S2)

| Item                                              | Planning read (23–24 Sep)                                      | S2 read (24 Sep, vendor page)                                                                                                                      | Resolution                                                                            |
| ------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| UK LC Phone rates                                 | in-account file only; Twilio as 🟡 proxy; 🔴 unverified        | public CSV attachments on the guide; UK rows read (§ 4.1)                                                                                          | 🟡 vendor-published; in-account check reduced to a wallet-line spot-check (§ 10.1)    |
| UK outbound SMS per segment                       | Twilio $0.056 (Jul 2026)                                       | file: 0.0524; Twilio page today: long code 0.056, short code 0.0524                                                                                | model at 0.0524 with 0.056 as the sensitivity ceiling until § 10.1 settles it         |
| UK local number rental                            | $1.15 (Twilio SMS page) vs $3.50 (voice page)                  | file: 1.15 (Local and Mobile)                                                                                                                      | 1.15                                                                                  |
| "AI Product Pricing" article                      | not found by name                                              | exists, modified 22 Sep 2026 [S143]                                                                                                                | § 4.2 rewritten from it; third-party AI figures retired                               |
| Voice AI on the $97 plan                          | "inbound under fair use, outbound pay-per-use" (third-party)   | "unlimited Voice AI for inbound calls, outbound calls, and the Voice AI widget, subject to fair use" [S54]; Growth 100 min across all three [S143] | vendor wording wins; the receptionist stays inbound-only by design, not by plan limit |
| Who initiates a transfer                          | "only the Agency Owner"                                        | Owner by default; Owner may grant the permission to named Agency Admins [S52]                                                                      | corrected                                                                             |
| White-labelled sub-accounts cannot be transferred | search-summary claim, unsupported                              | absent from both articles; only the branded-domain note in the eject article                                                                       | closed as unsupported                                                                 |
| Eject outcome                                     | "$97 signup" not recorded; commission not recorded             | new owner invited to the "$97/month plan"; releasing agency gets "40% affiliate commission on all of their future renewals" [S53]                  | new finding; feeds D11 and the exit clause                                            |
| UK representative                                 | "which entity invoices WebAsk" open; no UK contact known       | privacy policy lists Rickert Services Ltd, Peterborough, as the UK address [S40]                                                                   | Art. 27 representative exists on the vendor side; invoicing entity still open         |
| Certified Directory requirement                   | unverified (secondary sources)                                 | paid programme + proctored exam + live subscription; lapses when any ends [S58]                                                                    | resolved                                                                              |
| Snapshot and Voice AI numbers                     | not recorded                                                   | "Assigned phone numbers for Voice AI Agents" do not travel in a snapshot [S148]                                                                    | added to the onboarding and exit checklists                                           |
| DPF listing status                                | "Active – Re-certification under Review" (browser, 2026-09-23) | same status on all three frameworks, "Non-HR Data", one participant returned (browser, 2026-09-24)                                                 | confirmed; monthly re-check (`10` § 2)                                                |

## Sources

`[Sxx]` keys resolve in `10-sources.md`. New in S2: S140–S156.
