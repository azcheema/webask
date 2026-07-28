import type { Metadata } from "next";

import type { BreadcrumbsItem } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { Section } from "@/components/layout/section";
import { CtaBand, PageHero, ProcessSteps, SectionHeading } from "@/components/marketing";
// `process` shadows the Node global — alias to keep the module unambiguous.
import { process as processContent } from "@/data/copy/process";
import { breadcrumbsNode, buildGraph, renderJsonLd, webpageNode } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

const PATH = "/process";

const breadcrumbs: ReadonlyArray<BreadcrumbsItem> = [
  { label: "Home", href: "/" },
  { label: "Process" },
];

export const metadata: Metadata = buildMetadata({
  title: processContent.meta.title,
  description: processContent.meta.description,
  path: PATH,
});

const processJsonLd = renderJsonLd(
  buildGraph(
    webpageNode({
      path: PATH,
      name: processContent.meta.title,
      description: processContent.meta.description,
    }),
    breadcrumbsNode(PATH, [
      { name: "Home", path: "/" },
      { name: "Process", path: PATH },
    ]),
  ),
);

export default function ProcessPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: processJsonLd }} />
      <PageHero
        breadcrumbs={breadcrumbs}
        title={processContent.hero.h1}
        subhead={processContent.hero.subhead}
        primaryCta={processContent.hero.primaryCta}
      />

      <Section padding="lg">
        <Container>
          <p className="text-body-lg text-fg-muted max-w-2xl text-pretty">{processContent.intro}</p>
        </Container>
      </Section>

      <Section padding="lg" bg="surface">
        <Container size="lg">
          <div className="flex flex-col gap-10">
            <SectionHeading eyebrow="The four stages" title="Discover, Design, Build, Grow." />
            <ProcessSteps steps={processContent.steps} />
          </div>
        </Container>
      </Section>

      <Section padding="lg">
        <Container size="lg">
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow={processContent.principles.eyebrow}
              title={processContent.principles.h2}
            />
            <Grid cols={1} colsMd={2} colsLg={3} gap="lg">
              {processContent.principles.items.map((item) => (
                <div
                  key={item.title}
                  className="border-border bg-bg flex flex-col gap-2 rounded-2xl border p-6"
                >
                  <h3 className="text-body text-fg font-semibold text-pretty">{item.title}</h3>
                  <p className="text-body-sm text-fg-muted text-pretty">{item.body}</p>
                </div>
              ))}
            </Grid>
          </div>
        </Container>
      </Section>

      <CtaBand
        tone="brand"
        title={processContent.ctaBand.h2}
        body={processContent.ctaBand.subhead}
        cta={processContent.ctaBand.primaryCta}
      />
    </>
  );
}
