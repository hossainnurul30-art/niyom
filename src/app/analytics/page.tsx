'use client';

import AppShell from '@/components/layout/AppShell';
import AnalyticsDashboard from '@/components/analytics/AnalyticsDashboard';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

function AnalyticsContent() {
  const { theme } = useTheme();

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className={`text-2xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>
          অ্যানালিটিক্স 📊
        </h1>
        <p className={`text-sm ${theme === 'dark' ? 'text-white/50' : 'text-navy-500'}`}>
          তোমার পড়াশোনার বিস্তারিত পরিসংখ্যান
        </p>
      </motion.div>
      <AnalyticsDashboard />
    </div>
  );
}

export default function AnalyticsPage() {
  return (
    <AppShell>
      <AnalyticsContent />
    </AppShell>
  );
}
