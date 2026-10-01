"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

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
 * keeps it dormant, exactly like the Resend gate.
 *
 * Withdrawal: unmounting the `<Script>`s does NOT stop a gtag.js that has
 * already run — its own listeners (enhanced measurement, history-change page
 * views) keep sending until the next full page load. So when consent turns
 * `denied` after this page started the tag, in this tab or another (the
 * `storage` event reaches the same store), the page reloads; after the reload
 * consent is `denied` and the tag never loads. Keyed on "this page started the
 * tag", not on `window.gtag`, so a `gtag` defined by anything else can never
 * cause a reload loop. Already-set GA cookies persist to their natural expiry
 * (a documented MVP limitation — full cookie deletion is a Phase 4 follow-up).
 */
export function AnalyticsScripts({ gaId }: AnalyticsScriptsProps) {
  const { consent, mounted } = useConsent();
  const tagStarted = useRef(false);
  const tagActive = mounted && consent === "granted" && Boolean(gaId);

  useEffect(() => {
    if (tagActive) {
      tagStarted.current = true;
    } else if (tagStarted.current && consent === "denied") {
      window.location.reload();
    }
  }, [tagActive, consent]);

  if (!tagActive || !gaId) return null;

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
