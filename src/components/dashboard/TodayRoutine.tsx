'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useUser } from '@/contexts/UserContext';
import GlassCard from '@/components/ui/GlassCard';
import { CheckCircle, Circle, Clock } from 'lucide-react';
import { useState } from 'react';

interface Task {
  id: number;
  subject: string;
  topic: string;
  time: string;
  duration: string;
  done: boolean;
}

const initialTasks: Task[] = [
  { id: 1, subject: 'গণিত', topic: 'ত্রিকোণমিতি - অনুশীলনী ৫.১', time: '০৯:০০', duration: '৪৫ মিনিট', done: true },
  { id: 2, subject: 'পদার্থবিজ্ঞান', topic: 'গতিবিদ্যা - সূত্র অনুশীলন', time: '১০:০০', duration: '৬০ মিনিট', done: true },
  { id: 3, subject: 'রসায়ন', topic: 'পর্যায় সারণী - মৌলের ধর্ম', time: '১১:৩০', duration: '৪৫ মিনিট', done: false },
  { id: 4, subject: 'English', topic: 'Grammar - Tense Practice', time: '১৪:০০', duration: '৩০ মিনিট', done: false },
  { id: 5, subject: 'বাংলা', topic: 'গল্প - কবিতা পাঠ', time: '১৫:০০', duration: '৪৫ মিনিট', done: false },
  { id: 6, subject: 'জীববিজ্ঞান', topic: 'কোষ বিভাজন - রিভিশন', time: '১৬:৩০', duration: '৪৫ মিনিট', done: false },
];

export default function TodayRoutine() {
  const { theme } = useTheme();
  const { addXP } = useUser();
  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (id: number) => {
    setTasks(prev => prev.map(t => {
      if (t.id === id && !t.done) {
        addXP(10);
        return { ...t, done: true };
      }
      return t;
    }));
  };

  const completed = tasks.filter(t => t.done).length;
  const progress = (completed / tasks.length) * 100;

  return (
    <GlassCard>
      <div className="flex items-center justify-between mb-4">
        <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>
          আজকের রুটিন
        </h3>
        <span className={`text-sm ${theme === 'dark' ? 'text-neon-400' : 'text-neon-600'}`}>
          {completed}/{tasks.length} সম্পন্ন
        </span>
      </div>

      <div className={`h-2 rounded-full mb-5 overflow-hidden ${theme === 'dark' ? 'bg-white/10' : 'bg-navy-100'}`}>
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400"
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="space-y-3">
        {tasks.map((task, i) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => toggleTask(task.id)}
            className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition-all ${
              task.done
                ? theme === 'dark' ? 'bg-green-500/10' : 'bg-green-50'
                : theme === 'dark' ? 'hover:bg-white/5' : 'hover:bg-blue-50'
            }`}
          >
            {task.done ? (
              <CheckCircle size={20} className="text-green-500 mt-0.5 shrink-0" />
            ) : (
              <Circle size={20} className={`mt-0.5 shrink-0 ${theme === 'dark' ? 'text-white/30' : 'text-navy-300'}`} />
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-0.5">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                  theme === 'dark' ? 'bg-neon-500/20 text-neon-300' : 'bg-blue-100 text-blue-700'
                }`}>
                  {task.subject}
                </span>
              </div>
              <p className={`text-sm ${
                task.done
                  ? theme === 'dark' ? 'text-white/40 line-through' : 'text-navy-400 line-through'
                  : theme === 'dark' ? 'text-white/80' : 'text-navy-700'
              }`}>
                {task.topic}
              </p>
            </div>
            <div className="text-right shrink-0">
              <div className={`flex items-center gap-1 text-xs ${theme === 'dark' ? 'text-white/40' : 'text-navy-400'}`}>
                <Clock size={12} />
                {task.time}
              </div>
              <div className={`text-xs ${theme === 'dark' ? 'text-white/30' : 'text-navy-300'}`}>
                {task.duration}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </GlassCard>
  );
}
