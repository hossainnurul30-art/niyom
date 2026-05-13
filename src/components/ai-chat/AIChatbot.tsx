'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { Send, Bot, User } from 'lucide-react';
import { useState, useRef, useEffect, useCallback } from 'react';

interface Message {
  id: number;
  role: 'user' | 'ai';
  content: string;
}

const quickReplies = [
  'ত্রিকোণমিতি বুঝিয়ে দাও',
  'নিউটনের গতিসূত্র কী?',
  'পর্যায় সারণী সহজে মনে রাখার উপায়',
  'সালোকসংশ্লেষণ ব্যাখ্যা করো',
  'Tense সহজে শেখার টিপস',
  'SSC গণিত MCQ টিপস',
];

const aiResponses: Record<string, string> = {
  default: 'আমি তোমার AI শিক্ষক! তুমি যেকোনো বিষয়ে প্রশ্ন করতে পারো। আমি NCTB সিলেবাস অনুযায়ী সহজভাবে বুঝিয়ে দেবো। 📚',
  'ত্রিকোণমিতি বুঝিয়ে দাও': `ত্রিকোণমিতি 📐

ত্রিকোণমিতি হলো গণিতের একটি শাখা যেখানে সমকোণী ত্রিভুজের বাহু ও কোণের সম্পর্ক নিয়ে আলোচনা করা হয়।

মূল অনুপাত ৩টি:
• sin θ = লম্ব / অতিভুজ
• cos θ = ভূমি / অতিভুজ
• tan θ = লম্ব / ভূমি

মনে রাখার কৌশল: "সলা কভু তলা"
• স = sin = ল (লম্ব) / অ (অতিভুজ)
• ক = cos = ভু (ভূমি) / অতিভুজ
• ত = tan = ল (লম্ব) / ভু (ভূমি)

কোনো নির্দিষ্ট সমস্যা থাকলে বলো, আমি সমাধান করে দেবো! ✨`,
  'নিউটনের গতিসূত্র কী?': `নিউটনের গতিসূত্র ⚡

প্রথম সূত্র (জড়তার সূত্র):
বাহ্যিক বল প্রয়োগ না করলে স্থির বস্তু স্থিরই থাকবে এবং গতিশীল বস্তু সমবেগে চলতে থাকবে।

দ্বিতীয় সূত্র (F = ma):
বস্তুর ভরবেগের পরিবর্তনের হার প্রযুক্ত বলের সমানুপাতিক।
F = ma (বল = ভর × ত্বরণ)

তৃতীয় সূত্র (ক্রিয়া-প্রতিক্রিয়া):
প্রতিটি ক্রিয়ার একটি সমান ও বিপরীত প্রতিক্রিয়া আছে।

উদাহরণ: রকেট উৎক্ষেপণ - গ্যাস নিচে যায় (ক্রিয়া), রকেট উপরে যায় (প্রতিক্রিয়া) 🚀`,
  'পর্যায় সারণী সহজে মনে রাখার উপায়': `পর্যায় সারণী মনে রাখার কৌশল 🧪

গ্রুপ-১ (ক্ষার ধাতু): H, Li, Na, K, Rb, Cs, Fr
মনে রাখো: "হায়রে, লিটন নাকি কাঁদে? রবি সিরাজকে ফেলে"

গ্রুপ-১৭ (হ্যালোজেন): F, Cl, Br, I, At
মনে রাখো: "ফ্লু ক্লাসে ব্রাদার ইন্ডিয়া আটকে"

গ্রুপ-১৮ (নিষ্ক্রিয় গ্যাস): He, Ne, Ar, Kr, Xe, Rn
মনে রাখো: "হে না, আর কেউ জিনকে রান করবে না"

প্রতিদিন ৫-১০ মিনিট রিভিশন করলে সহজেই মনে থাকবে! 📖`,
};

let nextId = 1;

export default function AIChatbot() {
  const { theme } = useTheme();
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: 'ai', content: 'আসসালামু আলাইকুম! আমি তোমার AI শিক্ষক। 📚 SSC পরীক্ষার যেকোনো বিষয়ে আমাকে প্রশ্ন করো, আমি সহজ বাংলায় বুঝিয়ে দেবো!' },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const sendMessage = useCallback((text: string) => {
    if (!text.trim()) return;

    const userMsgId = nextId++;
    const userMsg: Message = { id: userMsgId, role: 'user', content: text.trim() };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const response = aiResponses[text.trim()] || aiResponses.default;
      const aiMsgId = nextId++;
      const aiMsg: Message = { id: aiMsgId, role: 'ai', content: response };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  }, []);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <AnimatePresence>
          {messages.map(msg => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
            >
              <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                msg.role === 'ai'
                  ? 'bg-gradient-to-br from-neon-500 to-neon-700'
                  : 'bg-gradient-to-br from-purple-500 to-pink-500'
              }`}>
                {msg.role === 'ai' ? <Bot size={16} className="text-white" /> : <User size={16} className="text-white" />}
              </div>
              <div className={`max-w-[80%] p-3 rounded-2xl text-sm whitespace-pre-line leading-relaxed ${
                msg.role === 'ai'
                  ? theme === 'dark' ? 'glass-card text-white/90' : 'glass-card-light text-navy-800'
                  : 'btn-neon text-white'
              }`}>
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {isTyping && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex gap-3">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-neon-500 to-neon-700 flex items-center justify-center">
              <Bot size={16} className="text-white" />
            </div>
            <div className={`p-3 rounded-2xl ${theme === 'dark' ? 'glass-card' : 'glass-card-light'}`}>
              <div className="flex gap-1">
                {[0, 1, 2].map(i => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 rounded-full bg-neon-500"
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 space-y-3">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {quickReplies.map(reply => (
            <button
              key={reply}
              onClick={() => sendMessage(reply)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                theme === 'dark'
                  ? 'bg-white/5 text-neon-300 border border-neon-500/20 hover:bg-neon-500/10'
                  : 'bg-blue-50 text-neon-700 border border-blue-200 hover:bg-blue-100'
              }`}
            >
              {reply}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && sendMessage(input)}
            placeholder="তোমার প্রশ্ন লেখো..."
            className={`flex-1 px-4 py-3 rounded-2xl text-sm ${
              theme === 'dark'
                ? 'bg-white/5 border border-white/10 text-white placeholder:text-white/30 focus:border-neon-500/50'
                : 'bg-white border border-navy-200 text-navy-900 placeholder:text-navy-300 focus:border-neon-500'
            } outline-none transition-colors`}
          />
          <motion.button
            onClick={() => sendMessage(input)}
            className="btn-neon p-3 rounded-2xl text-white"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Send size={20} />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
