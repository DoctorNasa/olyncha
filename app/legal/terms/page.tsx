import React from 'react';

export default function TermsOfServicePage() {
  return (
    <div className="pt-32 pb-20 bg-cream min-h-screen">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl mb-8 text-ink text-center" style={{ fontWeight: 700 }}>
            Terms of Service
          </h1>
          
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <p className="text-gray-600 mb-8">
              <strong>Last updated:</strong> December 2024
            </p>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="font-semibold text-2xl mb-4 text-ink">1. Acceptance of Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  By accessing and using The Olyn Cha website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-2xl mb-4 text-ink">2. Description of Service</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The Olyn Cha provides premium matcha beverages, food items, and related products through our physical location and online ordering platform. Our services include:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Online ordering and delivery services</li>
                  <li>In-store pickup and dining</li>
                  <li>Catering services</li>
                  <li>Retail matcha products</li>
                </ul>
              </section>

              <section>
                <h2 className="font-semibold text-2xl mb-4 text-ink">3. User Accounts</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You agree not to disclose your password to any third party and to take sole responsibility for activities and actions under your password, whether or not you have authorized such activities or actions.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-2xl mb-4 text-ink">4. Orders and Payment</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-ink">Order Acceptance</h3>
                    <p className="text-gray-700 leading-relaxed">
                      All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in product information, or suspected fraudulent activity.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-ink">Pricing</h3>
                    <p className="text-gray-700 leading-relaxed">
                      All prices are subject to change without notice. We strive to ensure that all pricing information is accurate, but errors may occur. In the event of a pricing error, we will contact you before processing your order.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-ink">Payment</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Payment is due at the time of order placement. We accept major credit cards, debit cards, and other payment methods as indicated on our website. All payments are processed securely through our payment partners.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-semibold text-2xl mb-4 text-ink">5. Delivery and Pickup</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Delivery times are estimates and may vary based on location, weather conditions, and order volume. We are not responsible for delays caused by circumstances beyond our control.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  For pickup orders, items must be collected within 2 hours of the scheduled pickup time. Uncollected orders may be discarded without refund.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-2xl mb-4 text-ink">6. Cancellation and Refund Policy</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-ink">Cancellations</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Orders may be cancelled within 5 minutes of placement. After this time, orders cannot be cancelled as preparation may have already begun.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-ink">Refunds</h3>
                    <p className="text-gray-700 leading-relaxed">
                      Refunds will be issued for cancelled orders, defective products, or in cases where we are unable to fulfill your order. Refunds will be processed to the original payment method within 5-7 business days.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="font-semibold text-2xl mb-4 text-ink">7. Prohibited Uses</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You may not use our service:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                  <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                  <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                  <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                  <li>To submit false or misleading information</li>
                </ul>
              </section>

              <section>
                <h2 className="font-semibold text-2xl mb-4 text-ink">8. Limitation of Liability</h2>
                <p className="text-gray-700 leading-relaxed">
                  In no event shall The Olyn Cha, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, punitive, consequential, or special damages arising out of or related to your use of the service.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-2xl mb-4 text-ink">9. Changes to Terms</h2>
                <p className="text-gray-700 leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
                </p>
              </section>

              <section>
                <h2 className="font-semibold text-2xl mb-4 text-ink">10. Contact Information</h2>
                <p className="text-gray-700 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>The Olyn Cha</strong><br />
                    Rochester, NH • USA<br />
                    Email: hello@olyncha.com<br />
                    Phone: (603) 555-0123
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
