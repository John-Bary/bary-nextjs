"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';

export function Hero() {
    const { t } = useLanguage();

    return (
        <section id="home" className="relative min-h-[70vh] sm:min-h-[80vh] overflow-hidden bg-[#0b1f33]">
            <div className="absolute inset-0">
                <Image
                    src="/pexels-leish-5255319.jpg"
                    alt="Consulting team at work"
                    fill
                    priority
                    className="object-cover object-center"
                    sizes="100vw"
                />
                <div className="absolute inset-0 bg-black/65" />
            </div>

            <div className="container relative z-10 flex items-center min-h-[70vh] sm:min-h-[80vh]">
                <motion.div
                    className="max-w-3xl w-full md:w-auto bg-white/12 backdrop-blur-2xl border border-white/20 shadow-[0_16px_48px_rgba(0,0,0,0.35)] rounded-2xl p-6 sm:p-8 space-y-5 text-left text-white"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
<<<<<<< ours
                    <h1 className="display leading-tight text-white drop-shadow-[0_12px_28px_rgba(0,0,0,0.45)]">
                        {t.hero.title}
                    </h1>

                    <p className="text-large sm:text-xl text-white/85 drop-shadow">
=======
                    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 text-white/80 text-small backdrop-blur">
                        <span className="h-2 w-2 rounded-full bg-emerald inline-block" />
                        {t.hero.secondaryCta}
                    </div>

                    <h1 className="display text-white drop-shadow-xl leading-tight">
                        {t.hero.title}
                    </h1>

                    <p className="text-large sm:text-xl mt-3 mb-8 max-w-3xl text-white/85">
>>>>>>> theirs
                        {t.hero.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-sm sm:gap-md pt-2">
                        <Link href="#contact" className="w-full sm:w-auto">
                            <Button
                                size="lg"
                                className="w-full sm:w-auto shadow-[0_15px_40px_rgba(6,182,212,0.35)] bg-gradient-to-r from-cerulean to-emerald text-white border border-white/10"
                            >
                                {t.hero.primaryCta}
                            </Button>
                        </Link>
                        <Link href="#services" className="w-full sm:w-auto">
                            <Button
                                variant="secondary"
                                size="lg"
                                className="w-full sm:w-auto border-white/60 text-white hover:bg-white/10"
                            >
                                {t.hero.secondaryCta}
                            </Button>
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <motion.div
                        className="rounded-2xl px-6 py-5 sm:px-8 sm:py-6 bg-white/10 border border-white/15 backdrop-blur-lg flex gap-6 sm:gap-xl justify-center flex-wrap text-white shadow-[0_15px_45px_rgba(0,0,0,0.25)]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="text-center">
                            <AnimatedCounter value={10} suffix="+" className="text-h2 font-bold mb-xs text-white drop-shadow" />
                            <p className="text-small m-0 text-white/80">{t.hero.stats.projects}</p>
                        </div>
                        <div className="text-center">
                            <AnimatedCounter value={99} suffix="%" className="text-h2 font-bold mb-xs text-white drop-shadow" />
                            <p className="text-small m-0 text-white/80">{t.hero.stats.satisfaction}</p>
                        </div>
                        <div className="text-center">
                            <AnimatedCounter value={2} suffix="+" className="text-h2 font-bold mb-xs text-white drop-shadow" />
                            <p className="text-small m-0 text-white/80">{t.hero.stats.years}</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
