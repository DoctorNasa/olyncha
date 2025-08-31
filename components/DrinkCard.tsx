import React from 'react';
import { MenuItem } from '@/types';

interface DrinkCardProps {
  item: MenuItem;
  onAddToCart?: (item: MenuItem, size: string) => void;
}

const DrinkCard: React.FC<DrinkCardProps> = ({ item, onAddToCart }) => {

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image */}
      {item.img && (
        <div className="relative h-48 bg-matcha-600/10">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 bg-matcha-600/20 rounded-full" />
          </div>
          {/* Placeholder for actual image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-matcha-600 text-4xl">🍵</span>
          </div>
        </div>
      )}
      
      {/* Content */}
      <div className="p-4">
        <h3 className="font-serif text-xl mb-1" style={{ fontWeight: 500, color: 'var(--color-ink)' }}>
          {item.name}
        </h3>
        {item.english && item.english !== item.name && (
          <p className="text-sm text-gray-600 mb-2">{item.english}</p>
        )}
        <p className="text-sm text-gray-700 mb-3">{item.desc}</p>
        
        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {item.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full"
                style={{ 
                  backgroundColor: 'var(--color-matcha-600)', 
                  color: 'var(--color-cream)',
                  opacity: 0.8 
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {/* Price and Sizes */}
        <div className="flex items-center justify-between">
          <div className="text-sm">
            {Object.entries(item.prices).map(([size, price]) => (
              price !== undefined && (
                <span key={size} className="mr-3">
                  {size === 'add' ? 'Add ' : `${size}oz: `}
                  <strong>${typeof price === 'number' ? price.toFixed(2) : '0.00'}</strong>
                </span>
              )
            ))}
          </div>
        </div>
        
        {/* Add to Cart Button (if handler provided) */}
        {onAddToCart && (
          <button
            onClick={() => onAddToCart(item, Object.keys(item.prices)[0])}
            className="mt-4 w-full py-2 px-4 rounded-md text-white font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: 'var(--color-matcha-600)' }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default DrinkCard;
