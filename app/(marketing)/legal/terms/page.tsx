import type { Metadata } from "next";

import type { BreadcrumbsItem } from "@/components/layout/breadcrumbs";
import { LegalDocument } from "@/components/marketing";
import { terms } from "@/data/copy/legal";
import { breadcrumbsNode, buildGraph, renderJsonLd, webpageNode } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

const PATH = "/legal/terms";

const breadcrumbs: ReadonlyArray<BreadcrumbsItem> = [
  { label: "Home", href: "/" },
  { label: "Legal", href: "/legal/privacy" },
  { label: "Terms" },
];

export const metadata: Metadata = buildMetadata({
  title: terms.meta.title,
  description: terms.meta.description,
  path: PATH,
  // Draft placeholder copy stays out of the index until vetted text lands.
  noindex: terms.draft,
});

const jsonLd = renderJsonLd(
  buildGraph(
    webpageNode({
      path: PATH,
      name: terms.meta.title,
      description: terms.meta.description,
    }),
    breadcrumbsNode(PATH, [
      { name: "Home", path: "/" },
      { name: "Terms", path: PATH },
    ]),
  ),
);

export default function TermsOfServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <LegalDocument document={terms} breadcrumbs={breadcrumbs} />
    </>
  );
}
