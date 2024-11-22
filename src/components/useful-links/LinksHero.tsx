import { motion } from 'framer-motion';

const LinksHero = () => {
  return (
    <section className="bg-[#5616b3] text-white py-20">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Useful Links</h1>
        <p className="text-xl text-gray-200">
          Access valuable resources and professional guidance
        </p>
      </motion.div>
    </section>
  );
};

export default LinksHero;
