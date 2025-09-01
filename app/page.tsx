'use client';

import React from 'react';

export default function Home() {
  return (
    <>
      {/* Hero Header */}
      <header className="relative h-screen text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900 to-green-700">
          {/* Placeholder for hero background */}
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 p-8 md:p-12">
          {/* Top Stats */}
          <div className="flex justify-between items-start">
            <div className="flex items-start transition-transform duration-300 hover:scale-110">
              <span className="font-playfair text-7xl md:text-8xl font-bold">32</span>
              <span className="mt-2 ml-2 text-xs uppercase">Signature<br/>Drinks</span>
            </div>
            <div className="text-right transition-transform duration-300 hover:scale-110">
              <span className="font-playfair text-7xl md:text-8xl font-bold">08</span>
              <span className="block mt-2 text-xs uppercase">Local &amp; global<br/>sourcing</span>
            </div>
          </div>

          {/* Bottom Left Stat */}
          <div className="absolute bottom-24 left-8 md:left-12 transition-transform duration-300 hover:scale-110">
            <span className="font-playfair text-7xl md:text-9xl font-bold">2K</span>
            <span className="block text-xs uppercase">Loyal<br/>Customers</span>
          </div>

          {/* Center Title */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center transition-transform duration-300 hover:rotate-[-2deg]">
            <h1 className="font-playfair text-7xl md:text-9xl leading-none font-bold">whisk</h1>
            <p className="uppercase text-xs tracking-[0.3em] mt-2">enjoy matcha<br/>with whisk</p>
          </div>

          {/* Bottom Right Image */}
          <div className="absolute bottom-12 right-12 transition-transform duration-300 hover:rotate-12 hover:scale-110">
            <div className="w-24 h-24 bg-green-600/30 rounded-lg flex items-center justify-center">
              <span className="text-5xl">🍵</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Split Section */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-100 p-8 md:p-16 flex items-center justify-center overflow-hidden">
            <div className="max-w-xs w-full transition-transform duration-500 hover:scale-110 hover:rotate-3">
              <div className="aspect-square bg-gradient-to-br from-green-300 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-8xl">🧑‍🍳</span>
              </div>
            </div>
          </div>
          <div className="bg-stone-100 p-8 md:p-16 flex items-center justify-center overflow-hidden">
            <div className="max-w-xs w-full transition-transform duration-500 hover:scale-110 hover:-rotate-3">
              <div className="aspect-square bg-gradient-to-br from-green-200 to-green-400 rounded-full flex items-center justify-center">
                <span className="text-8xl">🥤</span>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Menu */}
        <nav className="py-6 border-b border-t border-gray-200">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs uppercase tracking-[0.2em] text-gray-500">
            <li><a className="hover:text-black hover:font-bold transition-all" href="#menu">Signature Menu</a></li>
            <li><a className="hover:text-black hover:font-bold transition-all" href="#powder">Matcha Powder</a></li>
            <li><a className="hover:text-black hover:font-bold transition-all" href="#kit">Matcha Kit</a></li>
            <li><a className="hover:text-black hover:font-bold transition-all" href="#events">Sans at Events</a></li>
            <li><a className="hover:text-black hover:font-bold transition-all" href="#merch">Merchandise</a></li>
          </ul>
        </nav>

        {/* Convenience Section */}
        <section className="text-center py-20 px-4 bg-[#F0F5F1]">
          <h2 className="text-6xl md:text-7xl font-playfair font-bold mb-12 transition-transform duration-300 hover:scale-105">
            convenience
          </h2>
          
          <div className="relative inline-block">
            <div className="w-48 mx-auto animate-float">
              <div className="aspect-square bg-gradient-to-br from-green-300 to-green-500 rounded-full flex items-center justify-center">
                <span className="text-8xl">🍵</span>
              </div>
            </div>
            
            {/* Floating buttons */}
            <div className="hidden md:block absolute top-1/4 -left-32">
              <button className="bg-lime-300 text-black text-xs font-bold py-2 px-4 rounded-full transition-all duration-300 hover:bg-lime-400 hover:scale-110 hover:shadow-lg">
                LIKE MATCHA
              </button>
            </div>
            <div className="hidden md:block absolute top-1/2 -left-48 mt-4">
              <button className="bg-white border border-gray-300 text-gray-700 text-xs font-bold py-2 px-4 rounded-full transition-all duration-300 hover:bg-gray-100 hover:scale-110 hover:shadow-lg">
                MATCHA IN NEW WAVE
              </button>
            </div>
            <div className="hidden md:block absolute top-1/2 -right-48 mt-4">
              <button className="bg-lime-300 text-black text-xs font-bold py-2 px-4 rounded-full transition-all duration-300 hover:bg-lime-400 hover:scale-110 hover:shadow-lg">
                MATCHA POWDER
              </button>
            </div>
            <div className="hidden md:block absolute top-1/4 -right-32">
              <button className="bg-red-400 text-white text-xs font-bold py-2 px-4 rounded-full transition-all duration-300 hover:bg-red-500 hover:scale-110 hover:shadow-lg">
                MATCHA COOKIES
              </button>
            </div>
          </div>
          
          <p className="max-w-md mx-auto text-gray-600 mt-24">
            We&apos;re not just selling matcha — we&apos;re delivering an experience you can see, feel and trap our taste right in your home
          </p>
          
          <div className="mt-8 flex justify-center space-x-4">
            <button className="bg-green-700 text-white py-3 px-6 rounded-full text-sm font-semibold transition-transform duration-300 hover:bg-green-800 hover:scale-105">
              SHOP CONVENIENT
            </button>
          </div>
        </section>

        {/* Second Navigation */}
        <nav className="py-6 border-b border-t border-gray-200">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-8 text-xs uppercase tracking-[0.2em] text-gray-500">
            <li><a className="hover:text-black hover:font-bold transition-all" href="#menu">Signature Menu</a></li>
            <li><a className="hover:text-black hover:font-bold transition-all" href="#powder">Matcha Powder</a></li>
            <li><a className="hover:text-black hover:font-bold transition-all" href="#kit">Matcha Kit</a></li>
            <li><a className="hover:text-black hover:font-bold transition-all" href="#events">Sans at Events</a></li>
            <li><a className="hover:text-black hover:font-bold transition-all" href="#merch">Merchandise</a></li>
          </ul>
        </nav>

        {/* Menu Section */}
        <section className="py-20 px-4">
          <div className="text-center">
            <div className="mx-auto w-auto h-24 flex justify-center items-center transition-transform duration-500 hover:rotate-[360deg]">
              <span className="text-6xl font-bold">sd</span>
              <span className="text-4xl ml-2">menu</span>
            </div>
            <button className="mt-8 bg-red-400 text-white py-2 px-5 rounded-full text-xs font-bold transition-all duration-300 hover:bg-red-500 hover:scale-110">
              CONVENIENT PRODUCTS
            </button>
          </div>

          {/* Product Grid */}
          <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="text-left group">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-gray-500">01</span>
                <span className="text-xs text-gray-500">DRINKS</span>
              </div>
              <div className="overflow-hidden rounded-lg my-4">
                <div className="w-full aspect-square bg-gradient-to-br from-pink-200 to-green-200 rounded-lg transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                  <span className="text-6xl">🍓</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-bold">STRAWBERRY MATCHA</h3>
                <span className="font-bold text-lg">$3.5</span>
              </div>
              <p className="text-gray-500 text-sm">Strawberry puree, premium matcha</p>
            </div>

            {/* Product 2 */}
            <div className="text-left group">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-gray-500">02</span>
                <span className="text-xs text-gray-500">DRINKS</span>
              </div>
              <div className="overflow-hidden rounded-lg my-4">
                <div className="w-full aspect-square bg-gradient-to-br from-green-200 to-green-300 rounded-lg transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                  <span className="text-6xl">☕</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-bold">MATCHA LATTE</h3>
                <span className="font-bold text-lg">$3.5</span>
              </div>
              <p className="text-gray-500 text-sm">Our signature premium matcha desserts</p>
            </div>

            {/* Product 3 */}
            <div className="text-left group">
              <div className="flex justify-between items-baseline">
                <span className="text-xs text-gray-500">03</span>
                <span className="text-xs text-gray-500">DRINKS</span>
              </div>
              <div className="overflow-hidden rounded-lg my-4">
                <div className="w-full aspect-square bg-gradient-to-br from-yellow-200 to-green-200 rounded-lg transition-transform duration-300 group-hover:scale-110 flex items-center justify-center">
                  <span className="text-6xl">🍋</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="font-bold">MATCHA LEMONADE</h3>
                <span className="font-bold text-lg">$3.5</span>
              </div>
              <p className="text-gray-500 text-sm">Refreshing lemonade with a matcha shot</p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mt-20 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="mx-auto h-20 w-20 bg-green-100 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:animate-bounce">
                <span className="text-4xl">🌿</span>
              </div>
              <h4 className="font-bold mt-4">PREMIUM MATCHA</h4>
              <p className="text-gray-500 text-sm">The best premium matcha from Uji, Kyoto</p>
            </div>
            
            <div className="group">
              <div className="mx-auto h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:animate-bounce">
                <span className="text-4xl">💧</span>
              </div>
              <h4 className="font-bold mt-4">SPILL PROOF</h4>
              <p className="text-gray-500 text-sm">Spill-proof packaging without a single<br/>plastic waste</p>
            </div>
            
            <div className="group">
              <div className="mx-auto h-20 w-20 bg-yellow-100 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:animate-bounce">
                <span className="text-4xl">🚴</span>
              </div>
              <h4 className="font-bold mt-4">FAST AF DELIVERY</h4>
              <p className="text-gray-500 text-sm">We&apos;ll get your matcha to you in a flash</p>
            </div>
          </div>
        </section>

        {/* Eco-Respect Section */}
        <section className="bg-[#F0F5F1] py-20 px-4">
          <h2 className="text-6xl md:text-8xl font-playfair font-bold text-center mb-12 transition-transform duration-300 hover:tracking-wider">
            eco-respect
          </h2>
          
          <div className="relative group max-w-6xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-green-300 to-green-500 rounded-lg overflow-hidden">
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-9xl opacity-50">🍵</span>
              </div>
            </div>
            
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-lg"></div>
            
            {/* Navigation arrows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white p-3 rounded-full shadow-lg transition-transform hover:scale-110">
                <svg className="h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
              <button className="bg-white p-3 rounded-full shadow-lg transition-transform hover:scale-110">
                <svg className="h-6 w-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
              </button>
            </div>
          </div>

          {/* Category Buttons */}
          <div className="mt-12 flex justify-center flex-wrap gap-4">
            <button className="text-xs font-bold py-2 px-4 rounded-full bg-lime-300 text-black transition-all duration-300 hover:bg-lime-400 hover:shadow-md hover:-translate-y-1">
              FRESH MATCHA
            </button>
            <button className="text-xs font-bold py-2 px-4 rounded-full border border-gray-400 text-gray-600 transition-all duration-300 hover:bg-gray-100 hover:shadow-md hover:-translate-y-1">
              MATCHA PRODUCT
            </button>
            <button className="text-xs font-bold py-2 px-4 rounded-full border border-gray-400 text-gray-600 transition-all duration-300 hover:bg-gray-100 hover:shadow-md hover:-translate-y-1">
              PRODUCT KITS
            </button>
          </div>

          {/* Image Grid */}
          <div className="mt-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="aspect-square bg-gradient-to-br from-green-200 to-green-400 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center">
              <span className="text-6xl">🥤</span>
            </div>
            <div className="aspect-square bg-gradient-to-br from-green-300 to-green-500 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center">
              <span className="text-6xl">🍵</span>
            </div>
            <div className="aspect-square bg-gradient-to-br from-green-200 to-green-300 rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center">
              <span className="text-6xl">📦</span>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .font-playfair {
          font-family: 'Playfair Display', 'Georgia', serif;
        }
      `}</style>
    </>
  );
}
