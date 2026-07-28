import "server-only";

import type { ReactElement } from "react";

/*
 * Shared Open Graph image template — the single visual source of truth for
 * both OG render paths:
 *   - app/opengraph-image.tsx  → the sitewide default / home card (fixed copy)
 *   - app/og/route.tsx         → per-page cards, title driven by query param
 *
 * Keeping the markup here (rather than duplicated in each endpoint) means the
 * brand card can never drift between the default and the parametrized image.
 *
 * NOTE: this is `satori` JSX (next/og), not the DOM. Every element with more
 * than one child MUST set `display: flex`, and `next/image` does not apply —
 * raster art is embedded as a base64 data URI via getOgLogoSrc().
 */

export const OG_SIZE = { width: 1200, height: 630 } as const;
export const OG_CONTENT_TYPE = "image/png";

/** Titles longer than this are truncated with an ellipsis so they always fit. */
export const OG_TITLE_MAX = 100;

/** Sitewide fallback headline when no usable title is supplied. */
export const OG_DEFAULT_TITLE = "Digital services for UK small businesses";

/* Deep teal, brand-500 → brand-700 → brand-900 (styles/tokens.css). */
const BRAND_GRADIENT = "linear-gradient(135deg, #0F766E 0%, #0B4F48 60%, #07302C 100%)";
const ACCENT_WARM = "#F97316";

/*
 * The wordmark is drawn as TEXT, not an embedded image — matching
 * components/layout/brand-mark.tsx, where D5's typographic wordmark is also
 * live text. Naxdor inlined a base64 PNG here because its mark was a geometric
 * logo; a typographic one needs no bytes, no filesystem read at request time,
 * and can never drift from the header.
 */

type OgImageDocumentProps = {
  /** The headline. Already trimmed/truncated by the caller. */
  title: string;
  /** Small uppercase label above the title (e.g. a section/category). */
  eyebrow?: string | undefined;
  /** Optional subline under the title — used by the default card's tagline. */
  subtitle?: string | undefined;
};

/** Headline scales down as the title grows so long titles still fit two lines. */
function titleFontSize(title: string): number {
  if (title.length > 56) return 56;
  if (title.length > 36) return 64;
  return 76;
}

export function OgImageDocument({ title, eyebrow, subtitle }: OgImageDocumentProps): ReactElement {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "80px",
        background: BRAND_GRADIENT,
        color: "#FFFFFF",
        fontFamily: '"Geist", -apple-system, BlinkMacSystemFont, sans-serif',
      }}
    >
      {/* Top: wordmark */}
      <div style={{ display: "flex", fontSize: 52, fontWeight: 600, letterSpacing: -1 }}>
        WebAsk
      </div>

      {/* Middle: eyebrow + headline + optional subline */}
      <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 1040 }}>
        {eyebrow ? (
          <div
            style={{
              display: "flex",
              fontSize: 24,
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: ACCENT_WARM,
            }}
          >
            {eyebrow}
          </div>
        ) : null}
        <div
          style={{
            display: "flex",
            fontSize: titleFontSize(title),
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: -2,
          }}
        >
          {title}
        </div>
        {subtitle ? (
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 400,
              lineHeight: 1.3,
              color: "rgba(255,255,255,0.75)",
              maxWidth: 880,
            }}
          >
            {subtitle}
          </div>
        ) : null}
      </div>

      {/* Bottom: domain, with the accent dot */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 16, height: 16, borderRadius: 4, background: ACCENT_WARM }} />
        <div
          style={{
            display: "flex",
            fontSize: 22,
            fontWeight: 500,
            color: "rgba(255,255,255,0.85)",
            letterSpacing: 0.5,
          }}
        >
          webask.co.uk
        </div>
      </div>
    </div>
  );
}

/**
 * Normalize an arbitrary title into a headline that fits the card: trim, fall
 * back to the sitewide default when empty, and truncate overly long strings.
 */
export function normalizeOgTitle(raw: string | null | undefined): string {
  const trimmed = (raw ?? "").trim();
  if (trimmed.length === 0) return OG_DEFAULT_TITLE;
  if (trimmed.length > OG_TITLE_MAX) return `${trimmed.slice(0, OG_TITLE_MAX - 1).trimEnd()}…`;
  return trimmed;
}
