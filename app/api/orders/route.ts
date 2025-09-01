import { NextRequest, NextResponse } from 'next/server';

interface OrderItem {
  id: string;
  name: string;
  size: string;
  milk?: string;
  sweetness?: string;
  addOns: string[];
  quantity: number;
  price: number;
}

interface Order {
  id: string;
  userId?: string;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  deliveryFee: number;
  total: number;
  status: 'placed' | 'preparing' | 'out-for-delivery' | 'delivered' | 'cancelled';
  customerInfo: {
    name: string;
    email: string;
    phone: string;
    address: {
      street: string;
      city: string;
      state: string;
      zipCode: string;
    };
  };
  paymentMethod: string;
  createdAt: string;
  updatedAt: string;
  estimatedDelivery?: string;
}

// In-memory storage for demo purposes
// In a real app, this would be a database
let orders: Order[] = [];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Create new order
    const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const now = new Date().toISOString();
    
    const order: Order = {
      id: orderId,
      userId: body.userId,
      items: body.items,
      subtotal: body.subtotal,
      tax: body.tax,
      deliveryFee: body.deliveryFee,
      total: body.total,
      status: 'placed',
      customerInfo: body.customerInfo,
      paymentMethod: body.paymentMethod,
      createdAt: now,
      updatedAt: now,
      estimatedDelivery: new Date(Date.now() + 45 * 60 * 1000).toISOString(), // 45 minutes from now
    };

    orders.push(order);

    return NextResponse.json({
      success: true,
      data: order,
      message: 'Order placed successfully'
    });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');
    const orderId = searchParams.get('orderId');

    if (orderId) {
      // Get specific order
      const order = orders.find(o => o.id === orderId);
      if (!order) {
        return NextResponse.json(
          { success: false, error: 'Order not found' },
          { status: 404 }
        );
      }
      return NextResponse.json({
        success: true,
        data: order
      });
    }

    if (userId) {
      // Get orders for specific user
      const userOrders = orders.filter(o => o.userId === userId);
      return NextResponse.json({
        success: true,
        data: userOrders,
        total: userOrders.length
      });
    }

    // Get all orders (admin view)
    return NextResponse.json({
      success: true,
      data: orders,
      total: orders.length
    });
  } catch (error) {
    console.error('Error fetching orders:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch orders' },
      { status: 500 }
    );
  }
}
