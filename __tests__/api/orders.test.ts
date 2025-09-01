import { GET, POST } from '@/app/api/orders/route'
import { NextRequest } from 'next/server'

describe('/api/orders', () => {
  describe('POST /api/orders', () => {
    const mockOrderData = {
      userId: 'user-123',
      items: [
        {
          id: 'item-1',
          name: 'Matcha Latte',
          size: 'Large',
          quantity: 2,
          price: 6.95,
        },
      ],
      subtotal: 13.90,
      tax: 1.11,
      deliveryFee: 0,
      total: 15.01,
      customerInfo: {
        name: 'John Doe',
        email: 'john@example.com',
        phone: '555-1234',
        address: {
          street: '123 Main St',
          city: 'Rochester',
          state: 'NH',
          zipCode: '03867',
        },
      },
      paymentMethod: 'Credit Card',
    }

    it('should create order successfully', async () => {
      const request = new NextRequest('http://localhost:3000/api/orders', {
        method: 'POST',
        body: JSON.stringify(mockOrderData),
        headers: { 'Content-Type': 'application/json' },
      })

      const response = await POST(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data.id).toMatch(/^ORD-\d+-[a-z0-9]+$/)
      expect(data.data.status).toBe('placed')
      expect(data.data.total).toBe(15.01)
      expect(data.data.customerInfo.name).toBe('John Doe')
      expect(data.data.estimatedDelivery).toBeDefined()
    })

    it('should generate unique order IDs', async () => {
      const request1 = new NextRequest('http://localhost:3000/api/orders', {
        method: 'POST',
        body: JSON.stringify(mockOrderData),
        headers: { 'Content-Type': 'application/json' },
      })

      const request2 = new NextRequest('http://localhost:3000/api/orders', {
        method: 'POST',
        body: JSON.stringify(mockOrderData),
        headers: { 'Content-Type': 'application/json' },
      })

      const response1 = await POST(request1)
      const response2 = await POST(request2)
      
      const data1 = await response1.json()
      const data2 = await response2.json()

      expect(data1.data.id).not.toBe(data2.data.id)
    })

    it('should handle missing required fields', async () => {
      const incompleteData = {
        items: [],
        total: 0,
      }

      const request = new NextRequest('http://localhost:3000/api/orders', {
        method: 'POST',
        body: JSON.stringify(incompleteData),
        headers: { 'Content-Type': 'application/json' },
      })

      const response = await POST(request)
      
      // Should still create order but with missing data
      expect(response.status).toBe(200)
    })
  })

  describe('GET /api/orders', () => {
    beforeEach(async () => {
      // Create a test order first
      const mockOrderData = {
        userId: 'user-123',
        items: [{ id: 'item-1', name: 'Test Item', quantity: 1, price: 5.00 }],
        subtotal: 5.00,
        tax: 0.40,
        deliveryFee: 3.99,
        total: 9.39,
        customerInfo: {
          name: 'Test User',
          email: 'test@example.com',
          phone: '555-1234',
          address: {
            street: '123 Test St',
            city: 'Test City',
            state: 'TS',
            zipCode: '12345',
          },
        },
        paymentMethod: 'Credit Card',
      }

      const createRequest = new NextRequest('http://localhost:3000/api/orders', {
        method: 'POST',
        body: JSON.stringify(mockOrderData),
        headers: { 'Content-Type': 'application/json' },
      })

      await POST(createRequest)
    })

    it('should get all orders', async () => {
      const request = new NextRequest('http://localhost:3000/api/orders')
      const response = await GET(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(Array.isArray(data.data)).toBe(true)
      expect(data.total).toBeGreaterThan(0)
    })

    it('should filter orders by userId', async () => {
      const request = new NextRequest('http://localhost:3000/api/orders?userId=user-123')
      const response = await GET(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(Array.isArray(data.data)).toBe(true)
      
      // All returned orders should belong to the specified user
      data.data.forEach((order: any) => {
        expect(order.userId).toBe('user-123')
      })
    })

    it('should return empty array for non-existent user', async () => {
      const request = new NextRequest('http://localhost:3000/api/orders?userId=non-existent')
      const response = await GET(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data).toHaveLength(0)
    })

    it('should get specific order by orderId', async () => {
      // First create an order to get its ID
      const mockOrderData = {
        userId: 'user-456',
        items: [{ id: 'item-2', name: 'Specific Item', quantity: 1, price: 7.50 }],
        subtotal: 7.50,
        tax: 0.60,
        deliveryFee: 3.99,
        total: 12.09,
        customerInfo: {
          name: 'Specific User',
          email: 'specific@example.com',
          phone: '555-5678',
          address: {
            street: '456 Specific St',
            city: 'Specific City',
            state: 'SP',
            zipCode: '67890',
          },
        },
        paymentMethod: 'Cash on Delivery',
      }

      const createRequest = new NextRequest('http://localhost:3000/api/orders', {
        method: 'POST',
        body: JSON.stringify(mockOrderData),
        headers: { 'Content-Type': 'application/json' },
      })

      const createResponse = await POST(createRequest)
      const createData = await createResponse.json()
      const orderId = createData.data.id

      // Now get the specific order
      const request = new NextRequest(`http://localhost:3000/api/orders?orderId=${orderId}`)
      const response = await GET(request)
      const data = await response.json()

      expect(response.status).toBe(200)
      expect(data.success).toBe(true)
      expect(data.data.id).toBe(orderId)
      expect(data.data.customerInfo.name).toBe('Specific User')
    })

    it('should return 404 for non-existent order', async () => {
      const request = new NextRequest('http://localhost:3000/api/orders?orderId=non-existent-id')
      const response = await GET(request)
      const data = await response.json()

      expect(response.status).toBe(404)
      expect(data.success).toBe(false)
      expect(data.error).toBe('Order not found')
    })
  })
})
