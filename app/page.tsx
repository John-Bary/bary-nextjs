import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { CaseStudies } from "@/components/landing/CaseStudies";
import { About } from "@/components/landing/About";
import { Process } from "@/components/landing/Process";
import { BookCall } from "@/components/landing/BookCall";
import { FAQ } from "@/components/landing/FAQ";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <About />
        <Process />
        <BookCall />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
