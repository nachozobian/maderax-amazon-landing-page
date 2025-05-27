
const ProductGallery = () => {
  const images = [
    {
      src: "/lovable-uploads/b0c603a5-da6d-4ece-acb5-55ce45d1f79c.png",
      alt: "Can Maderax abierta mostrando el interior"
    },
    {
      src: "/lovable-uploads/c0691484-4a29-46d3-a12a-3e4373590fbf.png",
      alt: "Can Maderax con todos los accesorios"
    },
    {
      src: "/lovable-uploads/b12ac5ae-b367-4c83-908f-8a50dbf25422.png",
      alt: "Accesorios incluidos en Can Maderax"
    },
    {
      src: "/lovable-uploads/357448db-3e2d-4fc3-83ef-168433ed47ba.png",
      alt: "Vista detallada del interior de Can Maderax"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Diseño y Calidad en Cada Detalle
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explora cada aspecto de Can Maderax y descubre por qué es la elección 
            preferida de miles de usuarios que buscan calidad y elegancia.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-amber-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Lo que incluye tu Can Maderax
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-700">Caja de bambú premium con tapa magnética</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-700">3 frascos de vidrio con tapas de bambú</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-700">Herramientas de acero inoxidable</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-700">Compartimentos organizadores</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-700">Accesorios adicionales incluidos</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                <span className="text-gray-700">Manual de uso detallado</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
