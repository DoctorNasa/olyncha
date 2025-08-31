// Menu Types
export interface MenuItem {
  id: string;
  name: string;
  english?: string;
  desc: string;
  prices: {
    [size: string]: number | undefined;
    add?: number; // For addon prices
  };
  tags: string[];
  img: string | null;
  featured?: boolean;
}

export interface MenuSection {
  id: string;
  title: string;
  description?: string;
  items: MenuItem[];
}

export interface Menu {
  sections: MenuSection[];
}

// Site Configuration Types
export interface SubBrand {
  kanji: string;
  romaji: string;
  english: string;
}

export interface Location {
  city: string;
  state: string;
  country: string;
  fullAddress: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export interface ContactInfo {
  email: string;
  phone: string;
  hours: {
    [day: string]: string;
  };
}

export interface SocialLinks {
  instagram: string;
  facebook: string;
  tiktok: string;
  twitter: string;
}

export interface DeliveryLinks {
  doordash: string;
  ubereats: string;
  grubhub: string;
}

export interface PromoBanner {
  enabled: boolean;
  text: string;
  link: string;
  backgroundColor: string;
  textColor: string;
}

export interface SEOConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
}

export interface Testimonial {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  subBrand: SubBrand;
  location: Location;
  contact: ContactInfo;
  social: SocialLinks;
  delivery: DeliveryLinks;
  promoBanner: PromoBanner;
  seo: SEOConfig;
  testimonials: Testimonial[];
  faq: FAQItem[];
}

// Cart Types
export interface CartItem {
  id: string;
  menuItem: MenuItem;
  size: string;
  quantity: number;
  addons?: string[];
  notes?: string;
}

export interface Cart {
  items: CartItem[];
  subtotal: number;
  tax: number;
  total: number;
}

// Order Types
export interface Order {
  id: string;
  items: CartItem[];
  customer: {
    name: string;
    email: string;
    phone: string;
  };
  type: 'pickup' | 'delivery';
  status: 'pending' | 'confirmed' | 'preparing' | 'ready' | 'completed';
  createdAt: string;
  total: number;
}
