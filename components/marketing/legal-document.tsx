import type { BreadcrumbsItem } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { PageHero } from "@/components/marketing/page-hero";
import type { LegalDocument as LegalDocumentData } from "@/data/copy/legal";

type LegalDocumentProps = {
  readonly document: LegalDocumentData;
  /** Root → current page; pass the same array to `breadcrumbsNode` for matching JSON-LD. */
  readonly breadcrumbs: ReadonlyArray<BreadcrumbsItem>;
};

/**
 * Fixed locale + UTC so the rendered date is deterministic across server/client.
 *
 * en-GB, not the inherited en-US: this renders "28 July 2026" rather than
 * "July 28, 2026". Day-first is what a UK reader expects, and content-guidelines
 * requires dates to be unambiguous — the numeric forms (7/28/26 vs 28/7/26) mean
 * different things on either side of the Atlantic, which is exactly why the long
 * form is used here.
 */
const DATE_FORMAT = new Intl.DateTimeFormat("en-GB", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

function formatLastUpdated(iso: string): string {
  return DATE_FORMAT.format(new Date(`${iso}T00:00:00Z`));
}

/**
 * Shared renderer for the three legal pages (Privacy, Terms, Cookies). Composes
 * the interior `PageHero` (with the "last updated" date as its note line) and a
 * narrow, readable prose body driven by the typed `LegalDocument` copy.
 *
 * While a document is `draft`, a visible "working draft" notice renders above
 * the body and the consuming page sets `noindex` — both gate on the same flag,
 * so a single `draft: false` flip per document promotes it.
 */
export function LegalDocument({ document: doc, breadcrumbs }: LegalDocumentProps) {
  return (
    <>
      <PageHero
        breadcrumbs={breadcrumbs}
        title={doc.title}
        subhead={doc.subhead}
        note={`Last updated ${formatLastUpdated(doc.lastUpdated)}`}
      />

      <Section padding="lg">
        <Container size="sm">
          {doc.draft ? (
            <div
              role="note"
              className="border-border bg-muted text-fg-muted text-body-sm mb-10 rounded-2xl border p-5 text-pretty"
            >
              <strong className="text-fg font-semibold">Working draft.</strong> This{" "}
              {doc.title.toLowerCase()} is published for review and may be updated before launch —
              please confirm it reflects our current practices before relying on it.
            </div>
          ) : null}

          <div className="prose prose-webask max-w-none">
            {doc.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            {doc.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.list ? (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
