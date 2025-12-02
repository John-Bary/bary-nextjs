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
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/35" />
            </div>

            <div className="container relative z-10 py-14 sm:py-20 lg:py-24">
                <motion.div
                    className="max-w-3xl bg-white/12 backdrop-blur-xl border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.35)] rounded-3xl p-8 sm:p-10 space-y-6 text-left text-white"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-white/10 text-white/85 text-small border border-white/20">
                        <span className="h-2 w-2 rounded-full bg-emerald inline-block" />
                        {t.hero.secondaryCta}
                    </div>

                    <h1 className="display leading-tight text-white drop-shadow-[0_15px_30px_rgba(0,0,0,0.45)]">
                        {t.hero.title}
                    </h1>

                    <p className="text-large sm:text-xl text-white/85 drop-shadow">
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
                </motion.div>
            </div>
        </section>
    );
}
