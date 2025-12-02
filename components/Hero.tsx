"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Hero() {
    const { t } = useLanguage();

    return (
        <section
            id="home"
            className="relative min-h-screen overflow-hidden text-white"
            aria-labelledby="hero-heading"
        >
            <div className="absolute inset-0">
                <Image
                    src="/pexels-leish-5255319.jpg"
                    alt="Consulting team at work"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/65" />
            </div>

            <div className="container relative z-10 flex items-center min-h-screen py-16 sm:py-20">
                <motion.div
                    className="w-full max-w-2xl rounded-3xl bg-white/12 backdrop-blur-2xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.35)] px-6 py-8 sm:px-10 sm:py-12 space-y-5"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 text-white/90 text-sm border border-white/20">
                        <span className="h-2 w-2 rounded-full bg-emerald inline-block" />
                        {t.hero.secondaryCta}
                    </div>

                    <h1
                        id="hero-heading"
                        className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight drop-shadow-[0_15px_30px_rgba(0,0,0,0.45)]"
                    >
                        {t.hero.title}
                    </h1>

                    <p className="text-base sm:text-lg lg:text-xl text-white/85 leading-relaxed">
                        {t.hero.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                        <Link href="#contact" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto bg-gradient-to-r from-cerulean to-emerald text-white shadow-[0_18px_45px_rgba(6,182,212,0.35)] border border-white/10 hover:brightness-105 transition"
                                aria-label={t.hero.primaryCta}
                            >
                                {t.hero.primaryCta}
                            </Button>
                        </Link>
                        <Link href="#services" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto bg-white/10 text-white border border-white/40 hover:bg-white/20 transition"
                                aria-label={t.hero.secondaryCta}
                            >
                                {t.hero.secondaryCta}
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
