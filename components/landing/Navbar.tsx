"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useI18n } from "../i18n/I18nProvider";

export function Navbar() {
  const { t, language, setLanguage } = useI18n();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-5 flex items-center justify-between">
        <a href="#home" className="font-heading text-2xl font-bold tracking-tight">
          <span className="gradient-text">bary</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {t.navbar.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => setLanguage(language === "en" ? "lt" : "en")}
            aria-label={t.navbar.language.toggleAria}
            className="px-3 py-2 rounded-full border border-border text-xs font-medium text-foreground/80 hover:border-primary/60 hover:text-foreground transition-all duration-300"
          >
            {language === "en" ? "LT" : "EN"}
          </button>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            {t.navbar.cta}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="md:hidden text-foreground p-2"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border"
          >
            <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
              {t.navbar.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground text-lg py-2"
                >
                  {link.label}
                </a>
              ))}
              <button
                type="button"
                onClick={() => setLanguage(language === "en" ? "lt" : "en")}
                aria-label={t.navbar.language.toggleAria}
                className="w-full px-5 py-3 rounded-full border border-border text-center font-medium text-foreground hover:border-primary/60"
              >
                {language === "en" ? "LT" : "EN"}
              </button>
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-5 py-3 rounded-full bg-primary text-primary-foreground text-center font-medium mt-2"
              >
                {t.navbar.cta}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
