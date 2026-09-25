/*
 * Client-safe analytics core. Deliberately free of zod / server-only / React so
 * it can be imported anywhere (server or client) at near-zero bundle cost — the
 * `perf-budget` feature established that the shared client bundle is sensitive,
 * so the event helpers must stay light.
 *
 * Everything here no-ops unless the visitor has *granted* consent AND a GA4
 * tag has actually loaded (`window.gtag`). That keeps the "consent first"
 * contract from `data/copy/legal.ts` true at the lowest layer: even a stray
 * `track()` call can't send a hit before consent.
 */

/** localStorage key holding the visitor's analytics-consent decision. */
export const ANALYTICS_CONSENT_KEY = "webask:analytics-consent";

/**
 * Custom DOM event broadcast on the same tab when consent changes, so every
 * `useSyncExternalStore` subscriber re-reads. (`storage` only fires in *other*
 * tabs, so we need our own same-tab signal.)
 */
export const CONSENT_CHANGE_EVENT = "webask:consent-change";

export type ConsentState = "granted" | "denied" | "unset";

/** The GA4 events we send, per `docs/strategy/measurement.md`. */
export type AnalyticsEvent =
  | "cta_click"
  | "outbound_click"
  | "form_view"
  | "form_start"
  | "form_submit_attempt"
  | "form_submit_success"
  | "form_submit_error";

type AnalyticsParams = Readonly<Record<string, string | number | boolean | undefined>>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    clarity?: (...args: unknown[]) => void;
  }
}

/** Read the persisted consent decision. Returns `"unset"` on the server or when nothing is stored. */
export function readConsent(): ConsentState {
  if (typeof window === "undefined") return "unset";
  try {
    const value = window.localStorage.getItem(ANALYTICS_CONSENT_KEY);
    return value === "granted" || value === "denied" ? value : "unset";
  } catch {
    // localStorage can throw (privacy mode, disabled storage) — treat as unset.
    return "unset";
  }
}

/** Persist a consent decision and notify same-tab subscribers. */
export function writeConsent(state: Exclude<ConsentState, "unset">): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(ANALYTICS_CONSENT_KEY, state);
  } catch {
    // Non-fatal: if we can't persist, the banner just reappears next load.
  }
  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

/** True once the visitor has opted in. The single gate all sending checks. */
export function hasAnalyticsConsent(): boolean {
  return readConsent() === "granted";
}

/** Send a GA4 event — silently dropped unless consent is granted and gtag is live. */
export function track(event: AnalyticsEvent, params?: AnalyticsParams): void {
  if (typeof window === "undefined") return;
  if (!hasAnalyticsConsent()) return;
  window.gtag?.("event", event, params ?? {});
}

/** Send a GA4 `page_view` for a client-side navigation. Same consent gate as `track`. */
export function trackPageview(path: string): void {
  if (typeof window === "undefined") return;
  if (!hasAnalyticsConsent()) return;
  window.gtag?.("event", "page_view", { page_path: path });
}
