'use client';

import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Brain, Bot, Timer, BarChart3, RefreshCw, Trophy } from 'lucide-react';
import GlassCard from '@/components/ui/GlassCard';

const features = [
  { icon: Brain, title: 'AI রুটিন মেকার', desc: 'তোমার পরীক্ষার তারিখ, দুর্বল বিষয়, ও সময় অনুযায়ী AI তোমার জন্য কাস্টম রুটিন তৈরি করবে', color: 'from-blue-500 to-cyan-500' },
  { icon: Bot, title: 'AI শিক্ষক', desc: 'বাংলায় যেকোনো প্রশ্ন জিজ্ঞেস করো, AI তোমাকে NCTB সিলেবাস অনুযায়ী সহজভাবে বুঝিয়ে দেবে', color: 'from-purple-500 to-pink-500' },
  { icon: Timer, title: 'পরীক্ষা কাউন্টডাউন', desc: 'SSC 2028, স্কুল পরীক্ষা, ক্লাস টেস্ট সব কাউন্টডাউন এক জায়গায়', color: 'from-orange-500 to-red-500' },
  { icon: BarChart3, title: 'স্টাডি অ্যানালিটিক্স', desc: 'তোমার পড়াশোনার অগ্রগতি, দুর্বলতা, ও প্রোডাক্টিভিটি ট্র্যাক করো সুন্দর চার্টে', color: 'from-green-500 to-emerald-500' },
  { icon: RefreshCw, title: 'স্মার্ট রিভিশন', desc: 'AI-চালিত রিভিশন সিস্টেম যেটা তোমার দুর্বল টপিকগুলো বারবার রিভিশন করাবে', color: 'from-yellow-500 to-orange-500' },
  { icon: Trophy, title: 'গ্যামিফিকেশন', desc: 'XP, লেভেল, স্ট্রিক, ব্যাজ জিতে পড়াশোনাকে মজার গেমে পরিণত করো', color: 'from-pink-500 to-rose-500' },
];

export default function FeaturesSection() {
  const { theme } = useTheme();

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-navy-900'
          }`}>
            তোমার পড়াশোনার{' '}
            <span className="text-neon-500">সুপারপাওয়ার</span>
          </h2>
          <p className={`text-lg max-w-xl mx-auto ${
            theme === 'dark' ? 'text-white/50' : 'text-navy-500'
          }`}>
            নিয়ম তোমাকে দেবে সব টুলস যা তোমার SSC প্রস্তুতিকে করবে স্মার্ট ও কার্যকর
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="h-full">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon size={24} className="text-white" />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-navy-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-sm leading-relaxed ${
                  theme === 'dark' ? 'text-white/50' : 'text-navy-500'
                }`}>
                  {feature.desc}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
