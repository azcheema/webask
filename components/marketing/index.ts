export { SectionHeading } from "./section-heading";
export { Hero } from "./hero";
export { ProblemSolution } from "./problem-solution";
export { Stats } from "./stats";
export { CtaBand } from "./cta-band";
export { CrossLinkGrid, type CrossLink } from "./cross-link-grid";
export { FaqAccordion } from "./faq-accordion";
export { PortfolioStrip } from "./portfolio-strip";
export { ServiceHero } from "./service-hero";
export { PageHero } from "./page-hero";
export { PricingCard } from "./pricing-card";
export { PricingTable } from "./pricing-table";
export { PricingAnchor, type PricingAnchorItem } from "./pricing-anchor";
export { ProcessSteps } from "./process-steps";
export { ProcessStrip } from "./process-strip";
// NOTE: `ContactForm` is intentionally NOT re-exported here. It's a heavy client
// component (zod + react-hook-form) used only by /contact — re-exporting it from
// this barrel (which every marketing page imports) pulled those deps into a
// site-wide shared chunk. Import it directly: "@/components/marketing/contact-form".
export { LegalDocument } from "./legal-document";
