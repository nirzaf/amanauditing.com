import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { links } from './LinksData';

const LinksGrid = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {links.map((category, index) => (
          <motion.div 
            key={index} 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <h2 className="text-2xl font-bold mb-6">{category.category}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {category.items.map((link, linkIndex) => (
                <motion.a
                  key={linkIndex}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start">
                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold mb-2 text-[#5616b3]">
                        {link.title}
                      </h3>
                      <p className="text-gray-600">{link.description}</p>
                    </div>
                    <ExternalLink className="text-[#5616b3] ml-4 flex-shrink-0" size={24} />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LinksGrid;
