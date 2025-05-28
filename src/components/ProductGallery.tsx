
import { useEffect, useState } from "react";

const ProductGallery = () => {
  const [scrollY, setScrollY] = useState(0);
  const [visibleImages, setVisibleImages] = useState<boolean[]>([]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleImages(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = document.querySelectorAll('.gallery-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const images = [
    {
      src: "/lovable-uploads/b0c603a5-da6d-4ece-acb5-55ce45d1f79c.png",
      alt: "Can Maderax open showing the interior"
    },
    {
      src: "/lovable-uploads/c0691484-4a29-46d3-a12a-3e4373590fbf.png",
      alt: "Can Maderax with all accessories"
    },
    {
      src: "/lovable-uploads/b12ac5ae-b367-4c83-908f-8a50dbf25422.png",
      alt: "Accessories included in Can Maderax"
    },
    {
      src: "/lovable-uploads/357448db-3e2d-4fc3-83ef-168433ed47ba.png",
      alt: "Detailed view of Can Maderax interior"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-neutral-50 to-white relative overflow-hidden">
      {/* Parallax background element */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-30"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-light text-neutral-900 mb-6 tracking-tight">
            Design and Quality in <span className="font-normal">Every Detail</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto font-light leading-relaxed">
            Explore every aspect of Can Maderax and discover the preferred choice of thousands of users.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-20">
          {images.map((image, index) => (
            <div 
              key={index}
              data-index={index}
              className={`gallery-item group relative overflow-hidden rounded-3xl transition-all duration-700 ${
                visibleImages[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        <div className="bg-white border border-neutral-200 rounded-3xl p-12 max-w-5xl mx-auto shadow-sm">
          <h3 className="text-3xl font-light text-neutral-900 mb-8 text-center">
            Complete <span className="font-normal">Kit Included</span>
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                "Premium bamboo box with magnetic lid",
                "3 glass jars with bamboo lids",
                "Stainless steel tools"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-700 font-light">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {[
                "Organizing compartments",
                "Additional accessories included",
                "Detailed user manual"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-neutral-700 font-light">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
