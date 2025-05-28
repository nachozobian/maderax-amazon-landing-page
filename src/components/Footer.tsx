
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
              The premium wooden box that combines natural elegance, exceptional functionality, 
              and first-class craftsmanship for a unique experience.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-neutral-900 mb-6 flex items-center gap-2">
              Product Information
              <div className="w-8 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
            </h4>
            <ul className="space-y-3 text-neutral-600 font-light">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                Material: Premium bamboo
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                Includes complete kit
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                Functional and elegant design
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                Quality guarantee
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-neutral-900 mb-6 flex items-center gap-2">
              Secure Purchase
              <div className="w-8 h-0.5 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full"></div>
            </h4>
            <ul className="space-y-3 text-neutral-600 font-light">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                Available on Amazon
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                Free shipping with Prime
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                Satisfaction guarantee
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                Easy returns
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-200/50 mt-12 pt-8 text-center text-neutral-500 font-light">
          <div className="bg-gradient-to-r from-neutral-50 to-amber-50/30 rounded-2xl p-6">
            <p className="font-medium text-neutral-700">&copy; 2024 Can Maderax. All rights reserved.</p>
            <p className="mt-2 text-sm">
              Product exclusively available on Amazon. Amazon and the Amazon logo are registered trademarks.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
