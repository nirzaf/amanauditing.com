import React from 'react';
import { motion } from 'framer-motion';

interface FeatureCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ imageSrc, imageAlt, title, description, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.2 }}
    className="relative group h-full"
  >
    {/* Main card container with enhanced metallic effect */}
    <div className="relative overflow-hidden rounded-xl transition-all duration-500 group-hover:translate-y-[-8px] bg-[linear-gradient(110deg,#f5f5f5,90%,#e0e0e0)] before:absolute before:inset-0 before:bg-[linear-gradient(110deg,rgba(255,255,255,0.5),40%,rgba(255,255,255,0))] before:z-10 h-full flex flex-col">
      {/* Enhanced metallic border effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-gray-200 via-white to-gray-300">
        <div className="absolute inset-[1px] rounded-xl bg-gradient-to-br from-gray-100 via-white to-gray-100">
          {/* Embossed edge effect */}
          <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-gray-50/50 to-gray-600/20"></div>
        </div>
      </div>

      {/* Enhanced metallic shine effect */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,255,255,0.8),rgba(255,255,255,0))]"></div>
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.8),rgba(255,255,255,0))]"></div>

      {/* Moving shine effect */}
      <div className="absolute inset-0 overflow-hidden rounded-xl">
        <div className="absolute inset-0 rounded-xl">
          <div className="absolute bottom-0 left-[-100%] w-[200%] h-[200%] animate-card-shine bg-[linear-gradient(115deg,transparent_30%,rgba(255,255,255,0.4)_40%,rgba(255,255,255,0.6)_45%,rgba(255,255,255,0.4)_50%,transparent_60%)]">
          </div>
        </div>
      </div>
      
      {/* Card content */}
      <div className="relative flex flex-col h-full">
        {/* Image section with enhanced overlay */}
        <div className="relative h-64 flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10" />
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg tracking-wide">
              {title}
            </h3>
          </div>
        </div>
        
        {/* Text content with enhanced metallic effect */}
        <div className="relative p-6 flex-grow overflow-hidden">
          {/* Content wrapper */}
          <div className="relative z-20">
            <p className="text-gray-700 leading-relaxed font-medium tracking-wide line-clamp-4">
              {description}
            </p>
          </div>
          
          {/* Enhanced metallic overlays */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-gray-50/80 to-gray-100/90"></div>
          <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.5),40%,rgba(255,255,255,0))] mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.8),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.8),transparent_50%)]"></div>
          
          {/* Enhanced embossed effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-gray-900/5 to-gray-900/10"></div>
          <div className="absolute inset-[1px] bg-gradient-to-t from-white/40 to-white/80 mix-blend-overlay"></div>
        </div>
      </div>
    </div>
  </motion.div>
);

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      imageSrc: "https://ik.imagekit.io/c1glhbr6p/audit.webp?updatedAt=1732211618079",
      imageAlt: "Accurate Accounting",
      title: "Accurate Accounting Records",
      description: "Our expert team ensures precise financial record-keeping with rigorous quality control measures, guaranteeing accuracy and full compliance with industry standards."
    },
    {
      imageSrc: "https://ik.imagekit.io/c1glhbr6p/Accounting-Auditing-Services-1.jpg?updatedAt=1732211621818",
      imageAlt: "Accounting Services",
      title: "Comprehensive Services",
      description: "Tailored accounting solutions for businesses of all sizes, delivering personalized support and strategic financial guidance to help your organization thrive."
    },
    {
      imageSrc: "https://ik.imagekit.io/c1glhbr6p/accounting-auditing-new-e1561310683221.jpg?updatedAt=1732211620934",
      imageAlt: "Financial Audits",
      title: "Expert Financial Audits",
      description: "Thorough audit processes that provide assurance and insights, helping strengthen your financial position and meet all regulatory requirements."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#5616b3] to-purple-600">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience excellence in financial services with our expert team dedicated to your success
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
