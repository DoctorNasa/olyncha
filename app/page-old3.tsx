'use client';

import React from 'react';
import Link from 'next/link';
import { MenuItem, Menu } from '@/types';
import menuDataJSON from '@/data/menu.json';

const menuData = menuDataJSON as Menu;

export default function Home() {
  // Get featured drinks
  const featuredDrinks = menuData.sections
    .filter(section => section.id !== 'extras')
    .flatMap(section => section.items)
    .filter(item => item.featured)
    .slice(0, 3) as MenuItem[];

  return (
    <>
      {/* Hero Section - Whisk Style */}
      <section className="relative min-h-screen flex items-center overflow-hidden" 
               style={{ background: 'linear-gradient(135deg, #8bc34a 0%, #4a7c59 100%)' }}>
        
        {/* Large Typography Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <h1 className="text-[20vw] font-black text-white select-none">
            MATCHA
          </h1>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-7xl">🍵</span>
                <div>
                  <p className="text-sm font-medium opacity-90">ROCHESTER, NH</p>
                  <p className="text-xs opacity-70">EST. 2024</p>
                </div>
              </div>
              
              <h1 className="text-hero mb-6">
                whisk
              </h1>
              <p className="text-2xl font-light mb-8 opacity-90">
                enjoy matcha<br />
                your way at home
              </p>
              
              <div className="flex gap-4 mb-12">
                <div>
                  <p className="text-5xl font-bold">32</p>
                  <p className="text-sm opacity-70">varieties</p>
                </div>
                <div>
                  <p className="text-5xl font-bold">08</p>
                  <p className="text-sm opacity-70">locations</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Link href="/menu" 
                      className="px-8 py-4 bg-white text-matcha-700 rounded-full font-semibold hover:scale-105 transition-transform">
                  Explore Menu
                </Link>
                <Link href="/order" 
                      className="px-8 py-4 bg-transparent border-2 border-white rounded-full font-semibold hover:bg-white hover:text-matcha-700 transition-all">
                  Order Now
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-[600px] hidden lg:block">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-96 h-96 bg-white/20 rounded-full blur-3xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[200px]">🍵</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H0V120Z" 
                  fill="var(--color-cream)"/>
          </svg>
        </div>
      </section>

      {/* Sans Dish Section - Convenience */}
      <section className="py-32 bg-cream">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Visual */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-matcha-300 to-sage rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Illustration placeholder */}
                  <div className="text-center">
                    <div className="text-9xl mb-4">👤</div>
                    <p className="text-6xl font-bold text-white/80">sans<br/>dish</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div>
              <h2 className="text-display mb-8">
                convenience
              </h2>
              <p className="text-xl text-gray mb-8 leading-relaxed">
                We bring matcha to your doorstep — warm, refreshing, and full of convenience. Order through our app and experience the perfect cup without leaving home.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-12">
                <div className="bg-matcha-400 text-white rounded-2xl p-6">
                  <p className="text-3xl font-bold mb-2">15min</p>
                  <p className="text-sm opacity-90">average delivery</p>
                </div>
                <div className="bg-sage text-matcha-900 rounded-2xl p-6">
                  <p className="text-3xl font-bold mb-2">Fresh</p>
                  <p className="text-sm opacity-90">made to order</p>
                </div>
              </div>

              <Link href="/order" 
                    className="inline-flex items-center gap-3 px-8 py-4 bg-matcha-600 text-white rounded-full font-semibold hover:scale-105 transition-transform">
                Order Now
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview Section */}
      <section className="py-32" style={{ background: 'linear-gradient(180deg, var(--color-cream) 0%, var(--color-beige) 100%)' }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-display mb-4">menu</h2>
            <p className="text-xl text-gray">our signature collection</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredDrinks.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-gradient-to-br from-matcha-300 to-sage rounded-3xl overflow-hidden mb-6 relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-8xl group-hover:scale-110 transition-transform">🍵</span>
                  </div>
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-full px-4 py-2">
                    <p className="text-sm font-semibold">${Object.values(item.prices)[0]}</p>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                <p className="text-gray">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/menu" 
                  className="inline-flex items-center gap-3 px-8 py-4 bg-ink text-white rounded-full font-semibold hover:scale-105 transition-transform">
              View Full Menu
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Eco-Respect Section */}
      <section className="py-32 bg-matcha-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-display mb-4">eco-respect</h2>
            <p className="text-xl opacity-80">sustainable from seed to sip</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-matcha-600 rounded-full flex items-center justify-center">
                <span className="text-5xl">🌱</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">PREMIUM MATCHA</h3>
              <p className="opacity-80">Stone-ground ceremonial grade from sustainable farms in Uji</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-matcha-600 rounded-full flex items-center justify-center">
                <span className="text-5xl">♻️</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">ZERO WASTE</h3>
              <p className="opacity-80">Compostable packaging and cups, recycling program</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-matcha-600 rounded-full flex items-center justify-center">
                <span className="text-5xl">🚴</span>
              </div>
              <h3 className="text-2xl font-bold mb-3">ECO DELIVERY</h3>
              <p className="opacity-80">Electric bikes and vehicles for all local deliveries</p>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Grid Section */}
      <section className="py-32 bg-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-display mb-4">@theolyncha</h2>
            <p className="text-xl text-gray">join our matcha community</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="aspect-square bg-gradient-to-br from-matcha-300 to-sage rounded-2xl overflow-hidden group cursor-pointer">
                <div className="w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-6xl opacity-50">🍵</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a href="https://instagram.com/theolyncha" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-3 px-8 py-4 bg-ink text-white rounded-full font-semibold hover:scale-105 transition-transform">
              Follow Us
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.405a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-matcha-400">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-title mb-4">Stay in the blend</h2>
            <p className="text-lg mb-8 opacity-90">
              Get 10% off your first order and weekly matcha wisdom
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-6 py-4 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-white"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-matcha-700 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
