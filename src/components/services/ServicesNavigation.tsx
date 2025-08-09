import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
  ChevronDown,
  Sparkles,
  Star
} from 'lucide-react';

interface ServiceNavItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  category: 'core' | 'advisory' | 'compliance';
  color: string;
}

const ServicesNavigation: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services: ServiceNavItem[] = [
    {
      id: 'audit-assurance',
      title: 'Audit & Assurance',
      icon: <FileCheck className="h-5 w-5" />,
      category: 'core',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 'payroll-services',
      title: 'Payroll Services',
      icon: <Users className="h-5 w-5" />,
      category: 'core',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 'tax-services',
      title: 'Tax Services',
      icon: <Calculator className="h-5 w-5" />,
      category: 'compliance',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 'financial-advisory',
      title: 'Financial Advisory',
      icon: <Briefcase className="h-5 w-5" />,
      category: 'advisory',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 'business-valuation',
      title: 'Business Valuation',
      icon: <TrendingUp className="h-5 w-5" />,
      category: 'advisory',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 'startup-assistance',
      title: 'Start-Up Assistance',
      icon: <Rocket className="h-5 w-5" />,
      category: 'advisory',
      color: 'from-pink-500 to-pink-600'
    },
    {
      id: 'feasibility-study',
      title: 'Feasibility Study',
      icon: <BarChart3 className="h-5 w-5" />,
      category: 'advisory',
      color: 'from-teal-500 to-teal-600'
    },
    {
      id: 'budgeting',
      title: 'Budgeting',
      icon: <PieChart className="h-5 w-5" />,
      category: 'advisory',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      id: 'liquidation',
      title: 'Liquidation',
      icon: <Building className="h-5 w-5" />,
      category: 'compliance',
      color: 'from-gray-500 to-gray-600'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Services', icon: <Star className="h-4 w-4" />, color: 'from-purple-500 to-pink-500' },
    { id: 'core', label: 'Core Services', icon: <Shield className="h-4 w-4" />, color: 'from-blue-500 to-cyan-500' },
    { id: 'advisory', label: 'Advisory', icon: <Target className="h-4 w-4" />, color: 'from-green-500 to-emerald-500' },
    { id: 'compliance', label: 'Compliance', icon: <Award className="h-4 w-4" />, color: 'from-orange-500 to-red-500' }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);

  const scrollToSection = (serviceId: string) => {
    const element = document.getElementById(serviceId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <motion.div
      className={`sticky top-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-200/50' 
          : 'bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
    >
      {/* Animated background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(139,92,246,0.1)_50%,transparent_70%)]"
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="py-4 border-b border-white/10">
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative group flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                    : isScrolled
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.4 }}
              >
                {/* Glow effect */}
                {activeCategory === category.id && (
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-full filter blur-md opacity-50`}
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
                )}
                
                <div className="relative z-10 flex items-center space-x-2">
                  <motion.div
                    animate={activeCategory === category.id ? { rotate: 360 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {category.icon}
                  </motion.div>
                  <span>{category.label}</span>
                </div>

                {/* Sparkle effect for active category */}
                {activeCategory === category.id && (
                  <motion.div
                    className="absolute -top-1 -right-1 text-yellow-300"
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles className="w-3 h-3" />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Services Navigation */}
        <div className="py-6">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4"
            layout
          >
            <AnimatePresence mode="wait">
              {filteredServices.map((service, index) => (
                <motion.button
                  key={service.id}
                  onClick={() => scrollToSection(service.id)}
                  onMouseEnter={() => setHoveredItem(service.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`group relative p-4 rounded-2xl transition-all duration-300 ${
                    isScrolled
                      ? 'bg-white shadow-lg hover:shadow-xl border border-gray-200/50'
                      : 'bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20'
                  }`}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ 
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 200,
                    damping: 15
                  }}
                  layout
                >
                  {/* Hover glow effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl filter blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                    animate={hoveredItem === service.id ? {
                      scale: [1, 1.1, 1],
                    } : {}}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 text-center">
                    {/* Icon */}
                    <motion.div
                      className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-3 bg-gradient-to-r ${service.color} text-white shadow-lg group-hover:shadow-xl`}
                      whileHover={{ 
                        rotate: [0, -10, 10, 0],
                        scale: 1.1
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        animate={hoveredItem === service.id ? { 
                          scale: [1, 1.2, 1],
                        } : {}}
                        transition={{ 
                          duration: 1,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        {service.icon}
                      </motion.div>

                      {/* Rotating ring */}
                      <motion.div
                        className="absolute inset-0 border-2 border-white/30 rounded-xl"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      />
                    </motion.div>

                    {/* Title */}
                    <motion.h3 
                      className={`text-sm font-semibold ${
                        isScrolled ? 'text-gray-800' : 'text-white'
                      } group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:${service.color} group-hover:bg-clip-text transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                    >
                      {service.title}
                    </motion.h3>

                    {/* Floating particles */}
                    {hoveredItem === service.id && (
                      <div className="absolute inset-0 pointer-events-none">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className={`absolute w-1 h-1 bg-gradient-to-r ${service.color} rounded-full`}
                            style={{
                              left: `${20 + i * 30}%`,
                              top: `${20 + i * 20}%`,
                            }}
                            animate={{
                              y: [0, -15, 0],
                              opacity: [0.2, 0.8, 0.2],
                              scale: [1, 1.5, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.5,
                              ease: "easeInOut",
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesNavigation;