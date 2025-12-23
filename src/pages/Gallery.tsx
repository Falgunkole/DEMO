import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../lib/supabase';
import ScrollReveal from '../components/ScrollReveal';
import ExperienceCard from '../components/ExperienceCard';

interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image_url: string;
  category: string;
  rating: number;
  review_count: number;
  testimonial: string;
  reviewer_name: string;
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export default function Gallery() {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGalleryItems = async () => {
      try {
        const { data, error } = await supabase
          .from('gallery_experiences')
          .select('*')
          .order('created_at', { ascending: false });

        if (error) throw error;
        setGalleryItems(data || []);
      } catch (err) {
        console.error('Error fetching gallery items:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGalleryItems();
  }, []);

  const selectedItem = selectedIndex !== null ? galleryItems[selectedIndex] : null;

  return (
    <div className="pt-24 pb-20 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">Our Work</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto mb-4"></div>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Explore our completed projects and customer experiences
            </p>
          </div>
        </ScrollReveal>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <motion.div
              className="text-cyan-400"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
            >
              <div className="w-12 h-12 border-3 border-cyan-400/30 border-t-cyan-400 rounded-full"></div>
            </motion.div>
          </div>
        ) : (
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {galleryItems.map((item, index) => (
              <motion.div key={item.id} variants={itemVariants}>
                <motion.div
                  className="relative overflow-hidden rounded-xl shadow-xl group cursor-pointer border border-slate-700/50 bg-slate-800 h-64"
                  onClick={() => setSelectedIndex(index)}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="overflow-hidden w-full h-full">
                    <motion.img
                      src={item.image_url}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-transparent flex flex-col justify-between p-6"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div></div>
                    <div>
                      <p className="text-sm text-cyan-400 mb-1">{item.category}</p>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <span key={i} className="text-yellow-400 text-lg">
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-sm text-yellow-300 font-semibold">
                          {item.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {selectedItem && (
        <ExperienceCard
          isOpen={selectedIndex !== null}
          onClose={() => setSelectedIndex(null)}
          title={selectedItem.title}
          description={selectedItem.description}
          imageUrl={selectedItem.image_url}
          rating={selectedItem.rating}
          reviewCount={selectedItem.review_count}
          testimonial={selectedItem.testimonial}
          reviewerName={selectedItem.reviewer_name}
        />
      )}
    </div>
  );
}
