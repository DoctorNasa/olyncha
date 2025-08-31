import React from 'react';
import DrinkCard from '@/components/DrinkCard';
import BadgeJP from '@/components/BadgeJP';
import { Menu } from '@/types';
import menuDataJSON from '@/data/menu.json';
import { Metadata } from 'next';

const menuData = menuDataJSON as Menu;

export const metadata: Metadata = {
  title: 'Menu | The Olyn Cha - Premium Matcha Tea',
  description: 'Explore our selection of ceremonial matcha drinks. From our signature Midori-kaze to seasonal specials.',
};

export default function MenuPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-cream to-white">
        <div className="container mx-auto px-4 text-center">
          <BadgeJP size="md" className="mb-4 justify-center" />
          <h1 className="font-serif text-5xl mb-4" style={{ fontWeight: 600 }}>
            Our Menu
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each drink is crafted with ceremonial-grade matcha from Uji, Kyoto. 
            Not-as-bitter, always vibrant.
          </p>
        </div>
      </section>

      {/* Menu Sections */}
      {menuData.sections.map((section) => (
        <section key={section.id} className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl mb-3" style={{ fontWeight: 500 }}>
                {section.title}
              </h2>
              {section.description && (
                <p className="text-gray-600 max-w-2xl mx-auto">
                  {section.description}
                </p>
              )}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items
                .filter(item => item.img !== null || section.id === 'extras')
                .map((item) => (
                  <DrinkCard key={item.id} item={item} />
                ))}
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="py-20 bg-matcha-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl mb-4" style={{ fontWeight: 500 }}>
            Ready to Order?
          </h2>
          <p className="mb-8 max-w-2xl mx-auto opacity-90">
            Visit us in Rochester or order online for pickup and delivery.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/order"
              className="px-8 py-3 rounded-full bg-white text-matcha-600 font-medium hover:opacity-90 transition-opacity"
            >
              Order Online
            </a>
            <a
              href="/locations"
              className="px-8 py-3 rounded-full border-2 border-white text-white font-medium hover:bg-white hover:text-matcha-600 transition-colors"
            >
              Find Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
