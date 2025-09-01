# Testing Guide for Olyn Cha E-commerce Website

## Overview

This document outlines the comprehensive testing strategy for the Olyn Cha matcha e-commerce website. Our testing approach covers unit tests, integration tests, and end-to-end tests to ensure a robust and reliable shopping experience.

## Test Structure

### 📁 Test Organization

```
__tests__/
├── contexts/           # Context providers tests
│   ├── CartContext.test.tsx
│   └── AuthContext.test.tsx
├── components/         # Component unit tests
│   └── CartSidebar.test.tsx
├── api/               # API route tests
│   ├── products.test.ts
│   └── orders.test.ts
├── pages/             # Page component tests
│   └── auth/
│       └── login.test.tsx
└── e2e/               # End-to-end tests
    └── shopping-flow.test.tsx
```

## 🧪 Test Categories

### 1. Context Tests (`contexts/`)

**CartContext Tests:**
- ✅ Initial state management
- ✅ Adding items to cart
- ✅ Removing items from cart
- ✅ Updating quantities
- ✅ Price calculations (subtotal, tax, delivery)
- ✅ LocalStorage persistence
- ✅ Cart UI state (open/closed)

**AuthContext Tests:**
- ✅ User authentication flow
- ✅ Login/signup functionality
- ✅ Session management
- ✅ Profile updates
- ✅ Error handling

### 2. Component Tests (`components/`)

**CartSidebar Tests:**
- ✅ Rendering with cart items
- ✅ Empty cart state
- ✅ Quantity controls
- ✅ Item removal
- ✅ Price display
- ✅ Navigation interactions

### 3. API Tests (`api/`)

**Products API Tests:**
- ✅ Fetching all products
- ✅ Category filtering
- ✅ Search functionality
- ✅ Individual product retrieval
- ✅ Error handling

**Orders API Tests:**
- ✅ Order creation
- ✅ Order retrieval
- ✅ User-specific orders
- ✅ Order status updates
- ✅ Data validation

### 4. Form Tests (`pages/`)

**Login Form Tests:**
- ✅ Form rendering
- ✅ Input validation
- ✅ Password visibility toggle
- ✅ Error handling
- ✅ Loading states
- ✅ Navigation links

### 5. E2E Tests (`e2e/`)

**Complete Shopping Flow:**
- ✅ Product customization
- ✅ Add to cart
- ✅ Cart management
- ✅ Checkout process
- ✅ Form validation
- ✅ Order completion

## 🚀 Running Tests

### Basic Commands

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run tests for CI
npm run test:ci
```

### Specific Test Categories

```bash
# Run only context tests
npm test -- contexts

# Run only component tests
npm test -- components

# Run only API tests
npm test -- api

# Run only E2E tests
npm test -- e2e
```

## 📊 Test Coverage Goals

| Category | Target Coverage | Current Status |
|----------|----------------|----------------|
| Contexts | 95%+ | ✅ Implemented |
| Components | 90%+ | ✅ Implemented |
| API Routes | 95%+ | ✅ Implemented |
| Forms | 90%+ | ✅ Implemented |
| E2E Flows | 80%+ | ✅ Implemented |

## 🔧 Test Configuration

### Jest Configuration (`jest.config.js`)
- Environment: jsdom for React components
- Module mapping for TypeScript paths
- Coverage collection from source files
- Test file patterns

### Setup File (`jest.setup.js`)
- Testing Library DOM matchers
- LocalStorage mocking
- Navigation mocking
- Fetch API mocking

## 📝 Test Scenarios Covered

### Cart Functionality
1. **Adding Items**
   - Single item addition
   - Multiple quantities
   - Identical item consolidation
   - Custom options handling

2. **Cart Management**
   - Quantity updates
   - Item removal
   - Cart clearing
   - Persistence across sessions

3. **Price Calculations**
   - Subtotal calculation
   - Tax computation (8%)
   - Delivery fee logic ($3.99 under $25, free over $25)
   - Total calculation

### Authentication
1. **Login Process**
   - Valid credentials
   - Invalid credentials
   - Loading states
   - Error handling

2. **User Management**
   - Profile updates
   - Session persistence
   - Logout functionality

### E-commerce Flow
1. **Product Selection**
   - Size customization
   - Milk options
   - Sweetness levels
   - Add-ons selection

2. **Checkout Process**
   - Customer information
   - Delivery address
   - Payment method selection
   - Order submission

3. **Order Management**
   - Order creation
   - Status tracking
   - Order history

## 🐛 Error Scenarios Tested

1. **Network Failures**
   - API timeouts
   - Server errors
   - Invalid responses

2. **User Input Errors**
   - Invalid form data
   - Missing required fields
   - Malformed inputs

3. **State Management Issues**
   - Corrupted localStorage
   - Invalid cart states
   - Authentication failures

## 🔄 Continuous Integration

Tests are configured to run in CI environments with:
- No watch mode
- Coverage reporting
- Fail on coverage thresholds
- Parallel test execution

## 📈 Test Metrics

### Performance Benchmarks
- Cart operations: < 100ms
- API responses: < 500ms
- Page loads: < 2s
- Form submissions: < 1s

### Reliability Targets
- Test suite success rate: 99%+
- Flaky test tolerance: < 1%
- Coverage maintenance: 90%+

## 🛠 Development Workflow

1. **Write Tests First** (TDD approach)
2. **Run Tests Locally** before committing
3. **Maintain Coverage** above thresholds
4. **Update Tests** when features change
5. **Review Test Results** in CI/CD

## 📚 Testing Best Practices

1. **Descriptive Test Names** - Clear what is being tested
2. **Arrange-Act-Assert** pattern
3. **Mock External Dependencies** appropriately
4. **Test User Behavior** not implementation details
5. **Keep Tests Independent** and isolated
6. **Use Real User Interactions** in E2E tests

## 🔍 Debugging Tests

```bash
# Run specific test file
npm test -- CartContext.test.tsx

# Run tests with verbose output
npm test -- --verbose

# Debug specific test
npm test -- --testNamePattern="should add item to cart"
```

This comprehensive testing suite ensures the Olyn Cha e-commerce platform delivers a reliable, bug-free shopping experience for customers.
