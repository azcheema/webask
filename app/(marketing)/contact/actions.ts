"use server";

import { Resend } from "resend";

import { site } from "@/data/site";
import ContactAutoresponder from "@/emails/contact-autoresponder";
import ContactNotification from "@/emails/contact-notification";
import {
  BUDGET_OPTIONS,
  COUNTRY_OPTIONS,
  contactFormSchema,
  labelFor,
  SERVICE_OPTIONS,
  TIMELINE_OPTIONS,
  type ContactFormValues,
} from "@/lib/contact-schema";
import { isEmailConfigured, serverEnv } from "@/lib/env.server";

export type ContactActionResult =
  { readonly success: true } | { readonly success: false; readonly error: string };

const GENERIC_ERROR = `Something went wrong sending your message. Please email ${site.email} directly.`;

/**
 * Contact form submission. Re-validates at the trust boundary (the client RHF
 * resolver can be bypassed), drops honeypot hits silently, then sends a lead
 * notification + a prospect autoresponder via Resend.
 *
 * Env-gated: with no `RESEND_API_KEY` (local dev, preview before the secret is
 * set) it logs and returns success so the success UX stays exercisable and the
 * build/preview stay green. Wires up automatically once the key + a verified
 * sending domain land in the environment.
 */
export async function submitContact(raw: ContactFormValues): Promise<ContactActionResult> {
  const parsed = contactFormSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      success: false,
      error: "Some fields need attention. Please check the form and try again.",
    };
  }

  const data = parsed.data;

  // Honeypot: a hidden field no human fills. Treat a hit as success so bots get
  // no signal, but never send.
  if (data.company_url && data.company_url.trim().length > 0) {
    return { success: true };
  }

  const serviceLabel = labelFor(SERVICE_OPTIONS, data.service);
  const budgetLabel = labelFor(BUDGET_OPTIONS, data.budget);
  const timelineLabel = labelFor(TIMELINE_OPTIONS, data.timeline);
  const countryLabel = labelFor(COUNTRY_OPTIONS, data.country);
  const company = data.company?.trim() ? data.company.trim() : "—";

  if (!isEmailConfigured) {
    console.warn(
      "[contact] RESEND_API_KEY not set — skipping email send. Lead from %s <%s> would have been delivered.",
      data.name,
      data.email,
    );
    return { success: true };
  }

  try {
    const resend = new Resend(serverEnv.RESEND_API_KEY);

    const notification = await resend.emails.send({
      from: serverEnv.CONTACT_FROM_EMAIL,
      to: serverEnv.CONTACT_NOTIFY_EMAIL,
      replyTo: data.email,
      subject: `New enquiry — ${data.name} (${serviceLabel})`,
      react: ContactNotification({
        name: data.name,
        email: data.email,
        company,
        service: serviceLabel,
        budget: budgetLabel,
        timeline: timelineLabel,
        country: countryLabel,
        message: data.message,
      }),
    });

    if (notification.error) {
      console.error("[contact] notification send failed:", notification.error);
      return { success: false, error: GENERIC_ERROR };
    }

    // Autoresponder is best-effort: if it fails, the lead still reached us, so
    // don't surface an error to the prospect — just log it.
    const autoresponder = await resend.emails.send({
      from: serverEnv.CONTACT_FROM_EMAIL,
      to: data.email,
      // Route prospect replies to the monitored inbox, independent of the
      // From address (the From may be a send-only/display sender).
      replyTo: serverEnv.CONTACT_NOTIFY_EMAIL,
      subject: "Thanks for reaching out to WebAsk",
      react: ContactAutoresponder({
        name: data.name,
        service: serviceLabel,
        message: data.message,
      }),
    });

    if (autoresponder.error) {
      console.error("[contact] autoresponder send failed:", autoresponder.error);
    }

    return { success: true };
  } catch (error) {
    console.error("[contact] unexpected send error:", error);
    return { success: false, error: GENERIC_ERROR };
  }
}
