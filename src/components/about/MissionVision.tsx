import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

const MissionVision = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-purple-50/50 to-white"></div>
      <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-purple-100/30 rounded-r-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Purpose</h2>
          <div className="w-24 h-1 bg-[#5616b3] mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-[#5616b3] to-purple-600 rounded-2xl opacity-5 blur"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-xl">
              <motion.div 
                className="bg-purple-100 w-20 h-20 rounded-xl flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Target className="h-10 w-10 text-[#5616b3]" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide exceptional audit and assurance services that empower businesses 
                to make informed decisions and maintain the highest standards of financial 
                integrity and compliance.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-[#5616b3] rounded-2xl opacity-5 blur"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-xl">
              <motion.div 
                className="bg-purple-100 w-20 h-20 rounded-xl flex items-center justify-center mb-6"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <Eye className="h-10 w-10 text-[#5616b3]" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted name in audit services, known for our commitment 
                to excellence, integrity, and innovative solutions that drive business success.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
