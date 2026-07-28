import type { Metadata } from "next";
import { Check, X } from "lucide-react";

import type { BreadcrumbsItem } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { Section } from "@/components/layout/section";
import { CtaBand, FaqAccordion, PageHero, SectionHeading } from "@/components/marketing";
import { freeAudit } from "@/data/copy/free-audit";
import { breadcrumbsNode, buildGraph, faqNode, renderJsonLd, webpageNode } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

const PATH = "/free-audit";

const breadcrumbs: ReadonlyArray<BreadcrumbsItem> = [
  { label: "Home", href: "/" },
  { label: "Free audit" },
];

export const metadata: Metadata = buildMetadata({
  title: freeAudit.meta.title,
  description: freeAudit.meta.description,
  path: PATH,
});

const freeAuditJsonLd = renderJsonLd(
  buildGraph(
    webpageNode({
      path: PATH,
      name: freeAudit.meta.title,
      description: freeAudit.meta.description,
    }),
    breadcrumbsNode(PATH, [
      { name: "Home", path: "/" },
      { name: "Free audit", path: PATH },
    ]),
    faqNode(
      PATH,
      freeAudit.faqs.map((faq) => ({ q: faq.question, a: faq.answer })),
    ),
  ),
);

export default function FreeAuditPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: freeAuditJsonLd }} />
      <PageHero
        breadcrumbs={breadcrumbs}
        title={freeAudit.hero.h1}
        subhead={freeAudit.hero.subhead}
        primaryCta={freeAudit.hero.primaryCta}
        note={freeAudit.hero.capacityNote}
      />

      {/* What you get */}
      <Section padding="lg">
        <Container size="lg">
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow={freeAudit.whatYouGet.eyebrow}
              title={freeAudit.whatYouGet.h2}
            />
            <Grid cols={1} colsMd={3} gap="lg">
              {freeAudit.whatYouGet.items.map((item) => (
                <div
                  key={item.title}
                  className="border-border bg-surface flex flex-col gap-2 rounded-2xl border p-6"
                >
                  <h3 className="text-body text-fg font-semibold text-pretty">{item.title}</h3>
                  <p className="text-body-sm text-fg-muted text-pretty">{item.body}</p>
                </div>
              ))}
            </Grid>
          </div>
        </Container>
      </Section>

      {/* How it works */}
      <Section padding="lg" bg="surface">
        <Container size="lg">
          <div className="flex flex-col gap-10">
            <SectionHeading eyebrow={freeAudit.process.eyebrow} title={freeAudit.process.h2} />
            <Grid cols={1} colsMd={2} colsLg={4} gap="lg">
              {freeAudit.process.steps.map((step) => (
                <div key={step.number} className="flex flex-col gap-3">
                  <span className="bg-brand-500 text-fg-on-brand text-body-sm flex size-9 items-center justify-center rounded-full font-semibold">
                    {step.number}
                  </span>
                  <h3 className="text-body text-fg font-semibold text-pretty">{step.name}</h3>
                  <p className="text-body-sm text-fg-muted text-pretty">{step.body}</p>
                </div>
              ))}
            </Grid>
          </div>
        </Container>
      </Section>

      {/* Who it's for */}
      <Section padding="lg">
        <Container size="lg">
          <div className="flex flex-col gap-10">
            <SectionHeading eyebrow={freeAudit.whoItsFor.eyebrow} title={freeAudit.whoItsFor.h2} />
            <Grid cols={1} colsMd={2} gap="lg">
              <div className="border-border bg-bg flex flex-col gap-4 rounded-2xl border p-6">
                <h3 className="text-body text-fg font-semibold">A good fit</h3>
                <ul className="flex flex-col gap-3">
                  {freeAudit.whoItsFor.fit.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check aria-hidden className="text-brand-600 mt-0.5 size-4 shrink-0" />
                      <span className="text-body-sm text-fg-muted text-pretty">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-border bg-bg flex flex-col gap-4 rounded-2xl border p-6">
                <h3 className="text-body text-fg font-semibold">Probably not a fit</h3>
                <ul className="flex flex-col gap-3">
                  {freeAudit.whoItsFor.notFit.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <X aria-hidden className="text-fg-muted mt-0.5 size-4 shrink-0" />
                      <span className="text-body-sm text-fg-muted text-pretty">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Grid>
          </div>
        </Container>
      </Section>

      <FaqAccordion title="Questions before you request one" faqs={freeAudit.faqs} />

      <CtaBand
        tone="brand"
        title={freeAudit.ctaBand.h2}
        body={freeAudit.ctaBand.subhead}
        cta={freeAudit.ctaBand.primaryCta}
      />
    </>
  );
}
