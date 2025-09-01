import { NextRequest, NextResponse } from 'next/server';

// This would typically connect to a database
// For demo purposes, we'll use a simple in-memory store
let orders: any[] = [];

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const orderId = params.id;
    
    // For demo purposes, return mock order data
    const mockOrder = {
      id: orderId,
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
      address: '123 Main St, Rochester, NH 03867',
      customerInfo: {
        name: 'Demo User',
        email: 'demo@olyncha.com',
        phone: '(555) 123-4567'
      },
      paymentMethod: 'Credit Card ending in 4242'
    };

    return NextResponse.json({
      success: true,
      data: mockOrder
    });
  } catch (error) {
    console.error('Error fetching order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch order' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const orderId = params.id;
    const body = await request.json();
    
    // Update order status
    // In a real app, this would update the database
    
    return NextResponse.json({
      success: true,
      message: 'Order updated successfully',
      data: {
        id: orderId,
        status: body.status,
        updatedAt: new Date().toISOString()
      }
    });
  } catch (error) {
    console.error('Error updating order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update order' },
      { status: 500 }
    );
  }
}
