
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-neutral-50 to-white border-t border-neutral-200/50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="space-y-6">
            <h3 className="text-3xl font-light text-neutral-900">
              Can <span className="font-semibold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Maderax</span>
            </h3>
            <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
            <p className="text-neutral-600 leading-relaxed font-light">
              La caja de madera premium que combina elegancia natural, funcionalidad 
              excepcional y artesanía de primera calidad para una experiencia única.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-neutral-900 mb-6 flex items-center gap-2">
              Información del Producto
              <div className="w-8 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
            </h4>
            <ul className="space-y-3 text-neutral-600 font-light">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                Material: Bambú premium
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                Incluye kit completo
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                Diseño funcional y elegante
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                Garantía de calidad
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-neutral-900 mb-6 flex items-center gap-2">
              Compra Segura
              <div className="w-8 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
            </h4>
            <ul className="space-y-3 text-neutral-600 font-light">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                Disponible en Amazon
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                Envío gratis con Prime
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                Garantía de satisfacción
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                Devoluciones fáciles
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-200/50 mt-12 pt-8 text-center text-neutral-500 font-light">
          <div className="bg-gradient-to-r from-neutral-50 to-amber-50/30 rounded-2xl p-6">
            <p className="font-medium text-neutral-700">&copy; 2024 Can Maderax. Todos los derechos reservados.</p>
            <p className="mt-2 text-sm">
              Producto disponible exclusivamente en Amazon. Amazon y el logo de Amazon son marcas registradas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
