"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { useLanguage } from '@/components/providers/LanguageProvider';

export function Hero() {
    const { t } = useLanguage();

    return (
        <section
            id="home"
            className="relative overflow-hidden min-h-[80vh] flex items-center py-16 sm:py-24"
        >
            <Image
                src="/Gemini_Generated_Image_du6u3udu6u3udu6u.png"
                alt="Abstract consulting illustration"
                fill
                priority
                className="absolute inset-0 object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-black/40" />
            <div className="absolute inset-0 mix-blend-screen pointer-events-none bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(255,255,255,0.12),transparent_28%),radial-gradient(circle_at_40%_70%,rgba(255,255,255,0.1),transparent_30%)]" />

            <div className="container relative z-10">
                <motion.div
                    className="max-w-4xl space-y-6 text-left"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 text-white/80 text-small backdrop-blur">
                        <span className="h-2 w-2 rounded-full bg-emerald inline-block" />
                        {t.hero.secondaryCta}
                    </div>

                    <h1 className="display text-white drop-shadow-xl leading-tight">
                        {t.hero.title}
                    </h1>

                    <p className="text-large sm:text-xl mt-3 mb-8 max-w-3xl text-white/85">
                        {t.hero.subtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-sm sm:gap-md mb-12">
                        <Link href="#contact" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto shadow-lg shadow-emerald/30">
                                {t.hero.primaryCta}
                            </Button>
                        </Link>
                        <Link href="#services" className="w-full sm:w-auto">
                            <Button variant="glass" size="lg" className="w-full sm:w-auto border-white/40 text-white">
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
