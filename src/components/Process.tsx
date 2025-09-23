import React from 'react';
import { Search, Settings, Rocket, TrendingUp } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Discovery & Setup',
      description: 'We analyze your business and build your custom system.',
      benefit: 'Complete onboarding with training videos and documentation'
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'We connect everything to your existing tools and CRM.',
      benefit: 'One-click integrations with weekly setup calls and WhatsApp support'
    },
    {
      icon: Rocket,
      title: 'Go Live',
      description: 'Your system starts finding and contacting customers.',
      benefit: 'Hands-on training sessions and 24/7 monitoring'
    },
    {
      icon: TrendingUp,
      title: 'Grow & Optimize',
      description: 'We continuously improve your results and add new features.',
      benefit: 'Additional automations and ongoing optimization for maximum revenue'
    }
  ];

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">How it works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your roadmap from setup to scaled revenue generation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-8">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                
                {/* Icon */}
                <div className="w-20 h-20 bg-white border-2 border-gray-200 rounded-2xl flex items-center justify-center mx-auto group-hover:border-black transition-colors duration-200">
                  <step.icon size={32} className="text-black" />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{step.description}</p>
              <p className="text-sm text-gray-500">{step.benefit}</p>
            </div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">See exactly how much revenue you're generating</h3>
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <div className="bg-gray-100 rounded-xl p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="font-semibold">Customer Acquisition Results</h4>
                <div className="flex space-x-4 text-sm">
                  <span className="text-gray-600">Contacted: 1,247</span>
                  <span className="text-gray-600">Interested: 423</span>
                  <span className="text-black font-semibold">New Customers: 89</span>
                </div>
              </div>
              <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Customer acquisition dashboard</p>
              </div>
            </div>
            <p className="text-gray-600">Track leads, customers, and revenue from every interaction.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;