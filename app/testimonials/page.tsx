import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'The best matcha latte I\'ve ever had! The quality is exceptional and you can really taste the difference. The ceremonial grade matcha they use is absolutely divine.',
    date: '2 weeks ago',
    avatar: '👩‍💼'
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    comment: 'As someone who lived in Japan, I can say this is authentic matcha. The flavor profile is complex and the preparation is perfect every time.',
    date: '1 month ago',
    avatar: '👨‍💻'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    rating: 5,
    comment: 'I love the variety of matcha drinks they offer. The matcha ice cream is my favorite - creamy, not too sweet, and with that perfect earthy matcha flavor.',
    date: '3 weeks ago',
    avatar: '👩‍🎨'
  },
  {
    id: 4,
    name: 'David Kim',
    rating: 4,
    comment: 'Great quality matcha and excellent customer service. The delivery is always on time and the packaging keeps everything fresh.',
    date: '1 week ago',
    avatar: '👨‍🍳'
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    rating: 5,
    comment: 'The matcha ceremony experience was incredible. They really know their craft and it shows in every cup. Highly recommend!',
    date: '2 months ago',
    avatar: '👩‍🏫'
  },
  {
    id: 6,
    name: 'James Wilson',
    rating: 5,
    comment: 'Been ordering from Olyn Cha for months now. Consistent quality, great flavors, and the health benefits are a bonus. My morning routine isn\'t complete without their matcha.',
    date: '1 month ago',
    avatar: '👨‍⚕️'
  }
];

const products = [
  {
    name: 'Matcha Latte',
    description: 'A classic blend of premium matcha and steamed milk, topped with delicate latte art.',
    image: '🍵'
  },
  {
    name: 'Matcha Ice Cream',
    description: 'A cool and creamy treat with the distinctive flavor of matcha.',
    image: '🍦'
  },
  {
    name: 'Matcha Tiramisu',
    description: 'Traditional Italian dessert with a Japanese twist using premium matcha.',
    image: '🍰'
  }
];

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-matcha-600 to-matcha-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="font-serif text-4xl md:text-6xl mb-6" style={{ fontWeight: 700 }}>
            Savor the Essence of Matcha
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Discover our exquisite range of matcha beverages and treats, crafted with the finest ingredients.
          </p>
          <a
            href="/order"
            className="inline-block px-8 py-4 bg-white text-matcha-600 rounded-full font-semibold text-lg hover:scale-105 transition-transform"
          >
            Order Online
          </a>
        </div>
      </section>

      {/* Signature Creations */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-ink" style={{ fontWeight: 600 }}>
                Our Signature Creations
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Indulge in our unique matcha-infused delights, from creamy lattes to refreshing desserts.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="text-center">
                  <div className="w-full aspect-video bg-gradient-to-br from-matcha-300 to-matcha-500 rounded-xl mb-6 flex items-center justify-center">
                    <span className="text-6xl">{product.image}</span>
                  </div>
                  <h3 className="font-semibold text-xl mb-3 text-ink">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl mb-4 text-ink" style={{ fontWeight: 600 }}>
                What Our Customers Say
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied customers about their matcha experience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-sm">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-matcha-300 to-matcha-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-2xl">{testimonial.avatar}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-ink">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-matcha-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl mb-6" style={{ fontWeight: 600 }}>
            Ready to Experience Premium Matcha?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of satisfied customers and discover why our matcha is considered the finest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/menu"
              className="px-8 py-3 bg-white text-matcha-600 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              View Menu
            </a>
            <a
              href="/order"
              className="px-8 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-matcha-600 transition-colors"
            >
              Order Now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
