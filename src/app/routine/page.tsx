'use client';

import AppShell from '@/components/layout/AppShell';
import PomodoroTimer from '@/components/routine/PomodoroTimer';
import WeeklyPlanner from '@/components/routine/WeeklyPlanner';
import AIRoutineGenerator from '@/components/routine/AIRoutineGenerator';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

function RoutineContent() {
  const { theme } = useTheme();

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className={`text-2xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>
          রুটিন প্ল্যানার 📅
        </h1>
        <p className={`text-sm ${theme === 'dark' ? 'text-white/50' : 'text-navy-500'}`}>
          AI দিয়ে তোমার পারফেক্ট রুটিন তৈরি করো
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PomodoroTimer />
        <AIRoutineGenerator />
      </div>

      <WeeklyPlanner />
    </div>
  );
}

export default function RoutinePage() {
  return (
    <AppShell>
      <RoutineContent />
    </AppShell>
  );
}
