"use client";

import React from 'react';
import Link from 'next/link';

const showPortfolio = false; // Keep in sync with navigation

const footerLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    ...(showPortfolio ? [{ href: '#portfolio', label: 'Portfolio' as const }] : []),
    { href: '#about', label: 'About' },
    { href: '#process', label: 'Process' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
];

export function Footer() {
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
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="/privacy" className="text-white hover:text-cerulean no-underline">
                                Privacy Policy
                            </Link>
                        </li>
                    </ul>

                    <p className="text-small text-white/70 m-0">
                        Business Consulting & Creative Services © {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
}
