
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos M.",
      rating: 5,
      text: "La calidad es excepcional. Los acabados son perfectos y se nota que es un producto premium. Llegó súper rápido con Amazon Prime.",
      verified: true
    },
    {
      name: "Ana R.",
      rating: 5,
      text: "Exactamente lo que esperaba. La madera es hermosa y todo está muy bien organizado. Definitivamente vale la pena la inversión.",
      verified: true
    },
    {
      name: "Miguel T.",
      rating: 5,
      text: "Impresionante calidad y diseño. Los compartimentos están perfectamente diseñados. Una compra que no te arrepentirás.",
      verified: true
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-600">
            Miles de clientes satisfechos han elegido Can Maderax
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:bg-amber-50"
            >
              <div className="flex items-center gap-2 mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-gray-700 mb-4 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  {testimonial.verified && (
                    <p className="text-sm text-green-600">
                      ✓ Compra verificada
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{testimonial.rating}.0</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-4 bg-yellow-50 px-6 py-3 rounded-xl">
            <div className="flex items-center gap-1">
              {renderStars(5)}
            </div>
            <span className="text-lg font-semibold text-gray-900">4.8/5</span>
            <span className="text-gray-600">basado en +200 reseñas en Amazon</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
