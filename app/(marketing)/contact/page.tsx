import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check, Clock, Mail, Phone } from "lucide-react";

import type { BreadcrumbsItem } from "@/components/layout/breadcrumbs";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import { CtaBand, FaqAccordion, PageHero, SectionHeading } from "@/components/marketing";
// Import directly, NOT via the marketing barrel: the barrel is imported by every
// marketing page, and re-exporting this form from it dragged its heavy client
// deps (zod + react-hook-form) into a shared chunk loaded site-wide. Keeping the
// import route-local confines those deps to /contact.
import { ContactForm } from "@/components/marketing/contact-form";
import { contact } from "@/data/copy/contact";
import { breadcrumbsNode, buildGraph, faqNode, renderJsonLd, webpageNode } from "@/lib/jsonld";
import { buildMetadata } from "@/lib/seo";

const PATH = "/contact";

const breadcrumbs: ReadonlyArray<BreadcrumbsItem> = [
  { label: "Home", href: "/" },
  { label: "Contact" },
];

export const metadata: Metadata = buildMetadata({
  title: contact.meta.title,
  description: contact.meta.description,
  path: PATH,
});

const contactJsonLd = renderJsonLd(
  buildGraph(
    webpageNode({ path: PATH, name: contact.meta.title, description: contact.meta.description }),
    breadcrumbsNode(PATH, [
      { name: "Home", path: "/" },
      { name: "Contact", path: PATH },
    ]),
    faqNode(
      PATH,
      contact.faqs.map((faq) => ({ q: faq.question, a: faq.answer })),
    ),
  ),
);

/** Pick the icon for an alt-channel row by its label. Email/Phone are protocol links; the rest are external. */
function channelIcon(label: string) {
  const key = label.toLowerCase();
  if (key === "email") return Mail;
  if (key === "phone") return Phone;
  return ArrowUpRight;
}

/**
 * WhatsApp glyph. lucide-react dropped brand icons (licensing), so this is a
 * local inline SVG. Monochrome via `currentColor` to inherit the row's hover
 * treatment — no hardcoded brand green (design-token rule).
 */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.999-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.892c0 2.096.549 4.142 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 005.71 1.447h.005c6.585 0 11.946-5.335 11.949-11.893a11.821 11.821 0 00-3.479-8.454" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: contactJsonLd }} />
      <PageHero breadcrumbs={breadcrumbs} title={contact.hero.h1} subhead={contact.hero.subhead} />

      <Section padding="lg">
        <Container size="lg">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            {/* Form column */}
            <div className="flex flex-col gap-8">
              <SectionHeading
                eyebrow={contact.form.eyebrow}
                title={contact.form.h2}
                intro={contact.form.intro}
              />
              <ContactForm copy={contact.form} />
            </div>

            {/* Sidebar. A plain div, not <aside>: it sits inside <main>, where a
                complementary landmark trips axe's
                landmark-complementary-is-top-level. */}
            <div className="flex flex-col gap-6">
              <div className="border-border bg-surface flex flex-col gap-5 rounded-2xl border p-6">
                <div className="flex flex-col gap-1">
                  <span className="text-fg-muted text-caption font-semibold tracking-wide uppercase">
                    {contact.sidebar.eyebrow}
                  </span>
                  <h2 className="text-h4 text-fg font-semibold tracking-tight text-pretty">
                    {contact.sidebar.heading}
                  </h2>
                </div>

                <ul className="flex flex-col gap-3">
                  {contact.sidebar.altChannels.map((channel) => {
                    const key = channel.label.toLowerCase();
                    const Icon = channelIcon(channel.label);
                    const isWhatsApp = key === "whatsapp";
                    // mailto:/tel: act in place; only real external links open a new tab.
                    const isExternal = channel.href.startsWith("http");
                    return (
                      <li key={channel.label}>
                        <Link
                          href={channel.href}
                          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="group flex items-center gap-3"
                        >
                          <span className="bg-muted text-fg-muted group-hover:text-link flex size-9 shrink-0 items-center justify-center rounded-lg transition-colors">
                            {isWhatsApp ? (
                              <WhatsAppIcon className="size-4" />
                            ) : (
                              <Icon aria-hidden className="size-4" />
                            )}
                          </span>
                          <span className="flex flex-col">
                            <span className="text-fg-muted text-caption font-medium">
                              {channel.label}
                            </span>
                            <span className="text-fg text-body-sm group-hover:text-link font-medium transition-colors">
                              {channel.value}
                            </span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                <div className="border-border flex flex-col gap-3 border-t pt-5">
                  <div className="flex items-start gap-3">
                    <Clock aria-hidden className="text-link mt-0.5 size-4 shrink-0" />
                    <p className="text-body-sm text-fg-muted text-pretty">
                      {contact.sidebar.responseTime}
                    </p>
                  </div>
                  <p className="text-body-sm text-fg-muted pl-7 text-pretty">
                    {contact.sidebar.hours}
                  </p>
                </div>
              </div>

              <div className="border-border bg-bg flex flex-col gap-4 rounded-2xl border p-6">
                <h3 className="text-body text-fg font-semibold text-pretty">
                  {contact.trust.heading}
                </h3>
                <ul className="flex flex-col gap-3">
                  {contact.trust.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2.5">
                      <Check aria-hidden className="text-brand-600 mt-0.5 size-4 shrink-0" />
                      <span className="text-body-sm text-fg-muted text-pretty">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <FaqAccordion title="Questions before you reach out" faqs={contact.faqs} />

      <CtaBand
        tone="brand"
        title={contact.ctaBand.h2}
        body={contact.ctaBand.subhead}
        cta={contact.ctaBand.primaryCta}
      />
    </>
  );
}
