import { motion } from "framer-motion";
import { ArrowUpRight, Building2, HeartPulse, Sparkles } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";

const caseStudyIcons = [Sparkles, Building2, HeartPulse];

export function CaseStudies() {
  const { t } = useI18n();

  return (
    <section id="case-studies" className="py-24 md:py-32 relative overflow-hidden">
      <div className="floating-orb hidden sm:block w-[520px] h-[520px] bg-primary/10 -left-48 top-10 animate-pulse-glow" />
      <div className="floating-orb hidden sm:block w-[420px] h-[420px] bg-accent/10 -right-32 bottom-0 animate-pulse-glow" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="text-center mb-14 sm:mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            {t.caseStudies.badge}
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            {t.caseStudies.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.caseStudies.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-5 sm:gap-6">
          {t.caseStudies.items.map((item, index) => {
            const Icon = caseStudyIcons[index % caseStudyIcons.length];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: index * 0.05 }}
                className="glass-card-hover p-6 sm:p-8 flex flex-col gap-4 sm:gap-5"
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
                      <p className="text-xs uppercase tracking-widest text-muted-foreground">{t.caseStudies.outcomeLabel}</p>
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
