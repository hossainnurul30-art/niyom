'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useUser } from '@/contexts/UserContext';
import GlassCard from '@/components/ui/GlassCard';
import { Play, Pause, RotateCcw } from 'lucide-react';
import { useState, useReducer } from 'react';
import { useInterval } from '@/hooks/useInterval';

type TimerMode = 'focus' | 'break' | 'longBreak';

const DURATIONS: Record<TimerMode, number> = { focus: 25 * 60, break: 5 * 60, longBreak: 15 * 60 };

interface TimerState {
  mode: TimerMode;
  timeLeft: number;
  isRunning: boolean;
  sessions: number;
}

type TimerAction =
  | { type: 'tick' }
  | { type: 'toggle' }
  | { type: 'reset' }
  | { type: 'switchMode'; mode: TimerMode };

function timerReducer(state: TimerState, action: TimerAction): TimerState {
  switch (action.type) {
    case 'tick': {
      if (state.timeLeft <= 1) {
        if (state.mode === 'focus') {
          const newSessions = state.sessions + 1;
          const nextMode = newSessions % 4 === 0 ? 'longBreak' : 'break';
          return { mode: nextMode, timeLeft: DURATIONS[nextMode], isRunning: false, sessions: newSessions };
        }
        return { mode: 'focus', timeLeft: DURATIONS.focus, isRunning: false, sessions: state.sessions };
      }
      return { ...state, timeLeft: state.timeLeft - 1 };
    }
    case 'toggle':
      return { ...state, isRunning: !state.isRunning };
    case 'reset':
      return { ...state, timeLeft: DURATIONS[state.mode], isRunning: false };
    case 'switchMode':
      return { ...state, mode: action.mode, timeLeft: DURATIONS[action.mode], isRunning: false };
    default:
      return state;
  }
}

export default function PomodoroTimer() {
  const { theme } = useTheme();
  const { addXP } = useUser();
  const [state, dispatch] = useReducer(timerReducer, {
    mode: 'focus',
    timeLeft: DURATIONS.focus,
    isRunning: false,
    sessions: 0,
  });
  const [prevSessions, setPrevSessions] = useState(0);

  if (state.sessions > prevSessions) {
    setPrevSessions(state.sessions);
    addXP(25);
  }

  useInterval(() => dispatch({ type: 'tick' }), state.isRunning ? 1000 : null);

  const { mode, timeLeft, isRunning, sessions } = state;
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const progress = ((DURATIONS[mode] - timeLeft) / DURATIONS[mode]) * 100;
  const circumference = 2 * Math.PI * 90;

  return (
    <GlassCard glow className="text-center">
      <h3 className={`text-lg font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>
        {mode === 'focus' ? '🎯 ফোকাস মোড' : mode === 'break' ? '☕ বিরতি' : '🌟 লম্বা বিরতি'}
      </h3>

      <div className="flex justify-center gap-2 mb-6">
        {(['focus', 'break', 'longBreak'] as TimerMode[]).map(m => (
          <button
            key={m}
            onClick={() => dispatch({ type: 'switchMode', mode: m })}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-all ${
              mode === m
                ? 'btn-neon text-white'
                : theme === 'dark' ? 'bg-white/5 text-white/50 hover:bg-white/10' : 'bg-navy-100 text-navy-500 hover:bg-navy-200'
            }`}
          >
            {m === 'focus' ? 'ফোকাস' : m === 'break' ? 'বিরতি' : 'লম্বা বিরতি'}
          </button>
        ))}
      </div>

      <div className="relative w-52 h-52 mx-auto mb-6">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="90" fill="none" stroke={theme === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)'} strokeWidth="8" />
          <motion.circle
            cx="100" cy="100" r="90" fill="none"
            stroke="url(#timerGradient)" strokeWidth="8" strokeLinecap="round"
            strokeDasharray={circumference}
            animate={{ strokeDashoffset: circumference - (progress / 100) * circumference }}
            transition={{ duration: 0.5 }}
          />
          <defs>
            <linearGradient id="timerGradient">
              <stop offset="0%" stopColor="#00bfff" />
              <stop offset="100%" stopColor="#00e5ff" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className={`text-5xl font-bold tabular-nums ${
            theme === 'dark' ? 'text-white neon-text' : 'text-navy-900'
          }`}>
            {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4">
        <button
          onClick={() => dispatch({ type: 'reset' })}
          className={`p-3 rounded-xl ${theme === 'dark' ? 'bg-white/5 text-white/50 hover:bg-white/10' : 'bg-navy-100 text-navy-500 hover:bg-navy-200'}`}
        >
          <RotateCcw size={20} />
        </button>
        <motion.button
          onClick={() => dispatch({ type: 'toggle' })}
          className="btn-neon p-4 rounded-2xl text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isRunning ? <Pause size={28} /> : <Play size={28} />}
        </motion.button>
        <div className={`p-3 rounded-xl ${theme === 'dark' ? 'bg-white/5' : 'bg-navy-100'}`}>
          <span className={`text-sm font-medium ${theme === 'dark' ? 'text-neon-400' : 'text-neon-600'}`}>
            {sessions} সেশন
          </span>
        </div>
      </div>
    </GlassCard>
  );
}
