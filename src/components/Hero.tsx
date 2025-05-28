
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Hero = () => {
  const handleAmazonRedirect = () => {
    window.open('https://www.amazon.com/dp/B0DPGSRGNV', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 text-slate-900 flex items-center">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23d97706' fill-opacity='0.05'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2.5L23.5 16 20 18.5zM0 38h40v2H0v-2z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Brand & Message */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-7xl lg:text-8xl font-light tracking-tight leading-none text-slate-800">
                Can<br />
                <span className="font-serif italic text-amber-600">Maderax</span>
              </h1>
              
              <div className="w-16 h-0.5 bg-amber-600"></div>
              
              <p className="text-2xl lg:text-3xl text-slate-600 font-light leading-relaxed max-w-lg">
                Natural elegance.<br />
                Functional perfection.<br />
                <span className="text-slate-800">Complete harmony.</span>
              </p>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-slate-500 max-w-md leading-relaxed">
                A complete storage system crafted from sustainable bamboo. 
                Everything you need, designed as one.
              </p>
              
              <Button 
                onClick={handleAmazonRedirect}
                size="lg"
                className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-4 text-lg font-medium rounded-none transition-all duration-300 shadow-lg"
              >
                Shop on Amazon
                <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
          
          {/* Product Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-200/30 to-orange-200/20 rounded-full blur-3xl scale-150"></div>
            <div className="relative">
              <img 
                src="/lovable-uploads/83f3710b-e2ff-46ad-a45e-4d190db0f351.png"
                alt="Can Maderax Complete Storage System"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
