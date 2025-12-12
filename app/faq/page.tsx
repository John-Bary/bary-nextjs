import { Metadata } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { FAQ } from "@/components/landing/FAQ";
import { ContactCta } from "@/components/landing/summary/ContactCta";

export const metadata: Metadata = {
  title: "FAQ | bary.lt",
  description: "Answers to common questions about project types, collaboration, pricing, and how quickly engagements start.",
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main id="main-content" className="pt-24">
        <FAQ />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
