import type { Metadata } from "next";

import type { BreadcrumbsItem } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { Section } from "@/components/layout/section";
import {
  CtaBand,
  FaqAccordion,
  PageHero,
  PricingTable,
  SectionHeading,
} from "@/components/marketing";
import { pricing } from "@/data/copy/pricing";
import { services } from "@/data/services";
import { breadcrumbsNode, buildGraph, faqNode, renderJsonLd, webpageNode } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";
import { getServiceContentSlugs } from "@/lib/services";

const PATH = "/pricing";

const breadcrumbs: ReadonlyArray<BreadcrumbsItem> = [
  { label: "Home", href: "/" },
  { label: "Pricing" },
];

export const metadata: Metadata = buildMetadata({
  title: pricing.meta.title,
  description: pricing.meta.description,
  path: PATH,
});

const pricingJsonLd = renderJsonLd(
  buildGraph(
    webpageNode({ path: PATH, name: pricing.meta.title, description: pricing.meta.description }),
    breadcrumbsNode(PATH, [
      { name: "Home", path: "/" },
      { name: "Pricing", path: PATH },
    ]),
    faqNode(
      PATH,
      pricing.faqs.map((faq) => ({ q: faq.question, a: faq.answer })),
    ),
  ),
);

export default async function PricingPage() {
  const builtSlugs = await getServiceContentSlugs();

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: pricingJsonLd }} />
      <PageHero
        breadcrumbs={breadcrumbs}
        title={pricing.hero.h1}
        subhead={pricing.hero.subhead}
        primaryCta={pricing.hero.primaryCta}
        secondaryCta={pricing.hero.secondaryCta}
      />

      <Section padding="lg">
        <Container size="lg">
          <div className="flex flex-col gap-8">
            <SectionHeading
              eyebrow={pricing.tableIntro.eyebrow}
              title={pricing.tableIntro.h2}
              intro={pricing.tableIntro.body}
            />
            <PricingTable services={services} builtSlugs={builtSlugs} />
          </div>
        </Container>
      </Section>

      <Section padding="lg" bg="surface">
        <Container size="lg">
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow={pricing.whatChangesPrice.eyebrow}
              title={pricing.whatChangesPrice.h2}
              intro={pricing.whatChangesPrice.intro}
            />
            <Grid cols={1} colsMd={2} colsLg={3} gap="lg">
              {pricing.whatChangesPrice.factors.map((factor) => (
                <div
                  key={factor.title}
                  className="border-border bg-bg flex flex-col gap-2 rounded-2xl border p-6"
                >
                  <h3 className="text-body text-fg font-semibold">{factor.title}</h3>
                  <p className="text-body-sm text-fg-muted text-pretty">{factor.body}</p>
                </div>
              ))}
            </Grid>
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container size="lg">
          <div className="flex flex-col gap-10">
            <SectionHeading eyebrow={pricing.howWeQuote.eyebrow} title={pricing.howWeQuote.h2} />
            <Grid cols={1} colsMd={2} colsLg={4} gap="lg">
              {pricing.howWeQuote.steps.map((step) => (
                <div
                  key={step.title}
                  className="border-border bg-surface flex flex-col gap-2 rounded-2xl border p-6"
                >
                  <h3 className="text-body text-fg font-semibold text-pretty">{step.title}</h3>
                  <p className="text-body-sm text-fg-muted text-pretty">{step.body}</p>
                </div>
              ))}
            </Grid>
          </div>
        </Container>
      </Section>

      <FaqAccordion eyebrow="FAQ" title="Pricing questions, answered" faqs={pricing.faqs} />

      <CtaBand
        tone="brand"
        title={pricing.ctaBand.h2}
        body={pricing.ctaBand.subhead}
        cta={pricing.ctaBand.primaryCta}
      />
    </>
  );
}
