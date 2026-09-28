import Image from "next/image";
import Link from "next/link";

import type { TeamMember } from "@/data/team";
import { formatPublishedDate } from "@/lib/format-date";

type AuthorBylineProps = {
  readonly author: TeamMember;
  readonly datePublished: string;
  /** Last substantive edit. Shown as "Updated …" only when later than `datePublished`. */
  readonly dateModified?: string;
  readonly readingTime: string;
};

/**
 * Post byline — author headshot + linked name (→ the author's `/about#slug`
 * anchor, which is also their `Person` JSON-LD `@id`), role, publish date, the
 * update date when there is one, and reading time. The visible link target and
 * dates match the structured-data `author`, `datePublished` and `dateModified`,
 * so the E-E-A-T signal a reader sees and the one a crawler reads agree.
 */
export function AuthorByline({
  author,
  datePublished,
  dateModified,
  readingTime,
}: AuthorBylineProps) {
  // ISO `YYYY-MM-DD` strings compare correctly as strings.
  const updated = dateModified !== undefined && dateModified > datePublished ? dateModified : null;

  return (
    <div className="flex items-center gap-3">
      <Image
        src={author.photo}
        alt={author.photoAlt}
        width={44}
        height={44}
        className="size-11 shrink-0 rounded-full object-cover"
      />
      <div className="text-body-sm flex flex-col gap-0.5">
        <Link
          href={`/about#${author.slug}`}
          className="text-fg hover:text-link font-medium transition-colors"
        >
          {author.name}
        </Link>
        <p className="text-fg-muted">
          {author.role}
          {" · "}
          <time dateTime={datePublished}>{formatPublishedDate(datePublished)}</time>
          {updated ? (
            <>
              {" · Updated "}
              <time dateTime={updated}>{formatPublishedDate(updated)}</time>
            </>
          ) : null}
          {" · "}
          {readingTime}
        </p>
      </div>
    </div>
  );
}
