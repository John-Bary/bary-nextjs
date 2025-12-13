"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, LineChart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Container } from "./Section";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[hsl(var(--bg))] pb-24 pt-28 md:pt-32">
      <div className="hero-backdrop absolute inset-0" aria-hidden />
      <div className="absolute left-1/2 top-12 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[hsl(var(--primary))/0.16] blur-[140px]" aria-hidden />

      <Container>
        <div className="relative z-10 grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8 text-balance">
            <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[hsl(var(--text))] shadow-[var(--shadow-sm)]">
              Baltic B2B launch partner
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-[3.25rem]">
                Ship a conversion-ready site, CRM, and paid read in 6–8 weeks.
              </h1>
              <p className="max-w-2xl text-lg text-[hsl(var(--text-muted))] leading-relaxed">
                We turn complex B2B service offers into clear Webflow pages, wired HubSpot journeys, and measured paid validation — without adding marketing headcount.
              </p>
              <ul className="grid gap-2 text-[hsl(var(--text))] text-base">
                {["Message-first planning", "Accessible, fast Webflow build", "Analytics you can trust"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[hsl(var(--text))]">
                    <CheckCircle2 className="h-5 w-5 text-[hsl(var(--primary))]" />
                    <span className="text-[hsl(var(--text-muted))]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="shadow-[var(--shadow-md)]"
                onClick={() => trackEvent("cta_click", { location: "hero_primary" })}
              >
                <Link href="#contact" className="flex items-center gap-2" aria-label="Book a fit call">
                  Book a 15-minute fit call
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="border-[hsl(var(--border))]"
                onClick={() => trackEvent("cta_click", { location: "hero_secondary" })}
              >
                <Link href="#case-studies" aria-label="View recent work">See recent work</Link>
              </Button>
            </div>

            <Card variant="outline" className="grid gap-4 border-[hsl(var(--border))] p-5 sm:grid-cols-3">
              {(["Founder-led delivery", "Privacy + accessibility minded", "Baltic B2B expertise"] as const).map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm text-[hsl(var(--text))]">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--primary))/0.12] text-[hsl(var(--primary))]">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  <span className="leading-snug text-[hsl(var(--text-muted))]">{item}</span>
                </div>
              ))}
            </Card>
          </div>

          <div className="relative">
            <Card className="relative overflow-hidden border-[hsl(var(--border))] p-7 shadow-[var(--shadow-lg)]">
              <div className="absolute right-4 top-4 rounded-full bg-[hsl(var(--primary))/0.12] px-3 py-1 text-xs font-semibold text-[hsl(var(--primary))]">
                Delivery outline
              </div>

              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-[hsl(var(--text-muted))]">Weeks 0–2</p>
                  <p className="text-2xl font-semibold text-[hsl(var(--text))]">Positioning + site map</p>
                  <p className="mt-1 text-sm text-[hsl(var(--text-muted))]">Stakeholder inputs, draft narrative, and mapped page flows.</p>
                </div>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--primary))/0.12] text-[hsl(var(--primary))]">
                  <LineChart className="h-6 w-6" />
                </span>
              </div>

              <div className="mt-6 grid gap-3 rounded-2xl bg-[hsl(var(--surface-2))] p-4">
                {[
                  "AA contrast, fast Webflow build",
                  "HubSpot forms + nurture with consent",
                  "Measurement plan for demos, calls, and ads",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-[hsl(var(--text))]">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[hsl(var(--primary))/0.16] text-[hsl(var(--primary))]">
                      <Sparkles className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[hsl(var(--text-muted))]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[{ label: "Launch timeline", value: "6–8 weeks" }, { label: "Engagement", value: "Founder-led" }].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-4 py-3 shadow-[var(--shadow-sm)]"
                  >
                    <p className="text-xs uppercase tracking-wide text-[hsl(var(--text-muted))]">{stat.label}</p>
                    <p className="text-2xl font-semibold text-[hsl(var(--text))]">{stat.value}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card variant="muted" className="absolute -bottom-10 left-6 right-6 flex items-center gap-3 p-4 shadow-[var(--shadow-md)] sm:left-10 sm:right-10">
              <div className="h-12 w-12 rounded-xl bg-[hsl(var(--primary))/0.14]" aria-hidden />
              <div className="text-sm">
                <p className="font-semibold text-[hsl(var(--text))]">What you’ll leave the intro with</p>
                <p className="text-[hsl(var(--text-muted))]">
                  A 90-day view with the quickest wins, risks to avoid, and whether paid should wait.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
