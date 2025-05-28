
import { Button } from "@/components/ui/button";
import { ExternalLink, Leaf, Award, Star } from "lucide-react";

const Hero = () => {
  const handleAmazonRedirect = () => {
    window.open('https://www.amazon.com/dp/B0DPGSRGNV', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-zinc-900 via-slate-900 to-zinc-800 text-white overflow-hidden">
      {/* Bamboo-inspired pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="min-h-screen flex flex-col justify-center">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Brand Story */}
            <div className="lg:col-span-7 order-1">
              <div className="space-y-8">
                {/* Brand Badge */}
                <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
                  <Leaf className="w-4 h-4" />
                  Naturally Inspired Design
                </div>
                
                {/* Brand Name & Tagline */}
                <div className="space-y-6">
                  <h1 className="text-6xl lg:text-7xl font-light text-white leading-tight">
                    Can <span className="font-serif italic text-amber-400">Maderax</span>
                  </h1>
                  <p className="text-2xl lg:text-3xl text-zinc-300 font-light leading-relaxed">
                    Where Natural Elegance<br />
                    <span className="text-amber-400">Meets Functional Design</span>
                  </p>
                  
                  <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
                </div>
                
                {/* Brand Promise */}
                <div className="space-y-4">
                  <p className="text-lg text-zinc-200 leading-relaxed max-w-2xl">
                    We craft premium storage solutions inspired by nature's most sustainable materials. 
                    Each piece embodies our commitment to elegant functionality and environmental consciousness.
                  </p>
                </div>
                
                {/* Trust Indicators */}
                <div className="flex items-center gap-8 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-zinc-300">Rated 4.8/5</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-300">
                    <Award className="w-5 h-5 text-amber-400" />
                    <span className="text-sm font-medium">Amazon's Choice</span>
                  </div>
                </div>
                
                {/* Primary CTA */}
                <div className="pt-6">
                  <Button 
                    onClick={handleAmazonRedirect}
                    size="lg"
                    className="bg-amber-500 hover:bg-amber-600 text-black px-8 py-6 text-lg font-semibold rounded-lg shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105"
                  >
                    Discover Our Collection
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </Button>
                  
                  <p className="text-xs text-zinc-400 mt-3">
                    Available exclusively on Amazon
                  </p>
                </div>
              </div>
            </div>
            
            {/* Product Showcase */}
            <div className="lg:col-span-5 order-2">
              <div className="relative">
                {/* Ambient glow */}
                <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-3xl scale-150"></div>
                
                <div className="relative bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm rounded-2xl p-8 border border-zinc-700/50">
                  <img 
                    src="/lovable-uploads/83f3710b-e2ff-46ad-a45e-4d190db0f351.png"
                    alt="Can Maderax - Premium Bamboo Storage Collection"
                    className="w-full h-auto rounded-lg"
                  />
                  
                  {/* Product Badge */}
                  <div className="mt-6 text-center">
                    <div className="inline-flex items-center gap-2 bg-zinc-800/80 border border-zinc-600 text-zinc-300 px-4 py-2 rounded-lg text-sm font-medium backdrop-blur-sm">
                      <span className="text-amber-400">●</span>
                      Signature Collection
                    </div>
                  </div>
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
