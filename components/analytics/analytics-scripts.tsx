"use client";

import Script from "next/script";

import { useConsent } from "./consent-context";

type AnalyticsScriptsProps = {
  readonly gaId: string | undefined;
  readonly clarityId: string | undefined;
};

/**
 * Consent-gated GA4 + Microsoft Clarity loaders.
 *
 * Nothing renders until the visitor has *granted* consent (and we've mounted,
 * so server output is deterministic). Each tool also requires its ID to be
 * configured — absent IDs (local dev, preview before the property exists) keep
 * the tool dormant, exactly like the Resend gate. When consent is later
 * withdrawn the `<Script>`s unmount and `lib/analytics` stops sending events;
 * already-set GA/Clarity cookies persist to their natural expiry (a documented
 * MVP limitation — full cookie deletion is a Phase 4 follow-up).
 */
export function AnalyticsScripts({ gaId, clarityId }: AnalyticsScriptsProps) {
  const { consent, mounted } = useConsent();

  if (!mounted || consent !== "granted") return null;

  return (
    <>
      {gaId ? (
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
      ) : null}

      {clarityId ? (
        <Script id="clarity-init" strategy="lazyOnload">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${clarityId}");
          `}
        </Script>
      ) : null}
    </>
  );
}
