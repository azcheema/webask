import type { PriceCadence } from "@/data/services";

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
