import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileCheck, 
  Users, 
  BarChart3, 
  Calculator, 
  TrendingUp, 
  Rocket, 
  PieChart, 
  Building, 
  Briefcase,
  Shield,
  Target,
  Award,
  Sparkles,
  Star
} from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  // Map service titles to appropriate icons
  const getServiceIcon = (title: string, iconName?: string) => {
    const iconMap: { [key: string]: React.ReactNode } = {
      'Audit & Assurance': <FileCheck className="h-8 w-8" />,
      'Payroll Services': <Users className="h-8 w-8" />,
      'Feasibility Study': <BarChart3 className="h-8 w-8" />,
      'Tax Services': <Calculator className="h-8 w-8" />,
      'Business Valuation': <TrendingUp className="h-8 w-8" />,
      'Start-Up Assistance': <Rocket className="h-8 w-8" />,
      'Budgeting': <PieChart className="h-8 w-8" />,
      'Liquidation': <Building className="h-8 w-8" />,
      'Financial Advisory': <Briefcase className="h-8 w-8" />,
      'Compliance': <Shield className="h-8 w-8" />,
      'Strategic Planning': <Target className="h-8 w-8" />,
      'Quality Assurance': <Award className="h-8 w-8" />
    };

    // Use custom icon name if provided, otherwise match by title
    if (iconName && iconMap[iconName]) {
      return iconMap[iconName];
    }
    
    return iconMap[title] || <Briefcase className="h-8 w-8" />;
  };

  return (
    <motion.article 
      className="relative h-80 w-full group cursor-pointer"
      whileHover={{ 
        y: -8,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Outer glow effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl filter blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Main card */}
      <div className="relative h-full bg-gradient-to-br from-white via-gray-50 to-white rounded-3xl shadow-2xl border border-gray-200/50 overflow-hidden group-hover:shadow-3xl transition-all duration-500">
        
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(139,92,246,0.1)_50%,transparent_70%)] animate-gradient-x" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/40 rounded-full"
              style={{
                left: `${20 + i * 30}%`,
                top: `${20 + i * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        <div className="relative h-full p-8 flex flex-col">
          {/* Enhanced Icon Header */}
          <div className="flex items-center justify-between mb-8">
            <motion.div 
              className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#5616b3] to-purple-600 rounded-2xl shadow-lg group-hover:shadow-xl"
              whileHover={{ 
                scale: 1.1,
                rotate: [0, -5, 5, 0],
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon glow effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#5616b3] to-purple-600 rounded-2xl filter blur-md opacity-50"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div 
                className="relative text-white z-10"
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {getServiceIcon(title, icon)}
              </motion.div>

              {/* Rotating ring */}
              <motion.div
                className="absolute inset-0 border-2 border-purple-300/30 rounded-2xl"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>
            
            {/* Enhanced Premium badge */}
            <motion.div 
              className="flex items-center space-x-2 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/30"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-3 h-3 text-yellow-500" />
              </motion.div>
              <span className="text-yellow-600 text-sm font-semibold">Premium</span>
            </motion.div>
          </div>
          
          {/* Enhanced Card Content */}
          <div className="flex-grow">
            <motion.h3 
              className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-[#5616b3] transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
            >
              {title}
            </motion.h3>
            
            <motion.p 
              className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300"
              initial={{ opacity: 0.8 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {description}
            </motion.p>
          </div>
          
          {/* Enhanced Footer */}
          <div className="mt-8 flex items-center justify-between">
            {/* Animated progress dots */}
            <div className="flex space-x-2">
              {[...Array(4)].map((_, i) => (
                <motion.div 
                  key={i} 
                  className="w-2 h-2 bg-gray-300 rounded-full group-hover:bg-[#5616b3] transition-all duration-300"
                  animate={{
                    scale: [1, 1.2, 1],
                    backgroundColor: ["#d1d5db", "#5616b3", "#d1d5db"],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
            
            {/* Enhanced Arrow with sparkle effect */}
            <motion.div 
              className="relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-gray-100 to-gray-200 group-hover:from-[#5616b3] group-hover:to-purple-600 transition-all duration-300 shadow-md group-hover:shadow-lg"
              whileHover={{ 
                scale: 1.1,
                rotate: 360,
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.svg 
                className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ x: [0, 3, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>

              {/* Sparkle effect */}
              <motion.div
                className="absolute -top-1 -right-1 text-yellow-400 opacity-0 group-hover:opacity-100"
                animate={{
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-3 h-3" />
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Enhanced shine effect */}
        <motion.div 
          className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 overflow-hidden"
          initial={false}
        >
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </motion.article>
  );
};

export default ServiceCard;