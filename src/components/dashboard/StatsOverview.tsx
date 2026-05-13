'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useUser } from '@/contexts/UserContext';
import { Flame, BookOpen, Clock, Target } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

export default function StatsOverview() {
  const { theme } = useTheme();
  const { user } = useUser();

  const stats = [
    { icon: Flame, label: 'স্ট্রিক', value: `${user.streak} দিন`, color: 'from-orange-500 to-red-500' },
    { icon: BookOpen, label: 'সম্পন্ন', value: `${user.tasksCompleted}টি`, color: 'from-green-500 to-emerald-500' },
    { icon: Clock, label: 'পড়াশোনা', value: `${user.studyHours}ঘ`, color: 'from-blue-500 to-cyan-500' },
    { icon: Target, label: 'লেভেল', value: `${user.level}`, color: 'from-purple-500 to-pink-500' },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <GlassCard className="flex items-center gap-3">
            <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shrink-0`}>
              <stat.icon size={20} className="text-white" />
            </div>
            <div>
              <div className={`text-xs ${theme === 'dark' ? 'text-white/50' : 'text-navy-500'}`}>{stat.label}</div>
              <div className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>{stat.value}</div>
            </div>
          </GlassCard>
        </motion.div>
      ))}
    </div>
  );
}
