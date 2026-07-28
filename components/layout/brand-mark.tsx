import Link from "next/link";

import { cn } from "@/lib/utils";

/*
 * The WebAsk wordmark.
 *
 * D5 locks a TYPOGRAPHIC wordmark set in Geist SemiBold at ~-0.02em tracking,
 * black and white variants only. That is rendered here as live text rather than
 * as images, which is both more faithful and cheaper:
 *
 *   - It is genuinely Geist SemiBold — the font is already loaded by
 *     `next/font/google` in app/layout.tsx and used for every heading, so the
 *     wordmark costs zero extra bytes and cannot drift from the type system.
 *   - "Black and white variants only" falls out of `currentColor`: `text-fg` is
 *     near-black in light and near-white in dark. No recolouring is possible.
 *   - It removes the two <img> requests (and the stacked light/dark <img> hack
 *     the Naxdor mark needed) along with their CLS risk.
 *
 * Static SVG wordmarks for off-site use (decks, email signatures) live at
 * public/brand/wordmark-{black,white}.svg. The square app icon is generated
 * from public/brand/favicon.svg — see scripts/build-brand-assets.ts.
 */

type BrandMarkProps = {
  className?: string;
  /** Render as a link to `/` (default) or a plain mark for use inside an existing link/button. */
  asLink?: boolean;
};

/** Minimum clear space is the height of one letter — enforced by layout, not here. */
const WORDMARK_CLASSES = "text-h4 font-sans font-semibold tracking-[-0.02em] text-fg";

export function BrandMark({ className, asLink = true }: BrandMarkProps) {
  const mark = <span className={WORDMARK_CLASSES}>WebAsk</span>;

  if (!asLink) {
    return (
      <span data-slot="brand-mark" className={cn("inline-flex items-center", className)}>
        {mark}
      </span>
    );
  }

  return (
    <Link
      data-slot="brand-mark"
      href="/"
      aria-label="WebAsk — Home"
      className={cn(
        "focus-visible:ring-ring inline-flex items-center rounded-md outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        className,
      )}
    >
      {mark}
    </Link>
  );
}
