import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import MarketReachSection from "@/components/MarketReachSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ContactSection from "@/components/ContactUs";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <MarketReachSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <ContactSection/>
      <Footer />
    </main>
  );
};

export default Index;
