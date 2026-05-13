'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Bot, X } from 'lucide-react';
import { useState } from 'react';
import AIChatbot from './AIChatbot';

export default function FloatingAIButton() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className={`fixed bottom-24 right-4 md:bottom-8 md:right-8 w-[calc(100vw-2rem)] md:w-[420px] h-[70vh] md:h-[600px] z-50 rounded-2xl overflow-hidden flex flex-col ${
              theme === 'dark' ? 'glass-card neon-glow' : 'glass-card-light shadow-xl'
            }`}
          >
            <div className={`flex items-center justify-between p-4 border-b ${
              theme === 'dark' ? 'border-white/10' : 'border-blue-100'
            }`}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-500 to-neon-700 flex items-center justify-center">
                  <Bot size={18} className="text-white" />
                </div>
                <div>
                  <h3 className={`font-bold text-sm ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>
                    AI শিক্ষক
                  </h3>
                  <p className={`text-xs ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
                    অনলাইন
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className={`p-2 rounded-lg ${theme === 'dark' ? 'hover:bg-white/10 text-white/50' : 'hover:bg-navy-100 text-navy-400'}`}
              >
                <X size={18} />
              </button>
            </div>
            <AIChatbot />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-20 right-4 md:bottom-8 md:right-8 z-50 w-14 h-14 rounded-2xl flex items-center justify-center ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'btn-neon neon-glow'
        } text-white shadow-lg`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={isOpen ? {} : { y: [0, -5, 0] }}
        transition={isOpen ? {} : { duration: 2, repeat: Infinity }}
      >
        {isOpen ? <X size={24} /> : <Bot size={24} />}
      </motion.button>
    </>
  );
}
