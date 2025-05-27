
import { Shield, Gem, Package, Star } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: <Gem className="w-8 h-8" />,
      title: "Artesanía Premium",
      description: "Fabricada con madera de bambú de alta calidad y acabados profesionales para una experiencia excepcional."
    },
    {
      icon: <Package className="w-8 h-8" />,
      title: "Kit Completo",
      description: "Incluye todos los accesorios esenciales organizados perfectamente en compartimentos diseñados específicamente."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Diseño Elegante",
      description: "Combinación perfecta de funcionalidad y estilo. Una pieza que habla de buen gusto y sofisticación."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Calidad Garantizada",
      description: "Respaldado por Amazon con garantía de satisfacción. Miles de clientes satisfechos avalan su calidad."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ¿Por qué elegir Can Maderax?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            No es solo una caja, es una experiencia premium que eleva tu rutina diaria 
            con elegancia y funcionalidad incomparables.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-xl hover:shadow-lg transition-all duration-300 group hover:bg-amber-50"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-100 to-orange-100 text-amber-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
