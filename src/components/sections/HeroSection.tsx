"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { RESTAURANT_DATA } from "@/data/restaurant-data";

import { useLanguage } from "@/context/LanguageContext";

interface HeroSectionProps {
  onOpenReservation: () => void;
}

export function HeroSection({ onOpenReservation }: HeroSectionProps) {
  const containerRef = useRef<HTMLElement>(null);
  const { lang, t, formatNumber } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentY = useTransform(scrollYProgress, [0, 0.7, 1], [0, 80, 160]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.45, 0.9], [1, 0.85, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.98, 0.92]);
  const titleTracking = useTransform(scrollYProgress, [0, 1], ["-0.02em", "0.06em"]);

  const scrollToNext = () => {
    const el = document.getElementById("philosophy");
    if (el) {
      const top = el.offsetTop;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-screen min-h-[100svh] flex flex-col justify-end overflow-hidden -mx-[calc((100vw-100%)/2)]"
    >
      {/* 100vw Full-Bleed Cinematic Background Image Canvas */}
      <motion.div
        style={{ scale: imageScale, y: imageY }}
        className="absolute inset-0 w-full h-full -z-10 will-change-transform"
      >
        <Image
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=90"
          alt="Culinary Verdigris Presentation"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter brightness-[0.52] contrast-125 saturate-95"
        />
        {/* Deep Slate Verdigris Gradient Overlay bleeding into Philosophy */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1416] via-[#0E1416]/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80" />
        
        {/* T1 Carrying Monolith: Soft gradient wash extending down to bridge into Philosophy */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-b from-transparent to-[#151F22]/90 pointer-events-none" />
      </motion.div>

      {/* Pure Sculptural Typography anchored to max-w-7xl global grid */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity, scale: contentScale }}
        className="w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pb-6 sm:pb-10 lg:pb-12 pt-24 sm:pt-28 [@media(max-height:760px)]:pt-20 [@media(max-height:760px)]:pb-6 will-change-transform"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-8 items-end">
          {/* Monumental Headline */}
          <div className="lg:col-span-8 rtl:text-right ltr:text-left space-y-2 sm:space-y-3">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              {/* Geographic Coordinates Docked neatly on Mobile */}
              <div className="inline-flex lg:hidden items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-stone-300">
                <span className="text-[#C85A32]">◈</span>
                <span>{formatNumber(RESTAURANT_DATA.location.coordinatesText)}</span>
              </div>
            </div>

            <motion.h1
              style={{ letterSpacing: lang === "ar" ? "normal" : titleTracking }}
              className="text-[#F4F1EA] will-change-transform tracking-normal"
            >
              {/* Subtitle / Line 0 */}
              <span
                className={`block ${
                  lang === "ar"
                    ? "font-normal text-stone-300/85 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-[1.3] mb-2 sm:mb-3 lg:mb-4 [@media(max-height:720px)]:text-2xl"
                    : "font-light text-stone-300/85 text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-[1.3] mb-2 sm:mb-3 lg:mb-4 tracking-wide [@media(max-height:720px)]:text-2xl"
                }`}
              >
                {lang === "ar" ? "حيث تلتقي الأرض" : "WHERE THE DESERT"}
              </span>

              {/* Monumental 3-Line Graphic Block: Large, Bold, Tight, and Impactful */}
              {lang === "ar" ? (
                <div className="flex flex-col font-black text-5xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl leading-[1.04] tracking-tight text-white [@media(max-height:720px)]:text-7xl [@media(max-height:720px)]:leading-[1.04] [@media(max-height:650px)]:text-6xl">
                  <span>بشغف</span>
                  <span>ينكشف</span>
                  <span>والأفق</span>
                </div>
              ) : (
                <div className="flex flex-col font-black text-5xl sm:text-7xl md:text-8xl lg:text-8xl xl:text-9xl leading-[0.98] tracking-tight text-white [@media(max-height:720px)]:text-7xl [@media(max-height:720px)]:leading-[0.98] [@media(max-height:650px)]:text-6xl">
                  <span>MEETS</span>
                  <span>FLAME &</span>
                  <span>HORIZON</span>
                </div>
              )}
            </motion.h1>
          </div>

          {/* Minimalist Action & Desktop Geographic Coordinates */}
          <div className="lg:col-span-4 flex flex-col items-start rtl:lg:items-end ltr:lg:items-start justify-between space-y-3 sm:space-y-6 [@media(max-height:760px)]:space-y-3 rtl:text-right ltr:text-left">
            <div className="hidden lg:block space-y-1 rtl:text-right ltr:text-left">
              <span className="text-[10px] font-mono text-stone-400 tracking-[0.25em] uppercase block">
                TERROIR // AMMAN
              </span>
              <span className="text-xs font-mono text-[#EAE6DF] block">
                {formatNumber(RESTAURANT_DATA.location.coordinatesText)}
              </span>
            </div>

            {/* Thumb-Zone Booking Action */}
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onOpenReservation}
                className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-3.5 rounded-full bg-[#C85A32] text-white font-bold text-xs uppercase tracking-wider hover:brightness-110 active:scale-95 transition-all shadow-[0_8px_25px_rgba(200,90,50,0.35)]"
              >
                {t("احجز مقعدك في الأمسية", "RESERVE YOUR SEAT")}
              </button>

              <button
                onClick={scrollToNext}
                className="hidden sm:flex items-center justify-center p-3 sm:p-3.5 rounded-full border border-white/20 text-[#F4F1EA] hover:border-white hover:text-white transition-colors"
                aria-label={t("الانتقال إلى الفصل التالي", "Scroll to next chapter")}
              >
                <div className="w-4 h-4 flex flex-col justify-between items-center py-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
                  <span className="w-0.5 h-2 bg-current" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
