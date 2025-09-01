'use client';

import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: 'Ordering',
    question: 'How do I place an order?',
    answer: 'You can place an order online through our website or mobile app. Simply select your desired items, customize as needed, and proceed to checkout.'
  },
  {
    category: 'Ordering',
    question: 'Can I customize my drink?',
    answer: 'Yes! We offer various customization options including milk alternatives, sweetness levels, and additional toppings. You can specify your preferences during the ordering process.'
  },
  {
    category: 'Ordering',
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, debit cards, PayPal, Apple Pay, and Google Pay. We also offer cash on delivery for local orders.'
  },
  {
    category: 'Delivery',
    question: 'What are your delivery hours?',
    answer: 'We deliver Monday through Sunday from 9:00 AM to 6:00 PM. Orders placed after 5:30 PM will be delivered the next day.'
  },
  {
    category: 'Delivery',
    question: 'How much does delivery cost?',
    answer: 'Delivery is free for orders over $25. For orders under $25, there is a $3.99 delivery fee within our standard delivery area.'
  },
  {
    category: 'Delivery',
    question: 'How long does delivery take?',
    answer: 'Standard delivery takes 30-45 minutes. During peak hours, it may take up to 60 minutes. You can track your order in real-time through our app.'
  },
  {
    category: 'Products',
    question: 'What is matcha?',
    answer: 'Matcha is a finely ground powder made from specially grown and processed green tea leaves. Our matcha is sourced directly from Uji, Kyoto, known for producing the highest quality matcha.'
  },
  {
    category: 'Products',
    question: 'Do you have dairy-free options?',
    answer: 'Yes! We offer several plant-based milk alternatives including oat milk, almond milk, soy milk, and coconut milk for all our drinks.'
  },
  {
    category: 'Products',
    question: 'Are your products organic?',
    answer: 'Our matcha is certified organic and we use organic ingredients whenever possible. Look for the organic label on specific menu items.'
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([0]); // First item open by default

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const categories = Array.from(new Set(faqData.map(item => item.category)));

  return (
    <div className="pt-32 pb-20 bg-cream min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl mb-8 text-ink text-center" style={{ fontWeight: 700 }}>
            Frequently Asked Questions
          </h1>

          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h2 className="font-semibold text-2xl mb-6 text-ink">
                {category}
              </h2>
              
              <div className="space-y-4">
                {faqData
                  .filter(item => item.category === category)
                  .map((item, categoryIndex) => {
                    const globalIndex = faqData.indexOf(item);
                    const isOpen = openItems.includes(globalIndex);
                    
                    return (
                      <div 
                        key={categoryIndex}
                        className="bg-white rounded-xl border border-gray-200 overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(globalIndex)}
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-ink pr-4">
                            {item.question}
                          </span>
                          <ChevronDownIcon 
                            className={`w-5 h-5 text-gray-500 transition-transform ${
                              isOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-600 leading-relaxed">
                              {item.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </div>
          ))}

          {/* Contact Section */}
          <div className="mt-16 text-center bg-white rounded-xl p-8">
            <h3 className="font-semibold text-xl mb-4 text-ink">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our customer support team is here to help.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-matcha-500 text-white rounded-full font-semibold hover:bg-matcha-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
