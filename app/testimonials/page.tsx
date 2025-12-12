import { Metadata } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { CaseStudies } from "@/components/landing/CaseStudies";
import { BookCall } from "@/components/landing/BookCall";
import { ContactCta } from "@/components/landing/summary/ContactCta";

export const metadata: Metadata = {
  title: "Case Studies | bary.lt",
  description: "Proof of results across industries with outcomes from consulting, creative, and digital engagements.",
};

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main id="main-content" className="pt-16 md:pt-20">
        <CaseStudies />
        <BookCall />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
