"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Building2, HeartPulse, Sparkles } from "lucide-react";

const caseStudies = [
  {
    icon: Sparkles,
    title: "360 Arena launch",
    industry: "B2C & Entertainment",
    summary:
      "Built the entire digital and operational foundation for 360 Arena — from IT infrastructure and full marketing strategy to website setup and long-term technical support. Delivered a complete go-live package for a new entertainment brand.",
    results: ["10-week go-live", "99.95% uptime in first 90 days"],
    tags: ["IT systems", "Marketing strategy", "Go-to-market", "Ongoing support"],
  },
  {
    icon: Building2,
    title: "Pašilaičiai P.C. website & strategy",
    industry: "Commercial Real Estate",
    summary:
      "Provided consulting for the launch of pasilaiciaipc.lt, including website planning, marketing strategy, and the go-to-market roadmap. Ongoing support ensures the center maintains strong visibility and communication with visitors.",
    results: ["6-week launch cycle", "+24% visitor engagement"],
    tags: ["Website consulting", "Go-to-market", "Marketing strategy"],
  },
  {
    icon: HeartPulse,
    title: "Vitomi vitamins brand & digital ecosystem",
    industry: "Health & Wellness",
    summary:
      "Developed the Vitomi brand (thevitomi.com) from strategic foundation to execution: brand identity, go-to-market plan, website development, B2B strategy, and visual marketing assets. Providing continuous growth support.",
    results: ["3.1x brand search lift", "18 B2B leads/mo"],
    tags: ["Brand strategy", "Go-to-market", "Website creation", "B2B strategy", "Marketing visuals"],
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
