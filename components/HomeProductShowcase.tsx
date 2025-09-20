import React from 'react';
import Link from 'next/link';

interface Product {
  id: string;
  title: string;
  category: string;
  price: string;
  description: string;
  image: string;
  featured?: boolean;
}

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface HomeProductShowcaseProps {
  products: Product[];
  features: Feature[];
  logoImage?: string;
  badgeText?: string;
  badgeLink?: string;
}

const HomeProductShowcase: React.FC<HomeProductShowcaseProps> = ({
  products,
  features,
  logoImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBoB7ZZofh9StCR0BB0kh17LeDT-A62MaelrF7gkuPCs-LS8NVy80zYkiO9T2gfib-RCUO4tONuH8KPEsrD0dEplUv3Z8GPKwl2xny6Zvfidl3-i1XnqHFNQJRUpmq1bPsOYNcrY0xEZiMWYial-PxWipmnRDNYXE-VA8V9mrRXycAM1jAbhE1hq7X_P74NRlDPpSFzlnUBwL08CINPLTYSpd-l8GdXbnRv8HQWv45EewJ0e985yJeJzPSlOrkuiVZjoBJq_e4yv7I",
  badgeText = "CONVENIENT PRODUCTS",
  badgeLink = "/menu"
}) => {
  return (
    <section className="py-16 sm:py-20 px-4">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center flex flex-col items-center gap-4 sm:gap-6 mb-12 sm:mb-16">
          <img
            src={logoImage}
            alt="Menu logo"
            className="h-20 sm:h-24 w-auto hover-scale"
          />
          <Link
            href={badgeLink}
            className="inline-block bg-red-400 text-white py-2 px-4 sm:px-5 rounded-full text-xs font-bold transition-all duration-300 hover:bg-red-500 hover:scale-105 hover:shadow-lg"
          >
            {badgeText}
          </Link>
        </div>

        {/* Product Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {products.map((item, index) => (
            <div
              key={item.id}
              className="group text-left hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-baseline mb-3">
                <span className="text-xs text-gray-500 font-medium">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="text-xs text-gray-500 font-medium">{item.category}</span>
              </div>
              <div className="overflow-hidden rounded-xl mb-4 shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-sm sm:text-base">{item.title}</h3>
                <span className="font-bold text-lg text-green-600">{item.price}</span>
              </div>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Features Section */}
        <div className="mt-16 sm:mt-20 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 text-center">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-4 hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="mx-auto h-16 sm:h-20 w-auto transition-transform duration-300 group-hover:-translate-y-2 group-hover:scale-110"
              />
              <h4 className="font-bold mt-3 sm:mt-4 text-sm sm:text-base">{feature.title}</h4>
              <p className="text-gray-500 text-xs sm:text-sm mt-2 leading-relaxed max-w-xs mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeProductShowcase;