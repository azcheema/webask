# 07 — Naxdor Change Requests

> **STATUS: LOGGED, NOT APPLIED.** Nothing in `d:\naxdor` has been modified.
>
> These are changes to the **`naxdor.com` project** that the WebAsk plan implies. They were
> deliberately not made, per the instruction to leave Naxdor untouched. Each has a
> recommendation and a trigger. Authored 2026-07-27.
>
> Verified 2026-07-27: `d:\naxdor` working tree clean, HEAD `e0e5885`.

---

## CR-1 — Remove the UK from Naxdor's programmatic expansion list 🔴 **Recommended**

**File:** `d:\naxdor\docs\strategy\keyword-research.md`
**Section:** § "International English markets (Phase 4+ expansion)" (~lines 208–220)

**Current text lists the UK as a future `naxdor.com` target:**

> Phase 4+ programmatic location expansion candidates (high-value English-speaking SMB markets):
>
> - **United Kingdom**: London, Manchester, Birmingham, Edinburgh, Bristol
> - **Canada**: …

It also specifies GBP currency localisation and `addressCountry` handling for the region,
and a `london-uk` slug example.

**Why it should change — and it got sharper on 2026-07-27.** The UK now belongs to
`webask.co.uk`, and WebAsk's anchor city is **Manchester**, with Birmingham in its
programmatic expansion ring (doc 02 § 6). Naxdor's list names **Manchester and Birmingham
explicitly** — so this is no longer a theoretical overlap but a direct collision on the two
metros WebAsk is building around. If Naxdor ever executes its Phase 4+ expansion, the two
properties would compete for identical queries, with the `.co.uk` holding the geo-targeting
advantage and `naxdor.com` holding the authority. A lose-lose split.

**Recommended change:** remove the United Kingdom bullet and the `london-uk` slug example;
add a one-line note that **the UK market is served by `webask.co.uk`** and is out of scope
for `naxdor.com` location expansion. Keep Canada, Australia, Ireland and New Zealand.

**Trigger:** apply at the next edit of that doc, or before Naxdor Phase 4 planning —
whichever comes first. Low effort, prevents a real conflict.

---

## CR-2 — Add `subOrganization` → WebAsk to the Naxdor Organization node 🟡 **Recommended, once live**

**Files:** `d:\naxdor\lib\jsonld.ts` (`organizationNode()`, ~line 86–131),
`d:\naxdor\docs\strategy\schema-strategy.md`

**What.** WebAsk's Organization node will carry
`parentOrganization: { "@id": "https://naxdor.com/#organization" }` (doc 05 § 3). The
relationship is currently one-directional. Adding the reciprocal
`subOrganization: { "@id": "https://webask.co.uk/#organization" }` on the Naxdor side makes
the group structure machine-readable from both ends.

**Why it matters.** Google's post-March-2026 direction prioritises "verified entities". A
disclosed, reciprocal corporate relationship is a positive signal; a one-sided claim is a
weaker one. It also reduces any risk of the two English-language sites being read as
unrelated near-duplicates.

**Caveat.** This introduces a cross-domain `@id` reference into Naxdor's graph. The existing
`e2e/jsonld.spec.ts` assertion _"every `{@id}` reference resolves to a node defined on some
crawled route"_ would fail on it — the spec would need the same whitelist treatment WebAsk
needs in the other direction. Budget for that, don't discover it in CI.

**Trigger:** only after `webask.co.uk` is live and the WebAsk Organization node actually
resolves. Pointing at a node that doesn't exist yet is worse than not pointing at all —
same principle as Naxdor's existing "leave `sameAs` empty rather than point at 404s" rule.

---

## CR-3 — Decide whether `webask.co.uk` belongs in Naxdor's `socials` / `sameAs` 🟢 **Optional**

**File:** `d:\naxdor\data\site.ts` (feeds `sameAs` via `lib/jsonld.ts:90`)

**The question.** `sameAs` is documented in `schema-strategy.md` as the **company's own
profiles** — LinkedIn, GitHub, Clutch, X. `webask.co.uk` is a related _entity_, not a
profile of Naxdor.

**Recommendation: do not add it to `sameAs`.** Use `subOrganization` (CR-2) instead, which
is the semantically correct relation. `sameAs` is for identity resolution ("these URLs are
all the same entity"); WebAsk is a different entity within the same group. Mixing the two
muddies the graph.

Logged only so the question is answered deliberately rather than repeatedly.

---

## CR-4 — hreflang emission in `lib/seo.ts` ⚪ **Not recommended — logged so the option isn't lost**

**File:** `d:\naxdor\lib\seo.ts`

**Context.** `naxdor.com` currently emits a self-canonical with no `alternates.languages`.
If the sites were ever hreflang-paired, `.com` would need to emit hreflang _back_ to the
partner site — the same note already recorded in
`d:\naxdor-se\docs\se\03-seo-hreflang.md` for the Swedish site.

**Why we're not doing it.** Doc 05 § 2 recommends **against** hreflang pairing between
`naxdor.com` and `webask.co.uk`: different brand names break the "same page, different
region" contract, and Google demonstrably ignores or consolidates hreflang across
near-duplicate English content.

**Trigger:** only if a future decision reverses that — and even then, only for pages that
are genuinely 1:1 equivalents. If it ever happens, the rules are strict: reciprocal and
self-referencing on both domains, one consistent `x-default`, absolute URLs, all alternates
returning HTTP 200, correct locale codes (`en-GB` / `en-US`), and **one transport only**
(head link tags via the Metadata API — not sitemap and headers "to be safe").

---

## CR-5 — No change needed: the US-English rule is correctly Naxdor-scoped ⚪ **Note only**

**File:** `d:\naxdor\docs\strategy\content-guidelines.md`, line 20

> _"US English spelling (color, optimization, organize) | British English spelling — but
> avoid US-specific idioms"_

This rule is **correct for `naxdor.com`** and is **deliberately inverted** in the WebAsk
fork (doc 01 § content-guidelines). British English is a language-identification and
relevance signal for `en-GB`, and the two spellings carry genuinely different search
volumes.

**Recorded here purely to prevent a future "fix"** — someone comparing the two repos might
otherwise read the divergence as drift and try to reconcile it. It is intentional.

---

## CR-6 — Consider back-porting the equal-prominence consent audit ⚪ **Optional**

**Context.** Doc 03 § A4 requires WebAsk's consent banner to present "Accept all" and
"Reject all" at genuinely equal visual prominence — the ICO's principal enforcement focus
under PECR, with exposure up to £17.5m / 4% of turnover.

`naxdor.com` markets US-primary but is operated by a **Swedish** entity and is reachable
from the EU/UK. Its consent gate was built to a US-first brief.

**Suggestion:** when the WebAsk banner is audited in Phase 1, spend ten minutes checking
whether the same finding applies to `naxdor.com` under GDPR/ePrivacy. It may already be
fine — Naxdor's `measurement.md` documents "no cookies set before consent" — but
_equal prominence of the reject control_ is a distinct requirement from _consent-before-set_,
and it's the one most sites get wrong.

**Trigger:** during WebAsk Phase 1, as a five-minute cross-check. Not blocking.

---

## CR-7 — Generalise the `areaServed` builder beyond US states 🟢 **Optional, note it exists**

**File:** `d:\naxdor\lib\jsonld.ts` — `locationHubNode`, `serviceLocationNodes`

**Current behaviour.** Both emit:

```ts
areaServed: { "@type": "City", name: city, containedInPlace: { "@type": "State", name: stateFull } }
```

**This is CORRECT for Naxdor** — schema.org's `State` means "a state or province of a
country", which is exactly what Texas and Florida are. **No bug exists in `naxdor.com`.**

**Why it's logged.** WebAsk had to generalise it, because England has no `State`: a
ceremonial or metropolitan county is an `AdministrativeArea` (State's parent type), and
Cheshire is a county-level hub that isn't a `City` at all. WebAsk added an `areaServedNode({
kind, name, county })` helper handling both shapes.

**Recommended change:** none today. Logged so that (a) nobody "fixes" Naxdor's `State` to
match WebAsk's `AdministrativeArea` — that would be a regression for US metros — and (b) if
Naxdor ever expands to a non-state jurisdiction, the WebAsk helper is the reference
implementation to port rather than rediscover.

**Trigger:** only if `naxdor.com` adds a location outside the US state system.

---

## Summary

| #    | Change                                              | Priority           | Trigger                                                                  |
| ---- | --------------------------------------------------- | ------------------ | ------------------------------------------------------------------------ |
| CR-1 | Remove UK from Naxdor's Phase 4+ location expansion | 🔴 Recommended     | Next edit of `keyword-research.md`, or before Naxdor Phase 4             |
| CR-2 | Add `subOrganization` → WebAsk                      | 🟡 Recommended     | After `webask.co.uk` is live                                             |
| CR-3 | `webask.co.uk` in `sameAs`?                         | 🟢 Optional        | Answer: no — use CR-2                                                    |
| CR-4 | hreflang emission in `lib/seo.ts`                   | ⚪ Not recommended | Only if the no-hreflang decision reverses                                |
| CR-5 | US-English rule divergence                          | ⚪ Note only       | No action — prevents a future "fix"                                      |
| CR-6 | Consent equal-prominence cross-check                | ⚪ Optional        | During WebAsk Phase 1                                                    |
| CR-7 | `areaServed` `State` → generalised builder          | 🟢 Optional        | Only if Naxdor adds a non-US-state location. **Naxdor is correct today** |

**None of these have been applied.** `d:\naxdor` is untouched.
