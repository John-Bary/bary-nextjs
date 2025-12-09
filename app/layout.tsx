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
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
    ],
    apple: "/apple-touch-icon.png",
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
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r152/three.min.js" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r152/examples/js/controls/OrbitControls.js" />
      </head>
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
