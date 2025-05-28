
import { Button } from "@/components/ui/button";
import { ExternalLink, Shield, Star } from "lucide-react";

const FinalCTA = () => {
  const handleAmazonRedirect = () => {
    window.open('https://www.amazon.com/dp/B0DPGSRGNV', '_blank');
  };

  return (
    <section className="py-32 bg-zinc-800 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-6xl font-light tracking-tight">
                Ready to <span className="font-serif italic text-amber-400">complete</span><br />
                your space?
              </h2>
              <div className="w-16 h-0.5 bg-amber-400 mx-auto"></div>
              <p className="text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
                Join hundreds of customers who've discovered the perfect balance 
                of natural beauty and functional design.
              </p>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center justify-center gap-12 text-zinc-400">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span>Amazon protected</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-400 fill-current" />
                <span>4.8/5 rating</span>
              </div>
              <div className="flex items-center gap-2">
                <ExternalLink className="w-5 h-5" />
                <span>Prime shipping</span>
              </div>
            </div>

            <div className="space-y-6">
              <Button 
                onClick={handleAmazonRedirect}
                size="lg"
                className="bg-amber-400 hover:bg-amber-500 text-zinc-900 px-12 py-6 text-xl font-medium rounded-none transition-all duration-300"
              >
                Shop on Amazon
                <ExternalLink className="ml-3 w-6 h-6" />
              </Button>
              
              <p className="text-zinc-500">
                Free returns • Satisfaction guaranteed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
