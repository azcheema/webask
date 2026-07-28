/**
 * Shared content types for the `data/` and `data/copy/` catalogs.
 *
 * These are the lowest-level shapes that page-copy and service-catalog
 * modules reuse. Keep them narrow — anything page-specific lives in its
 * own copy module.
 */

export type CtaLink = {
  readonly label: string;
  readonly href: string;
};

export type FaqItem = {
  readonly question: string;
  readonly answer: string;
};

export type Stat = {
  readonly value: string;
  readonly label: string;
};

export type Meta = {
  readonly title: string;
  readonly description: string;
};

/**
 * A run of headline text. Segments marked `accent` render in the brand color
 * (the two-tone display headline used by the home `Hero`). The concatenated
 * `text` of all segments is the full, SEO-visible heading.
 */
export type HeroHeadlineSegment = {
  readonly text: string;
  readonly accent?: boolean;
};
