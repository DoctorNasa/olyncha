import '@testing-library/jest-dom'

// Mock localStorage (stateful)
const __store = new Map()
const localStorageMock = {
  getItem: jest.fn((key) => (__store.has(key) ? __store.get(key) : null)),
  setItem: jest.fn((key, value) => { __store.set(key, String(value)) }),
  removeItem: jest.fn((key) => { __store.delete(key) }),
  clear: jest.fn(() => { __store.clear() }),
}
Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
})
// Ensure global.localStorage points to the same mock
// @ts-ignore
global.localStorage = localStorageMock

// Skip window.location mocking for now to avoid jsdom issues

// Mock next/navigation - only if it exists
try {
  jest.mock('next/navigation', () => ({
    useRouter: () => ({
      push: jest.fn(),
      replace: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
      prefetch: jest.fn(),
    }),
    useParams: () => ({}),
    useSearchParams: () => new URLSearchParams(),
    usePathname: () => '/',
  }))
} catch (e) {
  // next/navigation not available, skip mocking
}

// Mock fetch
global.fetch = jest.fn()

// Reset all mocks before each test
beforeEach(() => {
  jest.clearAllMocks()
  localStorageMock.getItem.mockClear()
  localStorageMock.setItem.mockClear()
  localStorageMock.removeItem.mockClear()
  localStorageMock.clear.mockClear()
  __store.clear()
})
