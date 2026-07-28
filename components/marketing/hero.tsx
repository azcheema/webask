import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { HeroTypewriter } from "@/components/marketing/hero-typewriter";
import { ServiceMarquee, type MarqueeService } from "@/components/marketing/service-marquee";
import type { CtaLink, HeroHeadlineSegment } from "@/data/types";

type HeroProps = {
  /** Phrases the typewriter eyebrow cycles through, above the H1. */
  readonly eyebrowPhrases: ReadonlyArray<string>;
  /** Two-tone display headline; `accent` segments render in brand color. */
  readonly headline: ReadonlyArray<HeroHeadlineSegment>;
  readonly subhead: string;
  readonly primaryCta: CtaLink;
  readonly secondaryCta: CtaLink;
  /** One-line trust signal shown beneath the CTAs. */
  readonly trustStrip: string;
  /** Services (name + slug) for the bottom marquee band. */
  readonly services: ReadonlyArray<MarqueeService>;
};

/**
 * Home hero — tech-credibility register (Vercel / Linear / Stripe). Left-aligned
 * two-tone headline with a typewriter eyebrow, an original CSS 3D dot-wave +
 * soft brand glow (desktop only), and a services marquee in the band where
 * Stripe runs its customer-logo cloud.
 *
 * Performance: the decoration is pure CSS/SVG (zero image bytes) and the H1 is
 * server-rendered, so the headline stays the LCP element. Only the typewriter
 * ships JS. The Section clips the decoration (`overflow-hidden`) — no h-scroll.
 */
export function Hero({
  eyebrowPhrases,
  headline,
  subhead,
  primaryCta,
  secondaryCta,
  trustStrip,
  services,
}: HeroProps) {
  return (
    <Section padding="none" className="relative isolate overflow-hidden">
      <HeroDecoration />
      <Container className="relative">
        <div className="flex max-w-2xl flex-col items-start gap-6 py-22.25 text-left sm:py-30.25 lg:py-34.25">
          <HeroTypewriter phrases={eyebrowPhrases} />
          <h1 className="text-display-2xl text-fg font-semibold tracking-tight text-balance">
            {headline.map((segment) => (
              <span
                key={segment.text}
                className={segment.accent ? "text-brand-500 dark:text-brand-400" : undefined}
              >
                {segment.text}
              </span>
            ))}
          </h1>
          <p className="text-body-lg text-fg-muted max-w-xl text-pretty">{subhead}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button
              size="lg"
              className="h-11 px-6 text-base"
              render={<Link href={primaryCta.href} data-analytics="cta:hero-primary" />}
            >
              {primaryCta.label}
              <ArrowRight />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="h-11 px-6 text-base"
              render={<Link href={secondaryCta.href} data-analytics="cta:hero-secondary" />}
            >
              {secondaryCta.label}
            </Button>
          </div>
          <p className="text-fg-muted text-body-sm mt-2">{trustStrip}</p>
        </div>
      </Container>
      <ServiceMarquee services={services} />
    </Section>
  );
}

/**
 * Decorative hero backdrop — a faint brand glow (`.hero-ribbon`) for colour
 * depth plus a 3D wave of dots. Fully `aria-hidden` and behind content
 * (`-z-10`); both are held clear of the top so they never touch the header,
 * and the parent Section clips the right-edge bleed.
 */
function HeroDecoration() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="hero-ribbon absolute top-[26%] right-[-4%] h-[68%] w-[64%] sm:w-[46%]" />
      <HeroDotWave className="hero-dotwave absolute top-36 right-[4%] hidden w-[84%] max-w-2xl sm:top-48 sm:right-[6%] sm:w-[60%] xl:block" />
    </div>
  );
}

/**
 * A 3D wave of dots — a grid sampled from a sine height field with perspective
 * falloff (back rows smaller, fainter, closer together; crests larger + brighter).
 * Server-rendered static SVG: it's inert markup (no executable JS → no TBT cost,
 * unlike a client-generated version) and adds no image request. Filled with a
 * brand→accent token gradient (theme-aware stops, see globals.css). Desktop-only
 * + aria-hidden; coordinates rounded to keep the markup compact.
 */
function HeroDotWave({ className }: { readonly className?: string }) {
  const COLS = 26;
  const ROWS = 11;
  const GAP_X = 24;
  const SHEAR = 11; // per-row rightward shift → perspective tilt
  const ROW_GAP = 30;

  const dots: Array<{ x: number; y: number; r: number; o: number; key: string }> = [];
  for (let row = 0; row < ROWS; row += 1) {
    const depth = row / (ROWS - 1); // 0 = front, 1 = receding back
    for (let col = 0; col < COLS; col += 1) {
      const wave = Math.sin((col / COLS) * Math.PI * 3 + depth * Math.PI * 1.4); // -1..1
      const crest = wave * 0.5 + 0.5; // 0..1
      const x = Math.round(col * GAP_X + row * SHEAR);
      const y = Math.round(
        300 - row * ROW_GAP * (1 - 0.32 * depth) - wave * 18 * (1 - 0.25 * depth),
      );
      const r = Math.round((3.9 - 1.4 * depth) * (0.6 + 0.4 * crest) * 10) / 10;
      const o = Math.round((1 - 0.4 * depth) * (0.5 + 0.5 * crest) * 100) / 100;
      dots.push({ x, y, r, o, key: `${row}-${col}` });
    }
  }

  return (
    <svg
      className={className}
      viewBox="-4 76 722 250"
      fill="url(#hero-dot-grad)"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hero-dot-grad" x1="0" y1="0" x2="1" y2="1">
          {/* Theme-aware stops: darker/saturated on light (the lighter tones
              wash out on white), lighter on dark. See globals.css. */}
          <stop offset="0%" className="hero-dot-stop-1" />
          <stop offset="55%" className="hero-dot-stop-2" />
          <stop offset="100%" className="hero-dot-stop-3" />
        </linearGradient>
      </defs>
      {dots.map((d) => (
        <circle key={d.key} cx={d.x} cy={d.y} r={d.r} opacity={d.o} />
      ))}
    </svg>
  );
}
