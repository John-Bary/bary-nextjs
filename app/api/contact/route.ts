import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { contactFormSchema } from '@/lib/validations';
import { ZodError } from 'zod';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate the request body
        const validatedData = contactFormSchema.parse(body);

        // Create the contact submission in the database
        const submission = await prisma.contactSubmission.create({
            data: {
                name: validatedData.name,
                email: validatedData.email,
                service: validatedData.service,
                budget: validatedData.budget || null,
                message: validatedData.message,
            },
        });

        // Optional: Send email notification here
        // You can add email sending logic using Resend, SendGrid, etc.

        return NextResponse.json(
            {
                success: true,
                message: "Thank you! We'll be in touch soon.",
                id: submission.id,
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form submission error:', error);

        if (error instanceof ZodError) {
            return NextResponse.json(
                {
                    success: false,
                    error: 'Invalid form data. Please check your inputs.',
                    details: error.issues,
                },
                { status: 400 }
            );
        }

        return NextResponse.json(
            {
                success: false,
                error: 'Failed to submit form. Please try again later.',
            },
            { status: 500 }
        );
    }
}
