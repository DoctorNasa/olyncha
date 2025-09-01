'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircleIcon, ClockIcon, TruckIcon } from '@heroicons/react/24/outline';

interface OrderStatus {
  id: string;
  status: 'placed' | 'preparing' | 'out-for-delivery' | 'delivered';
  placedAt: string;
  preparingAt?: string;
  outForDeliveryAt?: string;
  deliveredAt?: string;
  estimatedDelivery: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>;
  total: number;
  address: string;
}

export default function OrderStatusPage() {
  const [orderData, setOrderData] = useState<OrderStatus | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching order data
    setTimeout(() => {
      setOrderData({
        id: '123456789',
        status: 'preparing',
        placedAt: '10:00 AM',
        preparingAt: '10:15 AM',
        estimatedDelivery: '11:00 AM',
        items: [
          { name: 'Matcha Latte (Large)', quantity: 2, price: 12.98 },
          { name: 'Matcha Ice Cream', quantity: 1, price: 6.99 },
          { name: 'Matcha Tiramisu', quantity: 1, price: 8.99 }
        ],
        total: 28.96,
        address: '123 Main St, Rochester, NH 03867'
      });
      setLoading(false);
    }, 1000);
  }, []);

  const getStatusProgress = (status: string) => {
    switch (status) {
      case 'placed': return 25;
      case 'preparing': return 50;
      case 'out-for-delivery': return 75;
      case 'delivered': return 100;
      default: return 0;
    }
  };

  const getStatusColor = (currentStatus: string, stepStatus: string) => {
    const statusOrder = ['placed', 'preparing', 'out-for-delivery', 'delivered'];
    const currentIndex = statusOrder.indexOf(currentStatus);
    const stepIndex = statusOrder.indexOf(stepStatus);
    
    if (stepIndex <= currentIndex) {
      return 'text-matcha-600 bg-matcha-100';
    }
    return 'text-gray-400 bg-gray-100';
  };

  if (loading) {
    return (
      <div className="pt-32 pb-20 bg-cream min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-matcha-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading order status...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!orderData) {
    return (
      <div className="pt-32 pb-20 bg-cream min-h-screen">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-gray-600">Order not found.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20 bg-cream min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-serif text-4xl md:text-5xl mb-4 text-ink" style={{ fontWeight: 700 }}>
              Order Status
            </h1>
            <p className="text-gray-600">
              Order #{orderData.id}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="bg-white rounded-xl p-6 mb-6 shadow-sm">
            <div className="mb-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progress</span>
                <span>ETA: {orderData.estimatedDelivery}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div 
                  className="bg-matcha-500 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${getStatusProgress(orderData.status)}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Status Steps */}
          <div className="space-y-4 mb-8">
            {/* Order Placed */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(orderData.status, 'placed')}`}>
                  <CheckCircleIcon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-ink">Order Placed</h3>
                  <p className="text-gray-600 text-sm">{orderData.placedAt}</p>
                </div>
              </div>
            </div>

            {/* Preparing */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(orderData.status, 'preparing')}`}>
                  <ClockIcon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-ink">Preparing</h3>
                  <p className="text-gray-600 text-sm">
                    {orderData.preparingAt || 'Waiting to start preparation'}
                  </p>
                </div>
              </div>
            </div>

            {/* Out for Delivery */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(orderData.status, 'out-for-delivery')}`}>
                  <TruckIcon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-ink">Out for Delivery</h3>
                  <p className="text-gray-600 text-sm">
                    {orderData.outForDeliveryAt || 'Not yet dispatched'}
                  </p>
                </div>
              </div>
            </div>

            {/* Delivered */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(orderData.status, 'delivered')}`}>
                  <CheckCircleIcon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-ink">Delivered</h3>
                  <p className="text-gray-600 text-sm">
                    {orderData.deliveredAt || 'Pending delivery'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="font-semibold text-xl mb-4 text-ink">Order Details</h3>
            
            <div className="space-y-3 mb-6">
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
            
            <div className="border-t pt-4">
              <div className="flex justify-between items-center font-semibold text-lg">
                <span className="text-ink">Total</span>
                <span className="text-ink">${orderData.total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <h4 className="font-semibold text-ink mb-2">Delivery Address</h4>
              <p className="text-gray-600">{orderData.address}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
