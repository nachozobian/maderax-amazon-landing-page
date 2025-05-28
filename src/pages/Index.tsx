
import Hero from "@/components/Hero";
import BrandValues from "@/components/BrandValues";
import FeaturedProduct from "@/components/FeaturedProduct";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-zinc-900">
      <Hero />
      <BrandValues />
      <FeaturedProduct />
      <Footer />
    </div>
  );
};

export default Index;
