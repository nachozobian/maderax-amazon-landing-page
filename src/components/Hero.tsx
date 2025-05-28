
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, Shield, Award } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAmazonRedirect = () => {
    window.open('https://www.amazon.com/dp/B0DPGSRGNV', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-warm-beige/10 via-white to-warm-beige/20 overflow-hidden">
      {/* Premium background with wood grain texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-wood-grain bg-repeat opacity-30 animate-grain"></div>
      </div>
      
      {/* Organic gradient overlays */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-gold-matte/20 to-wood-dark/10 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-br from-wood-dark/10 to-charcoal/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${-scrollY * 0.08}px)` }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="min-h-screen flex flex-col justify-center">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            
            {/* Content section - Premium typography and messaging */}
            <div className="lg:col-span-6 order-2 lg:order-1 space-y-12">
              <div 
                className="opacity-0 animate-fade-in"
                style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
              >
                {/* Heritage badge */}
                <div className="inline-flex items-center gap-3 bg-charcoal text-warm-beige px-6 py-3 rounded-full text-sm font-inter font-medium shadow-lg">
                  <Award className="w-4 h-4 text-gold-matte" />
                  Artisan Crafted Since 2024
                </div>
                
                {/* Premium title with Playfair Display */}
                <div className="space-y-6 mt-8">
                  <h1 className="font-playfair text-6xl lg:text-7xl font-light text-charcoal leading-[0.9] tracking-tight">
                    Can <span className="font-medium italic text-wood-dark">Maderax</span>
                  </h1>
                  
                  {/* Elegant divider */}
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-px bg-gradient-to-r from-gold-matte to-wood-dark"></div>
                    <div className="w-2 h-2 bg-gold-matte rounded-full"></div>
                    <div className="w-8 h-px bg-gradient-to-r from-wood-dark to-transparent"></div>
                  </div>
                  
                  <div className="space-y-4">
                    <p className="font-playfair text-2xl text-anthracite font-light italic leading-relaxed">
                      Where ancient bamboo craftsmanship meets contemporary elegance
                    </p>
                    <p className="font-inter text-lg text-charcoal/70 leading-relaxed max-w-lg">
                      Each Can Maderax is meticulously handcrafted from sustainably sourced bamboo, 
                      embodying centuries of artisanal tradition in every grain and curve.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Craftsmanship highlights */}
              <div 
                className="opacity-0 animate-fade-in space-y-6"
                style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
              >
                <div className="grid grid-cols-1 gap-4">
                  {[
                    { icon: "🎋", title: "Premium Bamboo", subtitle: "Hand-selected from sustainable forests" },
                    { icon: "⚱️", title: "Complete Ritual Kit", subtitle: "Everything needed for the perfect experience" },
                    { icon: "🔨", title: "Artisan Finished", subtitle: "Each piece individually crafted and inspected" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="text-2xl">{item.icon}</div>
                      <div>
                        <h3 className="font-inter font-medium text-charcoal group-hover:text-wood-dark transition-colors duration-300">
                          {item.title}
                        </h3>
                        <p className="font-inter text-sm text-charcoal/60 leading-relaxed">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Premium CTA */}
              <div 
                className="opacity-0 animate-fade-in space-y-6"
                style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
              >
                <div className="space-y-4">
                  <Button 
                    onClick={handleAmazonRedirect}
                    size="lg"
                    className="bg-charcoal hover:bg-anthracite text-warm-beige px-12 py-6 text-lg font-inter font-medium rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-[1.02] transition-all duration-500 group"
                  >
                    Discover on Amazon
                    <ExternalLink className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                  
                  <div className="flex items-center gap-8 text-sm text-charcoal/60 font-inter">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-gold-matte" />
                      <span>Lifetime craftsmanship guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-gold-matte fill-current" />
                      <span>Curator's choice</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product showcase - Elevated presentation */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div 
                className="relative group opacity-0 animate-fade-in"
                style={{ 
                  animationDelay: '0.3s', 
                  animationFillMode: 'forwards',
                  transform: `translateY(${scrollY * 0.05}px)` 
                }}
              >
                {/* Premium product container with sophisticated shadows */}
                <div className="relative">
                  {/* Background glow effect */}
                  <div className="absolute -inset-8 bg-gradient-to-br from-gold-matte/10 via-transparent to-wood-dark/10 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all duration-700"></div>
                  
                  {/* Main product frame */}
                  <div className="relative bg-gradient-to-br from-white via-warm-beige/30 to-white rounded-[2.5rem] p-12 shadow-2xl border border-warm-beige/50 group-hover:shadow-3xl transition-all duration-700">
                    
                    {/* Heritage seal */}
                    <div className="absolute -top-6 -right-6 bg-wood-dark text-warm-beige px-6 py-3 rounded-2xl text-sm font-inter font-medium shadow-xl rotate-12 group-hover:rotate-6 transition-transform duration-500">
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Artisan
                      </div>
                    </div>
                    
                    {/* Product image with premium treatment */}
                    <div className="relative overflow-hidden rounded-3xl">
                      <img 
                        src="/lovable-uploads/83f3710b-e2ff-46ad-a45e-4d190db0f351.png"
                        alt="Can Maderax - Artisan bamboo collection"
                        className="w-full h-auto transform group-hover:scale-[1.03] transition-transform duration-1000 animate-float"
                      />
                      
                      {/* Subtle overlay for depth */}
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    
                    {/* Quality indicators */}
                    <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="flex justify-between items-center">
                        <div className="text-center">
                          <div className="font-playfair text-2xl font-medium text-charcoal">100%</div>
                          <div className="font-inter text-xs text-charcoal/60 uppercase tracking-wide">Sustainable</div>
                        </div>
                        <div className="w-px h-12 bg-charcoal/20"></div>
                        <div className="text-center">
                          <div className="font-playfair text-2xl font-medium text-charcoal">∞</div>
                          <div className="font-inter text-xs text-charcoal/60 uppercase tracking-wide">Craftsmanship</div>
                        </div>
                        <div className="w-px h-12 bg-charcoal/20"></div>
                        <div className="text-center">
                          <div className="font-playfair text-2xl font-medium text-charcoal">2024</div>
                          <div className="font-inter text-xs text-charcoal/60 uppercase tracking-wide">Est.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
