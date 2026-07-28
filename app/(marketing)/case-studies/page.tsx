import type { Metadata } from "next";
import Link from "next/link";

import type { BreadcrumbsItem } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaBand, PageHero } from "@/components/marketing";
import { CaseStudyFilter, type CaseStudyFacet } from "@/components/marketing/case-study-filter";
import type { CtaLink } from "@/data/types";
import { listPublishedCaseStudySummaries, type CaseStudySummary } from "@/lib/case-studies";
import { breadcrumbsNode, buildGraph, collectionPageNode, renderJsonLd } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

const PATH = "/case-studies";
const TITLE = "Case studies";
const DESCRIPTION =
  "Real outcomes from real engagements — the problem, the work, and the measurable result. Proof, not promises.";
const PRIMARY_CTA: CtaLink = { label: "Book a discovery call", href: "/contact" };

export async function generateMetadata(): Promise<Metadata> {
  const studies = await listPublishedCaseStudySummaries();
  return buildMetadata({
    title: TITLE,
    description: DESCRIPTION,
    path: PATH,
    eyebrow: "Case studies",
    // Self-hiding: until the first founder-reviewed study ships, the index is a
    // thin empty page — stage it `noindex` (it's also kept out of the sitemap),
    // flipping to indexable automatically when a published study lands.
    noindex: studies.length === 0,
  });
}

/**
 * Unique facets in first-appearance (newest-first) order, reading the display
 * labels the summaries already resolved server-side — so the index doesn't pull
 * the service/industry catalogs in just to label chips.
 */
function serviceFacetsOf(studies: ReadonlyArray<CaseStudySummary>): CaseStudyFacet[] {
  const seen = new Map<string, string>();
  for (const study of studies) seen.set(study.frontmatter.serviceSlug, study.serviceLabel);
  return [...seen].map(([slug, label]) => ({ slug, label }));
}

function industryFacetsOf(studies: ReadonlyArray<CaseStudySummary>): CaseStudyFacet[] {
  const seen = new Map<string, string>();
  for (const study of studies) {
    if (study.frontmatter.industrySlug && study.industryLabel) {
      seen.set(study.frontmatter.industrySlug, study.industryLabel);
    }
  }
  return [...seen].map(([slug, label]) => ({ slug, label }));
}

export default async function CaseStudiesIndexPage() {
  const studies = await listPublishedCaseStudySummaries();

  const breadcrumbs: ReadonlyArray<BreadcrumbsItem> = [
    { label: "Home", href: "/" },
    { label: "Case studies" },
  ];

  const jsonLd = renderJsonLd(
    buildGraph(
      collectionPageNode({ path: PATH, name: TITLE, description: DESCRIPTION }),
      breadcrumbsNode(PATH, [
        { name: "Home", path: "/" },
        { name: "Case studies", path: PATH },
      ]),
    ),
  );

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <PageHero
        breadcrumbs={breadcrumbs}
        title={TITLE}
        subhead="The work behind the results — each study lays out the problem we were hired to solve, what we built, and the numbers that moved."
      />

      <Section padding="lg">
        <Container size="lg">
          {studies.length > 0 ? (
            <CaseStudyFilter
              studies={studies}
              serviceFacets={serviceFacetsOf(studies)}
              industryFacets={industryFacetsOf(studies)}
            />
          ) : (
            <p className="text-fg-muted text-body-lg">
              The first case studies are being written up. In the meantime, see{" "}
              <Link href="/pricing" className="text-link underline underline-offset-2">
                what we do
              </Link>{" "}
              or{" "}
              <Link href="/contact" className="text-link underline underline-offset-2">
                tell us about your project
              </Link>
              .
            </p>
          )}
        </Container>
      </Section>

      <CtaBand
        tone="brand"
        title="Want results like these for your business?"
        body="Book a 30-minute discovery call — no pitch, just a clear read on where your digital growth is leaking and how to fix it."
        cta={PRIMARY_CTA}
      />
    </>
  );
}
