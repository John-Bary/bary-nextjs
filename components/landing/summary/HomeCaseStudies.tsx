"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/components/i18n/I18nProvider";

export function HomeCaseStudies() {
  const { t } = useI18n();
  const caseStudiesLabel =
    t.navbar.links.find((link) => link.href === "/testimonials")?.label || t.caseStudies.badge;

  return (
    <section className="py-20 md:py-24" id="case-studies">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-3 block">
              {t.caseStudies.badge}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-3">{t.caseStudies.title}</h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">{t.caseStudies.description}</p>
          </div>
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
          >
            {caseStudiesLabel}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.caseStudies.items.slice(0, 3).map((study) => (
            <div key={study.title} className="glass-card-hover p-6 flex flex-col gap-3">
              <div className="text-xs uppercase tracking-wide text-primary font-semibold">{study.industry}</div>
              <h3 className="font-heading text-xl font-semibold text-foreground">{study.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{study.summary}</p>
              <div className="flex flex-wrap gap-2 text-xs text-foreground/80">
                {study.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-secondary/60 border border-border/60">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
