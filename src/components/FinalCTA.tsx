
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, Shield, Truck } from "lucide-react";
import { useEffect, useState } from "react";

const FinalCTA = () => {
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
    <section className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black text-white relative overflow-hidden">
      {/* Parallax background elements */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>
      <div 
        className="absolute bottom-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl"
        style={{ transform: `translateY(${-scrollY * 0.15}px)` }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-light mb-8 tracking-tight">
            ¿Listo para elevar tu <span className="font-normal text-amber-400">experiencia</span>?
          </h2>
          
          <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-8"></div>
          
          <p className="text-xl mb-12 opacity-80 font-light max-w-2xl mx-auto">
            Únete a miles de clientes satisfechos que ya disfrutan de la calidad premium de Can Maderax
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <Truck className="w-5 h-5" />, text: "Envío gratis con Prime" },
              { icon: <Shield className="w-5 h-5" />, text: "Garantía Amazon" },
              { icon: <Clock className="w-5 h-5" />, text: "Entrega rápida" }
            ].map((item, index) => (
              <div 
                key={index}
                className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 rounded-2xl p-4 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                {item.icon}
                <span className="font-light">{item.text}</span>
              </div>
            ))}
          </div>
          
          <div className="space-y-8">
            <Button 
              onClick={handleAmazonRedirect}
              size="lg"
              className="bg-white text-neutral-900 hover:bg-neutral-100 px-12 py-6 text-xl font-medium rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              Comprar Ahora en Amazon
              <ExternalLink className="ml-3 w-6 h-6" />
            </Button>
            
            <p className="text-lg opacity-70 font-light">
              ⏰ <strong className="font-medium">Oferta limitada</strong> - No dejes pasar esta oportunidad
            </p>
            
            <div className="flex items-center justify-center gap-8 text-sm opacity-60 font-light">
              <span>✓ Pago seguro</span>
              <span>✓ Devoluciones fáciles</span>
              <span>✓ Soporte 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
