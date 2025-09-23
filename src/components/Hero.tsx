import React from 'react';

interface HeroProps {
  openBooking: () => void;
}

const Hero: React.FC<HeroProps> = ({ openBooking }) => {
  return (
    <section id="start" className="pt-16 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Top pill */}
        <div className="flex justify-center mb-12">
          <div className="bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
            New — Complete customer acquisition system setup in 14 days.
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <div className="order-2 lg:order-1">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Get more customers without hiring more salespeople.
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We build complete customer acquisition systems using AI. You get more qualified leads, 
              faster responses, and higher sales — all managed for you from start to finish.
            </p>

            {/* Key bullets */}
            <div className="mb-10 space-y-2 text-sm text-gray-700">
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                <span>Find and contact your ideal customers automatically</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                <span>Respond to leads instantly, 24/7</span>
              </div>
              <div className="flex items-center">
                <div className="w-1.5 h-1.5 bg-black rounded-full mr-3"></div>
                <span>Track every dollar generated from new customers</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={openBooking}
                className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors duration-200 min-h-[56px]"
              >
                Get an Invite
              </button>
              <button
                onClick={openBooking}
                className="bg-white text-black border-2 border-black px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-50 transition-colors duration-200 min-h-[56px]"
              >
                Book a Call
              </button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="bg-gray-100 rounded-3xl p-8 shadow-xl">
                <img 
                  src="https://i.ibb.co/JRkJT3fX/IMG-9682.png"
                  alt="Momad Faruque working on AI growth systems"
                  className="w-full max-w-md rounded-2xl aspect-[4/3] object-cover filter contrast-110 brightness-95"
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                  srcSet="
                    https://i.ibb.co/JRkJT3fX/IMG-9682.png 400w,
                    https://i.ibb.co/JRkJT3fX/IMG-9682.png 800w,
                    https://i.ibb.co/JRkJT3fX/IMG-9682.png 1600w
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;