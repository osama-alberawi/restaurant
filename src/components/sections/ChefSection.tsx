import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { CHEF_PHILOSOPHY } from "@/data/restaurant-data";
import { useLanguage } from "@/context/LanguageContext";

export function ChefSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { lang, t, formatNumber } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Bidirectional physical emergence & choreography:
  // - Enters with spatial lift and contrast reveal
  // - Portrait and overlapping banner move with differentiated parallax rhythm
  // - Clean exit handoff towards Visit section
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.4, 1, 1, 0.4]);
  const contentY = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [20, 0, 0, -20]);
  const portraitScale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.97, 1, 1, 0.98]);

  return (
    <div
      ref={containerRef}
      className="relative w-full min-h-[100svh] flex flex-col justify-center pt-20 pb-8 px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto rtl:text-right ltr:text-left will-change-transform"
    >
      {/* Intrinsic Nocturnal Slate Canvas: Guarantees 100% stable chiaroscuro contrast */}
      <div className="absolute inset-0 bg-[#0E1416] -z-10 shadow-2xl" />

      <motion.div style={{ y: contentY, opacity: sectionOpacity }} className="will-change-transform w-full">
        {/* Chapter Marker Header */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-mono tracking-widest text-[#C85A32] uppercase font-bold">
            {t("الفصل // 04", "CHAPTER // 04")}
          </span>
          <div className="h-[1px] w-12 bg-[#C85A32]/40" />
          <span className="text-xs text-[#EAE6DF]/70 font-serif uppercase tracking-widest">
            {t("الحرفة واليد الصانعة", "Artisanal Terroir & Master Craft")}
          </span>
        </div>

      {/* =================================================================== */}
      {/* MOBILE COMPOSITION (lg:hidden): Direct Monograph Composition        */}
      {/* =================================================================== */}
      <div className="lg:hidden space-y-6">
        {/* Chiaroscuro Portrait */}
        <div className="relative aspect-[4/3] max-h-[300px] border border-[#C85A32]/40 overflow-hidden shadow-2xl">
          <Image
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=800&q=85"
            alt="Head Chef Crafting"
            fill
            sizes="100vw"
            className="object-cover filter contrast-125 brightness-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1416] via-[#0E1416]/30 to-transparent" />

          {/* Corner Architectural Brackets */}
          <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#C85A32]/60 pointer-events-none" />
          <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#C85A32]/60 pointer-events-none" />

          {/* Artisan Monogram Seal */}
          <div className="absolute top-3 rtl:right-3 ltr:left-3 px-2 py-0.5 bg-black/60 border border-white/10 text-[9px] font-mono tracking-[0.25em] text-[#C85A32] uppercase">
            MASTER ATELIER // AMMAN
          </div>

          {/* Overlaid Inset Attribution Plate */}
          <div className="absolute bottom-3 inset-x-4 rtl:text-right ltr:text-left">
            <span className="text-[9px] font-mono text-[#C85A32] tracking-[0.2em] uppercase block font-semibold">
              {t(CHEF_PHILOSOPHY.roleAr, CHEF_PHILOSOPHY.roleEn || "EXECUTIVE CHEF & CO-FOUNDER")}
            </span>
            <h4 className="text-xl font-black text-white tracking-wide">
              {t(CHEF_PHILOSOPHY.authorAr, CHEF_PHILOSOPHY.authorEn || "Chef Tareq Al-Qasim")}
            </h4>
          </div>
        </div>

        {/* Narrative Statement & Quote */}
        <div className="space-y-2 rtl:text-right ltr:text-left">
          <p className="text-base sm:text-lg text-white font-medium leading-relaxed tracking-tight rtl:border-r-2 ltr:border-l-2 border-[#C85A32] rtl:pr-3 ltr:pl-3">
            &quot;{t(CHEF_PHILOSOPHY.quoteAr, CHEF_PHILOSOPHY.quoteEn || "")}&quot;
          </p>
          <p className="text-xs text-[#8B9B9E] font-light leading-relaxed pt-1">
            {t(CHEF_PHILOSOPHY.statementAr, CHEF_PHILOSOPHY.statementEn || "")}
          </p>
        </div>

        {/* The Artisan Manifesto (Pillars) */}
        <div className="border-t border-white/10 pt-4 space-y-3">
          <span className="text-[10px] font-mono text-[#C85A32] uppercase tracking-[0.25em] block font-semibold">
            {t("ميثاق الصانع وركائز الحرفة", "THE ARTISAN CHARTER")}
          </span>
          <div className="space-y-3 divide-y divide-white/10">
            {CHEF_PHILOSOPHY.pillars.map((pillar) => (
              <div key={pillar.index} className="pt-2.5 first:pt-0 rtl:text-right ltr:text-left">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-mono text-[#C85A32] font-bold">0{pillar.index}</span>
                  <span className="text-xs font-bold text-white tracking-wide">
                    {lang === "ar" ? pillar.titleAr : pillar.titleEn}
                  </span>
                </div>
                <p className="text-[11px] text-[#EAE6DF]/75 font-light mt-0.5 rtl:pr-5 ltr:pl-5 leading-relaxed">
                  {lang === "ar" ? pillar.descriptionAr : (pillar.descriptionEn || pillar.descriptionAr)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* =================================================================== */}
      {/* DESKTOP COMPOSITION (hidden lg:block): Artisan Human Monograph      */}
      {/* Calibrated 100svh: Portrait & Quote Side-by-Side + Visible Pillars  */}
      {/* =================================================================== */}
      <div className="hidden lg:block space-y-6">
        {/* Layer 1: Two Distinct Balanced Columns (NO overlap over face/lamps) */}
        <div className="w-full grid grid-cols-12 gap-8 items-center">
          {/* Chef Portrait: Column 1-6 */}
          <motion.div
            style={{ scale: portraitScale }}
            className="col-span-6 relative aspect-[16/10] max-h-[310px] border border-[#C85A32]/35 shadow-2xl overflow-hidden z-10"
          >
            <Image
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=1200&q=85"
              alt="Head Chef Crafting"
              fill
              sizes="600px"
              className="object-cover object-center filter contrast-125 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1416]/90 via-transparent to-black/30" />

            {/* Corner Architectural Brackets */}
            <div className="absolute top-3 left-3 w-3.5 h-3.5 border-t border-l border-[#C85A32] pointer-events-none" />
            <div className="absolute top-3 right-3 w-3.5 h-3.5 border-t border-r border-[#C85A32] pointer-events-none" />

            {/* Artisan Seal Watermark */}
            <div className="absolute top-4 rtl:right-4 ltr:left-4 px-2.5 py-0.5 bg-black/60 border border-white/15 text-[9px] font-mono tracking-[0.25em] text-[#C85A32] uppercase">
              MASTER ATELIER // AMMAN
            </div>

            {/* Inset Chef Attribution Plate */}
            <div className="absolute bottom-4 inset-x-5 rtl:text-right ltr:text-left flex items-end justify-between">
              <div>
                <span className="text-[9px] font-mono text-[#C85A32] tracking-[0.25em] uppercase block font-semibold">
                  {t(CHEF_PHILOSOPHY.roleAr, CHEF_PHILOSOPHY.roleEn || "EXECUTIVE CHEF & CO-FOUNDER")}
                </span>
                <h4 className="text-2xl font-black text-white tracking-wide mt-0.5">
                  {t(CHEF_PHILOSOPHY.authorAr, CHEF_PHILOSOPHY.authorEn || "Chef Tareq Al-Qasim")}
                </h4>
              </div>
              <span className="text-[10px] font-mono text-[#8B9B9E] tracking-widest uppercase opacity-70">
                PROVENANCE // 2026
              </span>
            </div>
          </motion.div>

          {/* Layer 2: Dedicated Quote & Manifesto Column (Clean, High Contrast, ZERO Overlap) */}
          <div className="col-span-6 rtl:text-right ltr:text-left space-y-4">
            {/* Fine terracotta hairline accent */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-0.5 bg-[#C85A32]" />
              <span className="text-xs font-mono text-[#C85A32] tracking-[0.2em] uppercase font-bold">
                {t("فلسفة الطهي على الحطب والجمر", "HEARTH & EMBER CULINARY CRAFT")}
              </span>
            </div>

            {/* Monograph Quote */}
            <p className="text-xl xl:text-2xl text-white font-serif font-medium leading-[1.4] tracking-tight">
              &quot;{t(CHEF_PHILOSOPHY.quoteAr, CHEF_PHILOSOPHY.quoteEn || "")}&quot;
            </p>

            {/* Supporting Monograph Statement */}
            <p className="text-xs xl:text-sm text-[#EAE6DF]/85 font-light leading-relaxed max-w-xl rtl:border-r-2 rtl:pr-4 ltr:border-l-2 ltr:pl-4 border-[#C85A32]/60">
              {t(CHEF_PHILOSOPHY.statementAr, CHEF_PHILOSOPHY.statementEn || "")}
            </p>

            <div className="pt-1 flex items-center gap-3 text-xs font-mono text-[#8B9B9E]">
              <span className="text-[#C85A32]">◈</span>
              <span className="tracking-widest uppercase text-[11px] text-[#EAE6DF]/90 font-medium">
                {t("تحضير يدوي طازج يومياً بكل إتقان", "HANDCRAFTED FRESH DAILY WITH DEDICATION")}
              </span>
            </div>
          </div>
        </div>

        {/* Layer 3: The Artisan Charter Manifesto (100% Fully Visible On Screen) */}
        <div className="border-t border-white/10 pt-4">
          <div className="flex items-center justify-between text-xs font-mono text-[#8B9B9E] mb-3">
            <span className="uppercase tracking-[0.25em] text-[#C85A32] font-semibold text-[11px]">
              {t("ميثاق الصانع وركائز الحرفة", "THE ARTISAN MANIFESTO & CRAFT TENETS")}
            </span>
            <span className="tracking-widest text-[10px]">CHAPTER // 04</span>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {CHEF_PHILOSOPHY.pillars.map((pillar) => (
              <div
                key={pillar.index}
                className="space-y-1.5 rtl:border-r rtl:pr-5 ltr:border-l ltr:pl-5 border-white/10 group rtl:text-right ltr:text-left"
              >
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-mono text-[#C85A32] font-bold">0{pillar.index}</span>
                  <span className="text-[10px] font-mono text-[#8B9B9E] uppercase tracking-widest">
                    {lang === "ar" ? pillar.titleEn : pillar.titleAr}
                  </span>
                </div>
                <h5 className="text-sm font-bold text-white tracking-wide group-hover:text-[#C85A32] transition-colors">
                  {lang === "ar" ? pillar.titleAr : pillar.titleEn}
                </h5>
                <p className="text-[11px] text-[#EAE6DF]/75 font-light leading-relaxed">
                  {lang === "ar" ? pillar.descriptionAr : (pillar.descriptionEn || pillar.descriptionAr)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Visual Carrier into Visit */}
      <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] font-mono text-[#8B9B9E]">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C85A32]" />
          <span className="tracking-widest uppercase text-[#EAE6DF]/70">
            {t("الاستقبال ومواعيد الحضور", "Guest Reception & Timings")}
          </span>
        </div>
        <div className="flex items-center gap-2 text-[#EAE6DF]/60">
          <span className="tracking-widest uppercase">{t("تفاصيل الحجز والوصول", "Reservation Details")}</span>
          <span className="text-[#C85A32]">↓</span>
        </div>
      </div>
      </motion.div>
    </div>
  );
}
