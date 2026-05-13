'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import GlassCard from '@/components/ui/GlassCard';
import { useState, useEffect } from 'react';

interface CountdownCardProps {
  title: string;
  date: Date;
  emoji: string;
  color: string;
}

function getTimeLeft(target: Date) {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownCard({ title, date, emoji, color }: CountdownCardProps) {
  const { theme } = useTheme();
  const [time, setTime] = useState(getTimeLeft(date));

  useEffect(() => {
    const t = setInterval(() => setTime(getTimeLeft(date)), 1000);
    return () => clearInterval(t);
  }, [date]);

  return (
    <GlassCard glow className="text-center">
      <div className="text-3xl mb-2">{emoji}</div>
      <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>
        {title}
      </h3>
      <div className="grid grid-cols-4 gap-2">
        {[
          { v: time.days, l: 'দিন' },
          { v: time.hours, l: 'ঘণ্টা' },
          { v: time.minutes, l: 'মিনিট' },
          { v: time.seconds, l: 'সেকেন্ড' },
        ].map((u, i) => (
          <motion.div
            key={u.l}
            className={`p-2 rounded-xl ${theme === 'dark' ? 'bg-white/5 neon-border' : 'bg-blue-50 border border-blue-200'}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className={`text-xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
              {String(u.v).padStart(2, '0')}
            </div>
            <div className={`text-[10px] ${theme === 'dark' ? 'text-white/40' : 'text-navy-400'}`}>{u.l}</div>
          </motion.div>
        ))}
      </div>
      <p className={`text-xs mt-3 ${theme === 'dark' ? 'text-white/30' : 'text-navy-300'}`}>
        {date.toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' })}
      </p>
    </GlassCard>
  );
}
