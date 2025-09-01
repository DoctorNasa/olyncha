'use client';

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-green-900 to-green-700 text-white">
        <div className="absolute inset-0 bg-black/20" />
        
        <div className="relative z-10 container mx-auto px-4 py-16">
          {/* Stats Row */}
          <div className="flex justify-between items-start mb-24">
            <div className="text-left">
              <div className="text-6xl md:text-7xl font-bold leading-none">32</div>
              <div className="text-xs uppercase tracking-wider mt-2 opacity-80">
                Signature<br/>Drinks
              </div>
            </div>
            
            <div className="text-right">
              <div className="text-6xl md:text-7xl font-bold leading-none">58</div>
              <div className="text-xs uppercase tracking-wider mt-2 opacity-80">
                Local & Global<br/>Sourcing
              </div>
            </div>
          </div>

          {/* Center Title */}
          <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
            <h1 className="text-7xl md:text-8xl lg:text-9xl font-serif font-bold mb-4">
              Olyn Cha
            </h1>
            <p className="text-sm uppercase tracking-[0.3em] opacity-80">
              Enjoy Matcha<br/>With Whisk
            </p>
          </div>

          {/* Bottom Stats */}
          <div className="flex justify-between items-end mt-24">
            <div className="text-left">
              <div className="text-6xl md:text-7xl font-bold leading-none">2K</div>
              <div className="text-xs uppercase tracking-wider mt-2 opacity-80">
                Loyal<br/>Customers
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="w-20 h-20 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-5xl">🍵</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-200 to-green-400 rounded-full flex items-center justify-center mb-6">
                <span className="text-6xl">🧑‍🍳</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Expert Crafted</h3>
              <p className="text-gray-600 text-center">Premium matcha drinks crafted by experienced baristas</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-green-200 to-green-400 rounded-full flex items-center justify-center mb-6">
                <span className="text-6xl">🥤</span>
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">Fresh Daily</h3>
              <p className="text-gray-600 text-center">Made fresh every day with premium ingredients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-8 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <nav>
            <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm uppercase tracking-wider text-gray-600">
              <li><Link href="/menu" className="hover:text-green-600 transition-colors">Signature Menu</Link></li>
              <li><Link href="/menu#powder" className="hover:text-green-600 transition-colors">Matcha Powder</Link></li>
              <li><Link href="/menu#kit" className="hover:text-green-600 transition-colors">Matcha Kit</Link></li>
              <li><Link href="/about#events" className="hover:text-green-600 transition-colors">Events</Link></li>
              <li><Link href="/menu#merchandise" className="hover:text-green-600 transition-colors">Merchandise</Link></li>
            </ul>
          </nav>
        </div>
      </section>

      {/* Convenience Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-center mb-12">
            Convenience
          </h2>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block">
              <div className="w-48 h-48 bg-gradient-to-br from-green-300 to-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-7xl">🍵</span>
              </div>
              
              {/* Feature Pills */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  Like Matcha
                </span>
                <span className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm font-medium">
                  Matcha in New Wave
                </span>
                <span className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                  Matcha Powder
                </span>
                <span className="bg-red-400 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Matcha Cookies
                </span>
              </div>
            </div>
            
            <p className="text-gray-600 max-w-md mx-auto mb-8">
              We're not just selling matcha — we're delivering an experience 
              you can see, feel and taste right in your home
            </p>
            
            <Link href="/menu">
              <button className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors">
                SHOP CONVENIENT
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="font-serif">Our</span> Menu
            </h2>
            <Link href="/menu">
              <button className="bg-red-400 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-red-500 transition-colors">
                CONVENIENT PRODUCTS
              </button>
            </Link>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Product 1 */}
            <div className="group">
              <div className="text-sm text-gray-500 flex justify-between mb-2">
                <span>01</span>
                <span>DRINKS</span>
              </div>
              <div className="aspect-square bg-gradient-to-br from-pink-100 to-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                <span className="text-6xl">🍓</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">STRAWBERRY MATCHA</h3>
                  <p className="text-sm text-gray-600">Strawberry puree, premium matcha</p>
                </div>
                <span className="font-bold text-lg">$3.5</span>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group">
              <div className="text-sm text-gray-500 flex justify-between mb-2">
                <span>02</span>
                <span>DRINKS</span>
              </div>
              <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                <span className="text-6xl">☕</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">MATCHA LATTE</h3>
                  <p className="text-sm text-gray-600">Our signature premium matcha</p>
                </div>
                <span className="font-bold text-lg">$3.5</span>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group">
              <div className="text-sm text-gray-500 flex justify-between mb-2">
                <span>03</span>
                <span>DRINKS</span>
              </div>
              <div className="aspect-square bg-gradient-to-br from-yellow-100 to-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow">
                <span className="text-6xl">🍋</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold">MATCHA LEMONADE</h3>
                  <p className="text-sm text-gray-600">Refreshing lemonade with matcha</p>
                </div>
                <span className="font-bold text-lg">$3.5</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🌿</span>
              </div>
              <h4 className="font-semibold mb-1">PREMIUM MATCHA</h4>
              <p className="text-sm text-gray-600">The best premium matcha from Uji, Kyoto</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💧</span>
              </div>
              <h4 className="font-semibold mb-1">SPILL PROOF</h4>
              <p className="text-sm text-gray-600">Spill-proof packaging without plastic waste</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🚴</span>
              </div>
              <h4 className="font-semibold mb-1">FAST DELIVERY</h4>
              <p className="text-sm text-gray-600">We'll get your matcha to you in a flash</p>
            </div>
          </div>
        </div>
      </section>

      {/* Eco-Respect Section */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-center mb-12">
            Eco-Respect
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-green-300 to-green-500 rounded-lg flex items-center justify-center mb-8">
              <span className="text-8xl opacity-50">🍵</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <button className="bg-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-300 transition-colors">
                FRESH MATCHA
              </button>
              <button className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                MATCHA PRODUCT
              </button>
              <button className="bg-white border border-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-50 transition-colors">
                PRODUCT KITS
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="aspect-square bg-gradient-to-br from-green-200 to-green-300 rounded-lg flex items-center justify-center">
                <span className="text-5xl">🥤</span>
              </div>
              <div className="aspect-square bg-gradient-to-br from-green-300 to-green-400 rounded-lg flex items-center justify-center">
                <span className="text-5xl">🍵</span>
              </div>
              <div className="aspect-square bg-gradient-to-br from-green-200 to-green-300 rounded-lg flex items-center justify-center">
                <span className="text-5xl">📦</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
