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

                <Card variant="featured" className="max-w-[800px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
                        {/* Left Column */}
                        <div>
                            {t.pricing.sections.left.map((section, index) => (
                                <div key={index} className={index > 0 ? "mt-xl" : ""}>
                                    <h4 className="mb-lg text-dark-gray">{section.title}</h4>
                                    <ul className="list-none m-0 space-y-sm text-dark-gray">
                                        {section.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-sm">
                                                <span className="text-emerald font-bold text-h5">✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Right Column */}
                        <div>
                            {t.pricing.sections.right.map((section, index) => (
                                <div key={index} className={index > 0 ? "mt-xl" : ""}>
                                    <h4 className="mb-lg text-dark-gray">{section.title}</h4>
                                    <ul className="list-none m-0 space-y-sm text-dark-gray">
                                        {section.items.map((item, i) => (
                                            <li key={i} className="flex items-center gap-sm">
                                                <span className="text-emerald font-bold text-h5">✓</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-2xl pt-xl border-t border-white/30">
                        <h3 className="mb-md text-dark-gray">{t.pricing.ctaHeading}</h3>
                        <p className="text-large mb-xl text-dark-gray">
                            {t.pricing.ctaDescription}
                        </p>
                        <Link href="#contact">
                            <Button size="lg">{t.pricing.ctaButton}</Button>
                        </Link>
                    </div>
                </Card>
            </div>
        </section>
    );
}
