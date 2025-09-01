'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';

export default function CheckoutPage() {
  const router = useRouter();
  const { state: cartState, clearCart, getSubtotal, getTax, getDeliveryFee, getTotal } = useCart();
  const { state: authState } = useAuth();

  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: authState.user?.name || '',
    email: authState.user?.email || '',
    phone: authState.user?.phone || '',
    address: authState.user?.address?.street || '',
    city: authState.user?.address?.city || '',
    state: authState.user?.address?.state || '',
    zipCode: authState.user?.address?.zipCode || '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (cartState.items.length === 0) {
      alert('Your cart is empty');
      return;
    }

    setIsSubmitting(true);

    try {
      // Prepare order data
      const orderData = {
        userId: authState.user?.id,
        items: cartState.items,
        subtotal: getSubtotal(),
        tax: getTax(),
        deliveryFee: getDeliveryFee(),
        total: getTotal(),
        customerInfo: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          address: {
            street: formData.address,
            city: formData.city,
            state: formData.state,
            zipCode: formData.zipCode,
          }
        },
        paymentMethod: paymentMethod === 'credit' ? 'Credit Card' : 'Cash on Delivery'
      };

      // Submit order to API
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const result = await response.json();

      if (result.success) {
        // Clear cart and redirect to confirmation
        clearCart();
        router.push(`/order-confirmed?orderId=${result.data.id}`);
      } else {
        alert('Failed to place order: ' + result.error);
      }
    } catch (error) {
      console.error('Error placing order:', error);
      alert('An error occurred while placing your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-20 bg-cream min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl mb-8 text-ink text-center" style={{ fontWeight: 700 }}>
            Checkout
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Customer Information */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-xl mb-6 text-ink">
                Customer Information
              </h3>

              <div className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-cream focus:outline-none focus:ring-2 focus:ring-matcha-500 focus:border-transparent"
                  required
                />

                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-cream focus:outline-none focus:ring-2 focus:ring-matcha-500 focus:border-transparent"
                  required
                />

                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-cream focus:outline-none focus:ring-2 focus:ring-matcha-500 focus:border-transparent"
                  required
                />
              </div>
            </div>

            {/* Delivery Address Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-xl mb-6 text-ink">
                Delivery Address
              </h3>

              <div className="space-y-4">
                <input
                  type="text"
                  name="address"
                  placeholder="Street Address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-cream focus:outline-none focus:ring-2 focus:ring-matcha-500 focus:border-transparent"
                  required
                />
                
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-cream focus:outline-none focus:ring-2 focus:ring-matcha-500 focus:border-transparent"
                  required
                />
                
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-gray-300 rounded-xl bg-cream focus:outline-none focus:ring-2 focus:ring-matcha-500 focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP Code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="px-4 py-3 border border-gray-300 rounded-xl bg-cream focus:outline-none focus:ring-2 focus:ring-matcha-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Section */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-xl mb-6 text-ink">
                Payment Method
              </h3>
              
              <div className="space-y-4 mb-6">
                <label className="flex items-center gap-4 p-4 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="credit"
                    checked={paymentMethod === 'credit'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 text-matcha-500 focus:ring-matcha-500"
                  />
                  <span className="font-medium text-ink">Credit Card</span>
                </label>
                
                <label className="flex items-center gap-4 p-4 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cash"
                    checked={paymentMethod === 'cash'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="w-5 h-5 text-matcha-500 focus:ring-matcha-500"
                  />
                  <span className="font-medium text-ink">Cash on Delivery</span>
                </label>
              </div>

              {paymentMethod === 'credit' && (
                <div className="space-y-4">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-cream focus:outline-none focus:ring-2 focus:ring-matcha-500 focus:border-transparent"
                    required={paymentMethod === 'credit'}
                  />
                  
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="MM/YY"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 rounded-xl bg-cream focus:outline-none focus:ring-2 focus:ring-matcha-500 focus:border-transparent"
                      required={paymentMethod === 'credit'}
                    />
                    <input
                      type="text"
                      name="cvv"
                      placeholder="CVV"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="px-4 py-3 border border-gray-300 rounded-xl bg-cream focus:outline-none focus:ring-2 focus:ring-matcha-500 focus:border-transparent"
                      required={paymentMethod === 'credit'}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || cartState.items.length === 0}
              className="w-full py-4 bg-matcha-500 text-white rounded-xl font-semibold text-lg hover:bg-matcha-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Placing Order...' : 'Place Order'}
            </button>

            {cartState.items.length === 0 && (
              <p className="text-center text-gray-600 text-sm">
                Your cart is empty. <a href="/menu" className="text-matcha-600 hover:underline">Browse our menu</a> to add items.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
