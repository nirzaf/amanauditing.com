import { motion } from 'framer-motion';
import { ArrowUpRight, Award, Users, Briefcase, TrendingUp, Calendar } from 'lucide-react';
import React from 'react';

const CompanyOverview = () => {
  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const floatVariants = {
    initial: { y: 0 },
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

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
                <motion.div 
                  variants={floatVariants}
                  initial="initial"
                  animate="animate"
                  className="text-white"
                >
                  <div className="text-3xl font-bold flex items-center gap-2">
                    <Calendar className="w-6 h-6" />
                    <span>2021</span>
                  </div>
                  <div className="text-sm text-white/80">Established</div>
                </motion.div>
                <motion.div 
                  variants={floatVariants}
                  initial="initial"
                  animate="animate"
                  style={{ animationDelay: '0.2s' }}
                  className="text-white"
                >
                  <div className="text-3xl font-bold flex items-center gap-2">
                    <Users className="w-6 h-6" />
                    <span>500+</span>
                  </div>
                  <div className="text-sm text-white/80">Clients Served</div>
                </motion.div>
                <motion.div 
                  variants={floatVariants}
                  initial="initial"
                  animate="animate"
                  style={{ animationDelay: '0.4s' }}
                  className="text-white"
                >
                  <div className="text-3xl font-bold flex items-center gap-2">
                    <Award className="w-6 h-6" />
                    <span>100%</span>
                  </div>
                  <div className="text-sm text-white/80">Satisfaction</div>
                </motion.div>
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
                  Founded by a visionary Qatari woman in 2021, we bring fresh perspectives and innovative solutions to the financial services industry, particularly in oil and gas sector. We are committed to delivering exceptional service and building lasting relationships with our clients.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                {[
                  { text: "International Standards Compliance", icon: Award },
                  { text: "Expert Financial Advisory", icon: Briefcase },
                  { text: "Comprehensive Tax Services", icon: TrendingUp },
                  { text: "Strategic Business Planning", icon: Users }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: index * 0.1,
                          duration: 0.5
                        }
                      }
                    }}
                    className="flex items-center space-x-2 group"
                  >
                    <motion.div
                      variants={iconVariants}
                      className="p-2 rounded-lg bg-purple-50 group-hover:bg-purple-100 transition-colors duration-300"
                    >
                      {React.createElement(feature.icon, {
                        className: "h-5 w-5 text-[#5616b3]"
                      })}
                    </motion.div>
                    <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                      {feature.text}
                    </span>
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
