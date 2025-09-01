import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AuthProvider } from '@/contexts/AuthContext'
import { CartProvider } from '@/contexts/CartContext'
import MenuDetailPage from '@/app/menu/[slug]/page'
import CartPage from '@/app/cart/page'
import CheckoutPage from '@/app/checkout/page'

// Mock next/navigation
const mockPush = jest.fn()
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
  useParams: () => ({ slug: 'matcha-latte' }),
}))

// Mock fetch for API calls
global.fetch = jest.fn()

// Mock products data
jest.mock('@/data/products.json', () => ({
  'matcha-latte': {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    description: 'Premium matcha latte',
    basePrice: 5.95,
    image: '🍵',
    category: 'Drinks',
    sizes: [
      { name: 'Small', price: 4.95 },
      { name: 'Medium', price: 5.95 },
      { name: 'Large', price: 6.95 }
    ],
    milkOptions: ['Whole Milk', 'Almond Milk', 'Oat Milk'],
    sweetnessLevels: ['Unsweetened', 'Regular', 'Extra Sweet'],
    addOns: [
      { name: 'Extra Shot', price: 0.75 },
      { name: 'Whipped Cream', price: 0.50 }
    ]
  }
}))

const TestProviders = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider>
    <CartProvider>
      {children}
    </CartProvider>
  </AuthProvider>
)

describe('Complete Shopping Flow E2E', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    localStorage.clear()
    
    // Mock successful API responses
    ;(global.fetch as jest.Mock).mockImplementation((url: string) => {
      if (url.includes('/api/orders')) {
        // Add a short async delay so the UI shows the loading state reliably
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              ok: true,
              json: () => Promise.resolve({
                success: true,
                data: {
                  id: 'ORD-123456789',
                  status: 'placed',
                  total: 15.01
                }
              })
            })
          }, 25)
        })
      }
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ success: true, data: {} })
      })
    })
  })

  describe('Product Customization and Add to Cart', () => {
    it('should allow user to customize product and add to cart', async () => {
      const user = userEvent.setup()
      
      render(
        <TestProviders>
          <MenuDetailPage />
        </TestProviders>
      )

      // Verify product details are displayed (use heading to avoid duplicates)
      expect(screen.getByRole('heading', { name: /Matcha Latte/i })).toBeInTheDocument()
      expect(screen.getByText('Premium matcha latte')).toBeInTheDocument()

      // Select Large size
      const largeSize = screen.getByLabelText(/Large/i)
      await user.click(largeSize)

      // Select Oat Milk
      const oatMilk = screen.getByLabelText(/Oat Milk/i)
      await user.click(oatMilk)

      // Select Regular sweetness
      const regularSweetness = screen.getByLabelText(/Regular/i)
      await user.click(regularSweetness)

      // Add Extra Shot
      const extraShot = screen.getByLabelText(/Extra Shot/i)
      await user.click(extraShot)

      // Increase quantity to 2
      const plusButton = screen.getByRole('button', { name: /plus/i })
      await user.click(plusButton)

      // Verify price calculation
      const expectedPrice = (6.95 + 0.75) * 2 // Large + Extra Shot * 2
      expect(screen.getByText(`$${expectedPrice.toFixed(2)}`)).toBeInTheDocument()

      // Add to cart
      const addToCartButton = screen.getByText('Add to Cart')
      await user.click(addToCartButton)

      // Verify item was added to cart (this would trigger cart sidebar to open)
      // In a real E2E test, we'd verify the cart sidebar appears
    })
  })

  describe('Cart Management', () => {
    it('should display cart items and allow quantity updates', async () => {
      const user = userEvent.setup()
      
      // Pre-populate cart with test data
      const cartItems = [
        {
          id: 'test-item-1',
          name: 'Matcha Latte',
          size: 'Large',
          milk: 'Oat Milk',
          sweetness: 'Regular',
          addOns: ['Extra Shot'],
          quantity: 2,
          price: 7.70,
          image: '🍵',
          basePrice: 6.95
        }
      ]
      localStorage.setItem('olyn-cha-cart', JSON.stringify(cartItems))

      render(
        <TestProviders>
          <CartPage />
        </TestProviders>
      )

      // Verify cart items are displayed
      expect(screen.getByText('Your Order')).toBeInTheDocument()
      expect(screen.getByText('Matcha Latte')).toBeInTheDocument()
      expect(screen.getByText('Large')).toBeInTheDocument()
      expect(screen.getByText('Oat Milk')).toBeInTheDocument()
      expect(screen.getByText('Add-ons: Extra Shot')).toBeInTheDocument()

      // Verify pricing
      expect(screen.getAllByText('$15.40').length).toBeGreaterThan(0) // 7.70 * 2

      // Test quantity update
      const plusButtons = screen.getAllByRole('button', { name: /plus/i })
      await user.click(plusButtons[0])

      // Test remove item
      const removeButton = screen.getByRole('button', { name: /trash/i })
      await user.click(removeButton)
    })

    it('should show empty cart message when no items', () => {
      render(
        <TestProviders>
          <CartPage />
        </TestProviders>
      )

      expect(screen.getByText('Your Cart is Empty')).toBeInTheDocument()
      expect(screen.getByText('Browse Menu')).toBeInTheDocument()
    })
  })

  describe('Checkout Process', () => {
    it('should complete checkout with valid information', async () => {
      const user = userEvent.setup()
      
      // Pre-populate cart
      const cartItems = [
        {
          id: 'test-item-1',
          name: 'Matcha Latte',
          size: 'Large',
          quantity: 1,
          price: 6.95,
          image: '🍵',
          basePrice: 6.95,
          addOns: []
        }
      ]
      localStorage.setItem('olyn-cha-cart', JSON.stringify(cartItems))

      render(
        <TestProviders>
          <CheckoutPage />
        </TestProviders>
      )

      // Fill out customer information
      await user.type(screen.getByPlaceholderText('Full Name'), 'John Doe')
      await user.type(screen.getByPlaceholderText('Email Address'), 'john@example.com')
      await user.type(screen.getByPlaceholderText('Phone Number'), '555-1234')

      // Fill out delivery address
      await user.type(screen.getByPlaceholderText('Street Address'), '123 Main St')
      await user.type(screen.getByPlaceholderText('City'), 'Rochester')
      await user.type(screen.getByPlaceholderText('State'), 'NH')
      await user.type(screen.getByPlaceholderText('ZIP Code'), '03867')

      // Select payment method (Credit Card is default)
      const creditCardOption = screen.getByLabelText('Credit Card')
      expect(creditCardOption).toBeChecked()

      // Fill out credit card information
      await user.type(screen.getByPlaceholderText('Card Number'), '4242424242424242')
      await user.type(screen.getByPlaceholderText('MM/YY'), '12/25')
      await user.type(screen.getByPlaceholderText('CVV'), '123')

      // Submit order
      const placeOrderButton = screen.getByText('Place Order')
      // Wait until cart has loaded into the checkout (button enabled)
      await waitFor(() => expect(placeOrderButton).not.toBeDisabled())
      await user.click(placeOrderButton)
      
      // Verify loading state
      expect(screen.getByText('Placing Order...')).toBeInTheDocument()

      // Wait for order completion and redirect
      await waitFor(() => {
        expect(mockPush).toHaveBeenCalledWith(expect.stringContaining('/order-confirmed'))
      })

      // Verify API was called
      expect(global.fetch).toHaveBeenCalledWith('/api/orders', expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: expect.stringContaining('John Doe')
      }))
    })

    it('should show error for empty cart', async () => {
      const user = userEvent.setup()
      
      render(
        <TestProviders>
          <CheckoutPage />
        </TestProviders>
      )

      // Try to submit with empty cart
      const placeOrderButton = screen.getByText('Place Order')
      expect(placeOrderButton).toBeDisabled()

      expect(screen.getByText(/Your cart is empty/)).toBeInTheDocument()
    })

    it('should handle payment method selection', async () => {
      const user = userEvent.setup()
      
      // Pre-populate cart
      const cartItems = [
        {
          id: 'test-item-1',
          name: 'Matcha Latte',
          size: 'Large',
          quantity: 1,
          price: 6.95,
          image: '🍵',
          basePrice: 6.95,
          addOns: []
        }
      ]
      localStorage.setItem('olyn-cha-cart', JSON.stringify(cartItems))

      render(
        <TestProviders>
          <CheckoutPage />
        </TestProviders>
      )

      // Switch to Cash on Delivery
      const cashOption = screen.getByLabelText('Cash on Delivery')
      await user.click(cashOption)

      expect(cashOption).toBeChecked()

      // Credit card fields should not be visible
      expect(screen.queryByPlaceholderText('Card Number')).not.toBeInTheDocument()

      // Switch back to Credit Card
      const creditCardOption = screen.getByLabelText('Credit Card')
      await user.click(creditCardOption)

      expect(creditCardOption).toBeChecked()

      // Credit card fields should be visible again
      expect(screen.getByPlaceholderText('Card Number')).toBeInTheDocument()
    })
  })

  describe('Form Validation', () => {
    it('should validate required fields in checkout', async () => {
      const user = userEvent.setup()
      
      // Pre-populate cart
      const cartItems = [
        {
          id: 'test-item-1',
          name: 'Matcha Latte',
          size: 'Large',
          quantity: 1,
          price: 6.95,
          image: '🍵',
          basePrice: 6.95,
          addOns: []
        }
      ]
      localStorage.setItem('olyn-cha-cart', JSON.stringify(cartItems))

      render(
        <TestProviders>
          <CheckoutPage />
        </TestProviders>
      )

      // Try to submit without filling required fields
      const placeOrderButton = screen.getByText('Place Order')
      await user.click(placeOrderButton)

      // Form should not submit due to HTML5 validation
      // The browser will show validation messages for required fields
      expect(mockPush).not.toHaveBeenCalled()
    })
  })
})
