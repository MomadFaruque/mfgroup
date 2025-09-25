import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <img 
              src="https://i.ibb.co/TxNrdt41/MF-INT3-LIG3-NCIA-WHITE.png"
              alt="MF Intel Logo"
              className="h-12 w-auto mb-6"
              loading="lazy"
            />
            <p className="text-gray-400 max-w-md">
              Complete customer acquisition systems that help businesses get more customers and increase revenue using AI technology.
            </p>
          </div>

          {/* Product links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#benefits" className="hover:text-white transition-colors">Benefits</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Process</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#compare" className="hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#faqs" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="mailto:hello@mfintel.com" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
            <div className="mb-4 md:mb-0">
              <h4 className="font-semibold mb-2">Get customer acquisition tips</h4>
              <p className="text-gray-400 text-sm">Weekly insights on getting more customers and growing your business.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-white min-w-[250px]"
              />
              <button className="bg-white text-black px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 MF Intel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;