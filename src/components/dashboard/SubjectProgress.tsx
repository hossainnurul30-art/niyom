'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import GlassCard from '@/components/ui/GlassCard';

const subjects = [
  { name: 'গণিত', progress: 72, color: 'from-blue-500 to-cyan-500' },
  { name: 'পদার্থবিজ্ঞান', progress: 58, color: 'from-purple-500 to-pink-500' },
  { name: 'রসায়ন', progress: 45, color: 'from-green-500 to-emerald-500' },
  { name: 'জীববিজ্ঞান', progress: 65, color: 'from-orange-500 to-red-500' },
  { name: 'English', progress: 80, color: 'from-yellow-500 to-orange-500' },
  { name: 'বাংলা', progress: 55, color: 'from-pink-500 to-rose-500' },
  { name: 'ICT', progress: 90, color: 'from-teal-500 to-cyan-500' },
];

export default function SubjectProgress() {
  const { theme } = useTheme();

  return (
    <GlassCard>
      <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>
        বিষয়ভিত্তিক অগ্রগতি
      </h3>
      <div className="space-y-3">
        {subjects.map((sub, i) => (
          <div key={sub.name}>
            <div className="flex justify-between mb-1">
              <span className={`text-sm ${theme === 'dark' ? 'text-white/70' : 'text-navy-700'}`}>
                {sub.name}
              </span>
              <span className={`text-sm font-medium ${theme === 'dark' ? 'text-neon-400' : 'text-neon-600'}`}>
                {sub.progress}%
              </span>
            </div>
            <div className={`h-2 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-white/10' : 'bg-navy-100'}`}>
              <motion.div
                className={`h-full rounded-full bg-gradient-to-r ${sub.color}`}
                initial={{ width: 0 }}
                animate={{ width: `${sub.progress}%` }}
                transition={{ duration: 1, delay: i * 0.1, ease: 'easeOut' }}
              />
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
