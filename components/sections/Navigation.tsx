"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const showPortfolio = false; // Set to true to re-enable portfolio section and menu link

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    ...(showPortfolio ? [{ href: '#portfolio', label: 'Portfolio' as const }] : []),
    { href: '#about', label: 'About' },
    { href: '#process', label: 'Process' },
    { href: '#pricing', label: 'Pricing' },
];

export function Navigation() {
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        return () => document.body.classList.remove('overflow-hidden');
    }, [isOpen]);

    return (
        <nav className="sticky top-0 z-50 glass border-b border-white/30 py-md transition-all duration-base">
            <div className="container">
                <div className="flex items-center justify-between">
                    <Link href="#home" className="flex items-center no-underline">
                        <Image
                            src="/logo.png"
                            alt="bary.lt"
                            width={160}
                            height={54}
                            className="h-14 w-auto md:h-12"
                            priority
                        />
                    </Link>

                    <ul className="hidden md:flex gap-lg list-none">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link
                                    href={link.href}
                                    className="text-text-gray no-underline font-medium transition-colors duration-fast hover:text-cerulean"
                                >
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                        <li>
                            <Link href="#contact">
                                <Button size="sm">Contact</Button>
                            </Link>
                        </li>
                    </ul>

                    <button
                        className="md:hidden inline-flex items-center justify-center w-12 h-12 rounded-lg glass-subtle border border-white/40 hover:border-white/60 transition-all duration-200"
                        onClick={() => setIsOpen((prev) => !prev)}
                        aria-label="Toggle navigation menu"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Toggle navigation menu</span>
                        <div className="flex flex-col items-center gap-[6px]">
                            <span
                                className={`block h-0.5 w-6 rounded-sm bg-dark-gray transition-transform duration-300 ${isOpen ? 'translate-y-1.5 rotate-45' : ''
                                    }`}
                            />
                            <span
                                className={`block h-0.5 w-6 rounded-sm bg-dark-gray transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''
                                    }`}
                            />
                            <span
                                className={`block h-0.5 w-6 rounded-sm bg-dark-gray transition-transform duration-300 ${isOpen ? '-translate-y-1.5 -rotate-45' : ''
                                    }`}
                            />
                        </div>
                    </button>
                </div>

                {isOpen && (
                    <div className="md:hidden mt-sm">
                        <div className="glass-subtle rounded-xl shadow-xl border border-white/40 p-lg space-y-sm">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block w-full no-underline text-dark-gray font-semibold py-2 px-2 rounded-lg hover:bg-white/70 transition-colors duration-200"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Link href="#contact" onClick={() => setIsOpen(false)} className="block">
                                <Button className="w-full">Contact</Button>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
