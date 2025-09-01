import { NextRequest, NextResponse } from 'next/server';

interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  createdAt: string;
}

// In-memory storage for demo purposes
// In a real app, this would be a database with proper password hashing
let users: (User & { password: string })[] = [
  {
    id: '1',
    email: 'demo@olyncha.com',
    password: 'demo123', // In real app, this would be hashed
    name: 'Demo User',
    phone: '(555) 123-4567',
    address: {
      street: '123 Main St',
      city: 'Rochester',
      state: 'NH',
      zipCode: '03867'
    },
    createdAt: new Date().toISOString(),
  }
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { action } = body;

    if (action === 'login') {
      const { email, password } = body;
      
      // Find user
      const user = users.find(u => u.email === email && u.password === password);
      
      if (!user) {
        return NextResponse.json(
          { success: false, error: 'Invalid email or password' },
          { status: 401 }
        );
      }

      // Return user without password
      const { password: _, ...userWithoutPassword } = user;
      
      return NextResponse.json({
        success: true,
        data: userWithoutPassword,
        message: 'Login successful'
      });
    }

    if (action === 'signup') {
      const { email, password, name, phone } = body;
      
      // Check if user already exists
      const existingUser = users.find(u => u.email === email);
      if (existingUser) {
        return NextResponse.json(
          { success: false, error: 'User already exists' },
          { status: 400 }
        );
      }

      // Create new user
      const newUser = {
        id: Date.now().toString(),
        email,
        password, // In real app, this would be hashed
        name,
        phone,
        createdAt: new Date().toISOString(),
      };

      users.push(newUser);

      // Return user without password
      const { password: _, ...userWithoutPassword } = newUser;
      
      return NextResponse.json({
        success: true,
        data: userWithoutPassword,
        message: 'Account created successfully'
      });
    }

    if (action === 'updateProfile') {
      const { userId, ...updateData } = body;
      
      const userIndex = users.findIndex(u => u.id === userId);
      if (userIndex === -1) {
        return NextResponse.json(
          { success: false, error: 'User not found' },
          { status: 404 }
        );
      }

      // Update user
      users[userIndex] = { ...users[userIndex], ...updateData };
      
      // Return user without password
      const { password: _, ...userWithoutPassword } = users[userIndex];
      
      return NextResponse.json({
        success: true,
        data: userWithoutPassword,
        message: 'Profile updated successfully'
      });
    }

    return NextResponse.json(
      { success: false, error: 'Invalid action' },
      { status: 400 }
    );
  } catch (error) {
    console.error('Error processing auth request:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
