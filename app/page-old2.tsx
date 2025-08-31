'use client';

import React from 'react';
import Link from 'next/link';
import BadgeJP from '@/components/BadgeJP';
import DrinkCard from '@/components/DrinkCard';
import { MenuItem, Menu } from '@/types';
import menuDataJSON from '@/data/menu.json';
import siteConfig from '@/data/site.json';

const menuData = menuDataJSON as Menu;

export default function Home() {
  // Get featured drinks (exclude addon items)
  const featuredDrinks = menuData.sections
    .filter(section => section.id !== 'extras')
    .flatMap(section => section.items)
    .filter(item => item.featured) as MenuItem[];

  return (
    <>
      {/* Promo Banner */}
      {siteConfig.promoBanner.enabled && (
        <div 
          className="text-center py-2 text-white text-sm font-medium"
          style={{ backgroundColor: siteConfig.promoBanner.backgroundColor }}
        >
          <Link href={siteConfig.promoBanner.link} className="hover:opacity-90">
            {siteConfig.promoBanner.text}
          </Link>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              var(--color-matcha-600),
              var(--color-matcha-600) 10px,
              transparent 10px,
              transparent 20px
            )`
          }} />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <BadgeJP size="lg" className="mb-6 justify-center" />
          
          <h1 className="font-serif text-5xl md:text-7xl mb-4 animate-fade-in" 
              style={{ fontWeight: 600, color: 'var(--color-ink)' }}>
            Sip the Green.
          </h1>
          
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-80 animate-slide-up"
             style={{ animationDelay: '0.2s' }}>
            Premium matcha, crafted fresh in Rochester, NH.<br />
            Not-as-bitter, always photogenic.
          </p>
          
          <div className="flex gap-4 justify-center animate-slide-up"
               style={{ animationDelay: '0.4s' }}>
            <Link 
              href="/menu"
              className="px-8 py-3 rounded-full text-white font-medium transition-all hover:opacity-90 hover:scale-105"
              style={{ backgroundColor: 'var(--color-matcha-600)' }}
            >
              View Menu
            </Link>
            <Link 
              href="/order"
              className="px-8 py-3 rounded-full font-medium transition-all hover:scale-105 border-2"
              style={{ 
                borderColor: 'var(--color-matcha-600)',
                color: 'var(--color-matcha-600)'
              }}
            >
              Order Now
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cream to-transparent" />
      </section>

      {/* Featured Drinks */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-serif text-4xl text-center mb-4" style={{ fontWeight: 500 }}>
            Signature Selections
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our most beloved ceremonial matcha creations, carefully crafted for the perfect balance.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDrinks.map((item) => (
              <DrinkCard key={item.id} item={item} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/menu"
              className="inline-block px-8 py-3 rounded-full font-medium transition-all hover:scale-105 border-2"
              style={{ 
                borderColor: 'var(--color-matcha-600)',
                color: 'var(--color-matcha-600)'
              }}
            >
              Explore Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--color-matcha-900)' }}>
        <div className="container mx-auto px-4 text-cream">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl mb-6" style={{ fontWeight: 500 }}>
                From Uji to Rochester
              </h2>
              <p className="mb-4 opacity-90">
                We source our ceremonial-grade matcha directly from the historic tea fields of Uji, Kyoto. 
                Each batch is stone-ground to preserve its vibrant color and delicate flavor profile.
              </p>
              <p className="mb-6 opacity-90">
                Our signature &quot;not-as-bitter&quot; taste comes from using only the youngest tea leaves, 
                harvested at peak season and prepared at the perfect temperature of 175°F.
              </p>
              <Link 
                href="/about"
                className="inline-block px-6 py-2 rounded-full bg-cream text-matcha-900 font-medium hover:opacity-90 transition-opacity"
              >
                Our Story
              </Link>
            </div>
            <div className="relative h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-cream/10 rounded-full" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl">🍃</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl mb-4" style={{ fontWeight: 500 }}>
              Stay in the Loop
            </h2>
            <p className="text-gray-600 mb-8">
              Get updates on new seasonal drinks, exclusive offers, and matcha wisdom.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-matcha-600"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full text-white font-medium transition-opacity hover:opacity-90"
                style={{ backgroundColor: 'var(--color-matcha-600)' }}
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
