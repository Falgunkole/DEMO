import { Link, useLocation } from 'react-router-dom';
import { Home, Music, Radio, Video, Settings } from 'lucide-react';
import { motion } from 'framer-motion';

const navItems = [
  { icon: Home, label: 'Home', path: '/' },
  { icon: Music, label: 'Playlist', path: '/about' },
  { icon: Radio, label: 'Live', path: '/services' },
  { icon: Video, label: 'Videos', path: '/gallery' },
  { icon: Settings, label: 'Settings', path: '/contact' },
];

export default function FloatingPillNav() {
  const location = useLocation();

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.3 },
    }),
  };

  return (
    <motion.div
      className="fixed top-8 left-1/2 transform -translate-x-1/2 z-40"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.div
        className="flex items-center gap-2 px-6 py-4 rounded-full backdrop-blur-2xl bg-white/10 border border-white/20 shadow-2xl hover:bg-white/15 transition-all"
        whileHover={{
          boxShadow: '0 0 40px rgba(59, 130, 246, 0.4), 0 0 20px rgba(34, 211, 238, 0.2)',
          backgroundColor: 'rgba(255, 255, 255, 0.15)'
        }}
      >
        {navItems.map((item, i) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <motion.div
              key={item.label}
              custom={i}
              variants={itemVariants}
              initial="hidden"
              animate="visible"
            >
              <Link to={item.path}>
                <motion.div
                  className={`flex flex-col items-center gap-1.5 px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    animate={isActive ? { y: [0, -3, 0] } : {}}
                    transition={{ duration: 0.6, repeat: Infinity }}
                  >
                    <Icon
                      size={28}
                      className={`transition-all ${
                        isActive ? 'drop-shadow-lg' : 'drop-shadow-sm'
                      }`}
                    />
                  </motion.div>
                  <span className="text-xs font-semibold whitespace-nowrap tracking-wide">
                    {item.label}
                  </span>
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
