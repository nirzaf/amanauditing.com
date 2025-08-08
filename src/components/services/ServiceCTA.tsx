import { motion } from 'framer-motion';
import { Phone, Mail, Calendar, ArrowRight, Star, Users, Award } from 'lucide-react';

const ServiceCTA = () => {
  const stats = [
    { icon: <Users className="h-6 w-6" />, value: '500+', label: 'Happy Clients' },
    { icon: <Award className="h-6 w-6" />, value: '25+', label: 'Years Experience' },
    { icon: <Star className="h-6 w-6" />, value: '99%', label: 'Success Rate' }
  ];

  const contactMethods = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      description: 'Speak directly with our experts',
      action: '+974 5530 4717',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      description: 'Send us your requirements',
      action: 'info@amnaauditing.com',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Calendar className="h-6 w-6" />,
      title: 'Schedule Meeting',
      description: 'Book a consultation session',
      action: 'Schedule Now',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-br from-[#5616b3] via-purple-700 to-purple-900 rounded-3xl p-8 md:p-12 lg:p-16 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              >
                Ready to Get Started?
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xl text-white/90 max-w-3xl mx-auto mb-8"
              >
                Transform your business with our professional services. Get expert guidance, 
                ensure compliance, and drive growth with Qatar's trusted audit and advisory firm.
              </motion.p>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap justify-center gap-8 mb-12"
              >
                {stats.map((stat, index) => (
                  <div key={stat.label} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                    <div className="text-yellow-400">
                      {stat.icon}
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-white/80 text-sm">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Primary CTA Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-purple-900 px-12 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg flex items-center space-x-3 mx-auto"
              >
                <span>Start Your Project Today</span>
                <ArrowRight className="h-5 w-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Contact Methods */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h3>
            <p className="text-xl text-gray-600">Choose your preferred way to connect with us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-xl flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {method.icon}
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{method.title}</h4>
                <p className="text-gray-600 mb-4">{method.description}</p>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-gradient-to-r ${method.color} text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300`}
                >
                  {method.action}
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Have Questions?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team of experts is here to help. Whether you need clarification on our services, 
            pricing information, or want to discuss your specific requirements, we're just a call away.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#5616b3] text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors duration-300"
            >
              View FAQ
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-[#5616b3] text-[#5616b3] px-8 py-3 rounded-full font-semibold hover:bg-[#5616b3] hover:text-white transition-all duration-300"
            >
              Download Brochure
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCTA;