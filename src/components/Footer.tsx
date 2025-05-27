
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-amber-400 mb-4">Can Maderax</h3>
            <p className="text-gray-300 leading-relaxed">
              La caja de madera premium que combina elegancia, funcionalidad y 
              artesanía excepcional para una experiencia única.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Información del Producto</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Material: Bambú premium</li>
              <li>• Incluye kit completo</li>
              <li>• Diseño funcional y elegante</li>
              <li>• Garantía de calidad</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Compra Segura</h4>
            <ul className="space-y-2 text-gray-300">
              <li>• Disponible en Amazon</li>
              <li>• Envío gratis con Prime</li>
              <li>• Garantía de satisfacción</li>
              <li>• Devoluciones fáciles</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
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
