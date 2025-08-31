import { Button } from "./ui/button";
import matchaFooterImage from 'figma:asset/1229dccff855c644d9e7274ad4771c29b98fd14c.png';

export default function MatchaPromo() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#04160b] via-[#0b1e11] to-[#2b4226] text-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Navigation Links */}
            <div className="flex items-center space-x-8 text-sm mb-8">
              <div className="flex items-center space-x-1">
                <span className="w-2 h-2 bg-[#8bc34a] rounded-full"></span>
                <a href="#home" className="text-white hover:text-[#8bc34a] transition-colors">Home</a>
              </div>
              <a href="#products" className="text-white/80 hover:text-[#8bc34a] transition-colors">Products</a>
              <a href="#testimonials" className="text-white/80 hover:text-[#8bc34a] transition-colors">Testimonials</a>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl leading-tight">
                Save up to 50% or more
                <br />
                on matcha powder
              </h2>
              <p className="text-white/80 text-lg">
                Get 50% off our premium matcha powder this double data
              </p>
            </div>
            
            {/* Subscribe Button */}
            <div className="flex items-center space-x-4">
              <Button 
                size="lg" 
                className="bg-[#8bc34a] hover:bg-[#7cb342] text-white px-6 py-3 rounded-lg flex items-center space-x-2"
              >
                <span>Subscribe Us</span>
                <span className="text-sm">↗</span>
              </Button>
            </div>

            {/* Contact Information */}
            <div className="flex items-center space-x-8 text-lg pt-8">
              <span className="text-white">+62 812 3456 7890</span>
              <span className="text-white">maton@gmail.com</span>
            </div>

            {/* Product Links */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 pt-8">
              <a href="#matcha-powder" className="text-white/80 hover:text-[#8bc34a] transition-colors flex items-center space-x-2">
                <span>Matcha powder</span>
                <span className="text-xs">↗</span>
              </a>
              <a href="#starter-kit" className="text-white/80 hover:text-[#8bc34a] transition-colors flex items-center space-x-2">
                <span>Matcho starter kit</span>
                <span className="text-xs">↗</span>
              </a>
              <a href="#latte-mix" className="text-white/80 hover:text-[#8bc34a] transition-colors flex items-center space-x-2">
                <span>Matcha latte mix</span>
                <span className="text-xs">↗</span>
              </a>
              <a href="#cake-powder" className="text-white/80 hover:text-[#8bc34a] transition-colors flex items-center space-x-2">
                <span>Matcho cake powder</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          </div>
          
          {/* Right Image */}
          <div className="relative flex justify-center lg:justify-end">
            <img 
              src={matchaFooterImage} 
              alt="Matcha bowls with whisk and pouring matcha" 
              className="w-full max-w-lg h-auto object-contain"
            />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between pt-16 mt-16 border-t border-white/10">
          <div className="text-white/60 text-sm mb-4 md:mb-0">
            maton © 2024
          </div>
          <div className="flex items-center space-x-8 text-sm">
            <a href="#privacy" className="text-white/60 hover:text-[#8bc34a] transition-colors">Privacy & policy</a>
            <a href="#terms" className="text-white/60 hover:text-[#8bc34a] transition-colors">Terms & conditions</a>
          </div>
        </div>
      </div>
      
      {/* Background decorative elements */}
      <div className="absolute top-1/4 right-10 w-32 h-32 bg-[#8bc34a]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-10 w-24 h-24 bg-[#8bc34a]/5 rounded-full blur-2xl"></div>
    </section>
  );
}