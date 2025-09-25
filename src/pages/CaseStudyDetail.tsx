import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, DollarSign, TrendingUp, Users } from 'lucide-react';

const CaseStudyDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Mock data - in real app this would come from API/CMS
  const caseStudies: Record<string, any> = {
    'software-company-demos': {
      title: 'Software Company Increases Demo Bookings by 340%',
      client: 'TechFlow Solutions',
      industry: 'B2B Software',
      challenge: 'Low demo booking rates and long sales cycles',
      solution: 'Complete customer acquisition system with instant lead response',
      results: {
        metric1: { label: 'Demo Bookings', before: '12/month', after: '53/month', increase: '340%' },
        metric2: { label: 'Response Time', before: '4 hours', after: '90 seconds', improvement: '98% faster' },
        metric3: { label: 'Revenue', before: '$45K/month', after: '$180K/month', increase: '300%' },
        metric4: { label: 'Sales Cycle', before: '90 days', after: '45 days', improvement: '50% shorter' }
      },
      timeline: '90 days',
      investment: '$4,997 setup + $1,997/month',
      roi: '450% ROI in first quarter'
    }
  };

  const study = caseStudies[slug || ''] || caseStudies['software-company-demos'];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link 
            to="/#compare" 
            className="inline-flex items-center text-gray-600 hover:text-black transition-colors mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Case Studies
          </Link>
          <div className="flex items-center justify-between">
            <img 
              src="https://i.ibb.co/p6RtDyzW/LOGO-MF-BW.png"
              alt="MF Intel Logo"
              className="h-12 w-auto"
            />
            <Link 
              to="/"
              className="bg-black text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              Get Similar Results
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-sm text-gray-600 mb-4">{study.industry} • {study.timeline}</div>
            <h1 className="text-4xl font-bold mb-6">{study.title}</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How {study.client} transformed their customer acquisition process and achieved {study.roi}
            </p>
          </div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {Object.values(study.results).map((result: any, index) => (
              <div key={index} className="bg-white p-6 rounded-xl text-center">
                <div className="text-2xl font-bold text-black mb-2">{result.increase || result.improvement}</div>
                <div className="text-sm text-gray-600 mb-1">{result.label}</div>
                <div className="text-xs text-gray-500">{result.before} → {result.after}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Challenge */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Users className="mr-3" size={24} />
                  The Challenge
                </h2>
                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    {study.client} was struggling with inconsistent lead generation and slow response times. 
                    Their manual follow-up process meant potential customers were waiting hours for responses, 
                    leading to lost opportunities and frustrated prospects.
                  </p>
                </div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Only 12 demo bookings per month despite high website traffic
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    4-hour average response time to new leads
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    90-day sales cycle with high drop-off rates
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    Sales team spending 60% of time on manual follow-ups
                  </li>
                </ul>
              </div>

              {/* Solution */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <TrendingUp className="mr-3" size={24} />
                  Our Solution
                </h2>
                <div className="bg-gray-50 p-6 rounded-xl mb-6">
                  <p className="text-gray-700 leading-relaxed">
                    We implemented a complete customer acquisition system that automated lead response, 
                    personalized follow-ups, and integrated seamlessly with their existing CRM and calendar systems.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-black pl-6">
                    <h3 className="font-semibold mb-2">Instant Lead Response System</h3>
                    <p className="text-gray-700">Automated responses within 90 seconds of lead capture, including personalized demo booking links.</p>
                  </div>
                  <div className="border-l-4 border-black pl-6">
                    <h3 className="font-semibold mb-2">Intelligent Follow-up Sequences</h3>
                    <p className="text-gray-700">Multi-touch campaigns that adapt based on prospect behavior and engagement levels.</p>
                  </div>
                  <div className="border-l-4 border-black pl-6">
                    <h3 className="font-semibold mb-2">CRM Integration & Automation</h3>
                    <p className="text-gray-700">Seamless data flow between all systems with automated lead scoring and qualification.</p>
                  </div>
                  <div className="border-l-4 border-black pl-6">
                    <h3 className="font-semibold mb-2">Performance Tracking Dashboard</h3>
                    <p className="text-gray-700">Real-time visibility into lead sources, conversion rates, and revenue attribution.</p>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <DollarSign className="mr-3" size={24} />
                  The Results
                </h2>
                <div className="bg-black text-white p-6 rounded-xl mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2">{study.roi}</div>
                    <p>Return on investment in first 90 days</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h3 className="font-semibold mb-3 text-green-800">Revenue Impact</h3>
                    <ul className="space-y-2 text-green-700">
                      <li>• Monthly revenue increased from $45K to $180K</li>
                      <li>• Average deal size increased by 25%</li>
                      <li>• Customer acquisition cost reduced by 40%</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h3 className="font-semibold mb-3 text-blue-800">Operational Efficiency</h3>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Sales team time saved: 24 hours/week</li>
                      <li>• Lead response time: 4 hours → 90 seconds</li>
                      <li>• Demo show-up rate increased to 85%</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div>
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Calendar className="mr-3" size={24} />
                  Implementation Timeline
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">1</div>
                    <div>
                      <h3 className="font-semibold">Week 1-2: Discovery & Setup</h3>
                      <p className="text-gray-600">System analysis, CRM integration, and initial automation setup</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">2</div>
                    <div>
                      <h3 className="font-semibold">Week 3-4: Testing & Training</h3>
                      <p className="text-gray-600">System testing, team training, and initial campaign launch</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">3</div>
                    <div>
                      <h3 className="font-semibold">Week 5-8: Optimization</h3>
                      <p className="text-gray-600">Performance monitoring, message optimization, and scaling</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center text-sm font-bold mr-4 mt-1">4</div>
                    <div>
                      <h3 className="font-semibold">Week 9-12: Full Scale</h3>
                      <p className="text-gray-600">Maximum performance achieved with ongoing optimization</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-8">
                {/* Client Info */}
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="font-semibold mb-4">Client Overview</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-gray-600">Company:</span>
                      <div className="font-medium">{study.client}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Industry:</span>
                      <div className="font-medium">{study.industry}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Timeline:</span>
                      <div className="font-medium">{study.timeline}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">Investment:</span>
                      <div className="font-medium">{study.investment}</div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-black text-white p-6 rounded-xl text-center">
                  <h3 className="font-semibold mb-3">Want Similar Results?</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Book a free consultation to see how we can help your business.
                  </p>
                  <Link 
                    to="/#pricing"
                    className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors inline-block"
                  >
                    Get Started
                  </Link>
                </div>

                {/* Related Studies */}
                <div>
                  <h3 className="font-semibold mb-4">Related Case Studies</h3>
                  <div className="space-y-3">
                    <Link to="/case-studies/marketing-agency-sales-cycle" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="font-medium text-sm">Marketing Agency</div>
                      <div className="text-xs text-gray-600">Cut sales cycle by 60 days</div>
                    </Link>
                    <Link to="/case-studies/consulting-response-rate" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="font-medium text-sm">Consulting Firm</div>
                      <div className="text-xs text-gray-600">23% response rate achieved</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to achieve similar results?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Book a free consultation to discuss how we can help your business get more customers and increase revenue.
          </p>
          <Link 
            to="/#pricing"
            className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors inline-block"
          >
            Book Your Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudyDetail;