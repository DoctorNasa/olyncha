'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const HeaderModern: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/menu', label: 'Menu' },
    { href: '/about', label: 'About' },
    { href: '/locations', label: 'Locations' },
    { href: '/order', label: 'Order' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-cream/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-matcha-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="text-2xl">🍵</span>
            </div>
            <span className="font-bold text-xl hidden sm:block">Olyn Cha</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:text-matcha-600 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/order"
              className="px-6 py-2 bg-matcha-500 text-white rounded-full text-sm font-semibold hover:scale-105 transition-transform"
            >
              Order Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:opacity-70 transition-opacity"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 w-full bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 bg-matcha-500 transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ top: '72px' }}
      >
        <nav className="flex flex-col p-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="text-white text-2xl font-semibold py-4 hover:opacity-80 transition-opacity"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/order"
            onClick={() => setIsMenuOpen(false)}
            className="mt-8 px-8 py-4 bg-white text-matcha-700 rounded-full text-center font-semibold hover:scale-105 transition-transform"
          >
            Order Now
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default HeaderModern;
