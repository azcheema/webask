"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Container } from "@/components/layout/container";
import { Section } from "@/components/layout/section";
import type { FaqItem } from "@/data/types";

import { SectionHeading } from "./section-heading";

type FaqAccordionProps = {
  readonly eyebrow?: string;
  readonly title: string;
  readonly faqs: ReadonlyArray<FaqItem>;
};

/**
 * FAQ accordion — Base UI engine. The first panel is open by default; the rest
 * start collapsed (`multiple`, so opening one never closes another). Closed
 * panels keep their answer in the DOM via `hiddenUntilFound`
 * (`hidden="until-found"`), so every answer stays crawlable/indexable — Google
 * indexes until-found content and find-in-page can reveal it — and the page
 * also emits matching `FAQPage` JSON-LD. The narrow `max-w-3xl` column keeps
 * the answer line-length readable.
 */
export function FaqAccordion({ eyebrow, title, faqs }: FaqAccordionProps) {
  return (
    <Section padding="lg" bg="surface">
      <Container size="md">
        <div className="flex flex-col gap-8">
          <SectionHeading eyebrow={eyebrow} title={title} align="center" />
          <Accordion
            multiple
            hiddenUntilFound
            defaultValue={faqs.length > 0 ? ["faq-0"] : []}
            className="mx-auto w-full max-w-3xl"
          >
            {faqs.map((faq, idx) => (
              <AccordionItem key={faq.question} value={`faq-${idx}`}>
                <AccordionTrigger className="text-body py-4">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-body text-fg-muted pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}
