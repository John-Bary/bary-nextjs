"use client";

import { useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useI18n } from "../i18n/I18nProvider";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  ContactFormData,
  ContactFormMessages,
  createContactFormSchema,
  defaultContactFormMessages,
} from "@/lib/validations";

export function Contact() {
  const { t } = useI18n();

  const validationMessages = useMemo<ContactFormMessages>(() => {
    const fallback = defaultContactFormMessages;
    const localized = t.contact.form.validation;

    if (!localized) return fallback;

    return {
      nameMin: localized.nameMin || fallback.nameMin,
      nameMax: localized.nameMax || fallback.nameMax,
      email: localized.email || fallback.email,
      service: localized.service || fallback.service,
      messageMin: localized.messageMin || fallback.messageMin,
      messageMax: localized.messageMax || fallback.messageMax,
    } satisfies ContactFormMessages;
  }, [t.contact.form.validation]);

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(createContactFormSchema(validationMessages)),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      budget: "",
      message: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result?.success) {
        throw new Error(result?.error || "Unknown error");
      }

      toast.success(t.contact.toast.title, {
        description: t.contact.toast.description,
      });

      reset();
    } catch (error) {
      console.error("Contact form submission error:", error);
      toast.error(t.contact.toast.errorTitle, {
        description: t.contact.toast.errorDescription,
      });
    }
  });

  return (
    <section id="contact" className="relative overflow-hidden bg-[hsl(var(--bg))] py-24">
      <div className="absolute inset-0 hero-backdrop opacity-70" aria-hidden />
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-wide text-[hsl(var(--text-muted))]">{t.contact.badge}</span>
          <h2 className="mt-3 text-4xl font-semibold text-[hsl(var(--text))]">{t.contact.title}</h2>
          <p className="mt-3 text-lg text-[hsl(var(--text-muted))] max-w-2xl mx-auto">{t.contact.description}</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="space-y-4">
            <Card className="p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[hsl(var(--primary))/0.12] text-[hsl(var(--primary))]">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-[hsl(var(--text-muted))]">{t.contact.emailLabel}</p>
                  <p className="font-semibold text-[hsl(var(--text))]">{t.contact.emailValue}</p>
                </div>
              </div>
            </Card>
            <Card className="p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[hsl(var(--accent))/0.12] text-[hsl(var(--accent))]">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-[hsl(var(--text-muted))]">{t.contact.locationLabel}</p>
                  <p className="font-semibold text-[hsl(var(--text))]">{t.contact.locationValue}</p>
                </div>
              </div>
            </Card>
            <Card className="p-5 bg-[hsl(var(--surface-2))] text-sm text-[hsl(var(--text-muted))]">
              {t.contact.responseTime}
            </Card>
          </div>

          <Card className="p-6 shadow-[var(--shadow-md)]">
            <form className="space-y-5" onSubmit={onSubmit} noValidate>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label={t.contact.form.nameLabel}
                  htmlFor="contact-name"
                  error={errors.name?.message}
                >
                  <Input
                    id="contact-name"
                    placeholder={t.contact.form.namePlaceholder}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                    disabled={isSubmitting}
                    autoComplete="name"
                    {...register("name")}
                  />
                </Field>
                <Field
                  label={t.contact.form.emailLabel}
                  htmlFor="contact-email"
                  error={errors.email?.message}
                >
                  <Input
                    id="contact-email"
                    type="email"
                    placeholder={t.contact.form.emailPlaceholder}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                    disabled={isSubmitting}
                    autoComplete="email"
                    {...register("email")}
                  />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label={t.contact.form.serviceLabel}
                  htmlFor="contact-service"
                  error={errors.service?.message}
                >
                  <Controller
                    control={control}
                    name="service"
                    render={({ field }) => (
                      <Select value={field.value || ""} onValueChange={field.onChange}>
                        <SelectTrigger
                          id="contact-service"
                          aria-invalid={Boolean(errors.service)}
                          aria-required="true"
                          aria-describedby={errors.service ? "contact-service-error" : undefined}
                          disabled={isSubmitting}
                        >
                          <SelectValue placeholder={t.contact.form.servicePlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {t.contact.form.services.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </Field>
                <Field
                  label={t.contact.form.budgetLabel}
                  htmlFor="contact-budget"
                  hint={t.contact.form.budgetHelper}
                >
                  <Controller
                    control={control}
                    name="budget"
                    render={({ field }) => (
                      <Select value={field.value || ""} onValueChange={field.onChange}>
                        <SelectTrigger
                          id="contact-budget"
                          aria-describedby={t.contact.form.budgetHelper ? "contact-budget-hint" : undefined}
                          disabled={isSubmitting}
                        >
                          <SelectValue placeholder={t.contact.form.budgetPlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          {t.contact.form.budgets.map((budget) => (
                            <SelectItem key={budget.value} value={budget.value}>
                              {budget.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </Field>
              </div>

              <Field
                label={t.contact.form.messageLabel}
                htmlFor="contact-message"
                error={errors.message?.message}
                hint={t.contact.form.responseNote}
              >
                <Textarea
                  id="contact-message"
                  rows={4}
                  placeholder={t.contact.form.messagePlaceholder}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "contact-message-error" : t.contact.form.responseNote ? "contact-message-hint" : undefined
                  }
                  disabled={isSubmitting}
                  {...register("message")}
                />
              </Field>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting} aria-busy={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    {t.contact.form.submitting}
                  </>
                ) : (
                  <>
                    {t.contact.form.submit}
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
  htmlFor,
  error,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  htmlFor: string;
  error?: string;
  hint?: string;
}) {
  return (
    <div className="flex flex-col gap-2 text-sm font-medium text-[hsl(var(--text))]">
      <label htmlFor={htmlFor} className="flex items-center justify-between gap-2">
        <span>{label}</span>
        {hint && !error && (
          <span className="text-[hsl(var(--text-muted))] text-xs" id={`${htmlFor}-hint`}>
            {hint}
          </span>
        )}
      </label>
      {children}
      {error ? (
        <p
          id={`${htmlFor}-error`}
          className="text-xs text-[hsl(var(--destructive))]"
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}
