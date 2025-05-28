
import { Leaf, Instagram, Twitter, Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-zinc-900 to-black text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-light">
                Can <span className="font-serif italic text-amber-400">Maderax</span>
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full"></div>
              <p className="text-zinc-300 leading-relaxed font-light">
                Where natural elegance meets functional design. We craft premium storage solutions 
                inspired by nature's most sustainable materials.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Connect With Us</h4>
              <div className="flex items-center gap-4">
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center w-10 h-10 bg-zinc-800 hover:bg-amber-500 text-zinc-300 hover:text-black rounded-lg transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center w-10 h-10 bg-zinc-800 hover:bg-amber-500 text-zinc-300 hover:text-black rounded-lg transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center w-10 h-10 bg-zinc-800 hover:bg-amber-500 text-zinc-300 hover:text-black rounded-lg transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Future Vision */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 border border-amber-500/30 text-amber-400 rounded-lg">
                  <Leaf className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-2xl font-light text-white mb-2">
                    The Future of <span className="font-serif italic text-amber-400">Natural Design</span>
                  </h4>
                  <p className="text-zinc-300 leading-relaxed">
                    Our Original Collection is just the beginning. We're developing a complete ecosystem 
                    of naturally-inspired storage solutions, each designed to bring harmony between 
                    functionality and environmental consciousness to your space.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h5 className="text-lg font-semibold text-white flex items-center gap-2">
                  Coming Soon
                  <ArrowRight className="w-4 h-4 text-amber-400" />
                </h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-zinc-300 font-light">Desktop organizer collection</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-zinc-300 font-light">Kitchen storage solutions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-zinc-300 font-light">Bathroom organization systems</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-zinc-300 font-light">Custom storage accessories</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-zinc-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-zinc-400 font-light">
                &copy; 2024 Can Maderax. All rights reserved.
              </p>
              <p className="text-sm text-zinc-500 mt-1">
                Products exclusively available on Amazon marketplace.
              </p>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-zinc-400">
              <span className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-amber-400" />
                Sustainably Sourced
              </span>
              <span>•</span>
              <span>Quality Guaranteed</span>
              <span>•</span>
              <span>Amazon Prime Eligible</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
