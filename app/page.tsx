import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Services } from "@/components/landing/Services";
import { AdPlatforms } from "@/components/landing/AdPlatforms";
import { CaseStudies } from "@/components/landing/CaseStudies";
import { About } from "@/components/landing/About";
import { Process } from "@/components/landing/Process";
import { BookCall } from "@/components/landing/BookCall";
import { FAQ } from "@/components/landing/FAQ";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/landing/Footer";
import { I18nProvider } from "@/components/i18n/I18nProvider";

export default function Home() {
  return (
    <I18nProvider>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <AdPlatforms />
          <CaseStudies />
          <About />
          <Process />
          <BookCall />
          <FAQ />
          <Contact />
        </main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
