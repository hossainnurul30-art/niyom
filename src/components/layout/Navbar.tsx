'use client';

import { motion } from 'framer-motion';
import { Sun, Moon, User, Bell } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [showNotif, setShowNotif] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`fixed top-0 left-0 right-0 z-50 px-4 py-3 ${
        theme === 'dark'
          ? 'glass-card border-b border-white/10'
          : 'glass-card-light border-b border-blue-100'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-neon-500 to-neon-700 flex items-center justify-center text-white font-bold text-lg">
            ন
          </div>
          <span className={`text-xl font-bold ${theme === 'dark' ? 'text-white neon-text' : 'text-navy-800'}`}>
            নিয়ম
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {[
            { href: '/dashboard', label: 'ড্যাশবোর্ড' },
            { href: '/routine', label: 'রুটিন' },
            { href: '/ai-teacher', label: 'AI শিক্ষক' },
            { href: '/subjects', label: 'বিষয়সমূহ' },
            { href: '/countdown', label: 'কাউন্টডাউন' },
            { href: '/analytics', label: 'অ্যানালিটিক্স' },
          ].map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                theme === 'dark' ? 'text-white/70 hover:text-neon-400' : 'text-navy-600 hover:text-neon-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-xl transition-all ${
              theme === 'dark' ? 'hover:bg-white/10 text-white' : 'hover:bg-blue-50 text-navy-700'
            }`}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => setShowNotif(!showNotif)}
            className={`p-2 rounded-xl transition-all relative ${
              theme === 'dark' ? 'hover:bg-white/10 text-white' : 'hover:bg-blue-50 text-navy-700'
            }`}
          >
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          <Link
            href="/profile"
            className={`p-2 rounded-xl transition-all ${
              theme === 'dark' ? 'hover:bg-white/10 text-white' : 'hover:bg-blue-50 text-navy-700'
            }`}
          >
            <User size={20} />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
