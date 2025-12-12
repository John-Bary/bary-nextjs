import { Metadata } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Contact } from "@/components/landing/Contact";

export const metadata: Metadata = {
  title: "Contact | bary.lt",
  description: "Get in touch to discuss your project, typical budgets, and timelines. We respond within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main id="main-content" className="pt-24">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
