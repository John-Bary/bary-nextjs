"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input, Textarea, Select } from '@/components/ui/input';
import { contactFormSchema, type ContactFormData } from '@/lib/validations';
import { Loader2 } from 'lucide-react';

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema)
    });

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                toast.success(result.message || "Thank you! We'll be in touch soon.");
                reset();
            } else {
                toast.error(result.error || 'Something went wrong. Please try again.');
            }
        } catch (error) {
            toast.error('Failed to send message. Please try again later.');
            console.error('Contact form error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section bg-light-gray">
            <div className="container">
                <div className="text-center mb-2xl">
                    <h2>Let's Talk</h2>
                    <p className="text-large max-w-[600px] mx-auto">
                        Tell us about your project. We'll respond within 24 hours with next steps.
                    </p>
                </div>

                <Card variant="featured" className="max-w-[700px] mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-md">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                            <div>
                                <label htmlFor="name" className="block mb-xs font-medium">
                                    Name *
                                </label>
                                <Input
                                    id="name"
                                    placeholder="Your full name"
                                    {...register('name')}
                                    disabled={isSubmitting}
                                />
                                {errors.name && (
                                    <p className="text-small text-berry mt-xs">{errors.name.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-xs font-medium">
                                    Email *
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your@company.com"
                                    {...register('email')}
                                    disabled={isSubmitting}
                                />
                                {errors.email && (
                                    <p className="text-small text-berry mt-xs">{errors.email.message}</p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="phone" className="block mb-xs font-medium">
                                Phone
                            </label>
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="+370 XXX XXXXX"
                                {...register('phone')}
                                disabled={isSubmitting}
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                            <div>
                                <label htmlFor="service" className="block mb-xs font-medium">
                                    Service Interest *
                                </label>
                                <Select
                                    id="service"
                                    {...register('service')}
                                    disabled={isSubmitting}
                                >
                                    <option value="">Select a service</option>
                                    <option value="consulting">Business Consulting</option>
                                    <option value="creative">Creative Services</option>
                                    <option value="digital">Digital Solutions</option>
                                    <option value="marketing">Marketing Strategy</option>
                                    <option value="other">Other</option>
                                </Select>
                                {errors.service && (
                                    <p className="text-small text-berry mt-xs">{errors.service.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="budget" className="block mb-xs font-medium">
                                    Budget Range
                                </label>
                                <Select
                                    id="budget"
                                    {...register('budget')}
                                    disabled={isSubmitting}
                                >
                                    <option value="">Select budget range</option>
                                    <option value="<5k">Less than €5,000</option>
                                    <option value="5k-10k">€5,000 - €10,000</option>
                                    <option value="10k-25k">€10,000 - €25,000</option>
                                    <option value="25k+">€25,000+</option>
                                    <option value="not-sure">Not sure yet</option>
                                </Select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block mb-xs font-medium">
                                Message *
                            </label>
                            <Textarea
                                id="message"
                                placeholder="Tell us about your project, timeline, and objectives..."
                                rows={6}
                                {...register('message')}
                                disabled={isSubmitting}
                            />
                            {errors.message && (
                                <p className="text-small text-berry mt-xs">{errors.message.message}</p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            className="w-full"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                'Send Message'
                            )}
                        </Button>
                    </form>

                    <div className="text-center mt-xl pt-xl border-t border-medium-gray">
                        <p className="text-small text-text-gray mb-md">
                            Or reach us directly:
                        </p>
                        <p className="mb-sm">
                            <strong>Email:</strong>{' '}
                            <a href="mailto:hello@bary.lt" className="text-cerulean no-underline font-medium hover:underline">
                                hello@bary.lt
                            </a>
                        </p>
                        <p className="m-0">
                            <strong>Phone:</strong>{' '}
                            <a href="tel:+37060000000" className="text-cerulean no-underline font-medium hover:underline">
                                +370 600 00000
                            </a>
                        </p>
                    </div>
                </Card>
            </div>
        </section>
    );
}
