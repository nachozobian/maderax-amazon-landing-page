
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Package } from "lucide-react";

const ProductGallery = () => {
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
      alt: "Can Maderax interior compartment design and organization system"
    },
    {
      src: "/lovable-uploads/c0691484-4a29-46d3-a12a-3e4373590fbf.png",
      alt: "Complete Can Maderax professional kit with all included accessories"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-slate-900 mb-6 tracking-tight">
            Professional Design Details
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Precision-engineered components and thoughtful design elements deliver superior functionality and aesthetic appeal.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {images.map((image, index) => (
            <div 
              key={index}
              data-index={index}
              className={`gallery-item ${
                visibleImages[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          ))}
        </div>
        
        {/* Technical specifications */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-10 max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-300 text-slate-800 px-4 py-2 rounded-md text-sm font-semibold mb-6">
              <Package className="w-4 h-4" />
              Complete Professional Kit
            </div>
            <h3 className="text-3xl font-serif text-slate-900 mb-4">
              Comprehensive Storage System
            </h3>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Every component designed and tested for professional use, ensuring optimal performance and longevity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-slate-900">Included Components</h4>
              {[
                "Premium bamboo storage box with magnetic closure",
                "Three airtight glass containers with bamboo lids",
                "Professional-grade stainless steel accessories"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-slate-900">Technical Features</h4>
              {[
                "Precision-engineered compartment system", 
                "Sustainable bamboo construction materials",
                "Complete setup and usage documentation"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-slate-600 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button 
              onClick={handleAmazonRedirect}
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 text-lg font-semibold rounded-md shadow-lg transition-colors duration-300"
            >
              Purchase Complete Kit on Amazon
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
