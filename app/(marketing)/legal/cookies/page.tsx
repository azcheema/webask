import type { Metadata } from "next";

import type { BreadcrumbsItem } from "@/components/layout/breadcrumbs";
import { LegalDocument } from "@/components/marketing";
import { cookies } from "@/data/copy/legal";
import { breadcrumbsNode, buildGraph, renderJsonLd, webpageNode } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

const PATH = "/legal/cookies";

const breadcrumbs: ReadonlyArray<BreadcrumbsItem> = [
  { label: "Home", href: "/" },
  { label: "Legal", href: "/legal/privacy" },
  { label: "Cookies" },
];

export const metadata: Metadata = buildMetadata({
  title: cookies.meta.title,
  description: cookies.meta.description,
  path: PATH,
  // Draft placeholder copy stays out of the index until vetted text lands.
  noindex: cookies.draft,
});

const jsonLd = renderJsonLd(
  buildGraph(
    webpageNode({
      path: PATH,
      name: cookies.meta.title,
      description: cookies.meta.description,
    }),
    breadcrumbsNode(PATH, [
      { name: "Home", path: "/" },
      { name: "Cookies", path: PATH },
    ]),
  ),
);

export default function CookiePolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <LegalDocument document={cookies} breadcrumbs={breadcrumbs} />
    </>
  );
}
