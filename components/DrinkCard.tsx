import React, { useState } from 'react';
import { MenuItem } from '@/types';
import { PlusIcon, HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

interface DrinkCardProps {
  item: MenuItem;
  onAddToCart?: (item: MenuItem, size: string) => void;
}

const DrinkCard: React.FC<DrinkCardProps> = ({ item, onAddToCart }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState(Object.keys(item.prices)[0]);

  return (
    <div className="card hover-lift group bg-white rounded-2xl overflow-hidden">
      {/* Image Section */}
      <div className="relative h-56 bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">
        {item.img ? (
          <img
            src={item.img}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-gradient-matcha rounded-full flex items-center justify-center animate-float">
              <span className="text-white text-5xl">🍵</span>
            </div>
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-200 hover:scale-110"
        >
          {isLiked ? (
            <HeartSolidIcon className="w-5 h-5 text-red-500" />
          ) : (
            <HeartIcon className="w-5 h-5 text-gray-600" />
          )}
        </button>

        {/* Badge for special items */}
        {item.tags && item.tags.includes('signature') && (
          <div className="absolute top-4 left-4 bg-gradient-matcha text-white px-3 py-1 rounded-full text-xs font-semibold">
            Signature
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="font-playfair text-xl font-semibold text-gray-900 mb-1 group-hover:text-green-700 transition-colors">
            {item.name}
          </h3>
          {item.english && item.english !== item.name && (
            <p className="text-sm text-gray-500 font-medium">{item.english}</p>
          )}
        </div>

        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">
          {item.desc}
        </p>

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {item.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-green-50 text-green-700 rounded-full font-medium border border-green-100"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Size Selection */}
        {Object.keys(item.prices).length > 1 && (
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Size:</p>
            <div className="flex gap-2">
              {Object.entries(item.prices).map(([size, price]) => (
                price !== undefined && (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                      selectedSize === size
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    {size === 'add' ? 'Add-on' : `${size}oz`}
                  </button>
                )
              ))}
            </div>
          </div>
        )}

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-gray-900">
            ${typeof item.prices[selectedSize] === 'number'
              ? item.prices[selectedSize].toFixed(2)
              : '0.00'}
          </div>

          {onAddToCart && (
            <button
              onClick={() => onAddToCart(item, selectedSize)}
              className="btn btn-primary flex items-center gap-2 px-6 py-3 hover:scale-105 transition-transform"
            >
              <PlusIcon className="w-4 h-4" />
              Add
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default DrinkCard;
