
# 🍵 Olyn Cha - Premium Matcha E-commerce Platform

A modern, full-stack e-commerce web application for a premium matcha tea cafe in Rochester, NH. Built with Next.js 15, TypeScript, and Firebase, featuring responsive design, real-time order tracking, and comprehensive user management.

## 🌟 Live Demo

Visit the live application: [Olyn Cha](https://your-domain.vercel.app)

## 📱 Screenshots

| Mobile | Tablet | Desktop |
|--------|--------|---------|
| ![Mobile View](docs/mobile-view.png) | ![Tablet View](docs/tablet-view.png) | ![Desktop View](docs/desktop-view.png) |

## ✨ Features

### 🛍️ **E-commerce Core**
- **Product Catalog**: Signature drinks, seasonal specials, and classic matcha selections
- **Shopping Cart**: Add to cart, quantity management, and checkout flow
- **Order Management**: Real-time order tracking with GPS integration
- **Payment Processing**: Secure payments via Stripe integration
- **Subscription Orders**: Recurring matcha deliveries

### 👤 **User Experience**
- **Authentication**: Login, signup, password reset with Firebase Auth
- **User Profiles**: Account management, order history, preferences
- **Address Management**: Multiple delivery addresses
- **Loyalty Program**: Points system and rewards
- **Personalized Recommendations**: AI-driven product suggestions

### 📱 **Responsive Design**
- **Mobile-First**: Optimized for all screen sizes (390px - 2560px+)
- **Progressive Web App**: Offline support and app-like experience
- **Touch-Friendly**: Optimized touch targets and gestures

### 🎨 **Modern UI/UX**
- **Three.js Animations**: Interactive 3D elements
- **Smooth Transitions**: Framer Motion animations
- **Dark/Light Mode**: Theme switching with next-themes
- **Accessibility**: WCAG 2.1 AA compliant

### 🚚 **Delivery & Logistics**
- **Real-time Tracking**: Live order status updates
- **GPS Integration**: Driver location and ETA
- **Multiple Providers**: Uber Eats, DoorDash integration
- **Delivery Zones**: Rochester, NH and surrounding areas

### 📊 **Admin & Analytics**
- **Inventory Management**: Real-time stock tracking
- **Order Analytics**: Sales reports and insights
- **Customer Management**: User analytics and support tools
- **Marketing Tools**: Email campaigns and social media integration

## 🛠️ Tech Stack

### **Frontend**
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.1.3
- **UI Components**: Radix UI primitives
- **Animations**: Three.js, Framer Motion
- **State Management**: React Context + Hooks
- **Forms**: React Hook Form + Zod validation

### **Backend & Database**
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Storage**: Firebase Storage
- **Functions**: Firebase Cloud Functions

### **Development & Deployment**
- **Package Manager**: npm
- **Testing**: Jest, React Testing Library, Playwright
- **Deployment**: Vercel
- **CI/CD**: GitHub Actions
- **Monitoring**: Vercel Analytics

### **Third-Party Integrations**
- **Payments**: Stripe
- **Delivery**: Uber Eats API, DoorDash API
- **Email**: SendGrid
- **Maps**: Google Maps API
- **Analytics**: Google Analytics 4

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn
- Firebase account
- Stripe account (for payments)

### **Installation**

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/olyn-cha.git
   cd olyn-cha
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   
   Create a `.env.local` file in the root directory:
   ```env
   # Firebase Configuration
   NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

   # Stripe Configuration
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
   STRIPE_SECRET_KEY=sk_test_...
   STRIPE_WEBHOOK_SECRET=whsec_...

   # Google Maps API
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_api_key

   # Email Service
   SENDGRID_API_KEY=your_sendgrid_api_key
   ```

4. **Firebase Setup**
   
   - Create a new Firebase project at [Firebase Console](https://console.firebase.google.com)
   - Enable Authentication (Email/Password, Google, Apple)
   - Create Firestore database
   - Enable Storage
   - Copy configuration to `.env.local`

5. **Run the development server**
   ```bash
   npm run dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📋 Available Scripts

```bash
# Development
npm run dev          # Start development server on port 3000
npm run dev:vite     # Alternative Vite development server

# Building
npm run build        # Build for production
npm run start        # Start production server

# Testing
npm run test         # Run Jest unit tests
npm run test:watch   # Run tests in watch mode
npm run test:coverage # Generate coverage report
npm run test:ci      # Run tests for CI/CD

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler check
```

## 🧪 Testing

### **Unit & Integration Tests**
```bash
npm run test
```

### **E2E Testing with Playwright**
```bash
npx playwright test
```

### **Responsive Testing**
The application is tested across multiple screen sizes:
- Mobile: 390x844 (iPhone 12 Pro)
- Tablet: 768x1024 (iPad)
- Laptop: 1366x768
- Desktop: 1920x1080
- Ultra-wide: 2560x1440

## 📁 Project Structure

```
olyn-cha/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── about/             # About page
│   ├── menu/              # Menu page
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components (Radix)
│   ├── forms/            # Form components
│   └── layout/           # Layout components
├── lib/                  # Utility functions
│   ├── firebase.ts       # Firebase configuration
│   ├── stripe.ts         # Stripe configuration
│   └── utils.ts          # Helper functions
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
├── public/               # Static assets
├── tests/                # Test files
└── docs/                 # Documentation assets
```

## 🔧 Configuration

### **Firebase Security Rules**
```javascript
// Firestore Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /orders/{orderId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### **Tailwind Configuration**
The project uses Tailwind CSS 4.1.3 with custom configurations for:
- Custom color palette matching brand colors
- Responsive breakpoints
- Custom animations and transitions
- Component-specific utilities

## 🚀 Deployment

### **Vercel Deployment**
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### **Manual Deployment**
```bash
npm run build
npm run start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Olyn Cha Team**
- Website: [olyncha.com](https://olyncha.com)
- Email: hello@olyncha.com
- Phone: +1 (603) 555-0123
- Address: 123 Main Street, Rochester, NH 03867

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Firebase](https://firebase.google.com/) - Backend services
- [Tailwind CSS](https://tailwindcss.com/) - Styling framework
- [Radix UI](https://www.radix-ui.com/) - UI primitives
- [Vercel](https://vercel.com/) - Deployment platform
  