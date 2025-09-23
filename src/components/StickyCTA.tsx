import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';

interface StickyCTAProps {
  openBooking: () => void;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ openBooking }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after user scrolls past the hero section
      const heroHeight = window.innerHeight;
      setIsVisible(window.scrollY > heroHeight * 0.5);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop - Top Right */}
      <div className="hidden lg:block fixed top-24 right-8 z-40">
        <div className="bg-white border border-gray-200 rounded-2xl p-4 shadow-lg max-w-sm">
          <p className="text-sm font-medium mb-3">
            Start with a free, 30-minute customer acquisition consultation.
          </p>
          <button
            onClick={openBooking}
            className="w-full bg-black text-white py-2 px-4 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors flex items-center justify-center"
          >
            <Phone size={16} className="mr-2" />
            Book a Call
          </button>
        </div>
      </div>

      {/* Mobile - Bottom */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 p-4 shadow-lg">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium">Free 30-min consultation</p>
            <p className="text-xs text-gray-600">Customer acquisition analysis</p>
          </div>
          <button
            onClick={openBooking}
            className="bg-black text-white py-3 px-6 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors flex items-center min-h-[44px]"
          >
            <Phone size={16} className="mr-2" />
            Book Call
          </button>
        </div>
      </div>
    </>
  );
};

export default StickyCTA;