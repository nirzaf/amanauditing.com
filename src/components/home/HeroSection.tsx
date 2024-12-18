import React, { useEffect, useState } from 'react';
import { ArrowRight, Calculator, FileSpreadsheet, PieChart, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const BubbleStream: React.FC<{ position: number; streamIndex: number }> = ({ position, streamIndex }) => {
  const getRandomSize = () => {
    const baseSize = 6 + Math.random() * 4; // 6px to 10px
    return streamIndex === 1 ? baseSize * 1.2 : baseSize; // Stream 1 has slightly larger bubbles
  };

  const getRandomDelay = (index: number) => {
    const baseDelay = index * 0.3;
    return baseDelay + (Math.random() * 0.5); // Add up to 0.5s random delay
  };

  return (
    <div className="absolute bottom-0" style={{ left: `${position}%` }}>
      {Array.from({ length: 10 + streamIndex % 2 * 4 }).map((_, index) => {
        const size = getRandomSize();
        return (
          <div
            key={index}
            className={`bubble absolute bottom-0 rounded-full bg-gradient-to-r from-white/40 to-white/10 bubble-${streamIndex}-${index % 5}`}
            style={{
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${getRandomDelay(index)}s`,
            }}
          />
        );
      })}
    </div>
  );
};

const FloatingIcon: React.FC<{ icon: React.ReactNode; delay: number; position: { x: number; y: number } }> = ({ icon, delay, position }) => (
  <div
    className="absolute text-white/30 animate-float"
    style={{
      left: `${position.x}%`,
      top: `${position.y}%`,
      animation: `float 10s infinite ease-in-out ${delay}s`,
    }}
  >
    {icon}
  </div>
);

const NumberParticle: React.FC<{ value: string; position: { x: number; y: number }; delay: number }> = ({ value, position, delay }) => (
  <div
    className="absolute text-white/20 font-mono text-sm animate-fade-up-slow"
    style={{
      left: `${position.x}%`,
      top: `${position.y}%`,
      animationDelay: `${delay}s`,
    }}
  >
    {value}
  </div>
);

const replaceStartingAWithFavicon = (text: string, className: string = '') => {
  return text.split(' ').map((word, wordIndex) => {
    if (word.startsWith('A') || word.startsWith('a')) {
      return (
        <React.Fragment key={wordIndex}>
          <span 
            className="inline-block relative" 
            style={{ 
              width: '1em',
              height: '1em',
              verticalAlign: 'middle',
              marginTop: '-0.2em'
            }}
          >
            <img 
              src="/favicon.png" 
              alt="A" 
              className={`w-full h-full object-contain ${className}`}
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </span>
          {word.slice(1)}
          {' '}
        </React.Fragment>
      );
    }
    return <React.Fragment key={wordIndex}>{word}{' '}</React.Fragment>;
  });
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
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const textVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 20 : -20,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      zIndex: 1,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    exit: (direction: number) => ({
      zIndex: 0,
      y: direction < 0 ? 20 : -20,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.5
      }
    })
  };

  const direction = 1;

  return (
    <div className="relative min-h-[220px] md:min-h-[280px]">
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={textVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute w-full"
        >
          <div className="text-4xl md:text-6xl leading-tight">
            <span className="font-heading font-medium tracking-tight text-white">
              {replaceStartingAWithFavicon(headlines[currentIndex].prefix)}
            </span>
            <motion.span 
              className="block font-heading font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-100 my-2"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 4,
                ease: "linear",
                repeat: Infinity 
              }}
              style={{ 
                backgroundSize: "200% 100%",
                textShadow: "0 0 1px rgba(255,255,255,0.1)"
              }}
            >
              {replaceStartingAWithFavicon(headlines[currentIndex].highlight, 'gradient-text')}
            </motion.span>
            <span className="font-heading font-medium tracking-tight text-white">
              {replaceStartingAWithFavicon(headlines[currentIndex].suffix)}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const HeroSection: React.FC = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap');
      
      .font-heading {
        font-family: 'Outfit', sans-serif;
      }
      
      .bubble {
        opacity: 0;
      }
      
      .gradient-text {
        -webkit-mask-image: linear-gradient(to right, white, white);
      }
      
      ${Array.from({ length: 4 }).map((_, streamIndex) => 
        Array.from({ length: 5 }).map((_, bubbleVariant) => `
          .bubble-${streamIndex}-${bubbleVariant} {
            animation: rise-${streamIndex}-${bubbleVariant} ${4 + Math.random() * 2}s infinite ease-in-out;
          }

          @keyframes rise-${streamIndex}-${bubbleVariant} {
            0% {
              transform: translateY(0) translateX(0) scale(0.3);
              opacity: 0;
            }
            5% {
              opacity: ${0.6 + Math.random() * 0.3};
            }
            25% {
              transform: translateY(-25vh) translateX(${-15 + Math.random() * 30}px) scale(${0.5 + Math.random() * 0.3});
            }
            50% {
              transform: translateY(-50vh) translateX(${-15 + Math.random() * 30}px) scale(${0.7 + Math.random() * 0.3});
            }
            75% {
              transform: translateY(-75vh) translateX(${-15 + Math.random() * 30}px) scale(${0.9 + Math.random() * 0.3});
            }
            95% {
              opacity: ${0.3 + Math.random() * 0.3};
            }
            100% {
              transform: translateY(-100vh) translateX(${-15 + Math.random() * 30}px) scale(${1.1 + Math.random() * 0.3});
              opacity: 0;
            }
          }
        `).join('\n')
      ).join('\n')}
      
      .bubble::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(circle at ${30 + Math.random() * 20}% ${30 + Math.random() * 20}%, 
                                  rgba(255, 255, 255, 0.8) 0%, 
                                  rgba(255, 255, 255, 0.2) 60%, 
                                  transparent 100%);
        border-radius: 50%;
        transform: rotate(${Math.random() * 360}deg);
      }
      
      @keyframes float {
        0%, 100% {
          transform: translateY(0) translateX(0) rotate(0deg);
        }
        25% {
          transform: translateY(-15px) translateX(5px) rotate(5deg);
        }
        75% {
          transform: translateY(15px) translateX(-5px) rotate(-5deg);
        }
      }
      
      @keyframes fade-up-slow {
        0% {
          opacity: 0;
          transform: translateY(20px);
        }
        20% {
          opacity: 0.3;
        }
        80% {
          opacity: 0.3;
        }
        100% {
          opacity: 0;
          transform: translateY(-20px);
        }
      }
      
      .animate-float {
        animation: float 6s infinite ease-in-out;
      }
      
      .animate-fade-up-slow {
        animation: fade-up-slow 8s infinite ease-in-out;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0" style={{ zIndex: 0 }}>
        <img
          src="https://ik.imagekit.io/c1glhbr6p/audit_adobestock_284088192_1.jpeg?updatedAt=1732301673629"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#5616b3]/95 via-[#5616b3]/80 to-transparent"></div>
      </div>

      {/* Floating Finance Icons */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <FloatingIcon icon={<Calculator size={24} />} delay={0} position={{ x: 15, y: 20 }} />
        <FloatingIcon icon={<FileSpreadsheet size={24} />} delay={2} position={{ x: 75, y: 30 }} />
        <FloatingIcon icon={<PieChart size={24} />} delay={1} position={{ x: 85, y: 60 }} />
        <FloatingIcon icon={<DollarSign size={24} />} delay={3} position={{ x: 25, y: 70 }} />
        
        {/* Number Particles */}
        <NumberParticle value="1,234,567" position={{ x: 20, y: 40 }} delay={0} />
        <NumberParticle value="89,012" position={{ x: 70, y: 25 }} delay={2} />
        <NumberParticle value="456,789" position={{ x: 80, y: 45 }} delay={4} />
        <NumberParticle value="2,345,678" position={{ x: 30, y: 65 }} delay={6} />
      </div>

      {/* Bubble Streams */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <BubbleStream position={12} streamIndex={0} />
        <BubbleStream position={38} streamIndex={1} />
        <BubbleStream position={62} streamIndex={2} />
        <BubbleStream position={85} streamIndex={3} />
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12" style={{ zIndex: 2 }}>
        <div className="max-w-3xl ml-0 space-y-8">
          {/* Pill Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20 animate-pulse font-heading">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            Leading Audit Firm in Qatar
          </div>

          {/* Animated Main Heading */}
          <TextTransition />

          {/* Description */}
          <p className="text-xl text-gray-200 max-w-2xl font-heading">
            Delivering excellence in audit, tax, and advisory services with integrity and precision. 
            Trust our expertise to guide your business towards success.
          </p>

          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mt-8">
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <div className="text-2xl font-bold text-white">25+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-gray-300">Clients Served</div>
            </div>
            <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
              <div className="text-2xl font-bold text-white">100%</div>
              <div className="text-sm text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center mt-12">
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center bg-white text-[#5616b3] px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center bg-transparent text-white border-2 border-white/20 px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
