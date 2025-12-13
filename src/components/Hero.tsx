import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Hero() {
  const navigate = useNavigate();
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Smart. Secure. Sustainable.';
  const typingSpeed = 50;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);
    return () => clearInterval(timer);
  }, []);

  const goToContact = () => {
    navigate('/contact');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative pt-24 min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-900 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30"></div>

      <div className="absolute inset-0 opacity-25">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            y: [0, 30, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        ></motion.div>
        <motion.div
          className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl"
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        ></motion.div>
      </div>

      <motion.div
        className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight min-h-24 flex items-center justify-center">
            {displayText}
            {displayText.length < fullText.length && (
              <span className="animate-pulse">|</span>
            )}
          </h1>
        </motion.div>

        <motion.p variants={itemVariants} className="text-xl sm:text-2xl bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent font-semibold mb-4">
          Vigicon Enterprises, Pune
        </motion.p>

        <motion.p variants={itemVariants} className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Your trusted partner for cutting-edge security systems, solar energy solutions, and smart automation technology.
        </motion.p>

        <motion.div variants={itemVariants}>
          <motion.button
            onClick={goToContact}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-2xl relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center gap-2">
              Get a Free Consultation
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
