
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import OurProcess from "@/components/OurProcess";
import ProductGallery from "@/components/ProductGallery";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* SEO Meta tags will be handled by updating the HTML head */}
      <Hero />
      <Benefits />
      <OurProcess />
      <ProductGallery />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
