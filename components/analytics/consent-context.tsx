"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";

import {
  CONSENT_CHANGE_EVENT,
  readConsent,
  writeConsent,
  type ConsentState,
} from "@/lib/analytics";

type ConsentContextValue = {
  /** Persisted decision. `"unset"` on the server + before the visitor chooses. */
  readonly consent: ConsentState;
  /** False during SSR + the first hydration render, true afterwards. Gates the banner so a decided visitor never sees a flash. */
  readonly mounted: boolean;
  /** True when at least one cookie-based tool (GA4 / Clarity) is configured. */
  readonly hasAnalytics: boolean;
  /** True when the visitor reopened the banner via "Cookie settings" after already deciding. */
  readonly isSettingsOpen: boolean;
  readonly grant: () => void;
  readonly deny: () => void;
  readonly openSettings: () => void;
  readonly closeSettings: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

/**
 * `useSyncExternalStore` reading the persisted consent decision. Subscribing to
 * both our same-tab `CONSENT_CHANGE_EVENT` and the cross-tab `storage` event
 * keeps every consumer in sync. The server snapshot is always `"unset"` so SSR
 * is deterministic; pairing it with `useMounted` below means we never render
 * consent-dependent UI until the client has read real storage.
 */
function subscribeConsent(callback: () => void): () => void {
  window.addEventListener(CONSENT_CHANGE_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_CHANGE_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

const NO_SUBSCRIBE = () => () => {};

export function ConsentProvider({
  children,
  hasAnalytics,
}: {
  readonly children: React.ReactNode;
  readonly hasAnalytics: boolean;
}) {
  const consent = useSyncExternalStore(
    subscribeConsent,
    readConsent,
    () => "unset" as ConsentState,
  );
  // server=false, client=true — the post-hydration flag (same approach the
  // theme toggle uses to avoid React 19's set-state-in-effect lint rule).
  const mounted = useSyncExternalStore(
    NO_SUBSCRIBE,
    () => true,
    () => false,
  );

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const closeSettings = useCallback(() => setIsSettingsOpen(false), []);
  const openSettings = useCallback(() => setIsSettingsOpen(true), []);
  const grant = useCallback(() => {
    writeConsent("granted");
    setIsSettingsOpen(false);
  }, []);
  const deny = useCallback(() => {
    writeConsent("denied");
    setIsSettingsOpen(false);
  }, []);

  const value = useMemo<ConsentContextValue>(
    () => ({
      consent,
      mounted,
      hasAnalytics,
      isSettingsOpen,
      grant,
      deny,
      openSettings,
      closeSettings,
    }),
    [consent, mounted, hasAnalytics, isSettingsOpen, grant, deny, openSettings, closeSettings],
  );

  return <ConsentContext value={value}>{children}</ConsentContext>;
}

export function useConsent(): ConsentContextValue {
  const value = useContext(ConsentContext);
  if (!value) {
    throw new Error("useConsent must be used within <ConsentProvider>");
  }
  return value;
}
