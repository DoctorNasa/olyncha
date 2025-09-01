import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const reviews = [
  {
    id: 1,
    name: "Ceremonial Grade Matcha",
    rating: 5,
    price: "$28.50",
    image: "https://images.unsplash.com/photo-1643185720431-9c050eebbc9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBwb3dkZXIlMjBib3dsJTIwYmFtYm9vfGVufDF8fHx8MTc1NjY2NTI0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    review: "Absolutely amazing quality! The taste is smooth and authentic.",
    reviewer: "Sarah M."
  },
  {
    id: 2,
    name: "Organic Matcha Blend",
    rating: 4,
    price: "$24.00",
    image: "https://images.unsplash.com/photo-1755685068178-4b57210ddcd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjB0ZWElMjBib3dsJTIwd2hpc2t8ZW58MXx8fHwxNzU2NjY1MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    review: "Perfect for daily use. Great value for the quality.",
    reviewer: "Michael K."
  },
  {
    id: 3,
    name: "Bamboo Whisk Set",
    rating: 5,
    price: "$18.00",
    image: "https://images.unsplash.com/photo-1755685682321-d4a38aa26214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBtYXRjaGElMjB3aGlzayUyMGNoYXNlbnxlbnwxfHx8fDE3NTY2NjUyNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    review: "Essential for proper matcha preparation. Excellent craftsmanship.",
    reviewer: "Emma L."
  }
];

export default function MatchaDiscovery() {
  return (
    <section className="py-20 bg-[#f7f5f0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-[#1a2f1a] mb-6">
            Discover the World of
            <br />
            <span className="text-[#8bc34a]">Matcha</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See what our customers are saying about their matcha journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <ImageWithFallback
                    src={review.image}
                    alt={review.name}
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-[#1a2f1a]">
                      {review.name}
                    </h3>
                    <div className="text-xl font-bold text-[#8bc34a]">
                      {review.price}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <span 
                        key={i} 
                        className={`text-lg ${i < review.rating ? 'text-[#ffd700]' : 'text-gray-300'}`}
                      >
                        ⭐
                      </span>
                    ))}
                    <span className="text-sm text-gray-500 ml-2">({review.rating}.0)</span>
                  </div>
                  
                  <p className="text-gray-600 text-sm italic">
                    "{review.review}"
                  </p>
                  
                  <div className="text-sm text-gray-500">
                    - {review.reviewer}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}