'use client';

import { ThemeProvider, useTheme } from '@/contexts/ThemeContext';
import { UserProvider } from '@/contexts/UserContext';
import ParticleBackground from '@/components/ui/ParticleBackground';
import Navbar from '@/components/layout/Navbar';
import BottomNav from '@/components/layout/BottomNav';
import FloatingAIButton from '@/components/ai-chat/FloatingAIButton';
import type { ReactNode } from 'react';

function ShellContent({ children }: { children: ReactNode }) {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'gradient-bg-dark' : 'gradient-bg-light'}`}>
      <ParticleBackground />
      <Navbar />
      <main className="pt-20 pb-24 md:pb-8 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>
      <BottomNav />
      <FloatingAIButton />
    </div>
  );
}

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <UserProvider>
        <ShellContent>{children}</ShellContent>
      </UserProvider>
    </ThemeProvider>
  );
}
