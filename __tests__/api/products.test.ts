import { GET, POST } from '@/app/api/products/route'
import { NextRequest } from 'next/server'

// Mock the products data
jest.mock('@/data/products.json', () => ({
  'matcha-latte': {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    description: 'Premium matcha latte',
    category: 'Drinks',
    basePrice: 5.95,
  },
  'matcha-ice-cream': {
    id: 'matcha-ice-cream',
    name: 'Matcha Ice Cream',
    description: 'Creamy matcha ice cream',
    category: 'Desserts',
    basePrice: 6.99,
  },
}))

describe('/api/products', () => {
  describe('GET /api/products', () => {
    it('should return all products', async () => {
      const request = new NextRequest('http://localhost:3000/api/products')
      const response = await GET(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data).toHaveLength(2)
      expect(data.total).toBe(2)
    })

    it('should filter products by category', async () => {
      const request = new NextRequest('http://localhost:3000/api/products?category=Drinks')
      const response = await GET(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data).toHaveLength(1)
      expect(data.data[0].category).toBe('Drinks')
    })

    it('should filter products by search term', async () => {
      const request = new NextRequest('http://localhost:3000/api/products?search=latte')
      const response = await GET(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data).toHaveLength(1)
      expect(data.data[0].name).toContain('Latte')
    })

    it('should return empty array for non-existent category', async () => {
      const request = new NextRequest('http://localhost:3000/api/products?category=NonExistent')
      const response = await GET(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data).toHaveLength(0)
    })

    it('should handle search with no results', async () => {
      const request = new NextRequest('http://localhost:3000/api/products?search=pizza')
      const response = await GET(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data).toHaveLength(0)
    })
  })

  describe('POST /api/products', () => {
    it('should return categories when action is getCategories', async () => {
      const request = new NextRequest('http://localhost:3000/api/products', {
        method: 'POST',
        body: JSON.stringify({ action: 'getCategories' }),
        headers: { 'Content-Type': 'application/json' },
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data).toContain('Drinks')
      expect(data.data).toContain('Desserts')
    })

    it('should return error for invalid action', async () => {
      const request = new NextRequest('http://localhost:3000/api/products', {
        method: 'POST',
        body: JSON.stringify({ action: 'invalidAction' }),
        headers: { 'Content-Type': 'application/json' },
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(400)
      expect(data.success).toBe(false)
      expect(data.error).toBe('Invalid action')
    })

    it('should handle malformed JSON', async () => {
      const request = new NextRequest('http://localhost:3000/api/products', {
        method: 'POST',
        body: 'invalid json',
        headers: { 'Content-Type': 'application/json' },
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(500)
      expect(data.success).toBe(false)
    })
  })
})
