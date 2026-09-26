import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { BreadcrumbsItem } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaBand, PageHero, PricingTable, SectionHeading } from "@/components/marketing";
import { liveServices } from "@/data/services";
import type { CtaLink } from "@/data/types";
import { breadcrumbsNode, buildGraph, renderJsonLd, webpageNode } from "@/lib/jsonld";
import { formatGBP, pricingQualifier } from "@/lib/pricing";
import { buildMetadata } from "@/lib/seo";
import { listLiveServiceSlugs } from "@/lib/services";

/*
 * The services index — the pillar of Silo 1 (docs/08 § 1).
 *
 * It was missing from the fork entirely: `/services/[service]` and
 * `/services/[service]/[location]` both existed, but the parent that ties them
 * together did not. A silo without its pillar leaks relevance — the nine service
 * pages had nothing to link UP to, and `/services` was referenced by the nav,
 * the keyword map and docs/04's URL map while resolving to a 404.
 *
 * Prices come from data/services.ts via PricingTable, so the catalogue stays the
 * single source of truth and this page cannot drift from the service pages.
 */

const PATH = "/services";

const META = {
  title: "Services",
  description:
    "Nine services for UK small businesses — websites, e-commerce, web apps, UI/UX, SEO, mobile, CRM automation, AI integration and care plans. Every one with a published starting price.",
};

const HERO = {
  h1: "Nine services. One person accountable for all of them.",
  subhead:
    "Websites, search, CRM and automation for UK businesses — scoped honestly, priced on the page, and delivered without handing you between agencies.",
  primaryCta: { label: "Book a discovery call", href: "/contact" } satisfies CtaLink,
  secondaryCta: { label: "Get a free site audit", href: "/free-audit" } satisfies CtaLink,
};

const breadcrumbs: ReadonlyArray<BreadcrumbsItem> = [
  { label: "Home", href: "/" },
  { label: "Services" },
];

export const metadata: Metadata = buildMetadata({
  title: META.title,
  description: META.description,
  path: PATH,
});

const jsonLd = renderJsonLd(
  buildGraph(
    webpageNode({ path: PATH, name: META.title, description: META.description }),
    breadcrumbsNode(PATH, [
      { name: "Home", path: "/" },
      { name: "Services", path: PATH },
    ]),
  ),
);

export default async function ServicesPage() {
  // Bare slugs: PricingTable gates its links on `builtSlugs.has(slug)`, so the
  // path-keyed BUILT_ROUTES set it was handed before never matched a row.
  const liveSlugs = await listLiveServiceSlugs();
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <PageHero
        breadcrumbs={breadcrumbs}
        title={HERO.h1}
        subhead={HERO.subhead}
        primaryCta={HERO.primaryCta}
        secondaryCta={HERO.secondaryCta}
      />

      <Section padding="lg">
        <Container size="lg">
          <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {liveServices.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group border-border bg-surface hover:border-brand-500/40 flex h-full flex-col gap-4 rounded-2xl border p-6 transition-colors sm:p-8"
                >
                  <h2 className="text-h4 text-fg font-semibold tracking-tight text-balance">
                    {service.name}
                  </h2>
                  <p className="text-body-sm text-fg-muted flex-1 text-pretty">{service.summary}</p>
                  <span className="text-fg text-body-sm font-semibold tabular-nums">
                    From {formatGBP(service.pricing.startingAmount)}{" "}
                    <span className="text-fg-muted font-normal">
                      {pricingQualifier(service.pricing)}
                    </span>
                  </span>
                  <span className="text-link text-body-sm inline-flex items-center gap-1 font-medium">
                    See {service.name}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section padding="lg" bg="surface">
        <Container size="lg">
          <div className="flex flex-col gap-10">
            <SectionHeading
              eyebrow="Every price, in one place"
              title="What each service starts at."
              intro="These are real starting points for scoped work, not teaser figures. Scope moves them — pages, integrations, complexity — and we tell you which on the first call rather than after it."
            />
            <PricingTable services={liveServices} builtSlugs={liveSlugs} />
          </div>
        </Container>
      </Section>

      <CtaBand
        tone="brand"
        title="Not sure which of these you need?"
        body="Most engagements combine two or three. Tell us what you're trying to fix and we'll say which ones actually apply — including when the answer is none of them."
        cta={HERO.primaryCta}
      />
    </>
  );
}
