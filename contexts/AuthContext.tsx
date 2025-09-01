'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { flushSync } from 'react-dom';

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  createdAt: string;
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

interface AuthContextType {
  state: AuthState;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (userData: SignupData) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  updateProfile: (userData: Partial<User>) => Promise<{ success: boolean; error?: string }>;
}

interface SignupData {
  email: string;
  password: string;
  name: string;
  phone?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    user: null,
    isLoading: true,
    isAuthenticated: false,
  });

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('olyn-cha-user');
    if (savedUser) {
      try {
        const user = JSON.parse(savedUser);
        setState({
          user,
          isLoading: false,
          isAuthenticated: true,
        });
      } catch (error) {
        console.error('Error loading user from localStorage:', error);
        localStorage.removeItem('olyn-cha-user');
        setState(prev => ({ ...prev, isLoading: false }));
      }
    } else {
      setState(prev => ({ ...prev, isLoading: false }));
    }
  }, []);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    flushSync(() => {
      setState(prev => ({ ...prev, isLoading: true }));
    });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 50));

      // Mock authentication - in a real app, this would be an API call
      if (email === 'demo@olyncha.com' && password === 'demo123') {
        const user: User = {
          id: '1',
          email: 'demo@olyncha.com',
          name: 'Demo User',
          phone: '(555) 123-4567',
          address: {
            street: '123 Main St',
            city: 'Rochester',
            state: 'NH',
            zipCode: '03867'
          },
          createdAt: new Date().toISOString(),
        };

        localStorage.setItem('olyn-cha-user', JSON.stringify(user));
        flushSync(() => {
          setState({
            user,
            isLoading: false,
            isAuthenticated: true,
          });
        });

        return { success: true };
      } else {
        flushSync(() => {
          setState(prev => ({ ...prev, isLoading: false }));
        });
        return { success: false, error: 'Invalid email or password' };
      }
    } catch (error) {
      setState(prev => ({ ...prev, isLoading: false }));
      return { success: false, error: 'An error occurred during login' };
    }
  };

  const signup = async (userData: SignupData): Promise<{ success: boolean; error?: string }> => {
    flushSync(() => {
      setState(prev => ({ ...prev, isLoading: true }));
    });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 50));

      // Mock user creation - in a real app, this would be an API call
      const user: User = {
        id: Date.now().toString(),
        email: userData.email,
        name: userData.name,
        phone: userData.phone,
        createdAt: new Date().toISOString(),
      };

      localStorage.setItem('olyn-cha-user', JSON.stringify(user));
      flushSync(() => {
        setState({
          user,
          isLoading: false,
          isAuthenticated: true,
        });
      });

      return { success: true };
    } catch (error) {
      flushSync(() => {
        setState(prev => ({ ...prev, isLoading: false }));
      });
      return { success: false, error: 'An error occurred during signup' };
    }
  };

  const logout = () => {
    localStorage.removeItem('olyn-cha-user');
    setState({
      user: null,
      isLoading: false,
      isAuthenticated: false,
    });
  };

  const updateProfile = async (userData: Partial<User>): Promise<{ success: boolean; error?: string }> => {
    if (!state.user) {
      return { success: false, error: 'No user logged in' };
    }

    flushSync(() => {
      setState(prev => ({ ...prev, isLoading: true }));
    });

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 30));

      const updatedUser = { ...state.user, ...userData };
      localStorage.setItem('olyn-cha-user', JSON.stringify(updatedUser));
      
      flushSync(() => {
        setState({
          user: updatedUser,
          isLoading: false,
          isAuthenticated: true,
        });
      });

      return { success: true };
    } catch (error) {
      flushSync(() => {
        setState(prev => ({ ...prev, isLoading: false }));
      });
      return { success: false, error: 'An error occurred while updating profile' };
    }
  };

  const value: AuthContextType = {
    state,
    login,
    signup,
    logout,
    updateProfile,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
