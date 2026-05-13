'use client';

import { useTheme } from '@/contexts/ThemeContext';

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer className={`py-12 px-4 border-t relative z-10 ${
      theme === 'dark' ? 'border-white/10' : 'border-blue-100'
    }`}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-neon-500 to-neon-700 flex items-center justify-center text-white font-bold">ন</div>
              <span className={`font-bold text-lg ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>নিয়ম</span>
            </div>
            <p className={`text-sm ${theme === 'dark' ? 'text-white/40' : 'text-navy-400'}`}>
              SSC 2028 পরীক্ষার্থীদের AI-চালিত স্টাডি প্ল্যাটফর্ম
            </p>
          </div>
          <div>
            <h4 className={`font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>ফিচারস</h4>
            <div className="flex flex-col gap-2">
              {['রুটিন মেকার', 'AI শিক্ষক', 'কাউন্টডাউন', 'অ্যানালিটিক্স'].map(item => (
                <span key={item} className={`text-sm ${theme === 'dark' ? 'text-white/40' : 'text-navy-400'}`}>{item}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className={`font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>বিষয়সমূহ</h4>
            <div className="flex flex-col gap-2">
              {['গণিত', 'পদার্থবিজ্ঞান', 'রসায়ন', 'জীববিজ্ঞান'].map(item => (
                <span key={item} className={`text-sm ${theme === 'dark' ? 'text-white/40' : 'text-navy-400'}`}>{item}</span>
              ))}
            </div>
          </div>
          <div>
            <h4 className={`font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-navy-900'}`}>সাপোর্ট</h4>
            <div className="flex flex-col gap-2">
              {['সাহায্য', 'যোগাযোগ', 'গোপনীয়তা', 'শর্তাবলী'].map(item => (
                <span key={item} className={`text-sm ${theme === 'dark' ? 'text-white/40' : 'text-navy-400'}`}>{item}</span>
              ))}
            </div>
          </div>
        </div>
        <div className={`text-center text-sm pt-6 border-t ${
          theme === 'dark' ? 'border-white/10 text-white/30' : 'border-blue-100 text-navy-400'
        }`}>
          © ২০২৫ নিয়ম — বাংলাদেশের শিক্ষার্থীদের জন্য তৈরি ❤️
        </div>
      </div>
    </footer>
  );
}
