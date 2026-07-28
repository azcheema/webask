import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import type { Service } from "@/data/services";
import { cadenceLabel, formatUSD } from "@/lib/pricing";

type PricingCardProps = {
  /** The catalog entry to price. Reused on the service detail page and the pricing page. */
  readonly service: Service;
};

/**
 * Single-service price card: "Starting at USD $X", what bends the price
 * (`priceNote`, shown in place of an upper limit), and the included /
 * not-included scope. Meaning is carried by the "What's included" / "Not
 * included" labels (not icon color alone), so the check / cross marks are
 * decorative and `aria-hidden`.
 */
export function PricingCard({ service }: PricingCardProps) {
  const { pricing, includes, notIncluded, primaryCta } = service;

  return (
    <div className="border-border bg-surface flex flex-col gap-6 rounded-3xl border p-6 md:p-8">
      <div className="flex flex-col gap-2">
        <span className="text-link text-body-sm font-semibold tracking-wide uppercase">
          Starting at
        </span>
        <div className="flex flex-wrap items-baseline gap-x-2">
          <span className="text-display text-fg font-semibold tracking-tight">
            {`USD ${formatUSD(pricing.startingAmount)}`}
          </span>
          <span className="text-body-sm text-fg-muted">{cadenceLabel[pricing.cadence]}</span>
        </div>
      </div>

      {pricing.priceNote ? (
        <p className="text-body-sm text-fg-muted text-pretty">{pricing.priceNote}</p>
      ) : null}

      <div className="border-border border-t" />

      <div className="flex flex-col gap-3">
        <p className="text-body-sm text-fg font-semibold">What&apos;s included</p>
        <ul className="flex flex-col gap-2">
          {includes.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <Check className="text-brand-600 mt-0.5 size-4 shrink-0" aria-hidden />
              <span className="text-body-sm text-fg-muted text-pretty">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {notIncluded.length > 0 ? (
        <div className="flex flex-col gap-3">
          <p className="text-body-sm text-fg font-semibold">Not included</p>
          <ul className="flex flex-col gap-2">
            {notIncluded.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <X className="text-fg-muted mt-0.5 size-4 shrink-0" aria-hidden />
                <span className="text-body-sm text-fg-muted text-pretty">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <Button
        size="lg"
        className="h-11 w-full px-6 text-base"
        render={<Link href={primaryCta.href} prefetch={false} />}
      >
        {primaryCta.label}
        <ArrowRight />
      </Button>
    </div>
  );
}
