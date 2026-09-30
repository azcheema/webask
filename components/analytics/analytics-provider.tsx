"use client";

import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { AnalyticsScripts } from "./analytics-scripts";
import { ConsentBanner } from "./consent-banner";
import { ConsentProvider } from "./consent-context";
import { ClickTracker, PageviewTracker } from "./trackers";

type AnalyticsProviderProps = {
  readonly children: React.ReactNode;
  readonly gaId: string | undefined;
  /**
   * True only when running on Vercel. The Vercel components fetch their
   * `script.js` under `/_vercel/`, which exists only on the Vercel edge — under
   * a plain `next start` (CI Lighthouse, local) those 404 and log console
   * errors that fail Lighthouse Best Practices. They can't collect off-platform
   * anyway, so we simply don't mount them there.
   */
  readonly isVercel: boolean;
};

/**
 * Single mount point for the whole analytics + consent stack, wrapped around
 * the app shell in `app/layout.tsx`.
 *
 * - **Always on, cookieless** (no consent needed): Vercel Analytics + Speed
 *   Insights. They render nothing off-Vercel / in dev.
 * - **Consent-gated**: GA4 (`AnalyticsScripts`), plus the event trackers,
 *   which no-op until consent is granted. GA4 is the only cookie tool; the
 *   fork's Microsoft Clarity loader was dropped before launch (founder,
 *   1 October 2026) — do not re-add it from the fork.
 * - The `ConsentProvider` wraps `children` too, so the footer "Cookie settings"
 *   control can reach `useConsent`.
 *
 * IDs are read server-side (`lib/env.ts`) and passed in as plain props, keeping
 * zod out of the client bundle. `hasAnalytics` decides whether the banner is
 * ever shown — no GA4 ID configured means nothing to consent to.
 */
export function AnalyticsProvider({ children, gaId, isVercel }: AnalyticsProviderProps) {
  const hasAnalytics = Boolean(gaId);

  return (
    <ConsentProvider hasAnalytics={hasAnalytics}>
      {children}
      {isVercel ? (
        <>
          <VercelAnalytics />
          <SpeedInsights />
        </>
      ) : null}
      <AnalyticsScripts gaId={gaId} />
      <PageviewTracker />
      <ClickTracker />
      <ConsentBanner />
    </ConsentProvider>
  );
}
