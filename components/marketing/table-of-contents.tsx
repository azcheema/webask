import type { BlogTocItem } from "@/lib/blog";
import { cn } from "@/lib/utils";

type TableOfContentsProps = {
  readonly items: ReadonlyArray<BlogTocItem>;
};

/**
 * In-page table of contents for long-form posts. Server-rendered anchor links
 * (no scroll-spy JS) to the `h2`/`h3` ids that the blog MDX heading override
 * stamps with the same `slugifyHeading`. Renders nothing for short posts with no
 * headings; the parent makes the wrapping aside sticky.
 */
export function TableOfContents({ items }: TableOfContentsProps) {
  if (items.length === 0) return null;

  return (
    <nav aria-label="Table of contents" className="flex flex-col gap-3">
      <p className="text-fg text-body-sm font-semibold">On this page</p>
      <ul className="border-border flex flex-col gap-2 border-l">
        {items.map((item) => (
          <li key={item.id} className={cn(item.depth === 3 ? "pl-7" : "pl-4")}>
            <a
              href={`#${item.id}`}
              className="text-fg-muted hover:text-link text-body-sm block text-pretty transition-colors"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
