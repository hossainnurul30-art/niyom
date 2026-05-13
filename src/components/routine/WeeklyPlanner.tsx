'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import GlassCard from '@/components/ui/GlassCard';
import { useState } from 'react';

const days = ['শনিবার', 'রবিবার', 'সোমবার', 'মঙ্গলবার', 'বুধবার', 'বৃহস্পতিবার', 'শুক্রবার'];

const weeklyData: Record<string, { subject: string; topic: string; time: string }[]> = {
  শনিবার: [
    { subject: 'গণিত', topic: 'সেট ও ফাংশন', time: '০৯:০০ - ১০:০০' },
    { subject: 'পদার্থবিজ্ঞান', topic: 'বল ও গতি', time: '১০:৩০ - ১১:৩০' },
    { subject: 'English', topic: 'Reading Comprehension', time: '১৪:০০ - ১৫:০০' },
  ],
  রবিবার: [
    { subject: 'রসায়ন', topic: 'রাসায়নিক বন্ধন', time: '০৯:০০ - ১০:০০' },
    { subject: 'জীববিজ্ঞান', topic: 'কোষ গঠন', time: '১০:৩০ - ১১:৩০' },
    { subject: 'বাংলা', topic: 'ব্যাকরণ অনুশীলন', time: '১৪:০০ - ১৫:০০' },
  ],
  সোমবার: [
    { subject: 'গণিত', topic: 'বীজগণিত', time: '০৯:০০ - ১০:৩০' },
    { subject: 'ICT', topic: 'ওয়েব ডিজাইন', time: '১১:০০ - ১২:০০' },
    { subject: 'BGS', topic: 'বাংলাদেশ ও বিশ্বপরিচয়', time: '১৪:০০ - ১৫:০০' },
  ],
  মঙ্গলবার: [
    { subject: 'পদার্থবিজ্ঞান', topic: 'তাপ ও তাপমাত্রা', time: '০৯:০০ - ১০:০০' },
    { subject: 'রসায়ন', topic: 'মোলার ভর', time: '১০:৩০ - ১১:৩০' },
    { subject: 'গণিত', topic: 'জ্যামিতি', time: '১৪:০০ - ১৫:৩০' },
  ],
  বুধবার: [
    { subject: 'জীববিজ্ঞান', topic: 'সালোকসংশ্লেষণ', time: '০৯:০০ - ১০:০০' },
    { subject: 'English', topic: 'Essay Writing', time: '১০:৩০ - ১১:৩০' },
    { subject: 'বাংলা', topic: 'রচনা', time: '১৪:০০ - ১৫:০০' },
  ],
  বৃহস্পতিবার: [
    { subject: 'গণিত', topic: 'ত্রিকোণমিতি', time: '০৯:০০ - ১০:৩০' },
    { subject: 'পদার্থবিজ্ঞান', topic: 'আলো', time: '১১:০০ - ১২:০০' },
    { subject: 'রসায়ন', topic: 'রিভিশন', time: '১৪:০০ - ১৫:০০' },
  ],
  শুক্রবার: [
    { subject: '📝 রিভিশন', topic: 'সাপ্তাহিক রিভিশন', time: '১০:০০ - ১২:০০' },
    { subject: '🧪 মডেল টেস্ট', topic: 'MCQ + CQ প্র্যাকটিস', time: '১৪:০০ - ১৬:০০' },
  ],
};

export default function WeeklyPlanner() {
  const { theme } = useTheme();
  const [selectedDay, setSelectedDay] = useState(days[0]);

  const tasks = weeklyData[selectedDay] || [];

  return (
    <GlassCard>
      <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>
        সাপ্তাহিক প্ল্যানার
      </h3>

      <div className="flex gap-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
        {days.map(day => (
          <button
            key={day}
            onClick={() => setSelectedDay(day)}
            className={`px-3 py-2 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
              selectedDay === day
                ? 'btn-neon text-white'
                : theme === 'dark' ? 'bg-white/5 text-white/50 hover:bg-white/10' : 'bg-navy-100 text-navy-500 hover:bg-navy-200'
            }`}
          >
            {day}
          </button>
        ))}
      </div>

      <div className="space-y-3">
        {tasks.map((task, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className={`p-3 rounded-xl border-l-4 border-neon-500 ${
              theme === 'dark' ? 'bg-white/5' : 'bg-blue-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>
                {task.subject}
              </span>
              <span className={`text-xs ${theme === 'dark' ? 'text-white/40' : 'text-navy-400'}`}>
                {task.time}
              </span>
            </div>
            <p className={`text-xs mt-1 ${theme === 'dark' ? 'text-white/50' : 'text-navy-500'}`}>
              {task.topic}
            </p>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
}
