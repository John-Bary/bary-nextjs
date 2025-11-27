"use client";

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/components/providers/LanguageProvider';

export function Pricing() {
    const { t } = useLanguage();

    return (
        <section id="pricing" className="section">
            <div className="container">
                <div className="text-center mb-2xl">
                    <h2>{t.pricing.heading}</h2>
                    <p className="text-large max-w-[600px] mx-auto">
                        {t.pricing.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-lg lg:gap-xl max-w-5xl mx-auto">
                    {t.pricing.cards.map((card, idx) => (
                        <Card key={idx} className="h-full rounded-2xl p-xl glass frosted-card shadow-[0_16px_48px_rgba(0,0,0,0.08)] border border-white/30">
                            <h4 className="mb-sm text-dark-gray">{card.title}</h4>
                            <p className="text-text-gray mb-md">{card.description}</p>
                            <p className="text-small font-semibold uppercase tracking-wide text-dark-gray mb-sm">
                                {t.pricing.servicesLabel}
                            </p>
                            <ul className="list-none m-0 space-y-sm text-dark-gray">
                                {card.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-sm">
                                        <span className="text-emerald font-bold text-h5 leading-none">✓</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-2xl">
                    <h3 className="mb-md text-dark-gray">{t.pricing.ctaHeading}</h3>
                    <p className="text-large mb-xl text-text-gray">
                        {t.pricing.ctaDescription}
                    </p>
                    <Link href="#contact">
                        <Button size="lg">{t.pricing.ctaButton}</Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}
