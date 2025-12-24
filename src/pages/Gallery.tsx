import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const galleryItems = [
  {
    image: 'https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg',
    title: 'CCTV Installation',
    category: 'Security'
  },
  {
    image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg',
    title: 'Solar Panel Setup',
    category: 'Solar Energy'
  },
  {
    image: 'https://images.pexels.com/photos/4254167/pexels-photo-4254167.jpeg',
    title: 'Smart Home System',
    category: 'Automation'
  },
  {
    image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg',
    title: 'Security Camera',
    category: 'Security'
  },
  {
    image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg',
    title: 'Solar Installation',
    category: 'Solar Energy'
  },
  {
    image: 'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg',
    title: 'Project Installation',
    category: 'Installation'
  }
];

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
	@@ -56,7 +37,31 @@ const containerVariants = {
};

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="pt-24 pb-20 bg-slate-950 relative overflow-hidden">
	@@ -71,77 +76,90 @@ export default function Gallery() {
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">Our Work</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-4"></div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Explore our completed projects and installations
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {galleryItems.map((item, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.div
                className="relative overflow-hidden rounded-xl shadow-xl group cursor-pointer border border-slate-700/50 bg-slate-800"
                onClick={() => setSelectedImage(index)}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="overflow-hidden h-64">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-sm text-cyan-400 mb-1">{item.category}</p>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <AnimatePresence>
          {selectedImage !== null && (
            <motion.div
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="max-w-5xl w-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 100 }}
              >
                <img
                  src={galleryItems[selectedImage].image}
                  alt={galleryItems[selectedImage].title}
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
