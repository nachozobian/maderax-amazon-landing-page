
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, CheckCircle, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const FeaturedProduct = () => {
  const [visibleImages, setVisibleImages] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleImages(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.product-image');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleAmazonRedirect = () => {
    window.open('https://www.amazon.com/dp/B0DPGSRGNV', '_blank');
  };

  const features = [
    "Premium sustainably-sourced bamboo construction",
    "Precision-engineered magnetic closure system", 
    "Complete accessory kit with glass containers",
    "Elegant natural finish with modern functionality"
  ];

  const images = [
    {
      src: "/lovable-uploads/b0c603a5-da6d-4ece-acb5-55ce45d1f79c.png",
      alt: "Interior compartment design showcasing precision organization"
    },
    {
      src: "/lovable-uploads/c0691484-4a29-46d3-a12a-3e4373590fbf.png", 
      alt: "Complete Can Maderax kit with all premium accessories"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-800 to-zinc-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-4 py-2 rounded-lg text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Signature Collection
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            The <span className="font-serif italic text-amber-400">Original</span> Collection
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-light">
            Our flagship piece embodies everything Can Maderax represents: natural beauty, 
            functional excellence, and sustainable craftsmanship in perfect harmony.
          </p>
        </div>
        
        {/* Product Showcase */}
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-8">
              <img 
                src="/lovable-uploads/83f3710b-e2ff-46ad-a45e-4d190db0f351.png"
                alt="Can Maderax Original - Premium Bamboo Storage System"
                className="w-full h-auto rounded-lg"
              />
            </div>
            
            <div className="flex items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-lg font-medium text-zinc-300">4.8/5</span>
              </div>
              <div className="text-zinc-400">|</div>
              <span className="text-zinc-300 font-medium">200+ verified reviews</span>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-light text-white mb-6">
                Premium Bamboo Storage System
              </h3>
              <p className="text-lg text-zinc-300 leading-relaxed mb-8">
                Meticulously crafted from sustainably-sourced bamboo, this storage system represents 
                the perfect marriage of natural materials and modern functionality. Each component 
                is designed to work in harmony, creating an elegant storage solution.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Premium Features</h4>
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                  <span className="text-zinc-300 font-medium">{feature}</span>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <Button 
                onClick={handleAmazonRedirect}
                size="lg"
                className="w-full bg-amber-500 hover:bg-amber-600 text-black px-8 py-6 text-lg font-semibold rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                Shop on Amazon
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
              
              <p className="text-center text-sm text-zinc-400 mt-4">
                Backed by Amazon's guarantee • Free Prime shipping
              </p>
            </div>
          </div>
        </div>
        
        {/* Additional Product Images */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index}
              data-index={index}
              className={`product-image transition-all duration-700 ${
                visibleImages[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProduct;
