"use client";

import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Footer } from "@/components/landing/Footer";
import { SocialProof } from "@/components/landing/summary/SocialProof";
import { ContactCta } from "@/components/landing/summary/ContactCta";
import { HomeCaseStudies } from "@/components/landing/summary/HomeCaseStudies";
import { HomeFAQ } from "@/components/landing/summary/HomeFAQ";
import { HomeProcess } from "@/components/landing/summary/HomeProcess";
import { HomeServices } from "@/components/landing/summary/HomeServices";
import { Pricing } from "@/components/landing/summary/Pricing";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main id="main-content" role="main">
        <Hero />
        <SocialProof />
        <HomeServices />
        <HomeProcess />
        <HomeCaseStudies />
        <Pricing />
        <HomeFAQ />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
