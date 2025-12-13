"use client";

import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export function ContactCta() {
  return (
    <section className="py-16 md:py-20" id="contact">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="glass-card-hover p-8 sm:p-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between rounded-3xl">
          <div className="space-y-3 max-w-2xl">
            <span className="text-primary text-sm font-medium tracking-wider uppercase block">
              Ready to plan
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold">Let’s outline your first 90 days</h2>
            <p className="text-muted-foreground leading-relaxed">
              In the first call you’ll leave with a positioning punch-list, the quickest wins for your site, and whether paid is worth testing now.
            </p>
            <ul className="text-foreground/80 text-sm space-y-1 list-disc list-inside">
              <li>Pricing ranges: Sprint from €2.8k, Launch €6.5k-€9.5k, Growth from €2k/mo.</li>
              <li>Location: Vilnius, serving the Baltic region remotely.</li>
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
    </section>
  );
}
