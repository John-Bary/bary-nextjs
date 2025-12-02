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
            className="relative overflow-hidden min-h-[80vh] flex items-center pt-16 pb-16 sm:pt-24 sm:pb-28"
        >
            {/* Floating glass shapes */}
            <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] rounded-full glass animate-float" />
            <div className="absolute bottom-[20%] left-[5%] w-[200px] h-[200px] rounded-full glass animate-float-reverse" />

            {/* Radial gradient background */}
            <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-float opacity-10">
                <div className="w-full h-full bg-[radial-gradient(circle,rgba(34,116,165,0.3)_0%,transparent_70%)]" />
            </div>

            <div className="container relative z-10">
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="display gradient-text mb-4 sm:mb-6">
                        {t.hero.title}
                    </h1>

                    <p className="text-large mt-4 mb-8 sm:mt-6 sm:mb-10 max-w-[700px] mx-auto">
                        {t.hero.subtitle}
                    </p>

                    <div className="flex flex-col items-stretch justify-center gap-sm sm:flex-row sm:items-center sm:gap-md mb-10 sm:mb-12">
                        <Link href="#contact" className="w-full sm:w-auto">
                            <Button size="lg" className="w-full sm:w-auto">{t.hero.primaryCta}</Button>
                        </Link>
                        <Link href="#services" className="w-full sm:w-auto">
                            <Button variant="glass" size="lg" className="w-full sm:w-auto">{t.hero.secondaryCta}</Button>
                        </Link>
                    </div>

                    {/* Trust Indicators */}
                    <motion.div
                        className="rounded-2xl px-6 py-4 flex gap-6 sm:gap-xl justify-center flex-wrap"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                    >
                        <div className="text-center">
                            <AnimatedCounter value={10} suffix="+" className="text-h2 font-bold gradient-text mb-xs" />
                            <p className="text-small m-0 text-text-gray">{t.hero.stats.projects}</p>
                        </div>
                        <div className="text-center">
                            <AnimatedCounter value={99} suffix="%" className="text-h2 font-bold gradient-text mb-xs" />
                            <p className="text-small m-0 text-text-gray">{t.hero.stats.satisfaction}</p>
                        </div>
                        <div className="text-center">
                            <AnimatedCounter value={2} suffix="+" className="text-h2 font-bold gradient-text mb-xs" />
                            <p className="text-small m-0 text-text-gray">{t.hero.stats.years}</p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
