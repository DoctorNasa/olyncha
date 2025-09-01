import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AuthProvider, useAuth } from '@/contexts/AuthContext'

// Simple test component
const SimpleAuthTest = () => {
  const { state, login, logout } = useAuth()

  const handleLogin = async () => {
    await login('demo@olyncha.com', 'demo123')
  }

  return (
    <div>
      <div data-testid="auth-loading">{state.isLoading ? 'loading' : 'ready'}</div>
      <div data-testid="auth-status">{state.isAuthenticated ? 'authenticated' : 'not-authenticated'}</div>
      <div data-testid="user-name">{state.user?.name || 'no-user'}</div>
      <div data-testid="user-email">{state.user?.email || 'no-email'}</div>
      
      <button onClick={handleLogin} data-testid="login-btn">
        Login
      </button>
      <button onClick={logout} data-testid="logout-btn">
        Logout
      </button>
    </div>
  )
}

const renderWithProvider = () => {
  return render(
    <AuthProvider>
      <SimpleAuthTest />
    </AuthProvider>
  )
}

describe('AuthContext - Simple Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    localStorage.getItem.mockReturnValue(null)
  })

  it('should have unauthenticated state initially', async () => {
    renderWithProvider()
    
    await waitFor(() => {
      expect(screen.getByTestId('auth-loading')).toHaveTextContent('ready')
    })
    
    expect(screen.getByTestId('auth-status')).toHaveTextContent('not-authenticated')
    expect(screen.getByTestId('user-name')).toHaveTextContent('no-user')
    expect(screen.getByTestId('user-email')).toHaveTextContent('no-email')
  })

  it('should load user from localStorage if available', async () => {
    const savedUser = {
      id: '1',
      email: 'saved@example.com',
      name: 'Saved User',
      createdAt: new Date().toISOString(),
    }
    localStorage.getItem.mockReturnValue(JSON.stringify(savedUser))

    renderWithProvider()
    
    await waitFor(() => {
      expect(screen.getByTestId('auth-loading')).toHaveTextContent('ready')
    })
    
    expect(screen.getByTestId('auth-status')).toHaveTextContent('authenticated')
    expect(screen.getByTestId('user-name')).toHaveTextContent('Saved User')
    expect(screen.getByTestId('user-email')).toHaveTextContent('saved@example.com')
  })

  it('should handle corrupted localStorage data gracefully', async () => {
    localStorage.getItem.mockReturnValue('invalid-json')

    renderWithProvider()
    
    await waitFor(() => {
      expect(screen.getByTestId('auth-loading')).toHaveTextContent('ready')
    })
    
    expect(screen.getByTestId('auth-status')).toHaveTextContent('not-authenticated')
  })

  it('should login successfully with valid credentials', async () => {
    const user = userEvent.setup()
    renderWithProvider()

    await waitFor(() => {
      expect(screen.getByTestId('auth-loading')).toHaveTextContent('ready')
    })

    await user.click(screen.getByTestId('login-btn'))

    await waitFor(() => {
      expect(screen.getByTestId('auth-status')).toHaveTextContent('authenticated')
    }, { timeout: 3000 })

    await waitFor(() => {
      expect(screen.getByTestId('user-name')).toHaveTextContent('Demo User')
    }, { timeout: 3000 })
    expect(screen.getByTestId('user-email')).toHaveTextContent('demo@olyncha.com')
  })

  it('should logout and clear user data', async () => {
    const user = userEvent.setup()
    
    // Set up authenticated state
    const savedUser = {
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
      createdAt: new Date().toISOString(),
    }
    localStorage.getItem.mockReturnValue(JSON.stringify(savedUser))

    renderWithProvider()
    
    await waitFor(() => {
      expect(screen.getByTestId('auth-status')).toHaveTextContent('authenticated')
    })

    await user.click(screen.getByTestId('logout-btn'))

    expect(screen.getByTestId('auth-status')).toHaveTextContent('not-authenticated')
    expect(screen.getByTestId('user-name')).toHaveTextContent('no-user')
  })
})
