
'use client';

import React from 'react';
import Link from 'next/link';
import HomeProductShowcase from '@/components/HomeProductShowcase';
import { featuredProducts, homeFeatures } from '@/data/products';

const CATEGORY_LINKS = [
  { href: '/menu', label: 'Signature Menu' },
  { href: '/menu#powder', label: 'Matcha Powder' },
  { href: '/menu#kit', label: 'Matcha Kit' },
  { href: '/about#events', label: 'Sans at Events' },
  { href: '/menu#merchandise', label: 'Merchandise' },
];

interface CategoryNavProps {
  className?: string;
}

function CategoryNav({ className = '' }: CategoryNavProps) {
  return (
    <nav className={`py-6 border-y border-gray-200 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-3 text-[10px] sm:text-xs leading-4 uppercase tracking-[0.15em] sm:tracking-[0.25em] text-gray-500 place-items-center">
          {CATEGORY_LINKS.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="transition-all hover:text-black hover:font-semibold"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden bg-gradient-warm text-gray-900">
      {/* Hero Section */}
      <section className="relative min-h-screen text-white overflow-hidden flex items-center">
        <div className="absolute inset-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJuESxaKIQMjctTM0p2kzRM_3KRrpMUzv9h8tVNFsMlXG7ViaJ2HlCy_lftswdIXPwW00tHkGB3tD54n8Pq9oG12pmvngtQpErSSZ_pluv5OviPsPnEuKj4hAtEGnwdJ1ptccXoY8OjCPf-lJi_jDSY2GM0GYl_WajEDA0ccIfSZfq1C-haN73tv0oLQewdaimJLFe_SExTBkPJCuMjQPDa6t49CGZYy9zzQm7hQ9-D00lb0_NVkV4Hme1VQuBfcr43sLSOnuuaiU"
            alt="Matcha hero background"
            className="h-full w-full object-cover scale-105 animate-pulse-slow"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-black/30 to-green-900/40" />

        {/* Floating Elements - Responsive positioning */}
        <div className="absolute top-16 left-4 sm:top-20 sm:left-10 w-16 h-16 sm:w-20 sm:h-20 bg-white/10 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-32 right-4 sm:top-40 sm:right-20 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-24 left-4 sm:bottom-32 sm:left-20 w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 container mx-auto h-full px-4 sm:px-6 py-20 sm:py-32 flex items-center justify-center">
          <div className="w-full max-w-4xl text-center animate-fade-in">
            <div className="mb-6 sm:mb-8">
              <span className="inline-block px-4 py-2 sm:px-6 sm:py-2 bg-white/20 backdrop-blur-sm rounded-full text-xs sm:text-sm font-medium text-white/90 mb-4 sm:mb-6">
                🍵 Premium Japanese Matcha Experience
              </span>
            </div>
            <h1 className="text-hero font-playfair mb-6 sm:mb-8 bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
              olyncha
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-light text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4">
              Discover the authentic taste of premium matcha,
              <br className="hidden sm:block" />
              crafted with tradition and delivered with love
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
              <Link
                href="/menu"
                className="btn btn-primary w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-2xl hover:shadow-green-500/25 transition-all duration-300"
              >
                Explore Menu
              </Link>
              <Link
                href="/about"
                className="btn btn-secondary w-full sm:w-auto bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-white/70 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <main>
        {/* Image Gallery Section */}
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-100 p-6 sm:p-10 md:p-16 flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
            <div className="w-full max-w-[280px] hover-lift">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiAuphwsGqtc-fnNsD0gxfc_8Jcl-FWLlAKefwa9FCeQXpiovIBat_zS-MOeu2Q4NlzkmcuRr5RL3sIl97f-QoAdBb62b0N9kCaWxzboffNvYAjg1zt3AYOTF_q0SzwgilztE3AXEeW4-cy6rox_rcHxvmWVaZrvC3rCxsreI0jqOw7YDBzJE2hiRjdPxso9KnlrlY8lW5JDs4kTAb9XSPzftxLrX1QFw2c8bs8x0zYGVIgVI0MEFy4ZA283_GoLQQBPFnNX-v9V8"
                alt="Olyncha mascot"
                className="w-full h-auto rounded-[18px] shadow-lg transition-all duration-300 hover:shadow-xl"
              />
            </div>
          </div>
          <div className="bg-stone-100 p-6 sm:p-10 md:p-16 flex items-center justify-center min-h-[300px] sm:min-h-[400px]">
            <div className="w-full max-w-[280px] hover-lift">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7no3v_suebCORqhLJo6JAANgQaguQOs_Ajp5KMi5yLW9VsM_uX3soQl7LIxvY1H9R1lmk8AU7RhcqnnqfNBMuXfk0ige2LCfb65gQRuuEizt0CkYc5EVrRgpOL3A1fJHxeuKkSKp46f9hxqrSFWPk40ej9b4z4nGd5ACAVIzseJ_oa_vnG85xw41fpcr1dV4iQ-B30ex2Cav8LeA-mWDMu7UG1O3D8-H3v6OVme2q4pfr2YVugzd3TpxxqAbFDuUTqzy4V8BF5A4"
                alt="Sans matcha glass"
                className="w-full h-auto rounded-[18px] shadow-lg transition-all duration-300 hover:shadow-xl"
              />
            </div>
          </div>
        </section>

        <CategoryNav className="border-t border-b" />

        {/* Convenience Section */}
        <section className="text-center py-16 sm:py-20 px-4 bg-matcha-light">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-playfair mb-8 sm:mb-12 transition-transform duration-300 hover:scale-105">
              convenience
            </h2>

            <div className="w-full max-w-5xl mx-auto">
              {/* Desktop Layout */}
              <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-8 xl:gap-12 items-center">
                <div className="flex flex-col items-end gap-4 text-right">
                  <button className="bg-lime-300 text-black text-xs font-bold py-2 px-5 rounded-full transition-all duration-300 hover:bg-lime-400 hover:shadow-lg hover:-translate-y-1">
                    LIKE MATCHA
                  </button>
                  <button className="bg-white border border-gray-300 text-gray-700 text-xs font-bold py-2 px-5 rounded-full transition-all duration-300 hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1">
                    MATCHA IN NEW WAVE
                  </button>
                </div>

                <div className="relative flex items-center justify-center">
                  <div className="h-44 w-44 xl:h-56 xl:w-56 rounded-full bg-white shadow-inner flex items-center justify-center hover-scale">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAClld0Odv1nu9_L58lh-rNMW_C6R1MmfRuDtR1z7J_s8i_5dqaUYfEnYv1VLhqe6bWqIQhplyZt3w5-5fpMj0suJTQ9SN9CTr64vDYoqhqC82T1-hzvT2evYHdtkxJ6ObORHzZOXgpU6s0U3rVqBWviftfx2eyJ2lM3avEqaQBd4GLqHZISWQP0HlmL9sSYiXZG6Nk9Vnh1-HRT5Y-WXlJ7w_8J2eUHpL9TdYL-XoCAZNJP7lkC43TgYRhM8TfdJCkb3y0l3_EW7Q"
                      alt="Cute matcha character"
                      className="w-28 xl:w-40 h-auto"
                    />
                  </div>
                </div>

                <div className="flex flex-col items-start gap-4 text-left">
                  <button className="bg-red-400 text-white text-xs font-bold py-2 px-5 rounded-full transition-all duration-300 hover:bg-red-500 hover:shadow-lg hover:-translate-y-1">
                    MATCHA COOKIES
                  </button>
                  <button className="bg-lime-300 text-black text-xs font-bold py-2 px-5 rounded-full transition-all duration-300 hover:bg-lime-400 hover:shadow-lg hover:-translate-y-1">
                    MATCHA POWDER
                  </button>
                </div>
              </div>

              {/* Mobile/Tablet Layout */}
              <div className="lg:hidden">
                {/* Character Image */}
                <div className="flex justify-center mb-8">
                  <div className="h-32 w-32 sm:h-40 sm:w-40 md:h-48 md:w-48 rounded-full bg-white shadow-inner flex items-center justify-center hover-scale">
                    <img
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAClld0Odv1nu9_L58lh-rNMW_C6R1MmfRuDtR1z7J_s8i_5dqaUYfEnYv1VLhqe6bWqIQhplyZt3w5-5fpMj0suJTQ9SN9CTr64vDYoqhqC82T1-hzvT2evYHdtkxJ6ObORHzZOXgpU6s0U3rVqBWviftfx2eyJ2lM3avEqaQBd4GLqHZISWQP0HlmL9sSYiXZG6Nk9Vnh1-HRT5Y-WXlJ7w_8J2eUHpL9TdYL-XoCAZNJP7lkC43TgYRhM8TfdJCkb3y0l3_EW7Q"
                      alt="Cute matcha character"
                      className="w-20 sm:w-24 md:w-32 h-auto"
                    />
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap justify-center gap-3 max-w-md mx-auto">
                  {[
                    { label: 'LIKE MATCHA', className: 'bg-lime-300 text-black' },
                    { label: 'MATCHA IN NEW WAVE', className: 'bg-white border border-gray-300 text-gray-700' },
                    { label: 'MATCHA COOKIES', className: 'bg-red-400 text-white' },
                    { label: 'MATCHA POWDER', className: 'bg-lime-300 text-black' },
                  ].map(({ label, className }) => (
                    <span
                      key={label}
                      className={`text-xs font-semibold py-2 px-4 rounded-full uppercase transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${className}`}
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-lg sm:text-xl text-green-800 max-w-3xl mx-auto leading-relaxed mt-12 sm:mt-16 px-4">
              We’re not just selling matcha — we're delivering an authentic Japanese experience
              you can see, feel and taste right in your home.
            </p>

            <div className="mt-8 sm:mt-12 flex justify-center px-4">
              <Link
                href="/menu"
                className="btn btn-primary w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg shadow-xl transition-all duration-300"
              >
                Explore Our Menu
              </Link>
            </div>
          </div>
        </section>

        <CategoryNav className="border-t border-b" />

        {/* Product Showcase Section */}
        <HomeProductShowcase
          products={featuredProducts}
          features={homeFeatures}
        />

        {/* Eco-Respect Section */}
        <section className="bg-matcha-light py-16 sm:py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-playfair text-center mb-8 sm:mb-12 transition-transform duration-300 hover:tracking-wider">
              eco-respect
            </h2>

            <div className="relative group max-w-6xl mx-auto mb-8 sm:mb-12">
              <div className="overflow-hidden rounded-2xl shadow-xl">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFBEeQQh8W-wb5sDj4oFJ07NsXGRPai2HwwLtNlvHZEqCtOrfKxzXkcbTZTEGE6fVOnERd4l7QTdeO38KDMpG6QnDiNzfZiuAekD8rMRPi2zSMth7c5GA_KdAOH8LvwTiDD0fLiolQ75i4aEjHkoCXJg5G2mblE8ngoLirT2pGuYyCo7O5Zqh-VRIjQ-7E7KJCEdTiFEK5MtIyDwDUOB_XfCd3mLtkin-8UTJveHY9f-sLfaOA2HdtPE5ypiAtCcqLdtnoeu0LDB0"
                  alt="Pouring matcha into a glass"
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 rounded-2xl" />
              <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="bg-white p-2 sm:p-3 rounded-full shadow-lg transition-transform hover:scale-110" aria-label="Previous slide">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800"
                  >
                    <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button className="bg-white p-2 sm:p-3 rounded-full shadow-lg transition-transform hover:scale-110" aria-label="Next slide">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="h-5 w-5 sm:h-6 sm:w-6 text-gray-800"
                  >
                    <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Category Tags */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              {[
                { label: "FRESH MATCHA", active: true },
                { label: "MATCHA PRODUCT", active: false },
                { label: "PRODUCT KITS", active: false }
              ].map((tag) => (
                <button
                  key={tag.label}
                  className={`text-xs font-bold py-2 px-3 sm:px-4 rounded-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${tag.active
                    ? 'bg-lime-300 text-black hover:bg-lime-400'
                    : 'border border-gray-400 text-gray-600 hover:bg-gray-100'
                    }`}
                >
                  {tag.label}
                </button>
              ))}
            </div>

            {/* Image Gallery */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {[
                'https://lh3.googleusercontent.com/aida-public/AB6AXuCb1cT53LqLeK19zM6NjR-jsVjfD_YxHTXEZ01S86DkKlnvPVW9_4qeLqCtQQT-6zRyFIWhVyVEQqbWMXQZ0kigGgPOvEZyE9OK_VEpkysLYsfbdGvHxae12szAgch9SYPpoUHE8287mdE5Rc44Oodz8bIxWdZJVGU0ITp_qBx97pMuyeiblMuFsdMdO4Tob2D8vXW9x0U-MyNPlGcgIhIKKr8Kpa8Z2w93EkXIPmWOgiivoEw7GD5hSAVlZNAELZOf99UxTUd6UMg',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuCNdCNhM_LDyAGJt1iEfRfAmQJuv92uoT4GoxMNFmRNwqyFs-rAZ9Y5igfnKC4UpnXbSBYUTaLveVB8_OaFflvueSoR5bi3cpzYPQq8dp_TLmQsp5HVReQGObxeI0xli6F2Tcaxo9EgT0FcvntRO5XnwooXvz5-0yDtsvsh8D_yBz2hLNte0cKZevo6Y70kaMIjLXtTQFkK7WzT70VvStKRjxKBZgHQSHd11ET_KS14_qvo4tR6oWkVIgiuVJpF22qJqFaLRjoUs48',
                'https://lh3.googleusercontent.com/aida-public/AB6AXuCwqGTRmUpmDJYOVkJGW-pZhqFYO1rodpkJzOzMIwFeCMscpKku609EPE2l5bt1XI16Dv6EobteuFcgKKBqDDUC12i0FmTcMp6-JRiGgE7ztXS5BXoen28KgHbXjsIkxliYgGEeuN2dZ66hbfP_swygN94yl3wvckhOgz9qXdkJUHwvwFzDJyJy_Q1_fjqfkQMSFI0osIdn-fpY9ryKq67AA1H6N1XXKD8UAcEq4-WKbB9cY_hEoFs8qf8fucB4CP1JMRy2uSpgrek',
              ].map((src, index) => (
                <div
                  key={src}
                  className="overflow-hidden rounded-xl shadow-lg hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={src}
                    alt="Eco respect showcase"
                    className="w-full h-48 sm:h-56 md:h-64 object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
