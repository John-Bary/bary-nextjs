"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { trackEvent } from "@/lib/analytics";
import { Container, Section, SectionHeader } from "../Section";

export function ContactCta() {
  return (
    <Section id="contact">
      <Container>
        <div className="rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-8 sm:p-10 shadow-[var(--shadow-md)]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-4 max-w-2xl">
              <SectionHeader
                label="Ready to plan"
                title="Let’s outline your first 90 days"
                description="Leave the intro call with a prioritized checklist, a timeline, and whether paid should wait."
              />
              <ul className="text-foreground/80 text-sm space-y-1 list-disc list-inside">
                <li>Sprint from €2.8k, Launch €6.5k–€9.5k, Growth from €2k/mo.</li>
                <li>Vilnius-based, serving the Baltic region remotely.</li>
              </ul>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium flex items-center gap-2 hover:bg-primary/90 transition-colors"
                onClick={() => trackEvent("cta_click", { location: "contact_primary" })}
              >
                Book a fit call
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <a
                href={`mailto:bary@gmx.com`}
                className="px-6 py-3 rounded-full border border-border text-sm font-medium text-foreground flex items-center gap-2 hover:border-primary/60"
              >
                <Mail className="w-4 h-4" />
                bary@gmx.com
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
