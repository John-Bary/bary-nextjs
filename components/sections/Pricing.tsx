"use client";

import React from 'react';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const features = {
    left: [
        {
            title: "Strategy & Planning",
            items: [
                "Initial consultation and discovery",
                "Comprehensive strategy development",
                "Market analysis and research",
                "Roadmap and timeline planning"
            ]
        },
        {
            title: "Design & Creative",
            items: [
                "Brand identity system",
                "Visual design and UI/UX",
                "Marketing collateral",
                "Design system documentation"
            ]
        }
    ],
    right: [
        {
            title: "Development & Implementation",
            items: [
                "Custom web applications",
                "Responsive development",
                "Quality assurance testing",
                "Performance optimization"
            ]
        },
        {
            title: "Support & Growth",
            items: [
                "Project management",
                "Post-launch support",
                "Performance monitoring",
                "Ongoing optimization"
            ]
        }
    ]
};

export function Pricing() {
    return (
        <section id="pricing" className="section">
            <div className="container">
                <div className="text-center mb-2xl">
                    <h2>What's Included</h2>
                    <p className="text-large max-w-[600px] mx-auto">
                        Every project is tailored to your specific needs. Here's what you can expect when working with us.
                    </p>
                </div>

                <Card variant="featured" className="max-w-[800px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
                        {/* Left Column */}
                        <div>
                            {features.left.map((section, index) => (
                                <div key={index} className={index > 0 ? "mt-xl" : ""}>
                                    <h4 className="mb-lg">{section.title}</h4>
                                    <ul className="list-none m-0 space-y-sm">
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
                            {features.right.map((section, index) => (
                                <div key={index} className={index > 0 ? "mt-xl" : ""}>
                                    <h4 className="mb-lg">{section.title}</h4>
                                    <ul className="list-none m-0 space-y-sm">
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

                    <div className="text-center mt-2xl pt-xl border-t border-medium-gray">
                        <h3 className="mb-md">Ready to Get Started?</h3>
                        <p className="text-large mb-xl text-text-gray">
                            Projects typically range from €500 to €10,000+ depending on scope and complexity.
                        </p>
                        <Link href="#contact">
                            <Button size="lg">Request a Quote</Button>
                        </Link>
                    </div>
                </Card>
            </div>
        </section>
    );
}
