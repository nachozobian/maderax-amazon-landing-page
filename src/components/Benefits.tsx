
import { Shield, Gem, Package, Star } from "lucide-react";
import { useEffect, useState } from "react";

const Benefits = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.benefit-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: <Gem className="w-6 h-6" />,
      title: "Artisan Heritage",
      description: "Each piece reflects centuries of bamboo craftsmanship, honoring traditional techniques with contemporary precision."
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Curator's Collection",
      description: "A thoughtfully assembled kit where every element has been selected for its contribution to the complete ritual."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Timeless Design",
      description: "Minimalist aesthetics that transcend trends, creating an heirloom piece that grows more beautiful with time."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Guaranteed Excellence",
      description: "Our commitment to perfection is matched only by Amazon's trusted fulfillment and customer care promise."
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white via-warm-beige/5 to-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 wood-texture opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-24">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-charcoal text-warm-beige px-4 py-2 rounded-full text-sm font-inter font-medium">
              <Star className="w-4 h-4 text-gold-matte fill-current" />
              The Maderax Difference
            </div>
            
            <h2 className="font-playfair text-5xl lg:text-6xl font-light text-charcoal leading-tight tracking-tight">
              Crafted for the <span className="italic font-medium text-wood-dark">Connoisseur</span>
            </h2>
            
            {/* Premium divider */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-matte to-transparent"></div>
              <div className="w-2 h-2 bg-wood-dark rounded-full"></div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-matte to-transparent"></div>
            </div>
            
            <p className="font-inter text-xl text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
              Every Can Maderax embodies our unwavering commitment to excellence, 
              where sustainable materials meet artisanal expertise.
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              data-index={index}
              className={`benefit-item text-center p-10 group cursor-pointer transition-all duration-700 ${
                visibleItems[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Premium icon container */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-gold-matte/20 to-wood-dark/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-warm-beige to-white border-2 border-gold-matte/30 text-wood-dark rounded-2xl group-hover:border-gold-matte/60 group-hover:text-charcoal transition-all duration-500 shadow-premium">
                  {benefit.icon}
                </div>
              </div>
              
              <h3 className="font-playfair text-2xl font-medium text-charcoal mb-6 group-hover:text-wood-dark transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="font-inter text-charcoal/60 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Craftsmanship signature */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm border border-warm-beige/50 rounded-2xl px-8 py-4 shadow-premium">
            <div className="font-playfair text-3xl text-wood-dark">∿</div>
            <span className="font-inter text-charcoal/70 italic">Handcrafted with intention</span>
            <div className="font-playfair text-3xl text-wood-dark">∿</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
