# 01 — GoHighLevel product study

> Purpose: what the platform sells, what it costs a UK reseller, where the data sits, and how sub-accounts move. Research window: 24 September 2026 → open.
> Nothing in this folder is implemented. Figures are proposals pending D4 unless marked
> **finding**. Seeded on 24 September 2026 from the planning file (see `README.md` § 2.1):
> every section below is a **hypothesis** until the session named there confirms, amends or
> rejects it with evidence.

## 1. Method (planning § 5.1)

Vendor pages first (App. A and App. B list what was already fetched and when): `gohighlevel.com/pricing`,
`help.gohighlevel.com` for LC Phone/Email/AI rates ("AI Product Pricing" article), sub-accounts,
snapshots, SaaS mode, rebilling incl. fixed-rate AI rebilling's plan requirement, WhatsApp, listings, the
UK Regulatory Compliance bundle and KYC, data residency, DPA, sub-processors, sub-account transfer and
eject; ToS and privacy policy; status page; `dataprivacyframework.gov` list; Stripe UK pricing;
affiliate and certification terms. Playwright where WebFetch is blocked; "blocked our fetch" recorded.
Vendor-only claims are 🟡.

## 2. Platform constraints already found in planning

The regulatory and platform pre-check is tabled in `08-compliance-addendum.md` § 1. Rows 4–6, 11
and 13 there are the platform rows this file re-reads on the vendor pages in S2 — above all the
transfer/white-label conflict and the AI rebilling rule.

## 3. Vendor facts fetched in planning (🟡 vendor-reported unless noted; re-verify in S2)

- **Plans (pricing page, 2026-09-23):** Starter $97/mo ($970/yr) — 3 sub-accounts, unlimited contacts
  and users, all core features · Unlimited $297/mo ($2,970/yr) — unlimited sub-accounts, rebill phone
  and email at cost, basic API · Agency Pro $497/mo ($4,970/yr) — SaaS Mode, automated sub-account
  creation, rebill with markup, user/agent reporting, advanced API · Enterprise custom (HIPAA and
  white-label mobile app included, premium support, CSM).
- **Core features on all plans:** Conversation AI, Voice AI, Content AI, Funnel AI, Reviews AI, website
  & funnel builder, domain management, CRM & pipelines, dashboards & reporting, email + SMS, inbound &
  outbound calling, unified conversations, social media management, workflow automation,
  forms/surveys/quizzes, booking calendars, Ad Manager, online reputation management, prospecting tool,
  payments & invoicing, mobile app, courses, communities, API.
- **Add-ons:** AI Employee Growth $50/mo per sub-account · AI Employee Unlimited $97/mo per sub-account ·
  branded client portal app $49/mo per sub-account · dedicated email IP $59/mo per IP · HighLevel
  Certification Program $97/mo · HIPAA $297/mo · online listings management $30/mo per sub-account ·
  premium prospecting $29/mo per sub-account · premium support $500/mo · SEO (Search Atlas) $79/mo per
  sub-account · WhatsApp $10/mo per sub-account · white-label mobile app $497/mo · WordPress hosting
  from $10/mo per site. Payment providers: Stripe, PayPal, NMI, Authorize.net, Square, Adyen, Razorpay.
- **Homepage product names (2026-09-23):** missed call text-back, call tracking, inbound SMS & social
  DMs, chat widget, appointment reminders, ringless voicemail, lead scoring, estimates & proposals,
  invoicing, text-2-pay, tap-2-pay, gift cards, loyalty programmes, automated review requests,
  affiliate manager, broadcast campaigns (email/SMS/WhatsApp/Messenger), smart lists, newsletter
  automation, QR codes, AI biz card scanner, webinar funnels. Statistics printed there are vendor
  self-reports and are not to be quoted.
- **Hosting / DPA / DPF, KYC, WhatsApp, AI Employee, transfer:** see § 10 rows 4, 5, 6, 11.
- **Affiliate programme (affiliates page and Affiliate Agreement "June 2026", read 2026-09-24):** "40%
  for Single Location Account, Agency Unlimited Account, Agency Pro (SaaS) Account" on direct referrals,
  recurring while the referred subscription stays active; "5%" on second-tier referrals; "90-day window"
  last-click attribution; paid "monthly, typically on the 15th of the month"; $50 USD minimum, unpaid
  balances may be forfeited after 120 days; affiliates must follow the "FTC Endorsement Guides" and may
  not "imply that you are an employee, contractor, or legal representative"; Texas law, Dallas
  arbitration. UK equivalent of the disclosure duty is the CAP Code — an on-page disclosure plus
  `rel="sponsored"` on every affiliate link (D11).
- **Messaging and telephony unit costs:** § 10 row 5 (LC Phone UK file inside the account; Twilio's UK
  list prices as the proxy; WhatsApp billed in USD at 1.05× plus 5%).
- **Transfer / eject, AI pricing, Business Profile eligibility:** § 10 rows 6, 11, 13.
- **Certified Directory:** reached through the paid certification programme; what listing requires is
  unverified (secondary sources only).

## 4. Cost inputs

The USD inputs register is `private/07-cost-model.md` § 1. No cost figure appears in this tracked file.

## 5. Unknowns (open at S1 close)

- UK-destination messaging rates exist only in the LC Phone guide's attached UK pricing file inside
  an account. The founder exports it into `private/` (decision of 24 September 2026, `00` § 6).
- AI rates are shown in-app; no public "AI Product Pricing" article was found by name in planning.
- Whether a white-labelled sub-account can be transferred: neither vendor article read in planning
  contains the rule a search summary claimed — re-read both (`08` § 1 row 11) and record the resolution.
- Any fee on transfer or ejection.
- What listing in the HighLevel Certified Directory requires.

## Sources

`[Sxx]` keys resolve in `10-sources.md`.
