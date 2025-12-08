"use client";

import { type FormEvent, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import { useI18n } from "../i18n/I18nProvider";

export function Contact() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success(t.contact.toast.title, {
      description: t.contact.toast.description,
    });

    setIsSubmitting(false);
    event.currentTarget.reset();
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="hero-gradient absolute inset-0 rotate-180" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">
            {t.contact.badge}
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            {t.contact.title}
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div className="glass-card p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold">{t.contact.emailLabel}</h3>
              </div>
              <p className="text-muted-foreground">{t.contact.emailValue}</p>
            </div>

            <div className="glass-card p-6">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold">{t.contact.locationLabel}</h3>
              </div>
              <p className="text-muted-foreground">{t.contact.locationValue}</p>
            </div>

            <div className="line-decoration" />

            <p className="text-sm text-muted-foreground">
              {t.contact.responseTime}
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass-card p-8 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">{t.contact.form.nameLabel}</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder={t.contact.form.namePlaceholder}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t.contact.form.emailLabel}</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder={t.contact.form.emailPlaceholder}
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">{t.contact.form.serviceLabel}</label>
                <select
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  defaultValue=""
                >
                  <option value="">{t.contact.form.servicePlaceholder}</option>
                  {t.contact.form.services.map((service) => (
                    <option key={service.value} value={service.value}>
                      {service.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">{t.contact.form.budgetLabel}</label>
                <select
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  defaultValue=""
                >
                  <option value="">{t.contact.form.budgetPlaceholder}</option>
                  {t.contact.form.budgets.map((budget) => (
                    <option key={budget.value} value={budget.value}>
                      {budget.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">{t.contact.form.messageLabel}</label>
              <textarea
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                placeholder={t.contact.form.messagePlaceholder}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:shadow-primary/25 disabled:opacity-50"
            >
              {isSubmitting ? t.contact.form.submitting : t.contact.form.submit}
              <Send className="w-4 h-4" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
