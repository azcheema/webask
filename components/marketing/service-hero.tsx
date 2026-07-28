import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Breadcrumbs, type BreadcrumbsItem } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import type { PriceCadence } from "@/data/services";
import type { CtaLink } from "@/data/types";
import { cadenceLabel, formatUSD } from "@/lib/pricing";

type ServiceHeroProps = {
  /** Root → current page, passed verbatim to `breadcrumbsNode` for matching JSON-LD. */
  readonly breadcrumbs: ReadonlyArray<BreadcrumbsItem>;
  /** Service name — the page's single h1. */
  readonly name: string;
  readonly subhead: string;
  /** "Who it's for" qualifier — helps prospects self-select. */
  readonly whoItsFor: string;
  /** Starting price (USD) — surfaces the anatomy's "Starting at $X" hero tag. */
  readonly startingAmount?: number;
  readonly cadence?: PriceCadence;
  readonly primaryCta: CtaLink;
  readonly secondaryCta?: CtaLink;
};

/**
 * Service detail hero — the reusable header every service page inherits. Left
 * aligned (vs. the centered home `Hero`): breadcrumbs, an h1 of the service
 * name, the subhead, a "who it's for" qualifier, and a primary + secondary CTA.
 *
 * CTAs carry `prefetch={false}` while their destinations (`/contact`,
 * `/free-audit`) are unbuilt — viewport-prefetching a 404 fails Lighthouse.
 */
export function ServiceHero({
  breadcrumbs,
  name,
  subhead,
  whoItsFor,
  startingAmount,
  cadence = "project",
  primaryCta,
  secondaryCta,
}: ServiceHeroProps) {
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
              {name}
            </h1>
            <p className="text-body-lg text-fg-muted max-w-2xl text-pretty">{subhead}</p>
          </div>
          <div className="border-border flex flex-col gap-1 border-l-2 pl-4">
            <span className="text-link text-caption font-semibold tracking-wide uppercase">
              Who it&apos;s for
            </span>
            <p className="text-body text-fg-muted text-pretty">{whoItsFor}</p>
          </div>
          {startingAmount != null ? (
            <p className="text-body">
              <span className="text-fg font-semibold tabular-nums">
                {`Starting at USD ${formatUSD(startingAmount)}`}
              </span>
              <span className="text-fg-muted">{` · ${cadenceLabel[cadence]}`}</span>
            </p>
          ) : null}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-11 px-6 text-base"
              render={<Link href={primaryCta.href} prefetch={false} />}
            >
              {primaryCta.label}
              <ArrowRight />
            </Button>
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
        </div>
      </Container>
    </Section>
  );
}
