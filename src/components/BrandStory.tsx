
import { Leaf, Award, Heart } from "lucide-react";

const BrandStory = () => {
  const values = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Sustainable by design",
      description: "Every piece crafted from responsibly sourced bamboo"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Uncompromising quality",
      description: "Precision engineering meets natural materials"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Thoughtfully complete",
      description: "One purchase, everything you need, forever"
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-amber-50 to-orange-100 text-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Story Header */}
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-6xl font-light leading-tight text-slate-800">
                Crafted for<br />
                <span className="font-serif italic text-amber-600">completeness</span>
              </h2>
              <div className="w-16 h-0.5 bg-amber-600"></div>
              <div className="space-y-6">
                <p className="text-xl text-slate-600 leading-relaxed">
                  Can Maderax was born from a simple belief: storage should be beautiful, 
                  functional, and complete from day one.
                </p>
                <p className="text-lg text-slate-500 leading-relaxed">
                  We don't sell separate pieces or require additional purchases. 
                  We create complete systems that work perfectly together, 
                  crafted from nature's most sustainable materials.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 to-orange-200/10"></div>
              <div className="aspect-square bg-white/70 backdrop-blur-sm border border-amber-200 rounded-full flex items-center justify-center shadow-lg">
                <div className="text-center space-y-4">
                  <div className="text-6xl font-light text-amber-600">100%</div>
                  <div className="text-lg text-slate-600">Complete<br />System</div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/70 backdrop-blur-sm border border-amber-200 text-amber-600 rounded-full shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-xl font-medium text-slate-800">
                  {value.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
