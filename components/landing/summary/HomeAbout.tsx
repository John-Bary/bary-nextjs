"use client";

import Link from "next/link";
import { ArrowUpRight, CircleDot } from "lucide-react";

export function HomeAbout() {
  return (
    <section className="py-16 md:py-20" id="about">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="space-y-4 rounded-3xl border border-[hsl(var(--border))] bg-[hsl(var(--surface))]/80 p-7 shadow-[var(--shadow-md)]">
            <span className="text-primary text-sm font-medium tracking-wider uppercase block">
              About BARY
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">
              Vilnius-based team blending strategy, design, and build
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We work with Baltic B2B service firms that need clear offers, credible sites, and nurture journeys that respect privacy and accessibility.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Each engagement is founder-led. We ship in short cycles, document decisions, and keep your team unblocked.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80">
              See how we work
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "Location", sublabel: "Vilnius", value: "Baltics" },
              { label: "Engagement style", sublabel: "Founder-led", value: "Weekly" },
              { label: "Quality", sublabel: "Accessibility", value: "AA" },
              { label: "Collaboration", sublabel: "Transparent", value: "Boards" },
            ].map((stat) => (
              <div key={stat.label} className="glass-card-hover p-4 sm:p-5 rounded-2xl flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary">
                  <CircleDot className="w-4 h-4" />
                  <span className="text-xs uppercase tracking-wide font-semibold">{stat.sublabel}</span>
                </div>
                <div className="font-heading text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-foreground/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
