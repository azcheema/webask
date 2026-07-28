/*
 * Shared date formatting for content surfaces (blog, case studies). Posts store
 * ISO `YYYY-MM-DD` strings; this renders the human form in a fixed locale +
 * UTC so server and client agree (no hydration drift, no timezone slip on the
 * date boundary).
 */

const PUBLISHED_DATE_FORMATTER = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

/** "2026-06-21" → "June 21, 2026". */
export function formatPublishedDate(iso: string): string {
  return PUBLISHED_DATE_FORMATTER.format(new Date(`${iso}T00:00:00Z`));
}
