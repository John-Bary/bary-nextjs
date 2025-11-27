"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { AnimatedCounter } from '@/components/ui/animated-counter';
import { useLanguage } from '@/components/providers/LanguageProvider';

export function Hero() {
    const { t } = useLanguage();
    const containerVariants = {
        hidden: { opacity: 0, y: 28 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.65, ease: 'easeOut', staggerChildren: 0.12 },
        },
    };
    const itemVariants = {
        hidden: { opacity: 0, y: 16 },
        show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
    };
    const statVariants = {
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    };

    return (
        <section
            id="home"
            className="relative overflow-hidden min-h-[80vh] flex items-center pt-16 pb-16 sm:pt-24 sm:pb-28"
        >
            {/* Animated background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    aria-hidden
                    className="absolute top-[-45%] left-[-45%] w-[190%] h-[190%] opacity-10"
                    animate={{ rotate: [0, 1.5, 0], scale: [1, 1.03, 1] }}
                    transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <div className="w-full h-full bg-[radial-gradient(circle,rgba(34,116,165,0.3)_0%,transparent_70%)]" />
                </motion.div>

                <motion.div
                    aria-hidden
                    className="hero-aurora hero-aurora--cerulean"
                    animate={{ x: ['-6%', '6%', '-2%'], y: ['-4%', '6%', '0%'], scale: [1, 1.05, 1] }}
                    transition={{ duration: 16, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                />
                <motion.div
                    aria-hidden
                    className="hero-aurora hero-aurora--orange"
                    animate={{ x: ['5%', '-4%', '8%'], y: ['4%', '-2%', '6%'], scale: [1.05, 1, 1.08], rotate: [0, -2, 0] }}
                    transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                />
                <motion.div
                    aria-hidden
                    className="hero-grid"
                    animate={{ rotate: [0, 2, -2, 0], opacity: [0.1, 0.14, 0.1] }}
                    transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
                />
                <motion.div
                    aria-hidden
                    className="hero-orbit glass"
                    animate={{ scale: [1, 1.04, 1], opacity: [0.55, 0.85, 0.55] }}
                    transition={{ duration: 12, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
                />
            </div>

            <div className="container relative z-10">
                <motion.div className="text-center max-w-4xl mx-auto" variants={containerVariants} initial="hidden" animate="show">
                    <motion.div
                        variants={itemVariants}
                        className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full glass-subtle text-caption uppercase tracking-[0.16em] text-cerulean glow-pulse mx-auto mb-5"
                    >
                        <span className="h-2 w-2 rounded-full bg-cerulean shadow-sm" />
                        <span className="text-dark-gray">{t.footer.tagline}</span>
                    </motion.div>

                    <motion.h1 variants={itemVariants} className="display gradient-text mb-4 sm:mb-6">
                        {t.hero.title}
                    </motion.h1>

                    <motion.p variants={itemVariants} className="text-large mt-4 mb-8 sm:mt-6 sm:mb-10 max-w-[700px] mx-auto text-text-gray">
                        {t.hero.subtitle}
                    </motion.p>

                    <motion.div variants={itemVariants} className="flex flex-col items-stretch justify-center gap-sm sm:flex-row sm:items-center sm:gap-md mb-10 sm:mb-12">
                        <motion.div whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.99 }} className="w-full sm:w-auto">
                            <Link href="#contact" className="w-full sm:w-auto inline-block">
                                <Button size="lg" className="w-full sm:w-auto">{t.hero.primaryCta}</Button>
                            </Link>
                        </motion.div>
                        <motion.div whileHover={{ y: -3, scale: 1.01 }} whileTap={{ scale: 0.99 }} className="w-full sm:w-auto">
                            <Link href="#services" className="w-full sm:w-auto inline-block">
                                <Button variant="glass" size="lg" className="w-full sm:w-auto">{t.hero.secondaryCta}</Button>
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Trust Indicators */}
                    <motion.div variants={itemVariants} className="rounded-2xl px-6 py-4 flex gap-6 sm:gap-xl justify-center flex-wrap">
                        <motion.div
                            className="text-center glass-subtle rounded-xl px-5 py-4"
                            variants={statVariants}
                            whileHover={{ y: -4, scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                        >
                            <AnimatedCounter value={50} suffix="+" className="text-h2 font-bold gradient-text mb-xs" />
                            <p className="text-small m-0 text-text-gray">{t.hero.stats.projects}</p>
                        </motion.div>
                        <motion.div
                            className="text-center glass-subtle rounded-xl px-5 py-4"
                            variants={statVariants}
                            whileHover={{ y: -4, scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                        >
                            <AnimatedCounter value={98} suffix="%" className="text-h2 font-bold gradient-text mb-xs" />
                            <p className="text-small m-0 text-text-gray">{t.hero.stats.satisfaction}</p>
                        </motion.div>
                        <motion.div
                            className="text-center glass-subtle rounded-xl px-5 py-4"
                            variants={statVariants}
                            whileHover={{ y: -4, scale: 1.02 }}
                            transition={{ type: 'spring', stiffness: 220, damping: 18 }}
                        >
                            <AnimatedCounter value={5} suffix="+" className="text-h2 font-bold gradient-text mb-xs" />
                            <p className="text-small m-0 text-text-gray">{t.hero.stats.years}</p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
