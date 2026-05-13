'use client';

import { useTheme } from '@/contexts/ThemeContext';
import GlassCard from '@/components/ui/GlassCard';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { day: 'শনি', hours: 3.5 },
  { day: 'রবি', hours: 4.2 },
  { day: 'সোম', hours: 2.8 },
  { day: 'মঙ্গল', hours: 5.0 },
  { day: 'বুধ', hours: 3.0 },
  { day: 'বৃহঃ', hours: 4.5 },
  { day: 'শুক্র', hours: 6.0 },
];

export default function StudyChart() {
  const { theme } = useTheme();

  return (
    <GlassCard>
      <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>
        সাপ্তাহিক পড়াশোনা
      </h3>
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke={theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'} />
            <XAxis
              dataKey="day"
              tick={{ fill: theme === 'dark' ? 'rgba(255,255,255,0.5)' : '#4a5568', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: theme === 'dark' ? 'rgba(255,255,255,0.5)' : '#4a5568', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                background: theme === 'dark' ? 'rgba(10,20,50,0.9)' : 'white',
                border: 'none',
                borderRadius: 12,
                color: theme === 'dark' ? 'white' : '#1a365d',
              }}
              formatter={(value) => [`${value} ঘণ্টা`, 'পড়াশোনা']}
            />
            <Bar dataKey="hours" fill="url(#barGradient)" radius={[6, 6, 0, 0]} />
            <defs>
              <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#00bfff" />
                <stop offset="100%" stopColor="#0099cc" />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </GlassCard>
  );
}
