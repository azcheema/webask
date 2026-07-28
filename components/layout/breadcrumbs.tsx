import * as React from "react";
import Link from "next/link";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export type BreadcrumbsItem = {
  label: string;
  /** Omit on the last item to render it as the current page. */
  href?: string;
};

type BreadcrumbsProps = {
  /**
   * The breadcrumb trail, root → current page. Pass the same array to
   * `breadcrumbsNode({ items })` in `lib/jsonld.ts` so the visual + structured
   * data agree.
   */
  items: ReadonlyArray<BreadcrumbsItem>;
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <Breadcrumb className={className}>
      <BreadcrumbList>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const key = `${item.label}-${index}`;

          return (
            <React.Fragment key={key}>
              <BreadcrumbItem>
                {isLast || !item.href ? (
                  <BreadcrumbPage>{item.label}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink render={<Link href={item.href} />}>{item.label}</BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {isLast ? null : <BreadcrumbSeparator />}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
