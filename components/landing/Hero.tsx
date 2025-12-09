"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";
import { GlobeBackground } from "./GlobeBackground";

export function Hero() {
  const { t } = useI18n();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-start justify-center overflow-hidden"
    >
      <GlobeBackground />
      <div className="hero-gradient absolute inset-0" />
      <div className="floating-orb hidden sm:block w-[600px] h-[600px] bg-primary/20 -top-40 -right-40 animate-pulse-glow" />
      <div
        className="floating-orb hidden sm:block w-[400px] h-[400px] bg-accent/15 bottom-20 -left-20 animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 pt-24 pb-20 sm:pt-32 sm:pb-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">{t.hero.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.08]"
          >
            {t.hero.title}
            <br />
            <span className="gradient-text glow-text">{t.hero.highlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            {t.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <a
              href="#contact"
              className="group px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium flex items-center gap-2 hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25"
            >
              {t.hero.ctas.primary}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#services"
              className="px-8 py-4 rounded-full border border-border hover:border-primary/50 text-foreground font-medium transition-all duration-300 hover:bg-secondary/50"
          >
            {t.hero.ctas.secondary}
          </a>
        </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 sm:bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
