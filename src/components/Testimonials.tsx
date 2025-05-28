
import { Star } from "lucide-react";

const Testimonials = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-amber-500 fill-current' : 'text-slate-300'}`} 
      />
    ));
  };

  const testimonials = [
    {
      text: "Finally, a storage solution that actually looks like it belongs in my home. The quality is exceptional.",
      author: "Sarah M.",
      rating: 5
    },
    {
      text: "I love that everything comes together perfectly. No hunting for matching pieces or wondering what fits where.",
      author: "Michael R.",
      rating: 5
    },
    {
      text: "The bamboo construction is beautiful and feels incredibly solid. This will last for years.",
      author: "Jennifer L.",
      rating: 5
    }
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-orange-100 to-amber-100 text-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl lg:text-6xl font-light mb-8 tracking-tight text-slate-800">
              Loved by <span className="font-serif italic text-amber-600">customers</span>
            </h2>
            <div className="w-16 h-0.5 bg-amber-600 mx-auto mb-8"></div>
            <div className="flex items-center justify-center gap-6">
              <div className="flex items-center gap-1">
                {renderStars(5)}
              </div>
              <span className="text-2xl font-light text-slate-800">4.8 out of 5</span>
              <span className="text-slate-500">200+ verified reviews</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="space-y-6 bg-white/70 backdrop-blur-sm border border-amber-200 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center gap-1">
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote className="text-lg text-slate-600 leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                <cite className="text-amber-600 font-medium not-italic">
                  {testimonial.author}
                </cite>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
