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
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-3 block">
              {t.faq.badge}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-3">{t.faq.title}</h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">{t.faq.description}</p>
          </div>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
          >
            {faqLinkLabel}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div
          className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-3 md:gap-4 md:overflow-visible md:snap-none"
        >
          {faqs.map((item, index) => (
            <div
              key={item.question}
              className="glass-card-hover p-5 rounded-2xl h-full min-w-[260px] max-w-[320px] shrink-0 snap-start md:min-w-0 md:max-w-none"
            >
              <div className="text-primary text-sm font-semibold mb-2">{`${t.faq.itemPrefix} ${index + 1}`}</div>
              <h3 className="font-heading text-lg font-semibold mb-2">{item.question}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
