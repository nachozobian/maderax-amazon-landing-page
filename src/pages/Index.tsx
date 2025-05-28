
import Hero from "@/components/Hero";
import WhatsInside from "@/components/WhatsInside";
import BrandStory from "@/components/BrandStory";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <Hero />
      <WhatsInside />
      <BrandStory />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
