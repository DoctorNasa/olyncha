'use client';

import React from 'react';
import Link from 'next/link';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useCart } from '@/contexts/CartContext';

export default function CartPage() {
  const {
    state,
    updateQuantity,
    removeItem,
    getSubtotal,
    getTax,
    getDeliveryFee,
    getTotal
  } = useCart();

  if (state.items.length === 0) {
    return (
      <div className="pt-32 pb-20 bg-cream min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-xl p-12 shadow-sm">
              <div className="text-6xl mb-6">🛒</div>
              <h1 className="font-serif text-3xl mb-4 text-ink" style={{ fontWeight: 700 }}>
                Your Cart is Empty
              </h1>
              <p className="text-gray-600 mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link
                href="/menu"
                className="inline-block px-8 py-3 bg-matcha-500 text-white rounded-full font-semibold hover:bg-matcha-600 transition-colors"
              >
                Browse Menu
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-cream min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl mb-8 text-ink text-center" style={{ fontWeight: 700 }}>
            Your Order
          </h1>

          {/* Cart Items */}
          <div className="space-y-4 mb-8">
            {state.items.map((item) => (
              <div key={item.id} className="bg-white rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-4">
                  {/* Item Image */}
                  <div className="w-16 h-16 bg-gradient-to-br from-matcha-300 to-matcha-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">{item.image}</span>
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-ink text-lg">{item.name}</h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <p>{item.size}</p>
                      {item.milk && <p>{item.milk}</p>}
                      {item.sweetness && <p>{item.sweetness}</p>}
                      {item.addOns.length > 0 && (
                        <p>Add-ons: {item.addOns.join(', ')}</p>
                      )}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label="minus"
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    >
                      <MinusIcon className="w-4 h-4" />
                    </button>
                    <span className="font-semibold w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label="plus"
                      className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                    >
                      <PlusIcon className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Price and Remove */}
                  <div className="flex flex-col items-end gap-2">
                    <p className="font-semibold text-ink">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeItem(item.id)}
                      aria-label="trash"
                      className="text-red-500 hover:text-red-700 p-1"
                    >
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <h2 className="font-semibold text-xl mb-4 text-ink">Order Summary</h2>
            
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium text-ink">${getSubtotal().toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium text-ink">${getTax().toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-600">
                  Delivery Fee {getSubtotal() >= 25 && <span className="text-green-600">(Free!)</span>}
                </span>
                <span className="font-medium text-ink">${getDeliveryFee().toFixed(2)}</span>
              </div>
              
              {getSubtotal() < 25 && (
                <p className="text-sm text-gray-500">
                  Add ${(25 - getSubtotal()).toFixed(2)} more for free delivery
                </p>
              )}
              
              <div className="border-t pt-3">
                <div className="flex justify-between text-lg font-semibold">
                  <span className="text-ink">Total</span>
                  <span className="text-ink">${getTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link
              href="/checkout"
              className="w-full block text-center py-4 bg-matcha-500 text-white rounded-xl font-semibold text-lg hover:bg-matcha-600 transition-colors"
            >
              Proceed to Checkout
            </Link>
            
            <Link
              href="/menu"
              className="w-full block text-center py-3 border-2 border-matcha-500 text-matcha-600 rounded-xl font-semibold hover:bg-matcha-50 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
