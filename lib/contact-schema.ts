import * as z from "zod/mini";

import { services } from "@/data/services";

/*
 * Single source of truth for the contact form's shape and option lists.
 * Imported by BOTH the client (`react-hook-form` zodResolver) and the server
 * (`submitContact` Server Action re-validates at the trust boundary). Field
 * spec: `docs/strategy/uiux-guidelines.md` § Forms · Contact form.
 *
 * `value`/`label` Select options live here so the form and the email templates
 * render the same human-readable labels from the same submitted machine values.
 *
 * ── WHY `zod/mini` ──────────────────────────────────────────────────────
 * This module is the only zod that reaches the client bundle (`/contact` ships
 * it for the resolver). The classic `zod` entry point is class-based and
 * cannot tree-shake, so every zod release grows `/contact` by the whole
 * library's delta — the 4.4.3 → 4.6.5 bump alone added 26 KB gzipped and broke
 * the page's `resource-summary:script:size` budget (390,000; measured
 * 2026-09-25, `.lighthouserc.cjs`). `zod/mini` is the same engine with a
 * functional, tree-shakeable API: only the checks used here are bundled. The
 * server-only schemas (`lib/env*.ts`, `lib/blog.ts`, `lib/case-studies.ts`,
 * `scripts/`) stay on classic `zod`; they never reach a browser.
 *
 * API differences that matter here: refinements are `.check(z.trim(),
 * z.minLength(…))` instead of chained methods; string formats such as
 * `z.email()` are checks too; `.safeParse()` and `z.infer` are unchanged.
 */

export type SelectOption = { readonly value: string; readonly label: string };

/** 9 services (machine slug → display name) + the catch-all. Order mirrors `data/services.ts`. */
export const SERVICE_OPTIONS: ReadonlyArray<SelectOption> = [
  ...services.map((service) => ({ value: service.slug, label: service.name })),
  { value: "not-sure", label: "Not sure / multiple" },
];

/*
 * GBP bands, rebuilt around the actual UK price list rather than converted from
 * the inherited USD ones. The lowest band sits below our web-development
 * starting price (£3,500) so a genuinely under-budget enquiry can say so
 * honestly instead of overstating to look serious — that is a better qualifying
 * signal for us and a fairer question to ask them.
 */
export const BUDGET_OPTIONS: ReadonlyArray<SelectOption> = [
  { value: "under-2500", label: "Less than £2,500" },
  { value: "2500-10000", label: "£2,500 – £10,000" },
  { value: "10000-25000", label: "£10,000 – £25,000" },
  { value: "25000-plus", label: "£25,000+" },
  { value: "depends", label: "Not sure / depends on scope" },
];

export const TIMELINE_OPTIONS: ReadonlyArray<SelectOption> = [
  { value: "asap", label: "ASAP — within 4 weeks" },
  { value: "1-3-months", label: "1 – 3 months" },
  { value: "3-6-months", label: "3 – 6 months" },
  { value: "exploring", label: "Just exploring" },
];

/**
 * Curated launch market list — optional field. A full ISO-3166 list plus IP
 * auto-detection is Phase 4 international-routing scope; a short, honest list
 * with an "Other" escape hatch keeps the form light at launch.
 */
export const COUNTRY_OPTIONS: ReadonlyArray<SelectOption> = [
  { value: "US", label: "United States" },
  { value: "CA", label: "Canada" },
  { value: "GB", label: "United Kingdom" },
  { value: "AU", label: "Australia" },
  { value: "IE", label: "Ireland" },
  { value: "NZ", label: "New Zealand" },
  { value: "AE", label: "United Arab Emirates" },
  { value: "SG", label: "Singapore" },
  { value: "IN", label: "India" },
  { value: "DE", label: "Germany" },
  { value: "NL", label: "Netherlands" },
  { value: "SE", label: "Sweden" },
  { value: "other", label: "Other / not listed" },
];

/** Extract the `value`s as a non-empty tuple so `z.enum` is happy. */
function values(options: ReadonlyArray<SelectOption>): [string, ...string[]] {
  const [first, ...rest] = options.map((option) => option.value);
  if (first === undefined) throw new Error("Select option list cannot be empty");
  return [first, ...rest];
}

const MESSAGE_MIN = 20;
const MESSAGE_MAX = 2000;

export const contactFormSchema = z.object({
  name: z
    .string()
    .check(
      z.trim(),
      z.minLength(1, "Please enter your name"),
      z.maxLength(100, "That name is too long"),
    ),
  email: z
    .string()
    .check(
      z.trim(),
      z.minLength(1, "Please enter your email"),
      z.email("Enter a valid email address"),
    ),
  company: z.optional(z.string().check(z.trim(), z.maxLength(200, "That's too long"))),
  service: z.enum(values(SERVICE_OPTIONS), { message: "Pick the service you're interested in" }),
  budget: z.enum(values(BUDGET_OPTIONS), { message: "Select a budget range" }),
  timeline: z.enum(values(TIMELINE_OPTIONS), { message: "Select a timeline" }),
  country: z.optional(z.enum(values(COUNTRY_OPTIONS))),
  message: z
    .string()
    .check(
      z.trim(),
      z.minLength(MESSAGE_MIN, `Tell us a little more — at least ${MESSAGE_MIN} characters`),
      z.maxLength(MESSAGE_MAX, `Please keep it under ${MESSAGE_MAX} characters`),
    ),
  /**
   * Honeypot. Hidden from humans (`tabIndex=-1`, off-screen); bots that fill
   * every field trip it. Validated server-side only — non-empty means spam.
   */
  company_url: z.optional(z.string()),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

/** Default values for the RHF form — keeps every Select controlled from first render. */
export const CONTACT_FORM_DEFAULTS: ContactFormValues = {
  name: "",
  email: "",
  company: "",
  service: "" as ContactFormValues["service"],
  budget: "" as ContactFormValues["budget"],
  timeline: "" as ContactFormValues["timeline"],
  message: "",
  company_url: "",
};

/** Resolve a submitted machine value back to its display label (for email templates). */
export function labelFor(options: ReadonlyArray<SelectOption>, value: string | undefined): string {
  if (!value) return "—";
  return options.find((option) => option.value === value)?.label ?? value;
}
