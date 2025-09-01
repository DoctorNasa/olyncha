import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | The Olyn Cha - Premium Matcha Tea',
  description: 'Learn about our journey, mission, and commitment to bringing the finest matcha experience to your everyday life.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-cream to-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl mb-6 text-ink" style={{ fontWeight: 700 }}>
            About Us
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At Olyn Cha, we're passionate about bringing the vibrant flavors and health benefits of matcha to
            your everyday life. Our journey began with a simple desire: to share the unique experience of
            high-quality matcha with our community.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-8 text-ink" style={{ fontWeight: 600 }}>
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Founded in 2018, Olyn Cha started as a small cafe in the heart of Rochester, NH. We quickly gained a
                loyal following for our signature matcha lattes, smoothies, and baked goods. As demand grew, we
                expanded our offerings to include online ordering and delivery, making it easier than ever to enjoy
                our matcha creations from the comfort of your home.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From sourcing the finest matcha powder directly from renowned tea farms in Uji, Kyoto to crafting
                innovative recipes, we're committed to excellence in every cup. Our matcha is carefully selected for
                its vibrant color, smooth texture, and rich flavor profile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-8 text-ink" style={{ fontWeight: 600 }}>
              Our Mission
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Our mission is to provide a delightful and accessible matcha experience for everyone. We
                believe in using only the highest quality ingredients, prepared with care and attention to
                detail. We strive to create a welcoming atmosphere, both in our cafe and online, where customers can
                discover the versatility and goodness of matcha.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We're dedicated to sustainable practices and ethical sourcing, supporting the communities that cultivate
                our exceptional matcha. Every cup you enjoy helps support traditional tea farming practices and
                environmental stewardship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl mb-12 text-center text-ink" style={{ fontWeight: 600 }}>
              Meet the Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Team Member 1 */}
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-matcha-300 to-matcha-500 rounded-full flex items-center justify-center">
                  <span className="text-6xl">👩‍💼</span>
                </div>
                <h3 className="font-semibold text-xl mb-2 text-ink">Sarah Chen</h3>
                <p className="text-matcha-600 font-medium">Founder & CEO</p>
                <p className="text-gray-600 text-sm mt-3">
                  Passionate about bringing authentic matcha culture to the West
                </p>
              </div>

              {/* Team Member 2 */}
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-matcha-300 to-matcha-500 rounded-full flex items-center justify-center">
                  <span className="text-6xl">👨‍🍳</span>
                </div>
                <h3 className="font-semibold text-xl mb-2 text-ink">David Lee</h3>
                <p className="text-matcha-600 font-medium">Head Barista</p>
                <p className="text-gray-600 text-sm mt-3">
                  Master of matcha preparation with 10+ years of experience
                </p>
              </div>

              {/* Team Member 3 */}
              <div className="text-center">
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-matcha-300 to-matcha-500 rounded-full flex items-center justify-center">
                  <span className="text-6xl">👩‍💻</span>
                </div>
                <h3 className="font-semibold text-xl mb-2 text-ink">Emily Wong</h3>
                <p className="text-matcha-600 font-medium">Marketing Manager</p>
                <p className="text-gray-600 text-sm mt-3">
                  Spreading the love for matcha through creative storytelling
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="py-20 bg-matcha-600 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl mb-8" style={{ fontWeight: 600 }}>
              Our Commitment to Quality
            </h2>
            <p className="text-lg leading-relaxed mb-8 opacity-90">
              We source our matcha directly from renowned tea farms, ensuring the highest quality and freshness.
              Our matcha is carefully selected for its vibrant color, smooth texture, and rich flavor profile.
              We're dedicated to sustainable practices and ethical sourcing, supporting the communities that cultivate
              our exceptional matcha.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-matcha-600 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Contact Us
              </Link>
              <Link
                href="/menu"
                className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-matcha-600 transition-colors"
              >
                View Our Menu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
