import { motion } from 'framer-motion';
import { ClipboardCheck, BarChart3, BadgeCheck, Target } from 'lucide-react';
import React from 'react';

const AboutHero = () => {
  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    },
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const icons = [
    { Icon: ClipboardCheck, delay: 0, label: "Audit" },
    { Icon: BarChart3, delay: 0.1, label: "Analysis" },
    { Icon: BadgeCheck, delay: 0.2, label: "Quality" },
    { Icon: Target, delay: 0.3, label: "Precision" }
  ];

  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#5616b3] to-purple-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>
      </div>

      {/* Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-16 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-32 -right-16 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      {/* Content */}
      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center py-12"
        >
          {/* Animated Icons */}
          <div className="flex justify-center gap-8 mb-8">
            {icons.map(({ Icon, delay, label }, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial="hidden"
                animate="visible"
                whileHover="hover"
                custom={delay}
              >
                <motion.div
                  variants={iconVariants}
                  transition={{ delay }}
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors duration-300"
                >
                  <Icon className="w-6 h-6 text-white" />
                </motion.div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: delay + 0.3 }}
                  className="text-white/80 text-sm mt-2"
                >
                  {label}
                </motion.span>
              </motion.div>
            ))}
          </div>

          {/* Decorative Line */}
          <div className="flex justify-center mb-4">
            <div className="w-16 h-1 bg-white/30 rounded-full"></div>
          </div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-white/90 border border-white/20 mb-6 text-sm"
          >
            <span className="w-1.5 h-1.5 bg-white rounded-full mr-2 animate-pulse"></span>
            Established Since 2021
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-purple-200">Excellence in Auditing</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
          >
            Leading the way in professional audit and assurance services with innovation, integrity, and excellence
          </motion.p>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2"
          >
            <div className="w-5 h-8 border-2 border-white/30 rounded-full p-1">
              <div className="w-1 h-2 bg-white/50 rounded-full mx-auto animate-scroll"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
