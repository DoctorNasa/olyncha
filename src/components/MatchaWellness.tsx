import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const benefits = [
  {
    title: "Rich Antioxidants",
    description: "Packed with catechins and polyphenols for optimal health",
    icon: "🌿"
  },
  {
    title: "Natural Energy",
    description: "Sustained energy boost without the crash",
    icon: "⚡"
  },
  {
    title: "Mental Clarity",
    description: "L-theanine promotes focus and relaxation",
    icon: "🧠"
  },
  {
    title: "Health & Beauty",
    description: "Anti-aging properties for skin and wellness",
    icon: "✨"
  }
];

export default function MatchaWellness() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#1a2f1a] mb-6">
            Experience Wellness with
            <br />
            <span className="text-[#8bc34a]">Every Sip</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the ancient secrets of matcha and how this premium green tea powder
            can transform your daily wellness routine.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl bg-[#f7f5f0]">
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-[#1a2f1a]">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl text-[#1a2f1a] leading-tight">
              Start Your Matcha Journey Today
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Join thousands of wellness enthusiasts who have made matcha part of their daily ritual. 
              From morning ceremonies to afternoon pick-me-ups, discover the perfect matcha for every moment.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#8bc34a] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">Premium grade ceremonial matcha</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#8bc34a] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">Sourced directly from Japanese tea gardens</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-[#8bc34a] rounded-full flex items-center justify-center">
                  <span className="text-white text-xs">✓</span>
                </div>
                <span className="text-gray-700">Traditional stone-ground process</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1649689603478-e78a70b29e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBncmVlbiUyMHRlYSUyMGN1cCUyMGNlcmFtaWN8ZW58MXx8fHwxNzU2NjY1MjU1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Matcha green tea cup"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}