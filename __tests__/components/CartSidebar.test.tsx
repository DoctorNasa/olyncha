import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CartSidebar from '@/components/CartSidebar'
import { CartProvider } from '@/contexts/CartContext'

// Mock next/link
jest.mock('next/link', () => {
  return ({ children, href, onClick }: any) => (
    <a href={href} onClick={onClick}>
      {children}
    </a>
  )
})

const mockCartState = {
  items: [
    {
      id: 'test-item-1',
      name: 'Matcha Latte',
      size: 'Large',
      milk: 'Oat Milk',
      sweetness: 'Regular',
      addOns: ['Extra Shot'],
      quantity: 2,
      price: 6.95,
      image: '🍵',
      basePrice: 5.95,
    },
    {
      id: 'test-item-2',
      name: 'Matcha Ice Cream',
      size: 'Regular',
      addOns: [],
      quantity: 1,
      price: 6.99,
      image: '🍦',
      basePrice: 6.99,
    },
  ],
  isOpen: true,
}

const mockCartActions = {
  removeItem: jest.fn(),
  updateQuantity: jest.fn(),
  closeCart: jest.fn(),
  getItemCount: jest.fn(() => 3),
  getSubtotal: jest.fn(() => 20.89),
  getTax: jest.fn(() => 1.67),
  getDeliveryFee: jest.fn(() => 3.99),
  getTotal: jest.fn(() => 26.55),
}

// Mock the useCart hook as a jest.fn so tests can override return values
const mockedUseCart = jest.fn(() => ({
  state: mockCartState,
  ...mockCartActions,
}))
jest.mock('@/contexts/CartContext', () => {
  const actual = jest.requireActual('@/contexts/CartContext')
  return {
    ...actual,
    // Default mock; individual tests override via jest.mocked(...).mockReturnValue(...)
    useCart: jest.fn(() => ({
      state: { items: [], isOpen: false },
      removeItem: jest.fn(),
      updateQuantity: jest.fn(),
      closeCart: jest.fn(),
      getItemCount: jest.fn(() => 0),
      getSubtotal: jest.fn(() => 0),
      getTax: jest.fn(() => 0),
      getDeliveryFee: jest.fn(() => 0),
      getTotal: jest.fn(() => 0),
    })),
  }
})

describe('CartSidebar', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('When cart is closed', () => {
    it('should not render when cart is closed', () => {
      const mockClosedState = { ...mockCartState, isOpen: false }
      jest.mocked(require('@/contexts/CartContext').useCart).mockReturnValue({
        state: mockClosedState,
        ...mockCartActions,
      })

      render(<CartSidebar />)
      
      expect(screen.queryByText('Your Cart')).not.toBeInTheDocument()
    })
  })

  describe('When cart is open', () => {
    beforeEach(() => {
      jest.mocked(require('@/contexts/CartContext').useCart).mockReturnValue({
        state: mockCartState,
        ...mockCartActions,
      })
    })

    it('should render cart sidebar with items', () => {
      render(<CartSidebar />)
      
      expect(screen.getByText('Your Cart (3)')).toBeInTheDocument()
      expect(screen.getByText('Matcha Latte')).toBeInTheDocument()
      expect(screen.getByText('Matcha Ice Cream')).toBeInTheDocument()
      expect(screen.getByText('Large')).toBeInTheDocument()
      expect(screen.getByText('Oat Milk')).toBeInTheDocument()
      expect(screen.getByText('Add-ons: Extra Shot')).toBeInTheDocument()
    })

    it('should display correct pricing information', () => {
      render(<CartSidebar />)
      
      expect(screen.getByText('$20.89')).toBeInTheDocument() // Subtotal
      expect(screen.getByText('$1.67')).toBeInTheDocument()  // Tax
      expect(screen.getByText('$3.99')).toBeInTheDocument()  // Delivery
      expect(screen.getByText('$26.55')).toBeInTheDocument() // Total
    })

    it('should show free delivery message when applicable', () => {
      mockCartActions.getSubtotal.mockReturnValue(30.00)
      mockCartActions.getDeliveryFee.mockReturnValue(0)
      
      render(<CartSidebar />)
      
      expect(screen.getByText('(Free!)')).toBeInTheDocument()
    })

    it('should show how much more needed for free delivery', () => {
      mockCartActions.getSubtotal.mockReturnValue(20.00)
      mockCartActions.getDeliveryFee.mockReturnValue(3.99)
      
      render(<CartSidebar />)
      
      expect(screen.getByText(/Add \$5\.00 more for free delivery/)).toBeInTheDocument()
    })

    it('should close cart when backdrop is clicked', async () => {
      const user = userEvent.setup()
      render(<CartSidebar />)
      
      const backdrop = document.querySelector('.fixed.inset-0.bg-black')
      expect(backdrop).toBeInTheDocument()
      
      await user.click(backdrop!)
      expect(mockCartActions.closeCart).toHaveBeenCalled()
    })

    it('should close cart when X button is clicked', async () => {
      const user = userEvent.setup()
      render(<CartSidebar />)
      
      const closeButton = screen.getByRole('button', { name: /close/i })
      await user.click(closeButton)
      
      expect(mockCartActions.closeCart).toHaveBeenCalled()
    })

    it('should update item quantity when + button is clicked', async () => {
      const user = userEvent.setup()
      render(<CartSidebar />)
      
      const plusButtons = screen.getAllByRole('button', { name: /plus/i })
      await user.click(plusButtons[0])
      
      expect(mockCartActions.updateQuantity).toHaveBeenCalledWith('test-item-1', 3)
    })

    it('should update item quantity when - button is clicked', async () => {
      const user = userEvent.setup()
      render(<CartSidebar />)
      
      const minusButtons = screen.getAllByRole('button', { name: /minus/i })
      await user.click(minusButtons[0])
      
      expect(mockCartActions.updateQuantity).toHaveBeenCalledWith('test-item-1', 1)
    })

    it('should remove item when trash button is clicked', async () => {
      const user = userEvent.setup()
      render(<CartSidebar />)
      
      const trashButtons = screen.getAllByRole('button', { name: /trash/i })
      await user.click(trashButtons[0])
      
      expect(mockCartActions.removeItem).toHaveBeenCalledWith('test-item-1')
    })

    it('should close cart when checkout link is clicked', async () => {
      const user = userEvent.setup()
      render(<CartSidebar />)
      
      const checkoutLink = screen.getByText('Checkout')
      await user.click(checkoutLink)
      
      expect(mockCartActions.closeCart).toHaveBeenCalled()
    })

    it('should close cart when view full cart link is clicked', async () => {
      const user = userEvent.setup()
      render(<CartSidebar />)
      
      const viewCartLink = screen.getByText('View Full Cart')
      await user.click(viewCartLink)
      
      expect(mockCartActions.closeCart).toHaveBeenCalled()
    })
  })

  describe('When cart is empty', () => {
    beforeEach(() => {
      const emptyCartState = { ...mockCartState, items: [] }
      const emptyCartActions = { ...mockCartActions, getItemCount: () => 0 }
      
      jest.mocked(require('@/contexts/CartContext').useCart).mockReturnValue({
        state: emptyCartState,
        ...emptyCartActions,
      })
    })

    it('should show empty cart message', () => {
      render(<CartSidebar />)
      
      expect(screen.getByText('Your cart is empty')).toBeInTheDocument()
      expect(screen.getByText('Browse Menu')).toBeInTheDocument()
    })

    it('should not show checkout buttons when cart is empty', () => {
      render(<CartSidebar />)
      
      expect(screen.queryByText('Checkout')).not.toBeInTheDocument()
      expect(screen.queryByText('View Full Cart')).not.toBeInTheDocument()
    })
  })
})
