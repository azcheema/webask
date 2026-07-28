import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { CtaLink } from "@/data/types";

import { SectionHeading } from "./section-heading";

type CtaBandTone = "brand" | "surface" | "muted";

type CtaBandProps = {
  readonly eyebrow?: string;
  readonly title: string;
  readonly body?: string;
  readonly cta: CtaLink;
  /**
   * `brand` = full-bleed indigo closing band; `surface`/`muted` = inset
   * rounded panel for mid-page teasers (process, pricing).
   */
  readonly tone?: CtaBandTone;
  /** Analytics label for the `cta_click` event; emitted as `cta:<analyticsId>`. */
  readonly analyticsId?: string;
};

/**
 * One CTA strip, three uses. The full-bleed `brand` tone closes the page; the
 * inset `surface`/`muted` tones tease the process and pricing pages mid-scroll.
 */
export function CtaBand({
  eyebrow,
  title,
  body,
  cta,
  tone = "brand",
  analyticsId = "band",
}: CtaBandProps) {
  const ctaTag = `cta:${analyticsId}`;

  if (tone === "brand") {
    return (
      <Section padding="lg">
        <Container>
          {/* brand-600, not brand-500. Deep teal has far less contrast headroom
           * than the indigo this forked from: white on brand-500 is 5.47:1, so
           * the 85%-opacity subline below composited to 4.41:1 and failed WCAG
           * AA. Deepening the panel restores the margin — the subline is now
           * 5.70:1 and the heading 7.22:1 — rather than squeezing the opacity
           * up to scrape past 4.5. Caught by e2e/a11y.spec.ts, which sees
           * composited alpha that scripts/check-contrast.ts cannot. */}
          <div className="bg-brand-600 mx-auto flex max-w-4xl flex-col items-center gap-5 rounded-3xl px-6 py-12 text-center md:px-12 md:py-16">
            <h2 className="text-h2 text-fg-on-brand max-w-2xl font-semibold tracking-tight text-balance">
              {title}
            </h2>
            {body ? (
              <p className="text-fg-on-brand/85 text-body-lg max-w-2xl text-pretty">{body}</p>
            ) : null}
            <Button
              size="lg"
              className="text-brand-600 bg-fg-on-brand hover:bg-fg-on-brand/90 h-11 px-6 text-base"
              render={<Link href={cta.href} prefetch={false} data-analytics={ctaTag} />}
            >
              {cta.label}
              <ArrowRight />
            </Button>
          </div>
        </Container>
      </Section>
    );
  }

  return (
    <Section padding="lg">
      <Container>
        <div
          className={cn(
            "border-border flex flex-col items-center gap-6 rounded-3xl border p-8 text-center md:p-12",
            tone === "surface" ? "bg-surface" : "bg-muted",
          )}
        >
          <SectionHeading eyebrow={eyebrow} title={title} intro={body} align="center" />
          <Button
            size="lg"
            className="h-11 px-6 text-base"
            render={<Link href={cta.href} prefetch={false} data-analytics={ctaTag} />}
          >
            {cta.label}
            <ArrowRight />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
