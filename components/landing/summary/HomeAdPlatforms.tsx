"use client";

import Link from "next/link";
import { ArrowUpRight, Sparkle, ShieldCheck } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

const platforms = [
  {
    key: "webflow",
    name: "Webflow",
    summary: "Our default for B2B marketing sites when teams want speed, security, and in-house editing.",
    usedWhen: "You need modular sections, AA contrast, and CMS-driven case studies without a dev backlog.",
    notUsed: "If you need heavy web app logic — we’ll advise a different stack instead of forcing Webflow.",
  },
  {
    key: "hubspot",
    name: "HubSpot + email",
    summary: "Lifecycle automation and reporting for lead capture, nurture, and sales handoff.",
    usedWhen: "Clear lead stages and a sales team ready to follow up; we wire forms, meetings, and consent.",
    notUsed: "If you only need a simple contact form, we keep it lean to avoid unused subscriptions.",
  },
  {
    key: "ads",
    name: "Google & LinkedIn Ads",
    summary: "Low-risk paid validation with weekly experiments and transparent source notes.",
    usedWhen: "There’s proven intent or strong ICP clarity; we start with tight keywords and job titles.",
    notUsed: "If positioning is unclear or your funnel isn’t ready — we’ll pause paid until the site and CRM are solid.",
  },
];

export function HomeAdPlatforms() {
  return (
    <section className="py-16 md:py-20" id="ad-platforms">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start">
          <div className="space-y-4 rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))]/80 p-7 shadow-[var(--shadow-md)]">
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-3 block">
              Delivery stack
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-2">Why we choose these platforms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We recommend tools we can stand behind. If a platform is not right for your funnel, we say so early and avoid waste.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80"
              onClick={() => trackEvent("cta_click", { location: "platforms_cta" })}
            >
              View service detail
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid gap-4 md:auto-rows-fr md:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform) => (
              <div
                key={platform.key}
                className="relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))] p-5 shadow-[var(--shadow-sm)] transition hover:-translate-y-1 hover:border-[hsl(var(--primary))] hover:shadow-[var(--shadow-md)]"
              >
                <div className="absolute right-4 top-4 h-10 w-10 rounded-full bg-[hsl(var(--primary))/0.1]" aria-hidden />
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[hsl(var(--primary))/0.14] text-primary">
                    <Sparkle className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold">{platform.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{platform.summary}</p>
                <div className="rounded-xl bg-[hsl(var(--surface-2))] p-3 text-xs text-[hsl(var(--text))] space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-[hsl(var(--text))]">
                    <ShieldCheck className="h-4 w-4 text-[hsl(var(--primary))]" />
                    Used when
                  </div>
                  <p className="text-[hsl(var(--text-muted))] leading-snug">{platform.usedWhen}</p>
                  <div className="flex items-center gap-2 font-semibold text-[hsl(var(--text))]">
                    <ShieldCheck className="h-4 w-4 text-[hsl(var(--primary))]" />
                    Not a fit when
                  </div>
                  <p className="text-[hsl(var(--text-muted))] leading-snug">{platform.notUsed}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
