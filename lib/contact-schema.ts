import { z } from "zod";

import { services } from "@/data/services";

/*
 * Single source of truth for the contact form's shape and option lists.
 * Imported by BOTH the client (`react-hook-form` zodResolver) and the server
 * (`submitContact` Server Action re-validates at the trust boundary). Field
 * spec: `docs/strategy/uiux-guidelines.md` § Forms · Contact form.
 *
 * `value`/`label` Select options live here so the form and the email templates
 * render the same human-readable labels from the same submitted machine values.
 */

export type SelectOption = { readonly value: string; readonly label: string };

/** 9 services (machine slug → display name) + the catch-all. Order mirrors `data/services.ts`. */
export const SERVICE_OPTIONS: ReadonlyArray<SelectOption> = [
  ...services.map((service) => ({ value: service.slug, label: service.name })),
  { value: "not-sure", label: "Not sure / multiple" },
];

export const BUDGET_OPTIONS: ReadonlyArray<SelectOption> = [
  { value: "under-5k", label: "Less than $5,000" },
  { value: "5k-15k", label: "$5,000 – $15,000" },
  { value: "15k-50k", label: "$15,000 – $50,000" },
  { value: "50k-plus", label: "$50,000+" },
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
  name: z.string().trim().min(1, "Please enter your name").max(100, "That name is too long"),
  email: z.string().trim().min(1, "Please enter your email").email("Enter a valid email address"),
  company: z.string().trim().max(200, "That's too long").optional(),
  service: z.enum(values(SERVICE_OPTIONS), { message: "Pick the service you're interested in" }),
  budget: z.enum(values(BUDGET_OPTIONS), { message: "Select a budget range" }),
  timeline: z.enum(values(TIMELINE_OPTIONS), { message: "Select a timeline" }),
  country: z.enum(values(COUNTRY_OPTIONS)).optional(),
  message: z
    .string()
    .trim()
    .min(MESSAGE_MIN, `Tell us a little more — at least ${MESSAGE_MIN} characters`)
    .max(MESSAGE_MAX, `Please keep it under ${MESSAGE_MAX} characters`),
  /**
   * Honeypot. Hidden from humans (`tabIndex=-1`, off-screen); bots that fill
   * every field trip it. Validated server-side only — non-empty means spam.
   */
  company_url: z.string().optional(),
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
