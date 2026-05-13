'use client';

import AppShell from '@/components/layout/AppShell';
import AIChatbot from '@/components/ai-chat/AIChatbot';
import { useTheme } from '@/contexts/ThemeContext';
import { Bot } from 'lucide-react';
import { motion } from 'framer-motion';

function AITeacherContent() {
  const { theme } = useTheme();

  return (
    <div className="max-w-3xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-4">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-neon-500 to-neon-700 flex items-center justify-center">
            <Bot size={22} className="text-white" />
          </div>
          <div>
            <h1 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>
              AI শিক্ষক
            </h1>
            <p className={`text-xs ${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`}>
              সর্বদা অনলাইন — বাংলায় যেকোনো প্রশ্ন করো
            </p>
          </div>
        </div>
      </motion.div>

      <div className={`rounded-2xl overflow-hidden h-[calc(100vh-200px)] flex flex-col ${
        theme === 'dark' ? 'glass-card' : 'glass-card-light'
      }`}>
        <AIChatbot />
      </div>
    </div>
  );
}

export default function AITeacherPage() {
  return (
    <AppShell>
      <AITeacherContent />
    </AppShell>
  );
}
