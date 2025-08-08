import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

const FloatingParticles: React.FC = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-white/20 rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-20, -100],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

const MorphingBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/10 rounded-full blur-2xl"
        animate={{
          x: [-100, 100, -100],
          y: [-50, 50, -50],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

const TextTransition: React.FC = () => {
  const headlines = [
    {
      prefix: "Professional",
      highlight: "Audit & Assurance",
      suffix: "Services"
    },
    {
      prefix: "Expert",
      highlight: "Advanced Advisory",
      suffix: "Solutions"
    },
    {
      prefix: "Strategic",
      highlight: "Accounting Services",
      suffix: "Solutions"
    },
    {
      prefix: "Accurate",
      highlight: "Analysis & Audit",
      suffix: "Solutions"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [headlines.length]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const textVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -90 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
    exit: {
      y: -50,
      opacity: 0,
      rotateX: 90,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="relative min-h-[180px] md:min-h-[220px] perspective-1000">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute w-full"
        >
          <motion.h1 className="text-4xl md:text-6xl leading-tight font-heading">
            <motion.span
              variants={textVariants}
              className="inline-block font-medium tracking-tight text-white drop-shadow-lg"
            >
              {headlines[currentIndex].prefix}{' '}
            </motion.span>
            <motion.span
              variants={textVariants}
              className="block font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-100 my-2 drop-shadow-2xl"
              style={{
                filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))',
              }}
            >
              {headlines[currentIndex].highlight}
            </motion.span>
            <motion.span
              variants={textVariants}
              className="inline-block font-medium tracking-tight text-white drop-shadow-lg"
            >
              {headlines[currentIndex].suffix}
            </motion.span>
          </motion.h1>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const HeroSection: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;700&display=swap');
      .font-heading { font-family: 'Outfit', sans-serif; }
      .perspective-1000 { perspective: 1000px; }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const statsVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <section className="relative bg-gradient-to-br from-[#5616b3] via-[#4a148c] to-[#5616b3] min-h-[85vh] flex items-center justify-center overflow-hidden">
      <MorphingBackground />
      <FloatingParticles />
      
      <div className="absolute inset-0 opacity-5">
        <motion.img
          src="https://www.transparenttextures.com/patterns/cubes.png"
          alt="Cubes Background"
          className="w-full h-full object-cover"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-b from-[#5616b3]/80 via-[#5616b3]/90 to-[#5616b3]/95"></div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center bg-white/15 backdrop-blur-md px-6 py-3 rounded-full text-white/95 border border-white/30 mb-8 shadow-2xl"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255,255,255,0.1)",
            }}
          >
            <motion.span
              className="w-3 h-3 bg-green-400 rounded-full mr-3"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            Leading Audit & Advisory Firm in Qatar
          </motion.div>

          <motion.div variants={itemVariants}>
            <TextTransition />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-200 max-w-3xl mx-auto mt-6 font-heading leading-relaxed"
          >
            Driving financial clarity and strategic growth with our comprehensive audit, tax, and advisory services. Your success is our commitment.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(255,255,255,0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center bg-white text-[#5616b3] px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl relative overflow-hidden"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                />
                Request a Consultation
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-3" size={22} />
                </motion.div>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(255,255,255,0.15)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/about"
                className="inline-flex items-center bg-transparent text-white border-2 border-white/40 px-10 py-5 rounded-full font-bold text-lg hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
              >
                Explore Our Services
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "25+", label: "Years of Experience" },
              { number: "500+", label: "Satisfied Clients" },
              { number: "99%", label: "Client Retention" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={statsVariants}
                className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  y: -5,
                  boxShadow: "0 20px 40px rgba(255,255,255,0.1)",
                }}
              >
                <motion.div
                  className="text-5xl font-bold text-white mb-2"
                  animate={{
                    textShadow: [
                      "0 0 20px rgba(255,255,255,0.5)",
                      "0 0 30px rgba(255,255,255,0.8)",
                      "0 0 20px rgba(255,255,255,0.5)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-lg text-gray-300 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;