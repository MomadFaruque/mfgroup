import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQs: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How quickly will I start getting more customers?',
      answer: 'Most businesses see their first new customer inquiries within 7-14 days of system launch. Your complete system is typically generating consistent results within 30-60 days as we optimize based on your specific market response.'
    },
    {
      question: 'Do I need to understand technology to use this?',
      answer: 'Not at all. We handle all the technical setup and provide complete training. You just need to provide access to your existing email and CRM systems. We make everything simple to understand and use.'
    },
    {
      question: 'Will this work for my type of business?',
      answer: 'We work with businesses in finance, healthcare, legal, manufacturing, professional services, and many other industries. We ensure all customer contact follows proper regulations and industry standards.'
    },
    {
      question: 'Will this work with my current business systems?',
      answer: 'Yes. We connect with HubSpot, Salesforce, Pipedrive, and most business management systems. If you use something unique, we can create custom connections for enterprise clients.'
    },
    {
      question: 'How is this different from other marketing services?',
      answer: 'This isn\'t just marketing — it\'s a complete customer acquisition system. We don\'t just send emails; we build custom systems that find prospects, respond instantly to leads, integrate with your business, and track every dollar generated.'
    },
    {
      question: 'What ongoing support do I get?',
      answer: 'Complete ongoing support is included. We continuously monitor and improve your system, provide regular strategy calls, offer WhatsApp support during business hours, and add new features to maximize your results.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Common questions about our customer acquisition system</h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about getting more customers with our complete system.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openFaq === index}
              >
                <span className="text-lg font-semibold pr-8">{faq.question}</span>
                <ChevronDown 
                  size={24} 
                  className={`text-gray-400 flex-shrink-0 transition-transform duration-200 ${
                    openFaq === index ? 'transform rotate-180' : ''
                  }`}
                />
              </button>
              
              {openFaq === index && (
                <div className="px-8 pb-6">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;