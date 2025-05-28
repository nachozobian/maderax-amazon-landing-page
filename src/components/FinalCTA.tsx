
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, Shield, Truck, Star } from "lucide-react";
import { useEffect, useState } from "react";

const FinalCTA = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAmazonRedirect = () => {
    window.open('https://www.amazon.com/dp/B0DPGSRGNV', '_blank');
  };

  return (
    <section className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black text-white relative overflow-hidden">
      {/* Consistent background elements */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-orange-500/10 rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>
      <div 
        className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-amber-400/10 to-neutral-600/10 rounded-full blur-3xl"
        style={{ transform: `translateY(${-scrollY * 0.15}px)` }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title section */}
          <div className="space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 text-amber-400 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="w-4 h-4 fill-current" />
              Limited offer
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-light tracking-tight">
              Ready to elevate your <span className="font-semibold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">experience</span>?
            </h2>
            
            <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto rounded-full"></div>
            
            <p className="text-xl opacity-80 font-light max-w-2xl mx-auto">
              Join thousands of satisfied customers who already enjoy the premium quality of Can Maderax
            </p>
          </div>
          
          {/* Benefits grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <Truck className="w-6 h-6" />, title: "Free shipping", subtitle: "With Amazon Prime" },
              { icon: <Shield className="w-6 h-6" />, title: "Warranty", subtitle: "Amazon A-Z" },
              { icon: <Clock className="w-6 h-6" />, title: "Fast delivery", subtitle: "24-48 hours" }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-amber-400 mb-3 flex justify-center">{item.icon}</div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm opacity-70">{item.subtitle}</p>
              </div>
            ))}
          </div>
          
          {/* CTA section */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-white/5 to-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur-sm">
              <Button 
                onClick={handleAmazonRedirect}
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-12 py-6 text-xl font-semibold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 w-full md:w-auto"
              >
                Buy Now on Amazon
                <ExternalLink className="ml-3 w-6 h-6" />
              </Button>
              
              <p className="text-lg opacity-70 font-light mt-4">
                ⏰ <strong className="font-semibold text-amber-400">Limited offer</strong> - Don't miss this opportunity
              </p>
            </div>
            
            <div className="flex items-center justify-center gap-8 text-sm opacity-60 font-light">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Secure payment
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                Easy returns
              </span>
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                24/7 support
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
