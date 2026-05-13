'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useUser } from '@/contexts/UserContext';
import GlassCard from '@/components/ui/GlassCard';
import { Star } from 'lucide-react';

export default function XPProgress() {
  const { theme } = useTheme();
  const { user } = useUser();

  const xpInLevel = user.xp % 100;
  const xpNeeded = 100;
  const progress = (xpInLevel / xpNeeded) * 100;

  return (
    <GlassCard glow>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Star size={20} className="text-yellow-400" />
          <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>
            লেভেল {user.level}
          </span>
        </div>
        <span className={`text-sm ${theme === 'dark' ? 'text-white/50' : 'text-navy-500'}`}>
          {xpInLevel}/{xpNeeded} XP
        </span>
      </div>
      <div className={`h-3 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-white/10' : 'bg-navy-100'}`}>
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-neon-500 to-cyan-glow"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
      </div>
      <div className="flex flex-wrap gap-2 mt-4">
        {user.badges.map(badge => (
          <span
            key={badge}
            className={`px-3 py-1 rounded-full text-xs font-medium ${
              theme === 'dark' ? 'bg-white/5 text-neon-300 border border-neon-500/20' : 'bg-blue-50 text-neon-700 border border-blue-200'
            }`}
          >
            {badge}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}
