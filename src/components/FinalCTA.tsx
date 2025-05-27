
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, Shield, Truck } from "lucide-react";

const FinalCTA = () => {
  const handleAmazonRedirect = () => {
    window.open('https://www.amazon.com/dp/B0DPGSRGNV', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-amber-600 via-orange-500 to-yellow-500 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            ¿Listo para elevar tu experiencia?
          </h2>
          
          <p className="text-xl mb-8 opacity-90">
            Únete a miles de clientes satisfechos que ya disfrutan de la calidad premium de Can Maderax
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center justify-center gap-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <Truck className="w-6 h-6" />
              <span className="font-medium">Envío gratis con Prime</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <Shield className="w-6 h-6" />
              <span className="font-medium">Garantía Amazon</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-white/10 rounded-xl p-4 backdrop-blur-sm">
              <Clock className="w-6 h-6" />
              <span className="font-medium">Entrega rápida</span>
            </div>
          </div>
          
          <div className="space-y-6">
            <Button 
              onClick={handleAmazonRedirect}
              size="lg"
              className="bg-white text-amber-600 hover:bg-gray-100 px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
            >
              Comprar Ahora en Amazon
              <ExternalLink className="ml-3 w-6 h-6" />
            </Button>
            
            <p className="text-lg opacity-90">
              ⏰ <strong>Oferta limitada</strong> - No dejes pasar esta oportunidad
            </p>
            
            <div className="flex items-center justify-center gap-8 text-sm opacity-80">
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
