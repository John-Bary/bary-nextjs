"use client";

import React from 'react';

export function Footer() {
    return (
        <footer className="section-compact bg-dark-gray text-white">
            <div className="container">
                <div className="text-center">
                    <h3 className="text-white mb-sm">bary.lt</h3>
                    <p className="text-small text-white/70 m-0">
                        Business Consulting & Creative Services © {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </footer>
    );
}
