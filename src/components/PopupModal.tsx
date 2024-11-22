import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const PopupModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateX: 0,
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
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <motion.div
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={closeModal}
          />

          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-[95%] md:w-[80%] max-w-4xl bg-white rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.2)] overflow-hidden z-10"
          >
            <motion.button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black/20 hover:bg-black/40 rounded-full p-2 backdrop-blur-sm z-20 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={20} />
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
