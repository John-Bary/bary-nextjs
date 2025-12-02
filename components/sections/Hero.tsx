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

    const heroStats = [
        { value: 10, suffix: "+", label: t.hero.stats.projects, helper: "Complete customer satisfaction" },
        { value: 99, suffix: "%", label: t.hero.stats.satisfaction, helper: "Innovation and valuable insight" },
        { value: 2, suffix: "+", label: t.hero.stats.years, helper: "Highly efficient strategies" },
    ];

    return (
        <section id="home" className="relative bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e8eef5] pb-16">
            <div className="container">
                <div className="relative overflow-hidden rounded-3xl border border-white/50 shadow-2xl bg-black/5">
                    <div className="absolute inset-0">
                        <Image
                            src="/hero%20image.png"
                            alt="Consulting team at work"
                            fill
                            priority
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/25" />
                    </div>

                    <div className="relative grid lg:grid-cols-2 gap-10 lg:gap-12 p-8 sm:p-12 lg:p-16 items-center">
                        <motion.div
                            className="space-y-6 text-left text-white"
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 text-white/80 text-small backdrop-blur border border-white/15">
                                <span className="h-2 w-2 rounded-full bg-emerald inline-block" />
                                {t.hero.secondaryCta}
                            </div>

                            <h1 className="display leading-tight drop-shadow-[0_15px_30px_rgba(0,0,0,0.35)]">
                                {t.hero.title}
                            </h1>

                            <p className="text-large sm:text-xl max-w-2xl text-white/85 drop-shadow">
                                {t.hero.subtitle}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-sm sm:gap-md">
                                <Link href="#contact" className="w-full sm:w-auto">
                                    <Button
                                        size="lg"
                                        className="w-full sm:w-auto shadow-[0_15px_40px_rgba(6,182,212,0.35)] bg-gradient-to-r from-cerulean to-emerald text-white border border-white/20"
                                    >
                                        {t.hero.primaryCta}
                                    </Button>
                                </Link>
                                <Link href="#services" className="w-full sm:w-auto">
                                    <Button
                                        variant="glass"
                                        size="lg"
                                        className="w-full sm:w-auto border-white/40 text-white hover:bg-white/15"
                                    >
                                        {t.hero.secondaryCta}
                                    </Button>
                                </Link>
                            </div>

                            <div className="flex items-center gap-3 text-white/85">
                                <div className="flex -space-x-2">
                                    <div className="h-10 w-10 rounded-full bg-white/20 border border-white/30 backdrop-blur" />
                                    <div className="h-10 w-10 rounded-full bg-white/25 border border-white/30 backdrop-blur" />
                                    <div className="h-10 w-10 rounded-full bg-white/30 border border-white/30 backdrop-blur" />
                                </div>
                                <span className="text-small">10,000+ people already joined the advisory</span>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-sm">
                    {heroStats.map((stat, idx) => (
                        <motion.div
                            key={stat.label}
                            className="bg-white rounded-2xl shadow-lg p-5 sm:p-6 border border-white/60"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 * idx }}
                        >
                            <p className="text-xs uppercase tracking-[0.08em] text-text-gray mb-2">
                                {stat.label}
                            </p>
                            <div className="text-3xl font-bold text-dark-gray">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </div>
                            <p className="text-small text-text-gray/80 mt-1">{stat.helper}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
