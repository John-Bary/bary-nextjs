"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useI18n } from "@/components/i18n/I18nProvider";
import { Container, Section, SectionHeader } from "../Section";

export function HomeProcess() {
  const { t } = useI18n();
  const steps = t.process.steps.slice(0, 3);

  return (
    <Section id="process">
      <Container>
        <div className="space-y-8">
          <SectionHeader label={t.process.badge} title={t.process.title} description={t.process.description} />
          <div className="grid gap-4 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-5 shadow-[var(--shadow-sm)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[hsl(var(--primary))]" aria-hidden />
                <div className="flex flex-col gap-2 pt-2">
                  <div className="text-primary font-semibold text-sm">{step.number}</div>
                  <h3 className="font-heading text-xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  <div className="text-xs text-[hsl(var(--text-muted))]">{index === 0 ? "Discovery" : index === 1 ? "Delivery" : "Optimization"}</div>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/process"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
          >
            {t.process.cta}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
