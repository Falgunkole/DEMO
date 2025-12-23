import { motion, AnimatePresence } from 'framer-motion';
import { X, Star } from 'lucide-react';

interface ExperienceCardProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
  reviewCount: number;
  testimonial: string;
  reviewerName: string;
}

export default function ExperienceCard({
  isOpen,
  onClose,
  title,
  description,
  imageUrl,
  rating,
  reviewCount,
  testimonial,
  reviewerName,
}: ExperienceCardProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/60 z-40 flex items-center justify-center p-4 backdrop-blur-md"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden border border-slate-700"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.85, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 30 }}
            transition={{ type: 'spring', stiffness: 80, damping: 15 }}
          >
            <div className="grid md:grid-cols-2 h-full gap-0 overflow-y-auto">
              <motion.div
                className="relative rounded-l-2xl overflow-hidden group min-h-96"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
              >
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-30"></div>
              </motion.div>

              <motion.div
                className="flex flex-col justify-between p-8"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <div>
                  <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>

                  <div className="mb-8 p-5 bg-slate-700/40 rounded-xl border border-slate-600/50 backdrop-blur-sm">
                    <p className="text-slate-100 leading-relaxed text-base">{description}</p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-lg font-bold text-cyan-300 mb-4 tracking-wide">
                      How was the experience?
                    </h3>
                    <div className="bg-slate-700/30 p-6 rounded-xl border border-slate-600/40 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <motion.div key={i} initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.08 }}>
                              {i < fullStars ? (
                                <Star
                                  size={22}
                                  className="fill-yellow-400 text-yellow-400 drop-shadow-lg"
                                />
                              ) : i === fullStars && hasHalfStar ? (
                                <div className="relative w-[22px] h-[22px]">
                                  <Star
                                    size={22}
                                    className="text-slate-500"
                                  />
                                  <div className="absolute inset-0 overflow-hidden w-1/2">
                                    <Star
                                      size={22}
                                      className="fill-yellow-400 text-yellow-400"
                                    />
                                  </div>
                                </div>
                              ) : (
                                <Star
                                  size={22}
                                  className="text-slate-500"
                                />
                              )}
                            </motion.div>
                          ))}
                        </div>
                        <span className="text-white font-bold text-lg">
                          {rating.toFixed(1)}
                        </span>
                        <span className="text-slate-400 text-sm font-medium">
                          ({reviewCount})
                        </span>
                      </div>

                      <p className="text-slate-200 italic leading-relaxed mb-4 text-base">"{testimonial}"</p>
                      <p className="text-cyan-300 font-semibold text-sm tracking-wide">
                        — {reviewerName}
                      </p>
                    </div>
                  </div>
                </div>

                <motion.button
                  onClick={onClose}
                  className="mt-6 w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg"
                  whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)' }}
                  whileTap={{ scale: 0.98 }}
                >
                  Close
                </motion.button>
              </motion.div>
            </div>

            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 bg-slate-700/90 hover:bg-slate-600 text-white p-2.5 rounded-lg transition-colors shadow-lg backdrop-blur-sm"
              whileHover={{ scale: 1.15, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={28} />
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
