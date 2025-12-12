import { Metadata } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Services } from "@/components/landing/Services";
import { AdPlatforms } from "@/components/landing/AdPlatforms";
import { BookCall } from "@/components/landing/BookCall";
import { ContactCta } from "@/components/landing/summary/ContactCta";

export const metadata: Metadata = {
  title: "Services | bary.lt",
  description: "Full overview of consulting, creative, digital, and marketing services with the advertising platforms we run.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main id="main-content" className="pt-24">
        <Services />
        <AdPlatforms />
        <BookCall />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
