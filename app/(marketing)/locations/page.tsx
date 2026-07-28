import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { BreadcrumbsItem } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaBand, PageHero } from "@/components/marketing";
import { authoredLocations } from "@/data/locations";
import type { CtaLink } from "@/data/types";
import { breadcrumbsNode, buildGraph, renderJsonLd, webpageNode } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

const PATH = "/locations";

const META = {
  title: "Where We Work",
  description:
    "WebAsk is a remote-first digital firm serving small businesses across the UK — websites, CRM automation, AI integration and SEO, wherever you are.",
};

const HERO = {
  h1: "Remote-first, working on UK time.",
  subhead:
    "We work with small businesses the length of the UK without a local-office tax. Our hand-built area guides go deep on the market, the competition and the sectors that win there.",
  primaryCta: { label: "Book a strategy call", href: "/contact" } satisfies CtaLink,
  secondaryCta: { label: "Get a free site audit", href: "/free-audit" } satisfies CtaLink,
};

const breadcrumbs: ReadonlyArray<BreadcrumbsItem> = [
  { label: "Home", href: "/" },
  { label: "Locations" },
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
      { name: "Locations", path: PATH },
    ]),
  ),
);

export default function LocationsPage() {
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

      {/* Self-hides while no area hub has authored copy (Phase 2 writes them).
       * Listing area names with no destination would advertise pages that 404
       * and hand Google a thin page with dangling intent — worse than showing
       * nothing. Mirrors the CrossLinkGrid "render nothing when empty" idiom. */}
      {authoredLocations.length > 0 ? (
        <Section padding="lg">
          <Container size="lg">
            <ul className="grid gap-6 md:grid-cols-3">
              {authoredLocations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="group border-border bg-surface hover:border-brand-500/40 flex h-full flex-col gap-4 rounded-2xl border p-6 transition-colors sm:p-8"
                  >
                    <div className="flex flex-col gap-1">
                      <h2 className="text-h3 text-fg font-semibold tracking-tight text-balance">
                        {location.name}
                      </h2>
                      <p className="text-body-sm text-fg-muted">{location.serviceArea}</p>
                    </div>
                    <p className="text-body-sm text-fg-muted flex-1 text-pretty">
                      {location.copy.cardSummary}
                    </p>
                    <span className="text-link text-body-sm inline-flex items-center gap-1 font-medium">
                      Explore {location.name}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <CtaBand
        tone="brand"
        title="Don't see your area?"
        body="We work with small businesses across the UK remotely. Tell us where you are and what you're trying to grow — we'll map a plan within three business days."
        cta={HERO.primaryCta}
      />
    </>
  );
}
