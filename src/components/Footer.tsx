
const Footer = () => {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-3xl font-light text-neutral-900 mb-6">
              Can <span className="font-normal text-amber-600">Maderax</span>
            </h3>
            <p className="text-neutral-600 leading-relaxed font-light">
              La caja de madera premium que combina elegancia natural, funcionalidad 
              excepcional y artesanía de primera calidad para una experiencia única.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-neutral-900 mb-6">Información del Producto</h4>
            <ul className="space-y-3 text-neutral-600 font-light">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                Material: Bambú premium
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                Incluye kit completo
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                Diseño funcional y elegante
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                Garantía de calidad
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium text-neutral-900 mb-6">Compra Segura</h4>
            <ul className="space-y-3 text-neutral-600 font-light">
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                Disponible en Amazon
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                Envío gratis con Prime
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                Garantía de satisfacción
              </li>
              <li className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                Devoluciones fáciles
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 mt-12 pt-8 text-center text-neutral-500 font-light">
          <p>&copy; 2024 Can Maderax. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm">
            Producto disponible exclusivamente en Amazon. Amazon y el logo de Amazon son marcas registradas.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
