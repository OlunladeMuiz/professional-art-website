export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-neutral-950 via-neutral-900 to-amber-950 text-white py-12 px-6 relative overflow-hidden">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-600/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-rose-600/20 rounded-full blur-3xl animate-pulse-slow" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="group">
            <div className="tracking-widest mb-4 text-lg group-hover:text-amber-300 transition-colors duration-300 cursor-pointer">ATELIER</div>
            <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300">
              Creating museum-quality art for discerning collectors and cultural institutions worldwide.
            </p>
          </div>

          <div>
            <div className="mb-4 text-white">Quick Links</div>
            <ul className="space-y-2">
              <li>
                <a href="#portfolio" className="text-neutral-400 hover:text-amber-300 transition-all duration-300 hover:translate-x-1 inline-block relative group">
                  Portfolio
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-rose-500 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
              <li>
                <a href="#about" className="text-neutral-400 hover:text-amber-300 transition-all duration-300 hover:translate-x-1 inline-block relative group">
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-rose-500 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-neutral-400 hover:text-amber-300 transition-all duration-300 hover:translate-x-1 inline-block relative group">
                  Pricing
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-rose-500 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-400 hover:text-amber-300 transition-all duration-300 hover:translate-x-1 inline-block relative group">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-rose-500 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-4 text-white">Legal</div>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-400 hover:text-amber-300 transition-all duration-300 hover:translate-x-1 inline-block relative group">
                  Terms of Sale
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-rose-500 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-amber-300 transition-all duration-300 hover:translate-x-1 inline-block relative group">
                  Privacy Policy
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-rose-500 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-amber-300 transition-all duration-300 hover:translate-x-1 inline-block relative group">
                  Shipping & Returns
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-rose-500 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
              <li>
                <a href="#" className="text-neutral-400 hover:text-amber-300 transition-all duration-300 hover:translate-x-1 inline-block relative group">
                  Copyright Notice
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-rose-500 group-hover:w-full transition-all duration-300" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-neutral-800 text-center text-neutral-400">
          <p className="hover:text-neutral-300 transition-colors duration-300">&copy; 2025 Atelier Fine Art. All rights reserved. All artwork protected under international copyright law.</p>
        </div>
      </div>
    </footer>
  );
}