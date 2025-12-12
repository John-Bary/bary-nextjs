"use client";

import { type FormEvent, useState } from "react";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useI18n } from "../i18n/I18nProvider";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function Contact() {
  const { t } = useI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success(t.contact.toast.title, {
      description: t.contact.toast.description,
    });

    setIsSubmitting(false);
    (event.target as HTMLFormElement).reset();
  };

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
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label={t.contact.form.nameLabel}>
                  <Input required placeholder={t.contact.form.namePlaceholder} aria-label={t.contact.form.nameLabel} />
                </Field>
                <Field label={t.contact.form.emailLabel}>
                  <Input
                    type="email"
                    required
                    placeholder={t.contact.form.emailPlaceholder}
                    aria-label={t.contact.form.emailLabel}
                  />
                </Field>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <Field label={t.contact.form.serviceLabel}>
                  <Select defaultValue="">
                    <SelectTrigger>
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
                </Field>
                <Field label={t.contact.form.budgetLabel}>
                  <Select defaultValue="">
                    <SelectTrigger>
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
                </Field>
              </div>

              <Field label={t.contact.form.messageLabel}>
                <Textarea rows={4} required placeholder={t.contact.form.messagePlaceholder} />
                <p className="mt-2 text-xs text-[hsl(var(--text-muted))]">We respond within one business day.</p>
              </Field>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
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

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-[hsl(var(--text))]">
      <span>{label}</span>
      {children}
    </label>
  );
}
