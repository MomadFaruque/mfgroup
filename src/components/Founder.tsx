import React from 'react';

const Founder: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center">
          <div className="w-20 h-20 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
            <img 
              src="https://i.ibb.co/G3M6XNSk/IMG-9684.png"
              alt="Momad Faruque, Founder at MF Intel"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          
          <div className="text-xs uppercase tracking-wider text-gray-500 mb-2">
            MOMAD FARUQUE — FOUNDER, MF INTEL
          </div>
          
          <p className="text-gray-700 max-w-2xl">
            I build complete customer acquisition systems that help businesses get more customers and increase revenue.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Founder;