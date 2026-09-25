"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import { useConsent } from "./consent-context";

/**
 * Non-modal cookie-consent banner, pinned to the bottom of the viewport.
 *
 * - **Non-modal by design**: it does not trap focus or block the page (a
 *   consent wall would be both a UX and an a11y anti-pattern). It's a labelled
 *   `region` landmark so AT users can jump to it.
 * - **No layout shift**: `position: fixed` keeps it out of flow, so it never
 *   pushes content (CLS-safe). It mounts post-hydration via the `mounted` gate,
 *   so a visitor who already decided sees no flash.
 * - **Honest gate**: only shown when a cookie-based analytics tool is actually
 *   configured (`hasAnalytics`) and the visitor hasn't decided — or when they
 *   reopened it from the footer "Cookie settings" control.
 */
export function ConsentBanner() {
  const { consent, mounted, hasAnalytics, isSettingsOpen, grant, deny, closeSettings } =
    useConsent();

  const visible = mounted && hasAnalytics && (consent === "unset" || isSettingsOpen);
  if (!visible) return null;

  return (
    <div
      role="region"
      aria-label="Cookie consent"
      className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 fixed inset-x-0 bottom-0 z-40 p-3 motion-safe:duration-300 sm:p-4"
    >
      <div className="border-border bg-surface text-fg mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border p-5 shadow-lg sm:flex-row sm:items-center sm:gap-6">
        <p className="text-body-sm text-fg-muted text-pretty">
          We use analytics cookies to understand how the site is used and improve it. Vercel&rsquo;s
          privacy-friendly analytics always runs without cookies. See our{" "}
          <Link
            href="/legal/cookies"
            prefetch={false}
            className="text-link font-medium underline-offset-4 hover:underline"
          >
            Cookie Policy
          </Link>
          . You can change this any time.
        </p>
        <div className="flex shrink-0 items-center gap-2.5 sm:justify-end">
          {isSettingsOpen ? (
            <Button variant="ghost" size="sm" onClick={closeSettings}>
              Close
            </Button>
          ) : null}
          {/*
           * Reject and Accept share the same variant, size and weight on purpose.
           * PECR consent must be freely given, and the ICO's main enforcement
           * point is a banner that makes rejecting harder or quieter than
           * accepting (docs/03 § A4). Do not "promote" Accept to the filled
           * primary style.
           */}
          <Button variant="outline" size="sm" onClick={deny}>
            Reject analytics
          </Button>
          <Button variant="outline" size="sm" onClick={grant}>
            Accept analytics
          </Button>
        </div>
      </div>
    </div>
  );
}
