import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import type { HomeProblemSolution } from "@/data/copy/home";

import { SectionHeading } from "./section-heading";

type ProblemSolutionProps = {
  readonly sections: ReadonlyArray<HomeProblemSolution>;
};

/**
 * The home page's service-teaser sections. Each item pairs the pain ("the
 * gap") with what Naxdor does about it, alternating surface vs. bg for the
 * Stripe sectioning rhythm. Heading + CTA on the left, problem→solution on
 * the right. Problem/solution are labeled in text (not color alone) so the
 * contrast is WCAG-safe and the meaning survives for color-blind readers.
 */
export function ProblemSolution({ sections }: ProblemSolutionProps) {
  return (
    <>
      {sections.map((section, idx) => (
        <Section key={section.h2} bg={idx % 2 === 0 ? "surface" : "default"} padding="lg">
          <Container>
            <div className="grid items-start gap-8 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col gap-6">
                <SectionHeading eyebrow={section.eyebrow} title={section.h2} />
                <Button
                  variant="link"
                  className="text-link h-auto self-start p-0"
                  render={<Link href={section.cta.href} prefetch={false} />}
                >
                  {section.cta.label}
                  <ArrowRight />
                </Button>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="text-fg-muted text-caption font-semibold tracking-wide uppercase">
                    The gap
                  </span>
                  <p className="text-body text-fg-muted text-pretty">{section.problem}</p>
                </div>
                <div className="border-border flex flex-col gap-2 border-l-2 pl-4">
                  <span className="text-link text-caption font-semibold tracking-wide uppercase">
                    What we deliver
                  </span>
                  <p className="text-body text-fg text-pretty">{section.solution}</p>
                </div>
              </div>
            </div>
          </Container>
        </Section>
      ))}
    </>
  );
}
