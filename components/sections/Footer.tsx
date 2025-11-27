"use client";

import React from 'react';
import Link from 'next/link';
import { useLanguage, type Translations } from '@/components/providers/LanguageProvider';

const showPortfolio = false; // Keep in sync with navigation

const footerLinks: { href: string; id: keyof Translations["navigation"]["links"] }[] = [
    { href: '#home', id: 'home' },
    { href: '#services', id: 'services' },
    ...(showPortfolio ? [{ href: '#portfolio', id: 'portfolio' as const }] : []),
    { href: '#about', id: 'about' },
    { href: '#process', id: 'process' },
    { href: '#pricing', id: 'pricing' },
    { href: '#contact', id: 'contact' },
];

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="section-compact bg-dark-gray text-white">
            <div className="container">
                <div className="text-center space-y-3">
                    <h3 className="text-white mb-2">bary.lt</h3>

                    <ul className="flex flex-wrap justify-center gap-4 list-none p-0 m-0 text-small text-white/80">
                        {footerLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-white/80 hover:text-white no-underline transition-colors duration-150"
                                >
                                    {t.navigation.links[link.id]}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="/privacy" className="text-white hover:text-cerulean no-underline">
                                {t.footer.privacy}
                            </Link>
                        </li>
                    </ul>

                    <p className="text-small text-white/70 m-0">
                        {t.footer.tagline} © {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
}
