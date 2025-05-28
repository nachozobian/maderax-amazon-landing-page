
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, Shield, Truck, Award, CheckCircle } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
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
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50/30 via-white to-neutral-50 overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-neutral-200/20 to-amber-100/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="min-h-screen flex flex-col justify-center">
          {/* Product showcase layout */}
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Product image - enhanced with urgency */}
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div 
                className="relative group opacity-0 animate-fade-in"
                style={{ 
                  animationDelay: '0.3s', 
                  animationFillMode: 'forwards',
                  transform: `translateY(${scrollY * 0.05}px)` 
                }}
              >
                {/* Main product container */}
                <div className="relative bg-gradient-to-br from-white to-neutral-50 rounded-3xl p-6 shadow-2xl border border-neutral-100/50">
                  {/* Amazon Prime badge */}
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-3 py-1.5 rounded-2xl text-sm font-bold shadow-lg rotate-3 animate-pulse">
                    Prime Eligible
                  </div>
                  
                  {/* Limited stock indicator */}
                  <div className="absolute -top-3 -left-3 bg-red-500 text-white px-3 py-1.5 rounded-2xl text-sm font-bold shadow-lg -rotate-3">
                    🔥 Limited Stock
                  </div>
                  
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/83f3710b-e2ff-46ad-a45e-4d190db0f351.png"
                      alt="Can Maderax - Premium wooden stash box available on Amazon"
                      className="w-full h-auto rounded-2xl shadow-lg transform group-hover:scale-[1.02] transition-transform duration-700"
                    />
                    
                    {/* Amazon highlights overlay */}
                    <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-xl p-3 shadow-lg">
                      <div className="grid grid-cols-3 gap-3 text-center">
                        <div className="flex flex-col items-center">
                          <Truck className="w-4 h-4 text-orange-600 mb-1" />
                          <span className="text-xs text-neutral-700 font-semibold">FREE Shipping</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Shield className="w-4 h-4 text-orange-600 mb-1" />
                          <span className="text-xs text-neutral-700 font-semibold">A-Z Guarantee</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <Award className="w-4 h-4 text-orange-600 mb-1" />
                          <span className="text-xs text-neutral-700 font-semibold">4.8★ Rating</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product info - conversion optimized */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div 
                className="opacity-0 animate-fade-in space-y-6"
                style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}
              >
                {/* Amazon badge and social proof */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-200 text-orange-800 px-3 py-1.5 rounded-full text-sm font-bold">
                      <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEzLjMzMzMgOS4zMzMzM0gxNFY2LjY2NjY3SDBWOUgwLjY2NjY2N1Y5LjMzMzMzSDEzLjMzMzNaTTEzLjMzMzMgMTBIMTMuMzMzM1YxNEg5LjMzMzMzVjEwSDEzLjMzMzNaTTYuNjY2NjcgMTBWMTRIMlYxMEg2LjY2NjY3WiIgZmlsbD0iIzIzMjkzNyIvPgo8L3N2Zz4K" alt="Amazon" className="w-4 h-4" />
                      Available on Amazon
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-orange-400 text-orange-400" />
                        ))}
                      </div>
                      <span className="text-sm font-bold text-orange-600">4.8 (200+ reviews)</span>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h1 className="text-4xl lg:text-5xl font-light text-neutral-900 leading-tight">
                      Can <span className="font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Maderax</span>
                    </h1>
                    <p className="text-lg font-medium text-neutral-700">
                      Premium Bamboo Storage Box - Complete Kit
                    </p>
                  </div>
                </div>
                
                {/* Key benefits - simplified */}
                <div className="space-y-3">
                  {[
                    "✅ Premium bamboo construction",
                    "✅ Complete accessories kit included",
                    "✅ Elegant & functional design",
                    "✅ Amazon's Choice for storage boxes"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="text-neutral-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Urgency indicators */}
                <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-red-700 font-bold text-sm">Limited Time Offer</span>
                  </div>
                  <p className="text-red-600 text-sm font-medium">⏰ Only 47 units left in stock!</p>
                </div>
                
                {/* Primary CTA */}
                <div className="space-y-4 pt-2">
                  <Button 
                    onClick={handleAmazonRedirect}
                    size="lg"
                    className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-8 py-6 text-xl font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse"
                  >
                    🛒 BUY NOW ON AMAZON
                    <ExternalLink className="ml-2 w-6 h-6" />
                  </Button>
                  
                  <div className="flex items-center justify-center gap-4 text-sm text-neutral-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="font-medium">Secure checkout</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-green-500" />
                      <span className="font-medium">Free Prime delivery</span>
                    </div>
                  </div>
                  
                  <p className="text-center text-xs text-neutral-500 font-medium">
                    💳 Safe payment through Amazon • 🔄 Easy returns • ⭐ Satisfaction guaranteed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
