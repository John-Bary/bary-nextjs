"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { createContactFormSchema, type ContactFormData } from '@/lib/validations';
import { Loader2 } from 'lucide-react';
import { useLanguage } from '@/components/providers/LanguageProvider';

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { t } = useLanguage();
    const contactFormSchema = React.useMemo(
        () => createContactFormSchema(t.contact.form.errors),
        [t]
    );

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        setValue
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
                toast.success(t.contact.toasts.success);
                reset();
            } else {
                toast.error(result.error || t.contact.toasts.error);
            }
        } catch (error) {
            toast.error(t.contact.toasts.server);
            console.error('Contact form error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section bg-[hsl(var(--surface))]">
            <div className="container">
                <div className="text-center mb-2xl">
                    <h2>{t.contact.heading}</h2>
                    <p className="text-large max-w-[600px] mx-auto">
                        {t.contact.description}
                    </p>
                </div>

                <Card className="max-w-[700px] mx-auto">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-md">
                        <input type="hidden" {...register('service')} />
                        <input type="hidden" {...register('budget')} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                            <div>
                                <label htmlFor="name" className="block mb-xs font-medium">
                                    {t.contact.form.labels.name}
                                </label>
                                <Input
                                    id="name"
                                    placeholder={t.contact.form.placeholders.name}
                                    {...register('name')}
                                    disabled={isSubmitting}
                                />
                                {errors.name && (
                                    <p className="text-small text-[hsl(var(--primary))] mt-xs">{errors.name.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-xs font-medium">
                                    {t.contact.form.labels.email}
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder={t.contact.form.placeholders.email}
                                    {...register('email')}
                                    disabled={isSubmitting}
                                />
                                {errors.email && (
                                    <p className="text-small text-[hsl(var(--primary))] mt-xs">{errors.email.message}</p>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
                            <div>
                                <label htmlFor="service" className="block mb-xs font-medium">
                                    {t.contact.form.labels.service}
                                </label>
                                <Select
                                    defaultValue=""
                                    onValueChange={(val) => setValue('service', val, { shouldValidate: true })}
                                >
                                    <SelectTrigger disabled={isSubmitting}>
                                        <SelectValue placeholder={t.contact.form.labels.service} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {t.contact.form.serviceOptions.map((option) => (
                                            <SelectItem key={option.value || 'empty'} value={option.value || ''}>
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                                {errors.service && (
                                    <p className="text-small text-[hsl(var(--primary))] mt-xs">{errors.service.message}</p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="budget" className="block mb-xs font-medium">
                                    {t.contact.form.labels.budget}
                                </label>
                                <Select
                                    defaultValue=""
                                    onValueChange={(val) => setValue('budget', val, { shouldValidate: true })}
                                >
                                    <SelectTrigger disabled={isSubmitting}>
                                        <SelectValue placeholder={t.contact.form.labels.budget} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {t.contact.form.budgetOptions.map((option) => (
                                            <SelectItem key={option.value || 'empty'} value={option.value || ''}>
                                                {option.label}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block mb-xs font-medium">
                                {t.contact.form.labels.message}
                            </label>
                            <Textarea
                                id="message"
                                placeholder={t.contact.form.placeholders.message}
                                rows={6}
                                {...register('message')}
                                disabled={isSubmitting}
                            />
                            {errors.message && (
                                <p className="text-small text-[hsl(var(--primary))] mt-xs">{errors.message.message}</p>
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
                                    {t.contact.form.submitting}
                                </>
                            ) : (
                                t.contact.form.submit
                            )}
                        </Button>
                    </form>
                </Card>
            </div>
        </section>
    );
}
