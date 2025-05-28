
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Package, Star } from "lucide-react";

const ProductGallery = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleImages, setVisibleImages] = useState<boolean[]>([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

    const elements = document.querySelectorAll('.gallery-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleAmazonRedirect = () => {
    window.open('https://www.amazon.com/dp/B0DPGSRGNV', '_blank');
  };

  const images = [
    {
      src: "/lovable-uploads/b0c603a5-da6d-4ece-acb5-55ce45d1f79c.png",
      alt: "Can Maderax open showing the interior compartments"
    },
    {
      src: "/lovable-uploads/c0691484-4a29-46d3-a12a-3e4373590fbf.png",
      alt: "Can Maderax complete kit with all accessories"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Parallax background element */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-30"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-neutral-900 mb-4 tracking-tight">
            See why Amazon customers <span className="font-bold text-orange-600">choose quality</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
            Every detail crafted for perfection. Every component designed for functionality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {images.map((image, index) => (
            <div 
              key={index}
              data-index={index}
              className={`gallery-item group relative overflow-hidden rounded-2xl transition-all duration-700 ${
                visibleImages[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden bg-white border border-neutral-200 rounded-2xl">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          ))}
        </div>
        
        {/* What's included section */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-3xl p-8 max-w-4xl mx-auto mb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-orange-100 border border-orange-300 text-orange-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
              <Package className="w-4 h-4" />
              Complete Kit Included
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Everything you need in one premium package
            </h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-3">
              {[
                "✅ Premium bamboo box with magnetic closure",
                "✅ 3 airtight glass jars with bamboo lids",
                "✅ Professional-grade stainless steel tools"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-neutral-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-3">
              {[
                "✅ Custom-designed storage compartments", 
                "✅ Additional premium accessories",
                "✅ Detailed setup guide included"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-neutral-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={handleAmazonRedirect}
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-10 py-4 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              🛒 Get Complete Kit on Amazon
              <ExternalLink className="ml-2 w-5 h-5" />
            </Button>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <span className="text-sm font-bold text-orange-600">4.8/5 on Amazon</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
