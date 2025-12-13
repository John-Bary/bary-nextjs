"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, LineChart, LayoutDashboard, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { trackEvent } from "@/lib/analytics";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[hsl(var(--bg))] pb-24 pt-28 md:pt-32">
      <div className="hero-backdrop absolute inset-0" aria-hidden />
      <div className="absolute left-1/2 top-12 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[hsl(var(--primary))/0.16] blur-[140px]" aria-hidden />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8 text-balance">
            <div className="inline-flex items-center gap-2 rounded-full border border-[hsl(var(--border))] bg-[hsl(var(--surface))] px-4 py-2 text-xs font-semibold uppercase tracking-wide text-[hsl(var(--text))] shadow-[var(--shadow-sm)]">
              <span className="h-2.5 w-2.5 rounded-full bg-[hsl(var(--success))]" aria-hidden />
              Baltic B2B service growth partner
            </div>

            <div className="space-y-5">
              <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-[3.25rem]">
                Conversion-focused sites and CRM journeys for Baltic B2B services.
              </h1>
              <p className="max-w-2xl text-lg text-[hsl(var(--text-muted))] leading-relaxed">
                We turn complex B2B offers into clear pipelines: Webflow sites that load fast, HubSpot and email journeys that nurture, and paid media that respects your budget.
              </p>
              <p className="text-base font-medium text-[hsl(var(--text))]">
                How we help: position your offer, rebuild the site, wire CRM, and launch a measured paid motion in under 8 weeks.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                asChild
                size="lg"
                className="shadow-[var(--shadow-md)]"
                onClick={() => trackEvent("cta_click", { location: "hero_primary" })}
              >
                <Link href="#book-a-call" className="flex items-center gap-2" aria-label="Book a fit call">
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
                <Link href="#case-studies" aria-label="View recent work">View work</Link>
              </Button>
            </div>

              <div className="grid gap-4 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))]/80 p-4 shadow-[var(--shadow-sm)] sm:grid-cols-3">
              {(["Accessible by default", "Founder-led delivery", "B2B message clarity"] as const).map((item, index) => {
                const Icon = [ShieldCheck, Sparkles, LayoutDashboard][index];
                return (
                  <div key={item} className="flex items-center gap-2 text-sm text-[hsl(var(--text))]">
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(var(--primary))/0.14] text-[hsl(var(--primary))]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="leading-snug text-[hsl(var(--text-muted))]">{item}</span>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))]/70 p-4 text-sm text-[hsl(var(--text-muted))]">
              <span className="text-[hsl(var(--text))] font-semibold">Trusted by</span>
              {["Placeholder Co.", "Sample Logistics", "Vilnius Tech", "TODO: add logos"].map((label) => (
                <span key={label} className="rounded-full bg-[hsl(var(--surface-2))] px-3 py-1 text-xs font-medium">
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <Card className="relative overflow-hidden rounded-3xl border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-7 shadow-[var(--shadow-lg)]">
              <div className="absolute right-4 top-4 rounded-full bg-[hsl(var(--primary))/0.12] px-3 py-1 text-xs font-semibold text-[hsl(var(--primary))]">
                Sample delivery plan
              </div>

              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm text-[hsl(var(--text-muted))]">Week 0-2</p>
                  <p className="text-2xl font-semibold text-[hsl(var(--text))]">Positioning + site map</p>
                  <p className="mt-1 text-sm text-[hsl(var(--text-muted))]">Stakeholder interviews, UX flows, and a crisp narrative.
                  </p>
                </div>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[hsl(var(--primary))/0.12] text-[hsl(var(--primary))]">
                  <LineChart className="h-6 w-6" />
                </span>
              </div>

              <div className="mt-6 grid gap-3 rounded-2xl bg-[hsl(var(--surface-2))] p-4">
                {[
                  "Webflow build with accessible components",
                  "HubSpot + email nurture wiring with consent captured",
                  "Measurement plan for demo form, calls, and calendar links",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 text-sm text-[hsl(var(--text))]">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[hsl(var(--primary))/0.16] text-[hsl(var(--primary))]">
                      <Star className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[hsl(var(--text-muted))]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[{ label: "Launch timeline", value: "6-8 weeks" }, { label: "Engagement", value: "Founder-led" }].map((stat) => (
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

            <Card className="absolute -bottom-10 left-6 right-6 flex items-center gap-3 rounded-2xl border-[hsl(var(--border))] bg-[hsl(var(--surface-2))] p-4 shadow-[var(--shadow-md)] sm:left-10 sm:right-10">
              <div className="h-12 w-12 rounded-xl bg-[hsl(var(--primary))/0.14]" aria-hidden />
              <div className="text-sm">
                <p className="font-semibold text-[hsl(var(--text))]">What you get from the first call</p>
                <p className="text-[hsl(var(--text-muted))]">
                  A simple plan covering positioning gaps, the quickest page fixes, and whether paid media should wait.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
