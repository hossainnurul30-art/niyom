'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import GlassCard from '@/components/ui/GlassCard';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';

const weeklyData = [
  { day: 'শনি', hours: 3.5, tasks: 5 },
  { day: 'রবি', hours: 4.2, tasks: 7 },
  { day: 'সোম', hours: 2.8, tasks: 4 },
  { day: 'মঙ্গল', hours: 5.0, tasks: 8 },
  { day: 'বুধ', hours: 3.0, tasks: 5 },
  { day: 'বৃহঃ', hours: 4.5, tasks: 6 },
  { day: 'শুক্র', hours: 6.0, tasks: 9 },
];

const subjectDist = [
  { name: 'গণিত', value: 25, color: '#3b82f6' },
  { name: 'পদার্থ', value: 20, color: '#8b5cf6' },
  { name: 'রসায়ন', value: 15, color: '#10b981' },
  { name: 'জীববিজ্ঞান', value: 15, color: '#f59e0b' },
  { name: 'English', value: 12, color: '#ef4444' },
  { name: 'অন্যান্য', value: 13, color: '#6366f1' },
];

const radarData = [
  { subject: 'গণিত', score: 72 },
  { subject: 'পদার্থ', score: 58 },
  { subject: 'রসায়ন', score: 45 },
  { subject: 'জীববিজ্ঞান', score: 65 },
  { subject: 'English', score: 80 },
  { subject: 'বাংলা', score: 55 },
  { subject: 'ICT', score: 90 },
];

export default function AnalyticsDashboard() {
  const { theme } = useTheme();

  const statsCards = [
    { label: 'মোট পড়াশোনা', value: '২৯ ঘণ্টা', change: '+১২%', positive: true },
    { label: 'সম্পন্ন টাস্ক', value: '৪৪টি', change: '+৮টি', positive: true },
    { label: 'ফোকাস স্কোর', value: '৮৫%', change: '+৫%', positive: true },
    { label: 'দুর্বল বিষয়', value: 'রসায়ন', change: '৪৫%', positive: false },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <GlassCard>
              <div className={`text-xs mb-1 ${theme === 'dark' ? 'text-white/50' : 'text-navy-500'}`}>{s.label}</div>
              <div className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>{s.value}</div>
              <span className={`text-xs font-medium ${s.positive ? 'text-green-400' : 'text-red-400'}`}>{s.change}</span>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard>
          <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>সাপ্তাহিক পড়াশোনা</h3>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weeklyData}>
                <defs>
                  <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#00bfff" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#00bfff" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" tick={{ fill: theme === 'dark' ? 'rgba(255,255,255,0.5)' : '#4a5568', fontSize: 12 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: theme === 'dark' ? 'rgba(255,255,255,0.5)' : '#4a5568', fontSize: 12 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: theme === 'dark' ? 'rgba(10,20,50,0.9)' : 'white', border: 'none', borderRadius: 12, color: theme === 'dark' ? 'white' : '#1a365d' }} />
                <Area type="monotone" dataKey="hours" stroke="#00bfff" fill="url(#areaGrad)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard>
          <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>বিষয় বন্টন</h3>
          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={subjectDist} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value">
                  {subjectDist.map((entry) => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip contentStyle={{ background: theme === 'dark' ? 'rgba(10,20,50,0.9)' : 'white', border: 'none', borderRadius: 12, color: theme === 'dark' ? 'white' : '#1a365d' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-2 mt-2 justify-center">
            {subjectDist.map(s => (
              <div key={s.name} className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full" style={{ background: s.color }} />
                <span className={`text-xs ${theme === 'dark' ? 'text-white/50' : 'text-navy-500'}`}>{s.name}</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      <GlassCard>
        <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>বিষয়ভিত্তিক দক্ষতা</h3>
        <div className="h-64 max-w-md mx-auto">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData}>
              <PolarGrid stroke={theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} />
              <PolarAngleAxis dataKey="subject" tick={{ fill: theme === 'dark' ? 'rgba(255,255,255,0.6)' : '#4a5568', fontSize: 11 }} />
              <Radar name="Score" dataKey="score" stroke="#00bfff" fill="#00bfff" fillOpacity={0.2} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      </GlassCard>
    </div>
  );
}
