'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface UserProfile {
  name: string;
  avatar: string;
  className: string;
  group: string;
  subjects: string[];
  xp: number;
  level: number;
  streak: number;
  studyHours: number;
  tasksCompleted: number;
  badges: string[];
}

interface UserContextType {
  user: UserProfile;
  updateUser: (updates: Partial<UserProfile>) => void;
  addXP: (amount: number) => void;
  isGuest: boolean;
  setIsGuest: (v: boolean) => void;
}

const defaultUser: UserProfile = {
  name: 'শিক্ষার্থী',
  avatar: '👨‍🎓',
  className: 'Class 9',
  group: 'Science',
  subjects: ['গণিত', 'পদার্থবিজ্ঞান', 'রসায়ন', 'জীববিজ্ঞান', 'বাংলা', 'English', 'ICT'],
  xp: 450,
  level: 5,
  streak: 7,
  studyHours: 42,
  tasksCompleted: 28,
  badges: ['🔥 7-Day Streak', '📚 First Study Session', '🎯 Goal Setter'],
};

const UserContext = createContext<UserContextType>({
  user: defaultUser,
  updateUser: () => {},
  addXP: () => {},
  isGuest: true,
  setIsGuest: () => {},
});

function getInitialUser(): UserProfile {
  if (typeof window === 'undefined') return defaultUser;
  const saved = localStorage.getItem('niyom-user');
  if (saved) {
    try { return JSON.parse(saved); } catch { /* use default */ }
  }
  return defaultUser;
}

export function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserProfile>(getInitialUser);
  const [isGuest, setIsGuest] = useState(true);

  useEffect(() => {
    localStorage.setItem('niyom-user', JSON.stringify(user));
  }, [user]);

  const updateUser = (updates: Partial<UserProfile>) => {
    setUser(prev => ({ ...prev, ...updates }));
  };

  const addXP = (amount: number) => {
    setUser(prev => {
      const newXP = prev.xp + amount;
      const newLevel = Math.floor(newXP / 100) + 1;
      return { ...prev, xp: newXP, level: newLevel };
    });
  };

  return (
    <UserContext.Provider value={{ user, updateUser, addXP, isGuest, setIsGuest }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
