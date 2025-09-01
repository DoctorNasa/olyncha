import React from 'react';
import Link from 'next/link';
import { CheckCircleIcon, ClockIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function OrderConfirmedPage() {
  // This would typically come from URL params or state management
  const orderData = {
    id: '123456789',
    estimatedDelivery: '45-60 minutes',
    total: 28.96,
    items: [
      { name: 'Matcha Latte (Large)', quantity: 2, price: 12.98 },
      { name: 'Matcha Ice Cream', quantity: 1, price: 6.99 },
      { name: 'Matcha Tiramisu', quantity: 1, price: 8.99 }
    ],
    address: '123 Main St, Rochester, NH 03867',
    paymentMethod: 'Credit Card ending in 4242'
  };

  return (
    <div className="pt-32 pb-20 bg-cream min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          {/* Success Header */}
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircleIcon className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl mb-4 text-ink" style={{ fontWeight: 700 }}>
              Order Confirmed!
            </h1>
            <p className="text-gray-600 text-lg">
              Thank you for your order. We're preparing your matcha with care.
            </p>
          </div>

          {/* Order Summary Card */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="font-semibold text-xl text-ink">Order #{orderData.id}</h2>
                <p className="text-gray-600">Placed just now</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-2xl text-ink">${orderData.total.toFixed(2)}</p>
                <p className="text-gray-600 text-sm">{orderData.paymentMethod}</p>
              </div>
            </div>

            {/* Delivery Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="flex items-start gap-3">
                <ClockIcon className="w-6 h-6 text-matcha-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-ink">Estimated Delivery</h3>
                  <p className="text-gray-600">{orderData.estimatedDelivery}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPinIcon className="w-6 h-6 text-matcha-500 mt-1" />
                <div>
                  <h3 className="font-semibold text-ink">Delivery Address</h3>
                  <p className="text-gray-600">{orderData.address}</p>
                </div>
              </div>
            </div>

            {/* Order Items */}
            <div className="border-t pt-6">
              <h3 className="font-semibold text-lg mb-4 text-ink">Your Order</h3>
              <div className="space-y-3">
                {orderData.items.map((item, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <span className="font-medium text-ink">{item.name}</span>
                      <span className="text-gray-600 ml-2">x{item.quantity}</span>
                    </div>
                    <span className="font-medium text-ink">${item.price.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <Link
              href="/order-status"
              className="w-full block text-center py-4 bg-matcha-500 text-white rounded-xl font-semibold text-lg hover:bg-matcha-600 transition-colors"
            >
              Track Your Order
            </Link>
            
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="/menu"
                className="text-center py-3 border-2 border-matcha-500 text-matcha-600 rounded-xl font-semibold hover:bg-matcha-50 transition-colors"
              >
                Order Again
              </Link>
              <Link
                href="/"
                className="text-center py-3 border-2 border-gray-300 text-gray-600 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 bg-matcha-50 rounded-xl p-6">
            <h3 className="font-semibold text-ink mb-3">What happens next?</h3>
            <div className="space-y-2 text-gray-700">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-matcha-500 rounded-full"></div>
                <span>We'll start preparing your order immediately</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-matcha-500 rounded-full"></div>
                <span>You'll receive updates via SMS and email</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-matcha-500 rounded-full"></div>
                <span>Our delivery partner will bring your order to you</span>
              </div>
            </div>
          </div>

          {/* Contact Support */}
          <div className="mt-6 text-center">
            <p className="text-gray-600 mb-2">Need help with your order?</p>
            <Link
              href="/contact"
              className="text-matcha-600 font-semibold hover:underline"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
