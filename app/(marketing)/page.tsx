import type { Metadata } from "next";

import {
  CtaBand,
  FaqAccordion,
  Hero,
  PortfolioStrip,
  PricingAnchor,
  type PricingAnchorItem,
  ProblemSolution,
  ProcessStrip,
  Stats,
} from "@/components/marketing";
import { home } from "@/data/copy/home";
import { process as processContent } from "@/data/copy/process";
import { portfolio } from "@/data/portfolio";
import { getServiceBySlug, services } from "@/data/services";
import { buildGraph, faqNode, renderJsonLd, webpageNode } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

// Four representative services anchor the home pricing section — they mirror the
// four Problem→Solution teasers above. Prices stay sourced from data/services.ts
// (single source of truth); the full table lives on /pricing.
const PRICING_ANCHOR_SLUGS = ["web-development", "crm", "ai-integration", "seo"] as const;

const pricingAnchorItems: ReadonlyArray<PricingAnchorItem> = PRICING_ANCHOR_SLUGS.flatMap(
  (slug) => {
    const service = getServiceBySlug(slug);
    return service
      ? [
          {
            name: service.name,
            startingAmount: service.pricing.startingAmount,
            cadence: service.pricing.cadence,
          },
        ]
      : [];
  },
);

// Full catalog feeds the hero's services marquee (name + slug — slug picks the
// icon; labels are plain text, not links, since most /services/* routes ship in
// Phase 2). data/services.ts stays the single source of truth.
const heroServices = services.map((service) => ({ name: service.name, slug: service.slug }));

export const metadata: Metadata = {
  ...buildMetadata({
    title: home.meta.title,
    description: home.meta.description,
    path: "/",
    // Home keeps the bespoke sitewide card (wordmark + tagline composition) —
    // the strongest brand share surface — rather than a title-only generated
    // one. Every other page auto-generates its card via /og?title=…
    image: "/opengraph-image",
  }),
  // Absolute title so the root layout's "%s · Naxdor" template doesn't append a
  // second "Naxdor" — home.meta.title already leads with the brand.
  title: { absolute: home.meta.title },
};

const homeJsonLd = renderJsonLd(
  buildGraph(
    webpageNode({ path: "/", name: home.meta.title, description: home.meta.description }),
    faqNode(
      "/",
      home.faqs.map((faq) => ({ q: faq.question, a: faq.answer })),
    ),
  ),
);

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: homeJsonLd }} />
      <Hero
        eyebrowPhrases={home.hero.eyebrowPhrases}
        headline={home.hero.headline}
        subhead={home.hero.subhead}
        primaryCta={home.hero.primaryCta}
        secondaryCta={home.hero.secondaryCta}
        trustStrip={home.hero.trustStrip}
        services={heroServices}
      />
      <ProblemSolution sections={home.sections} />
      <Stats eyebrow={home.proof.eyebrow} title={home.proof.h2} stats={home.proof.stats} />
      <PortfolioStrip
        eyebrow={home.portfolio.eyebrow}
        title={home.portfolio.h2}
        note={home.portfolio.note}
        entries={portfolio}
      />
      <ProcessStrip
        eyebrow={home.process.eyebrow}
        title={home.process.h2}
        intro={home.process.intro}
        steps={processContent.steps}
        cta={home.process.cta}
      />
      <PricingAnchor
        eyebrow={home.pricing.eyebrow}
        title={home.pricing.h2}
        intro={home.pricing.intro}
        items={pricingAnchorItems}
        cta={home.pricing.cta}
      />
      <FaqAccordion eyebrow={home.faq.eyebrow} title={home.faq.h2} faqs={home.faqs} />
      <CtaBand
        tone="brand"
        title={home.ctaBand.h2}
        body={home.ctaBand.subhead}
        cta={home.ctaBand.primaryCta}
      />
    </>
  );
}
