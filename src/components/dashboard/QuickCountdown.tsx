'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import GlassCard from '@/components/ui/GlassCard';
import { useState, useEffect, useMemo } from 'react';

function getTimeLeft(target: Date) {
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function QuickCountdown() {
  const { theme } = useTheme();
  const sscDate = useMemo(() => new Date('2028-02-01T10:00:00'), []);
  const [timeLeft, setTimeLeft] = useState(getTimeLeft(sscDate));

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft(sscDate)), 1000);
    return () => clearInterval(timer);
  }, [sscDate]);

  const units = [
    { value: timeLeft.days, label: 'দিন' },
    { value: timeLeft.hours, label: 'ঘণ্টা' },
    { value: timeLeft.minutes, label: 'মিনিট' },
    { value: timeLeft.seconds, label: 'সেকেন্ড' },
  ];

  return (
    <GlassCard glow>
      <h3 className={`text-lg font-bold mb-4 text-center ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>
        SSC 2028 পরীক্ষা
      </h3>
      <div className="grid grid-cols-4 gap-2">
        {units.map((unit, i) => (
          <motion.div
            key={unit.label}
            className={`text-center p-3 rounded-xl ${
              theme === 'dark' ? 'bg-white/5 neon-border' : 'bg-blue-50 border border-blue-200'
            }`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className={`text-2xl md:text-3xl font-bold ${
              theme === 'dark' ? 'text-neon-400 neon-text' : 'text-neon-600'
            }`}>
              {String(unit.value).padStart(2, '0')}
            </div>
            <div className={`text-xs mt-1 ${theme === 'dark' ? 'text-white/40' : 'text-navy-400'}`}>
              {unit.label}
            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
}
