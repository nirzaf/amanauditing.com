import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://ik.imagekit.io/c1glhbr6p/audit_adobestock_284088192_1.jpeg?updatedAt=1732301673629"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#5616b3]/95 via-[#5616b3]/80 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl ml-0 space-y-8">
          {/* Pill Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 border border-white/20">
            <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
            Leading Audit Firm in Qatar
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
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
