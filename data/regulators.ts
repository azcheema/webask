/**
 * The closed registry of regulators, codes and Acts a blog post may name in
 * frontmatter `mentions` (docs/08 § 5: "Every compliance article should carry
 * `about` / `mentions` pointing at the relevant regulator"). Each entry becomes
 * an inline typed node in `Article.mentions` (`lib/jsonld.ts` `mentionNode`).
 *
 * Rules for adding an entry:
 *   - `url` is the body's own official page (or legislation.gov.uk for an Act),
 *     never a third-party summary.
 *   - Keep the type honest: a statutory or government body is
 *     `GovernmentOrganization`; an independent or self-regulatory body is
 *     `Organization`; a code is `CreativeWork`; an Act or statutory instrument
 *     is `Legislation`.
 *   - No `@id` and no Wikidata `sameAs`: an external `@id` would have to be
 *     whitelisted in `e2e/jsonld.spec.ts` `EXTERNAL_IDS`, and no Q-id has been
 *     verified yet.
 *   - ⚠️ The 2021 Act on under-18s (2021 c. 19) is left out on purpose: its short
 *     title names a prescription-only medicine, and a `Legislation` node would
 *     print that title into JSON-LD. Everything here travels without its
 *     article, so it is held to the sales-copy rule (CLAUDE.md); a post cites
 *     the Act in its body instead.
 *
 * Dependency-free, so the frontmatter schema can import it.
 */

type RegulatorBase = {
  /** Frontmatter value, e.g. `mentions: [asa, cap-code]`. */
  readonly slug: string;
  /** Official name, as the body or the statute book gives it. */
  readonly name: string;
  /** Official URL. */
  readonly url: string;
};

export type Regulator =
  | (RegulatorBase & { readonly type: "GovernmentOrganization" | "Organization" })
  | (RegulatorBase & { readonly type: "CreativeWork"; readonly alternateName: string })
  | (RegulatorBase & {
      readonly type: "Legislation";
      /** The citation (chapter number for an Act, SI number for regulations). */
      readonly legislationIdentifier: string;
    });

export const regulators: ReadonlyArray<Regulator> = [
  {
    slug: "asa",
    type: "Organization",
    name: "Advertising Standards Authority",
    url: "https://www.asa.org.uk/",
  },
  {
    slug: "cap-code",
    type: "CreativeWork",
    name: "UK Code of Non-broadcast Advertising and Direct & Promotional Marketing",
    alternateName: "CAP Code",
    url: "https://www.asa.org.uk/codes-and-rulings/advertising-codes/non-broadcast-code.html",
  },
  {
    slug: "mhra",
    type: "GovernmentOrganization",
    name: "Medicines and Healthcare products Regulatory Agency",
    url: "https://www.gov.uk/government/organisations/medicines-and-healthcare-products-regulatory-agency",
  },
  {
    slug: "gdc",
    type: "GovernmentOrganization",
    name: "General Dental Council",
    url: "https://www.gdc-uk.org/",
  },
  {
    slug: "cqc",
    type: "GovernmentOrganization",
    name: "Care Quality Commission",
    url: "https://www.cqc.org.uk/",
  },
  {
    slug: "cma",
    type: "GovernmentOrganization",
    name: "Competition and Markets Authority",
    url: "https://www.gov.uk/government/organisations/competition-and-markets-authority",
  },
  {
    slug: "ico",
    type: "GovernmentOrganization",
    name: "Information Commissioner's Office",
    url: "https://ico.org.uk/",
  },
  {
    slug: "pecr",
    type: "Legislation",
    name: "The Privacy and Electronic Communications (EC Directive) Regulations 2003",
    legislationIdentifier: "SI 2003/2426",
    url: "https://www.legislation.gov.uk/uksi/2003/2426",
  },
  {
    slug: "dmcc-act-2024",
    type: "Legislation",
    name: "Digital Markets, Competition and Consumers Act 2024",
    legislationIdentifier: "2024 c. 13",
    url: "https://www.legislation.gov.uk/ukpga/2024/13",
  },
];

/** Every valid `mentions` value — used by the frontmatter schema to reject typos. */
export const REGULATOR_SLUGS: ReadonlyArray<string> = regulators.map((entry) => entry.slug);

export function getRegulator(slug: string): Regulator | undefined {
  return regulators.find((entry) => entry.slug === slug);
}
