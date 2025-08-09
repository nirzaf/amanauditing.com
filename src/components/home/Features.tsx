import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Building, Users, Sparkles, Zap, Heart } from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  accentIcon: React.ReactNode;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description, index, accentIcon }) => (
  <motion.div
    initial={{ opacity: 0, y: 50, rotateX: -15 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={{ once: true }}
    transition={{ 
      duration: 0.8, 
      delay: index * 0.2,
      type: "spring",
      stiffness: 100,
      damping: 15
    }}
    whileHover={{ 
      y: -10,
      rotateY: 5,
      transition: { duration: 0.3 }
    }}
    className="group relative"
  >
    {/* Main card with enhanced glass effect */}
    <div className="relative bg-white/80 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20 overflow-hidden h-full">
      
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Floating accent icon */}
      <motion.div
        className="absolute top-4 right-4 text-purple-300/40"
        animate={{ 
          rotate: [0, 10, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {accentIcon}
      </motion.div>

      {/* Animated shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-card-shine" />
      </div>

      {/* Icon container with enhanced animation */}
      <motion.div
        className="relative w-16 h-16 bg-gradient-to-br from-[#5616b3] to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg"
        whileHover={{ 
          scale: 1.1,
          rotate: [0, -5, 5, 0],
          boxShadow: "0 20px 40px rgba(86, 22, 179, 0.4)"
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {icon}
        </motion.div>
        
        {/* Pulsing ring effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-purple-400/50"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10">
        <motion.h3 
          className="text-xl font-bold mb-4 text-gray-800 group-hover:text-[#5616b3] transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
          initial={{ opacity: 0.8 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.1 + 0.5 }}
        >
          {description}
        </motion.p>
      </div>

      {/* Bottom accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#5616b3] to-purple-600 rounded-full"
        initial={{ width: 0 }}
        whileInView={{ width: "100%" }}
        transition={{ duration: 1, delay: index * 0.2 + 0.8 }}
      />
    </div>
  </motion.div>
);

const Features: React.FC = () => {
  const features = [
    {
      icon: <DollarSign className="h-8 w-8 text-white" />,
      accentIcon: <Sparkles className="h-6 w-6" />,
      title: "No Hidden Costs - Free Consultation",
      description: "Our team of dynamic individuals with unique passions would love to serve you with free consultation & high-quality services without hidden costs."
    },
    {
      icon: <Building className="h-8 w-8 text-white" />,
      accentIcon: <Zap className="h-6 w-6" />,
      title: "Bespoke Solutions",
      description: "Deep understanding of services and their diversity of packages will make us stand out from the crowd. We operate as an extension of your own team."
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      accentIcon: <Heart className="h-6 w-6" />,
      title: "Creative & Passionate Team",
      description: "In-house teams specialize in each area to deliver keen results with effective services using proven methodology to leave no stone unturned."
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-blue-200/30 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full mix-blend-multiply filter blur-xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Why Choose Us
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Experience excellence with our innovative approach and dedicated expertise
          </motion.p>

          {/* Animated decorative line */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-[#5616b3] to-transparent rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 200 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.div>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <Feature key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
