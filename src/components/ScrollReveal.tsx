import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type ScrollRevealProps = {
  children: ReactNode;
  direction?: 'up' | 'left' | 'right';
};

const hiddenByDirection: Record<NonNullable<ScrollRevealProps['direction']>, { x?: number; y?: number }> = {
  up: { y: 40 },
  left: { x: -40 },
  right: { x: 40 }
};

export default function ScrollReveal({ children, direction = 'up' }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, ...hiddenByDirection[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
