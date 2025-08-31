export default function MatchaFooter() {
  return (
    <footer className="bg-[#1a2f1a] text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold tracking-wider">MATCHA</h3>
            <p className="text-white/70 text-sm">
              Premium Japanese matcha for a healthier lifestyle.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Products</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-[#8bc34a] transition-colors">Ceremonial Grade</a></li>
              <li><a href="#" className="hover:text-[#8bc34a] transition-colors">Premium Matcha</a></li>
              <li><a href="#" className="hover:text-[#8bc34a] transition-colors">Accessories</a></li>
              <li><a href="#" className="hover:text-[#8bc34a] transition-colors">Gift Sets</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-[#8bc34a] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#8bc34a] transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-[#8bc34a] transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-[#8bc34a] transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-semibold">Support</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#" className="hover:text-[#8bc34a] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#8bc34a] transition-colors">Shipping</a></li>
              <li><a href="#" className="hover:text-[#8bc34a] transition-colors">Returns</a></li>
              <li><a href="#" className="hover:text-[#8bc34a] transition-colors">Customer Care</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-white/60">
          <p>© 2024 Matcha. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-[#8bc34a] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#8bc34a] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#8bc34a] transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}