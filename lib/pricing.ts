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
 * Decision gate **D2**, interim position adopted by the founder on 28 September
 * 2026 (research `00` § 6; `13-page-shape-proposal.md` § 7): WebAsk supplies
 * businesses only, and a UK business buying services from a supplier outside
 * the UK accounts for any VAT itself under the reverse charge — so no VAT is
 * added to our invoices and every figure is shown excluding VAT. The full
 * sentence lives on `/pricing` (`VAT_EXPLAINER`) and in the terms. Confirm with
 * HMRC and Skatteverket before cutover; if either answer differs, change these
 * two constants and the FAQ answers that repeat "excl. VAT".
 */
export const VAT_NOTE = "excl. VAT";

/** The one-sentence explanation shown once per table and on the pricing page. */
export const VAT_EXPLAINER =
  "All prices are in pounds and exclude VAT. We supply businesses only; a UK business customer accounts for any VAT under the reverse charge, so none is added to our invoices.";

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
