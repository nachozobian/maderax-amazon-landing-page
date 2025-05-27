
import { Button } from "@/components/ui/button";
import { ExternalLink, Star } from "lucide-react";

const Hero = () => {
  const handleAmazonRedirect = () => {
    window.open('https://www.amazon.com/dp/B0DPGSRGNV', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100 flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,191,36,0.15),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(217,119,6,0.1),transparent_70%)]"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 fill-current" />
                Producto Premium
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Can <span className="text-amber-600">Maderax</span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto lg:mx-0"></div>
            </div>
            
            <p className="text-xl text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
              La caja de madera definitiva para una experiencia premium. 
              Artesanía excepcional que combina elegancia y funcionalidad.
            </p>
            
            <div className="space-y-4">
              <Button 
                onClick={handleAmazonRedirect}
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                ¡Compra en Amazon!
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
              
              <p className="text-sm text-gray-600">
                ✓ Envío rápido con Amazon Prime
              </p>
            </div>
          </div>
          
          {/* Product Image */}
          <div className="relative">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-300 to-orange-300 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              <img 
                src="/lovable-uploads/83f3710b-e2ff-46ad-a45e-4d190db0f351.png"
                alt="Can Maderax - Caja de madera premium"
                className="relative w-full max-w-lg mx-auto rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
