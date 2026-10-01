# Launch checklist — webask.co.uk

> Written 1 October 2026 for the founder, who does the account and DNS work. Claude does
> the repo work around it and can run every scripted check if you give it the URL (and,
> before cutover, the bypass secret).
>
> **Status:** nothing done yet. The site is not live. Tick boxes here as you go and tell
> Claude, so [`06-build-plan.md`](06-build-plan.md) § Phase 1 and CLAUDE.md follow.
>
> Provider steps were checked against each provider's own documentation on 1 October 2026
> (sources at the end). Dashboards move: if a menu path has changed, search the dashboard
> for the setting's name.

---

## What the domain looks like today

Read from public DNS and WHOIS on 1 October 2026.

| What                 | Today                                                                                                                      |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Registrar            | **Namecheap**. Registered 5 September 2021, **expires 5 September 2027**                                                   |
| DNS host             | **Cloudflare** (`audrey.ns.cloudflare.com`, `miguel.ns.cloudflare.com`). Every record below is edited there                |
| Website              | WordPress on **SiteGround**, behind Cloudflare's proxy (orange cloud). `www` 301s to the bare domain                       |
| Inbound email        | MX → `mx10/20/30.antispam.mailspamprotection.com`, the SiteGround anti-spam servers. **Mail to @webask.co.uk lands there** |
| SPF (root)           | `v=spf1 +a +mx include:webask.co.uk.spf.auto.dnssmarthost.net ~all` (SiteGround's)                                         |
| Search Console       | A `google-site-verification=kvpn-…` TXT record exists, so **someone has at least started verifying the domain**            |
| DMARC · CAA · DNSSEC | None of the three. No CAA record means nothing stops Vercel issuing a certificate                                          |
| TTL                  | 300 seconds on the website records, so resolvers holding the old answer drop it within about five minutes                  |

Three things follow from that table, and they set the order of everything below:

1. **Cancelling SiteGround stops email to @webask.co.uk**, not just the old website. Email
   has to move first, or SiteGround has to stay on for email alone.
2. The domain is **not** registered at SiteGround, so cancelling the hosting does not take
   the domain with it.
3. The website records are proxied today. **The new ones must be "DNS only"** (step E2).

> ⚠️ WHOIS also says: "Nominet was not able to match the registrant's name and/or address
> against a 3rd party source on 28-Jul-2026." Check the Namecheap account for any Nominet
> request about the registrant details, and answer it before launch.

---

## The order, and the two rules that matter

**A** decide → **B** Vercel project → **C** email and analytics → **D** test on Vercel →
**E** cutover → **F** search engines → **G** retire SiteGround.

- **Rule 1: DNS moves before WordPress comes down.** The 13 URLs in the old sitemap all
  answered 200 at the 28 July 2026 crawl (doc 04 § 5), and the 301 map only works once
  `webask.co.uk` points at Vercel. Removing WordPress first would turn every one of them
  into an error until launch.
- **Rule 2: SiteGround is cancelled last** (step G). It receives the domain's email, and
  until step E it is the rollback.

Steps A to D change nothing visitors see. The public switch is step E2.

---

## A. Decisions first (founder)

- [ ] **A1. Choose the mailbox provider.** `info@webask.co.uk` is printed on every page and
      receives every lead notification, so it has to be a real, monitored mailbox before
      launch. Look in SiteGround first (Site Tools → Email → Accounts): mail to
      @webask.co.uk is delivered there today, so any mailbox it already holds may contain
      mail worth keeping before step G. Whichever provider you pick, it gives you MX
      records, one SPF include and a DKIM record (step C1). If you keep SiteGround for
      email, step G shrinks to removing the website only.
      **Tell Claude the provider's name** — it fills the privacy notice placeholder
      `TBC_EMAIL_PROVIDER` (open item 4 in [`legal/review-brief.md`](legal/review-brief.md)).

- [ ] **A2. Confirm the two form addresses.** Recommended:

  | Variable               | Value                         | Why                                                                                                                                                                                                                                         |
  | ---------------------- | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `CONTACT_NOTIFY_EMAIL` | `info@webask.co.uk`           | The published address and the real mailbox. Lead notifications go here, with Reply-To set to the enquirer                                                                                                                                   |
  | `CONTACT_FROM_EMAIL`   | `WebAsk <hello@webask.co.uk>` | Sender of both emails. Must differ from the notify address: a message sent from and to the same address can be greylisted by inbound spam filters (the lesson the fork's README records). Make `hello@` an **alias** of the `info@` mailbox |

  The autoresponder's Reply-To is the notify address, so a prospect who replies reaches
  `info@` whatever the sender is. The alias only catches someone who types `hello@` by
  hand.

- [ ] **A3. Decide how the legal pages launch.** Privacy, terms and cookies are
      `draft: true`: they render, carry `noindex`, and show a "Working draft" box that says
      the document "may be updated before launch". They still contain **four placeholders**
      in square brackets. This checklist answers two of them (A1 the mailbox provider, C4
      the GA4 retention period); the video-call service and the client-records period are
      yours. Two options:

  1.  Wait for the solicitor's review before step E.
  2.  Launch with the drafts, after Claude fills all four placeholders and rewords the
      "before launch" box. One small PR.

  **Recommended: at minimum, option 2's placeholder fill before step E.** A privacy notice
  with "[to be confirmed]" in it is the page a careful buyer reads. The `draft` flags only
  ever change on your word.

---

## B. Vercel project (nothing public changes)

- [ ] **B1. Create the project.** In the Pro team: Add New → Project → import
      `azcheema/webask`. The framework preset detects Next.js; leave the build and install
      commands alone.

- [ ] **B2. Set the environment variables before the first deploy** (Settings →
      Environment Variables). `NEXT_PUBLIC_*` values are baked in at build time, so changing
      one later needs a redeploy.

  | Variable                       | Production                                  | Preview                | Why                                                                                                                                                                      |
  | ------------------------------ | ------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | `ENABLE_EXPERIMENTAL_COREPACK` | `1`                                         | `1`                    | Makes Vercel use the pnpm `11.3.0` pinned in `package.json`, which CI builds with. Without it Vercel picks pnpm 9 or 10 from the lockfile                                |
  | `NEXT_PUBLIC_SITE_URL`         | `https://webask.co.uk`                      | `https://webask.co.uk` | Canonicals, sitemap, Open Graph, JSON-LD. **Unset, it defaults to `http://localhost:3000`.** Previews still serve on `*.vercel.app`, and Vercel marks previews `noindex` |
  | `NEXT_PUBLIC_GA_ID`            | `G-…` from step C4                          | _leave unset_          | Keeps test traffic out of GA4. With no ID there is nothing to consent to, so previews show no banner — by design                                                         |
  | `RESEND_API_KEY`               | `re_…` from step C2 (mark it **Sensitive**) | _leave unset_          | Unset, the form logs and shows its success message without sending — so previews never email anyone                                                                      |
  | `CONTACT_FROM_EMAIL`           | `WebAsk <hello@webask.co.uk>`               | _leave unset_          | From A2                                                                                                                                                                  |
  | `CONTACT_NOTIFY_EMAIL`         | `info@webask.co.uk`                         | _leave unset_          | From A2                                                                                                                                                                  |

  **Never set:** `NEXT_PUBLIC_CLARITY_ID` (Clarity was dropped on 1 October 2026 and the
  code no longer reads it), and `COMPANY_ORG_NUMBER` / `COMPANY_VAT_NUMBER` (they must
  never render; they live in your `.env.local` only).

- [ ] **B3. Node.js version:** Settings → Build and Deployment → **24.x**. It is Vercel's
      default and matches `.nvmrc`.

- [ ] **B4. Turn on Web Analytics and Speed Insights** (each has an Enable button in the
      project). Vercel adds their routes **on the next deployment**, so enable both before
      the first deploy, or redeploy afterwards. The code already mounts both, and the cookie
      policy already describes them.

- [ ] **B5. Deployment Protection.** Leave **Standard Protection** on: it protects
      previews and deployment URLs, and production domains stay public. Then, on the same
      settings page, create a **Protection Bypass for Automation** secret named
      "Playwright". Keep it in your password manager; step D1 uses it.

- [ ] **B6. Deploy and read the build log.** It should show pnpm 11.3.0 and Node 24, and
      end green. Settings → Domains lists the project's production address,
      `<project>.vercel.app`. Step D tests on it.

---

## C. Email and analytics (no record here touches the website)

- [ ] **C1. Mailbox DNS** (from A1), in Cloudflare. First create `info@` at the provider,
      with `hello@` and `dmarc@` (step C3) as aliases. Then, in one sitting:
  - **MX.** If the mail is leaving SiteGround, **delete the three
    `mailspamprotection.com` MX records** and add the provider's. Adding without deleting
    leaves SiteGround in the delivery list: some mail lands there instead of the new
    mailbox, and once step G cancels SiteGround, mail sent its way can bounce. Keeping
    SiteGround for email: leave the MX records alone.
  - **DKIM.** Add the provider's DKIM record or records (some providers give one TXT,
    others two CNAMEs). Cloudflare's form defaults a new CNAME to Proxied: set it to
    **DNS only**, or DKIM fails.
  - **SPF.** **Replace** the root SPF record rather than adding a second one: a hostname
    can have only one `v=spf1` record. If the mail leaves SiteGround, drop its include.
    Either way, drop the `+a`: it authorises whatever the website's A record points at to
    send mail as webask.co.uk, and after step E that is Vercel.

  Done when a test email from your personal account to `info@` and to `hello@` both
  arrive, and your reply from `info@` arrives back.

- [ ] **C2. Resend domain.** Add `webask.co.uk`.
  - **Region: Ireland (`eu-west-1`)**, the closest to UK recipients. Resend says the region
    "controls where your emails are routed and sent from. It does not control where customer
    data is stored": "All account data, including email metadata, logs, and API records, is
    stored in the United States regardless of the sending region you select." So the
    privacy notice's "Resend (United States)" stays accurate. Changing region later means
    deleting and re-adding the domain with new DNS records.
  - **Records.** Resend shows the exact values. Its "Sign in to Cloudflare" button can add
    them for you:

    | Type | Name                | Value                                                | Notes                           |
    | ---- | ------------------- | ---------------------------------------------------- | ------------------------------- |
    | MX   | `send`              | `feedback-smtp.eu-west-1.amazonses.com`, priority 10 | Return path for bounces         |
    | TXT  | `send`              | `v=spf1 include:amazonses.com ~all`                  | SPF for the `send` subdomain    |
    | TXT  | `resend._domainkey` | `p=…` (from Resend)                                  | DKIM. Proxy status **DNS only** |

    These live on `send.` and `resend._domainkey.`, so they cannot collide with the
    mailbox's root MX and SPF. Skip the optional `inbound` MX: the site does not receive
    mail through Resend.

  - **Open and click tracking: leave both off** (Resend's default). Open tracking inserts a
    1×1 pixel in each email. The autoresponder goes to prospects, and the privacy notice
    describes no tracking in it.
  - **API key:** "Sending access", restricted to `webask.co.uk`. Paste it into Vercel as
    the Production `RESEND_API_KEY` (step B2).

- [ ] **C3. DMARC.** One TXT record at `_dmarc`:
      `v=DMARC1; p=none; rua=mailto:dmarc@webask.co.uk`, with `dmarc@` as another alias of
      the mailbox. `p=none` only reports. Tighten it later, once the reports show both
      senders, Resend and the mailbox, passing.

- [ ] **C4. GA4 property.** Create the account and property: name WebAsk, time zone United
      Kingdom, currency GBP. Add a Web data stream for `https://webask.co.uk`; its
      Measurement ID (`G-…`) goes into Vercel Production (step B2), followed by a redeploy.
      The settings below are the ones the privacy notice already describes, so they have
      to match:
  - **Data retention** (Admin → Data collection and modification → Data retention):
    2 months or 14 months. GA4 starts at 2 months. It limits explorations and funnel
    reports, not the standard reports. **Tell Claude which you chose:** it fills
    `TBC_GA_RETENTION`.
  - **Data sharing** (Admin → Account → Account details): **turn off "Google products &
    services".** Google's own help page says that with it on, "Google is, for GDPR
    purposes, a controller of the data that is shared". The privacy notice says Google
    acts as our processor. Recommended: the other three off as well. Technical support
    can be switched on temporarily if you ever need Google to look at the account.
  - **Data processing terms:** Google says amendments "for new accounts are automatically
    accepted". Check that Account details shows them.
  - **Google signals:** leave off. The notice does not describe it.
  - **Enhanced measurement** (on the web stream). Under Page views → advanced settings,
    **untick "Page changes based on browser history events"** if it is ticked. The site
    already sends its own `page_view` on every in-site navigation
    (`components/analytics/trackers.tsx`), so leaving it on counts each one twice. Then
    note which other events are switched on and tell Claude, so the notice's list of what
    GA4 collects matches.

---

## D. Test on Vercel before the website's DNS changes

Use the production address from B6 (`https://<project>.vercel.app`) once C1 to C4 are in
and Production has been redeployed.

- [ ] **D1. The redirect map, on Vercel's engine.** Vercel runs redirects at its edge, not
      inside the Next server, so a local pass is necessary but not sufficient
      ([`04-information-architecture.md`](04-information-architecture.md) § 5). In
      PowerShell, in `d:\WebAsk`:

  ```powershell
  $env:PLAYWRIGHT_BASE_URL = 'https://<project>.vercel.app'
  $env:VERCEL_AUTOMATION_BYPASS_SECRET = '<the secret from B5>'
  corepack pnpm exec playwright test e2e/redirects.spec.ts
  ```

  Expect **55 passed** (the count on 1 October 2026; it grows with the map). The run
  includes the check that `/` answers 200 with no redirect, the old homepage-loop trap.
  Close the window afterwards, or remove both variables, before running local tests:
  while `PLAYWRIGHT_BASE_URL` is set, every spec targets that URL. Or give Claude the URL
  and the secret and it runs this for you.

- [ ] **D2. The consent check** (doc 03 § A4; the last open box in the Phase 1 consent
      task). Open a private window, then DevTools **before** loading the page: Network tab
      with "Preserve log" ticked, and Application → Cookies.

  | Action                                                            | Expected                                                                                                                                                                                                                                                                                                      |
  | ----------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | Load the home page, choose nothing                                | Banner shows. **No request to `googletagmanager.com` or `google-analytics.com`. No `_ga` cookie.** Same-site requests from Vercel Web Analytics and Speed Insights are expected: cookieless, and described in the cookie policy                                                                               |
  | Click **Reject analytics**, reload, visit two more pages          | Still nothing from Google. Local storage `webask:analytics-consent` = `denied`                                                                                                                                                                                                                                |
  | Clear site data, reload, click **Accept analytics**               | `gtag/js` loads from `googletagmanager.com`, collection requests go to `google-analytics.com`, cookies `_ga` and `_ga_<ID>` appear. GA4 → Reports → Realtime shows you                                                                                                                                        |
  | Footer **Cookie settings** → Reject, then click to two more pages | **The page reloads**, and from then on nothing from Google. gtag.js cannot be unloaded from a running page, so withdrawing consent reloads it away (PR #50, merged 1 October 2026). Cookies already set stay until they expire — a known limitation, recorded in `components/analytics/analytics-scripts.tsx` |

  If you are signed in to Vercel, a `_vercel_jwt` cookie can appear. That is Vercel's
  sign-in for protected URLs, not the site. Note the date and URL of the pass for Claude.

- [ ] **D3. The contact form, end to end.** Submit the form with your personal email.
  - `info@` receives **"New enquiry — <name> (<service>)"**, and replying goes to your
    personal address.
  - Your personal inbox receives **"Thanks for reaching out to WebAsk"** from
    `WebAsk <hello@webask.co.uk>`, and replying goes to `info@`.
  - In the received message's headers (Gmail: ⋮ → Show original), **SPF, DKIM and DMARC
    all say PASS**.
  - Resend → Emails lists both as delivered.

- [ ] **D4. Claude's pre-flight.** Ask Claude to run the brand-leak grep (`Naxdor` across
      `app/`, `components/`, `content/`, `data/`, `emails/` and `lib/`, each hit either the
      deliberate group disclosure or a code comment), the full local gate set, and the A3
      changes if you chose option 2.

- [ ] **D5. Search Console baseline.** Do F1's first bullet now: it only adds a TXT record,
      so it is safe before cutover. Then export whatever Performance data and page counts
      the property shows. They are the "before" picture
      ([`05-seo-strategy-uk.md`](05-seo-strategy-uk.md) § 5).

---

## E. Cutover

- [ ] **E1. Add the domains in Vercel** (Settings → Domains → Add Domain):
      `webask.co.uk`, and accept the prompt to add `www.webask.co.uk`. Set **`www` to
      redirect to `webask.co.uk`, permanent (308)**. Vercel's prompt favours `www` as the
      main domain; WebAsk uses the bare domain because every canonical, the sitemap and
      the JSON-LD already do.

- [ ] **E2. Point the DNS at Vercel** (Cloudflare → DNS → Records). First write down the
      current values of the `webask.co.uk` and `www` records: they are the rollback.
  - `webask.co.uk`: delete the A records pointing at SiteGround, and any AAAA. Add one
    **A** record with the value Vercel's domain card shows (project-specific, or
    `76.76.21.21`).
  - `www`: replace with a **CNAME** to the value Vercel shows (project-specific, in the
    form `<hash>.vercel-dns-0NN.com`).
  - **Proxy status: DNS only (grey cloud) on both.** Vercel advises against running
    Cloudflare's proxy in front of it: its firewall and bot protection lose sight of the
    traffic. A proxied Cloudflare can also set cookies of its own when its bot features
    are on, and the cookie policy lists none.
  - Leave every MX and TXT record alone.

- [ ] **E3. Wait for Vercel** to show a valid configuration and a certificate for both
      domains. Then check by hand: `https://webask.co.uk` serves the new site, and
      `https://www.webask.co.uk/about` lands on `https://webask.co.uk/about`.

- [ ] **E4. Re-run D1 against production.** No secret needed: production domains are
      public.

  ```powershell
  $env:PLAYWRIGHT_BASE_URL = 'https://webask.co.uk'
  corepack pnpm exec playwright test e2e/redirects.spec.ts
  ```

  This is the "scripted, not spot-checked" acceptance in doc 06: all legacy URLs answer
  200 or 410 as specified.

- [ ] **E5. Repeat the first row of D2** on `https://webask.co.uk` in a fresh private
      window: nothing from Google before Accept.

**Rollback.** If something is badly wrong, put the two values from E2 back (proxied, as
before). WordPress is still running, because step G has not happened.

From this point the fabricated WordPress content no longer answers on the domain, which
closes the first Phase 1 task in doc 06.

---

## F. Search engines (launch day, then the first week)

- [ ] **F1. Google Search Console.** Sign in with the Google account that should own the
      property.
  - If `webask.co.uk` already appears as a property, open Settings → Ownership
    verification. If it shows you verified by DNS record, the existing token is yours.
    If not, add a Domain property and put its new TXT value **alongside** the existing
    one. Do not delete the old token until you know whose it is: removing a
    token unverifies only that owner.
  - Sitemaps: submit `https://webask.co.uk/sitemap.xml`. If the old `sitemap_index.xml`
    or its child sitemaps are listed, remove them; they now redirect to `/sitemap.xml`.
  - URL Inspection → Request indexing for the home page, `/services`, `/about` and
    `/contact`.

- [ ] **F2. Bing Webmaster Tools.** My Sites → Import → sign in with the same Google
      account → choose `webask.co.uk`. Bing imports the verification and the sitemaps, and
      re-checks ownership through Search Console from then on.

- [ ] **F3. Rich Results Test** on the home page, one service page and one industry page:
      the JSON-LD should validate (doc 06 Phase 1 acceptance).

- [ ] **F4. Optional: redirect the `vercel.app` address.** Vercel notes that a project's
      production `.vercel.app` URL can be indexed alongside the custom domain. Every page's
      canonical already points at `webask.co.uk`. For belt and braces, add a Vercel
      Firewall rule that redirects the exact host `<project>.vercel.app` to
      `https://webask.co.uk`. Only after E4: D1 and D2 run on that host.

- [ ] **F5. Watch.** The Search Console Pages report daily for the first week (unexpected
      404s), Performance weekly. Docs 04 and 05 expect two to four weeks of ranking
      movement after a platform change.

- [ ] **F6. Tell Claude it is live,** so doc 06 Phase 1, the CLAUDE.md state table and the
      `data/site.ts` comment saying the domain "still needs verifying in Resend" are
      brought up to date.

---

## G. Retire SiteGround (last)

Only when E4 has passed and, if the mail is moving, the new mailbox has been receiving mail
for a few days, with the MX records no longer pointing at SiteGround.

- [ ] **G1.** In Cloudflare, delete any record still pointing at SiteGround: the old SPF
      include if C1 left it, any MX record still pointing at `mailspamprotection.com`,
      and any `mail`, `ftp` or similar host records. (Kept
      SiteGround for email? Then keep its MX and SPF records and skip this.)
- [ ] **G2.** Cancel the SiteGround hosting, or, if it keeps the email, delete only the
      WordPress install. The domain stays at Namecheap and the DNS at Cloudflare; neither
      depends on SiteGround. The record of what the old site served is the 28 July 2026
      crawl in doc 04 § 5.

---

## Sources (checked 1 October 2026)

- Vercel — [adding a custom domain](https://vercel.com/docs/domains/working-with-domains/add-a-domain),
  [Cloudflare with Vercel](https://vercel.com/kb/guide/cloudflare-with-vercel),
  [Deployment Protection](https://vercel.com/docs/deployment-protection),
  [Protection Bypass for Automation](https://vercel.com/docs/deployment-protection/methods-to-bypass-deployment-protection/protection-bypass-automation),
  [package managers](https://vercel.com/docs/package-managers),
  [Corepack](https://vercel.com/docs/builds/configure-a-build),
  [Node.js versions](https://vercel.com/docs/functions/runtimes/node-js/node-js-versions),
  [Web Analytics quickstart](https://vercel.com/docs/analytics/quickstart),
  [preview indexing](https://vercel.com/kb/guide/are-vercel-preview-deployment-indexed-by-search-engines),
  [duplicate content with vercel.app URLs](https://vercel.com/kb/guide/avoiding-duplicate-content-with-vercel-app-urls)
- Resend — [domains with Cloudflare](https://resend.com/docs/knowledge-base/cloudflare),
  [regions](https://resend.com/docs/dashboard/domains/regions),
  [open and click tracking](https://resend.com/docs/dashboard/domains/tracking)
- Google — [GA4 data retention](https://support.google.com/analytics/answer/7667196),
  [data sharing settings](https://support.google.com/analytics/answer/1011397),
  [data processing terms](https://support.google.com/analytics/answer/3379636),
  [Search Console ownership verification](https://support.google.com/webmasters/answer/9008080)
- SiteGround — [MX records](https://www.siteground.com/kb/manage-dns-records-site-tools)
  (its default MX hosts are `mx10/20/30.antispam.mailspamprotection.com`)
- Bing — [importing sites from Search Console](https://blogs.bing.com/webmaster/september-2019/Import-sites-from-Search-Console-to-Bing-Webmaster-Tools)
- The domain — public DNS (Cloudflare resolver) and Nominet WHOIS, 1 October 2026
