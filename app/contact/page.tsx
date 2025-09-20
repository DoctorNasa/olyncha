'use client';

import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-[#f9fcf8] min-h-screen">
      <div className="pt-40 pb-20 px-6 md:px-10 lg:px-20">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-[#121b0e] text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
              Contact
            </h1>
            <p className="text-[#121b0e] text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-[#121b0e] text-2xl md:text-3xl font-bold leading-tight mb-8">
                Send us a message
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-800">Thank you for your message! We'll get back to you soon.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-800">Something went wrong. Please try again.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[#121b0e] text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4bb814] focus:border-transparent text-[#121b0e]"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-[#121b0e] text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4bb814] focus:border-transparent text-[#121b0e]"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-[#121b0e] text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4bb814] focus:border-transparent text-[#121b0e]"
                      placeholder="(603) 555-0123"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-[#121b0e] text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4bb814] focus:border-transparent text-[#121b0e]"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="order">Order Support</option>
                      <option value="catering">Catering & Events</option>
                      <option value="wholesale">Wholesale Opportunities</option>
                      <option value="feedback">Feedback & Suggestions</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#121b0e] text-sm font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4bb814] focus:border-transparent resize-none text-[#121b0e]"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#4bb814] text-white text-lg font-bold rounded-xl hover:bg-[#3a9610] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-[#121b0e] text-2xl md:text-3xl font-bold leading-tight mb-8">
                Get in touch
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-[#121b0e] text-lg font-semibold mb-2">Visit our cafe</h3>
                  <p className="text-[#121b0e] leading-relaxed">
                    123 Main Street<br />
                    Rochester, NH 03867
                  </p>
                </div>

                <div>
                  <h3 className="text-[#121b0e] text-lg font-semibold mb-2">Call us</h3>
                  <a href="tel:+16035550123" className="text-[#4bb814] hover:text-[#3a9610] transition-colors font-medium">
                    +1 (603) 555-0123
                  </a>
                </div>

                <div>
                  <h3 className="text-[#121b0e] text-lg font-semibold mb-2">Email us</h3>
                  <a href="mailto:hello@olyncha.com" className="text-[#4bb814] hover:text-[#3a9610] transition-colors font-medium">
                    hello@olyncha.com
                  </a>
                </div>

                <div>
                  <h3 className="text-[#121b0e] text-lg font-semibold mb-2">Hours</h3>
                  <div className="text-[#121b0e] leading-relaxed">
                    <p>Monday - Sunday</p>
                    <p>9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-12">
                <h3 className="text-[#121b0e] text-lg font-semibold mb-4">Quick Links</h3>
                <div className="space-y-2">
                  <a href="/menu" className="block text-[#67974e] hover:text-[#4bb814] transition-colors">
                    View Our Menu
                  </a>
                  <a href="/locations" className="block text-[#67974e] hover:text-[#4bb814] transition-colors">
                    Find Our Locations
                  </a>
                  <a href="/about" className="block text-[#67974e] hover:text-[#4bb814] transition-colors">
                    About Olyn Cha
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-[#121b0e] text-3xl md:text-4xl font-bold leading-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-[#121b0e] text-lg leading-relaxed max-w-2xl mx-auto">
                Find answers to common questions about our matcha, orders, and services.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: "What makes your matcha special?",
                  answer: "Our matcha is sourced directly from premium farms in Uji, Kyoto - the birthplace of Japanese tea ceremony. We use only ceremonial-grade matcha that's stone-ground and shade-grown for the perfect balance of umami and sweetness."
                },
                {
                  question: "Do you offer dairy-free and vegan options?",
                  answer: "Yes! We offer a variety of plant-based milk alternatives including oat milk, almond milk, and coconut milk. Many of our matcha drinks can be made completely vegan upon request."
                },
                {
                  question: "Can I order online for pickup or delivery?",
                  answer: "Absolutely! You can place orders through our website for both pickup and delivery. Delivery is available within a 5-mile radius of our location, and pickup orders are typically ready within 15-20 minutes."
                },
                {
                  question: "Do you cater events or offer wholesale?",
                  answer: "Yes, we provide catering services for events and offer wholesale opportunities for businesses. Please contact us directly to discuss your specific needs and we'll create a custom package for you."
                },
                {
                  question: "What are your hours and location?",
                  answer: "We're open Monday through Sunday from 9:00 AM to 6:00 PM. You can find us at 123 Main Street in Rochester, NH. We're located in the heart of downtown with plenty of parking available."
                },
                {
                  question: "Do you have a loyalty program?",
                  answer: "Yes! Our Matcha Lovers loyalty program rewards frequent customers with points for every purchase. Earn points to redeem for free drinks, exclusive merchandise, and special member-only events."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                  <h3 className="text-[#121b0e] text-lg font-semibold mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-[#121b0e] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-[#121b0e] text-lg mb-4">
                Still have questions?
              </p>
              <p className="text-[#67974e]">
                Feel free to reach out using the contact form above or give us a call at{' '}
                <a href="tel:+16035550123" className="text-[#4bb814] hover:text-[#3a9610] transition-colors font-medium">
                  (603) 555-0123
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}