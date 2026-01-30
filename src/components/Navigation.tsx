import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

export function Navigation() {
  const navItems = [
    { label: "Portfolio", href: "#portfolio" },
    { label: "About", href: "#about" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-neutral-200/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="tracking-widest text-lg relative group cursor-pointer">
          <span
            className="relative z-10 text-16xl lg:text-[10rem] font-black tracking-[0.35em] font-[Cormorant_Garamond] bg-gradient-to-r from-amber-500 via-rose-500 to-purple-500 bg-clip-text text-transparent drop-shadow-[0_12px_60px_rgba(234,88,12,0.7)] shadow-amber-400"
            style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.35em', fontSize: '35px'}}
          >
            ATELIER
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-2xl" />
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative px-4 py-2 text-neutral-700 tracking-wide group overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-neutral-900 transition-colors duration-300 font-semibold">
                {item.label}
              </span>
              {/* Animated background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-rose-100 to-purple-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <button className="p-2 hover:bg-neutral-100 rounded-lg transition-colors">
              <Menu className="size-5" />
            </button>
          </SheetTrigger>
          <SheetContent className="bg-gradient-to-b from-white to-neutral-50">
            <div className="flex flex-col gap-2 mt-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative px-4 py-3 text-neutral-700 tracking-wide group overflow-hidden rounded-lg"
                >
                  <span className="relative z-10 group-hover:text-neutral-900 transition-colors duration-300 font-semibold">
                    {item.label}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-100 via-rose-100 to-purple-100 translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}