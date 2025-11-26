"use client";

import React from 'react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="section-compact bg-dark-gray text-white">
            <div className="container">
                <div className="text-center space-y-2">
                    <h3 className="text-white mb-sm">bary.lt</h3>
                    <p className="text-small text-white/70 m-0">
                        Business Consulting & Creative Services © {new Date().getFullYear()}
                    </p>
                    <p className="text-small text-white/70 m-0">
                        <Link href="/privacy" className="text-white hover:text-cerulean no-underline">
                            Privacy Policy
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
