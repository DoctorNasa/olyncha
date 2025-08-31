import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const pairings = [
  {
    id: 1,
    name: "Matcha Tea",
    description: "Premium ceremonial grade matcha powder for authentic tea ceremonies",
    image: "https://images.unsplash.com/photo-1643185720431-9c050eebbc9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBwb3dkZXIlMjBib3dsJTIwYmFtYm9vfGVufDF8fHx8MTc1NjY2NTI0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Ceremonial Grade"
  },
  {
    id: 2,
    name: "Cake Mix",
    description: "Create delicious matcha-flavored desserts and baked goods",
    image: "https://images.unsplash.com/photo-1608833269765-a52366f7c40e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBsYXR0ZSUyMGZvYW0lMjBhcnR8ZW58MXx8fHwxNzU2NjY1MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Baking Essential"
  }
];

export default function MatchaPairing() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#1a2f1a] mb-6">
            Matcha Pairing
            <br />
            <span className="text-[#8bc34a]">Essentials</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Perfect combinations to enhance your matcha experience
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {pairings.map((pairing) => (
            <Card key={pairing.id} className="bg-gradient-to-br from-[#f7f5f0] to-[#e8f5e8] border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden group">
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={pairing.image}
                    alt={pairing.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#8bc34a] text-white px-3 py-1 rounded-full text-sm">
                      {pairing.category}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <div className="p-8 space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-[#1a2f1a]">
                      {pairing.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {pairing.description}
                    </p>
                  </div>
                  
                  <Button 
                    className="w-full bg-[#8bc34a] hover:bg-[#7cb342] text-white py-3 rounded-full text-lg font-semibold"
                  >
                    Explore Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}