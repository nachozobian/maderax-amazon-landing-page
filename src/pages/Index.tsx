
import Hero from "@/components/Hero";
import WhatsInside from "@/components/WhatsInside";
import BrandStory from "@/components/BrandStory";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-zinc-900">
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
