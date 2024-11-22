import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { links } from './LinksData';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const LinksGrid = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {links.map((category, index) => (
          <motion.div 
            key={index} 
            className="mb-16"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.h2 
              variants={item}
              className="text-3xl font-bold mb-8 text-gray-900 text-center"
            >
              {category.category}
            </motion.h2>
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              {category.items.map((link, linkIndex) => (
                <motion.a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-8 bg-white rounded-2xl hover:bg-purple-50 transition-all duration-300
                           shadow-sm hover:shadow-xl transform hover:-translate-y-1"
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold mb-3 text-[#5616b3] group-hover:text-[#7928ca] transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {link.description}
                      </p>
                    </div>
                    <ExternalLink className="text-[#5616b3] group-hover:text-[#7928ca] transition-colors flex-shrink-0" size={24} />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LinksGrid;
