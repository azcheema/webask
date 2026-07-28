"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import { track, trackPageview } from "@/lib/analytics";

/**
 * Fires a GA4 `page_view` on client-side navigations. The initial load's
 * page_view is sent by gtag's own `config` call, so we skip the first render to
 * avoid double-counting. No-ops without consent (the `trackPageview` gate).
 */
export function PageviewTracker() {
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    trackPageview(pathname);
  }, [pathname]);

  return null;
}

/**
 * One delegated, capture-phase click listener for the whole document:
 *   - elements tagged `data-analytics="cta:<id>"` → `cta_click`
 *   - clicks on cross-origin links → `outbound_click`
 * Declarative tagging means server-rendered CTAs stay server components — no
 * need to make every button a client island. No-ops without consent.
 */
export function ClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const origin = event.target;
      if (!(origin instanceof Element)) return;

      const el = origin.closest<HTMLElement>("[data-analytics], a[href]");
      if (!el) return;

      const tag = el.getAttribute("data-analytics");
      if (tag?.startsWith("cta:")) {
        track("cta_click", { cta_id: tag.slice("cta:".length) });
        return;
      }

      if (el instanceof HTMLAnchorElement) {
        try {
          const url = new URL(el.href, window.location.href);
          const isHttp = url.protocol === "http:" || url.protocol === "https:";
          if (isHttp && url.origin !== window.location.origin) {
            track("outbound_click", { href: url.href });
          }
        } catch {
          // Malformed href — nothing to track.
        }
      }
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, { capture: true });
  }, []);

  return null;
}
