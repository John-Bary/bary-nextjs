"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Hero() {
    const { t } = useLanguage();

    return (
        <section
            id="home"
            className="relative overflow-hidden min-h-[80vh] flex items-center py-16 sm:py-24 bg-gradient-to-br from-[#e9f5ff] via-white to-[#f3f7fb]"
        >
            {/* 3D-like floating bubbles */}
            <div className="absolute -top-10 right-6 w-[320px] h-[320px] rounded-full bg-gradient-to-br from-emerald/50 via-cerulean/45 to-white/30 blur-3xl animate-[float_12s_ease-in-out_infinite]" />
            <div className="absolute bottom-[-80px] left-[-40px] w-[360px] h-[360px] rounded-full bg-gradient-to-br from-cerulean/40 via-emerald/35 to-white/20 blur-3xl animate-[float_14s_ease-in-out_infinite]" />
            <div className="absolute top-1/3 left-1/3 w-[220px] h-[220px] rounded-full bg-gradient-to-br from-white/60 via-cerulean/30 to-emerald/30 blur-3xl opacity-70 animate-[float_16s_ease-in-out_infinite]" />

            <div className="container relative z-10">
                <motion.div
                    className="text-center max-w-4xl mx-auto space-y-6"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/80 text-dark-gray text-sm shadow-sm border border-white/70">
                        <span className="h-2 w-2 rounded-full bg-emerald inline-block" />
                        {t.hero.secondaryCta}
                    </div>

                    <h1 className="display leading-tight text-dark-gray">
                        {t.hero.title}
                    </h1>

                    <p className="text-large sm:text-xl max-w-3xl mx-auto text-text-gray">
                        {t.hero.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-sm sm:gap-md justify-center">
                        <Link href="#contact" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto bg-gradient-to-r from-cerulean to-emerald text-white shadow-[0_18px_45px_rgba(6,182,212,0.35)]"
                            >
                                {t.hero.primaryCta}
                            </Button>
                        </Link>
                        <Link href="#services" className="w-full sm:w-auto">
                            <Button
                                variant="glass"
                                size="lg"
                                className="w-full sm:w-auto border-cerulean/30 text-dark-gray hover:bg-white/80"
                            >
                                {t.hero.secondaryCta}
                            </Button>
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <motion.div
                        className="w-fit max-w-full mx-auto rounded-2xl px-6 py-5 sm:px-8 sm:py-6 bg-white/80 border border-white/70 backdrop-blur-lg flex gap-6 sm:gap-xl justify-center flex-wrap text-dark-gray shadow-[0_15px_45px_rgba(0,0,0,0.12)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.25, duration: 0.5 }}
                    >
                        <div className="text-center">
                            <AnimatedCounter value={10} suffix="+" className="text-h2 font-bold mb-xs text-cerulean" />
                            <p className="text-small m-0 text-text-gray">{t.hero.stats.projects}</p>
                        </div>
                        <div className="text-center">
                            <AnimatedCounter value={99} suffix="%" className="text-h2 font-bold mb-xs text-orange" />
                            <p className="text-small m-0 text-text-gray">{t.hero.stats.satisfaction}</p>
                        </div>
                        <div className="text-center">
                            <AnimatedCounter value={2} suffix="+" className="text-h2 font-bold mb-xs text-emerald" />
                            <p className="text-small m-0 text-text-gray">{t.hero.stats.years}</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
