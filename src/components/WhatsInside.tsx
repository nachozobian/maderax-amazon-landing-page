
import { useEffect, useState } from "react";

const WhatsInside = () => {
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
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.reveal-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const features = [
    "Premium bamboo storage box with magnetic precision closure",
    "Three airtight glass containers with matching bamboo lids", 
    "Complete stainless steel accessory set",
    "Everything perfectly sized and designed to work as one"
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-orange-50 to-amber-50 text-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-light mb-8 tracking-tight text-slate-800">
              What's <span className="font-serif italic text-amber-600">Inside</span>
            </h2>
            <div className="w-16 h-0.5 bg-amber-600 mx-auto mb-8"></div>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              A complete storage ecosystem. No assembly required, no additional purchases needed. 
              Just pure, functional elegance.
            </p>
          </div>

          {/* Main Product Showcase */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div 
              className="reveal-item opacity-0 translate-x-[-50px] transition-all duration-1000"
              data-index="0"
            >
              <div className="space-y-8">
                <h3 className="text-3xl font-light text-slate-800">
                  Complete Storage System
                </h3>
                <div className="space-y-6">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-1 h-1 bg-amber-600 rounded-full mt-3 flex-shrink-0"></div>
                      <p className="text-lg text-slate-600 leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div 
              className={`reveal-item transition-all duration-1000 ${
                visibleImages[0] 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-[50px]'
              }`}
              data-index="0"
            >
              <div className="bg-white/50 backdrop-blur-sm border border-amber-200 rounded-2xl p-8 shadow-lg">
                <img 
                  src="/lovable-uploads/83f3710b-e2ff-46ad-a45e-4d190db0f351.png"
                  alt="Can Maderax Complete Kit"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Detail Images */}
          <div className="grid md:grid-cols-2 gap-16">
            <div 
              className={`reveal-item transition-all duration-1000 delay-200 ${
                visibleImages[1] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-[30px]'
              }`}
              data-index="1"
            >
              <div className="bg-white/50 backdrop-blur-sm border border-amber-200 rounded-2xl p-6 shadow-lg">
                <img 
                  src="/lovable-uploads/b0c603a5-da6d-4ece-acb5-55ce45d1f79c.png"
                  alt="Interior organization system"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-slate-500 mt-6 text-center">
                Precision-engineered interior organization
              </p>
            </div>
            
            <div 
              className={`reveal-item transition-all duration-1000 delay-400 ${
                visibleImages[2] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-[30px]'
              }`}
              data-index="2"
            >
              <div className="bg-white/50 backdrop-blur-sm border border-amber-200 rounded-2xl p-6 shadow-lg">
                <img 
                  src="/lovable-uploads/c0691484-4a29-46d3-a12a-3e4373590fbf.png"
                  alt="Complete accessory kit"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <p className="text-slate-500 mt-6 text-center">
                Everything included, nothing extra needed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsInside;
