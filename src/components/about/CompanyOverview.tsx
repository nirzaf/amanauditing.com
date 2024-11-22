import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const CompanyOverview = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/50 to-white"></div>
      <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-purple-100/30 rounded-l-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#5616b3] to-purple-900 rounded-2xl transform rotate-3 scale-105 opacity-10"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://ik.imagekit.io/c1glhbr6p/istockphoto-610753364-612x612-2.jpg?updatedAt=1732211618256"
                alt="Amna Accounting Team"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#5616b3]/80 to-transparent"></div>
              
              {/* Stats */}
              <div className="absolute bottom-0 left-0 right-0 p-8 grid grid-cols-3 gap-4">
                <div className="text-white">
                  <div className="text-3xl font-bold">15+</div>
                  <div className="text-sm text-white/80">Years Experience</div>
                </div>
                <div className="text-white">
                  <div className="text-3xl font-bold">500+</div>
                  <div className="text-sm text-white/80">Clients Served</div>
                </div>
                <div className="text-white">
                  <div className="text-3xl font-bold">100%</div>
                  <div className="text-sm text-white/80">Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Section Label */}
            <div className="flex items-center space-x-4">
              <div className="h-px w-8 bg-[#5616b3]"></div>
              <span className="text-[#5616b3] font-medium">Our Story</span>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold leading-tight">
                Pioneering Excellence in
                <span className="text-[#5616b3]"> Financial Services</span>
              </h2>
              
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Amna Accounting is poised to assist your business with its outsourced accounting, auditing, assurance, taxation and payroll needs. Our team of dedicated professionals provides an integrated service platform and knowledge base that provides the tools and know-how for your continued success.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Founded by a visionary Qatari woman with over 15 years of experience in auditing and financial work, particularly in oil and gas, we are committed to delivering exceptional service and building lasting relationships with our clients.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                {[
                  "International Standards Compliance",
                  "Expert Financial Advisory",
                  "Comprehensive Tax Services",
                  "Strategic Business Planning"
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-2"
                  >
                    <ArrowUpRight className="h-5 w-5 text-[#5616b3]" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
