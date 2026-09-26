import type { PriceCadence, ServicePricing } from "@/data/services";

/*
 * Price formatting — GBP.
 *
 * The inherited helper was `formatUSD` and printed "USD $4,500": the "USD"
 * prefix earned its place on an internationally-marketed .com. On a .co.uk
 * selling to UK businesses in pounds it is noise — "£4,500" is unambiguous to
 * every reader who matters, and the redundant currency code reads as an
 * unlocalised import.
 *
 * `content-guidelines.md` still asks for the code on FIRST reference in PROSE
 * ("GBP £3,500", then "£3,500"). That rule is about body copy; these helpers
 * render price chips and table cells where the symbol alone is correct.
 */

const gbp = new Intl.NumberFormat("en-GB");

/** "£4,500" — thousands-separated, no decimals. The amount is already GBP. */
export const formatGBP = (amount: number): string => `£${gbp.format(amount)}`;

/**
 * Shown wherever a price is displayed prominently.
 *
 * Deliberately hedged: decision gate **D2** (is a non-established taxable person
 * supplying UK B2B customers within scope for UK VAT, or outside it under the
 * reverse charge?) is open. Printing a definitive "inc. VAT" or "ex. VAT" before
 * the accountant answers would be a pricing claim we cannot stand behind.
 * Replace this constant — not the individual call sites — once D2 resolves.
 */
export const VAT_NOTE = "+ VAT where applicable";

/** Human label for a service's billing cadence, shown beside the starting price. */
export const cadenceLabel: Record<PriceCadence, string> = {
  project: "per project",
  monthly: "per month",
};

export const SETUP_LABEL = "set-up";
export const USAGE_LABEL = "usage at cost";

/**
 * Everything after the starting figure, in one string:
 * "per month per location · £299 set-up · usage at cost" — each part only
 * when the catalogue entry carries it. The hero, the price card, the grid
 * card and the pricing table all render this, so a monthly plan with a set-up
 * component reads the same on every surface (research 11 AE.2).
 */
export function pricingQualifier(pricing: ServicePricing): string {
  const cadence = pricing.unit
    ? `${cadenceLabel[pricing.cadence]} ${pricing.unit}`
    : cadenceLabel[pricing.cadence];
  const parts = [cadence];
  if (pricing.setupAmount !== undefined) {
    parts.push(`${formatGBP(pricing.setupAmount)} ${SETUP_LABEL}`);
  }
  if (pricing.usageNote) parts.push(USAGE_LABEL);
  return parts.join(" · ");
}

/** "Starting at £99 per month per location · £299 set-up · usage at cost". */
export function formatPricing(pricing: ServicePricing): string {
  return `Starting at ${formatGBP(pricing.startingAmount)} ${pricingQualifier(pricing)}`;
}
