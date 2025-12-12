import { Metadata } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { About } from "@/components/landing/About";
import { CaseStudies } from "@/components/landing/CaseStudies";
import { ContactCta } from "@/components/landing/summary/ContactCta";

export const metadata: Metadata = {
  title: "About | bary.lt",
  description: "Strategic consulting and creative agency background, approach, and the outcomes delivered for clients.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main id="main-content" className="pt-24">
        <About />
        <CaseStudies />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
