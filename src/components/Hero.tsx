import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50 animate-gradient" />
      
      {/* Floating orbs animation */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-rose-300/20 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="mb-6 animate-fade-in">
          <span className="inline-block px-4 py-2 border border-neutral-300 tracking-widest uppercase bg-white/50 backdrop-blur-sm hover:bg-white/80 hover:border-amber-400 transition-all duration-300 hover:shadow-lg hover:scale-105">
            Fine Art & Commissions
          </span>
        </div>
        <h1 className="mb-6 max-w-4xl mx-auto animate-fade-in-up bg-gradient-to-r from-neutral-900 via-amber-900 to-neutral-900 bg-clip-text text-transparent">
          Masterfully Crafted Art for Discerning Collectors
        </h1>
        <p className="max-w-2xl mx-auto text-neutral-600 mb-12 animate-fade-in-up-delayed">
          Elevate your space with bespoke artwork that captures the essence of sophistication. 
          Each piece is meticulously created to transcend ordinary aesthetics and become a timeless investment.
        </p>
        <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up-more-delayed">
          <Button size="lg" className="gap-2 bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group">
            View Portfolio
            <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button size="lg" variant="outline" className="border-2 hover:border-amber-500 hover:bg-amber-50 hover:shadow-lg hover:scale-105 transition-all duration-300">
            Commission a Piece
          </Button>
        </div>
        
        <div className="mt-20 grid grid-cols-3 gap-8 max-w-3xl mx-auto border-t border-neutral-200 pt-12 animate-fade-in-up-final">
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="mb-2 bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent group-hover:from-amber-500 group-hover:to-rose-500 transition-all duration-300">500+</div>
            <p className="text-neutral-600">Completed Works</p>
          </div>
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="mb-2 bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent group-hover:from-amber-500 group-hover:to-rose-500 transition-all duration-300">15 Years</div>
            <p className="text-neutral-600">Professional Experience</p>
          </div>
          <div className="group hover:scale-105 transition-transform duration-300">
            <div className="mb-2 bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent group-hover:from-amber-500 group-hover:to-rose-500 transition-all duration-300">200+</div>
            <p className="text-neutral-600">Private Collections</p>
          </div>
        </div>
      </div>
    </section>
  );
}