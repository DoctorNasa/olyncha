import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginPage from '@/app/auth/login/page'
import { AuthProvider } from '@/contexts/AuthContext'

// Mock next/navigation
const mockPush = jest.fn()
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}))

// Mock the auth context
const mockLogin = jest.fn()
const mockAuthState = {
  user: null,
  isLoading: false,
  isAuthenticated: false,
}

jest.mock('@/contexts/AuthContext', () => ({
  ...jest.requireActual('@/contexts/AuthContext'),
  useAuth: () => ({
    state: mockAuthState,
    login: mockLogin,
  }),
}))

describe('LoginPage', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render login form', () => {
    render(<LoginPage />)
    
    expect(screen.getByText('Welcome Back')).toBeInTheDocument()
    expect(screen.getByText('Sign in to your Olyn Cha account')).toBeInTheDocument()
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument()
    expect(screen.getByLabelText('Password')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Sign In' })).toBeInTheDocument()
  })

  it('should show demo credentials', () => {
    render(<LoginPage />)
    
    expect(screen.getByText('Demo Credentials')).toBeInTheDocument()
    expect(screen.getByText('Email: demo@olyncha.com')).toBeInTheDocument()
    expect(screen.getByText('Password: demo123')).toBeInTheDocument()
  })

  it('should update form fields when user types', async () => {
    const user = userEvent.setup()
    render(<LoginPage />)
    
    const emailInput = screen.getByLabelText('Email Address')
    const passwordInput = screen.getByLabelText('Password')
    
    await user.type(emailInput, 'test@example.com')
    await user.type(passwordInput, 'password123')
    
    expect(emailInput).toHaveValue('test@example.com')
    expect(passwordInput).toHaveValue('password123')
  })

  it('should toggle password visibility', async () => {
    const user = userEvent.setup()
    render(<LoginPage />)
    
    const passwordInput = screen.getByLabelText('Password')
    const toggleButton = screen.getByRole('button', { name: /toggle password visibility/i })
    
    expect(passwordInput).toHaveAttribute('type', 'password')
    
    await user.click(toggleButton)
    expect(passwordInput).toHaveAttribute('type', 'text')
    
    await user.click(toggleButton)
    expect(passwordInput).toHaveAttribute('type', 'password')
  })

  it('should clear error when user starts typing', async () => {
    const user = userEvent.setup()
    mockLogin.mockResolvedValue({ success: false, error: 'Invalid credentials' })
    
    render(<LoginPage />)
    
    const emailInput = screen.getByLabelText('Email Address')
    const passwordInput = screen.getByLabelText('Password')
    const submitButton = screen.getByRole('button', { name: 'Sign In' })
    
    // Submit form to trigger error
    await user.type(emailInput, 'wrong@example.com')
    await user.type(passwordInput, 'wrongpassword')
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Invalid credentials')).toBeInTheDocument()
    })
    
    // Start typing to clear error
    await user.type(emailInput, 'a')
    
    expect(screen.queryByText('Invalid credentials')).not.toBeInTheDocument()
  })

  it('should submit form with correct credentials', async () => {
    const user = userEvent.setup()
    mockLogin.mockResolvedValue({ success: true })
    
    render(<LoginPage />)
    
    const emailInput = screen.getByLabelText('Email Address')
    const passwordInput = screen.getByLabelText('Password')
    const submitButton = screen.getByRole('button', { name: 'Sign In' })
    
    await user.type(emailInput, 'demo@olyncha.com')
    await user.type(passwordInput, 'demo123')
    await user.click(submitButton)
    
    expect(mockLogin).toHaveBeenCalledWith('demo@olyncha.com', 'demo123')
    
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/')
    })
  })

  it('should show error message on login failure', async () => {
    const user = userEvent.setup()
    mockLogin.mockResolvedValue({ success: false, error: 'Invalid email or password' })
    
    render(<LoginPage />)
    
    const emailInput = screen.getByLabelText('Email Address')
    const passwordInput = screen.getByLabelText('Password')
    const submitButton = screen.getByRole('button', { name: 'Sign In' })
    
    await user.type(emailInput, 'wrong@example.com')
    await user.type(passwordInput, 'wrongpassword')
    await user.click(submitButton)
    
    await waitFor(() => {
      expect(screen.getByText('Invalid email or password')).toBeInTheDocument()
    })
  })

  it('should show loading state during login', async () => {
    const user = userEvent.setup()
    let resolveLogin: (value: any) => void
    const loginPromise = new Promise(resolve => {
      resolveLogin = resolve
    })
    mockLogin.mockReturnValue(loginPromise)
    
    render(<LoginPage />)
    
    const emailInput = screen.getByLabelText('Email Address')
    const passwordInput = screen.getByLabelText('Password')
    const submitButton = screen.getByRole('button', { name: 'Sign In' })
    
    await user.type(emailInput, 'demo@olyncha.com')
    await user.type(passwordInput, 'demo123')
    await user.click(submitButton)
    
    expect(screen.getByText('Signing in...')).toBeInTheDocument()
    expect(submitButton).toBeDisabled()
    
    // Resolve the login
    resolveLogin!({ success: true })
    
    await waitFor(() => {
      expect(screen.getByText('Sign In')).toBeInTheDocument()
    })
  })

  it('should require email and password fields', async () => {
    const user = userEvent.setup()
    render(<LoginPage />)
    
    const emailInput = screen.getByLabelText('Email Address')
    const passwordInput = screen.getByLabelText('Password')
    
    expect(emailInput).toBeRequired()
    expect(passwordInput).toBeRequired()
  })

  it('should have proper form validation attributes', () => {
    render(<LoginPage />)
    
    const emailInput = screen.getByLabelText('Email Address')
    const passwordInput = screen.getByLabelText('Password')
    
    expect(emailInput).toHaveAttribute('type', 'email')
    expect(passwordInput).toHaveAttribute('type', 'password')
    expect(emailInput).toHaveAttribute('placeholder', 'Enter your email')
    expect(passwordInput).toHaveAttribute('placeholder', 'Enter your password')
  })

  it('should have links to signup and forgot password', () => {
    render(<LoginPage />)
    
    expect(screen.getByText('Sign up')).toBeInTheDocument()
    expect(screen.getByText('Forgot password?')).toBeInTheDocument()
    
    const signupLink = screen.getByText('Sign up').closest('a')
    const forgotPasswordLink = screen.getByText('Forgot password?').closest('a')
    
    expect(signupLink).toHaveAttribute('href', '/auth/signup')
    expect(forgotPasswordLink).toHaveAttribute('href', '/auth/forgot-password')
  })

  it('should have social login buttons', () => {
    render(<LoginPage />)
    
    expect(screen.getByText('Or continue with')).toBeInTheDocument()
    expect(screen.getByText('Google')).toBeInTheDocument()
    expect(screen.getByText('Apple')).toBeInTheDocument()
  })
})
