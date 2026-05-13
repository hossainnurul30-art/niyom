'use client';

import AppShell from '@/components/layout/AppShell';
import CountdownCard from '@/components/countdown/CountdownCard';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const countdowns = [
  { title: 'SSC 2028 পরীক্ষা', date: new Date('2028-02-01T10:00:00'), emoji: '🎓', color: 'from-neon-400 to-cyan-glow' },
  { title: 'প্রাক-নির্বাচনী পরীক্ষা', date: new Date('2027-10-15T10:00:00'), emoji: '📝', color: 'from-purple-400 to-pink-500' },
  { title: 'বার্ষিক পরীক্ষা ২০২৬', date: new Date('2026-11-20T10:00:00'), emoji: '📚', color: 'from-orange-400 to-red-500' },
  { title: 'অর্ধ-বার্ষিক পরীক্ষা', date: new Date('2026-06-15T10:00:00'), emoji: '✍️', color: 'from-green-400 to-emerald-500' },
  { title: 'ক্লাস টেস্ট - গণিত', date: new Date('2026-06-01T10:00:00'), emoji: '🧮', color: 'from-blue-400 to-indigo-500' },
  { title: 'প্র্যাকটিক্যাল পরীক্ষা', date: new Date('2028-01-15T10:00:00'), emoji: '🔬', color: 'from-yellow-400 to-orange-500' },
];

function CountdownContent() {
  const { theme } = useTheme();

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className={`text-2xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>
          পরীক্ষা কাউন্টডাউন ⏳
        </h1>
        <p className={`text-sm ${theme === 'dark' ? 'text-white/50' : 'text-navy-500'}`}>
          প্রতিটি মুহূর্ত গুরুত্বপূর্ণ — সময় ফুরিয়ে যাচ্ছে!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {countdowns.map((cd, i) => (
          <motion.div
            key={cd.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <CountdownCard {...cd} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function CountdownPage() {
  return (
    <AppShell>
      <CountdownContent />
    </AppShell>
  );
}
