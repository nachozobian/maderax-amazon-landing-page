
import { Cog, Award, Shield, CheckCircle } from "lucide-react";
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
      icon: <Cog className="w-6 h-6" />,
      title: "Precision Engineering",
      description: "Meticulously crafted with precision-cut bamboo components and engineered magnetic closure mechanisms."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Premium Materials",
      description: "Constructed from sustainably-sourced, high-grade bamboo with superior durability and natural finish."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Quality Assurance",
      description: "Rigorously tested for structural integrity and backed by comprehensive quality standards."
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Complete System",
      description: "Includes all necessary components and accessories for immediate professional-grade storage solution."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-slate-900 mb-6 tracking-tight">
            Technical Excellence
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Engineered for professionals who demand precision, durability, and sophisticated design in their storage solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              data-index={index}
              className={`benefit-item text-center p-8 bg-slate-50 border border-slate-200 rounded-lg hover:shadow-lg transition-all duration-500 ${
                visibleItems[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-100 border border-slate-300 text-slate-700 rounded-lg mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-serif text-slate-900 mb-4">
              Professional Grade Storage Solution
            </h3>
            <p className="text-slate-600 mb-6">
              Trusted by professionals for superior quality and reliable performance.
            </p>
            <Button 
              onClick={handleAmazonRedirect}
              size="lg"
              className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 text-lg font-semibold rounded-md shadow-lg transition-colors duration-300"
            >
              View on Amazon
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
