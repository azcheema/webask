# Legal pages: brief for a UK solicitor's review

> Prepared on 1 October 2026 for the founder to hand to a UK solicitor.
> The pages it covers are drafts. Nothing in them is final until you have
> reviewed them and the founder has closed the open items below.
> The open items here have the same numbers as the list in the header of
> `data/copy/legal.ts`, where the page text lives.

---

## 1. What we are asking you to do

Please review four pages of the new WebAsk website and advise on:

1. whether the Privacy Notice meets the right to be informed (UK GDPR Articles
   13 and 14), and whether its EU GDPR wording is right for a business
   established in Sweden;
2. whether the Cookie Policy is accurate and meets PECR as the ICO now reads it;
3. whether the Website Terms are fit for a UK-facing business-to-business site
   run from Sweden;
4. whether the Company Information page meets the trading-disclosure rules; and
5. the open questions in § 4, each of which says what we need back from you.

Please also tell us if anything is missing that a site like this should have.
Questions that turn on Swedish law are marked. If you think they need Swedish
advice rather than yours, please say so.

## 2. The site and who runs it

**Who operates it.** WebAsk is a trading name of Naxdor, an enskild firma (a
Swedish sole proprietorship) run by Ansar Cheema. The registered address is in
Halmstad, Sweden. There is no UK company, no Companies House number and no UK
office, branch or other establishment. The business is fully remote.

**What it sells.** Web design and development, SEO, CRM set-up and automation,
and related digital services to UK small businesses, with a focus on aesthetic
clinics, dental practices and beauty and wellness clinics. Services are supplied
to businesses only. Published prices are starting prices in pounds, shown
"excl. VAT". Platform usage, such as texts, calls or AI, is never included and
is billed on top at cost. A written proposal or contract governs every
engagement.

**Where it stands.** The new site has not yet replaced the old WordPress site at
webask.co.uk. WebAsk has no clients yet. The Privacy Notice, Website Terms and
Cookie Policy are published as drafts: they are not indexed by search engines,
and each carries a visible "working draft" notice. The Company Information page
is live and states facts only.

**How personal data reaches the business.**

| Route                                   | What is collected                                                                                                                                                                                                                                                                          | Who handles it                                                                           |
| --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------- |
| Contact form                            | Name, email, service, budget band, timeline and message (required); company and country (optional). A hidden anti-spam field is discarded.                                                                                                                                                 | Resend emails the enquiry to the business mailbox and sends the enquirer a confirmation. |
| Email                                   | Whatever the sender writes.                                                                                                                                                                                                                                                                | The business mailbox. **The mailbox provider is not yet chosen** (open item 4).          |
| Phone and WhatsApp                      | The published UK mobile number takes calls and WhatsApp messages.                                                                                                                                                                                                                          | WhatsApp, under its own terms (open item 7).                                             |
| Free audit                              | The web address of the business's site. Ansar Cheema reviews its public pages and records a narrated walkthrough on Loom, with a one-page summary. One follow-up at most; no mailing list. A "rules check" for clinics reports what a site shows or leaves out and gives no legal verdict. | Loom (Atlassian).                                                                        |
| Discovery calls                         | Contact details and any notes.                                                                                                                                                                                                                                                             | By phone, WhatsApp or video. **The video service is not named** (open item 5).           |
| Browsing                                | Request logs; cookieless traffic and speed measurement for every visitor.                                                                                                                                                                                                                  | Vercel (hosting).                                                                        |
| Browsing, after consent                 | Google Analytics 4, loaded only after the visitor accepts on an equal-choice banner. Microsoft Clarity was dropped before launch (open item 10).                                                                                                                                           | Google (processor).                                                                      |
| Browser storage                         | Two local-storage entries, written only when the visitor acts: the chosen colour theme, and the cookie choice.                                                                                                                                                                             | Stays in the browser.                                                                    |
| Client records (once there are clients) | Contact, billing, correspondence and project files.                                                                                                                                                                                                                                        | The business, its mailbox and its accounting records.                                    |

There is no CRM and no mailing list.

## 3. The four documents

All four are rendered from one source file, `data/copy/legal.ts`, and appear at
these paths on the site:

| Page                | Path                         | Status | What it covers                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ------------------- | ---------------------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Privacy Notice      | `/legal/privacy`             | Draft  | The controller; which laws apply; the Article 27 position; data given, collected and received from other sources; each purpose with its lawful basis and the legitimate interest relied on; the right to object, in its own section; marketing; processors and other recipients; international transfers, provider by provider; retention per category; rights and how to use them; complaints to the business, the ICO and IMY; whether data must be provided; automated decisions; data handled for clients as processor; security; children; changes. |
| Cookie Policy       | `/legal/cookies`             | Draft  | The two local-storage entries; the Google Analytics cookies as Google lists them; why consent is asked despite the statistical-purposes exception; Vercel's cookieless measurement; how to change a choice, and one stated limitation.                                                                                                                                                                                                                                                                                                                   |
| Website Terms       | `/legal/terms`               | Draft  | Who we are; use of the site; services, prices, VAT and usage; guides are not advice; the free audit; intellectual property; acceptable use; links; the site provided as it is; liability; indemnity; personal data; severability; governing law; changes.                                                                                                                                                                                                                                                                                                |
| Company Information | `/legal/company-information` | Live   | The trading name and legal entity; the Swedish registered address; no UK office; contact details; the relationship with Naxdor; a complaints route.                                                                                                                                                                                                                                                                                                                                                                                                      |

The drafts contain four bracketed placeholders for facts the founder has not yet
supplied. They are meant to be visible, so that a draft cannot pass for a
finished page.

## 4. Open questions

Items 1 to 10 are facts the founder must supply, with points where your view is
needed; the founder resolved items 9 and 10 on 1 October 2026, and they are kept
here for the record. Items 11 to 16 are questions for you. Item 17 is a note for
the founder. Each says where the draft stands now.

### Founder facts, with points for you

**1. Article 27 UK representative (decision gate D3).** The business has no UK
establishment and offers services to people in the UK, so Article 3(2)(a) UK
GDPR appears to apply, and Article 27(1) then requires a written designation of
a UK representative unless the Article 27(2)(a) exemption applies. The draft
says no representative has been designated, that the question is under review,
and that the business email address is the contact point until then. _We need:_
your view on whether the exemption can apply to this business, and if not, how
to designate. Please also advise on the ICO data protection fee: our research
suggests it may not apply without a UK establishment, and the two questions turn
on the same facts.

**2. Naming the controller.** For an enskild firma the owner runs the business
as a private individual and is personally liable (verksamt.se). The draft names
the controller as "Ansar Cheema, trading as Naxdor and as WebAsk". _We need:_
confirmation that this is the right way to identify the controller in a UK and
EU privacy notice.

**3. Which laws apply, and the UK regulator's name.** The draft says the EU GDPR
applies because the business is established in Sweden (Article 3(1)), with IMY
as the Swedish supervisory authority, and that the UK GDPR and the Data
Protection Act 2018 apply to the data of people in the UK. It says the business
"follows" PECR for people in the UK, rather than asserting that PECR applies to
a controller established outside the UK. Since 30 September 2026 the Information
Commissioner has been replaced by the Information Commission (S.I. 2026/1015),
which says it "will continue to be known as the ICO"; the draft names "the
Information Commission, known as the ICO". _We need:_ your view on all three
points, and whether Sweden's supplementary data protection act or Swedish rules
on cookies should also be named (a Swedish-law point).

**4. Business mailbox provider — placeholder.** Not chosen yet. The Privacy
Notice lists it as a processor, with a bracketed placeholder in the recipients
and transfers sections. The founder must name it, where it stores data and its
transfer safeguard before the notice is published.

**5. Video-call service — placeholder.** If discovery calls are held by video,
the service must be named; otherwise the reference will be removed.

**6. Call recording.** The draft says nothing about recording calls. The founder
must confirm that calls are not recorded; if any are, the notice must say so.

**7. WhatsApp.** The draft says WhatsApp applies its own terms and privacy
policy. If the founder uses the WhatsApp Business app, its terms (effective 23
September 2026) make WhatsApp the business's processor, and a business in the
EEA contracts with WhatsApp Ireland Limited. The founder must say which app is
used, and the entry will be changed to match.

**8. Retention.** The draft gives a period for each category:

- an enquiry that does not lead to work: 12 months after the last exchange,
  then deleted (confirmed by the founder, 1 October 2026). It is applied to the
  mailbox, WhatsApp, phone notes and the Loom recording;
- accounting records: until the end of the seventh year after the end of the
  calendar year in which the financial year ended (Bokföringslagen, chapter 7,
  section 2);
- other client records: **placeholder**. For reference, the limitation period
  for an action on a simple contract in England and Wales is six years
  (Limitation Act 1980, s.5), and the general Swedish limitation period for a
  claim is ten years (preskriptionslag 1981:130, 2 §);
- Google Analytics user-level data: **placeholder** for the account setting (2
  or 14 months);
- Vercel logs and Vercel measurement: the provider's own stated periods.

_We need:_ your view on the client-records period, and on whether "12 months
after our last exchange" is defensible. A related Swedish point for the founder
and an accountant: chapter 7, section 2 also requires accounting records to be
kept in Sweden, and section 3 a allows storage in another EU country on notice
to Skatteverket. That bears on which email and accounting tools are used.

**9. Vercel plan — resolved.** Vercel's data processing addendum applies to its
Pro and Enterprise plans only, and its Hobby plan is for non-commercial, personal
use. The draft's one-day log retention is the Pro figure. The founder confirmed on
1 October 2026 that the site will launch on the Pro plan. Nothing is needed from
you.

**10. Microsoft Clarity — resolved.** The founder dropped Clarity before launch
on 1 October 2026. Its loader and every Clarity passage in the Privacy Notice and
the Cookie Policy have been removed, so the four points this item raised no
longer arise: Microsoft acting as an independent controller that may use the data
for advertising, the link its terms require to the Microsoft Privacy Statement,
the records of consent its terms ask for, and the consent signal the site did not
send. Google Analytics 4 is now the only tool that loads after consent. Nothing
is needed from you.

### Questions for you

**11. Cookieless measurement without consent.** Vercel Web Analytics and Speed
Insights run for every visitor, before and without any cookie choice. Vercel
says they set no cookies and that the data points are anonymous; Web Analytics
identifies a visit by a hash of the request, discarded after 24 hours. The
draft describes this and makes no claim about whether consent is needed. _We
need:_ your view on whether PECR regulation 6 is engaged by these scripts, and
if so whether an exception applies. The statistical-purposes and appearance
exceptions both require a simple, free means of objecting, which the site does
not offer.

**12. The free-audit follow-up.** The free-audit page promises one follow-up at
most. The draft treats it as a legitimate-interests follow-up about the audit
and lets the visitor refuse it. _We need:_ your view on whether PECR regulation
22 applies where the requester is a sole trader or uses a personal email
address, and whether the wording is right.

**13. Governing law of the Website Terms.** The draft keeps Swedish law and the
Swedish courts, because the operating entity is established in Sweden, with a
carve-out preserving a UK consumer's mandatory protections and home courts. A
code comment marks the section as a question for you. _We need:_ your view on
whether Swedish law, English law or no choice of law suits UK-facing website
terms, and whether the carve-out is correctly framed.

**14. VAT wording (decision gate D2).** The site says prices "exclude VAT" and
that "a UK business customer accounts for any VAT under the reverse charge, so
none is added to our invoices". This follows the B2B general rule in HMRC's VAT
Notice 741A. The position was adopted without confirmation from HMRC,
Skatteverket or an accountant. _We need:_ your view on whether the wording is
accurate and safe, including for a UK business customer that is not registered
for VAT, or say that it needs an accountant.

**15. Trading disclosures.** Regulation 6(1) of the Electronic Commerce (EC
Directive) Regulations 2002 asks for the provider's name, geographic address and
email address, which the Company Information page gives. It also asks for (d)
trade-register details and number, where the provider is registered in a public
register, and (g) the VAT identification number, where the activity is subject
to VAT. The founder has chosen not to publish the Swedish organisation number
(which, for an enskild firma, is derived from the owner's personal identity
number) or the VAT number. _We need:_ your view on whether regulation 6(1)(d)
or (g), or the Provision of Services Regulations 2009, require either to be
shown, and whether regulation 6(2) is met by showing prices "excl. VAT".

**16. Client terms and a data processing agreement.** There are no client-facing
terms of business yet. Some planned services are hosted plans in which WebAsk
would run systems, such as booking, review or messaging tools, that hold a
client's own customers' data. WebAsk would then act as the client's processor,
and UK GDPR Article 28(3) and (9) would require a written contract between them. The Privacy Notice
covers this in one short section and says the client's notice applies. _We
need:_ your advice on terms of business and a data processing agreement before
the first engagement.

**17. Loose ends outside these pages.** An unused site-wide string still says
"business day" where the pages now say "working day". This is for the founder,
not you. The in-person meeting promise noted here earlier has been removed from
the contact page and the home page (founder, 1 October 2026): the business is
fully remote and does not offer in-person meetings.

## 5. Primary sources relied on

Read on 1 October 2026 unless another date is given. Where a page shows its own
date, it is given in brackets.

**UK legislation (legislation.gov.uk)**

- UK GDPR Articles 3, 6, 12, 13, 14, 21, 27, 28 and 45A (up to date to 30
  September 2026): <https://www.legislation.gov.uk/eur/2016/679/article/27> (and the same
  address with each article number)
- Data Protection Act 2018, s.164A (complaints to controllers, in force 19 June
  2026): <https://www.legislation.gov.uk/ukpga/2018/12/section/164A>
- Data Protection Act 2018, Sch. 21 paras 4 and 5 (EEA transfers treated as
  approved): <https://www.legislation.gov.uk/ukpga/2018/12/schedule/21/paragraph/4>
- Data Protection (Adequacy) (United States of America) Regulations 2023, S.I.
  2023/1028, regs. 2 and 3:
  <https://www.legislation.gov.uk/uksi/2023/1028/regulation/3>
- Data (Use and Access) Act 2025 (Commencement No. 9 and Transitional and Saving
  Provisions) Regulations 2026, S.I. 2026/1015 (made 10 September 2026):
  <https://www.legislation.gov.uk/uksi/2026/1015/made>
- Electronic Commerce (EC Directive) Regulations 2002, reg. 6:
  <https://www.legislation.gov.uk/uksi/2002/2013/regulation/6>
- Limitation Act 1980, s.5: <https://www.legislation.gov.uk/ukpga/1980/58/section/5>
- PECR Schedule A1 (the exceptions, inserted 5 February 2026), read 28–29
  September 2026 and recorded in `docs/03-uk-compliance.md` § A4:
  <https://www.legislation.gov.uk/uksi/2003/2426/schedule/A1>

**EU**

- EU GDPR, Articles 3(1), 21(4), 27(1) and 77(1), EUR-Lex:
  <https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679>
- European Commission, adequacy decisions (the United States, for organisations
  in the EU–US Data Privacy Framework, decision of 10 July 2023):
  <https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection/adequacy-decisions_en>

**ICO (ico.org.uk)**

- ICO governance changes confirmed for 30 September 2026 (15 September 2026,
  updated 17 September 2026):
  <https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/09/ico-governance-changes-confirmed-for-30-september-2026/>
- New data protection complaints law now in force (23 June 2026):
  <https://ico.org.uk/about-the-ico/media-centre/news-and-blogs/2026/06/new-data-protection-complaints-law-now-in-force/>
- How to make a data protection complaint to an organisation (29 June 2026):
  <https://ico.org.uk/for-the-public/how-to-make-a-data-protection-complaint/>
- What should we consider when responding to a request? (8 December 2025):
  <https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/right-of-access/what-should-we-consider-when-responding-to-a-request/>
- What are the exceptions? (storage and access guidance, last updated 29 April
  2026):
  <https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/what-are-the-exceptions/>
- Make a complaint: <https://ico.org.uk/make-a-complaint/>. The ICO's helpline
  number could not be read from its contact page, so the draft gives none.

**Sweden**

- IMY, About us (29 May 2026): <https://www.imy.se/en/about-us/>
- IMY, Complain about incorrect processing of your personal data (16 March
  2026): <https://www.imy.se/en/individuals/forms-and-e-services/file-a-gdpr-complaint/>
- Bokföringslag (1999:1078), 2 kap. 6 § and 7 kap. 2 §, 3 a § (text up to SFS
  2024:342), riksdagen.se:
  <https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/bokforingslag-19991078_sfs-1999-1078/>
- Preskriptionslag (1981:130), 2 § (text up to SFS 2022:976), riksdagen.se:
  <https://www.riksdagen.se/sv/dokument-och-lagar/dokument/svensk-forfattningssamling/preskriptionslag-1981130_sfs-1981-130/>
- verksamt.se, Set up and register as a sole trader (29 September 2026):
  <https://verksamt.se/en/setting-up/choose-business-type/sole-trader>

**GOV.UK**

- VAT place of supply of services (VAT Notice 741A) (updated 29 September 2022):
  <https://www.gov.uk/guidance/vat-place-of-supply-of-services-notice-741a>

**Providers**

- Data Privacy Framework List, searched for each provider:
  <https://www.dataprivacyframework.gov/list>. Vercel Inc., Google LLC and
  Atlassian, Inc. were "Active" for the EU–US DPF and the UK Extension; Resend
  was "Active - Re-certification under Review"; WhatsApp LLC was listed for the EU–US and Swiss–US frameworks, without the UK
  Extension.
- Resend, Data Processing Addendum (2025-12-31): <https://resend.com/legal/dpa>
- Vercel, Data Processing Addendum (last updated 17 March 2026, effective 31
  March 2026): <https://vercel.com/legal/dpa>
- Vercel, Web Analytics privacy and compliance (26 June 2026):
  <https://vercel.com/docs/analytics/privacy-policy>
- Vercel, Speed Insights privacy and compliance (18 March 2026):
  <https://vercel.com/docs/speed-insights/privacy-policy>
- Vercel, Runtime Logs (28 August 2026): <https://vercel.com/docs/logs/runtime>
- Vercel, Hobby plan (14 September 2026): <https://vercel.com/docs/plans/hobby>
- Google Ads Data Processing Terms (effective 30 May 2024):
  <https://business.safety.google/adsprocessorterms/>
- Google, processor services list (23 October 2025):
  <https://business.safety.google/adsservices/>
- Google, data transfer frameworks (9 September 2024):
  <https://business.safety.google/adsdatatransfers/>
- Google Analytics Terms of Service (last modified 11 January 2024):
  <https://marketingplatform.google.com/about/analytics/terms/gb/>
- Google Analytics Help: cookie usage on websites
  <https://support.google.com/analytics/answer/11397207>; EU, Switzerland or
  UK-focused data and privacy <https://support.google.com/analytics/answer/12017362>;
  data retention <https://support.google.com/analytics/answer/7667196> (undated)
- Atlassian privacy policy and data processing addendum (both effective 17
  August 2026): <https://www.atlassian.com/legal/privacy-policy>,
  <https://www.atlassian.com/legal/data-processing-addendum>
- WhatsApp Business App terms (effective 23 September 2026):
  <https://www.whatsapp.com/legal/WhatsApp-Terms-for-WhatsApp-Business-App>
- WhatsApp privacy policy, EEA version (effective 2 July 2026):
  <https://www.whatsapp.com/legal/privacy-policy-eea>

**How the sources were read.** The legislation, EUR-Lex, riksdagen.se, the ICO
pages on exceptions and governance, and S.I. 2026/1015 were checked against the
raw page text. The provider pages (Vercel, Resend,
Atlassian, Google Help, WhatsApp) and some ICO and IMY pages were read through a
tool that summarises a page, so their quotations should be confirmed against the
pages before you rely on them.

## 6. Outside this review

- The accuracy of the compliance guides in the blog. Each already says it is not
  legal advice, and the Website Terms now say so for all of them.
- Client contracts and the data processing agreement (open item 16), except to
  tell us they are needed.
- Tax registration generally. Item 14 asks only about the wording on the site.
