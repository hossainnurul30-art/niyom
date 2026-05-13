'use client';

import AppShell from '@/components/layout/AppShell';
import GlassCard from '@/components/ui/GlassCard';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useUser } from '@/contexts/UserContext';
import { Star, Flame, Clock, Target, Trophy, BookOpen, Edit3 } from 'lucide-react';
import { useState } from 'react';

const avatars = ['👨‍🎓', '👩‍🎓', '🧑‍💻', '👨‍🔬', '👩‍🔬', '🦸‍♂️', '🦸‍♀️', '🧑‍🎓'];

function ProfileContent() {
  const { theme } = useTheme();
  const { user, updateUser } = useUser();
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user.name);

  const saveProfile = () => {
    updateUser({ name });
    setEditing(false);
  };

  const stats = [
    { icon: Star, label: 'XP পয়েন্ট', value: user.xp, color: 'text-yellow-400' },
    { icon: Flame, label: 'স্ট্রিক', value: `${user.streak} দিন`, color: 'text-orange-400' },
    { icon: Clock, label: 'মোট পড়াশোনা', value: `${user.studyHours} ঘণ্টা`, color: 'text-blue-400' },
    { icon: Target, label: 'লেভেল', value: user.level, color: 'text-purple-400' },
    { icon: Trophy, label: 'ব্যাজ', value: user.badges.length, color: 'text-green-400' },
    { icon: BookOpen, label: 'সম্পন্ন টাস্ক', value: user.tasksCompleted, color: 'text-pink-400' },
  ];

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className={`text-2xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>
          প্রোফাইল 👤
        </h1>
      </motion.div>

      <GlassCard glow className="text-center">
        <div className="text-6xl mb-4">{user.avatar}</div>

        <div className="flex gap-2 justify-center mb-4 flex-wrap">
          {avatars.map(av => (
            <button
              key={av}
              onClick={() => updateUser({ avatar: av })}
              className={`text-2xl p-2 rounded-xl transition-all ${
                user.avatar === av
                  ? 'bg-neon-500/20 neon-border scale-110'
                  : theme === 'dark' ? 'hover:bg-white/10' : 'hover:bg-blue-50'
              }`}
            >
              {av}
            </button>
          ))}
        </div>

        {editing ? (
          <div className="flex items-center gap-2 justify-center mb-4">
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              className={`px-3 py-2 rounded-xl text-center text-lg font-bold ${
                theme === 'dark' ? 'bg-white/5 border border-white/10 text-white' : 'bg-white border border-navy-200 text-navy-900'
              }`}
            />
            <button onClick={saveProfile} className="btn-neon px-4 py-2 rounded-xl text-white text-sm font-medium">
              সংরক্ষণ
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2 justify-center mb-2">
            <h2 className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>
              {user.name}
            </h2>
            <button onClick={() => setEditing(true)} className={`p-1 rounded-lg ${theme === 'dark' ? 'hover:bg-white/10 text-white/50' : 'hover:bg-blue-50 text-navy-400'}`}>
              <Edit3 size={16} />
            </button>
          </div>
        )}

        <div className="flex items-center justify-center gap-3 text-sm">
          <span className={`px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-white/5 text-white/60' : 'bg-navy-100 text-navy-600'}`}>
            {user.className}
          </span>
          <span className={`px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-neon-500/10 text-neon-400' : 'bg-blue-50 text-neon-600'}`}>
            {user.group}
          </span>
        </div>
      </GlassCard>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {stats.map((s, i) => (
          <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <GlassCard className="text-center">
              <s.icon size={24} className={`mx-auto mb-2 ${s.color}`} />
              <div className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>{s.value}</div>
              <div className={`text-xs ${theme === 'dark' ? 'text-white/40' : 'text-navy-400'}`}>{s.label}</div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <GlassCard>
        <h3 className={`text-lg font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>
          অর্জিত ব্যাজ 🏆
        </h3>
        <div className="flex flex-wrap gap-3">
          {user.badges.map(badge => (
            <motion.div
              key={badge}
              className={`px-4 py-2 rounded-xl text-sm font-medium ${
                theme === 'dark' ? 'bg-white/5 text-neon-300 neon-border' : 'bg-blue-50 text-neon-700 border border-blue-200'
              }`}
              whileHover={{ scale: 1.05 }}
            >
              {badge}
            </motion.div>
          ))}
          {['⚡ Speed Learner', '🌟 Perfect Week', '📖 Bookworm', '🎯 100% Completion'].map(badge => (
            <motion.div
              key={badge}
              className={`px-4 py-2 rounded-xl text-sm font-medium opacity-30 ${
                theme === 'dark' ? 'bg-white/5 text-white/40 border border-white/10' : 'bg-navy-100 text-navy-400'
              }`}
            >
              {badge} 🔒
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}

export default function ProfilePage() {
  return (
    <AppShell>
      <ProfileContent />
    </AppShell>
  );
}
