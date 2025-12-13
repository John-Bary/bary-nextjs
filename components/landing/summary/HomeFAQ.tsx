"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/components/i18n/I18nProvider";

export function HomeFAQ() {
  const { t } = useI18n();
  const faqs = t.faq.items.slice(0, 3);
  const faqLinkLabel = t.navbar.links.find((link) => link.href === "/faq")?.label || t.faq.badge;

  return (
    <section className="py-16 md:py-20" id="faq">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="space-y-4 rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))]/80 p-7 shadow-[var(--shadow-md)]">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-3 block">
              {t.faq.badge}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-3">{t.faq.title}</h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">{t.faq.description}</p>
            <Link href="/faq" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80">
              {faqLinkLabel}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {faqs.map((item, index) => (
              <div
                key={item.question}
                className="glass-card-hover p-5 rounded-2xl h-full"
              >
                <div className="text-primary text-sm font-semibold mb-2">{`${t.faq.itemPrefix} ${index + 1}`}</div>
                <h3 className="font-heading text-lg font-semibold mb-2">{item.question}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
