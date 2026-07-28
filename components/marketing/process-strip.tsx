import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Grid } from "@/components/layout/grid";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import type { ProcessStep } from "@/data/copy/process";
import type { CtaLink } from "@/data/types";

import { SectionHeading } from "./section-heading";

type ProcessStripProps = {
  readonly eyebrow?: string;
  readonly title: string;
  readonly intro?: string;
  /** The four ordered stages — Discover, Design, Build, Grow. */
  readonly steps: ReadonlyArray<ProcessStep>;
  /** Link to the full /process page. */
  readonly cta: CtaLink;
};

/**
 * The home page's compact 4-step process visual — the anatomy's "Process
 * (4-step visual)" section (uiux-guidelines.md), scaled for the home page.
 * Each stage shows a brand numeral badge + name + tagline + the short
 * `shortDescription` (authored for exactly this strip); the full artifacts /
 * client-inputs detail lives on /process, linked by the closing CTA.
 *
 * Server component, fully static, token-driven — no client JS, so it stays
 * within the home perf budget (it only adds below-the-fold DOM).
 */
export function ProcessStrip({ eyebrow, title, intro, steps, cta }: ProcessStripProps) {
  return (
    <Section padding="lg" bg="surface">
      <Container size="lg">
        <div className="flex flex-col gap-10">
          <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />
          <Grid cols={1} colsMd={2} colsLg={4} gap="lg">
            {steps.map((step) => (
              <div
                key={step.number}
                className="border-border bg-bg flex flex-col gap-3 rounded-2xl border p-6"
              >
                <span
                  aria-hidden
                  className="bg-brand-500 text-fg-on-brand text-body-sm flex size-9 items-center justify-center rounded-full font-semibold tabular-nums"
                >
                  {step.number}
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-h4 text-fg font-semibold tracking-tight">{step.name}</h3>
                  <p className="text-body-sm text-link font-medium text-pretty">{step.tagline}</p>
                </div>
                <p className="text-body-sm text-fg-muted text-pretty">{step.shortDescription}</p>
              </div>
            ))}
          </Grid>
          <Button
            variant="link"
            className="text-link h-auto self-start p-0"
            render={<Link href={cta.href} prefetch={false} data-analytics="cta:home-process" />}
          >
            {cta.label}
            <ArrowRight />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
