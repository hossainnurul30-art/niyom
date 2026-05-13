'use client';

import { motion } from 'framer-motion';
import { Home, Calendar, Bot, BookOpen, BarChart3 } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/dashboard', icon: Home, label: 'হোম' },
  { href: '/routine', icon: Calendar, label: 'রুটিন' },
  { href: '/ai-teacher', icon: Bot, label: 'AI শিক্ষক' },
  { href: '/subjects', icon: BookOpen, label: 'বিষয়' },
  { href: '/analytics', icon: BarChart3, label: 'রিপোর্ট' },
];

export default function BottomNav() {
  const { theme } = useTheme();
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: 80 }}
      animate={{ y: 0 }}
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden ${
        theme === 'dark'
          ? 'glass-card border-t border-white/10'
          : 'glass-card-light border-t border-blue-100'
      }`}
    >
      <div className="flex items-center justify-around py-2 px-2">
        {navItems.map(item => {
          const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-0.5 py-1 px-3 relative"
            >
              {isActive && (
                <motion.div
                  layoutId="bottomNavIndicator"
                  className="absolute -top-1 w-8 h-1 rounded-full bg-neon-500"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
              <item.icon
                size={22}
                className={isActive
                  ? 'text-neon-500'
                  : theme === 'dark' ? 'text-white/50' : 'text-navy-400'
                }
              />
              <span className={`text-[10px] font-medium ${
                isActive
                  ? 'text-neon-500'
                  : theme === 'dark' ? 'text-white/50' : 'text-navy-400'
              }`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
}
