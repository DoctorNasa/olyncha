import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import heroImage from 'figma:asset/268155b88a99b93dca7e9010c841e35262c6398b.png';

export default function MatchaHero() {
  return (
    <section className="pt-16 min-h-screen bg-[#1a2f1a] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="relative grid grid-cols-12 gap-6 items-center min-h-[600px]">
          
          {/* Main Heading - Center Top */}
          <div className="col-span-12 text-center mb-8">
            <h1 className="text-6xl md:text-8xl leading-tight font-light">
              Best Matcha
              <br />
              <span className="text-white">in Town</span>
            </h1>
          </div>

          {/* Left Side Content */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            {/* Free Starter Kits */}
            <div className="space-y-4">
              <h3 className="text-xl">Free Starter Kits</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Free beginner or starter kit with
                <br />
                purchases over $50.
              </p>
            </div>

            {/* Small Product Images */}
            <div className="flex space-x-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1621453571889-0b228e998080?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBwb3dkZXIlMjBib3dsJTIwc21hbGx8ZW58MXx8fHwxNzU2NjY2MTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Matcha powder bowl"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1725799957338-51f677c0ffa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjB0ZWElMjBjdXAlMjBncmVlbnxlbnwxfHx8fDE3NTY2NjYxNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Matcha tea cup"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Shipping Offer */}
            <div className="space-y-2">
              <p className="text-sm text-white/80">
                We offer free shipping on orders 
                <br />
                over $30! 🚚 Limited time only!
              </p>
            </div>

            {/* Japanese Text */}
            <div className="mt-12">
              <h4 className="text-2xl font-light tracking-wider">プレミアム抹茶</h4>
            </div>
          </div>

          {/* Center Image - Large Matcha Bowl */}
          <div className="col-span-12 lg:col-span-4 flex justify-center items-center">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Premium matcha bowl with whisk" 
                className="w-full max-w-md h-auto object-contain"
              />
            </div>
          </div>

          {/* Right Side Content */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            {/* Small Matcha Cup - Top Right */}
            <div className="flex justify-end mb-8">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-white/10 p-2">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1725799957338-51f677c0ffa3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjB0ZWElMjBjdXAlMjBncmVlbnxlbnwxfHx8fDE3NTY2NjYxNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Matcha tea cup"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Premium Matcha Section */}
            <div className="text-right space-y-4">
              <h3 className="text-xl">Premium Matcha</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Premium quality, made from
                <br />
                first-harvest tea leaves.
              </p>
              
              {/* Weight */}
              <div className="text-3xl font-light mt-8">
                30gr
              </div>

              {/* Shop Now Button */}
              <div className="mt-6">
                <Button 
                  size="lg" 
                  className="bg-[#8bc34a] hover:bg-[#7cb342] text-white px-8 py-3 rounded-lg text-sm font-medium"
                >
                  Shop Now ↗
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-[#8bc34a]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-24 h-24 bg-[#8bc34a]/5 rounded-full blur-2xl"></div>
    </section>
  );
}