import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Award, Globe, Clock, Shield } from 'lucide-react';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  suffix: string;
  label: string;
  index: number;
  color: string;
}

const StatItem: React.FC<StatItemProps> = ({ icon, value, suffix, label, index, color }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(counter);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(counter);
    }, index * 200 + 1000);

    return () => clearTimeout(timer);
  }, [value, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
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
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className="group relative"
    >
      {/* Glow effect */}
      <motion.div
        className={`absolute inset-0 ${color} rounded-2xl filter blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main card */}
      <div className="relative bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20 text-center overflow-hidden">
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className={`absolute inset-0 bg-gradient-to-br ${color.replace('bg-', 'from-')} to-transparent`} />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 ${color.replace('bg-', 'bg-')}/40 rounded-full`}
              style={{
                left: `${20 + i * 30}%`,
                top: `${20 + i * 20}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 1,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Icon */}
        <motion.div
          className={`relative inline-flex items-center justify-center w-16 h-16 ${color} rounded-2xl mb-6 shadow-lg`}
          whileHover={{ 
            scale: 1.1,
            rotate: [0, -5, 5, 0],
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="text-white"
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

          {/* Rotating ring */}
          <motion.div
            className={`absolute inset-0 border-2 ${color.replace('bg-', 'border-')}/30 rounded-2xl`}
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        {/* Counter */}
        <motion.div
          className="text-4xl font-bold text-gray-800 mb-2"
          key={count}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {count}{suffix}
        </motion.div>

        {/* Label */}
        <p className="text-gray-600 font-medium">{label}</p>

        {/* Progress bar */}
        <motion.div
          className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.2 + 1 }}
        >
          <motion.div
            className={`h-full ${color} rounded-full`}
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1.5, delay: index * 0.2 + 1.2 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const AnimatedStats: React.FC = () => {
  const stats = [
    {
      icon: <Clock className="h-8 w-8" />,
      value: 25,
      suffix: '+',
      label: 'Years Experience',
      color: 'bg-blue-500'
    },
    {
      icon: <Users className="h-8 w-8" />,
      value: 500,
      suffix: '+',
      label: 'Happy Clients',
      color: 'bg-green-500'
    },
    {
      icon: <Award className="h-8 w-8" />,
      value: 1000,
      suffix: '+',
      label: 'Projects Completed',
      color: 'bg-purple-500'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      value: 99,
      suffix: '%',
      label: 'Success Rate',
      color: 'bg-orange-500'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      value: 15,
      suffix: '+',
      label: 'Countries Served',
      color: 'bg-teal-500'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      value: 100,
      suffix: '%',
      label: 'Client Satisfaction',
      color: 'bg-red-500'
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Floating orbs */}
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-purple-500/10 rounded-full filter blur-3xl"
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
          className="absolute bottom-20 right-10 w-32 h-32 bg-blue-500/10 rounded-full filter blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, 50, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
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
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our Track Record
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Numbers that speak for our commitment to excellence and client satisfaction
          </motion.p>

          {/* Animated line */}
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: 200 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
            />
          </motion.div>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedStats;