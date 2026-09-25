import "server-only";

import { z } from "zod";

import { site } from "@/data/site";

/*
 * Server-only environment variables. The `server-only` import makes this
 * module a hard compile error if it's ever pulled into a client bundle —
 * the guard the `lib/env.ts` header anticipated for "the first server-only
 * secret (Resend in Phase 1)". Client-safe `NEXT_PUBLIC_*` vars stay in
 * `lib/env.ts`; secrets live here and nowhere else.
 *
 * `RESEND_API_KEY` is intentionally OPTIONAL. The contact Server Action is
 * env-gated: with no key (local dev, Vercel preview before the secret is set)
 * it logs a warning and skips the send rather than throwing, so the build and
 * the form's success UX stay green. It lights up the moment the key + a
 * verified sending domain land in the environment.
 */
/**
 * Resend accepts a sender as either a bare address (`info@naxdor.com`) or the
 * RFC-5322 display-name form (`Naxdor <info@naxdor.com>`) — the latter is what
 * surfaces "Naxdor" as the sender name in the recipient's inbox. Validate
 * whichever form is given by checking the address (inside `<>` when present)
 * is a real email. A plain `.email()` would reject the display-name form — and
 * the default below uses exactly that form.
 */
const senderAddress = z
  .string()
  .min(1)
  .refine(
    (value) => {
      const match = value.match(/<([^>]+)>/);
      const address = (match?.[1] ?? value).trim();
      return z.string().email().safeParse(address).success;
    },
    { message: 'Must be an email address or a "Name <email>" sender' },
  );

const serverEnvSchema = z.object({
  RESEND_API_KEY: z.string().min(1).optional(),
  /** Verified Resend sender (bare or "Name <email>"). Falls back to a Resend-onboarding address until the domain is verified. */
  CONTACT_FROM_EMAIL: senderAddress.default(`${site.name} <onboarding@resend.dev>`),
  /**
   * Inbox that receives lead notifications. Defaults to the published contact
   * address so an unset variable can never route WebAsk leads to the fork's
   * naxdor.com inbox (the inherited default until 2026-09-25).
   */
  CONTACT_NOTIFY_EMAIL: z.string().email().default(site.email),
});

const parsed = serverEnvSchema.safeParse({
  RESEND_API_KEY: process.env.RESEND_API_KEY,
  CONTACT_FROM_EMAIL: process.env.CONTACT_FROM_EMAIL,
  CONTACT_NOTIFY_EMAIL: process.env.CONTACT_NOTIFY_EMAIL,
});

if (!parsed.success) {
  const formatted = JSON.stringify(parsed.error.flatten().fieldErrors, null, 2);
  throw new Error(`Invalid server environment variables:\n${formatted}`);
}

export const serverEnv = parsed.data;
export type ServerEnv = typeof serverEnv;

/** True once a Resend API key is present — the gate the contact action checks before sending. */
export const isEmailConfigured = Boolean(serverEnv.RESEND_API_KEY);
