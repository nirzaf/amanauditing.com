import { motion } from 'framer-motion';

const LinksDisclaimer = () => {
  return (
    <section className="bg-gray-50 py-12">
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <h2 className="text-xl font-semibold mb-4">Disclaimer</h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          The external links provided are for reference purposes only. AmnaAuditing does not 
          endorse or take responsibility for the content of external websites. Please review 
          the terms and conditions of each website before use.
        </p>
      </motion.div>
    </section>
  );
};

export default LinksDisclaimer;
