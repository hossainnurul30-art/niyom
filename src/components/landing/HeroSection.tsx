'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Sparkles, ArrowRight, BookOpen, Brain, Clock } from 'lucide-react';
import Link from 'next/link';

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-medium"
            style={{
              background: theme === 'dark' ? 'rgba(0,191,255,0.1)' : 'rgba(0,150,255,0.08)',
              border: `1px solid ${theme === 'dark' ? 'rgba(0,191,255,0.2)' : 'rgba(0,150,255,0.15)'}`,
            }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles size={16} className="text-neon-500" />
            <span className={theme === 'dark' ? 'text-neon-300' : 'text-neon-700'}>
              SSC 2028 পরীক্ষার্থীদের জন্য
            </span>
          </motion.div>

          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${
            theme === 'dark' ? 'text-white' : 'text-navy-900'
          }`}>
            পড়াশোনার নতুন{' '}
            <span className="bg-gradient-to-r from-neon-400 to-cyan-glow bg-clip-text text-transparent neon-text">
              নিয়ম
            </span>
          </h1>

          <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed ${
            theme === 'dark' ? 'text-white/60' : 'text-navy-600'
          }`}>
            AI-চালিত স্মার্ট রুটিন, ব্যক্তিগত শিক্ষক, এবং প্রোডাক্টিভিটি টুলস দিয়ে তোমার SSC প্রস্তুতি নাও সম্পূর্ণ নতুন উচ্চতায়
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/dashboard">
              <motion.button
                className="btn-neon px-8 py-4 rounded-2xl text-white font-semibold text-lg flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                শুরু করো
                <ArrowRight size={20} />
              </motion.button>
            </Link>
            <Link href="/ai-teacher">
              <motion.button
                className={`px-8 py-4 rounded-2xl font-semibold text-lg flex items-center gap-2 border ${
                  theme === 'dark'
                    ? 'border-white/20 text-white hover:bg-white/5'
                    : 'border-navy-200 text-navy-700 hover:bg-navy-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                AI শিক্ষকের সাথে কথা বলো
              </motion.button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {[
            { icon: Brain, label: 'AI রুটিন', value: '১০০+', sublabel: 'জনকে সাহায্য করেছে' },
            { icon: BookOpen, label: 'বিষয়', value: '১৫+', sublabel: 'NCTB বিষয়' },
            { icon: Clock, label: 'পড়াশোনা', value: '৫০০+', sublabel: 'ঘণ্টা ট্র্যাক' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`p-4 rounded-2xl text-center ${
                theme === 'dark' ? 'glass-card' : 'glass-card-light'
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
            >
              <stat.icon size={24} className="mx-auto mb-2 text-neon-500" />
              <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>
                {stat.value}
              </div>
              <div className={`text-xs ${theme === 'dark' ? 'text-white/50' : 'text-navy-500'}`}>
                {stat.sublabel}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
