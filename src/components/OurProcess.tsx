
import { useEffect, useState } from "react";
import { Leaf, Hammer, Eye, Heart } from "lucide-react";

const OurProcess = () => {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleSteps(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.process-step');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const processSteps = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainable Sourcing",
      description: "We carefully select bamboo from certified sustainable forests, ensuring each piece carries the story of responsible cultivation.",
      detail: "3-5 year aged bamboo"
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Artisan Craftsmanship",
      description: "Master craftsmen shape each piece by hand, honoring traditional techniques passed down through generations.",
      detail: "72 hours of dedicated work"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Quality Inspection",
      description: "Every detail is meticulously examined to ensure it meets our uncompromising standards of excellence.",
      detail: "15-point quality check"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Final Blessing",
      description: "Each completed piece receives a final touch of care, ready to begin its journey as your trusted companion.",
      detail: "Hand-polished finish"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-br from-charcoal via-anthracite to-charcoal text-warm-beige relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-wood-grain bg-repeat animate-grain"></div>
      </div>
      
      {/* Organic shapes */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-gold-matte/5 to-wood-dark/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-wood-dark/5 to-gold-matte/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 bg-gold-matte text-charcoal px-4 py-2 rounded-full text-sm font-inter font-medium">
              <Hammer className="w-4 h-4" />
              Our Heritage
            </div>
            
            <h2 className="font-playfair text-5xl lg:text-6xl font-light leading-tight">
              The Art of <span className="italic font-medium text-gold-matte">Creation</span>
            </h2>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-matte to-transparent"></div>
              <div className="w-2 h-2 bg-gold-matte rounded-full"></div>
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-matte to-transparent"></div>
            </div>
            
            <p className="font-inter text-xl text-warm-beige/80 max-w-3xl mx-auto leading-relaxed">
              Behind every Can Maderax lies a story of dedication, where time-honored traditions 
              meet contemporary precision in perfect harmony.
            </p>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Process steps */}
          <div className="space-y-12">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                data-index={index}
                className={`process-step flex gap-6 transition-all duration-700 ${
                  visibleSteps[index] 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gold-matte/20 rounded-2xl blur-lg"></div>
                    <div className="relative w-16 h-16 bg-gradient-to-br from-gold-matte/20 to-wood-dark/20 rounded-2xl flex items-center justify-center text-gold-matte border border-gold-matte/30">
                      {step.icon}
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-4">
                    <h3 className="font-playfair text-2xl font-medium text-warm-beige">
                      {step.title}
                    </h3>
                    <div className="flex-1 h-px bg-gradient-to-r from-gold-matte/30 to-transparent"></div>
                    <span className="font-inter text-sm text-gold-matte font-medium">
                      {step.detail}
                    </span>
                  </div>
                  <p className="font-inter text-warm-beige/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Visual representation with product images */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-warm-beige/10 to-gold-matte/10 rounded-3xl p-8 border border-gold-matte/20 backdrop-blur-sm">
              {/* Main product showcase */}
              <div className="aspect-[4/5] bg-gradient-to-br from-gold-matte/5 to-wood-dark/5 rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/8b35bc70-7345-48b3-b991-6008c096a6cb.png"
                  alt="Can Maderax Complete Kit"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating detail images */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-gold-matte/10 to-wood-dark/10 rounded-2xl overflow-hidden border border-gold-matte/20 shadow-lg rotate-12">
                <img 
                  src="/lovable-uploads/af03accb-389f-4346-8ac0-343606e34802.png"
                  alt="Artisan Details"
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-gradient-to-br from-wood-dark/10 to-gold-matte/10 rounded-2xl overflow-hidden border border-gold-matte/20 shadow-lg -rotate-6">
                <img 
                  src="/lovable-uploads/24c3f79f-2114-4c2b-9dfe-eda9cba17f71.png"
                  alt="Premium Finish"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Product gallery showcase */}
        <div className="mt-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-warm-beige/10 to-gold-matte/10 rounded-2xl overflow-hidden border border-gold-matte/20">
                <img 
                  src="/lovable-uploads/upper-box-view.jpg"
                  alt="Open Box View"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-warm-beige/10 to-gold-matte/10 rounded-2xl overflow-hidden border border-gold-matte/20">
                <img 
                  src="/lovable-uploads/brush-picture.jpg"
                  alt="Interior Craftsmanship"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-warm-beige/10 to-gold-matte/10 rounded-2xl overflow-hidden border border-gold-matte/20">
                <img 
                  src="/lovable-uploads/1c551ee0-0fbc-4417-8b6f-ebb49ef2ce8b.png"
                  alt="Tool Organization"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
            <div className="relative group">
              <div className="aspect-square bg-gradient-to-br from-warm-beige/10 to-gold-matte/10 rounded-2xl overflow-hidden border border-gold-matte/20">
                <img 
                  src="/lovable-uploads/b00c5d1c-153a-417c-b59b-b15dd7f67932.png"
                  alt="Premium Components"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Heritage timeline */}
        <div className="mt-24 text-center">
          <div className="inline-flex items-center gap-8 bg-warm-beige/10 border border-gold-matte/20 rounded-2xl px-8 py-6 backdrop-blur-sm">
            <div className="text-center">
              <div className="font-playfair text-3xl font-light text-gold-matte">2024</div>
              <div className="font-inter text-sm text-warm-beige/70 uppercase tracking-wide">Founded</div>
            </div>
            <div className="w-px h-12 bg-gold-matte/30"></div>
            <div className="text-center">
              <div className="font-playfair text-3xl font-light text-gold-matte">500+</div>
              <div className="font-inter text-sm text-warm-beige/70 uppercase tracking-wide">Crafted</div>
            </div>
            <div className="w-px h-12 bg-gold-matte/30"></div>
            <div className="text-center">
              <div className="font-playfair text-3xl font-light text-gold-matte">∞</div>
              <div className="font-inter text-sm text-warm-beige/70 uppercase tracking-wide">Passion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
