
import { Leaf, Recycle, Award, Heart } from "lucide-react";
import { useEffect, useState } from "react";

const BrandValues = () => {
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

    const elements = document.querySelectorAll('.value-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Naturally Inspired",
      description: "Every design begins with nature's wisdom, incorporating sustainable bamboo and organic forms that honor the environment."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Uncompromising Quality",
      description: "Meticulous craftsmanship and premium materials ensure each piece meets the highest standards of durability and elegance."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Thoughtful Design",
      description: "Form follows function in perfect harmony, creating storage solutions that enhance your space while serving your needs."
    },
    {
      icon: <Recycle className="w-8 h-8" />,
      title: "Sustainable Future",
      description: "Committed to responsible sourcing and eco-friendly practices that protect our planet for future generations."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-zinc-900 to-zinc-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">
            Our <span className="font-serif italic text-amber-400">Philosophy</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mx-auto mb-8"></div>
          <p className="text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-light">
            Can Maderax represents a commitment to excellence that goes beyond aesthetics. 
            We believe in creating pieces that tell a story of sustainability, craftsmanship, and timeless design.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {values.map((value, index) => (
            <div 
              key={index}
              data-index={index}
              className={`value-item group ${
                visibleItems[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-8 h-full transition-all duration-500 hover:border-amber-500/30 hover:bg-zinc-800/70 group">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 text-amber-400 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white">
                    {value.title}
                  </h3>
                  
                  <p className="text-zinc-300 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandValues;
