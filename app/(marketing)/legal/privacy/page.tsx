import type { Metadata } from "next";

import type { BreadcrumbsItem } from "@/components/layout/breadcrumbs";
import { LegalDocument } from "@/components/marketing";
import { privacy } from "@/data/copy/legal";
import { breadcrumbsNode, buildGraph, renderJsonLd, webpageNode } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

const PATH = "/legal/privacy";

const breadcrumbs: ReadonlyArray<BreadcrumbsItem> = [
  { label: "Home", href: "/" },
  { label: "Legal", href: "/legal/privacy" },
  { label: "Privacy" },
];

export const metadata: Metadata = buildMetadata({
  title: privacy.meta.title,
  description: privacy.meta.description,
  path: PATH,
  // Draft placeholder copy stays out of the index until vetted text lands.
  noindex: privacy.draft,
});

const jsonLd = renderJsonLd(
  buildGraph(
    webpageNode({
      path: PATH,
      name: privacy.meta.title,
      description: privacy.meta.description,
    }),
    breadcrumbsNode(PATH, [
      { name: "Home", path: "/" },
      { name: "Privacy", path: PATH },
    ]),
  ),
);

export default function PrivacyPolicyPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <LegalDocument document={privacy} breadcrumbs={breadcrumbs} />
    </>
  );
}
