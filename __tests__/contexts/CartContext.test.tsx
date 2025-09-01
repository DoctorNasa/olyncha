import React from 'react'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CartProvider, useCart, CartItem } from '@/contexts/CartContext'

// Test component to interact with cart context
const TestComponent = () => {
  const {
    state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    getItemCount,
    getSubtotal,
    getTax,
    getDeliveryFee,
    getTotal,
  } = useCart()

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
      <div data-testid="cart-tax">{getTax().toFixed(2)}</div>
      <div data-testid="cart-delivery">{getDeliveryFee().toFixed(2)}</div>
      <div data-testid="cart-total">{getTotal().toFixed(2)}</div>
      <div data-testid="cart-open">{state.isOpen ? 'open' : 'closed'}</div>
      <div data-testid="cart-items">{state.items.length}</div>
      
      <button onClick={() => addItem(mockItem)} data-testid="add-item">
        Add Item
      </button>
      <button onClick={() => removeItem('test-item-1')} data-testid="remove-item">
        Remove Item
      </button>
      <button onClick={() => updateQuantity('test-item-1', 3)} data-testid="update-quantity">
        Update Quantity
      </button>
      <button onClick={() => updateQuantity('test-item-1', 0)} data-testid="set-quantity-zero">
        Set Quantity Zero
      </button>
      <button onClick={clearCart} data-testid="clear-cart">
        Clear Cart
      </button>
      <button onClick={toggleCart} data-testid="toggle-cart">
        Toggle Cart
      </button>
    </div>
  )
}

const renderWithCartProvider = () => {
  return render(
    <CartProvider>
      <TestComponent />
    </CartProvider>
  )
}

describe('CartContext', () => {
  beforeEach(() => {
    localStorage.clear()
  })

  describe('Initial State', () => {
    it('should have empty cart initially', () => {
      renderWithCartProvider()
      
      expect(screen.getByTestId('cart-count')).toHaveTextContent('0')
      expect(screen.getByTestId('cart-items')).toHaveTextContent('0')
      expect(screen.getByTestId('cart-subtotal')).toHaveTextContent('0.00')
      expect(screen.getByTestId('cart-open')).toHaveTextContent('closed')
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
        },
      ]
      localStorage.setItem('olyn-cha-cart', JSON.stringify(savedCart))

      renderWithCartProvider()
      
      expect(screen.getByTestId('cart-count')).toHaveTextContent('2')
      expect(screen.getByTestId('cart-items')).toHaveTextContent('1')
    })
  })

  describe('Adding Items', () => {
    it('should add item to cart', async () => {
      const user = userEvent.setup()
      renderWithCartProvider()

      await user.click(screen.getByTestId('add-item'))

      expect(screen.getByTestId('cart-count')).toHaveTextContent('1')
      expect(screen.getByTestId('cart-items')).toHaveTextContent('1')
      expect(screen.getByTestId('cart-subtotal')).toHaveTextContent('6.95')
    })

    it('should increase quantity for identical items', async () => {
      const user = userEvent.setup()
      renderWithCartProvider()

      await user.click(screen.getByTestId('add-item'))
      await user.click(screen.getByTestId('add-item'))

      expect(screen.getByTestId('cart-count')).toHaveTextContent('2')
      expect(screen.getByTestId('cart-items')).toHaveTextContent('1') // Still one unique item
      expect(screen.getByTestId('cart-subtotal')).toHaveTextContent('13.90')
    })

    it('should save cart to localStorage when adding items', async () => {
      const user = userEvent.setup()
      renderWithCartProvider()

      await user.click(screen.getByTestId('add-item'))

      expect(localStorage.setItem).toHaveBeenCalledWith(
        'olyn-cha-cart',
        expect.stringContaining('Test Matcha Latte')
      )
    })
  })

  describe('Removing Items', () => {
    it('should remove item from cart', async () => {
      const user = userEvent.setup()
      renderWithCartProvider()

      await user.click(screen.getByTestId('add-item'))
      expect(screen.getByTestId('cart-count')).toHaveTextContent('1')

      await user.click(screen.getByTestId('remove-item'))
      expect(screen.getByTestId('cart-count')).toHaveTextContent('0')
    })
  })

  describe('Updating Quantity', () => {
    it('should update item quantity', async () => {
      const user = userEvent.setup()
      renderWithCartProvider()

      await user.click(screen.getByTestId('add-item'))
      await user.click(screen.getByTestId('update-quantity'))

      expect(screen.getByTestId('cart-count')).toHaveTextContent('3')
      expect(screen.getByTestId('cart-subtotal')).toHaveTextContent('20.85')
    })

    it('should remove item when quantity is set to 0', async () => {
      const user = userEvent.setup()
      renderWithCartProvider()

      await user.click(screen.getByTestId('add-item'))
      
      // Simulate updating quantity to 0 via test control
      await user.click(screen.getByTestId('set-quantity-zero'))

      expect(screen.getByTestId('cart-count')).toHaveTextContent('0')
    })
  })

  describe('Cart Calculations', () => {
    it('should calculate tax correctly (8%)', async () => {
      const user = userEvent.setup()
      renderWithCartProvider()

      await user.click(screen.getByTestId('add-item'))

      const subtotal = 6.95
      const expectedTax = (subtotal * 0.08).toFixed(2)
      expect(screen.getByTestId('cart-tax')).toHaveTextContent(expectedTax)
    })

    it('should apply free delivery for orders over $25', async () => {
      const user = userEvent.setup()
      renderWithCartProvider()

      // Add enough items to exceed $25
      for (let i = 0; i < 4; i++) {
        await user.click(screen.getByTestId('add-item'))
      }

      expect(screen.getByTestId('cart-delivery')).toHaveTextContent('0.00')
    })

    it('should charge delivery fee for orders under $25', async () => {
      const user = userEvent.setup()
      renderWithCartProvider()

      await user.click(screen.getByTestId('add-item'))

      expect(screen.getByTestId('cart-delivery')).toHaveTextContent('3.99')
    })

    it('should calculate total correctly', async () => {
      const user = userEvent.setup()
      renderWithCartProvider()

      await user.click(screen.getByTestId('add-item'))

      const subtotal = 6.95
      const tax = subtotal * 0.08
      const delivery = 3.99
      const expectedTotal = (subtotal + tax + delivery).toFixed(2)

      expect(screen.getByTestId('cart-total')).toHaveTextContent(expectedTotal)
    })
  })

  describe('Cart UI State', () => {
    it('should toggle cart open/closed state', async () => {
      const user = userEvent.setup()
      renderWithCartProvider()

      expect(screen.getByTestId('cart-open')).toHaveTextContent('closed')

      await user.click(screen.getByTestId('toggle-cart'))
      expect(screen.getByTestId('cart-open')).toHaveTextContent('open')

      await user.click(screen.getByTestId('toggle-cart'))
      expect(screen.getByTestId('cart-open')).toHaveTextContent('closed')
    })
  })

  describe('Clear Cart', () => {
    it('should clear all items from cart', async () => {
      const user = userEvent.setup()
      renderWithCartProvider()

      await user.click(screen.getByTestId('add-item'))
      expect(screen.getByTestId('cart-count')).toHaveTextContent('1')

      await user.click(screen.getByTestId('clear-cart'))
      expect(screen.getByTestId('cart-count')).toHaveTextContent('0')
      expect(screen.getByTestId('cart-subtotal')).toHaveTextContent('0.00')
    })
  })
})
