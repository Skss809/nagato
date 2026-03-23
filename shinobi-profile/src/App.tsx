import { motion } from 'motion/react';
import { Youtube, Instagram, Send, Atom, Tv, Quote } from 'lucide-react';
import React from 'react';

const Shuriken = ({ className, style }: { className?: string, style?: React.CSSProperties }) => (
  <svg
    viewBox="0 0 100 100"
    fill="currentColor"
    className={`animate-spin ${className || ''}`}
    style={{ ...style }}
  >
    <path d="M50 5L60 40L95 50L60 60L50 95L40 60L5 50L40 40Z" />
    <circle cx="50" cy="50" r="10" fill="#09090b" />
    <circle cx="50" cy="50" r="14" fill="none" stroke="currentColor" strokeWidth="3" />
  </svg>
);

const BackgroundShurikens = () => {
  const shurikens = React.useMemo(() => Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    size: Math.random() * 50 + 20,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    duration: Math.random() * 5 + 3,
    opacity: Math.random() * 0.15 + 0.05,
    reverse: Math.random() > 0.5,
  })), []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {shurikens.map((s) => (
        <Shuriken
          key={s.id}
          className="absolute text-red-600"
          style={{
            width: s.size,
            height: s.size,
            top: s.top,
            left: s.left,
            opacity: s.opacity,
            animationDuration: `${s.duration}s`,
            animationDirection: s.reverse ? 'reverse' : 'normal',
          }}
        />
      ))}
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 sm:p-8 font-sans text-zinc-100 overflow-hidden">
      {/* Infinite Tsukuyomi Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/tsukuyomi.jpeg")' }}
      />
      <div className="absolute inset-0 z-0 bg-red-950/30 mix-blend-multiply" />
      <div className="absolute inset-0 z-0 bg-zinc-950/70 backdrop-blur-[2px]" />

      <BackgroundShurikens />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 max-w-2xl w-full bg-zinc-900/80 backdrop-blur-xl border-2 border-red-600/30 rounded-3xl p-6 sm:p-10 shadow-[0_0_40px_rgba(239,68,68,0.15)]"
      >
        {/* Profile Header */}
        <div className="flex flex-col items-center mb-8">
          <motion.div 
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 120, damping: 15 }}
            className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-red-500 overflow-hidden mb-6 relative shadow-[0_0_40px_rgba(239,68,68,0.5)]"
          >
            <img 
              src="/nagato.jpeg" 
              alt="Nagato Profile" 
              className="w-full h-full object-cover" 
            />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="font-display text-4xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-red-600 to-red-400 tracking-wider text-center drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]"
          >
            Pain_2069
          </motion.h1>
        </div>

        {/* Quote */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="relative bg-zinc-950/60 p-6 rounded-2xl border border-zinc-800/80 mb-10 italic text-zinc-300 text-center shadow-inner"
        >
          <Quote className="absolute top-3 left-3 w-5 h-5 text-red-500/20" />
          <p className="text-lg sm:text-xl relative z-10 font-medium tracking-wide">
            "I don't know what I'm doing but trying to understand myself,..."
          </p>
          <Quote className="absolute bottom-3 right-3 w-5 h-5 text-red-500/20 rotate-180" />
        </motion.div>

        {/* About */}
        <div className="space-y-4 mb-10">
          <motion.div 
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-5 bg-zinc-800/30 p-5 rounded-2xl border border-zinc-700/50 hover:bg-zinc-800/50 transition-colors"
          >
            <div className="p-3 bg-red-500/10 rounded-xl text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
              <Atom className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl text-zinc-100">Science & Tech Enthusiast</h3>
              <p className="text-zinc-400 text-sm sm:text-base mt-1">Always exploring the mechanics of our universe.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center gap-5 bg-zinc-800/30 p-5 rounded-2xl border border-zinc-700/50 hover:bg-zinc-800/50 transition-colors"
          >
            <div className="p-3 bg-red-500/10 rounded-xl text-red-400 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
              <Tv className="w-7 h-7" />
            </div>
            <div>
              <h3 className="font-bold text-lg sm:text-xl text-zinc-100">Anime Watcher</h3>
              <p className="text-zinc-400 text-sm sm:text-base mt-1">Enjoying the art and stories of anime in my free time.</p>
            </div>
          </motion.div>
        </div>

        {/* Links */}
        <div className="space-y-6">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-display text-2xl text-center text-zinc-400 tracking-wide"
          >
            Connect With Me
          </motion.h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              href="https://youtube.com/@skssworld"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, backgroundColor: "rgba(239, 68, 68, 0.05)" }}
              whileTap={{ scale: 0.98 }}
              className="sm:col-span-2 flex flex-col items-center justify-center gap-2 p-5 rounded-2xl border-2 border-red-500/30 bg-zinc-900/50 hover:border-red-500 transition-all group"
            >
              <div className="flex items-center gap-3 text-red-500 group-hover:text-red-400">
                <Youtube className="w-7 h-7" />
                <span className="font-bold text-xl">YouTube</span>
              </div>
              <p className="text-zinc-400 text-sm text-center">Subscribe to see and understand this universe</p>
            </motion.a>

            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              href="https://t.me/pain_2069"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, backgroundColor: "rgba(56, 189, 248, 0.05)" }}
              whileTap={{ scale: 0.97 }}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-sky-500/30 bg-zinc-900/50 hover:border-sky-500 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 bg-sky-500 text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-bl-xl text-zinc-950 shadow-sm">
                Mostly Active
              </div>
              <Send className="w-7 h-7 text-sky-500 group-hover:text-sky-400" />
              <div className="flex flex-col items-center">
                <span className="font-bold text-zinc-200 text-lg">Telegram</span>
                <span className="text-sky-500/70 text-sm font-medium">@pain_2069</span>
              </div>
            </motion.a>

            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              href="https://instagram.com/pain_2069"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03, backgroundColor: "rgba(236, 72, 153, 0.05)" }}
              whileTap={{ scale: 0.97 }}
              className="flex flex-col items-center gap-3 p-5 rounded-2xl border border-pink-500/30 bg-zinc-900/50 hover:border-pink-500 transition-all group"
            >
              <Instagram className="w-7 h-7 text-pink-500 group-hover:text-pink-400" />
              <div className="flex flex-col items-center">
                <span className="font-bold text-zinc-200 text-lg">Instagram</span>
                <span className="text-pink-500/70 text-sm font-medium">@pain_2069</span>
              </div>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
