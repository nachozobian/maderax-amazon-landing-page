
import { Button } from "@/components/ui/button";
import { ExternalLink, Clock, Shield, Truck, Star, AlertTriangle } from "lucide-react";
import { useEffect, useState } from "react";

const FinalCTA = () => {
  const [scrollY, setScrollY] = useState(0);
  const [timeLeft, setTimeLeft] = useState(3600); // 1 hour countdown

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 0);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleAmazonRedirect = () => {
    window.open('https://www.amazon.com/dp/B0DPGSRGNV', '_blank');
  };

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <section className="py-20 bg-gradient-to-br from-neutral-900 via-neutral-800 to-black text-white relative overflow-hidden">
      {/* Background elements */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-500/10 to-amber-500/10 rounded-full blur-3xl"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>
      <div 
        className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-br from-amber-400/10 to-neutral-600/10 rounded-full blur-3xl"
        style={{ transform: `translateY(${-scrollY * 0.15}px)` }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency header */}
          <div className="space-y-6 mb-12">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 text-red-400 px-6 py-3 rounded-full text-lg font-bold animate-pulse">
              <AlertTriangle className="w-5 h-5" />
              Limited Time Offer Ends Soon
            </div>
            
            <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-2xl inline-block">
              <div className="text-sm font-medium mb-1">Offer expires in:</div>
              <div className="text-3xl font-bold font-mono">{formatTime(timeLeft)}</div>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-light tracking-tight">
              Don't miss out on your <span className="font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">Can Maderax</span>
            </h2>
            
            <p className="text-xl opacity-90 font-light max-w-2xl mx-auto">
              Join over 500+ satisfied Amazon customers who made the smart choice
            </p>
          </div>
          
          {/* Stock warning */}
          <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 border border-red-500/30 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-red-400 font-bold text-lg">STOCK ALERT</span>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            <p className="text-white font-medium text-lg">
              Only <span className="text-red-400 font-bold">47 units</span> left in Amazon warehouse!
            </p>
            <p className="text-red-300 text-sm mt-1">
              🔥 12 people have this in their cart right now
            </p>
          </div>
          
          {/* Benefits reminder */}
          <div className="grid md:grid-cols-3 gap-4 mb-10">
            {[
              { icon: <Truck className="w-5 h-5" />, title: "FREE Prime Shipping", subtitle: "Arrives tomorrow" },
              { icon: <Shield className="w-5 h-5" />, title: "Amazon A-Z Guarantee", subtitle: "100% protected" },
              { icon: <Star className="w-5 h-5" />, title: "4.8★ Rating", subtitle: "200+ reviews" }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-sm"
              >
                <div className="text-orange-400 mb-2 flex justify-center">{item.icon}</div>
                <h3 className="font-bold text-sm mb-1">{item.title}</h3>
                <p className="text-xs opacity-70">{item.subtitle}</p>
              </div>
            ))}
          </div>
          
          {/* Final CTA */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-white/5 to-white/10 border border-orange-500/30 rounded-3xl p-8 backdrop-blur-sm">
              <div className="space-y-4">
                <Button 
                  onClick={handleAmazonRedirect}
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-16 py-6 text-2xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 w-full md:w-auto animate-pulse"
                >
                  🛒 SECURE YOUR CAN MADERAX NOW
                  <ExternalLink className="ml-3 w-6 h-6" />
                </Button>
                
                <div className="flex items-center justify-center gap-4 text-sm">
                  <span className="flex items-center gap-2 text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    SSL Secured
                  </span>
                  <span className="flex items-center gap-2 text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Amazon Trusted
                  </span>
                  <span className="flex items-center gap-2 text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Prime Eligible
                  </span>
                </div>
                
                <p className="text-lg opacity-80 font-medium">
                  ⚡ <span className="text-orange-400 font-bold">Act fast!</span> This offer expires when the timer hits zero
                </p>
              </div>
            </div>
            
            <p className="text-sm opacity-60 font-light">
              🔒 Your purchase is protected by Amazon's A-to-Z Guarantee • Easy returns within 30 days
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
