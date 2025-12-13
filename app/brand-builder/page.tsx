import BrandBuilderGame from "@/components/BrandBuilderGame";
import { Footer } from "@/components/landing/Footer";
import { Navbar } from "@/components/landing/Navbar";

export default function BrandBuilderPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main
        id="main-content"
        className="pt-24 pb-20 flex items-center justify-center px-4 sm:px-6"
      >
        <div className="w-full max-w-5xl">
          <BrandBuilderGame />
        </div>
      </main>
      <Footer />
    </div>
  );
}
