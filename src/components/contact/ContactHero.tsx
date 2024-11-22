import { motion } from 'framer-motion';
import { Mail, Phone, MessageCircle, MapPin } from 'lucide-react';

const ContactHero = () => {
  const iconVariants = {
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

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="relative bg-[#5616b3] text-white py-12 overflow-hidden">
      {/* Enhanced Background Design */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-[#5616b3] to-purple-800"></div>
        
        {/* Decorative elements */}
        <div className="absolute inset-0">
          {/* Circular glow effects */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
          
          {/* Mesh gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-purple-900/20"></div>
          
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-5" 
               style={{ 
                 backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                 backgroundSize: '32px 32px' 
               }}>
          </div>
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="initial"
        animate="animate"
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-3xl md:text-4xl font-bold mb-3"
        >
          Contact Us
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-lg text-gray-200 max-w-2xl mx-auto mb-8"
        >
          Get in touch with our team of experts for professional auditing services
        </motion.p>

        {/* Animated Icons */}
        <motion.div 
          variants={itemVariants}
          className="flex justify-center items-center space-x-8 mt-6"
        >
          <motion.div
            variants={iconVariants}
            animate="animate"
            className="flex flex-col items-center space-y-2"
          >
            <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
              <Mail className="w-6 h-6" />
            </div>
            <span className="text-sm">Email Us</span>
          </motion.div>

          <motion.div
            variants={iconVariants}
            animate="animate"
            style={{ animationDelay: '0.5s' }}
            className="flex flex-col items-center space-y-2"
          >
            <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-sm">Call Us</span>
          </motion.div>

          <motion.div
            variants={iconVariants}
            animate="animate"
            style={{ animationDelay: '1s' }}
            className="flex flex-col items-center space-y-2"
          >
            <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
              <MessageCircle className="w-6 h-6" />
            </div>
            <span className="text-sm">Chat With Us</span>
          </motion.div>

          <motion.div
            variants={iconVariants}
            animate="animate"
            style={{ animationDelay: '1.5s' }}
            className="flex flex-col items-center space-y-2"
          >
            <div className="p-3 bg-white/10 rounded-full backdrop-blur-sm">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-sm">Visit Us</span>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactHero;
