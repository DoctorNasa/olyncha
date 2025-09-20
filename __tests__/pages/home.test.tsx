import React from 'react'
import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '@/app/page'
import { AuthProvider } from '@/contexts/AuthContext'
import { CartProvider } from '@/contexts/CartContext'

// Test wrapper that provides all necessary contexts
const TestWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <AuthProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </AuthProvider>
  )
}

// Helper to render component with all providers
const renderWithProviders = (component: React.ReactElement) => {
  return render(component, { wrapper: TestWrapper })
}

describe('Home Page - Logged Out User Edge Cases', () => {
  beforeEach(() => {
    // Clear localStorage to ensure logged out state
    localStorage.clear()
    
    // Clear any existing session data
    sessionStorage.clear()
    
    // Reset any global state
    jest.clearAllMocks()
  })

  describe('Initial Load State', () => {
    it('should render homepage content when user is logged out', async () => {
      renderWithProviders(<Home />)
      
      // Wait for auth context to initialize (should be logged out)
      await waitFor(() => {
        expect(screen.getByText('olyncha')).toBeInTheDocument()
      })
      
      // Verify main hero content is visible
      expect(screen.getByText('olyncha')).toBeInTheDocument()
      expect(screen.getByText(/Discover the authentic taste of premium matcha/)).toBeInTheDocument()
      expect(screen.getByText(/crafted with tradition and delivered with love/)).toBeInTheDocument()
    })

    it('should display call-to-action buttons for logged out users', async () => {
      renderWithProviders(<Home />)
      
      await waitFor(() => {
        expect(screen.getByText('olyncha')).toBeInTheDocument()
      })
      
      // Check for main CTA buttons
      const exploreMenuButton = screen.getByRole('link', { name: /explore menu/i })
      const ourStoryButton = screen.getByRole('link', { name: /our story/i })
      
      expect(exploreMenuButton).toBeInTheDocument()
      expect(exploreMenuButton).toHaveAttribute('href', '/menu')
      
      expect(ourStoryButton).toBeInTheDocument()
      expect(ourStoryButton).toHaveAttribute('href', '/about')
    })
  })

  describe('Navigation Elements', () => {
    it('should render category navigation with correct links', async () => {
      renderWithProviders(<Home />)

      await waitFor(() => {
        expect(screen.getByText('olyncha')).toBeInTheDocument()
      })

      // Check category navigation links by finding all instances and testing the first one
      const signatureMenuLinks = screen.getAllByRole('link', { name: /signature menu/i })
      const matchaPowderLinks = screen.getAllByRole('link', { name: /matcha powder/i })
      const matchaKitLinks = screen.getAllByRole('link', { name: /matcha kit/i })

      expect(signatureMenuLinks[0]).toHaveAttribute('href', '/menu')
      expect(matchaPowderLinks[0]).toHaveAttribute('href', '/menu#powder')
      expect(matchaKitLinks[0]).toHaveAttribute('href', '/menu#kit')
    })

    it('should handle category navigation clicks for logged out users', async () => {
      const user = userEvent.setup()
      renderWithProviders(<Home />)

      await waitFor(() => {
        expect(screen.getByText('olyncha')).toBeInTheDocument()
      })

      const signatureMenuLinks = screen.getAllByRole('link', { name: /signature menu/i })
      const signatureMenuLink = signatureMenuLinks[0]

      // Verify link is clickable (would navigate in real browser)
      expect(signatureMenuLink).toBeEnabled()
      expect(signatureMenuLink).toHaveAttribute('href', '/menu')

      // Test hover state
      await user.hover(signatureMenuLink)
      expect(signatureMenuLink).toHaveClass('hover:text-black')
    })
  })

  describe('Content Sections', () => {
    it('should display convenience section with interactive elements', async () => {
      const user = userEvent.setup()
      renderWithProviders(<Home />)

      await waitFor(() => {
        expect(screen.getByText('convenience')).toBeInTheDocument()
      })

      // Check convenience section content
      expect(screen.getByText('convenience')).toBeInTheDocument()

      // Check for matcha character images (there are multiple for responsive design)
      const matchaCharacters = screen.getAllByAltText('Cute matcha character')
      expect(matchaCharacters.length).toBeGreaterThan(0)

      // Check for category tags (there are multiple instances for responsive design)
      expect(screen.getAllByText('LIKE MATCHA').length).toBeGreaterThan(0)
      expect(screen.getAllByText('MATCHA COOKIES').length).toBeGreaterThan(0)
      expect(screen.getAllByText('MATCHA POWDER').length).toBeGreaterThan(0)

      // Test menu link in convenience section
      const exploreMenuLink = screen.getByRole('link', { name: /explore our menu/i })
      expect(exploreMenuLink).toHaveAttribute('href', '/menu')
    })

    it('should display product showcase with proper formatting', async () => {
      renderWithProviders(<Home />)
      
      await waitFor(() => {
        expect(screen.getByText('CONVENIENT PRODUCTS')).toBeInTheDocument()
      })
      
      // Check product showcase section
      const convenientProductsButton = screen.getByRole('link', { name: /convenient products/i })
      expect(convenientProductsButton).toHaveAttribute('href', '/menu')
      
      // Check for product items
      expect(screen.getByText('STRAWBERRY MATCHA')).toBeInTheDocument()
      expect(screen.getByText('MATCHA LATTE')).toBeInTheDocument()
      expect(screen.getByText('MATCHA LEMONADE')).toBeInTheDocument()
      
      // Check pricing display
      expect(screen.getAllByText('$3.5')).toHaveLength(3)
    })

    it('should display features section with proper icons and descriptions', async () => {
      renderWithProviders(<Home />)
      
      await waitFor(() => {
        expect(screen.getByText('PREMIUM MATCHA')).toBeInTheDocument()
      })
      
      // Check features section
      expect(screen.getByText('PREMIUM MATCHA')).toBeInTheDocument()
      expect(screen.getByText('SPILL PROOF')).toBeInTheDocument()
      expect(screen.getByText('FAST AF DELIVERY')).toBeInTheDocument()
      
      // Check feature descriptions
      expect(screen.getByText(/The best premium matcha from Uji, Kyoto/)).toBeInTheDocument()
      expect(screen.getByText(/Spill-proof packaging without a single plastic waste/)).toBeInTheDocument()
      expect(screen.getByText(/We'll get your matcha to you in a flash/)).toBeInTheDocument()
    })

    it('should display eco-respect section with gallery', async () => {
      renderWithProviders(<Home />)
      
      await waitFor(() => {
        expect(screen.getByText('eco-respect')).toBeInTheDocument()
      })
      
      // Check eco-respect section
      expect(screen.getByText('eco-respect')).toBeInTheDocument()
      
      // Check for main eco-respect image
      const ecoImage = screen.getByAltText('Pouring matcha into a glass')
      expect(ecoImage).toBeInTheDocument()
      
      // Check for category tags
      expect(screen.getByText('FRESH MATCHA')).toBeInTheDocument()
      expect(screen.getByText('MATCHA PRODUCT')).toBeInTheDocument()
      expect(screen.getByText('PRODUCT KITS')).toBeInTheDocument()
      
      // Check for gallery images
      const galleryImages = screen.getAllByAltText('Eco respect showcase')
      expect(galleryImages).toHaveLength(3)
    })
  })

  describe('Responsive Behavior', () => {
    it('should handle mobile layout for logged out users', async () => {
      // Simulate mobile viewport
      Object.defineProperty(window, 'innerWidth', {
        writable: true,
        configurable: true,
        value: 375,
      })
      
      renderWithProviders(<Home />)
      
      await waitFor(() => {
        expect(screen.getByText('olyncha')).toBeInTheDocument()
      })
      
      // Check that mobile-specific classes are applied
      const heroSection = screen.getByText('olyncha').closest('section')
      expect(heroSection).toBeInTheDocument()
      
      // Verify responsive button layout
      const exploreMenuButton = screen.getByRole('link', { name: /explore menu/i })
      expect(exploreMenuButton).toHaveClass('w-full', 'sm:w-auto')
    })
  })

  describe('Accessibility', () => {
    it('should have proper accessibility attributes for logged out users', async () => {
      renderWithProviders(<Home />)

      await waitFor(() => {
        expect(screen.getByText('olyncha')).toBeInTheDocument()
      })

      // Check for proper alt texts
      expect(screen.getByAltText('Matcha hero background')).toBeInTheDocument()
      expect(screen.getByAltText('Olyncha mascot')).toBeInTheDocument()
      expect(screen.getByAltText('Sans matcha glass')).toBeInTheDocument()

      // Check for proper link roles
      const links = screen.getAllByRole('link')
      expect(links.length).toBeGreaterThan(0)

      // Verify navigation elements exist (there are multiple nav elements)
      const navigations = screen.getAllByRole('navigation')
      expect(navigations.length).toBeGreaterThan(0)
    })
  })

  describe('Performance and Loading', () => {
    it('should render without performance issues for logged out users', async () => {
      const startTime = performance.now()
      
      renderWithProviders(<Home />)
      
      await waitFor(() => {
        expect(screen.getByText('olyncha')).toBeInTheDocument()
      })
      
      const endTime = performance.now()
      const renderTime = endTime - startTime
      
      // Ensure render time is reasonable (less than 1 second)
      expect(renderTime).toBeLessThan(1000)
    })

    it('should handle image loading gracefully', async () => {
      renderWithProviders(<Home />)
      
      await waitFor(() => {
        expect(screen.getByText('olyncha')).toBeInTheDocument()
      })
      
      // Check that images have proper loading attributes
      const heroImage = screen.getByAltText('Matcha hero background')
      expect(heroImage).toBeInTheDocument()
      expect(heroImage).toHaveAttribute('src')
      
      // Verify other images are present
      const mascotImage = screen.getByAltText('Olyncha mascot')
      const glassImage = screen.getByAltText('Sans matcha glass')
      
      expect(mascotImage).toBeInTheDocument()
      expect(glassImage).toBeInTheDocument()
    })
  })
})
