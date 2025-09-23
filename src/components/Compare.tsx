import React from 'react';

const Compare: React.FC = () => {
  const examples = [
    { number: '01', title: 'Software Company', outcome: 'Increased new customer demos by 340%', slug: 'software-company-demos' },
    { number: '02', title: 'Marketing Agency', outcome: 'Cut time to close deals by 60 days', slug: 'marketing-agency-sales-cycle' },
    { number: '03', title: 'E-commerce Business', outcome: 'Generated $2.3M in new partnerships', slug: 'ecommerce-partnerships' },
    { number: '04', title: 'Consulting Firm', outcome: 'Achieved 23% response rate from prospects', slug: 'consulting-response-rate' },
    { number: '05', title: 'Professional Services', outcome: 'Doubled monthly revenue from new clients', slug: 'professional-services-revenue' },
    { number: '06', title: 'B2B Manufacturer', outcome: 'Built predictable $50K monthly sales pipeline', slug: 'b2b-manufacturer-pipeline' }
  ];

  return (
    <section id="compare" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Real results from real businesses.</h2>
          <div className="text-center">
            <div className="text-6xl font-bold text-gray-900 mb-4">
              $47 million
            </div>
            <p className="text-xl text-gray-600 mb-2">in new customer revenue generated for our clients.</p>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto">
              We focus on results that matter — new customers and increased revenue, not just website visits.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((example, index) => (
            <a 
              href={`/case-studies/${example.slug}`}
              key={index} 
              className="group relative overflow-hidden bg-gray-900 rounded-2xl aspect-[4/3] cursor-pointer"
            >
              <img 
                src="https://i.ibb.co/hFTqcWx0/IMG-9661.png"
                alt={`Case study ${example.number}`}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-300"
                loading="lazy"
              />
              
              <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300" />
              
              <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                <div className="text-4xl font-bold opacity-50">
                  {example.number}
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2">{example.title}</h3>
                  <p className="text-sm opacity-90 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {example.outcome}
                  </p>
                  <div className="mt-3 text-xs uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View case study
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Compare;