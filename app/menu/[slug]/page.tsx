'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { MinusIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useCart } from '@/contexts/CartContext';
import productsData from '@/data/products.json';

interface MenuItemDetail {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  image: string;
  category: string;
  sizes: Array<{ name: string; price: number }>;
  milkOptions: string[];
  sweetnessLevels: string[];
  addOns: Array<{ name: string; price: number }>;
}

export default function MenuDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { addItem, openCart } = useCart();

  // Get product data based on slug
  const productData = (productsData as any)[slug];

  if (!productData) {
    return (
      <div className="pt-32 pb-20 bg-cream min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-serif text-4xl mb-4 text-ink">Product Not Found</h1>
            <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
            <Link
              href="/menu"
              className="inline-block px-8 py-3 bg-matcha-500 text-white rounded-full font-semibold hover:bg-matcha-600 transition-colors"
            >
              Back to Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const menuItem: MenuItemDetail = productData;

  const [selectedSize, setSelectedSize] = useState(menuItem.sizes[0]?.name || 'Regular');
  const [selectedMilk, setSelectedMilk] = useState(menuItem.milkOptions[0] || '');
  const [selectedSweetness, setSelectedSweetness] = useState(menuItem.sweetnessLevels[0] || '');
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);

  const getCurrentPrice = () => {
    const sizePrice = menuItem.sizes.find(size => size.name === selectedSize)?.price || menuItem.basePrice;
    const addOnPrice = selectedAddOns.reduce((total, addOn) => {
      const addOnItem = menuItem.addOns.find(item => item.name === addOn);
      return total + (addOnItem?.price || 0);
    }, 0);
    return (sizePrice + addOnPrice) * quantity;
  };

  const handleAddOnToggle = (addOn: string) => {
    setSelectedAddOns(prev => 
      prev.includes(addOn) 
        ? prev.filter(item => item !== addOn)
        : [...prev, addOn]
    );
  };

  const handleAddToCart = () => {
    const sizePrice = menuItem.sizes.find(size => size.name === selectedSize)?.price || menuItem.basePrice;
    const addOnPrice = selectedAddOns.reduce((total, addOn) => {
      const addOnItem = menuItem.addOns.find(item => item.name === addOn);
      return total + (addOnItem?.price || 0);
    }, 0);
    const itemPrice = sizePrice + addOnPrice;

    const cartItem = {
      id: `${menuItem.id}-${Date.now()}`, // Unique ID for cart item
      name: menuItem.name,
      size: selectedSize,
      milk: selectedMilk,
      sweetness: selectedSweetness,
      addOns: selectedAddOns,
      quantity,
      price: itemPrice,
      image: menuItem.image,
      basePrice: menuItem.basePrice
    };

    addItem(cartItem);
    openCart();
  };

  return (
    <div className="pt-32 pb-20 bg-cream min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <Link href="/menu" className="hover:text-matcha-600">Menu</Link>
              <span>/</span>
              <Link href="/menu" className="hover:text-matcha-600">Drinks</Link>
              <span>/</span>
              <span className="text-ink">{menuItem.name}</span>
            </div>
          </nav>

          {/* Product Header */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <h1 className="font-serif text-3xl md:text-4xl mb-4 text-ink" style={{ fontWeight: 700 }}>
              {menuItem.name}
            </h1>
            <p className="text-gray-700 leading-relaxed mb-6">
              {menuItem.description}
            </p>
            
            {/* Product Image */}
            <div className="w-full aspect-[3/2] bg-gradient-to-br from-matcha-300 to-matcha-500 rounded-xl flex items-center justify-center mb-6">
              <span className="text-8xl">{menuItem.image}</span>
            </div>
          </div>

          {/* Customization Options */}
          <div className="space-y-6">
            {/* Size Selection */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="font-semibold text-xl mb-4 text-ink">Size</h2>
              <div className="grid grid-cols-3 gap-3">
                {menuItem.sizes.map((size) => (
                  <label
                    key={size.name}
                    className={`flex flex-col items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-colors ${
                      selectedSize === size.name
                        ? 'border-matcha-500 bg-matcha-50'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <input
                      type="radio"
                      name="size"
                      value={size.name}
                      checked={selectedSize === size.name}
                      onChange={(e) => setSelectedSize(e.target.value)}
                      className="sr-only"
                    />
                    <span className="font-medium text-ink">{size.name}</span>
                    <span className="text-sm text-gray-600">${size.price.toFixed(2)}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Milk Selection */}
            {menuItem.milkOptions.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="font-semibold text-xl mb-4 text-ink">Milk</h2>
                <div className="grid grid-cols-2 gap-3">
                  {menuItem.milkOptions.map((milk) => (
                    <label
                      key={milk}
                      className={`flex items-center justify-center p-3 border-2 rounded-xl cursor-pointer transition-colors ${
                        selectedMilk === milk
                          ? 'border-matcha-500 bg-matcha-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <input
                        type="radio"
                        name="milk"
                        value={milk}
                        checked={selectedMilk === milk}
                        onChange={(e) => setSelectedMilk(e.target.value)}
                        className="sr-only"
                      />
                      <span className="font-medium text-ink">{milk}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Sweetness Level */}
            {menuItem.sweetnessLevels.length > 0 && (
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h2 className="font-semibold text-xl mb-4 text-ink">Sweetness</h2>
                <div className="grid grid-cols-2 gap-3">
                  {menuItem.sweetnessLevels.map((level) => (
                    <label
                      key={level}
                      className={`flex items-center justify-center p-3 border-2 rounded-xl cursor-pointer transition-colors ${
                        selectedSweetness === level
                          ? 'border-matcha-500 bg-matcha-50'
                          : 'border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      <input
                        type="radio"
                        name="sweetness"
                        value={level}
                        checked={selectedSweetness === level}
                        onChange={(e) => setSelectedSweetness(e.target.value)}
                        className="sr-only"
                      />
                      <span className="font-medium text-ink">{level}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {/* Add-ons */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h2 className="font-semibold text-xl mb-4 text-ink">Add-ons</h2>
              <div className="space-y-3">
                {menuItem.addOns.map((addOn) => (
                  <label
                    key={addOn.name}
                    className="flex items-center justify-between p-3 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedAddOns.includes(addOn.name)}
                        onChange={() => handleAddOnToggle(addOn.name)}
                        className="w-5 h-5 text-matcha-500 focus:ring-matcha-500 rounded"
                      />
                      <span className="font-medium text-ink">{addOn.name}</span>
                    </div>
                    <span className="text-gray-600">+${addOn.price.toFixed(2)}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-ink">Quantity:</span>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      aria-label="minus"
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    >
                      <MinusIcon className="w-4 h-4" />
                    </button>
                    <span className="font-semibold text-xl w-8 text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      aria-label="plus"
                      className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    >
                      <PlusIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-ink">${getCurrentPrice().toFixed(2)}</p>
                </div>
              </div>
              
              <button
                onClick={handleAddToCart}
                className="w-full py-4 bg-matcha-500 text-white rounded-xl font-semibold text-lg hover:bg-matcha-600 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
