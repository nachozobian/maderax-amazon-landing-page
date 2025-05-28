
import { Button } from "@/components/ui/button";
import { ExternalLink, Shield, Award, Star, CheckCircle } from "lucide-react";

const Hero = () => {
  const handleAmazonRedirect = () => {
    window.open('https://www.amazon.com/dp/B0DPGSRGNV', '_blank');
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="min-h-screen flex flex-col justify-center">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Product showcase */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <div className="relative">
                <div className="bg-white rounded-lg shadow-xl border border-slate-200 p-8">
                  <img 
                    src="/lovable-uploads/83f3710b-e2ff-46ad-a45e-4d190db0f351.png"
                    alt="Can Maderax - Professional Grade Storage Solution"
                    className="w-full h-auto"
                  />
                  
                  {/* Technical badges */}
                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    <div className="flex flex-col items-center">
                      <Shield className="w-5 h-5 text-slate-600 mb-2" />
                      <span className="text-xs font-medium text-slate-700">Premium Grade</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Award className="w-5 h-5 text-slate-600 mb-2" />
                      <span className="text-xs font-medium text-slate-700">Quality Tested</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Star className="w-5 h-5 text-slate-600 mb-2" />
                      <span className="text-xs font-medium text-slate-700">4.8/5 Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Product information */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="space-y-8">
                {/* Brand authority */}
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-300 text-slate-800 px-4 py-2 rounded-md text-sm font-semibold">
                    Available on Amazon
                  </div>
                  
                  <h1 className="text-5xl lg:text-6xl font-serif text-slate-900 leading-tight">
                    Can Maderax
                  </h1>
                  <p className="text-xl text-slate-600 font-medium">
                    Professional Grade Bamboo Storage System
                  </p>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-slate-800 text-slate-800" />
                      ))}
                    </div>
                    <span className="text-sm font-semibold text-slate-800">4.8 out of 5 (200+ verified reviews)</span>
                  </div>
                </div>
                
                {/* Technical specifications */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-900">Technical Specifications</h3>
                  <div className="space-y-2">
                    {[
                      "Premium sustainably-sourced bamboo construction",
                      "Precision-engineered magnetic closure system",
                      "Complete accessory kit with storage optimization",
                      "Professional-grade build quality and finish"
                    ].map((spec, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-4 h-4 text-slate-600 flex-shrink-0" />
                        <span className="text-slate-700 font-medium">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Trust indicators */}
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Shield className="w-5 h-5 text-slate-600" />
                    <span className="font-semibold text-slate-800">Quality Assurance</span>
                  </div>
                  <p className="text-sm text-slate-600 font-medium">
                    Backed by Amazon's A-to-Z Guarantee. Secure checkout and reliable shipping through Amazon Prime.
                  </p>
                </div>
                
                {/* Primary CTA */}
                <div className="space-y-4 pt-4">
                  <Button 
                    onClick={handleAmazonRedirect}
                    size="lg"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-6 text-lg font-semibold rounded-md shadow-lg transition-colors duration-300"
                  >
                    Purchase on Amazon
                    <ExternalLink className="ml-2 w-5 h-5" />
                  </Button>
                  
                  <div className="flex items-center justify-center gap-6 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-slate-500" />
                      <span className="font-medium">Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-slate-500" />
                      <span className="font-medium">Prime Shipping</span>
                    </div>
                  </div>
                  
                  <p className="text-center text-xs text-slate-500 font-medium">
                    Protected by Amazon's customer guarantee policy
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
