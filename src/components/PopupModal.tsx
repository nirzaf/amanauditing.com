import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking spring animations
  const springConfig = { damping: 15, stiffness: 150 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!modalRef.current) return;
      
      const rect = modalRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      const rotateXValue = ((e.clientY - centerY) / (window.innerHeight / 2)) * 10;
      const rotateYValue = ((e.clientX - centerX) / (window.innerWidth / 2)) * 10;
      
      rotateX.set(-rotateXValue);
      rotateY.set(rotateYValue);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    if (location.pathname === '/') {
      const hasSeenModal = sessionStorage.getItem('hasSeenModal');
      if (!hasSeenModal) {
        const timer = setTimeout(() => {
          setIsOpen(true);
        }, 500);
        return () => clearTimeout(timer);
      }
    }
  }, [location]);

  const closeModal = () => {
    setIsOpen(false);
    sessionStorage.setItem('hasSeenModal', 'true');
  };

  const handleBrowseServices = (e: React.MouseEvent) => {
    e.preventDefault();
    closeModal();
    navigate('/');
  };

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotateX: -15,
      z: -100,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
      z: 0,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 300
      }
    },
    exit: {
      opacity: 0,
      scale: 0.9,
      rotateX: 15,
      z: -100,
      transition: {
        duration: 0.3
      }
    }
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 perspective-1000">
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeModal}
          />

          <motion.div
            ref={modalRef}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              rotateX,
              rotateY,
              transformStyle: "preserve-3d",
            }}
            className="relative w-[95%] md:w-[80%] max-w-4xl bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-[0_10px_50px_rgba(0,0,0,0.3)] overflow-hidden z-10 [transform-style:preserve-3d]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 pointer-events-none" />
            <div className="absolute inset-0 shadow-inner pointer-events-none" />
            
            <motion.button
              onClick={closeModal}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center z-20"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="relative w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-full shadow-lg [transform-style:preserve-3d] hover:shadow-xl transition-shadow">
                <div className="absolute inset-1 bg-gradient-to-br from-gray-600 to-gray-800 rounded-full [transform:translateZ(2px)]">
                  <div className="absolute inset-1 bg-gradient-to-br from-gray-500 to-gray-700 rounded-full [transform:translateZ(1px)] flex items-center justify-center">
                    <X className="w-4 h-4 text-white transform rotate-45" />
                  </div>
                </div>
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-gray-400"
                    style={{
                      left: '50%',
                      top: '50%',
                      transform: `rotate(${i * 45}deg) translateX(8px) translateZ(1px)`,
                    }}
                  />
                ))}
              </div>
            </motion.button>

            <div className="flex flex-col">
              <motion.div
                className="relative w-full bg-gray-100 p-4"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src="https://ik.imagekit.io/c1glhbr6p/60x40_L-1-930x620.png&nocache=1?updatedAt=1732211919395"
                  alt="Services Showcase"
                  className="w-full h-auto object-contain max-h-[60vh] transform transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
              
              <div className="relative bg-gradient-to-r from-purple-900 via-purple-800 to-purple-900 p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-center sm:text-left"
                >
                  <h2 className="text-white text-2xl sm:text-3xl font-bold">
                    Discover Our Premium Services
                  </h2>
                </motion.div>
                
                <button
                  onClick={handleBrowseServices}
                  className="group relative inline-flex items-center justify-center shrink-0"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative inline-flex items-center bg-white text-purple-900 hover:text-purple-700 px-6 sm:px-8 py-3 rounded-full font-semibold overflow-hidden transition-colors duration-300"
                  >
                    <span className="relative z-10">Browse All Services</span>
                  </motion.div>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PopupModal;
