import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Artwork {
  id: number;
  title: string;
  category: string;
  price: string;
  image: string;
  dimensions: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "The Ndao twins",
    category: "Portrait",
    price: "$5,500",
    image: new URL("../assets/image/WhatsApp Image 2025-11-19 at 16.53.08.jpeg", import.meta.url).href,
    dimensions: "9\" × 12\""
  },
  {
    id: 2,
    title: "Sacred Manifestation",
    category: "Portrait",
    price: "$4,000",
    image: new URL("../assets/image/WhatsApp Image 2025-11-19 at 16.53.09 (1).jpeg", import.meta.url).href,
    dimensions: "36\" × 48\""
  },
  {
    id: 3,
    title: "Serene Horizons",
    category: "POtrait",
    price: "$3,200",
    image: new URL("../assets/image/WhatsApp Image 2025-11-19 at 16.53.09 (2).jpeg", import.meta.url).href,
    dimensions: "40\" × 60\""
  },
  {
    id: 4,
    title: "Hummingbird's Song",
    category: "figurative painting",
    price: "$2,500",
    image: new URL("../assets/image/WhatsApp Image 2025-11-19 at 16.53.09.jpeg", import.meta.url).href,
    dimensions: "Multiple pieces"
  },
  {
    id: 5,
    title: "Oh how I Love Angels",
    category: "Sculpture",
    price: "$2,000",
    image: new URL("../assets/image/WhatsApp Image 2025-12-14 at 01.14.52 (1).jpeg", import.meta.url).href,
    dimensions: "24\" × 18\" × 12\""
  },
  {
    id: 6,
    title: "The Classical Self",
    category: "Mixed Media",
    price: "$3,500",
    image: new URL("../assets/image/WhatsApp Image 2025-12-14 at 01.14.52 (2).jpeg", import.meta.url).href,
    dimensions: "36\" × 48\""
  },
  {
    id: 7,
    title: "Wendy Zarah",
    category: "Portrait",
    price: "$2,800",
    image: new URL("../assets/image/WhatsApp Image 2025-12-14 at 01.14.52 (3).jpeg", import.meta.url).href,
    dimensions: "36\" × 48\""
  },
  {
    id: 8,
    title: "EGO",
    category: "Mixed Media",
    price: "$3,800",
    image: new URL("../assets/image/WhatsApp Image 2025-12-14 at 01.14.52 (4).jpeg", import.meta.url).href,
    dimensions: "36\" × 36\""
  },
  {
    id: 9,
    title: "Marigold's Embrace",
    category: "Mixed Media",
    price: "$7,800",
    image: new URL("../assets/image/WhatsApp Image 2025-12-14 at 01.14.52.jpeg", import.meta.url).href,
    dimensions: "36\" × 48\""
  },
   {
    id: 10,
    title: "Chinoiserie Peonies",
    category: "Mixed Media",
    price: "$3,800",
    image: new URL("../assets/image/WhatsApp Image 2025-12-14 at 01.27.31.jpeg", import.meta.url).href,
    dimensions: "30\" × 40\""
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-gradient-to-b from-white via-amber-50/30 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rose-200/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse-slow" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 border border-neutral-300 tracking-widest uppercase mb-6 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-amber-400 transition-all duration-300 hover:shadow-md hover:scale-105">
            Selected Works
          </span>
          <h2 className="mb-4 bg-gradient-to-r from-neutral-900 via-amber-900 to-neutral-900 bg-clip-text text-transparent">Featured Portfolio</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Each piece represents a unique artistic journey, meticulously crafted to embody timeless elegance and profound expression.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <div
              key={artwork.id}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 mb-4 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <ImageWithFallback
                  src={artwork.image}
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated border effect */}
                <div className="absolute inset-0 border-2 border-amber-500/0 group-hover:border-amber-500/50 transition-all duration-500" />
                
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
              <div className="space-y-2 group-hover:translate-x-2 transition-transform duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="mb-1 group-hover:text-amber-700 transition-colors duration-300">{artwork.title}</h4>
                    <p className="text-neutral-500 tracking-wide uppercase">{artwork.category}</p>
                  </div>
                  <div className="text-right">
                    <div className="tracking-wide bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent group-hover:from-amber-500 group-hover:to-rose-500 transition-all duration-300">{artwork.price}</div>
                  </div>
                </div>
                <p className="text-neutral-500">{artwork.dimensions}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}