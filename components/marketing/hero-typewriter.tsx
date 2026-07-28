"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type HeroTypewriterProps = {
  /** Phrases the eyebrow cycles through. The first is server-rendered. */
  readonly phrases: ReadonlyArray<string>;
  readonly className?: string;
};

const TYPE_MS = 65; // per-character while typing
const DELETE_MS = 35; // per-character while deleting
const HOLD_MS = 1500; // pause once a phrase is fully typed
const GAP_MS = 350; // pause once a phrase is fully deleted

/**
 * Typewriter eyebrow above the home H1 — types → holds → deletes → types the
 * next phrase, looping. Dependency-free (a single self-scheduling timeout).
 *
 * Performance / a11y contract:
 * - SSR + first client render show `phrases[0]` in full, so the line is painted
 *   before hydration (no CLS, nothing for the animation to delay) and the H1
 *   below it stays the LCP element.
 * - A fixed `min-h` reserves the line so changing phrase length never reflows.
 * - The animated text is `aria-hidden`; an `sr-only` line carries every phrase
 *   for assistive tech. `prefers-reduced-motion` skips the loop entirely.
 */
export function HeroTypewriter({ phrases, className }: HeroTypewriterProps) {
  const first = phrases[0] ?? "";
  const [display, setDisplay] = useState(first);

  useEffect(() => {
    // Nothing to cycle, or the user prefers reduced motion → leave phrases[0].
    if (phrases.length <= 1) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let phraseIndex = 0;
    let charIndex = (phrases[0] ?? "").length; // start fully typed
    let deleting = true; // …then begin by deleting it
    let timer: ReturnType<typeof setTimeout>;

    const tick = () => {
      const current = phrases[phraseIndex] ?? "";

      if (deleting) {
        charIndex -= 1;
        setDisplay(current.slice(0, charIndex));
        if (charIndex <= 0) {
          deleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          timer = setTimeout(tick, GAP_MS);
          return;
        }
        timer = setTimeout(tick, DELETE_MS);
        return;
      }

      charIndex += 1;
      setDisplay(current.slice(0, charIndex));
      if (charIndex >= current.length) {
        deleting = true;
        timer = setTimeout(tick, HOLD_MS);
        return;
      }
      timer = setTimeout(tick, TYPE_MS);
    };

    timer = setTimeout(tick, HOLD_MS); // hold the first phrase, then delete
    return () => clearTimeout(timer);
  }, [phrases]);

  return (
    <p
      className={cn(
        // `text-link` (brand-500 light / brand-300 dark) — brand-500 alone fails
        // 4.5:1 on dark bg at this small size; the link token is built for it.
        "text-link text-body-sm flex min-h-7 items-center font-medium tracking-tight",
        className,
      )}
    >
      <span className="sr-only">{phrases.join(". ")}</span>
      <span aria-hidden="true" className="inline-flex items-center">
        {display}
        <span className="hero-caret bg-link ml-0.5 inline-block h-[1.05em] w-px translate-y-px" />
      </span>
    </p>
  );
}
