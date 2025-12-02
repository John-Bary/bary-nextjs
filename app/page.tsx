import { Navigation } from '@/components/sections/Navigation';
import { Hero } from '@/components/Hero';
import dynamic from 'next/dynamic';
import { Services } from '@/components/sections/Services';
import { Portfolio } from '@/components/sections/Portfolio';
import { About } from '@/components/sections/About';
import { Process } from '@/components/sections/Process';
import { Pricing } from '@/components/sections/Pricing';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

const BrandBuilderGame = dynamic(() => import('@/components/BrandBuilderGame'), {
  ssr: false,
});

const showPortfolio = false; // Toggle to true when projects are ready to display

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <section id="brand-builder" className="py-16 sm:py-20 bg-white/80">
        <div className="container space-y-4">
          <div className="max-w-3xl space-y-3">
            <p className="text-sm uppercase tracking-[0.2em] text-cerulean font-semibold">Brand Builder</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-gray">Build your brand in minutes</h2>
            <p className="text-text-gray text-base sm:text-lg">
              Quickly prototype a brand personality, then explore how our digital, marketing, and creative services can bring it to life.
            </p>
          </div>
          <BrandBuilderGame />
        </div>
      </section>
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
