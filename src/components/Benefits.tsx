
import { Shield, Gem, Package, Star } from "lucide-react";
import { useEffect, useState } from "react";

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

  const benefits = [
    {
      icon: <Gem className="w-6 h-6" />,
      title: "Premium Craftsmanship",
      description: "Made with high-quality bamboo and professional finishes for an exceptional experience."
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Complete Kit",
      description: "Includes all essential accessories organized in specifically designed compartments."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Elegant Design",
      description: "Perfect combination of functionality and minimalist style that speaks of sophistication."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Quality Guaranteed",
      description: "Backed by Amazon with satisfaction guarantee and thousands of satisfied customers."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            Why choose <span className="font-normal">Can Maderax</span>?
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
            A premium experience that elevates your daily routine with natural elegance and unmatched functionality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              data-index={index}
              className={`benefit-item text-center p-8 group cursor-pointer transition-all duration-700 ${
                visibleItems[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-neutral-50 border border-neutral-200 text-neutral-700 rounded-2xl mb-6 group-hover:bg-amber-50 group-hover:border-amber-200 group-hover:text-amber-600 transition-all duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-medium text-neutral-900 mb-4 group-hover:text-amber-600 transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed font-light">
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
