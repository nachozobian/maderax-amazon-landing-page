
import { Star } from "lucide-react";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.testimonial-card');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const testimonials = [
    {
      name: "Carlos M.",
      rating: 5,
      text: "The quality is exceptional. The finishes are perfect and you can tell it's a premium product. It arrived super fast with Amazon Prime.",
      verified: true
    },
    {
      name: "Ana R.",
      rating: 5,
      text: "Exactly what I expected. The wood is beautiful and everything is very well organized. Definitely worth the investment.",
      verified: true
    },
    {
      name: "Miguel T.",
      rating: 5,
      text: "Impressive quality and design. The compartments are perfectly designed. A purchase you won't regret.",
      verified: true
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-current' : 'text-neutral-300'}`} 
      />
    ));
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            What our <span className="font-normal">customers</span> say
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 font-light">
            Thousands of satisfied customers have chosen Can Maderax
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              data-index={index}
              className={`testimonial-card bg-neutral-50 border border-neutral-200 p-8 rounded-3xl hover:shadow-lg hover:border-amber-200 transition-all duration-500 group ${
                visibleCards[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-2 mb-6">
                {renderStars(testimonial.rating)}
              </div>
              
              <p className="text-neutral-700 mb-6 leading-relaxed font-light italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center justify-between pt-4 border-t border-neutral-200">
                <div>
                  <p className="font-medium text-neutral-900">
                    {testimonial.name}
                  </p>
                  {testimonial.verified && (
                    <p className="text-sm text-green-600 mt-1">
                      ✓ Verified purchase
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-amber-400 fill-current" />
                    <span className="text-sm font-medium">{testimonial.rating}.0</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center gap-6 bg-amber-50 border border-amber-200 px-8 py-4 rounded-2xl">
            <div className="flex items-center gap-1">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-light text-neutral-900">4.8/5</span>
            <span className="text-neutral-600 font-light">based on +200 Amazon reviews</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
