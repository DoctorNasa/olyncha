import { Button } from "./ui/button";

export default function MatchaNavigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1a2f1a] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-semibold tracking-wider">MATON</h1>
            </div>
            
            <div className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-white hover:text-[#8bc34a] transition-colors text-sm flex items-center space-x-1">
                <span>Home</span>
                <span className="w-2 h-2 bg-[#8bc34a] rounded-full"></span>
              </a>
              <a href="#products" className="text-white/80 hover:text-[#8bc34a] transition-colors text-sm flex items-center space-x-1">
                <span>Products</span>
                <span className="text-xs">↗</span>
              </a>
              <a href="#testimonial" className="text-white/80 hover:text-[#8bc34a] transition-colors text-sm flex items-center space-x-1">
                <span>Testimonial</span>
                <span className="text-xs">↗</span>
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#signin" className="text-white/80 hover:text-[#8bc34a] transition-colors text-sm flex items-center space-x-1">
              <span>Sign in</span>
              <span className="text-xs">↗</span>
            </a>
            <a href="#cart" className="text-white/80 hover:text-[#8bc34a] transition-colors text-sm flex items-center space-x-1">
              <span>My Cart</span>
              <span className="text-xs">🛒</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}