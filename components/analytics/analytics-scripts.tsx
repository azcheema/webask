"use client";

import Script from "next/script";

import { useConsent } from "./consent-context";

type AnalyticsScriptsProps = {
  readonly gaId: string | undefined;
};

/**
 * Consent-gated GA4 loader.
 *
 * Nothing renders until the visitor has *granted* consent (and we've mounted,
 * so server output is deterministic). GA4 also requires its ID to be
 * configured — an absent ID (local dev, preview before the property exists)
 * keeps it dormant, exactly like the Resend gate. When consent is later
 * withdrawn the `<Script>`s unmount and `lib/analytics` stops sending events;
 * already-set GA cookies persist to their natural expiry (a documented MVP
 * limitation — full cookie deletion is a Phase 4 follow-up).
 */
export function AnalyticsScripts({ gaId }: AnalyticsScriptsProps) {
  const { consent, mounted } = useConsent();

  if (!mounted || consent !== "granted" || !gaId) return null;

  return (
    <>
      <Script
        id="ga4-src"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(){ window.dataLayer.push(arguments); };
          window.gtag('js', new Date());
          window.gtag('config', '${gaId}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
