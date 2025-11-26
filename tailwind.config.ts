import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                cerulean: '#2274A5',
                orange: '#F75C03',
                amber: '#F1C40F',
                berry: '#D90368',
                emerald: '#00CC66',
                'light-gray': '#F8F9FA',
                'medium-gray': '#E9ECEF',
                'text-gray': '#495057',
                'dark-gray': '#212529',
                'border-gray': '#6C757D',
            },
            fontSize: {
                'display': 'clamp(48px, 8vw, 72px)',
                'h1': 'clamp(40px, 6vw, 56px)',
                'h2': 'clamp(32px, 5vw, 40px)',
                'h3': 'clamp(24px, 4vw, 32px)',
                'h4': '24px',
                'h5': '20px',
                'body-large': '18px',
                'body': '16px',
                'body-small': '14px',
                'caption': '12px',
            },
            fontWeight: {
                regular: '400',
                medium: '500',
                semibold: '600',
                bold: '700',
            },
            spacing: {
                'xs': '8px',
                'sm': '16px',
                'md': '24px',
                'lg': '32px',
                'xl': '48px',
                '2xl': '64px',
                '3xl': '96px',
                '4xl': '128px',
            },
            borderRadius: {
                'sm': '8px',
                'md': '12px',
                'lg': '16px',
                'xl': '24px',
                '2xl': '32px',
            },
            boxShadow: {
                'sm': '0 2px 8px rgba(0, 0, 0, 0.06)',
                'md': '0 4px 16px rgba(0, 0, 0, 0.08)',
                'lg': '0 8px 32px rgba(0, 0, 0, 0.12)',
                'xl': '0 16px 48px rgba(0, 0, 0, 0.16)',
            },
            transitionDuration: {
                'fast': '150ms',
                'base': '300ms',
                'slow': '400ms',
                'slower': '600ms',
            },
            transitionTimingFunction: {
                'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
            },
            maxWidth: {
                'container': '1200px',
                'container-wide': '1400px',
            },
            backdropBlur: {
                'glass': '20px',
                'glass-medium': '24px',
                'glass-subtle': '12px',
            },
        },
    },
    plugins: [],
};

export default config;
