import React from 'react'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CartProvider, useCart, CartItem } from '@/contexts/CartContext'

// Simple test component without complex interactions
const SimpleCartTest = () => {
  const { state, addItem, getItemCount, getSubtotal } = useCart()

  const mockItem: CartItem = {
    id: 'test-item-1',
    name: 'Test Matcha Latte',
    size: 'Large',
    milk: 'Oat Milk',
    sweetness: 'Regular',
    addOns: ['Extra Shot'],
    quantity: 1,
    price: 6.95,
    image: '🍵',
    basePrice: 5.95,
  }

  return (
    <div>
      <div data-testid="cart-count">{getItemCount()}</div>
      <div data-testid="cart-subtotal">{getSubtotal().toFixed(2)}</div>
      <div data-testid="cart-items">{state.items.length}</div>
      
      <button onClick={() => addItem(mockItem)} data-testid="add-item">
        Add Item
      </button>
    </div>
  )
}

const renderWithProvider = () => {
  return render(
    <CartProvider>
      <SimpleCartTest />
    </CartProvider>
  )
}

describe('CartContext - Simple Tests', () => {
  beforeEach(() => {
    // Clear localStorage mock
    jest.clearAllMocks()
    localStorage.getItem.mockReturnValue(null)
  })

  it('should have empty cart initially', () => {
    renderWithProvider()
    
    expect(screen.getByTestId('cart-count')).toHaveTextContent('0')
    expect(screen.getByTestId('cart-items')).toHaveTextContent('0')
    expect(screen.getByTestId('cart-subtotal')).toHaveTextContent('0.00')
  })

  it('should add item to cart', async () => {
    const user = userEvent.setup()
    renderWithProvider()

    await user.click(screen.getByTestId('add-item'))

    expect(screen.getByTestId('cart-count')).toHaveTextContent('1')
    expect(screen.getByTestId('cart-items')).toHaveTextContent('1')
    expect(screen.getByTestId('cart-subtotal')).toHaveTextContent('6.95')
  })

  it('should increase quantity for identical items', async () => {
    const user = userEvent.setup()
    renderWithProvider()

    await user.click(screen.getByTestId('add-item'))
    await user.click(screen.getByTestId('add-item'))

    expect(screen.getByTestId('cart-count')).toHaveTextContent('2')
    expect(screen.getByTestId('cart-items')).toHaveTextContent('1') // Still one unique item
    expect(screen.getByTestId('cart-subtotal')).toHaveTextContent('13.90')
  })

  it('should load cart from localStorage if available', () => {
    const savedCart = [
      {
        id: 'saved-item',
        name: 'Saved Latte',
        size: 'Medium',
        quantity: 2,
        price: 5.95,
        image: '🍵',
        basePrice: 5.95,
        addOns: [],
        milk: 'Oat Milk',
        sweetness: 'Regular',
      },
    ]
    localStorage.getItem.mockReturnValue(JSON.stringify(savedCart))

    renderWithProvider()
    
    expect(screen.getByTestId('cart-count')).toHaveTextContent('2')
    expect(screen.getByTestId('cart-items')).toHaveTextContent('1')
  })
})
