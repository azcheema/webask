"use client";

import { useConsent } from "./consent-context";

/**
 * Footer control to reopen the consent banner so a visitor can change or
 * withdraw their choice at any time (the GDPR right the Cookie Policy promises).
 * Renders nothing when no cookie-based analytics is configured — there'd be
 * nothing to manage. Styled to match the sibling footer legal links.
 */
export function CookieSettingsButton() {
  const { hasAnalytics, openSettings } = useConsent();
  if (!hasAnalytics) return null;

  return (
    <button
      type="button"
      onClick={openSettings}
      className="text-fg-muted hover:text-fg cursor-pointer transition-colors"
    >
      Cookie settings
    </button>
  );
}
