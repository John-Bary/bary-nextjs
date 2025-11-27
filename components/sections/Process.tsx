"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/components/providers/LanguageProvider';

export function Process() {
    const { t } = useLanguage();
    const stepColors = ["bg-cerulean", "bg-orange", "bg-amber text-dark-gray", "bg-emerald", "bg-berry"];

    return (
        <section id="process" className="section bg-light-gray/60">
            <div className="container">
                <div className="text-center mb-2xl">
                    <h2>{t.process.heading}</h2>
                    <p className="text-large max-w-[600px] mx-auto">
                        {t.process.description}
                    </p>
                </div>

                <div className="max-w-[900px] mx-auto mb-2xl space-y-lg">
                    {t.process.steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="text-center rounded-2xl p-xl glass frosted-card shadow-[0_16px_48px_rgba(0,0,0,0.08)] backdrop-blur-lg border border-white/25">
                                <div className={`w-full max-w-[520px] mx-auto mb-md h-14 rounded-full ${stepColors[index]} text-white flex items-center justify-center text-h4 font-bold shadow-[0_6px_24px_rgba(34,116,165,0.28)]`}>
                                    {index + 1}
                                </div>
                                <h4 className="mb-md">{step.title}</h4>
                                <p className="m-0">{step.description}</p>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link href="#contact">
                        <Button size="lg">{t.process.cta}</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
