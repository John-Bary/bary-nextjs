import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/sections/Services';
import { Portfolio } from '@/components/sections/Portfolio';
import { About } from '@/components/sections/About';
import { Process } from '@/components/sections/Process';
import { Pricing } from '@/components/sections/Pricing';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import { BrandBuilderSection } from '@/components/sections/BrandBuilderSection';

const showPortfolio = false; // Toggle to true when projects are ready to display

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <BrandBuilderSection />
      <Services />
      {showPortfolio && <Portfolio />}
      <About />
      <Process />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
