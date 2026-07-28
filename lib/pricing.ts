import type { PriceCadence } from "@/data/services";

const usd = new Intl.NumberFormat("en-US");

/** "$4,500" — USD, thousands-separated, no decimals. The amount is already USD. */
export const formatUSD = (amount: number): string => `$${usd.format(amount)}`;

/** Human label for a service's billing cadence, shown beside the starting price. */
export const cadenceLabel: Record<PriceCadence, string> = {
  project: "per project",
  monthly: "per month",
};
