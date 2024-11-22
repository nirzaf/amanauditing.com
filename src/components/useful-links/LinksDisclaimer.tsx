import { motion } from 'framer-motion';
import { ShieldAlert, ExternalLink, Info } from 'lucide-react';

const LinksDisclaimer = () => {
  return (
    <section className="bg-gradient-to-b from-white to-purple-50 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#5616b3] via-purple-400 to-[#7928ca]"></div>
          <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 bg-purple-100 rounded-full opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 -mb-24 -ml-24 bg-purple-50 rounded-full opacity-20"></div>

          <div className="relative p-8 sm:p-10">
            <div className="flex flex-col items-center">
              {/* Animated Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2 
                }}
                className="mb-6 relative"
              >
                <div className="absolute inset-0 bg-purple-100 rounded-full scale-150 opacity-20"></div>
                <ShieldAlert className="w-12 h-12 text-[#5616b3]" />
              </motion.div>

              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mb-6 text-center"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Legal Disclaimer
                </h2>
                <div className="h-0.5 w-16 mx-auto bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
              </motion.div>

              {/* Content */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="max-w-3xl text-center space-y-4"
              >
                <p className="text-gray-600 leading-relaxed">
                  The external links provided on this page are carefully curated for reference purposes. 
                  While we strive to maintain high-quality resources, <span className="font-medium text-gray-800">AmnaAuditing</span> does 
                  not endorse or assume responsibility for the content of external websites.
                </p>
                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500">
                  <Info className="w-4 h-4" />
                  <p>Please review each website's terms and conditions before use.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LinksDisclaimer;
