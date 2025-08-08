import { motion } from 'framer-motion';
import { CheckCircle, Award, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

// Floating Particles Component
const FloatingParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-2 h-2 bg-white/20 rounded-full"
      initial={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }}
      animate={{
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }}
      transition={{
        duration: Math.random() * 10 + 10,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
    />
  ));

  return <div className="absolute inset-0 overflow-hidden pointer-events-none">{particles}</div>;
};

// Morphing Background Component
const MorphingBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-r from-[#5616b3]/30 to-purple-600/30 rounded-full mix-blend-multiply filter blur-xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-r from-purple-600/30 to-[#5616b3]/30 rounded-full mix-blend-multiply filter blur-xl"
        animate={{
          x: [0, -100, 0],
          y: [0, 100, 0],
          scale: [1, 0.8, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
    </div>
  );
};

// Statistics Component
const Statistics = () => {
  const [counts, setCounts] = useState({ experience: 0, clients: 0, retention: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setCounts({ experience: 25, clients: 500, retention: 99 });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { icon: <Award className="h-8 w-8" />, value: counts.experience, suffix: '+', label: 'Years Experience' },
    { icon: <Users className="h-8 w-8" />, value: counts.clients, suffix: '+', label: 'Satisfied Clients' },
    { icon: <CheckCircle className="h-8 w-8" />, value: counts.retention, suffix: '%', label: 'Client Retention' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
    >
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.4 + index * 0.2 }}
          className="text-center bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
        >
          <div className="flex justify-center mb-3 text-white">
            {stat.icon}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.6 + index * 0.2 }}
            className="text-3xl font-bold text-white mb-2"
          >
            {stat.value}{stat.suffix}
          </motion.div>
          <p className="text-white/80 text-sm">{stat.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('/amnaauditing-hero.png')",
      }}
    >
      {/* Enhanced overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-[#5616b3]/50"></div>
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Morphing Background */}
      <MorphingBackground />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50, rotateX: -15 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ 
            duration: 1, 
            type: "spring", 
            stiffness: 100,
            damping: 15 
          }}
          className="mb-8"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
            style={{ 
              perspective: "1000px",
              textShadow: "2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)"
            }}
          >
            <motion.span
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="block font-bold"
              style={{ 
                color: "#8B5CF6",
                textShadow: "3px 3px 6px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)",
                WebkitTextStroke: "1px rgba(255,255,255,0.3)"
              }}
            >
              Professional
            </motion.span>
            <motion.span
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="block font-bold"
              style={{ 
                color: "#8B5CF6",
                textShadow: "4px 4px 8px rgba(0,0,0,0.9), 0 0 30px rgba(0,0,0,0.7)",
                WebkitTextStroke: "1px rgba(255,255,255,0.3)"
              }}
            >
              Audit & Assurance
            </motion.span>
            <motion.span
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="block font-bold"
              style={{ 
                color: "#8B5CF6",
                textShadow: "3px 3px 6px rgba(0,0,0,0.9), 0 0 20px rgba(0,0,0,0.5)",
                WebkitTextStroke: "1px rgba(255,255,255,0.3)"
              }}
            >
              Services
            </motion.span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto leading-relaxed font-medium"
            style={{ 
              textShadow: "2px 2px 4px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.5)",
              backgroundColor: "rgba(0,0,0,0.2)",
              padding: "1rem 2rem",
              borderRadius: "1rem",
              backdropFilter: "blur(10px)"
            }}
          >
            Trusted audit and financial advisory services in Qatar with over 25 years of excellence. 
            Your partner for integrity, compliance, and business growth.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 20px 40px rgba(86, 22, 179, 0.6)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#5616b3] text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-700 transition-all duration-300 shadow-2xl border-2 border-[#5616b3]"
            style={{ 
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              boxShadow: "0 10px 30px rgba(86, 22, 179, 0.4), inset 0 1px 0 rgba(255,255,255,0.2)"
            }}
          >
            Get Started Today
          </motion.button>
          <motion.button
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.15)",
              borderColor: "rgba(255, 255, 255, 0.8)"
            }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white/70 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-md bg-white/5"
            style={{ 
              textShadow: "1px 1px 2px rgba(0,0,0,0.7)",
              boxShadow: "0 8px 25px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
            }}
          >
            Learn More
          </motion.button>
        </motion.div>

        {/* Statistics */}
        <Statistics />


      </div>
    </section>
  );
};

export default HeroSection;