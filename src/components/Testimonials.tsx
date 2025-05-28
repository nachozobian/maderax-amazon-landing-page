
import { Star, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

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

  const handleAmazonRedirect = () => {
    window.open('https://www.amazon.com/dp/B0DPGSRGNV', '_blank');
  };

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Ordered on Amazon and received it in 2 days with Prime! Quality exceeded my expectations. The bamboo feels premium and all accessories fit perfectly.",
      verified: "Amazon Verified Purchase",
      helpful: "47 people found this helpful"
    },
    {
      name: "Mike R.",
      rating: 5,
      text: "Amazon's customer service was great when I had questions. The product is exactly as described - beautiful craftsmanship and very functional design.",
      verified: "Amazon Verified Purchase", 
      helpful: "32 people found this helpful"
    },
    {
      name: "Jennifer L.",
      rating: 5,
      text: "Fast Amazon delivery and excellent packaging. The Can Maderax is even more beautiful in person. Would definitely recommend buying through Amazon!",
      verified: "Amazon Verified Purchase",
      helpful: "28 people found this helpful"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-orange-400 fill-current' : 'text-neutral-300'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-neutral-900 mb-4 tracking-tight">
            Real <span className="font-bold text-orange-600">Amazon customers</span> love it
          </h2>
          <p className="text-lg text-neutral-600 font-light">
            Read what verified Amazon buyers are saying about Can Maderax
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              data-index={index}
              className={`testimonial-card bg-neutral-50 border border-neutral-200 p-6 rounded-2xl hover:shadow-lg hover:border-orange-200 transition-all duration-500 group ${
                visibleCards[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center gap-2 mb-4">
                {renderStars(testimonial.rating)}
                <span className="text-sm font-bold text-orange-600 ml-2">{testimonial.rating}.0</span>
              </div>
              
              <p className="text-neutral-700 mb-4 leading-relaxed font-light italic">
                "{testimonial.text}"
              </p>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="font-bold text-neutral-900">{testimonial.name}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-green-600 font-medium">
                    ✓ {testimonial.verified}
                  </p>
                  <p className="text-xs text-neutral-500">
                    👍 {testimonial.helpful}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-6 bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 px-8 py-4 rounded-2xl">
            <div className="flex items-center gap-1">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-bold text-orange-600">4.8/5</span>
            <span className="text-neutral-700 font-medium">on Amazon (200+ reviews)</span>
          </div>

          <Button 
            onClick={handleAmazonRedirect}
            size="lg"
            className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-10 py-4 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Read All Reviews on Amazon
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
