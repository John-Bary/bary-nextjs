"use client";

import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { BookCall } from "@/components/landing/BookCall";
import { Footer } from "@/components/landing/Footer";
import { ContactCta } from "@/components/landing/summary/ContactCta";
import { HomeAbout } from "@/components/landing/summary/HomeAbout";
import { HomeAdPlatforms } from "@/components/landing/summary/HomeAdPlatforms";
import { HomeCaseStudies } from "@/components/landing/summary/HomeCaseStudies";
import { HomeFAQ } from "@/components/landing/summary/HomeFAQ";
import { HomeProcess } from "@/components/landing/summary/HomeProcess";
import { HomeServices } from "@/components/landing/summary/HomeServices";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main id="main-content">
        <Hero />
        <HomeServices />
        <HomeAdPlatforms />
        <HomeCaseStudies />
        <HomeAbout />
        <HomeProcess />
        <BookCall />
        <HomeFAQ />
        <ContactCta />
      </main>
      <Footer />
    </div>
  );
}
