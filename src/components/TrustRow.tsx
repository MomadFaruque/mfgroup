import React from 'react';

const TrustRow: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Value statement */}
        <h2 className="text-2xl font-bold mb-8">
          Start getting more customers in 14 days — not 6 months.
        </h2>
        
        {/* Client logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-4 opacity-60">
          <div className="text-lg font-bold text-gray-400">ZENITH TECH</div>
          <div className="text-lg font-bold text-gray-400">APEX SOLUTIONS</div>
          <div className="text-lg font-bold text-gray-400">NOVA SYSTEMS</div>
          <div className="text-lg font-bold text-gray-400">PRIME DIGITAL</div>
          <div className="text-lg font-bold text-gray-400">VERTEX GROUP</div>
        </div>
        
        <p className="text-sm text-gray-600">
          Trusted by growing businesses to increase their revenue.
        </p>
      </div>
    </section>
  );
};

export default TrustRow;