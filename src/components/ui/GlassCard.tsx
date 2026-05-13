'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: boolean;
  onClick?: () => void;
}

export default function GlassCard({ children, className = '', hover = true, glow = false, onClick }: GlassCardProps) {
  const { theme } = useTheme();

  return (
    <motion.div
      className={`
        ${theme === 'dark' ? 'glass-card' : 'glass-card-light'}
        ${glow ? 'neon-glow' : ''}
        p-5 ${className}
      `}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      {children}
    </motion.div>
  );
}
