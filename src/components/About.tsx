import { Award, Users, Palette, TrendingUp } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "Award-Winning",
    description: "International recognition including the prestigious Modern Art Excellence Award 2023"
  },
  {
    icon: Users,
    title: "Elite Clientele",
    description: "Trusted by collectors, corporations, and cultural institutions worldwide"
  },
  {
    icon: Palette,
    title: "Master Craftsmanship",
    description: "Classically trained with 15+ years of professional artistic practice"
  },
  {
    icon: TrendingUp,
    title: "Investment Value",
    description: "Artwork consistently appreciates, with pieces increasing 40% in value annually"
  }
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-to-br from-purple-50 via-white to-rose-50 relative overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-amber-300 to-rose-300 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl animate-float-delayed" />
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="space-y-6 animate-fade-in">
            <span className="inline-block px-4 py-2 border border-neutral-300 tracking-widest uppercase mb-6 bg-white/70 backdrop-blur-sm hover:bg-white hover:border-amber-400 transition-all duration-300 hover:shadow-md hover:scale-105">
              The Artist
            </span>
            <h2 className="mb-6 bg-gradient-to-r from-neutral-900 via-purple-900 to-neutral-900 bg-clip-text text-transparent">Creating Timeless Art for Distinguished Spaces</h2>
            <p className="text-neutral-600 mb-6">
              With over fifteen years of dedicated artistic practice, I specialize in creating museum-quality artwork 
              that transcends trends and becomes a lasting legacy. My work has been featured in prestigious galleries 
              across three continents and is held in prominent private and corporate collections.
            </p>
            <p className="text-neutral-600 mb-6">
              Each piece is crafted using time-honored techniques combined with contemporary vision, ensuring your 
              investment will not only beautify your space but appreciate in value over time. I work exclusively 
              with archival materials and employ methods that guarantee longevity for generations to come.
            </p>
            <p className="text-neutral-600">
              Whether you're seeking a statement piece for your home, a curated collection for your business, 
              or a commissioned work that captures your unique vision, I bring unwavering commitment to excellence 
              and an uncompromising standard of quality.
            </p>
          </div>
          <div className="relative animate-fade-in-delayed">
            <div className="aspect-[4/5] bg-gradient-to-br from-amber-100 to-rose-100 border-2 border-neutral-300 shadow-2xl hover:shadow-amber-200 transition-all duration-500 hover:scale-[1.02]" />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-neutral-900 to-amber-900 text-white p-8 max-w-xs shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 cursor-pointer group">
              <div className="mb-2 group-hover:text-amber-300 transition-colors duration-300">Exhibited Internationally</div>
              <p className="text-neutral-300">
                Featured in galleries spanning New York, London, Paris, and Dubai
              </p>
              {/* Accent corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-amber-500/20 group-hover:bg-amber-500/40 transition-all duration-300" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={achievement.title} className="text-center group hover:scale-105 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-neutral-900 mb-4 group-hover:border-amber-500 transition-all duration-300 group-hover:rotate-12 group-hover:shadow-lg relative overflow-hidden">
                  <Icon className="size-7 relative z-10 group-hover:text-amber-600 transition-colors duration-300" />
                  {/* Background fill on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-rose-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </div>
                <h4 className="mb-3 group-hover:text-amber-700 transition-colors duration-300">{achievement.title}</h4>
                <p className="text-neutral-600">{achievement.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}