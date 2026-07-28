/**
 * Portfolio strip — founder prior work, honestly labeled.
 *
 * Consumed by the home page (portfolio strip below the proof section) and
 * the About page. Phase 1's cold-start trust strategy treats this as one of
 * four levers — see `docs/phases/phase-1-mvp.md` § Cold-start trust
 * strategy / 4. Portfolio strip.
 *
 * **Every entry is founder prior work, NOT WebAsk work.** The cards must be
 * labeled as "Founder prior work" wherever they render so prospects aren't
 * misled. When real WebAsk case studies land in Phase 3, this data source
 * either retires or splits into "WebAsk" vs "Prior work" sections.
 *
 * Entries below are scaffolds — founder supplies real projects, outcomes,
 * roles, and screenshots before this branch merges.
 */

export type PortfolioEntry = {
  /** URL-safe slug. */
  readonly slug: string;
  /** Project or product name. */
  readonly name: string;
  /** Plain-English summary of what it is. */
  readonly summary: string;
  /** Concrete outcome — numbers when possible ("3.4× lead volume in 90 days"). */
  readonly outcome: string;
  /** Founder's role on this project — "Lead engineer", "Founding engineer", etc. */
  readonly role: string;
  /** Industry / sector — helps prospects find themselves in the work. */
  readonly industry: string;
  /** Period — "2022–2024" or "2023". */
  readonly period: string;
  /** Screenshot path relative to /public. 16:10 aspect, ≥ 1280px wide. */
  readonly screenshot: string;
  readonly screenshotAlt: string;
  /** Optional live URL (omit if site is offline / behind auth / under NDA). */
  readonly liveUrl?: string;
};

export const portfolio: ReadonlyArray<PortfolioEntry> = [
  {
    slug: "todo-entry-1",
    // TODO(content-copy): real project name. If under NDA, use "Stealth B2B SaaS" or similar.
    name: "TODO(content-copy): Project name #1",
    summary:
      "TODO(content-copy): one-sentence description of what this product or site does and who it serves.",
    outcome:
      "TODO(content-copy): one concrete result — e.g. '3.4× lead volume in 90 days', 'cut LCP from 4.8s to 1.6s', 'shipped to 50k MAU in six months'.",
    role: "TODO(content-copy): Lead engineer / Founding engineer / Tech lead / Solo developer",
    industry: "TODO(content-copy): SaaS / e-commerce / aesthetic clinic / etc.",
    period: "TODO(content-copy): 2023–2024",
    screenshot: "/portfolio/todo-1.png",
    screenshotAlt:
      "TODO(content-copy): describe the screenshot — e.g. 'Dashboard view of the X analytics product'",
    // TODO(content-copy): liveUrl optional. Omit the field if the site is offline.
  },
  {
    slug: "todo-entry-2",
    name: "TODO(content-copy): Project name #2",
    summary: "TODO(content-copy): one-sentence description.",
    outcome: "TODO(content-copy): one concrete result.",
    role: "TODO(content-copy): role",
    industry: "TODO(content-copy): industry",
    period: "TODO(content-copy): year(s)",
    screenshot: "/portfolio/todo-2.png",
    screenshotAlt: "TODO(content-copy): describe the screenshot",
  },
  {
    slug: "todo-entry-3",
    name: "TODO(content-copy): Project name #3",
    summary: "TODO(content-copy): one-sentence description.",
    outcome: "TODO(content-copy): one concrete result.",
    role: "TODO(content-copy): role",
    industry: "TODO(content-copy): industry",
    period: "TODO(content-copy): year(s)",
    screenshot: "/portfolio/todo-3.png",
    screenshotAlt: "TODO(content-copy): describe the screenshot",
  },
  // TODO(content-copy): add up to 3 more entries (6 total max — fits one row on
  // desktop without dilution). Fewer than 3 is fine but the home strip looks
  // sparse below that.
] as const;
