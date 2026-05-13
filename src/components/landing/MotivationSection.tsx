'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import GlassCard from '@/components/ui/GlassCard';

const quotes = [
  { text: 'সফলতা আসে পরিশ্রম থেকে, ভাগ্য থেকে নয়', author: 'কাজী নজরুল ইসলাম' },
  { text: 'শিক্ষা জাতির মেরুদণ্ড', author: 'প্রবাদ' },
  { text: 'আজকের কঠোর পরিশ্রম আগামীকালের সাফল্য', author: 'নিয়ম' },
];

const stats = [
  { value: '৫০০+', label: 'সক্রিয় শিক্ষার্থী' },
  { value: '১৫+', label: 'NCTB বিষয়' },
  { value: '৯৮%', label: 'সন্তুষ্টি' },
  { value: '২৪/৭', label: 'AI সাপোর্ট' },
];

export default function MotivationSection() {
  const { theme } = useTheme();

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-navy-900'
          }`}>
            তুমি পারবে, <span className="text-neon-500">বিশ্বাস রাখো</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <GlassCard className="text-center h-full flex flex-col justify-between" glow>
                <p className={`text-lg font-medium mb-4 italic ${
                  theme === 'dark' ? 'text-white/80' : 'text-navy-800'
                }`}>
                  &ldquo;{q.text}&rdquo;
                </p>
                <p className={`text-sm ${theme === 'dark' ? 'text-neon-400' : 'text-neon-600'}`}>
                  — {q.author}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="text-center">
                <div className={`text-3xl font-bold mb-1 ${
                  theme === 'dark' ? 'text-neon-400 neon-text' : 'text-neon-600'
                }`}>
                  {s.value}
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-white/50' : 'text-navy-500'}`}>
                  {s.label}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
