"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, Lightbulb, PenTool, Rocket, Search } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";

const stepIcons = [Search, Lightbulb, PenTool, Code, Rocket];

export function Process() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="process" className="py-24 md:py-32 relative">
      <div className="section-gradient absolute inset-0 rotate-180" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            {t.process.badge}
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            {t.process.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.process.description}
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

          <div className="space-y-8 lg:space-y-0">
            {t.process.steps.map((step, index) => {
              const Icon = stepIcons[index % stepIcons.length];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-16 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
                >
                  <div className={isEven ? "lg:text-right" : "lg:col-start-2"}>
                    <div className={`glass-card-hover p-8 ${isEven ? "lg:ml-auto" : ""} max-w-lg`}>
                      <div className={`flex items-center gap-4 mb-4 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <span className="text-5xl font-heading font-bold text-muted/50">{step.number}</span>
                      </div>
                      <h3 className="font-heading text-2xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>

                  <div
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center justify-center"
                    style={{ top: `${index * 20 + 10}%` }}
                  >
                    <div className="w-4 h-4 rounded-full bg-primary glow-border" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25"
          >
            {t.process.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
