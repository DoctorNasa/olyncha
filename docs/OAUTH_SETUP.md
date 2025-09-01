# OAuth Authentication Setup Guide

This guide will help you set up social authentication (Google and Facebook) for the Olyncha application.

## Prerequisites

- Firebase account (free tier is sufficient)
- Google Cloud Console account
- Facebook Developer account
- Your production domain (for redirect URLs)

## 1. Firebase Setup

### Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Name your project: `olyncha` (or your preferred name)
4. Disable Google Analytics (optional, you can enable if needed)
5. Click "Create project"

### Enable Authentication

1. In Firebase Console, select your project
2. Click on "Authentication" in the left sidebar
3. Click "Get started"
4. Go to "Sign-in method" tab

## 2. Google OAuth Setup

### Enable Google Sign-In in Firebase

1. In Firebase Authentication > Sign-in method
2. Click on "Google" provider
3. Click "Enable"
4. Add your project's public-facing name (e.g., "Olyncha")
5. Select your support email
6. Click "Save"

### Configure Google Cloud Console (Optional - for custom branding)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your Firebase project (auto-created)
3. Navigate to "APIs & Services" > "Credentials"
4. Find the OAuth 2.0 Client ID created by Firebase
5. Add authorized domains:
   ```
   localhost
   localhost:3000
   your-domain.com
   your-app.vercel.app (if using Vercel)
   ```

### Get Configuration

1. In Firebase Console > Project Settings (gear icon)
2. Scroll down to "Your apps" section
3. Click on "Web" icon (</>) to add a web app
4. Register app with nickname "Olyncha Web"
5. Copy the configuration:

```javascript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-sender-id",
  appId: "your-app-id"
};
```

## 3. Facebook OAuth Setup

### Create Facebook App

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Click "My Apps" > "Create App"
3. Choose "Consumer" as app type
4. Fill in app details:
   - App name: Olyncha
   - App contact email: your-email@example.com
5. Click "Create App"

### Configure Facebook Login

1. In your Facebook app dashboard
2. Click "Add Product" and select "Facebook Login"
3. Choose "Web" platform
4. Set Site URL: `https://your-domain.com`
5. Go to Facebook Login > Settings
6. Add Valid OAuth Redirect URIs:
   ```
   https://your-project.firebaseapp.com/__/auth/handler
   http://localhost:3000/__/auth/handler (for development)
   ```
7. Enable "Client OAuth Login" and "Web OAuth Login"
8. Save Changes

### Get App Credentials

1. Go to Settings > Basic
2. Copy your:
   - App ID
   - App Secret (click "Show")

### Enable Facebook in Firebase

1. In Firebase Console > Authentication > Sign-in method
2. Click on "Facebook" provider
3. Click "Enable"
4. Paste your Facebook App ID and App Secret
5. Copy the OAuth redirect URI shown (looks like: `https://your-project.firebaseapp.com/__/auth/handler`)
6. Add this URI to Facebook app's Valid OAuth Redirect URIs
7. Click "Save"

## 4. Environment Variables Setup

Create a `.env.local` file in your project root:

```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id

# Optional: For enhanced features
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your-measurement-id

# App URL (update for production)
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## 5. Security Rules

### Authorized Domains

In Firebase Console > Authentication > Settings > Authorized domains, add:
- `localhost`
- Your production domain(s)
- Your Vercel domain (if applicable)

### Firebase Security Rules

For Firestore (if using):
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can only access their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Public read for products/menu items
    match /products/{document=**} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.token.admin == true;
    }
    
    // Orders - users can read their own orders
    match /orders/{orderId} {
      allow read: if request.auth != null && 
        (request.auth.uid == resource.data.userId || 
         request.auth.token.admin == true);
      allow create: if request.auth != null;
      allow update: if request.auth != null && request.auth.token.admin == true;
    }
  }
}
```

## 6. Testing OAuth

### Local Development Testing

1. Ensure `.env.local` is configured
2. Run your development server:
   ```bash
   bun run dev
   ```
3. Navigate to `/auth/signup` or `/auth/login`
4. Click "Continue with Google" or "Continue with Facebook"
5. Complete the OAuth flow
6. Verify user is redirected to home page

### Common Issues and Solutions

#### Google Sign-In Issues

- **Error: "redirect_uri_mismatch"**
  - Solution: Add your domain to authorized redirect URIs in Google Cloud Console
  
- **Error: "This app isn't verified"**
  - Solution: For development, click "Advanced" > "Go to [app] (unsafe)"
  - For production, submit app for verification in Google Cloud Console

#### Facebook Sign-In Issues

- **Error: "Can't Load URL"**
  - Solution: Ensure redirect URI matches exactly in Facebook app settings
  
- **Error: "App Not Setup"**
  - Solution: Make sure Facebook app is in "Live" mode for production

#### Firebase Issues

- **Error: "auth/unauthorized-domain"**
  - Solution: Add domain to Firebase authorized domains
  
- **Error: "auth/invalid-api-key"**
  - Solution: Check `.env.local` configuration and restart dev server

## 7. Production Deployment

### Vercel Deployment

1. Add environment variables in Vercel dashboard:
   - Go to Project Settings > Environment Variables
   - Add all variables from `.env.local`
   
2. Add production domain to:
   - Firebase authorized domains
   - Google OAuth authorized domains
   - Facebook OAuth redirect URIs

### Security Checklist

- [ ] Environment variables are properly set in production
- [ ] Firebase API keys are restricted by domain
- [ ] OAuth redirect URIs only include your domains
- [ ] Firebase Security Rules are properly configured
- [ ] Facebook app is in "Live" mode
- [ ] Google OAuth consent screen is configured

## 8. User Data Management

### What Gets Stored

When users sign in with OAuth, Firebase stores:
- User UID (unique identifier)
- Email address
- Display name
- Profile photo URL
- Provider data (Google/Facebook ID)

### Additional User Data

You can store additional data in Firestore:
```javascript
// Example user document structure
{
  uid: "firebase-uid",
  email: "user@example.com",
  displayName: "John Doe",
  photoURL: "https://...",
  phoneNumber: "+1234567890",
  addresses: [],
  orderHistory: [],
  preferences: {
    newsletter: true,
    notifications: true
  },
  createdAt: timestamp,
  lastLogin: timestamp
}
```

## Support

If you encounter issues:
1. Check Firebase Console for error logs
2. Verify all redirect URIs match exactly
3. Ensure all domains are authorized
4. Check browser console for detailed error messages

## Resources

- [Firebase Auth Documentation](https://firebase.google.com/docs/auth)
- [Google Identity Platform](https://developers.google.com/identity)
- [Facebook Login Documentation](https://developers.facebook.com/docs/facebook-login)
