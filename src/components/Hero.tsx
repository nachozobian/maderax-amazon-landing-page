
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, Shield, Truck, Award } from "lucide-react";
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
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50/30 via-white to-neutral-50 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-neutral-200/20 to-amber-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="min-h-screen flex flex-col justify-center">
          {/* Product showcase layout */}
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Product image - taking more visual space */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div 
                className="relative group opacity-0 animate-fade-in"
                style={{ 
                  animationDelay: '0.3s', 
                  animationFillMode: 'forwards',
                  transform: `translateY(${scrollY * 0.05}px)` 
                }}
              >
                {/* Main product container */}
                <div className="relative bg-gradient-to-br from-white to-neutral-50 rounded-3xl p-8 shadow-2xl border border-neutral-100/50">
                  {/* Floating elements for premium feel */}
                  <div className="absolute -top-4 -right-4 bg-amber-500 text-white px-4 py-2 rounded-2xl text-sm font-medium shadow-lg rotate-3">
                    Premium
                  </div>
                  
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/83f3710b-e2ff-46ad-a45e-4d190db0f351.png"
                      alt="Can Maderax - Caja de madera premium"
                      className="w-full h-auto rounded-2xl shadow-lg transform group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    
                    {/* Product highlights overlay */}
                    <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div className="flex flex-col items-center">
                          <Shield className="w-5 h-5 text-amber-600 mb-1" />
                          <span className="text-xs text-neutral-600 font-medium">Garantía</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Award className="w-5 h-5 text-amber-600 mb-1" />
                          <span className="text-xs text-neutral-600 font-medium">Premium</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Truck className="w-5 h-5 text-amber-600 mb-1" />
                          <span className="text-xs text-neutral-600 font-medium">Envío gratis</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product info - more compact and focused */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div 
                className="opacity-0 animate-fade-in space-y-8"
                style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
              >
                {/* Badge and title */}
                <div className="space-y-6">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-200 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                    <Star className="w-4 h-4 fill-current" />
                    Producto Premium
                  </div>
                  
                  <div className="space-y-4">
                    <h1 className="text-5xl lg:text-6xl font-light text-neutral-900 leading-tight">
                      Can <span className="font-semibold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Maderax</span>
                    </h1>
                    <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Product description */}
                <div className="space-y-4">
                  <p className="text-xl text-neutral-700 leading-relaxed font-light">
                    Elegancia natural que combina diseño minimalista con funcionalidad excepcional.
                  </p>
                  
                  <div className="flex items-center gap-4 text-neutral-600">
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <span className="text-sm ml-2">Calidad premium</span>
                    </div>
                  </div>
                </div>
                
                {/* Key features */}
                <div className="space-y-3">
                  {[
                    "Material de bambú premium",
                    "Kit completo incluido",
                    "Diseño funcional y elegante"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                      <span className="text-neutral-700 font-light">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* CTA Section */}
                <div className="space-y-6 pt-4">
                  <Button 
                    onClick={handleAmazonRedirect}
                    size="lg"
                    className="w-full bg-gradient-to-r from-neutral-900 to-neutral-800 hover:from-neutral-800 hover:to-neutral-700 text-white px-8 py-6 text-lg font-medium rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Comprar en Amazon
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </Button>
                  
                  <div className="flex items-center justify-center gap-6 text-sm text-neutral-600">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span>Disponible ahora</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4" />
                      <span>Envío Prime</span>
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
