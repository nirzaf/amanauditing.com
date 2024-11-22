import { motion } from 'framer-motion';

const ContactHero = () => {
  return (
    <section className="relative bg-[#5616b3] text-white py-24 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[#5616b3] opacity-90"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-[#5616b3] to-purple-900"></div>
      </div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Get in touch with our team of experts for professional auditing services
        </p>
      </motion.div>
    </section>
  );
};

export default ContactHero;
