"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValueEvent,
  AnimatePresence,
} from "framer-motion";
import { ATMOSPHERE_SPACES } from "@/data/restaurant-data";
import { useLanguage } from "@/context/LanguageContext";

export function AtmosphereSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { lang, t, formatNumber } = useLanguage();

  // Controlled scroll track across the pinned stage
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Physical damped spring to guarantee smooth, jitter-free scroll choreography
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.6,
  });

  // Synchronize active index with continuous scroll travel across the 4 spaces
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    let idx = 0;
    if (latest < 0.25) idx = 0;
    else if (latest < 0.50) idx = 1;
    else if (latest < 0.75) idx = 2;
    else idx = 3;

    if (idx !== activeIndex) {
      setActiveIndex(idx);
    }
  });

  // Continuous physical transforms for each of the 4 images
  // Image 01: Monolith Salon
  const img0Opacity = useTransform(smoothProgress, [0.0, 0.20, 0.28], [1, 1, 0]);
  const img0Scale = useTransform(smoothProgress, [0.0, 0.20, 0.28], [1, 1, 0.94]);
  const img0Y = useTransform(smoothProgress, [0.0, 0.20, 0.28], [0, 0, -22]);

  // Image 02: Fire Counter
  const img1Opacity = useTransform(smoothProgress, [0.18, 0.27, 0.45, 0.53], [0, 1, 1, 0]);
  const img1Scale = useTransform(smoothProgress, [0.18, 0.27, 0.45, 0.53], [1.06, 1, 1, 0.94]);
  const img1Y = useTransform(smoothProgress, [0.18, 0.27, 0.45, 0.53], [24, 0, 0, -22]);

  // Image 03: Obsidian Alcove
  const img2Opacity = useTransform(smoothProgress, [0.43, 0.52, 0.70, 0.78], [0, 1, 1, 0]);
  const img2Scale = useTransform(smoothProgress, [0.43, 0.52, 0.70, 0.78], [1.06, 1, 1, 0.94]);
  const img2Y = useTransform(smoothProgress, [0.43, 0.52, 0.70, 0.78], [24, 0, 0, -22]);

  // Image 04: Canyon Terrace
  const img3Opacity = useTransform(smoothProgress, [0.68, 0.77, 1.00], [0, 1, 1]);
  const img3Scale = useTransform(smoothProgress, [0.68, 0.77, 1.00], [1.06, 1, 1]);
  const img3Y = useTransform(smoothProgress, [0.68, 0.77, 1.00], [24, 0, 0]);

  const imageTransforms = [
    { opacity: img0Opacity, scale: img0Scale, y: img0Y },
    { opacity: img1Opacity, scale: img1Scale, y: img1Y },
    { opacity: img2Opacity, scale: img2Scale, y: img2Y },
    { opacity: img3Opacity, scale: img3Scale, y: img3Y },
  ];

  // Jump smoothly to a specific perspective when clicking index or preview
  const handleSelectSpace = (idx: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const containerTop = rect.top + scrollTop;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetRatio = (idx + 0.5) / ATMOSPHERE_SPACES.length;
    const targetY = containerTop + totalScrollable * targetRatio;
    window.scrollTo({ top: targetY, behavior: "smooth" });
  };

  const activeSpace = ATMOSPHERE_SPACES[activeIndex] || ATMOSPHERE_SPACES[0];
  const nextSpace =
    activeIndex < ATMOSPHERE_SPACES.length - 1
      ? ATMOSPHERE_SPACES[activeIndex + 1]
      : null;

  return (
    <section
      id="atmosphere"
      ref={containerRef}
      className="relative w-full h-[220vh] text-[#EAE6DF] bg-[#0E1416]"
    >
      {/* Intrinsic Nocturnal Ground Canvas */}
      <div className="absolute inset-0 bg-[#0E1416] -z-20 shadow-2xl" />

      {/* Pinned Stage: Standard Single Viewport Stage Scale (Matching Visit & Hero) */}
      <div className="sticky top-0 h-[100svh] min-h-[100svh] w-full flex flex-col justify-start pt-20 sm:pt-24 pb-4 px-6 sm:px-8 lg:px-12 overflow-hidden z-10">
        <div className="max-w-7xl mx-auto w-full rtl:text-right ltr:text-left flex flex-col justify-between flex-1 min-h-0 py-2">
          
          {/* 1. Header: Chapter Marker & Minimal Editorial Index */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div className="flex items-center gap-4">
              <span className="text-xs font-mono tracking-widest text-[#C85A32] uppercase font-bold">
                {t("الفصل // 03", "CHAPTER // 03")}
              </span>
              <div className="h-[1px] w-10 bg-white/20 hidden sm:block" />
              <span className="text-xs text-[#EAE6DF]/70 font-serif uppercase tracking-widest">
                {t("المكان والسكينة", "Atmosphere & Solitude")}
              </span>
            </div>

            {/* Minimal Editorial Index (01 02 03 04) */}
            <div className="flex items-center gap-6 sm:gap-8 font-mono text-xs">
              {ATMOSPHERE_SPACES.map((space, idx) => {
                const isActive = activeIndex === idx;
                return (
                  <button
                    key={space.id}
                    type="button"
                    onClick={() => handleSelectSpace(idx)}
                    className="group relative pb-1.5 transition-all flex items-baseline gap-1.5 focus:outline-none"
                    aria-label={`Select space ${idx + 1}`}
                  >
                    <span
                      className={`font-bold transition-colors ${
                        isActive
                          ? "text-[#C85A32]"
                          : "text-[#8B9B9E]/60 group-hover:text-white"
                      }`}
                    >
                      {formatNumber(`0${idx + 1}`)}
                    </span>
                    <span
                      className={`text-[10px] tracking-widest uppercase hidden md:inline transition-colors ${
                        isActive
                          ? "text-white font-semibold"
                          : "text-[#8B9B9E]/60 group-hover:text-[#EAE6DF]"
                      }`}
                    >
                      {lang === "ar" ? space.tag : (space.tagEn || space.tag)}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="atmosphereActiveLine"
                        className="absolute bottom-0 inset-x-0 h-[2px] bg-[#C85A32]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Headline & Stage Subtitle */}
          <div className="my-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <h2 className={`text-2xl sm:text-4xl lg:text-5xl text-white ${
                lang === "ar"
                  ? "font-extrabold leading-[1.3] tracking-normal"
                  : "font-black tracking-tight leading-tight"
              }`}>
                {lang === "ar" ? "سكينة المكان:" : "The Sanctuary:"}{" "}
                <span className="text-[#C85A32]">
                  {lang === "ar" ? "ضوء الحجر وظلال المساء" : "Light of Stone & Evening Shadows"}
                </span>
              </h2>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#8B9B9E]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
              <span className="tracking-widest uppercase font-medium">
                {t("معرض معماري حي • ٤ أركان", "LIVING ARCHITECTURAL GALLERY • 4 SANCTUARIES")}
              </span>
            </div>
          </div>

          {/* 3. Living Gallery: Spatial Sequence Composition */}
          
          {/* DESKTOP COMPOSITION (hidden lg:grid) */}
          <div className="hidden lg:grid grid-cols-12 gap-10 items-center my-auto">
            {/* Dominant Visual Window (Cols 1-8) */}
            <div className="col-span-8 relative aspect-[16/10] w-full overflow-hidden border border-white/15 shadow-2xl bg-[#151F22]">
              {ATMOSPHERE_SPACES.map((space, idx) => {
                const tr = imageTransforms[idx];
                return (
                  <motion.div
                    key={space.id}
                    style={{
                      opacity: tr.opacity,
                      scale: tr.scale,
                      y: tr.y,
                    }}
                    className="absolute inset-0 will-change-transform"
                  >
                    <Image
                      src={space.image}
                      alt={lang === "ar" ? space.titleAr : space.titleEn}
                      fill
                      sizes="950px"
                      priority={idx === 0}
                      className="object-cover filter contrast-110 brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  </motion.div>
                );
              })}

              {/* Architectural Registration Brackets */}
              <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#C85A32]/60 pointer-events-none z-10" />
              <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#C85A32]/60 pointer-events-none z-10" />
              <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-[#C85A32]/60 pointer-events-none z-10" />
              <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#C85A32]/60 pointer-events-none z-10" />

              {/* Inset Badge Overlay */}
              <div className="absolute top-4 rtl:right-4 ltr:left-4 z-10 px-3 py-1 bg-black/70 border border-white/15 text-[#EAE6DF] text-[10px] font-mono tracking-widest uppercase">
                {lang === "ar" ? activeSpace.tag : (activeSpace.tagEn || activeSpace.tag)}
              </div>

              <div className="absolute bottom-4 rtl:right-4 ltr:left-4 z-10 text-[11px] font-mono text-white/95 bg-black/70 px-3 py-1 backdrop-blur-sm border border-white/10">
                SANCTUARY ELEVATION // {formatNumber(`0${activeIndex + 1}`)}
              </div>
            </div>

            {/* Side Column: Dynamic Participatory Typography & Secondary Spatial Preview */}
            <div className="col-span-4 flex flex-col justify-between space-y-8 rtl:text-right ltr:text-left">
              {/* Active Space Information with Directional Monograph Transitions */}
              <div className="min-h-[190px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeSpace.id}
                    initial={{ opacity: 0, y: 16, filter: "blur(2px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -14, filter: "blur(2px)" }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[#C85A32] font-bold">
                        {formatNumber(`0${activeIndex + 1}`)} / {formatNumber("04")}
                      </span>
                      <div className="h-px w-6 bg-white/20" />
                      <span className="text-[10px] font-mono tracking-widest text-[#8B9B9E] uppercase">
                        {lang === "ar" ? activeSpace.tag : (activeSpace.tagEn || activeSpace.tag)}
                      </span>
                    </div>

                    <h3 className={`text-2xl sm:text-3xl text-white ${
                      lang === "ar"
                        ? "font-extrabold leading-[1.3] tracking-normal"
                        : "font-black tracking-tight leading-snug"
                    }`}>
                      {lang === "ar" ? activeSpace.titleAr : activeSpace.titleEn}
                    </h3>

                    <p className={`text-xs sm:text-sm text-[#C85A32] ${lang === "ar" ? "font-medium" : "font-serif italic"}`}>
                      {lang === "ar" ? activeSpace.subtitleAr : activeSpace.subtitleEn}
                    </p>

                    <p className="text-xs sm:text-sm text-[#EAE6DF]/80 font-light leading-relaxed pt-1">
                      {lang === "ar"
                        ? activeSpace.descriptionAr
                        : (activeSpace.descriptionEn || activeSpace.descriptionAr)}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Secondary Spatial Preview */}
              <div className="pt-5 border-t border-white/10">
                {nextSpace ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-widest text-[#8B9B9E]">
                      <span>{t("المشهد القادم في المسار", "NEXT PERSPECTIVE")}</span>
                      <span className="text-[#C85A32] font-bold">
                        {formatNumber(`0${activeIndex + 2}`)} // {formatNumber("04")}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleSelectSpace(activeIndex + 1)}
                      className="group w-full text-start flex items-center gap-3 p-2 hover:bg-white/[0.04] transition-colors focus:outline-none border border-transparent hover:border-white/10 rounded-sm"
                    >
                      {/* Cropped Architectural Fragment */}
                      <div className="relative w-20 h-14 shrink-0 overflow-hidden border border-white/15 bg-[#151F22]">
                        <Image
                          src={nextSpace.image}
                          alt={lang === "ar" ? nextSpace.titleAr : nextSpace.titleEn}
                          fill
                          sizes="100px"
                          className="object-cover filter contrast-110 brightness-90 group-hover:scale-108 transition-transform duration-500 ease-out"
                        />
                        <div className="absolute inset-0 bg-black/30 group-hover:opacity-0 transition-opacity" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white group-hover:text-[#C85A32] transition-colors truncate">
                          {lang === "ar" ? nextSpace.titleAr : nextSpace.titleEn}
                        </div>
                        <div className="text-[10px] font-mono text-[#8B9B9E] truncate mt-0.5">
                          {lang === "ar" ? nextSpace.tag : (nextSpace.tagEn || nextSpace.tag)}
                        </div>
                      </div>
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center justify-between text-[11px] font-mono text-[#8B9B9E] py-2">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
                      <span className="tracking-widest uppercase font-semibold text-white">
                        {t("اكتمال الأركان الأربعة", "ALL FOUR SANCTUARIES REVEALED")}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 text-[#C85A32]">
                      <span className="text-[10px] uppercase tracking-wider">{t("متابعة المسار", "CONTINUE")}</span>
                      <span>↓</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* MOBILE COMPOSITION (lg:hidden): Compact Spatial Stage */}
          <div className="lg:hidden flex flex-col justify-between space-y-4 my-auto">
            {/* Dominant Image Window */}
            <div className="relative aspect-[16/10] w-full overflow-hidden border border-white/15 shadow-lg bg-[#151F22]">
              {ATMOSPHERE_SPACES.map((space, idx) => {
                const tr = imageTransforms[idx];
                return (
                  <motion.div
                    key={space.id}
                    style={{
                      opacity: tr.opacity,
                      scale: tr.scale,
                      y: tr.y,
                    }}
                    className="absolute inset-0 will-change-transform"
                  >
                    <Image
                      src={space.image}
                      alt={lang === "ar" ? space.titleAr : space.titleEn}
                      fill
                      sizes="100vw"
                      priority={idx === 0}
                      className="object-cover filter contrast-110 brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  </motion.div>
                );
              })}

              <div className="absolute top-3 rtl:right-3 ltr:left-3 z-10 px-2 py-0.5 bg-black/70 border border-white/10 text-[#EAE6DF] text-[9px] font-mono tracking-widest uppercase">
                {lang === "ar" ? activeSpace.tag : (activeSpace.tagEn || activeSpace.tag)}
              </div>

              <div className="absolute bottom-3 rtl:left-3 ltr:right-3 z-10 text-[10px] font-mono text-white/95 bg-black/70 px-2 py-0.5 border border-white/10">
                {formatNumber(`0${activeIndex + 1}`)} / {formatNumber("04")}
              </div>
            </div>

            {/* Participatory Mobile Typography Block */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSpace.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="space-y-1.5 rtl:text-right ltr:text-left"
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-black text-white">
                    {lang === "ar" ? activeSpace.titleAr : activeSpace.titleEn}
                  </h3>
                  <span className="text-[10px] font-mono text-[#C85A32] font-bold">
                    {formatNumber(`0${activeIndex + 1}`)}
                  </span>
                </div>
                <p className="text-xs text-[#EAE6DF]/80 font-light line-clamp-2 leading-relaxed">
                  {lang === "ar"
                    ? activeSpace.descriptionAr
                    : (activeSpace.descriptionEn || activeSpace.descriptionAr)}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Subtle Mobile Next Preview Fragment */}
            {nextSpace ? (
              <button
                type="button"
                onClick={() => handleSelectSpace(activeIndex + 1)}
                className="w-full flex items-center justify-between p-2 border-t border-white/10 text-start hover:bg-white/[0.04] transition-colors focus:outline-none"
              >
                <div className="flex items-center gap-2.5">
                  <div className="relative w-12 h-9 shrink-0 overflow-hidden border border-white/15">
                    <Image
                      src={nextSpace.image}
                      alt={lang === "ar" ? nextSpace.titleAr : nextSpace.titleEn}
                      fill
                      sizes="60px"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-[11px] font-semibold text-white truncate">
                    {lang === "ar" ? nextSpace.titleAr : nextSpace.titleEn}
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#C85A32] shrink-0 font-bold">
                  {t("التالي", "NEXT")} →
                </span>
              </button>
            ) : (
              <div className="border-t border-white/10 pt-2 flex items-center justify-between text-[10px] font-mono text-[#8B9B9E]">
                <span className="uppercase">{t("اكتمال الأركان", "Sanctuary Culmination")}</span>
                <span className="text-[#C85A32]">↓ {t("انتقل للحرفة", "Chef")}</span>
              </div>
            )}
          </div>

          {/* 4. Footer Carrier Bridge: Guides continuous descent into Chapter 04 (Chef) */}
          <div className="border-t border-white/10 pt-3 flex items-center justify-between text-xs font-mono text-[#8B9B9E]">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
              <span className="tracking-widest uppercase font-semibold text-white text-[11px]">
                {t("فلسفة المطبخ واليد الصانعة", "Hearth Philosophy & Master Terroir")}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[#8B9B9E] text-[11px]">
              <span className="font-medium">{t("كواليس الحرفة الحية", "Behind the Embers")}</span>
              <span className="text-[#C85A32]">↓</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
