import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";
import "./globals.css";
import { I18nProvider } from "@/components/i18n/I18nProvider";

export const metadata: Metadata = {
  title: "BARY | Conversion sites for Baltic B2B services",
  description:
    "Boutique team in Vilnius building conversion-focused sites, CRM journeys, and paid media for Baltic B2B service firms.",
  keywords: [
    "B2B services",
    "Baltics",
    "conversion rate",
    "Webflow",
    "HubSpot",
    "lead generation",
    "Vilnius",
  ],
  authors: [{ name: "BARY" }],
  icons: {
    icon: [
      { url: "/web-app-manifest-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/web-app-manifest-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: "/web-app-manifest-192x192.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "BARY | Conversion sites for Baltic B2B services",
    description:
      "Boutique team in Vilnius building conversion-focused sites, CRM journeys, and paid media for Baltic B2B service firms.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative overflow-x-hidden bg-background text-foreground">
        <I18nProvider>
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <div className="relative z-10">
            {children}
          </div>
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'Organization',
                name: 'BARY',
                url: 'https://bary.lt',
                logo: 'https://bary.lt/web-app-manifest-192x192.png',
                sameAs: ['https://www.linkedin.com'],
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Vilnius',
                  addressCountry: 'LT',
                },
              }),
            }}
          />
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'LocalBusiness',
                name: 'BARY',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Vilnius',
                  addressCountry: 'LT',
                },
                areaServed: 'Baltic region',
                url: 'https://bary.lt',
                image: 'https://bary.lt/web-app-manifest-192x192.png',
                priceRange: '€€',
              }),
            }}
          />
          <Analytics />
          <SpeedInsights />
          <Toaster position="top-center" richColors />
        </I18nProvider>
      </body>
    </html>
  );
}
