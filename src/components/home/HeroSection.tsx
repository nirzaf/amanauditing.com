import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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

const HeroSection: React.FC = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .bubble {
        opacity: 0;
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
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            Leading Audit Firm in Qatar
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Professional
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-purple-100">
              Audit & Assurance
            </span>
            Services
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-200 max-w-2xl">
            Delivering excellence in audit, tax, and advisory services with integrity and precision. 
            Trust our expertise to guide your business towards success.
          </p>
        </div>

        {/* CTA Buttons - Centered */}
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
