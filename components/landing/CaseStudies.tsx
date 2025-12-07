"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, BarChart3, Globe2, Rocket } from "lucide-react";

const caseStudies = [
  {
    icon: BarChart3,
    title: "SaaS conversion overhaul",
    industry: "B2B Platform",
    summary:
      "Rebuilt the onboarding, pricing, and activation path for a subscription analytics platform to reduce friction and highlight ROI.",
    results: ["+42% trial-to-paid", "-28% support tickets"],
    tags: ["UX redesign", "Product analytics", "Experimentation"],
  },
  {
    icon: Globe2,
    title: "Market expansion launch",
    industry: "Retail & eCommerce",
    summary:
      "Developed a localized brand system, landing funnels, and lifecycle campaigns to open two new markets in under 60 days.",
    results: ["€1.2M pipeline", "3.4x ROAS"],
    tags: ["Brand system", "Campaign ops", "Localization"],
  },
  {
    icon: Rocket,
    title: "Operational automation",
    industry: "Professional Services",
    summary:
      "Implemented internal tools, dashboards, and automations that cut manual work and surfaced real-time performance data.",
    results: ["-18hrs/week ops", "+99% data accuracy"],
    tags: ["Process design", "Custom dashboards", "Automation"],
  },
];

export function CaseStudies() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="case-studies" className="py-32 relative overflow-hidden">
      <div className="floating-orb w-[520px] h-[520px] bg-primary/10 -left-48 top-10 animate-pulse-glow" />
      <div className="floating-orb w-[420px] h-[420px] bg-accent/10 -right-32 bottom-0 animate-pulse-glow" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            Case Studies
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Results we deliver
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A sample of engagements where strategy, design, and engineering combined to move the right metrics.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {caseStudies.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card-hover p-8 flex flex-col gap-5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm uppercase tracking-wider text-muted-foreground">{item.industry}</p>
                      <h3 className="font-heading text-2xl font-semibold">{item.title}</h3>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <p className="text-muted-foreground leading-relaxed">{item.summary}</p>

                <div className="flex flex-wrap gap-3">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-secondary/60 border border-border text-xs text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-4 mt-auto">
                  {item.results.map((result) => (
                    <div key={result} className="glass-card p-4">
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">Outcome</p>
                      <p className="font-heading text-xl font-semibold gradient-text mt-2">{result}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
