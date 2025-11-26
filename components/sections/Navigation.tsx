"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navigation() {
    return (
        <nav className="sticky top-0 z-50 glass border-b border-white/30 py-md transition-all duration-base">
            <div className="container">
                <div className="flex items-center justify-between">
                    <Link href="#home" className="flex items-center no-underline">
                        <Image
                            src="/logo.png"
                            alt="bary.lt"
                            width={120}
                            height={40}
                            className="h-10 w-auto"
                        />
                    </Link>

                    <ul className="hidden md:flex gap-lg list-none">
                        <li>
                            <Link href="#home" className="text-text-gray no-underline font-medium transition-colors duration-fast hover:text-cerulean">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="#services" className="text-text-gray no-underline font-medium transition-colors duration-fast hover:text-cerulean">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="#portfolio" className="text-text-gray no-underline font-medium transition-colors duration-fast hover:text-cerulean">
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link href="#about" className="text-text-gray no-underline font-medium transition-colors duration-fast hover:text-cerulean">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="#process" className="text-text-gray no-underline font-medium transition-colors duration-fast hover:text-cerulean">
                                Process
                            </Link>
                        </li>
                        <li>
                            <Link href="#pricing" className="text-text-gray no-underline font-medium transition-colors duration-fast hover:text-cerulean">
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link href="#contact">
                                <Button size="sm">Contact</Button>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
