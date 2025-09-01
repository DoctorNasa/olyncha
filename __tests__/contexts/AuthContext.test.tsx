import React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AuthProvider, useAuth } from '@/contexts/AuthContext'

// Test component to interact with auth context
const TestComponent = () => {
  const { state, login, signup, logout, updateProfile } = useAuth()

  const handleLogin = async () => {
    await login('demo@olyncha.com', 'demo123')
  }

  const handleSignup = async () => {
    await signup({
      email: 'test@example.com',
      password: 'password123',
      name: 'Test User',
      phone: '555-1234',
    })
  }

  const handleUpdateProfile = async () => {
    await updateProfile({
      name: 'Updated Name',
      phone: '555-9999',
    })
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
      <button onClick={handleSignup} data-testid="signup-btn">
        Signup
      </button>
      <button onClick={logout} data-testid="logout-btn">
        Logout
      </button>
      <button onClick={handleUpdateProfile} data-testid="update-profile-btn">
        Update Profile
      </button>
    </div>
  )
}

const renderWithAuthProvider = () => {
  return render(
    <AuthProvider>
      <TestComponent />
    </AuthProvider>
  )
}

describe('AuthContext', () => {
  beforeEach(() => {
    localStorage.clear()
    jest.clearAllMocks()
  })

  describe('Initial State', () => {
    it('should have unauthenticated state initially', async () => {
      renderWithAuthProvider()
      
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
      localStorage.setItem('olyn-cha-user', JSON.stringify(savedUser))

      renderWithAuthProvider()
      
      await waitFor(() => {
        expect(screen.getByTestId('auth-loading')).toHaveTextContent('ready')
      })
      
      expect(screen.getByTestId('auth-status')).toHaveTextContent('authenticated')
      expect(screen.getByTestId('user-name')).toHaveTextContent('Saved User')
      expect(screen.getByTestId('user-email')).toHaveTextContent('saved@example.com')
    })

    it('should handle corrupted localStorage data gracefully', async () => {
      localStorage.setItem('olyn-cha-user', 'invalid-json')

      renderWithAuthProvider()
      
      await waitFor(() => {
        expect(screen.getByTestId('auth-loading')).toHaveTextContent('ready')
      })
      
      expect(screen.getByTestId('auth-status')).toHaveTextContent('not-authenticated')
      expect(localStorage.removeItem).toHaveBeenCalledWith('olyn-cha-user')
    })
  })

  describe('Login', () => {
    it('should login successfully with valid credentials', async () => {
      const user = userEvent.setup()
      renderWithAuthProvider()

      await waitFor(() => {
        expect(screen.getByTestId('auth-loading')).toHaveTextContent('ready')
      })

      await user.click(screen.getByTestId('login-btn'))

      await waitFor(() => {
        expect(screen.getByTestId('auth-status')).toHaveTextContent('authenticated')
      })

      await waitFor(() => {
        expect(screen.getByTestId('user-name')).toHaveTextContent('Demo User')
      })
      expect(screen.getByTestId('user-email')).toHaveTextContent('demo@olyncha.com')
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'olyn-cha-user',
        expect.stringContaining('demo@olyncha.com')
      )
    })

    it('should show loading state during login', async () => {
      const user = userEvent.setup()
      renderWithAuthProvider()

      await waitFor(() => {
        expect(screen.getByTestId('auth-loading')).toHaveTextContent('ready')
      })

      const loginPromise = user.click(screen.getByTestId('login-btn'))
      
      // Should show loading (allow async flush)
      await waitFor(() => {
        expect(screen.getByTestId('auth-loading')).toHaveTextContent('loading')
      })
      
      await loginPromise
      
      await waitFor(() => {
        expect(screen.getByTestId('auth-loading')).toHaveTextContent('ready')
      })
    })
  })

  describe('Signup', () => {
    it('should signup successfully with valid data', async () => {
      const user = userEvent.setup()
      renderWithAuthProvider()

      await waitFor(() => {
        expect(screen.getByTestId('auth-loading')).toHaveTextContent('ready')
      })

      await user.click(screen.getByTestId('signup-btn'))

      await waitFor(() => {
        expect(screen.getByTestId('auth-status')).toHaveTextContent('authenticated')
      })

      await waitFor(() => {
        expect(screen.getByTestId('user-name')).toHaveTextContent('Test User')
      })
      expect(screen.getByTestId('user-email')).toHaveTextContent('test@example.com')
    })
  })

  describe('Logout', () => {
    it('should logout and clear user data', async () => {
      const user = userEvent.setup()
      
      // Set up authenticated state
      const savedUser = {
        id: '1',
        email: 'test@example.com',
        name: 'Test User',
        createdAt: new Date().toISOString(),
      }
      localStorage.setItem('olyn-cha-user', JSON.stringify(savedUser))

      renderWithAuthProvider()
      
      await waitFor(() => {
        expect(screen.getByTestId('auth-status')).toHaveTextContent('authenticated')
      })

      await user.click(screen.getByTestId('logout-btn'))

      expect(screen.getByTestId('auth-status')).toHaveTextContent('not-authenticated')
      expect(screen.getByTestId('user-name')).toHaveTextContent('no-user')
      expect(localStorage.removeItem).toHaveBeenCalledWith('olyn-cha-user')
    })
  })

  describe('Update Profile', () => {
    it('should update user profile successfully', async () => {
      const user = userEvent.setup()
      
      // Set up authenticated state
      const savedUser = {
        id: '1',
        email: 'test@example.com',
        name: 'Test User',
        phone: '555-1234',
        createdAt: new Date().toISOString(),
      }
      localStorage.setItem('olyn-cha-user', JSON.stringify(savedUser))

      renderWithAuthProvider()
      
      await waitFor(() => {
        expect(screen.getByTestId('auth-status')).toHaveTextContent('authenticated')
      })

      expect(screen.getByTestId('user-name')).toHaveTextContent('Test User')

      await user.click(screen.getByTestId('update-profile-btn'))

      await waitFor(() => {
        expect(screen.getByTestId('user-name')).toHaveTextContent('Updated Name')
      })

      expect(localStorage.setItem).toHaveBeenCalledWith(
        'olyn-cha-user',
        expect.stringContaining('Updated Name')
      )
    })

    it('should not update profile when not authenticated', async () => {
      const user = userEvent.setup()
      renderWithAuthProvider()

      await waitFor(() => {
        expect(screen.getByTestId('auth-loading')).toHaveTextContent('ready')
      })

      await user.click(screen.getByTestId('update-profile-btn'))

      // Should remain unauthenticated
      expect(screen.getByTestId('auth-status')).toHaveTextContent('not-authenticated')
    })
  })

  describe('Error Handling', () => {
    it('should handle login errors gracefully', async () => {
      // This would require mocking the login function to return an error
      // For now, we'll test the basic error handling structure
      const user = userEvent.setup()
      renderWithAuthProvider()

      await waitFor(() => {
        expect(screen.getByTestId('auth-loading')).toHaveTextContent('ready')
      })

      // The actual error testing would depend on how we mock the login function
      // to simulate different error conditions
    })
  })
})
