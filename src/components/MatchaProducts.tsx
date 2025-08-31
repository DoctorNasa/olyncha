import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const products = [
  {
    id: 1,
    name: "Premium Matcha Set",
    description: "Traditional bamboo whisk with ceramic bowl",
    price: "$25",
    image: "https://images.unsplash.com/photo-1755685682321-d4a38aa26214?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYW1ib28lMjBtYXRjaGElMjB3aGlzayUyMGNoYXNlbnxlbnwxfHx8fDE3NTY2NjUyNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Matcha Mug"
  },
  {
    id: 2,
    name: "Ceremonial Grade",
    description: "Authentic Japanese matcha powder",
    price: "$35",
    image: "https://images.unsplash.com/photo-1643185720431-9c050eebbc9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBwb3dkZXIlMjBib3dsJTIwYmFtYm9vfGVufDF8fHx8MTc1NjY2NTI0Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Organic Matcha"
  },
  {
    id: 3,
    name: "Artisan Tea Bowl",
    description: "Handcrafted ceramic matcha bowl",
    price: "$45",
    image: "https://images.unsplash.com/photo-1672354198778-b9da86b06d99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjB0ZWElMjBjZXJlbW9ueSUyMHdvb2RlbnxlbnwxfHx8fDE3NTY2NjUyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    category: "Ceramic Bowl"
  }
];

export default function MatchaProducts() {
  return (
    <section className="py-20 bg-[#f7f5f0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card key={product.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#8bc34a] text-white px-3 py-1 rounded-full text-sm">
                      {product.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-[#1a2f1a]">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {product.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold text-[#1a2f1a]">
                      {product.price}
                    </div>
                    <Button 
                      size="sm"
                      className="bg-[#8bc34a] hover:bg-[#7cb342] text-white rounded-full px-6"
                    >
                      Add to Cart
                    </Button>
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