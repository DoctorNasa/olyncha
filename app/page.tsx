
'use client';

import React from 'react';
import Link from 'next/link';

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

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>

        <div className="relative z-10 max-w-7xl mx-auto h-full px-6 py-32 flex items-center justify-center">
          <div className="w-full max-w-4xl text-center animate-fade-in">
            <div className="mb-8">
              <span className="inline-block px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-6">
                🍵 Premium Japanese Matcha Experience
              </span>
            </div>
            <h1 className="text-hero font-playfair mb-8 bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
              olyncha
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
              Discover the authentic taste of premium matcha,
              <br className="hidden sm:block" />
              crafted with tradition and delivered with love
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/menu"
                className="btn btn-primary px-8 py-4 text-lg shadow-2xl hover:shadow-green-500/25"
              >
                Explore Menu
              </Link>
              <Link
                href="/about"
                className="btn btn-secondary bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 px-8 py-4 text-lg"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <main>
        <section className="grid grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-100 p-10 md:p-16 flex items-center justify-center">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiAuphwsGqtc-fnNsD0gxfc_8Jcl-FWLlAKefwa9FCeQXpiovIBat_zS-MOeu2Q4NlzkmcuRr5RL3sIl97f-QoAdBb62b0N9kCaWxzboffNvYAjg1zt3AYOTF_q0SzwgilztE3AXEeW4-cy6rox_rcHxvmWVaZrvC3rCxsreI0jqOw7YDBzJE2hiRjdPxso9KnlrlY8lW5JDs4kTAb9XSPzftxLrX1QFw2c8bs8x0zYGVIgVI0MEFy4ZA283_GoLQQBPFnNX-v9V8"
              alt="Olyncha mascot"
              className="w-full max-w-[260px] rounded-[18px] shadow-md"
            />
          </div>
          <div className="bg-stone-100 p-10 md:p-16 flex items-center justify-center">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7no3v_suebCORqhLJo6JAANgQaguQOs_Ajp5KMi5yLW9VsM_uX3soQl7LIxvY1H9R1lmk8AU7RhcqnnqfNBMuXfk0ige2LCfb65gQRuuEizt0CkYc5EVrRgpOL3A1fJHxeuKkSKp46f9hxqrSFWPk40ej9b4z4nGd5ACAVIzseJ_oa_vnG85xw41fpcr1dV4iQ-B30ex2Cav8LeA-mWDMu7UG1O3D8-H3v6OVme2q4pfr2YVugzd3TpxxqAbFDuUTqzy4V8BF5A4"
              alt="Sans matcha glass"
              className="w-full max-w-[260px] rounded-[18px] shadow-md"
            />
          </div>
        </section>

        <CategoryNav className="border-t border-b" />

        <section className="text-center py-20 px-4 bg-matcha-light">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-playfair mb-12 transition-transform duration-300 hover:scale-105">
            convenience
          </h2>
          <div className="w-full max-w-4xl mx-auto">
            <div className="hidden md:grid grid-cols-[minmax(160px,1fr)_auto_minmax(160px,1fr)] gap-12 items-center">
              <div className="flex flex-col items-end gap-5 text-right">
                <button className="bg-lime-300 text-black text-xs font-bold py-2 px-5 rounded-full transition-all duration-300 hover:bg-lime-400 hover:shadow-lg">
                  LIKE MATCHA
                </button>
                <button className="bg-white border border-gray-300 text-gray-700 text-xs font-bold py-2 px-5 rounded-full transition-all duration-300 hover:bg-gray-100 hover:shadow-lg">
                  MATCHA IN NEW WAVE
                </button>
              </div>

              <div className="relative flex items-center justify-center">
                <div className="h-48 w-48 lg:h-56 lg:w-56 rounded-full bg-white shadow-inner flex items-center justify-center">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAClld0Odv1nu9_L58lh-rNMW_C6R1MmfRuDtR1z7J_s8i_5dqaUYfEnYv1VLhqe6bWqIQhplyZt3w5-5fpMj0suJTQ9SN9CTr64vDYoqhqC82T1-hzvT2evYHdtkxJ6ObORHzZOXgpU6s0U3rVqBWviftfx2eyJ2lM3avEqaQBd4GLqHZISWQP0HlmL9sSYiXZG6Nk9Vnh1-HRT5Y-WXlJ7w_8J2eUHpL9TdYL-XoCAZNJP7lkC43TgYRhM8TfdJCkb3y0l3_EW7Q"
                    alt="Cute matcha character"
                    className="w-32 sm:w-36 lg:w-40"
                  />
                </div>
              </div>

              <div className="flex flex-col items-start gap-5 text-left">
                <button className="bg-red-400 text-white text-xs font-bold py-2 px-5 rounded-full transition-all duration-300 hover:bg-red-500 hover:shadow-lg">
                  MATCHA COOKIES
                </button>
                <button className="bg-lime-300 text-black text-xs font-bold py-2 px-5 rounded-full transition-all duration-300 hover:bg-lime-400 hover:shadow-lg">
                  MATCHA POWDER
                </button>
              </div>
            </div>

            <div className="md:hidden flex flex-wrap justify-center gap-3 mt-10">
              {[
                { label: 'LIKE MATCHA', className: 'bg-lime-300 text-black' },
                { label: 'MATCHA IN NEW WAVE', className: 'bg-white border border-gray-300 text-gray-700' },
                { label: 'MATCHA COOKIES', className: 'bg-red-400 text-white' },
                { label: 'MATCHA POWDER', className: 'bg-lime-300 text-black' },
              ].map(({ label, className }) => (
                <span
                  key={label}
                  className={`text-xs font-semibold py-2 px-4 rounded-full uppercase ${className}`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
          <p className="text-xl text-green-800 max-w-3xl mx-auto leading-relaxed mt-16">
            We’re not just selling matcha — we're delivering an authentic Japanese experience
            you can see, feel and taste right in your home.
          </p>
          <div className="mt-12 flex justify-center">
            <Link
              href="/menu"
              className="btn btn-primary px-8 py-4 text-lg shadow-xl"
            >
              Explore Our Menu
            </Link>
          </div>

        </section>

        <CategoryNav className="border-t border-b" />

        <section className="py-20 px-4">
          <div className="text-center flex flex-col items-center gap-6">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBoB7ZZofh9StCR0BB0kh17LeDT-A62MaelrF7gkuPCs-LS8NVy80zYkiO9T2gfib-RCUO4tONuH8KPEsrD0dEplUv3Z8GPKwl2xny6Zvfidl3-i1XnqHFNQJRUpmq1bPsOYNcrY0xEZiMWYial-PxWipmnRDNYXE-VA8V9mrRXycAM1jAbhE1hq7X_P74NRlDPpSFzlnUBwL08CINPLTYSpd-l8GdXbnRv8HQWv45EewJ0e985yJeJzPSlOrkuiVZjoBJq_e4yv7I"
              alt="SD menu logo"
              className="h-24 w-auto"
            />
            <Link
              href="/menu"
              className="inline-block bg-red-400 text-white py-2 px-5 rounded-full text-xs font-bold transition-all duration-300 hover:bg-red-500 hover:scale-105"
            >
              CONVENIENT PRODUCTS
            </Link>
          </div>

          <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-2 sm:px-4 lg:px-0">
            {[
              {
                id: '01',
                title: 'STRAWBERRY MATCHA',
                category: 'DRINKS',
                price: '$3.5',
                description: 'Strawberry puree, premium matcha',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO5lkjPexV2Gk-ttrsv04h9qb3_uhnbZqN_OxKf__SC4NaWFRaekAGGLp6tOmGnpriy0Dx4PPFBBs4gXp5XWbBIvD2yPd_Z8m0DL5aTqaU121CASk4KPHdHDPhZuoXNPOhGY9SvHhhX_vvNfVNHvCAjVRzUxKS2JrW0DZKgmh8W4qVnTut9RwEZsD4h1oZCv03huuecPwyilK_ablp_3P3fQ40agKk95hWSLOkyJaliR8_VJtLr-Z-kYB7p1UEhBqQakneoy5ODCY',
              },
              {
                id: '02',
                title: 'MATCHA LATTE',
                category: 'DRINKS',
                price: '$3.5',
                description: 'Our signature premium matcha desserts',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzUgn7hICSgCEODY1ixh2d8HDIMHb1pBVhD30-sz72N6GaQ7mjY15--IgYxx8uk2a6lTw9NUdkIehKbP70dJ_jdNDMQxHcrWv6tNn6YtYpd0W8oHpmDc2mwWnV4wlZVkopDz7j_ilC11A5FF3S2bUray0SF5jWba9OnPDdQHmuKK7CsTdq8hrq95A1CHqI1TSTMukrB4z99Ss8NaakTbKBAcOd_sB7JblbfsMnaSIR847hjnrbKNgZrokgPGivMf17yAti6IcA4MI',
              },
              {
                id: '03',
                title: 'MATCHA LEMONADE',
                category: 'DRINKS',
                price: '$3.5',
                description: 'Refreshing lemonade with a matcha shot',
                img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCt9mfMREhmNrAcNIxQw0GFRoJCfM5nxcH6e70gbGEdzBTQHlyHImUW3McOXsqFI0wLeYXOlycIWu8rY5phOI8uFu7jSuTchLC1iJizsEhgta7GRXYDdxvtUdQVaVnzm2TB6fxhmD9aorQ4VdfwRPc8xKkE6BFwlimmo5yNMXD3PEOW5EpHM3KANtyTKhoA8ESICTazua9L-Z9tpVeqa5ZYbkytpz1ga6WRi9KEGFs3SUBnECTJELYs9036_XJGY3eqiS_jy-SAslc',
              },
            ].map((item) => (
              <div key={item.id} className="group text-left">
                <div className="flex justify-between items-baseline">
                  <span className="text-xs text-gray-500">{item.id}</span>
                  <span className="text-xs text-gray-500">{item.category}</span>
                </div>
                <div className="overflow-hidden rounded-lg my-4">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full rounded-lg transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="font-bold">{item.title}</h3>
                  <span className="font-bold text-lg">{item.price}</span>
                </div>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center px-6 sm:px-0">
            <div className="group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1QwVuChL2b5KIG1zaPVk04bj3nd_S73vLxAIuvuq8R0qawncM0z3t6hCSxMtQxsr4VROJ3tCNvd6QdqSE9Vr0prJe-JRRJ9tYF5R-O-9YfstCPY8p50mTBeGiJHJDrKtdZx2wbcghgyKTLMZ51NkbrkoLHW7sDYd0FZ3nu57bhZxiNBjfehHIzN_OPwFMH4FWmIZ_2KNDiUoa7I5SiJFo1_oaaydDclD9XiInj75yzuIW_lvNh71A86WGiIdZ3hBY85WTWJO16UY"
                alt="Premium matcha icon"
                className="mx-auto h-20 transition-transform duration-300 group-hover:-translate-y-1"
              />
              <h4 className="font-bold mt-4">PREMIUM MATCHA</h4>
              <p className="text-gray-500 text-sm">The best premium matcha from Uji, Kyoto</p>
            </div>
            <div className="group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3S5D26N4Ax-lPIeqwagcV-aPXGyMegn1Zx09QH3iyBP1YbH6UI0052FoyJ2e-LyAsTioyk6Q6Ul4bfEae2yV-UsFMDJ4E1Z4UvHet10fJ50vcaINQYzoYKUADK8QFuyJWpS-DgPlKDyKO700acERx8yRl5-O9gIrEjKIZDjDcgVojiqX83cnMSnyyisRMd1-shq6WkXdDejARSqSBUkI_eIVDGoOuLZexjJzvss_uvUrsd1TX2t75y011sM0mlvIm1k_hMSmvKqQ"
                alt="Spill proof icon"
                className="mx-auto h-20 transition-transform duration-300 group-hover:-translate-y-1"
              />
              <h4 className="font-bold mt-4">SPILL PROOF</h4>
              <p className="text-gray-500 text-sm">
                Spill-proof packaging without a single plastic waste
              </p>
            </div>
            <div className="group">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlp0wrG50ZyngEJ2P1sQV6NFsi9u-rH_Vcj1CGhDMZ3kN698x-K1ZMVNVOeqVPWjMO5IIio2TM932dixea2mti-MvyjUX9aYKWC1hJgYPw1DTYkHyVtcbnKJF0etnoMBoFRDbIeXSqlmQhMA9woY5zsg-h2d7t0UNBcErtzoiejjhZcytGPh0y73jQbQz-9HCgiDfeACc47PUVBZxImrCo08Dyfqo1oqq--NuVVZNxRVAv522JbLgu0ql9ffVk5pLkXQeDsXi1Nvs"
                alt="Fast delivery icon"
                className="mx-auto h-20 transition-transform duration-300 group-hover:-translate-y-1"
              />
              <h4 className="font-bold mt-4">FAST AF DELIVERY</h4>
              <p className="text-gray-500 text-sm">We'll get your matcha to you in a flash</p>
            </div>
          </div>
        </section>

        <section className="bg-matcha-light py-20 px-4">
          <h2 className="text-4xl sm:text-5xl md:text-8xl font-playfair text-center mb-12 transition-transform duration-300 hover:tracking-wider">
            eco-respect
          </h2>
          <div className="relative group max-w-6xl mx-auto">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFBEeQQh8W-wb5sDj4oFJ07NsXGRPai2HwwLtNlvHZEqCtOrfKxzXkcbTZTEGE6fVOnERd4l7QTdeO38KDMpG6QnDiNzfZiuAekD8rMRPi2zSMth7c5GA_KdAOH8LvwTiDD0fLiolQ75i4aEjHkoCXJg5G2mblE8ngoLirT2pGuYyCo7O5Zqh-VRIjQ-7E7KJCEdTiFEK5MtIyDwDUOB_XfCd3mLtkin-8UTJveHY9f-sLfaOA2HdtPE5ypiAtCcqLdtnoeu0LDB0"
              alt="Pouring matcha into a glass"
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button className="bg-white p-3 rounded-full shadow-lg transition-transform hover:scale-110" aria-label="Previous slide">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-800"
                >
                  <path d="M15 19l-7-7 7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button className="bg-white p-3 rounded-full shadow-lg transition-transform hover:scale-110" aria-label="Next slide">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-800"
                >
                  <path d="M9 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
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

          <div className="mt-8 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
            {[ 
              'https://lh3.googleusercontent.com/aida-public/AB6AXuCb1cT53LqLeK19zM6NjR-jsVjfD_YxHTXEZ01S86DkKlnvPVW9_4qeLqCtQQT-6zRyFIWhVyVEQqbWMXQZ0kigGgPOvEZyE9OK_VEpkysLYsfbdGvHxae12szAgch9SYPpoUHE8287mdE5Rc44Oodz8bIxWdZJVGU0ITp_qBx97pMuyeiblMuFsdMdO4Tob2D8vXW9x0U-MyNPlGcgIhIKKr8Kpa8Z2w93EkXIPmWOgiivoEw7GD5hSAVlZNAELZOf99UxTUd6UMg',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuCNdCNhM_LDyAGJt1iEfRfAmQJuv92uoT4GoxMNFmRNwqyFs-rAZ9Y5igfnKC4UpnXbSBYUTaLveVB8_OaFflvueSoR5bi3cpzYPQq8dp_TLmQsp5HVReQGObxeI0xli6F2Tcaxo9EgT0FcvntRO5XnwooXvz5-0yDtsvsh8D_yBz2hLNte0cKZevo6Y70kaMIjLXtTQFkK7WzT70VvStKRjxKBZgHQSHd11ET_KS14_qvo4tR6oWkVIgiuVJpF22qJqFaLRjoUs48',
              'https://lh3.googleusercontent.com/aida-public/AB6AXuCwqGTRmUpmDJYOVkJGW-pZhqFYO1rodpkJzOzMIwFeCMscpKku609EPE2l5bt1XI16Dv6EobteuFcgKKBqDDUC12i0FmTcMp6-JRiGgE7ztXS5BXoen28KgHbXjsIkxliYgGEeuN2dZ66hbfP_swygN94yl3wvckhOgz9qXdkJUHwvwFzDJyJy_Q1_fjqfkQMSFI0osIdn-fpY9ryKq67AA1H6N1XXKD8UAcEq4-WKbB9cY_hEoFs8qf8fucB4CP1JMRy2uSpgrek',
            ].map((src) => (
              <img
                key={src}
                src={src}
                alt="Eco respect showcase"
                className="w-full h-auto rounded-lg transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
