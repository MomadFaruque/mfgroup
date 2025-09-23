import React, { useState } from 'react';
import { Target, Zap, BarChart3, Mail } from 'lucide-react';

const Benefits: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Email');

  const features = [
    {
      icon: Target,
      title: 'Find your ideal customers',
      description: 'We identify and contact businesses that need exactly what you offer.'
    },
    {
      icon: Zap,
      title: 'Respond instantly to leads',
      description: 'Never lose a potential customer to slow response times again.'
    },
    {
      icon: BarChart3,
      title: 'Track your revenue growth',
      description: 'See exactly how many new customers and dollars our system generates.'
    }
  ];

  const tabs = ['Shop', 'Checkout', 'Email', 'Order Mail', 'Scan App'];

  const emailFeatures = [
    'Messages sent using your company name and style',
    'Automatic follow-ups that get more responses',
    'Clear reports showing which messages work best'
  ];

  const caseResults = [
    {
      problem: 'Losing customers due to 4-hour response delays',
      outcome: 'Now responds in under 2 minutes — closed 340% more deals'
    },
    {
      problem: 'Only 2% of potential customers were responding',
      outcome: 'Increased to 12% response rate with personalized messages'
    },
    {
      problem: 'Unpredictable monthly revenue from new customers',
      outcome: 'Generated $180K in new customer revenue in 90 days'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Benefits */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold mb-6">How we solve your customer acquisition problems</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl">
            Stop losing potential customers to slow responses and manual processes. 
            We build complete systems that work 24/7 to bring you qualified leads and turn them into paying customers.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-800 transition-colors duration-200">
                  <feature.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Email Features Tab */}
        <div className="mb-20">
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                    activeTab === tab
                      ? 'border-black text-black'
                      : 'border-transparent text-gray-500 hover:text-black'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          {activeTab === 'Email' && (
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <Mail className="w-6 h-6 mr-3" />
                <h3 className="text-2xl font-bold">Email Campaign Features</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {emailFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-black rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Case Results */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Problems we solve for our clients</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {caseResults.map((result, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <p className="text-sm text-gray-600 mb-3">Problem: {result.problem}</p>
                <p className="font-semibold text-black">Result: {result.outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;