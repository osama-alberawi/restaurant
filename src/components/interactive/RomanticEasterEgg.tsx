"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Particle {
  id: string;
  emoji: string;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  duration: number;
  delay: number;
}

const EMOJIS = ["❤️", "🌹", "🌷", "💖", "🌸", "💕", "✨"];

export function RomanticEasterEgg() {
  const [isOpen, setIsOpen] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [showMessage, setShowMessage] = useState(false);

  const triggerSurprise = () => {
    if (isShaking) return;

    // 1. Trigger shake
    setIsShaking(true);
    
    // 2. Open box & light up shortly after shake start
    setTimeout(() => {
      setIsShaking(false);
      setIsOpen(true);
      setShowMessage(true);

      // 3. Generate dynamic particles
      const newParticles: Particle[] = [];
      const particleCount = 32;

      for (let i = 0; i < particleCount; i++) {
        // Distribute spread in a wide 360-degree arc angled upwards
        const angle = -160 + Math.random() * 160; // -160deg to 0deg (upwards fan)
        const angleRad = (angle * Math.PI) / 180;
        const distance = 140 + Math.random() * 450; // Spread across screen

        newParticles.push({
          id: `${Date.now()}-${i}-${Math.random()}`,
          emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
          x: Math.cos(angleRad) * distance,
          y: Math.sin(angleRad) * distance,
          scale: 0.7 + Math.random() * 0.9,
          rotation: -180 + Math.random() * 360,
          duration: 2.8 + Math.random() * 1.2,
          delay: Math.random() * 0.3,
        });
      }

      setParticles(newParticles);

      // Clean up particles after animation completes (~4.2s)
      setTimeout(() => {
        setParticles([]);
      }, 4500);
    }, 400);
  };

  const handleCloseMessage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowMessage(false);
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-5 left-5 z-[9999] sm:bottom-8 sm:left-8 pointer-events-auto select-none">
      {/* Particle Explosion Canvas Overlay (does not block clicks) */}
      <div className="absolute inset-0 pointer-events-none overflow-visible z-50">
        <AnimatePresence>
          {particles.map((p) => (
            <motion.span
              key={p.id}
              initial={{
                opacity: 0,
                scale: 0.2,
                x: 0,
                y: 0,
                rotate: 0,
              }}
              animate={{
                opacity: [0, 1, 1, 0.8, 0],
                scale: [0.2, p.scale, p.scale * 1.1, p.scale * 0.9],
                x: p.x,
                y: p.y,
                rotate: p.rotation,
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                ease: [0.16, 1, 0.3, 1], // Smooth physics ease-out
                times: [0, 0.15, 0.6, 0.85, 1],
              }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl sm:text-3xl drop-shadow-[0_2px_10px_rgba(200,90,50,0.5)]"
            >
              {p.emoji}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>

      {/* Romantic Message Card Reveal */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="absolute bottom-16 left-0 sm:left-0 mb-2 w-72 sm:w-80 rounded-2xl bg-[#0E1416]/95 backdrop-blur-xl border border-[#C85A32]/60 p-5 shadow-[0_10px_40px_rgba(200,90,50,0.35)] text-center rtl:text-right ltr:text-left overflow-hidden z-40"
            dir="rtl"
          >
            {/* Subtle Inner Warm Light Glow */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-[#C85A32]/20 via-rose-500/10 to-amber-500/20 blur-xl -z-10 pointer-events-none" />

            {/* Header & Close Action */}
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#C85A32] font-semibold">
                  SURPRISE // رسالة خاصة
                </span>
              </div>
              <button
                onClick={handleCloseMessage}
                className="w-6 h-6 rounded-full border border-white/20 text-stone-300 hover:text-white hover:border-white text-xs flex items-center justify-center transition-colors"
                aria-label="إغلاق"
              >
                ✕
              </button>
            </div>

            {/* Main Romantic Declaration Message */}
            <div className="py-2 space-y-1.5 text-center">
              <motion.h4
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-2xl sm:text-3xl font-black text-white tracking-normal drop-shadow-[0_2px_12px_rgba(200,90,50,0.4)]"
              >
                بحبك يا رنيم ❤️
              </motion.h4>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-sm text-[#EAE6DF] font-medium leading-relaxed mt-1"
              >
                بين كل هالجمال عيونك هي أكثر إشي بحبه ❤️
              </motion.p>
            </div>

            {/* Footnote Decoration */}
            <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-center gap-1.5 text-[10px] font-mono text-[#8B9B9E]">
              <span>🌹</span>
              <span>صُنعت بكل حب خصيصاً لكِ</span>
              <span>✨</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Interactive Gift Box Element */}
      <motion.button
        onClick={triggerSurprise}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        animate={
          isShaking
            ? {
                rotate: [0, -12, 12, -10, 10, -5, 5, 0],
                transition: { duration: 0.4 },
              }
            : {
                y: [0, -4, 0],
                transition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
        }
        className="relative group p-3 rounded-2xl bg-[#151F22]/90 backdrop-blur-md border border-[#C85A32]/40 shadow-[0_4px_20px_rgba(200,90,50,0.25)] hover:border-[#C85A32] hover:shadow-[0_6px_25px_rgba(200,90,50,0.45)] transition-all duration-300 flex items-center justify-center focus:outline-none"
        title="مفاجأة سريّة"
        aria-label="مفاجأة رنيم"
      >
        {/* Soft Ambient Warm Light Glow (Pulsing Behind Box) */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#C85A32]/30 to-amber-400/20 blur-md opacity-60 group-hover:opacity-100 transition-opacity" />

        {/* Gift Box Graphic (SVG) */}
        <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center">
          {/* Animated Lid */}
          <motion.svg
            animate={isOpen ? { y: -8, rotate: -15, opacity: 0.9 } : { y: 0, rotate: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="absolute top-0 w-8 h-3.5 text-[#C85A32] z-10 filter drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]"
            viewBox="0 0 32 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Lid Base */}
            <rect x="2" y="5" width="28" height="7" rx="1.5" fill="#C85A32" stroke="#F4F1EA" strokeWidth="1" />
            {/* Ribbon Bow */}
            <path
              d="M12 5C12 3 13.5 1.5 16 1.5C18.5 1.5 20 3 20 5"
              stroke="#F4F1EA"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M16 1.5C14 0.5 11 1 11 3.5C11 5 13.5 5 16 5C18.5 5 21 5 21 3.5C21 1 18 0.5 16 1.5Z"
              fill="#EAE6DF"
            />
          </motion.svg>

          {/* Box Container */}
          <svg
            className="w-8 h-8 text-[#EAE6DF]"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Box Body */}
            <rect x="4" y="11" width="24" height="17" rx="2" fill="#1E2B2E" stroke="#C85A32" strokeWidth="1.5" />
            {/* Vertical Ribbon */}
            <rect x="14" y="11" width="4" height="17" fill="#C85A32" />
            {/* Horizontal Ribbon Highlight */}
            <line x1="4" y1="18" x2="28" y2="18" stroke="#C85A32" strokeWidth="1" strokeDasharray="2 2" />
          </svg>

          {/* Warm Rays / Glow from inside when opened */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: [0, 1, 0.8], scale: [0.5, 1.4, 1.2] }}
                exit={{ opacity: 0 }}
                className="absolute -top-4 inset-x-0 h-10 bg-gradient-to-t from-[#C85A32] via-amber-300 to-transparent blur-md rounded-full pointer-events-none"
              />
            )}
          </AnimatePresence>
        </div>

        {/* Small subtle badge pulse indicator */}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#C85A32]"></span>
          </span>
        )}
      </motion.button>
    </div>
  );
}
