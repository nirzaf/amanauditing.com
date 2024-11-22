import { ExternalLink, ArrowUpRight, Link as LinkIcon } from 'lucide-react';
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

const CategoryIcon = ({ index }: { index: number }) => {
  const icons = [
    <LinkIcon key="1" className="w-6 h-6" />,
    <ExternalLink key="2" className="w-6 h-6" />,
    <ArrowUpRight key="3" className="w-6 h-6" />
  ];
  return icons[index % icons.length];
};

const LinksGrid = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-purple-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {links.map((category, index) => (
          <motion.div 
            key={index} 
            className="mb-24 last:mb-16"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div 
              variants={item}
              className="relative flex items-center justify-center mb-12"
            >
              {/* Decorative line */}
              <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
              
              {/* Category header */}
              <div className="relative bg-white px-6 text-center">
                <div className="flex items-center justify-center mb-4">
                  <motion.div
                    initial={{ rotate: -10, scale: 0.9 }}
                    whileInView={{ rotate: 0, scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                    className="p-3 rounded-xl bg-gradient-to-br from-[#5616b3] to-[#7928ca] text-white"
                  >
                    <CategoryIcon index={index} />
                  </motion.div>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {category.category}
                </h2>
              </div>
            </motion.div>

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
                  className="group relative block p-8 bg-white rounded-2xl transition-all duration-300
                           hover:bg-gradient-to-br hover:from-white hover:to-purple-50
                           shadow-[0_4px_20px_-4px_rgba(86,22,179,0.1)]
                           hover:shadow-[0_8px_30px_-4px_rgba(86,22,179,0.2)]
                           transform hover:-translate-y-1"
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute top-0 right-0 mt-4 mr-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="p-2 rounded-full bg-[#5616b3]/10">
                      <ArrowUpRight className="w-4 h-4 text-[#5616b3]" />
                    </div>
                  </div>

                  <div className="relative">
                    <h3 className="text-xl font-bold mb-3 pr-8 text-gray-900 group-hover:text-[#5616b3] transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                      {link.description}
                    </p>
                    
                    <div className="mt-6 inline-flex items-center text-[#5616b3] font-medium opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                      <span className="mr-2">Visit Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
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
