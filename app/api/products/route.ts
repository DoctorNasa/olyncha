import { NextRequest, NextResponse } from 'next/server';
import productsData from '@/data/products.json';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');
    const search = searchParams.get('search');

    let products = Object.values(productsData);

    // Filter by category if provided
    if (category && category !== 'all') {
      products = products.filter(product => 
        product.category.toLowerCase() === category.toLowerCase()
      );
    }

    // Filter by search term if provided
    if (search) {
      const searchTerm = search.toLowerCase();
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
      );
    }

    return NextResponse.json({
      success: true,
      data: products,
      total: products.length
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}

// Get all unique categories
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    if (body.action === 'getCategories') {
      const products = Object.values(productsData);
      const categories = [...new Set(products.map(product => product.category))];
      
      return NextResponse.json({
        success: true,
        data: categories
      });
    }

    return NextResponse.json(
      { success: false, error: 'Invalid action' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Error processing request:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
