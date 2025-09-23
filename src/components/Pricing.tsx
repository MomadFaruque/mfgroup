import React from 'react';
import { Check } from 'lucide-react';

interface PricingProps {
  openBooking: () => void;
}

const Pricing: React.FC<PricingProps> = ({ openBooking }) => {
  const plans = [
    {
      name: 'Foundation',
      price: '$2,997',
      period: 'setup + $997/mo',
      description: 'Complete customer acquisition system for growing businesses',
      features: [
        'Find and contact up to 1,000 potential customers monthly',
        'Instant lead response system (under 2 minutes)',
        'Complete CRM integration and setup',
        'Weekly optimization calls',
        'WhatsApp support during business hours',
        'Training videos and documentation'
      ],
      cta: 'Start with Foundation',
      popular: false
    },
    {
      name: 'Scale',
      price: '$4,997',
      period: 'setup + $1,997/mo',
      description: 'Advanced system for businesses ready to scale rapidly',
      features: [
        'Contact up to 5,000 potential customers monthly',
        'Multi-channel customer acquisition (email, LinkedIn, phone)',
        'Advanced personalization for higher response rates',
        'Dedicated account manager',
        '24/7 WhatsApp support',
        'Custom automation development',
        'Hands-on training sessions'
      ],
      cta: 'Choose Scale',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Complete business transformation for established companies',
      features: [
        'Unlimited customer acquisition capacity',
        'Custom AI system trained on your business',
        'Full team training and onboarding',
        'Dedicated success manager',
        'Custom integrations with any software',
        'White-label solutions available',
        'Revenue growth guarantees'
      ],
      cta: 'Get Custom Quote',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Investment in your customer acquisition system</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            This isn't just software — it's a complete business transformation. Start with a free consultation to see which experience fits your business.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl border-2 p-8 ${
                plan.popular 
                  ? 'border-black shadow-lg transform scale-105' 
                  : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-2">{plan.price}</div>
                <div className="text-gray-600 text-sm mb-4">{plan.period}</div>
                <p className="text-gray-600">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check size={20} className="text-black mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={openBooking}
                className={`w-full py-4 px-6 rounded-full font-medium transition-colors duration-200 ${
                  plan.popular
                    ? 'bg-black text-white hover:bg-gray-800'
                    : 'bg-white text-black border-2 border-black hover:bg-gray-50'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 text-center bg-gray-50 rounded-2xl p-12">
          <h3 className="text-2xl font-bold mb-4">Ready to get more customers?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Book a free 30-minute consultation. We'll analyze your current customer acquisition process 
            and show you exactly how our system can increase your revenue.
          </p>
          <button
            onClick={openBooking}
            className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-200"
          >
            Book Your Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;