"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";

import { submitContact } from "@/app/(marketing)/contact/actions";
import { track } from "@/lib/analytics";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  BUDGET_OPTIONS,
  COUNTRY_OPTIONS,
  CONTACT_FORM_DEFAULTS,
  contactFormSchema,
  SERVICE_OPTIONS,
  TIMELINE_OPTIONS,
  type ContactFormValues,
  type SelectOption,
} from "@/lib/contact-schema";

type ContactFormCopy = {
  readonly submitLabel: string;
  readonly responsePromise: string;
  readonly successHeading: string;
  readonly successBody: string;
};

type ContactFormProps = {
  readonly copy: ContactFormCopy;
};

function FieldError({
  id,
  message,
}: {
  readonly id: string;
  readonly message?: string | undefined;
}) {
  if (!message) return null;
  return (
    <p id={id} className="text-destructive text-body-sm flex items-center gap-1.5">
      <AlertCircle aria-hidden className="size-4 shrink-0" />
      {message}
    </p>
  );
}

/**
 * Contact form — `react-hook-form` + zod, validating after blur (`onTouched`)
 * so errors don't fire on every keystroke. Submits through the env-gated
 * `submitContact` Server Action inside a transition. On success the form is
 * replaced in place (scroll preserved); on failure values are kept and an
 * inline `aria-live` alert is surfaced. The shared `contactFormSchema` is the
 * same one the action re-validates with at the trust boundary.
 */
export function ContactForm({ copy }: ContactFormProps) {
  const [isPending, startTransition] = useTransition();
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  // Analytics funnel (measurement.md): form_view (50% visible) → form_start
  // (first focus) → form_submit_attempt → form_submit_success/error. Each fires
  // at most once per mount; all no-op without consent.
  const formRef = useRef<HTMLFormElement>(null);
  const viewTracked = useRef(false);
  const startTracked = useRef(false);

  useEffect(() => {
    const el = formRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting) && !viewTracked.current) {
          viewTracked.current = true;
          track("form_view");
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const handleFirstFocus = () => {
    if (startTracked.current) return;
    startTracked.current = true;
    track("form_start");
  };

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    mode: "onTouched",
    defaultValues: CONTACT_FORM_DEFAULTS,
  });

  const onSubmit: SubmitHandler<ContactFormValues> = (values) => {
    setServerError(null);
    track("form_submit_attempt");
    startTransition(async () => {
      const result = await submitContact(values);
      if (result.success) {
        track("form_submit_success");
        setSubmitted(true);
      } else {
        track("form_submit_error", { reason: "server" });
        setServerError(result.error);
      }
    });
  };

  const onInvalid = () => track("form_submit_error", { reason: "validation" });

  if (submitted) {
    return (
      <div
        role="status"
        className="border-border bg-surface flex flex-col items-start gap-4 rounded-2xl border p-8"
      >
        <span className="bg-success/15 text-success flex size-12 items-center justify-center rounded-full">
          <CheckCircle2 aria-hidden className="size-6" />
        </span>
        <h2 className="text-h3 text-fg font-semibold tracking-tight text-balance">
          {copy.successHeading}
        </h2>
        <p className="text-body text-fg-muted text-pretty">{copy.successBody}</p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      noValidate
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      onFocus={handleFirstFocus}
      className="flex flex-col gap-5"
    >
      {/* Honeypot — hidden from humans + AT; bots that fill every field trip it. */}
      <div aria-hidden className="hidden">
        <label htmlFor="contact-company-url">Company URL (leave blank)</label>
        <input
          id="contact-company-url"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company_url")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="contact-name">Name</Label>
          <Input
            id="contact-name"
            autoComplete="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            {...register("name")}
          />
          <FieldError id="contact-name-error" message={errors.name?.message} />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="contact-email">Email</Label>
          <Input
            id="contact-email"
            type="email"
            autoComplete="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            {...register("email")}
          />
          <FieldError id="contact-email-error" message={errors.email?.message} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="contact-company">
          Company <span className="text-fg-muted font-normal">(optional)</span>
        </Label>
        <Input
          id="contact-company"
          autoComplete="organization"
          aria-invalid={errors.company ? true : undefined}
          aria-describedby={errors.company ? "contact-company-error" : undefined}
          {...register("company")}
        />
        <FieldError id="contact-company-error" message={errors.company?.message} />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="contact-service">Service interest</Label>
        <SelectField
          name="service"
          control={control}
          options={SERVICE_OPTIONS}
          placeholder="Select a service"
          triggerId="contact-service"
          invalid={Boolean(errors.service)}
          errorId="contact-service-error"
        />
        <FieldError id="contact-service-error" message={errors.service?.message} />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="contact-budget">Budget</Label>
          <SelectField
            name="budget"
            control={control}
            options={BUDGET_OPTIONS}
            placeholder="Select a range"
            triggerId="contact-budget"
            invalid={Boolean(errors.budget)}
            errorId="contact-budget-error"
          />
          <FieldError id="contact-budget-error" message={errors.budget?.message} />
        </div>

        <div className="flex flex-col gap-1.5">
          <Label htmlFor="contact-timeline">Timeline</Label>
          <SelectField
            name="timeline"
            control={control}
            options={TIMELINE_OPTIONS}
            placeholder="Select a timeline"
            triggerId="contact-timeline"
            invalid={Boolean(errors.timeline)}
            errorId="contact-timeline-error"
          />
          <FieldError id="contact-timeline-error" message={errors.timeline?.message} />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="contact-country">
          Country <span className="text-fg-muted font-normal">(optional)</span>
        </Label>
        <SelectField
          name="country"
          control={control}
          options={COUNTRY_OPTIONS}
          placeholder="Select a country"
          triggerId="contact-country"
          invalid={Boolean(errors.country)}
          errorId="contact-country-error"
        />
        <FieldError id="contact-country-error" message={errors.country?.message} />
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="contact-message">Message</Label>
        <Textarea
          id="contact-message"
          rows={5}
          placeholder="What are you trying to build or fix? A sentence or two is plenty to start."
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          {...register("message")}
        />
        <FieldError id="contact-message-error" message={errors.message?.message} />
      </div>

      {serverError ? (
        <p
          role="alert"
          className="border-destructive/40 bg-destructive/10 text-destructive text-body-sm flex items-center gap-2 rounded-lg border px-3 py-2.5"
        >
          <AlertCircle aria-hidden className="size-4 shrink-0" />
          {serverError}
        </p>
      ) : null}

      <div className="flex flex-col gap-3">
        <Button
          type="submit"
          size="lg"
          className="h-11 px-6 text-base"
          disabled={!isValid || isPending}
          aria-busy={isPending}
        >
          {isPending ? (
            <>
              <Loader2 aria-hidden className="animate-spin" />
              Sending…
            </>
          ) : (
            copy.submitLabel
          )}
        </Button>
        <p className="text-fg-muted text-body-sm text-pretty">{copy.responsePromise}</p>
      </div>
    </form>
  );
}

/**
 * Base UI Select bridged to `react-hook-form` via `Controller`. RHF holds the
 * machine value as a string ("" = unselected); the Select wants `null` for the
 * placeholder state, so we map between them. `items` lets `<SelectValue>` show
 * the option label for the selected value automatically.
 */
function SelectField({
  name,
  control,
  options,
  placeholder,
  triggerId,
  invalid,
  errorId,
}: {
  readonly name: "service" | "budget" | "timeline" | "country";
  readonly control: ReturnType<typeof useForm<ContactFormValues>>["control"];
  readonly options: ReadonlyArray<SelectOption>;
  readonly placeholder: string;
  readonly triggerId: string;
  readonly invalid: boolean;
  readonly errorId: string;
}) {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          items={options as Array<{ value: string; label: string }>}
          value={field.value ? field.value : null}
          onValueChange={(value) => field.onChange(value ?? "")}
          // Mark the field touched (→ validate) only when the dropdown CLOSES,
          // not when the trigger blurs on open. Base UI moves focus into the
          // listbox on open, which would otherwise fire the trigger's onBlur and
          // flash the required-field error while the user is still choosing.
          onOpenChange={(open) => {
            if (!open) field.onBlur();
          }}
        >
          <SelectTrigger
            id={triggerId}
            ref={field.ref}
            aria-invalid={invalid ? true : undefined}
            aria-describedby={invalid ? errorId : undefined}
            className="w-full"
          >
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}
    />
  );
}
