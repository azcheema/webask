import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Breadcrumbs, type BreadcrumbsItem } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import type { CtaLink } from "@/data/types";

type PageHeroProps = {
  /** Root → current page, passed verbatim to `breadcrumbsNode` for matching JSON-LD. */
  readonly breadcrumbs: ReadonlyArray<BreadcrumbsItem>;
  /** The page's single h1. */
  readonly title: string;
  readonly subhead: string;
  readonly primaryCta?: CtaLink;
  readonly secondaryCta?: CtaLink;
  /** Optional small line under the CTAs — e.g. a scarcity/capacity note on `/free-audit`. */
  readonly note?: string;
};

/**
 * Interior top-level page hero — the shared header for pricing, about, process,
 * free-audit, and contact. Left-aligned (like `ServiceHero`, unlike the centered
 * home `Hero`) with the same brand gradient wash: breadcrumbs, an h1, a subhead,
 * and optional primary + secondary CTAs.
 *
 * CTAs carry `prefetch={false}` while destinations (`/contact`, `/free-audit`)
 * are unbuilt — viewport-prefetching a 404 writes console errors that fail
 * Lighthouse. Drop the override per-route as those pages ship.
 */
export function PageHero({
  breadcrumbs,
  title,
  subhead,
  primaryCta,
  secondaryCta,
  note,
}: PageHeroProps) {
  return (
    <Section padding="lg" className="border-border relative overflow-hidden border-b">
      <div
        aria-hidden
        className="from-brand-500/8 via-bg to-bg pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b"
      />
      <Container>
        <div className="flex max-w-3xl flex-col gap-6">
          <Breadcrumbs items={breadcrumbs} />
          <div className="flex flex-col gap-4">
            <h1 className="text-display text-fg font-semibold tracking-tight text-balance">
              {title}
            </h1>
            <p className="text-body-lg text-fg-muted max-w-2xl text-pretty">{subhead}</p>
          </div>
          {primaryCta || secondaryCta ? (
            <div className="flex flex-col gap-3 sm:flex-row">
              {primaryCta ? (
                <Button
                  size="lg"
                  className="h-11 px-6 text-base"
                  render={<Link href={primaryCta.href} prefetch={false} />}
                >
                  {primaryCta.label}
                  <ArrowRight />
                </Button>
              ) : null}
              {secondaryCta ? (
                <Button
                  variant="outline"
                  size="lg"
                  className="h-11 px-6 text-base"
                  render={<Link href={secondaryCta.href} prefetch={false} />}
                >
                  {secondaryCta.label}
                </Button>
              ) : null}
            </div>
          ) : null}
          {note ? (
            <p className="text-fg-muted text-body-sm flex items-center gap-2">
              <span aria-hidden className="bg-accent-500 size-1.5 rounded-full" />
              {note}
            </p>
          ) : null}
        </div>
      </Container>
    </Section>
  );
}
