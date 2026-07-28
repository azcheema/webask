import * as React from "react";
import Link from "next/link";

/*
 * Element overrides for MDX-rendered long-form content. Everything not listed
 * here falls through to the `prose prose-webask` styles on the wrapper, so the
 * map stays minimal. Reused by every MDX surface (service bodies now, blog +
 * case studies in Phase 3).
 */

type AnchorProps = React.ComponentPropsWithoutRef<"a">;

function MdxLink({ href = "", children, ...props }: AnchorProps) {
  const isInternal = href.startsWith("/") || href.startsWith("#");

  if (isInternal) {
    // prefetch={false} until Phase 1/2 destinations exist — prefetching a 404
    // writes console errors that fail Lighthouse (same policy as nav + home).
    // Markdown links only carry href + children, so nothing else to forward.
    return (
      <Link href={href} prefetch={false}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  );
}

export const mdxComponents = {
  a: MdxLink,
};
