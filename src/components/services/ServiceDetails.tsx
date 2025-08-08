import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, ChevronRight, CheckCircle, Clock, Users, Award } from 'lucide-react';
import { servicesData } from '../../data/servicesData';

const ServiceDetails = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const serviceDetails = {
    'audit-assurance': {
      features: ['Financial Statement Audit', 'Internal Controls Review', 'Risk Assessment', 'Compliance Testing'],
      benefits: ['Enhanced Credibility', 'Risk Mitigation', 'Regulatory Compliance', 'Investor Confidence'],
      timeline: '4-8 weeks',
      teamSize: '3-5 professionals'
    },
    'payroll-services': {
      features: ['Salary Processing', 'Tax Calculations', 'Benefits Administration', 'Compliance Reporting'],
      benefits: ['Time Savings', 'Accuracy Guarantee', 'Legal Compliance', 'Cost Reduction'],
      timeline: 'Ongoing monthly',
      teamSize: '2-3 specialists'
    },
    'feasibility-study': {
      features: ['Market Analysis', 'Financial Projections', 'Risk Assessment', 'ROI Analysis'],
      benefits: ['Informed Decisions', 'Risk Reduction', 'Investment Clarity', 'Strategic Planning'],
      timeline: '6-12 weeks',
      teamSize: '4-6 analysts'
    },
    'tax-services': {
      features: ['Tax Planning', 'Return Preparation', 'Compliance Review', 'Advisory Services'],
      benefits: ['Tax Optimization', 'Compliance Assurance', 'Penalty Avoidance', 'Strategic Planning'],
      timeline: '2-4 weeks',
      teamSize: '2-4 tax experts'
    },
    'business-valuation': {
      features: ['Asset Valuation', 'Market Analysis', 'Financial Modeling', 'Valuation Report'],
      benefits: ['Accurate Pricing', 'Investment Decisions', 'M&A Support', 'Strategic Planning'],
      timeline: '3-6 weeks',
      teamSize: '3-4 valuators'
    },
    'startup-assistance': {
      features: ['Business Registration', 'Licensing Support', 'Initial Setup', 'Compliance Guidance'],
      benefits: ['Fast Setup', 'Legal Compliance', 'Expert Guidance', 'Cost Efficiency'],
      timeline: '2-6 weeks',
      teamSize: '2-3 consultants'
    },
    'budgeting': {
      features: ['Budget Planning', 'Variance Analysis', 'Forecasting', 'Performance Monitoring'],
      benefits: ['Financial Control', 'Performance Tracking', 'Strategic Planning', 'Cost Management'],
      timeline: '3-4 weeks',
      teamSize: '2-3 analysts'
    },
    'liquidation': {
      features: ['Asset Assessment', 'Legal Procedures', 'Creditor Management', 'Final Reporting'],
      benefits: ['Legal Compliance', 'Asset Recovery', 'Creditor Satisfaction', 'Smooth Process'],
      timeline: '8-16 weeks',
      teamSize: '3-5 specialists'
    },
    'financial-advisory': {
      features: ['Strategic Planning', 'Financial Analysis', 'Investment Advice', 'Performance Review'],
      benefits: ['Strategic Growth', 'Risk Management', 'Performance Improvement', 'Expert Insights'],
      timeline: 'Ongoing',
      teamSize: '2-4 advisors'
    }
  };

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Detailed Service Information</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive breakdown of our professional services with features, benefits, and delivery details
          </p>
        </motion.div>

        {/* Services Accordion */}
        <div className="space-y-4">
          {servicesData.map((service, index) => {
            const details = serviceDetails[service.id as keyof typeof serviceDetails];
            const isExpanded = expandedService === service.id;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden"
              >
                {/* Service Header */}
                <motion.button
                  onClick={() => toggleService(service.id)}
                  className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  whileHover={{ backgroundColor: 'rgba(249, 250, 251, 1)' }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#5616b3] to-purple-600 rounded-lg flex items-center justify-center">
                      <div className="text-white text-xl font-bold">
                        {service.title.charAt(0)}
                      </div>
                    </div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-gray-600 text-sm mt-1">{service.description}</p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="h-6 w-6 text-gray-400" />
                  </motion.div>
                </motion.button>

                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: isExpanded ? 'auto' : 0,
                    opacity: isExpanded ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                      {/* Features */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                          Key Features
                        </h4>
                        <ul className="space-y-2">
                          {details?.features.map((feature, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <ChevronRight className="h-4 w-4 text-[#5616b3] mr-1 mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Benefits */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 flex items-center">
                          <Award className="h-5 w-5 text-yellow-500 mr-2" />
                          Benefits
                        </h4>
                        <ul className="space-y-2">
                          {details?.benefits.map((benefit, idx) => (
                            <li key={idx} className="text-sm text-gray-600 flex items-start">
                              <ChevronRight className="h-4 w-4 text-[#5616b3] mr-1 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Timeline */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 flex items-center">
                          <Clock className="h-5 w-5 text-blue-500 mr-2" />
                          Timeline
                        </h4>
                        <div className="bg-blue-50 rounded-lg p-4">
                          <div className="text-2xl font-bold text-blue-600">{details?.timeline}</div>
                          <div className="text-sm text-blue-700">Typical delivery time</div>
                        </div>
                      </div>

                      {/* Team Size */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-gray-900 flex items-center">
                          <Users className="h-5 w-5 text-purple-500 mr-2" />
                          Team Size
                        </h4>
                        <div className="bg-purple-50 rounded-lg p-4">
                          <div className="text-2xl font-bold text-purple-600">{details?.teamSize}</div>
                          <div className="text-sm text-purple-700">Dedicated experts</div>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="mt-8 flex justify-center"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#5616b3] text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300 flex items-center space-x-2"
                      >
                        <span>Request {service.title} Quote</span>
                        <ChevronRight className="h-4 w-4" />
                      </motion.button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;