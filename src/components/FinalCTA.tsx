
import { Button } from "@/components/ui/button";
import { ExternalLink, Shield, CheckCircle, Award } from "lucide-react";

const FinalCTA = () => {
  const handleAmazonRedirect = () => {
    window.open('https://www.amazon.com/dp/B0DPGSRGNV', '_blank');
  };

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8 mb-12">
            <h2 className="text-4xl lg:text-5xl font-serif tracking-tight">
              Professional Storage Solution
            </h2>
            
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Join professionals who trust Can Maderax for superior quality and reliable performance.
            </p>
          </div>
          
          {/* Trust indicators */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: <Award className="w-6 h-6" />, title: "Amazon's Choice", subtitle: "Quality verified" },
              { icon: <Shield className="w-6 h-6" />, title: "A-Z Guarantee", subtitle: "Purchase protected" },
              { icon: <CheckCircle className="w-6 h-6" />, title: "4.8★ Rating", subtitle: "200+ reviews" }
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-slate-800 border border-slate-700 rounded-lg p-6"
              >
                <div className="text-slate-300 mb-3 flex justify-center">{item.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400">{item.subtitle}</p>
              </div>
            ))}
          </div>
          
          {/* Final CTA */}
          <div className="space-y-6">
            <div className="bg-slate-800 border border-slate-700 rounded-lg p-8">
              <div className="space-y-6">
                <Button 
                  onClick={handleAmazonRedirect}
                  size="lg"
                  className="bg-white hover:bg-slate-100 text-slate-900 px-16 py-6 text-xl font-semibold rounded-md shadow-lg transition-colors duration-300 w-full md:w-auto"
                >
                  Purchase on Amazon
                  <ExternalLink className="ml-3 w-6 h-6" />
                </Button>
                
                <div className="flex items-center justify-center gap-6 text-sm text-slate-400">
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4" />
                    Secure Checkout
                  </span>
                  <span className="flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Prime Shipping
                  </span>
                  <span className="flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    Satisfaction Guaranteed
                  </span>
                </div>
                
                <p className="text-slate-400 font-medium">
                  Professional quality backed by Amazon's trusted marketplace
                </p>
              </div>
            </div>
            
            <p className="text-sm text-slate-500">
              Protected by Amazon's customer service and return policy
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
