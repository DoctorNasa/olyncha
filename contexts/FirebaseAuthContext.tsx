'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User as FirebaseUser } from 'firebase/auth';
import {
  signInWithGoogle,
  signInWithFacebook,
  signInWithEmail,
  signUpWithEmail,
  signOut as firebaseSignOut,
  onAuthStateChange,
  getCurrentUser
} from '@/lib/firebase';

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  phoneNumber: string | null;
  emailVerified: boolean;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<{ success: boolean; error?: string }>;
  signInWithFacebook: () => Promise<{ success: boolean; error?: string }>;
  signInWithEmail: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (data: SignupData) => Promise<{ success: boolean; error?: string }>;
  signOut: () => Promise<void>;
}

interface SignupData {
  email: string;
  password: string;
  name: string;
  phone?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Helper to convert Firebase User to our User type
const firebaseUserToUser = (firebaseUser: FirebaseUser | null): User | null => {
  if (!firebaseUser) return null;
  
  return {
    uid: firebaseUser.uid,
    email: firebaseUser.email,
    displayName: firebaseUser.displayName,
    photoURL: firebaseUser.photoURL,
    phoneNumber: firebaseUser.phoneNumber,
    emailVerified: firebaseUser.emailVerified
  };
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Subscribe to auth state changes
    const unsubscribe = onAuthStateChange((firebaseUser) => {
      setUser(firebaseUserToUser(firebaseUser));
      setLoading(false);
    });

    // Check if user is already logged in
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(firebaseUserToUser(currentUser));
    }
    setLoading(false);

    return () => unsubscribe();
  }, []);

  const handleSignInWithGoogle = async () => {
    setLoading(true);
    const result = await signInWithGoogle();
    setLoading(false);
    
    if (result.success && result.user) {
      setUser(firebaseUserToUser(result.user));
    }
    
    return { 
      success: result.success, 
      error: result.error 
    };
  };

  const handleSignInWithFacebook = async () => {
    setLoading(true);
    const result = await signInWithFacebook();
    setLoading(false);
    
    if (result.success && result.user) {
      setUser(firebaseUserToUser(result.user));
    }
    
    return { 
      success: result.success, 
      error: result.error 
    };
  };

  const handleSignInWithEmail = async (email: string, password: string) => {
    setLoading(true);
    const result = await signInWithEmail(email, password);
    setLoading(false);
    
    if (result.success && result.user) {
      setUser(firebaseUserToUser(result.user));
    }
    
    return { 
      success: result.success, 
      error: result.error 
    };
  };

  const handleSignup = async (data: SignupData) => {
    setLoading(true);
    const result = await signUpWithEmail(
      data.email,
      data.password,
      data.name,
      data.phone
    );
    setLoading(false);
    
    if (result.success && result.user) {
      setUser(firebaseUserToUser(result.user));
    }
    
    return { 
      success: result.success, 
      error: result.error 
    };
  };

  const handleSignOut = async () => {
    setLoading(true);
    await firebaseSignOut();
    setUser(null);
    setLoading(false);
  };

  const value: AuthContextType = {
    user,
    loading,
    signInWithGoogle: handleSignInWithGoogle,
    signInWithFacebook: handleSignInWithFacebook,
    signInWithEmail: handleSignInWithEmail,
    signup: handleSignup,
    signOut: handleSignOut
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

// For backward compatibility with existing code
export const useFirebaseAuth = useAuth;
