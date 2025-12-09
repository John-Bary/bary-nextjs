"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useI18n } from "../i18n/I18nProvider";

export function About() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      <div className="floating-orb hidden sm:block w-[500px] h-[500px] bg-primary/10 top-1/2 -translate-y-1/2 -right-60 animate-pulse-glow" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ type: "spring", stiffness: 140, damping: 18 }}
          >
            <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
              {t.about.badge}
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mb-8 leading-tight">
              {t.about.title}
              <br />
              <span className="gradient-text">{t.about.highlight}</span>
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              {t.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-secondary hover:bg-secondary/80 text-foreground font-medium transition-all duration-300"
            >
              {t.about.cta}
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ type: "spring", stiffness: 140, damping: 18, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {t.about.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ type: "spring", stiffness: 140, damping: 18, delay: 0.2 + index * 0.07 }}
                className="glass-card p-6 text-center"
              >
                <div className="text-4xl sm:text-5xl font-heading font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-foreground font-medium mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
