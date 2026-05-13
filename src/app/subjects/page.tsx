'use client';

import AppShell from '@/components/layout/AppShell';
import GlassCard from '@/components/ui/GlassCard';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

const subjectGroups = [
  {
    group: 'বিজ্ঞান বিভাগ',
    subjects: [
      { name: 'গণিত', chapters: 14, progress: 72, icon: '🧮', color: 'from-blue-500 to-cyan-500' },
      { name: 'উচ্চতর গণিত', chapters: 12, progress: 45, icon: '📐', color: 'from-indigo-500 to-blue-500' },
      { name: 'পদার্থবিজ্ঞান', chapters: 13, progress: 58, icon: '⚡', color: 'from-purple-500 to-pink-500' },
      { name: 'রসায়ন', chapters: 12, progress: 42, icon: '🧪', color: 'from-green-500 to-emerald-500' },
      { name: 'জীববিজ্ঞান', chapters: 14, progress: 65, icon: '🧬', color: 'from-orange-500 to-red-500' },
      { name: 'ICT', chapters: 6, progress: 90, icon: '💻', color: 'from-teal-500 to-cyan-500' },
    ],
  },
  {
    group: 'আবশ্যিক বিষয়',
    subjects: [
      { name: 'বাংলা', chapters: 20, progress: 55, icon: '📖', color: 'from-red-500 to-pink-500' },
      { name: 'English', chapters: 18, progress: 80, icon: '🔤', color: 'from-yellow-500 to-orange-500' },
      { name: 'বাংলাদেশ ও বিশ্বপরিচয়', chapters: 15, progress: 50, icon: '🌍', color: 'from-green-500 to-teal-500' },
      { name: 'ধর্ম ও নৈতিক শিক্ষা', chapters: 10, progress: 60, icon: '🕌', color: 'from-amber-500 to-yellow-500' },
      { name: 'ক্যারিয়ার শিক্ষা', chapters: 8, progress: 70, icon: '🎯', color: 'from-violet-500 to-purple-500' },
    ],
  },
  {
    group: 'মানবিক বিভাগ',
    subjects: [
      { name: 'অর্থনীতি', chapters: 12, progress: 40, icon: '💰', color: 'from-emerald-500 to-green-500' },
      { name: 'ভূগোল', chapters: 10, progress: 35, icon: '🗺️', color: 'from-blue-500 to-indigo-500' },
      { name: 'পৌরনীতি', chapters: 11, progress: 45, icon: '🏛️', color: 'from-slate-500 to-gray-500' },
      { name: 'ইতিহাস', chapters: 14, progress: 50, icon: '📜', color: 'from-amber-500 to-orange-500' },
    ],
  },
  {
    group: 'ব্যবসায় শিক্ষা বিভাগ',
    subjects: [
      { name: 'হিসাববিজ্ঞান', chapters: 12, progress: 38, icon: '📊', color: 'from-blue-500 to-cyan-500' },
      { name: 'ফিন্যান্স', chapters: 10, progress: 42, icon: '🏦', color: 'from-green-500 to-emerald-500' },
      { name: 'ব্যবসায় উদ্যোগ', chapters: 11, progress: 55, icon: '💼', color: 'from-purple-500 to-violet-500' },
    ],
  },
];

function SubjectsContent() {
  const { theme } = useTheme();
  const [expandedGroup, setExpandedGroup] = useState(subjectGroups[0].group);

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className={`text-2xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>
          বিষয়সমূহ 📚
        </h1>
        <p className={`text-sm ${theme === 'dark' ? 'text-white/50' : 'text-navy-500'}`}>
          NCTB সিলেবাস অনুযায়ী সকল বিষয় একসাথে
        </p>
      </motion.div>

      {subjectGroups.map((group, gi) => (
        <motion.div
          key={group.group}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: gi * 0.1 }}
        >
          <button
            onClick={() => setExpandedGroup(expandedGroup === group.group ? '' : group.group)}
            className={`w-full text-left flex items-center justify-between px-4 py-3 rounded-xl mb-3 font-semibold ${
              theme === 'dark' ? 'bg-white/5 text-white hover:bg-white/10' : 'bg-blue-50 text-navy-900 hover:bg-blue-100'
            }`}
          >
            <span>{group.group}</span>
            <ChevronRight
              size={18}
              className={`transition-transform ${expandedGroup === group.group ? 'rotate-90' : ''}`}
            />
          </button>

          {expandedGroup === group.group && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {group.subjects.map((sub, si) => (
                <motion.div
                  key={sub.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: si * 0.05 }}
                >
                  <GlassCard className="cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${sub.color} flex items-center justify-center text-2xl shrink-0`}>
                        {sub.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className={`font-bold text-sm mb-0.5 ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>
                          {sub.name}
                        </h3>
                        <p className={`text-xs ${theme === 'dark' ? 'text-white/40' : 'text-navy-400'}`}>
                          {sub.chapters}টি অধ্যায়
                        </p>
                      </div>
                      <span className={`text-sm font-bold ${theme === 'dark' ? 'text-neon-400' : 'text-neon-600'}`}>
                        {sub.progress}%
                      </span>
                    </div>
                    <div className={`mt-3 h-2 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-white/10' : 'bg-navy-100'}`}>
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${sub.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${sub.progress}%` }}
                        transition={{ duration: 0.8, delay: si * 0.05 }}
                      />
                    </div>
                    <div className="flex gap-2 mt-3">
                      {['AI ব্যাখ্যা', 'MCQ', 'CQ', 'রিভিশন'].map(tag => (
                        <span
                          key={tag}
                          className={`px-2 py-0.5 rounded-md text-[10px] font-medium ${
                            theme === 'dark' ? 'bg-white/5 text-white/40' : 'bg-navy-100 text-navy-400'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default function SubjectsPage() {
  return (
    <AppShell>
      <SubjectsContent />
    </AppShell>
  );
}
