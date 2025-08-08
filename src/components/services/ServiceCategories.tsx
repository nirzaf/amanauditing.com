import { motion } from 'framer-motion';
import { useState } from 'react';
import { FileCheck, Users, Shield, TrendingUp } from 'lucide-react';

const ServiceCategories = () => {
  const [activeCategory, setActiveCategory] = useState('core');

  const categories = [
    {
      id: 'core',
      title: 'Core Services',
      icon: <FileCheck className="h-6 w-6" />,
      description: 'Essential audit and assurance services',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'advisory',
      title: 'Advisory Services',
      icon: <TrendingUp className="h-6 w-6" />,
      description: 'Strategic business guidance and consulting',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'compliance',
      title: 'Compliance Services',
      icon: <Shield className="h-6 w-6" />,
      description: 'Regulatory compliance and risk management',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'support',
      title: 'Support Services',
      icon: <Users className="h-6 w-6" />,
      description: 'Operational support and management',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const servicesByCategory = {
    core: [
      { name: 'Financial Audit', description: 'Comprehensive financial statement audits' },
      { name: 'Internal Audit', description: 'Risk assessment and internal control evaluation' },
      { name: 'Statutory Audit', description: 'Mandatory regulatory compliance audits' },
      { name: 'Due Diligence', description: 'Investment and acquisition assessments' }
    ],
    advisory: [
      { name: 'Business Valuation', description: 'Professional asset and company valuations' },
      { name: 'Feasibility Studies', description: 'Project viability and market analysis' },
      { name: 'Financial Advisory', description: 'Strategic financial planning and guidance' },
      { name: 'Risk Management', description: 'Enterprise risk assessment and mitigation' }
    ],
    compliance: [
      { name: 'Tax Services', description: 'Comprehensive tax planning and compliance' },
      { name: 'Regulatory Compliance', description: 'Adherence to local and international regulations' },
      { name: 'Corporate Governance', description: 'Board advisory and governance frameworks' },
      { name: 'Anti-Money Laundering', description: 'AML compliance and monitoring systems' }
    ],
    support: [
      { name: 'Payroll Services', description: 'Complete payroll processing and management' },
      { name: 'Bookkeeping', description: 'Accurate financial record maintenance' },
      { name: 'Start-up Support', description: 'New business setup and licensing assistance' },
      { name: 'Training & Development', description: 'Professional development programs' }
    ]
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our comprehensive range of professional services organized by expertise areas
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-[#5616b3] text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow-md'
              }`}
            >
              <div className={`${activeCategory === category.id ? 'text-white' : 'text-[#5616b3]'}`}>
                {category.icon}
              </div>
              <div className="text-left">
                <div className="font-semibold">{category.title}</div>
                <div className={`text-sm ${activeCategory === category.id ? 'text-white/80' : 'text-gray-500'}`}>
                  {category.description}
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Services Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {servicesByCategory[activeCategory as keyof typeof servicesByCategory].map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${categories.find(c => c.id === activeCategory)?.color} rounded-lg flex items-center justify-center mb-4`}>
                <div className="text-white">
                  {categories.find(c => c.id === activeCategory)?.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              
              {/* Learn More Link */}
              <motion.div
                whileHover={{ x: 5 }}
                className="mt-4 flex items-center text-[#5616b3] text-sm font-medium cursor-pointer"
              >
                <span>Learn More</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCategories;