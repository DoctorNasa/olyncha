import { initializeApp, getApps, getApp } from 'firebase/app';
import { 
  getAuth, 
  GoogleAuthProvider, 
  FacebookAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  onAuthStateChanged,
  User,
  updateProfile
} from 'firebase/auth';
import { 
  getFirestore, 
  doc, 
  setDoc, 
  getDoc, 
  serverTimestamp 
} from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase (avoid re-initialization in development)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

// Auth providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();

// Configure providers
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

facebookProvider.setCustomParameters({
  display: 'popup'
});

// Auth functions
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    
    // Save/update user data in Firestore
    await saveUserToFirestore(user);
    
    return { success: true, user };
  } catch (error: any) {
    console.error('Google sign-in error:', error);
    return { 
      success: false, 
      error: error.message || 'Failed to sign in with Google' 
    };
  }
};

export const signInWithFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    const user = result.user;
    
    // Save/update user data in Firestore
    await saveUserToFirestore(user);
    
    return { success: true, user };
  } catch (error: any) {
    console.error('Facebook sign-in error:', error);
    
    // Handle specific Facebook errors
    if (error.code === 'auth/account-exists-with-different-credential') {
      return {
        success: false,
        error: 'An account already exists with the same email address but different sign-in credentials.'
      };
    }
    
    return { 
      success: false, 
      error: error.message || 'Failed to sign in with Facebook' 
    };
  }
};

export const signInWithEmail = async (email: string, password: string) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const user = result.user;
    
    // Update last login
    await updateUserLastLogin(user.uid);
    
    return { success: true, user };
  } catch (error: any) {
    console.error('Email sign-in error:', error);
    
    // Handle specific auth errors
    let errorMessage = 'Failed to sign in';
    if (error.code === 'auth/user-not-found') {
      errorMessage = 'No account found with this email address';
    } else if (error.code === 'auth/wrong-password') {
      errorMessage = 'Incorrect password';
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = 'Invalid email address';
    } else if (error.code === 'auth/user-disabled') {
      errorMessage = 'This account has been disabled';
    }
    
    return { success: false, error: errorMessage };
  }
};

export const signUpWithEmail = async (
  email: string, 
  password: string, 
  displayName: string,
  phoneNumber?: string
) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;
    
    // Update profile with display name
    await updateProfile(user, { displayName });
    
    // Save user data to Firestore
    await saveUserToFirestore(user, { phoneNumber });
    
    return { success: true, user };
  } catch (error: any) {
    console.error('Email sign-up error:', error);
    
    // Handle specific auth errors
    let errorMessage = 'Failed to create account';
    if (error.code === 'auth/email-already-in-use') {
      errorMessage = 'An account already exists with this email address';
    } else if (error.code === 'auth/invalid-email') {
      errorMessage = 'Invalid email address';
    } else if (error.code === 'auth/weak-password') {
      errorMessage = 'Password should be at least 6 characters';
    }
    
    return { success: false, error: errorMessage };
  }
};

export const signOut = async () => {
  try {
    await firebaseSignOut(auth);
    return { success: true };
  } catch (error: any) {
    console.error('Sign-out error:', error);
    return { 
      success: false, 
      error: error.message || 'Failed to sign out' 
    };
  }
};

// Firestore functions
const saveUserToFirestore = async (user: User, additionalData?: any) => {
  if (!user) return;
  
  const userRef = doc(db, 'users', user.uid);
  
  try {
    const userDoc = await getDoc(userRef);
    
    const userData = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName || '',
      photoURL: user.photoURL || '',
      ...additionalData,
      lastLogin: serverTimestamp(),
      ...(userDoc.exists() ? {} : { createdAt: serverTimestamp() })
    };
    
    await setDoc(userRef, userData, { merge: true });
  } catch (error) {
    console.error('Error saving user to Firestore:', error);
  }
};

const updateUserLastLogin = async (uid: string) => {
  try {
    const userRef = doc(db, 'users', uid);
    await setDoc(userRef, { 
      lastLogin: serverTimestamp() 
    }, { merge: true });
  } catch (error) {
    console.error('Error updating last login:', error);
  }
};

// Auth state observer
export const onAuthStateChange = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, callback);
};

// Get current user
export const getCurrentUser = () => auth.currentUser;

export { auth, db };
export default app;
