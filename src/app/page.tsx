import { Header } from "@/components/layout/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { MessageSection } from "@/components/sections/MessageSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { TestimonialSection } from "@/components/sections/TestimonialSection";
import { BlogSection } from "@/components/sections/BlogSection";
import { NewsletterSection } from "@/components/sections/NewsletterSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { Footer } from "@/components/layout/Footer";
import { TestimonialCard } from "@/components/sections/TestimonialCard";
import PWASetup from "@/components/PWASetup";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <PWASetup />
      <Header />
      <main>
        <HeroSection />
        <MessageSection />
        <FeaturesSection />
        <TestimonialSection />
        <TestimonialCard />
        <BlogSection />
        <TrustedBySection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
