'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';

const HeaderModern: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { toggleCart, getItemCount } = useCart();
  const { state: authState, logout } = useAuth();

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
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl py-4 shadow-lg border-b border-gray-100'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 bg-gradient-matcha rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg">
              <span className="text-2xl">🍵</span>
              <div className="absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <span className="font-playfair font-bold text-2xl bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
                Olyn Cha
              </span>
              <p className="text-xs text-gray-500 -mt-1">Premium Matcha</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-sm font-medium text-gray-700 hover:text-green-600 transition-all duration-200 group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-matcha group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}

            <button
              onClick={toggleCart}
              className="relative p-3 bg-gray-50 hover:bg-green-50 rounded-2xl transition-all duration-200 hover:scale-105 group"
            >
              <ShoppingBagIcon className="w-6 h-6 text-gray-600 group-hover:text-green-600 transition-colors" />
              {getItemCount() > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-matcha text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-semibold animate-pulse-slow">
                  {getItemCount()}
                </span>
              )}
            </button>

            {/* User Menu */}
            {authState.isAuthenticated ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center gap-3 px-4 py-2 bg-gray-50 hover:bg-green-50 rounded-2xl transition-all duration-200 hover:scale-105 group"
                >
                  <div className="w-8 h-8 bg-gradient-matcha rounded-full flex items-center justify-center">
                    <UserIcon className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-green-600">
                    {authState.user?.name || 'User'}
                  </span>
                </button>

                {showUserMenu && (
                  <div className="absolute right-0 top-full mt-3 w-56 bg-white rounded-2xl shadow-xl border border-gray-100 py-3 z-50 animate-scale-in">
                    <div className="px-4 py-2 border-b border-gray-100">
                      <p className="text-sm font-semibold text-gray-900">{authState.user?.name}</p>
                      <p className="text-xs text-gray-500">{authState.user?.email}</p>
                    </div>
                    <Link
                      href="/profile"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      onClick={() => setShowUserMenu(false)}
                    >
                      👤 Profile Settings
                    </Link>
                    <Link
                      href="/orders"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      onClick={() => setShowUserMenu(false)}
                    >
                      📦 Order History
                    </Link>
                    <Link
                      href="/favorites"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600 transition-colors"
                      onClick={() => setShowUserMenu(false)}
                    >
                      ❤️ Favorites
                    </Link>
                    <hr className="my-2 border-gray-100" />
                    <button
                      onClick={() => {
                        logout();
                        setShowUserMenu(false);
                      }}
                      className="block w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors"
                    >
                      🚪 Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link
                href="/auth/login"
                className="btn btn-secondary px-6 py-2 text-sm font-semibold"
              >
                Sign In
              </Link>
            )}

            <Link
              href="/menu"
              className="btn btn-primary px-6 py-2 text-sm font-semibold shadow-lg"
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
            href="/menu"
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
