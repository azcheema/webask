import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import type { PriceCadence } from "@/data/services";
import type { CtaLink } from "@/data/types";
import { cadenceLabel, formatGBP } from "@/lib/pricing";

export type PricingAnchorItem = {
  readonly name: string;
  readonly startingAmount: number;
  readonly cadence: PriceCadence;
};

type PricingAnchorProps = {
  readonly eyebrow?: string | undefined;
  readonly title: string;
  readonly intro?: string | undefined;
  /** A curated few services to anchor the home page on (not the full catalog). */
  readonly items: ReadonlyArray<PricingAnchorItem>;
  /** Link to the full /pricing page. */
  readonly cta: CtaLink;
};

/**
 * The home page's "starting at $X" pricing anchor — the anatomy's "Pricing
 * anchor" section (uiux-guidelines.md). Renders a curated few real starting
 * prices (from `data/services.ts`) so the home page itself delivers the
 * published-pricing promise, rather than only claiming it and linking away.
 *
 * Chips are display-only (no per-chip link) so nothing viewport-prefetches an
 * unbuilt `/services/[slug]` 404; the single CTA goes to the full pricing
 * table. Server component, static, token-driven — no client JS.
 */
export function PricingAnchor({ eyebrow, title, intro, items, cta }: PricingAnchorProps) {
  return (
    <Section padding="lg">
      <Container size="lg">
        <div className="flex flex-col gap-10">
          <SectionHeadingWithCta eyebrow={eyebrow} title={title} intro={intro} cta={cta} />
          <Grid cols={2} colsMd={4} gap="md">
            {items.map((item) => (
              <div
                key={item.name}
                className="border-border bg-surface flex flex-col gap-1 rounded-2xl border p-5"
              >
                <span className="text-fg-muted text-caption font-semibold tracking-wide uppercase">
                  {item.name}
                </span>
                <span className="text-h4 text-fg font-semibold tracking-tight tabular-nums">
                  {formatGBP(item.startingAmount)}
                </span>
                <span className="text-fg-muted text-body-sm">{cadenceLabel[item.cadence]}</span>
              </div>
            ))}
          </Grid>
        </div>
      </Container>
    </Section>
  );
}

/**
 * The pricing-anchor heading lockup with the "see full pricing" CTA pinned to
 * the right of the title on desktop (stacks below on mobile) — keeps the anchor
 * compact rather than spending a full row on the link.
 */
function SectionHeadingWithCta({
  eyebrow,
  title,
  intro,
  cta,
}: {
  readonly eyebrow?: string | undefined;
  readonly title: string;
  readonly intro?: string | undefined;
  readonly cta: CtaLink;
}) {
  return (
    <div className="flex flex-col gap-4">
      {eyebrow ? (
        <span className="text-link text-body-sm font-semibold tracking-wide uppercase">
          {eyebrow}
        </span>
      ) : null}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-h1 text-fg max-w-2xl font-semibold tracking-tight text-balance">
          {title}
        </h2>
        <Button
          variant="link"
          className="text-link h-auto shrink-0 self-start p-0 sm:self-auto"
          render={<Link href={cta.href} prefetch={false} data-analytics="cta:home-pricing" />}
        >
          {cta.label}
          <ArrowRight />
        </Button>
      </div>
      {intro ? <p className="text-body-lg text-fg-muted max-w-2xl text-pretty">{intro}</p> : null}
    </div>
  );
}
