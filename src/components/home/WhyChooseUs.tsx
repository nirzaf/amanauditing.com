import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  Award, 
  Users, 
  TrendingUp, 
  Shield, 
  Zap,
  Star,
  Sparkles,
  ArrowRight,
  Eye,
  Heart,
  Target
} from 'lucide-react';

interface FeatureCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  index: number;
  stats: { value: string; label: string }[];
  highlights: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  imageSrc, 
  imageAlt, 
  title, 
  description, 
  index, 
  stats, 
  highlights 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  return (
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
        y: -15,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-[500px] perspective-1000"
    >
      {/* Outer glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-blue-500/20 rounded-3xl filter blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
        animate={isHovered ? {
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        } : {}}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Card container with flip animation */}
      <motion.div
        className="relative w-full h-full preserve-3d cursor-pointer"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Front side */}
        <div className="absolute inset-0 w-full h-full backface-hidden">
          <div className="relative h-full bg-white rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden">
            
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-500/30 to-blue-500/30"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(139,92,246,0.3), rgba(236,72,153,0.3), rgba(59,130,246,0.3))",
                    "linear-gradient(45deg, rgba(236,72,153,0.3), rgba(59,130,246,0.3), rgba(139,92,246,0.3))",
                    "linear-gradient(45deg, rgba(59,130,246,0.3), rgba(139,92,246,0.3), rgba(236,72,153,0.3))"
                  ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </div>

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
                  style={{
                    left: `${10 + (i * 12)}%`,
                    top: `${15 + (i % 3) * 25}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.2, 0.8, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Image section with advanced effects */}
            <div className="relative h-64 overflow-hidden">
              {/* Dynamic gradient overlay */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10"
                animate={isHovered ? {
                  background: [
                    "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5), transparent)",
                    "linear-gradient(to top, rgba(139,92,246,0.8), rgba(236,72,153,0.4), transparent)",
                    "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.5), transparent)"
                  ]
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              <motion.img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-full object-cover"
                animate={isHovered ? { 
                  scale: 1.15,
                  filter: "brightness(1.2) contrast(1.1) saturate(1.2)"
                } : { 
                  scale: 1.05,
                  filter: "brightness(1) contrast(1) saturate(1)"
                }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              />
              
              {/* Title overlay with enhanced effects */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <motion.h3 
                  className="text-2xl font-bold text-white mb-2 drop-shadow-2xl"
                  style={{
                    textShadow: "2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.3)"
                  }}
                  animate={isHovered ? {
                    scale: [1, 1.05, 1],
                    textShadow: [
                      "2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.3)",
                      "2px 2px 4px rgba(0,0,0,0.8), 0 0 30px rgba(139,92,246,0.6)",
                      "2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.3)"
                    ]
                  } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {title}
                </motion.h3>

                {/* Animated underline */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                />
              </div>

              {/* Corner sparkle effect */}
              <motion.div
                className="absolute top-4 right-4 text-yellow-300 z-20"
                animate={{
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
            </div>
            
            {/* Content section with glass morphism */}
            <div className="relative p-6 bg-gradient-to-br from-white/95 via-white/90 to-gray-50/95 backdrop-blur-xl">
              <motion.p 
                className="text-gray-700 leading-relaxed font-medium mb-4"
                animate={isHovered ? { color: "#374151" } : { color: "#6b7280" }}
                transition={{ duration: 0.3 }}
              >
                {description}
              </motion.p>

              {/* Action button */}
              <motion.button
                className="group/btn flex items-center space-x-2 text-purple-600 font-semibold hover:text-purple-700 transition-colors duration-300"
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-4 h-4" />
                </motion.div>
              </motion.button>

              {/* Flip indicator */}
              <motion.div
                className="absolute bottom-4 right-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Eye className="w-5 h-5" />
              </motion.div>
            </div>
          </div>
        </div>

        {/* Back side */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180">
          <div className="relative h-full bg-gradient-to-br from-purple-900 via-purple-800 to-blue-900 rounded-3xl shadow-2xl border border-purple-500/20 overflow-hidden">
            
            {/* Animated background */}
            <div className="absolute inset-0">
              <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(139,92,246,0.3),transparent_50%)]"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)]"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.6, 0.3, 0.6],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <div className="relative h-full p-8 flex flex-col justify-center text-white">
              {/* Stats section */}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-6 text-center">Key Metrics</h4>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 + 0.3 }}
                    >
                      <div className="text-2xl font-bold text-yellow-300 mb-1">{stat.value}</div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Highlights section */}
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Star className="w-5 h-5 text-yellow-300 mr-2" />
                  Key Highlights
                </h4>
                <div className="space-y-3">
                  {highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 + 0.5 }}
                    >
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-sm text-gray-200">{highlight}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Back button */}
              <motion.button
                className="mt-8 self-center px-6 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white font-medium hover:bg-white/30 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
              >
                Back to Details
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      imageSrc: "https://ik.imagekit.io/c1glhbr6p/audit.webp?updatedAt=1732211618079",
      imageAlt: "Accurate Accounting",
      title: "Accurate Accounting Records",
      description: "Our expert team ensures precise financial record-keeping with rigorous quality control measures, guaranteeing accuracy and full compliance with industry standards.",
      stats: [
        { value: "99.9%", label: "Accuracy Rate" },
        { value: "24/7", label: "Support" }
      ],
      highlights: [
        "Real-time financial tracking",
        "Automated error detection",
        "Compliance monitoring",
        "Regular quality audits"
      ]
    },
    {
      imageSrc: "https://ik.imagekit.io/c1glhbr6p/Accounting-Auditing-Services-1.jpg?updatedAt=1732211621818",
      imageAlt: "Accounting Services",
      title: "Comprehensive Services",
      description: "Tailored accounting solutions for businesses of all sizes, delivering personalized support and strategic financial guidance to help your organization thrive.",
      stats: [
        { value: "500+", label: "Clients Served" },
        { value: "15+", label: "Service Types" }
      ],
      highlights: [
        "Customized solutions",
        "Multi-industry expertise",
        "Scalable services",
        "Strategic consulting"
      ]
    },
    {
      imageSrc: "https://ik.imagekit.io/c1glhbr6p/accounting-auditing-new-e1561310683221.jpg?updatedAt=1732211620934",
      imageAlt: "Financial Audits",
      title: "Expert Financial Audits",
      description: "Thorough audit processes that provide assurance and insights, helping strengthen your financial position and meet all regulatory requirements.",
      stats: [
        { value: "25+", label: "Years Experience" },
        { value: "100%", label: "Compliance Rate" }
      ],
      highlights: [
        "Comprehensive audit trails",
        "Risk assessment",
        "Regulatory compliance",
        "Detailed reporting"
      ]
    }
  ];

  return (
    <section className="relative py-32 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-purple-200/20 via-pink-200/20 to-blue-200/20 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-200/20 via-purple-200/20 to-pink-200/20 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            scale: [1.3, 1, 1.3],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-pink-200/20 to-purple-200/20 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            x: [-50, 50, -50],
            y: [-30, 30, -30],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-3 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Heart className="w-5 h-5 text-purple-600" />
            <span className="text-purple-700 font-semibold">Why Choose Us</span>
            <Sparkles className="w-5 h-5 text-pink-600" />
          </motion.div>

          <motion.h2 
            className="text-5xl md:text-6xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              background: "linear-gradient(135deg, #5616b3, #8b5cf6, #ec4899, #3b82f6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Excellence in Every Detail
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Experience unparalleled financial services with our expert team dedicated to your success. 
            Click on any card to discover more insights and metrics.
          </motion.p>

          {/* Animated decorative elements */}
          <div className="flex justify-center mt-8 space-x-4">
            {[Target, Shield, Award].map((Icon, i) => (
              <motion.div
                key={i}
                className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg"
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              >
                <Icon className="w-6 h-6" />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Enhanced cards grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-20"
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white font-semibold rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(139, 92, 246, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Animated background */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
            
            <span className="relative z-10 flex items-center space-x-2">
              <span>Start Your Journey</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
