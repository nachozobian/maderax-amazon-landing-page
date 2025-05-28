
import { ShoppingCart, Star, Truck, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const Benefits = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.benefit-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleAmazonRedirect = () => {
    window.open('https://www.amazon.com/dp/B0DPGSRGNV', '_blank');
  };

  const benefits = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Amazon's Choice",
      description: "Highly rated product with excellent customer reviews and fast shipping."
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "FREE Prime Shipping",
      description: "Get it delivered to your door in 1-2 days with Amazon Prime at no extra cost."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "A-Z Guarantee",
      description: "Protected by Amazon's customer service and return policy for peace of mind."
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Secure Checkout",
      description: "Safe and trusted payment processing through Amazon's secure platform."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-light text-neutral-900 mb-4 tracking-tight">
            Why buy <span className="font-bold text-orange-600">on Amazon</span>?
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
            Trust, convenience, and the guarantee you expect from the world's largest marketplace.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              data-index={index}
              className={`benefit-item text-center p-6 bg-white rounded-2xl border border-neutral-100 shadow-sm hover:shadow-lg group cursor-pointer transition-all duration-700 ${
                visibleItems[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-50 border border-orange-200 text-orange-600 rounded-2xl mb-4 group-hover:bg-orange-100 transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-bold text-neutral-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed font-light text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mid-page CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Ready to get your Can Maderax?
            </h3>
            <Button 
              onClick={handleAmazonRedirect}
              size="lg"
              className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-10 py-4 text-lg font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              🛒 Shop Now on Amazon
            </Button>
            <p className="text-sm text-neutral-600 mt-3 font-medium">
              ⚡ Ships today with Prime • 🔒 Secure Amazon checkout
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
