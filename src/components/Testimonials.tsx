
import { Star, Award, Shield, CheckCircle } from "lucide-react";
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

    const elements = document.querySelectorAll('.trust-card');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleAmazonRedirect = () => {
    window.open('https://www.amazon.com/dp/B0DPGSRGNV', '_blank');
  };

  const trustFactors = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Amazon's Choice",
      description: "Selected by Amazon for quality, value, and customer satisfaction",
      metric: "Top 1% of products"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Verified Reviews",
      description: "Consistently high ratings from verified Amazon purchasers",
      metric: "4.8/5 average rating"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Backed by Amazon's comprehensive A-to-Z guarantee protection",
      metric: "100% satisfaction guarantee"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-slate-800 fill-current' : 'text-slate-300'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-slate-900 mb-6 tracking-tight">
            Trust & Verification
          </h2>
          <p className="text-lg text-slate-600 font-medium">
            Certified quality backed by Amazon's trusted marketplace standards
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {trustFactors.map((factor, index) => (
            <div 
              key={index}
              data-index={index}
              className={`trust-card bg-white border border-slate-200 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-500 ${
                visibleCards[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 border border-slate-200 text-slate-700 rounded-lg mb-6">
                  {factor.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {factor.title}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {factor.description}
                </p>
                
                <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 px-4 py-2 rounded-md">
                  <CheckCircle className="w-4 h-4 text-slate-600" />
                  <span className="text-sm font-semibold text-slate-800">{factor.metric}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-6 bg-white border border-slate-200 px-8 py-6 rounded-lg shadow-sm">
            <div className="flex items-center gap-1">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-bold text-slate-900">4.8/5</span>
            <span className="text-slate-700 font-medium">200+ verified Amazon reviews</span>
          </div>

          <Button 
            onClick={handleAmazonRedirect}
            size="lg"
            className="bg-slate-900 hover:bg-slate-800 text-white px-10 py-4 text-lg font-semibold rounded-md shadow-lg transition-colors duration-300"
          >
            View Customer Reviews on Amazon
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
