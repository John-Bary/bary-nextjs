import { Metadata } from "next";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Process } from "@/components/landing/Process";
import { FAQ } from "@/components/landing/FAQ";
import { ContactCta } from "@/components/landing/summary/ContactCta";

export const metadata: Metadata = {
  title: "Process | bary.lt",
  description: "Discovery, strategy, design, development, and launch steps that guide every engagement from start to finish.",
};

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main id="main-content" className="pt-24">
        <Process />
        <FAQ />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
