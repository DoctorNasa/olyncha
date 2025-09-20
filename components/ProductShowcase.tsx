import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface Product {
  id: string;
  title: string;
  category: string;
  price: string;
  description: string;
  image: string;
  featured?: boolean;
}

interface ProductShowcaseProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  showViewAll?: boolean;
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({
  products,
  title = "Featured Products",
  subtitle = "Discover our most popular matcha creations",
  showViewAll = true
}) => {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-6 py-2 bg-green-50 text-green-700 rounded-full text-sm font-semibold mb-6">
            🍵 Our Menu
          </span>
          <h2 className="text-display font-playfair mb-6 text-gray-900">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group card hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Product Image */}
              <div className="relative h-64 bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-green-700 text-xs font-semibold rounded-full">
                    {product.category}
                  </span>
                </div>

                {/* Featured Badge */}
                {product.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gradient-matcha text-white text-xs font-semibold rounded-full">
                      ⭐ Featured
                    </span>
                  </div>
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <Link
                    href={`/menu/${product.id}`}
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0"
                  >
                    <div className="btn btn-primary px-6 py-3 shadow-xl">
                      View Details
                    </div>
                  </Link>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-playfair text-xl font-semibold text-gray-900 group-hover:text-green-700 transition-colors">
                    {product.title}
                  </h3>
                  <span className="text-2xl font-bold text-green-600">
                    {product.price}
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center justify-between">
                  <Link
                    href={`/menu/${product.id}`}
                    className="text-green-600 text-sm font-semibold hover:text-green-700 transition-colors flex items-center gap-1"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                  
                  <button className="btn btn-primary px-4 py-2 text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        {showViewAll && (
          <div className="text-center animate-fade-in">
            <Link
              href="/menu"
              className="btn btn-secondary px-8 py-4 text-lg group"
            >
              View All Products
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductShowcase;
