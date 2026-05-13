'use client';

import AppShell from '@/components/layout/AppShell';
import StatsOverview from '@/components/dashboard/StatsOverview';
import XPProgress from '@/components/dashboard/XPProgress';
import TodayRoutine from '@/components/dashboard/TodayRoutine';
import QuickCountdown from '@/components/dashboard/QuickCountdown';
import StudyChart from '@/components/dashboard/StudyChart';
import SubjectProgress from '@/components/dashboard/SubjectProgress';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useUser } from '@/contexts/UserContext';

function DashboardContent() {
  const { theme } = useTheme();
  const { user } = useUser();

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className={`text-2xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>
          আসসালামু আলাইকুম, {user.name}! 👋
        </h1>
        <p className={`text-sm ${theme === 'dark' ? 'text-white/50' : 'text-navy-500'}`}>
          আজ তোমার পড়াশোনার দিন কেমন যাচ্ছে?
        </p>
      </motion.div>

      <StatsOverview />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <TodayRoutine />
        </div>
        <div className="space-y-6">
          <XPProgress />
          <QuickCountdown />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <StudyChart />
        <SubjectProgress />
      </div>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <AppShell>
      <DashboardContent />
    </AppShell>
  );
}
