'use client';

import React from 'react';
import Link from 'next/link';
import { XMarkIcon, MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useCart } from '@/contexts/CartContext';

export default function CartSidebar() {
  const { 
    state, 
    removeItem, 
    updateQuantity, 
    closeCart, 
    getItemCount, 
    getSubtotal, 
    getTax, 
    getDeliveryFee, 
    getTotal 
  } = useCart();

  if (!state.isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={closeCart}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-semibold text-ink">
              Your Cart ({getItemCount()})
            </h2>
            <button
              onClick={closeCart}
              aria-label="close"
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6">
            {state.items.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🛒</div>
                <p className="text-gray-600 mb-4">Your cart is empty</p>
                <Link
                  href="/menu"
                  onClick={closeCart}
                  className="inline-block px-6 py-2 bg-matcha-500 text-white rounded-full font-semibold hover:bg-matcha-600 transition-colors"
                >
                  Browse Menu
                </Link>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={`${item.id}-${item.size}-${item.milk}-${item.sweetness}-${item.addOns.join(',')}`} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      {/* Item Image */}
                      <div className="w-12 h-12 bg-gradient-to-br from-matcha-300 to-matcha-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">{item.image}</span>
                      </div>

                      {/* Item Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-ink text-sm">{item.name}</h3>
                        <div className="text-xs text-gray-600 space-y-1">
                          <p>{item.size}</p>
                          {item.milk && <p>{item.milk}</p>}
                          {item.sweetness && <p>{item.sweetness}</p>}
                          {item.addOns.length > 0 && (
                            <p>Add-ons: {item.addOns.join(', ')}</p>
                          )}
                        </div>
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            aria-label="minus"
                            className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                          >
                            <MinusIcon className="w-3 h-3" />
                          </button>
                          <span className="font-semibold text-sm w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label="plus"
                            className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100"
                          >
                            <PlusIcon className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {/* Price and Remove */}
                      <div className="flex flex-col items-end gap-2">
                        <p className="font-semibold text-ink text-sm">
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
            )}
          </div>

          {/* Footer with totals and checkout */}
          {state.items.length > 0 && (
            <div className="border-t p-6 space-y-4">
              {/* Order Summary */}
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${getSubtotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  <span className="font-medium">${getTax().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">
                    Delivery {getSubtotal() >= 25 && <span className="text-green-600">(Free!)</span>}
                  </span>
                  <span className="font-medium">${getDeliveryFee().toFixed(2)}</span>
                </div>
                {getSubtotal() < 25 && (
                  <p className="text-xs text-gray-500">
                    Add ${(25 - getSubtotal()).toFixed(2)} more for free delivery
                  </p>
                )}
                <div className="border-t pt-2">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${getTotal().toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  href="/checkout"
                  onClick={closeCart}
                  className="w-full block text-center py-3 bg-matcha-500 text-white rounded-xl font-semibold hover:bg-matcha-600 transition-colors"
                >
                  Checkout
                </Link>
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="w-full block text-center py-2 border border-matcha-500 text-matcha-600 rounded-xl font-semibold hover:bg-matcha-50 transition-colors"
                >
                  View Full Cart
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
