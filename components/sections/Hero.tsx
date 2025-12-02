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

                    <motion.h1
                        className="display leading-tight bg-gradient-to-r from-white via-white to-emerald-200 bg-[length:200%_200%] bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
                        initial={{ opacity: 0, y: 12, backgroundPosition: "0% 50%" }}
                        animate={{ opacity: 1, y: 0, backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                        transition={{ duration: 1.1, backgroundPosition: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
                    >
                        {t.hero.title}
                    </motion.h1>

                    <motion.p
                        className="text-large sm:text-xl mt-3 mb-8 max-w-3xl text-white/85 drop-shadow"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1, duration: 0.6 }}
                    >
                        {t.hero.subtitle}
                    </motion.p>

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
                </motion.div>
            </div>
        </section>
    );
}
