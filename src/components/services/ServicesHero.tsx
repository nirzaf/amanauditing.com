import { motion } from 'framer-motion';
import { ArrowRight, Star, Award, Shield, Sparkles, Zap, Target, Globe } from 'lucide-react';

const ServicesHero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
      {/* Advanced Animated Background */}
      <div className="absolute inset-0">
        {/* Floating orbs with complex animations */}
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            rotate: [0, 180, 360],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full filter blur-3xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            rotate: [360, 180, 0],
            x: [0, -80, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-full filter blur-2xl"
          animate={{
            y: [-30, 30, -30],
            x: [-20, 20, -20],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
        
        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          {/* Left Content - Enhanced */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
          >
            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex items-center space-x-4 mb-8"
            >
              <div className="flex items-center space-x-1 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 backdrop-blur-sm px-4 py-2 rounded-full border border-yellow-400/30">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  >
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
                <span className="text-yellow-300 text-sm font-semibold ml-2">5.0 Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Globe className="h-4 w-4 text-blue-400" />
                <span className="text-white/80 text-sm">500+ Global Clients</span>
              </div>
            </motion.div>

            {/* Main title with advanced animations */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight"
            >
              <motion.span
                className="block text-white"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.5)",
                    "0 0 40px rgba(139,92,246,0.8)",
                    "0 0 20px rgba(255,255,255,0.5)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Professional
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Business Services
              </motion.span>
              <motion.span
                className="block text-2xl md:text-3xl font-medium text-white/90 mt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <motion.span
                  animate={{ color: ["#ffffff", "#8b5cf6", "#ffffff"] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  Tailored for Your Success
                </motion.span>
              </motion.span>
            </motion.h1>

            {/* Enhanced description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-xl text-white/90 mb-10 leading-relaxed bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10"
            >
              Comprehensive audit, tax, and financial advisory services designed to elevate your business 
              with expert guidance, innovative strategies, and 25+ years of proven excellence in Qatar and beyond.
            </motion.p>

            {/* Enhanced CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(255, 193, 7, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-10 py-5 rounded-full font-bold text-lg shadow-2xl overflow-hidden"
              >
                {/* Animated background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <span>Get Started Today</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.div>
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.15)"
                }}
                whileTap={{ scale: 0.95 }}
                className="group border-2 border-white text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                <span className="flex items-center justify-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>Schedule Consultation</span>
                </span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Enhanced Service Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, type: "spring", stiffness: 100 }}
            className="space-y-8"
          >
            {[
              {
                icon: <Award className="h-10 w-10" />,
                title: "25+ Years Experience",
                description: "Proven track record in audit and financial services across multiple industries",
                color: "from-blue-500 to-cyan-500",
                stats: "1000+ Projects"
              },
              {
                icon: <Shield className="h-10 w-10" />,
                title: "100% Compliance",
                description: "Full adherence to international standards and regulatory requirements",
                color: "from-green-500 to-emerald-500",
                stats: "Zero Violations"
              },
              {
                icon: <Target className="h-10 w-10" />,
                title: "99% Client Satisfaction",
                description: "Exceptional service quality and client retention rate with personalized approach",
                color: "from-purple-500 to-pink-500",
                stats: "500+ Happy Clients"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.6 + index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                {/* Glow effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-2xl filter blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <div className="relative flex items-start space-x-6 bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 overflow-hidden">
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${item.color}`}
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>

                  {/* Icon */}
                  <motion.div
                    className={`flex-shrink-0 w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center text-white shadow-lg`}
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div
                      animate={{ 
                        scale: [1, 1.1, 1],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {item.icon}
                    </motion.div>

                    {/* Rotating ring */}
                    <motion.div
                      className="absolute inset-0 border-2 border-white/30 rounded-2xl"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                    />
                  </motion.div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-bold text-xl">{item.title}</h3>
                      <motion.div
                        className="text-yellow-300 text-sm font-semibold bg-yellow-400/20 px-3 py-1 rounded-full"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {item.stats}
                      </motion.div>
                    </div>
                    <p className="text-white/80 leading-relaxed">{item.description}</p>

                    {/* Progress bar */}
                    <motion.div
                      className="mt-4 h-2 bg-white/20 rounded-full overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.2 + 1 }}
                    >
                      <motion.div
                        className={`h-full bg-gradient-to-r ${item.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 2, delay: index * 0.2 + 1.2 }}
                      />
                    </motion.div>
                  </div>

                  {/* Sparkle effect */}
                  <motion.div
                    className="absolute top-4 right-4 text-yellow-300"
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.5,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <motion.svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="w-full h-20 fill-white"
          animate={{ 
            filter: [
              "drop-shadow(0 -5px 10px rgba(139,92,246,0.3))",
              "drop-shadow(0 -5px 20px rgba(236,72,153,0.3))",
              "drop-shadow(0 -5px 10px rgba(139,92,246,0.3))"
            ]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </motion.svg>
      </div>
    </section>
  );
};

export default ServicesHero;