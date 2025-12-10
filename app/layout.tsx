import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata: Metadata = {
  title: "bary.lt | Business Consulting & Creative Services",
  description: "Strategic consulting and creative services that drive measurable growth. We help businesses scale through planning, brand development, and digital innovation.",
  keywords: ["business consulting", "creative services", "digital solutions", "brand development", "Lithuania", "Vilnius"],
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
    title: "bary.lt | Business Consulting & Creative Services",
    description: "Strategic consulting and creative services that drive measurable growth.",
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
        <div className="relative z-10">
          {children}
        </div>
        <Analytics />
        <SpeedInsights />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
