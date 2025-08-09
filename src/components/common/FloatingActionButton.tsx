import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Mail, ArrowUp, Sparkles } from 'lucide-react';

const FloatingActionButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsExpanded(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const actions = [
    {
      icon: <Phone className="h-5 w-5" />,
      label: 'Call Us',
      color: 'from-green-500 to-green-600',
      action: () => window.open('tel:+97455304717', '_self')
    },
    {
      icon: <Mail className="h-5 w-5" />,
      label: 'Email Us',
      color: 'from-blue-500 to-blue-600',
      action: () => window.open('mailto:info@amnaauditing.com', '_self')
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      label: 'Chat',
      color: 'from-purple-500 to-purple-600',
      action: () => console.log('Open chat')
    }
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-50">
          {/* Action buttons */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 20 }}
                transition={{ duration: 0.3, staggerChildren: 0.1 }}
                className="flex flex-col space-y-3 mb-4"
              >
                {actions.map((action, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: 20, scale: 0.8 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: 20, scale: 0.8 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1,
                      x: -5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={action.action}
                    className={`group relative flex items-center space-x-3 bg-gradient-to-r ${action.color} text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    {/* Glow effect */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${action.color} rounded-full filter blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300`}
                      animate={{
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    
                    <div className="relative z-10 flex items-center space-x-3">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      >
                        {action.icon}
                      </motion.div>
                      <span className="font-medium whitespace-nowrap">{action.label}</span>
                    </div>

                    {/* Sparkle effect */}
                    <motion.div
                      className="absolute -top-1 -right-1 text-yellow-300 opacity-0 group-hover:opacity-100"
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
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0, rotate: 180 }}
            transition={{ duration: 0.5, type: "spring", stiffness: 200, damping: 15 }}
            className="relative"
          >
            {/* Floating particles around main button */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-purple-400/60 rounded-full"
                  style={{
                    left: `${50 + Math.cos(i * 60 * Math.PI / 180) * 40}px`,
                    top: `${50 + Math.sin(i * 60 * Math.PI / 180) * 40}px`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>

            {/* Pulsing ring */}
            <motion.div
              className="absolute inset-0 border-2 border-purple-400/30 rounded-full"
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Main button */}
            <motion.button
              whileHover={{ 
                scale: 1.1,
                rotate: 180,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                if (isExpanded) {
                  scrollToTop();
                } else {
                  setIsExpanded(!isExpanded);
                }
              }}
              className="relative w-16 h-16 bg-gradient-to-r from-[#5616b3] to-purple-600 text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group overflow-hidden"
            >
              {/* Background animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />

              {/* Icon */}
              <motion.div
                className="relative z-10"
                animate={isExpanded ? { rotate: 45 } : { rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {isExpanded ? (
                  <ArrowUp className="h-6 w-6" />
                ) : (
                  <motion.div
                    animate={{ 
                      scale: [1, 1.2, 1],
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <MessageCircle className="h-6 w-6" />
                  </motion.div>
                )}
              </motion.div>

              {/* Shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 opacity-0 group-hover:opacity-100"
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut",
                }}
              />
            </motion.button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FloatingActionButton;