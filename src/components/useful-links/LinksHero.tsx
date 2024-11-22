import { motion } from 'framer-motion';
import { Link2, Globe } from 'lucide-react';

const IconAnimation = () => {
  return (
    <div className="relative w-12 h-12">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Globe className="w-12 h-12 text-purple-200" />
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          rotate: [360, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Link2 className="w-8 h-8 text-white opacity-80" />
      </motion.div>
    </div>
  );
};

const LinksHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#5616b3] via-[#7928ca] to-[#4c1d95] text-white py-12">
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="flex justify-center mb-4"
        >
          <IconAnimation />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-4"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight">
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-white">
              Useful Links
            </span>
          </h1>
          <div className="h-0.5 w-20 mx-auto bg-gradient-to-r from-transparent via-purple-300 to-transparent"></div>
        </motion.div>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg text-purple-100 max-w-2xl mx-auto font-light leading-relaxed"
        >
          <span className="font-medium">Discover</span> our curated collection of
          <span className="font-medium"> professional resources</span> for your auditing excellence
        </motion.p>
      </motion.div>
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default LinksHero;
