"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { useI18n } from "@/components/i18n/I18nProvider";

export function ContactCta() {
  const { t } = useI18n();

  return (
    <section className="py-16 md:py-20" id="contact">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="glass-card-hover p-8 sm:p-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3 max-w-2xl">
            <span className="text-primary text-sm font-medium tracking-wider uppercase block">
              {t.contact.badge}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">{t.contact.title}</h2>
            <p className="text-muted-foreground leading-relaxed">{t.contact.description}</p>
            <p className="text-foreground/80 text-sm">{t.contact.responseTime}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
            >
              {t.contact.form.submit}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <a
              href={`mailto:${t.contact.emailValue}`}
              className="px-6 py-3 rounded-full border border-border text-sm font-medium text-foreground flex items-center gap-2 hover:border-primary/60"
            >
              <Mail className="w-4 h-4" />
              {t.contact.emailValue}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
