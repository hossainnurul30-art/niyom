'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import GlassCard from '@/components/ui/GlassCard';
import { Brain, Sparkles, Loader2 } from 'lucide-react';
import { useState } from 'react';

interface GeneratedRoutine {
  time: string;
  subject: string;
  topic: string;
  duration: string;
}

export default function AIRoutineGenerator() {
  const { theme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [generated, setGenerated] = useState<GeneratedRoutine[]>([]);
  const [formData, setFormData] = useState({
    examDate: '',
    weakSubjects: '',
    dailyHours: '4',
    schoolTime: '08:00-14:00',
    coachingTime: '',
  });

  const generateRoutine = () => {
    setLoading(true);
    setTimeout(() => {
      setGenerated([
        { time: '০৬:০০ - ০৭:০০', subject: 'গণিত', topic: 'দুর্বল টপিক: ত্রিকোণমিতি রিভিশন', duration: '৬০ মিনিট' },
        { time: '০৭:১৫ - ০৮:০০', subject: 'পদার্থবিজ্ঞান', topic: 'সূত্র মুখস্থ ও সমস্যা সমাধান', duration: '৪৫ মিনিট' },
        { time: '১৫:০০ - ১৬:০০', subject: 'রসায়ন', topic: 'রাসায়নিক সমীকরণ অনুশীলন', duration: '৬০ মিনিট' },
        { time: '১৬:১৫ - ১৭:০০', subject: 'English', topic: 'Grammar & Vocabulary', duration: '৪৫ মিনিট' },
        { time: '১৭:১৫ - ১৮:০০', subject: 'জীববিজ্ঞান', topic: 'চিত্রসহ নোট তৈরি', duration: '৪৫ মিনিট' },
        { time: '২০:০০ - ২১:০০', subject: 'বাংলা', topic: 'সৃজনশীল প্রশ্ন অনুশীলন', duration: '৬০ মিনিট' },
        { time: '২১:১৫ - ২১:৪৫', subject: '📝 রিভিশন', topic: 'আজকের পড়া দ্রুত রিভিশন', duration: '৩০ মিনিট' },
      ]);
      setLoading(false);
    }, 2000);
  };

  return (
    <GlassCard>
      <div className="flex items-center gap-2 mb-4">
        <Brain size={24} className="text-neon-500" />
        <h3 className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>
          AI রুটিন জেনারেটর
        </h3>
      </div>

      <div className="space-y-3 mb-4">
        <div>
          <label className={`text-sm mb-1 block ${theme === 'dark' ? 'text-white/60' : 'text-navy-600'}`}>
            পরীক্ষার তারিখ
          </label>
          <input
            type="date"
            value={formData.examDate}
            onChange={e => setFormData(p => ({ ...p, examDate: e.target.value }))}
            className={`w-full px-3 py-2 rounded-xl text-sm ${
              theme === 'dark' ? 'bg-white/5 border border-white/10 text-white' : 'bg-white border border-navy-200 text-navy-900'
            }`}
          />
        </div>
        <div>
          <label className={`text-sm mb-1 block ${theme === 'dark' ? 'text-white/60' : 'text-navy-600'}`}>
            দুর্বল বিষয়সমূহ
          </label>
          <input
            type="text"
            placeholder="যেমন: গণিত, রসায়ন"
            value={formData.weakSubjects}
            onChange={e => setFormData(p => ({ ...p, weakSubjects: e.target.value }))}
            className={`w-full px-3 py-2 rounded-xl text-sm ${
              theme === 'dark' ? 'bg-white/5 border border-white/10 text-white placeholder:text-white/30' : 'bg-white border border-navy-200 text-navy-900 placeholder:text-navy-300'
            }`}
          />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className={`text-sm mb-1 block ${theme === 'dark' ? 'text-white/60' : 'text-navy-600'}`}>
              দৈনিক পড়ার সময় (ঘণ্টা)
            </label>
            <select
              value={formData.dailyHours}
              onChange={e => setFormData(p => ({ ...p, dailyHours: e.target.value }))}
              className={`w-full px-3 py-2 rounded-xl text-sm ${
                theme === 'dark' ? 'bg-white/5 border border-white/10 text-white' : 'bg-white border border-navy-200 text-navy-900'
              }`}
            >
              {['2', '3', '4', '5', '6', '7', '8'].map(h => (
                <option key={h} value={h}>{h} ঘণ্টা</option>
              ))}
            </select>
          </div>
          <div>
            <label className={`text-sm mb-1 block ${theme === 'dark' ? 'text-white/60' : 'text-navy-600'}`}>
              স্কুলের সময়
            </label>
            <input
              type="text"
              value={formData.schoolTime}
              onChange={e => setFormData(p => ({ ...p, schoolTime: e.target.value }))}
              className={`w-full px-3 py-2 rounded-xl text-sm ${
                theme === 'dark' ? 'bg-white/5 border border-white/10 text-white' : 'bg-white border border-navy-200 text-navy-900'
              }`}
            />
          </div>
        </div>
      </div>

      <motion.button
        onClick={generateRoutine}
        disabled={loading}
        className="btn-neon w-full py-3 rounded-xl text-white font-semibold flex items-center justify-center gap-2"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {loading ? (
          <><Loader2 size={18} className="animate-spin" /> AI রুটিন তৈরি হচ্ছে...</>
        ) : (
          <><Sparkles size={18} /> AI রুটিন তৈরি করো</>
        )}
      </motion.button>

      <AnimatePresence>
        {generated.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-5 space-y-2"
          >
            <h4 className={`text-sm font-semibold mb-3 ${theme === 'dark' ? 'text-neon-400' : 'text-neon-600'}`}>
              ✨ তোমার AI-জেনারেটেড রুটিন
            </h4>
            {generated.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.08 }}
                className={`p-3 rounded-xl flex items-center justify-between ${
                  theme === 'dark' ? 'bg-white/5 neon-border' : 'bg-blue-50 border border-blue-200'
                }`}
              >
                <div>
                  <span className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>
                    {item.subject}
                  </span>
                  <p className={`text-xs mt-0.5 ${theme === 'dark' ? 'text-white/50' : 'text-navy-500'}`}>
                    {item.topic}
                  </p>
                </div>
                <div className="text-right">
                  <div className={`text-xs font-medium ${theme === 'dark' ? 'text-neon-400' : 'text-neon-600'}`}>
                    {item.time}
                  </div>
                  <div className={`text-xs ${theme === 'dark' ? 'text-white/30' : 'text-navy-300'}`}>
                    {item.duration}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </GlassCard>
  );
}
