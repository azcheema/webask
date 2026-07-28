import type { Metadata } from "next";

import type { BreadcrumbsItem } from "@/components/layout/breadcrumbs";
import { LegalDocument } from "@/components/marketing";
import { companyInformation } from "@/data/copy/legal";
import { breadcrumbsNode, buildGraph, renderJsonLd, webpageNode } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

/*
 * Statutory entity disclosure — a UK-specific addition to the inherited Naxdor
 * sitemap (docs/04 § 3). Required because "WebAsk" is a trading name, not a
 * registered company, so a visitor has no public register to look us up in.
 *
 * Unlike the other three legal pages this one is NOT a draft and IS indexable:
 * it states verifiable facts from data/site.ts rather than copy awaiting a legal
 * review. It is also a genuine E-E-A-T signal — being findable and unambiguous
 * about who you are is exactly what "who is behind this site" evaluation looks
 * for, and most agencies fudge it.
 */

const PATH = "/legal/company-information";

const breadcrumbs: ReadonlyArray<BreadcrumbsItem> = [
  { label: "Home", href: "/" },
  { label: "Legal", href: "/legal/privacy" },
  { label: "Company Information" },
];

export const metadata: Metadata = buildMetadata({
  title: companyInformation.meta.title,
  description: companyInformation.meta.description,
  path: PATH,
  noindex: companyInformation.draft,
});

const jsonLd = renderJsonLd(
  buildGraph(
    webpageNode({
      path: PATH,
      name: companyInformation.meta.title,
      description: companyInformation.meta.description,
    }),
    breadcrumbsNode(PATH, [
      { name: "Home", path: "/" },
      { name: "Company Information", path: PATH },
    ]),
  ),
);

export default function CompanyInformationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <LegalDocument document={companyInformation} breadcrumbs={breadcrumbs} />
    </>
  );
}
