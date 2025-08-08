import { motion } from 'framer-motion';
import { MessageCircle, FileText, Cog, CheckCircle, ArrowRight } from 'lucide-react';

const ServiceProcess = () => {
  const processSteps = [
    {
      id: 1,
      icon: <MessageCircle className="h-8 w-8" />,
      title: 'Initial Consultation',
      description: 'We discuss your needs, objectives, and challenges to understand your requirements.',
      details: ['Requirement analysis', 'Scope definition', 'Timeline planning', 'Resource allocation'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      icon: <FileText className="h-8 w-8" />,
      title: 'Proposal & Planning',
      description: 'Detailed proposal with methodology, timeline, and deliverables tailored to your needs.',
      details: ['Customized proposal', 'Methodology outline', 'Milestone planning', 'Team assignment'],
      color: 'from-green-500 to-green-600'
    },
    {
      id: 3,
      icon: <Cog className="h-8 w-8" />,
      title: 'Execution & Delivery',
      description: 'Our expert team executes the project with regular updates and quality assurance.',
      details: ['Project execution', 'Regular updates', 'Quality control', 'Client collaboration'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 4,
      icon: <CheckCircle className="h-8 w-8" />,
      title: 'Review & Support',
      description: 'Final review, delivery of results, and ongoing support for implementation.',
      details: ['Final review', 'Results delivery', 'Implementation support', 'Follow-up services'],
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A systematic approach ensuring quality delivery and client satisfaction at every step
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 via-purple-200 to-orange-200"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8">
                    <div className={`w-8 h-8 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                      {step.id}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center text-white mb-6 mx-auto`}>
                    {step.icon}
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>

                    {/* Details List */}
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.2 + idx * 0.1 }}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full mr-3 flex-shrink-0`}></div>
                          {detail}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow (hidden on last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 z-20">
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                      className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200"
                    >
                      <ArrowRight className="h-4 w-4 text-gray-400" />
                    </motion.div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Process Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-[#5616b3] to-purple-700 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Our Process Works</h3>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Our structured approach ensures consistent quality, timely delivery, and exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Transparency',
                description: 'Clear communication and regular updates throughout the process',
                percentage: '100%'
              },
              {
                title: 'Quality Assurance',
                description: 'Multiple review stages ensure the highest quality deliverables',
                percentage: '99%'
              },
              {
                title: 'Client Satisfaction',
                description: 'Proven track record of exceeding client expectations',
                percentage: '98%'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-yellow-400 mb-2">{benefit.percentage}</div>
                <h4 className="text-xl font-semibold mb-2">{benefit.title}</h4>
                <p className="text-white/80 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceProcess;