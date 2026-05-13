'use client';

import { ThemeProvider } from '@/contexts/ThemeContext';
import { UserProvider } from '@/contexts/UserContext';
import ParticleBackground from '@/components/ui/ParticleBackground';
import Navbar from '@/components/layout/Navbar';
import HeroSection from '@/components/landing/HeroSection';
import FeaturesSection from '@/components/landing/FeaturesSection';
import MotivationSection from '@/components/landing/MotivationSection';
import Footer from '@/components/landing/Footer';
import FloatingAIButton from '@/components/ai-chat/FloatingAIButton';
import { useTheme } from '@/contexts/ThemeContext';

function LandingContent() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'gradient-bg-dark' : 'gradient-bg-light'}`}>
      <ParticleBackground />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <MotivationSection />
      <Footer />
      <FloatingAIButton />
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <UserProvider>
        <LandingContent />
      </UserProvider>
    </ThemeProvider>
  );
}
