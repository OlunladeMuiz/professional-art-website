import { Check } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const pricingTiers = [
  {
    name: "Original Works",
    description: "Ready-to-acquire masterpieces",
    basePrice: "$5,000",
    priceRange: "$5,000 - $25,000",
    features: [
      "Museum-quality materials",
      "Certificate of authenticity",
      "Professional archival framing",
      "Complimentary installation consultation",
      "Lifetime conservation guidance"
    ]
  },
  {
    name: "Commissioned Art",
    description: "Bespoke creations tailored to your vision",
    basePrice: "$12,000",
    priceRange: "Starting at $12,000",
    features: [
      "Personal consultation sessions",
      "Customized concept development",
      "Progress documentation",
      "Premium materials & finishes",
      "Certificate of authenticity",
      "Professional installation service",
      "Two complimentary revisions"
    ],
    featured: true
  },
  {
    name: "Corporate Collections",
    description: "Curated art programs for businesses",
    basePrice: "Custom",
    priceRange: "Custom quotation",
    features: [
      "Multi-piece collection design",
      "Brand alignment consultation",
      "Flexible payment arrangements",
      "Professional installation team",
      "Ongoing curation services",
      "Investment documentation"
    ]
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-gradient-to-br from-amber-50 via-rose-50 to-purple-50 relative overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-amber-300 to-rose-300 rounded-full blur-3xl opacity-20 animate-pulse-slow" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl opacity-20 animate-float" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 border border-neutral-300 tracking-widest uppercase mb-6 bg-white/70 backdrop-blur-sm hover:bg-white hover:border-amber-400 transition-all duration-300 hover:shadow-md hover:scale-105">
            Investment
          </span>
          <h2 className="mb-4 bg-gradient-to-r from-neutral-900 via-rose-900 to-neutral-900 bg-clip-text text-transparent">Transparent Pricing</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto">
            Each artwork is an investment in enduring beauty. Pricing reflects the exceptional quality, 
            materials, and artistic expertise invested in every creation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <Card
              key={tier.name}
              className={`p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl animate-fade-in group ${
                tier.featured
                  ? "border-2 border-amber-500 shadow-2xl relative bg-gradient-to-br from-white via-amber-50/30 to-rose-50/30"
                  : "border border-neutral-200 bg-white/80 backdrop-blur-sm hover:border-amber-300"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {tier.featured && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <span className="inline-block px-4 py-1 bg-gradient-to-r from-amber-600 to-rose-600 text-white tracking-widest uppercase shadow-lg animate-pulse-slow">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="mb-2 group-hover:text-amber-700 transition-colors duration-300">{tier.name}</h3>
                <p className="text-neutral-600 mb-4">{tier.description}</p>
                <div className="mb-1 bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">{tier.basePrice}</div>
                <p className="text-neutral-500">{tier.priceRange}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, index) => (
                  <li key={index} className="flex gap-3 group/item hover:translate-x-1 transition-transform duration-200">
                    <Check className="size-5 text-amber-600 flex-shrink-0 mt-0.5 group-hover/item:text-rose-600 transition-colors duration-200" />
                    <span className="text-neutral-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={tier.featured ? "default" : "outline"}
                className={`w-full transition-all duration-300 ${
                  tier.featured
                    ? "bg-gradient-to-r from-amber-600 to-rose-600 hover:from-amber-700 hover:to-rose-700 shadow-lg hover:shadow-xl"
                    : "hover:bg-amber-50 hover:border-amber-500 hover:shadow-lg"
                }`}
              >
                Inquire Now
              </Button>
            </Card>
          ))}
        </div>

        <div className="mt-16 p-8 border-2 border-neutral-300 bg-white/90 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-amber-400 relative overflow-hidden group">
          {/* Animated gradient background on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-50 via-rose-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h3 className="mb-4 bg-gradient-to-r from-neutral-900 via-amber-900 to-neutral-900 bg-clip-text text-transparent">Additional Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div className="p-4 hover:bg-white/50 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105 cursor-pointer group/service">
                <div className="mb-2 tracking-wide group-hover/service:text-amber-700 transition-colors duration-300">Art Restoration</div>
                <p className="text-neutral-600">Expert restoration services for damaged or aged artwork</p>
                <p className="mt-2 text-neutral-900 bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">From $800</p>
              </div>
              <div className="p-4 hover:bg-white/50 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105 cursor-pointer group/service">
                <div className="mb-2 tracking-wide group-hover/service:text-amber-700 transition-colors duration-300">Private Viewings</div>
                <p className="text-neutral-600">Exclusive studio visits and collection previews</p>
                <p className="mt-2 text-neutral-900 bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">Complimentary</p>
              </div>
              <div className="p-4 hover:bg-white/50 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105 cursor-pointer group/service">
                <div className="mb-2 tracking-wide group-hover/service:text-amber-700 transition-colors duration-300">Art Appraisal</div>
                <p className="text-neutral-600">Professional valuation for insurance and resale</p>
                <p className="mt-2 text-neutral-900 bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">$500 per piece</p>
              </div>
              <div className="p-4 hover:bg-white/50 rounded-lg transition-all duration-300 hover:shadow-md hover:scale-105 cursor-pointer group/service">
                <div className="mb-2 tracking-wide group-hover/service:text-amber-700 transition-colors duration-300">Consulting Services</div>
                <p className="text-neutral-600">Collection planning and curation guidance</p>
                <p className="mt-2 text-neutral-900 bg-gradient-to-r from-amber-600 to-rose-600 bg-clip-text text-transparent">$200/hour</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}