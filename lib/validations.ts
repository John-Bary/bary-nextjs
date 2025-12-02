import { z } from 'zod';

export type ContactFormMessages = {
    nameMin: string;
    nameMax: string;
    email: string;
    service: string;
    messageMin: string;
    messageMax: string;
};

export function createContactFormSchema(messages: ContactFormMessages) {
    return z.object({
        name: z.string().min(2, messages.nameMin).max(100, messages.nameMax),
        email: z.string().email(messages.email),
        service: z.string().min(1, messages.service),
        budget: z.string().optional(),
        message: z.string().min(10, messages.messageMin).max(1000, messages.messageMax),
    });
}

export const defaultContactFormMessages: ContactFormMessages = {
    nameMin: 'Name must be at least 2 characters',
    nameMax: 'Name is too long',
    email: 'Please enter a valid email address',
    service: 'Please select a service',
    messageMin: 'Message must be at least 10 characters',
    messageMax: 'Message is too long',
};

export const contactFormSchema = createContactFormSchema(defaultContactFormMessages);

export type ContactFormData = z.infer<typeof contactFormSchema>;
