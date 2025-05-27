
import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";
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
    <section className="relative min-h-screen bg-gradient-to-b from-neutral-50 to-white flex items-center justify-center overflow-hidden">
      {/* Parallax background elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="absolute top-20 left-10 w-32 h-32 bg-amber-100 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-100 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div 
            className="text-center lg:text-left space-y-8 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-white border border-amber-200 text-amber-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
                <Star className="w-4 h-4 fill-current" />
                Producto Premium
              </div>
              
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-7xl font-light text-neutral-900 leading-none tracking-tight">
                  Can <span className="font-normal text-amber-600">Maderax</span>
                </h1>
                <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto lg:mx-0"></div>
              </div>
            </div>
            
            <p className="text-xl text-neutral-600 leading-relaxed max-w-lg mx-auto lg:mx-0 font-light">
              Diseño minimalista que combina elegancia natural y funcionalidad excepcional.
            </p>
            
            <div className="space-y-6">
              <Button 
                onClick={handleAmazonRedirect}
                size="lg"
                className="bg-neutral-900 hover:bg-neutral-800 text-white px-8 py-4 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Comprar en Amazon
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
              
              <p className="text-sm text-neutral-500 flex items-center justify-center lg:justify-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Envío rápido con Amazon Prime
              </p>
            </div>
          </div>
          
          {/* Product Image */}
          <div 
            className="relative opacity-0 animate-fade-in"
            style={{ 
              animationDelay: '0.6s', 
              animationFillMode: 'forwards',
              transform: `translateY(${scrollY * 0.1}px)` 
            }}
          >
            <div className="relative group">
              <div className="absolute -inset-8 bg-gradient-to-r from-amber-200/20 to-orange-200/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
              <img 
                src="/lovable-uploads/83f3710b-e2ff-46ad-a45e-4d190db0f351.png"
                alt="Can Maderax - Caja de madera premium"
                className="relative w-full max-w-lg mx-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
