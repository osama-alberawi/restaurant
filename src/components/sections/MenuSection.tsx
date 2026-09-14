"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useSpring, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/data/restaurant-data";
import { MenuCategoryId } from "@/lib/types";
import { useLanguage } from "@/context/LanguageContext";

export function MenuSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});
  const [activeCategoryId, setActiveCategoryId] = useState<MenuCategoryId>("starters");
  const { lang, t, formatNumber } = useLanguage();

  // Unified calibrated scroll over the pinned track
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Physically damped spring to guarantee smooth, jitter-free scroll choreography
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.6,
  });

  // Map damped continuous scroll progress into category index across the pinned track
  // 7 categories unfold smoothly across 0.0 -> 1.0
  useMotionValueEvent(smoothProgress, "change", (latest) => {
    const total = MENU_CATEGORIES.length;
    const clampedRatio = Math.min(0.999, Math.max(0, latest));
    const catIndex = Math.min(total - 1, Math.max(0, Math.floor(clampedRatio * total)));
    const cat = MENU_CATEGORIES[catIndex];
    if (cat && cat.id !== activeCategoryId) {
      setActiveCategoryId(cat.id);
    }
  });

  // Auto-scroll active tab into center view on mobile tab strip
  useEffect(() => {
    const btn = tabRefs.current[activeCategoryId];
    if (btn) {
      btn.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeCategoryId]);

  const activeCategory = MENU_CATEGORIES.find((c) => c.id === activeCategoryId) || MENU_CATEGORIES[0];
  const activeCategoryIndex = MENU_CATEGORIES.findIndex((c) => c.id === activeCategoryId);
  const filteredItems = MENU_ITEMS.filter((item) => item.categoryId === activeCategoryId);
  const nextCategory =
    activeCategoryIndex < MENU_CATEGORIES.length - 1
      ? MENU_CATEGORIES[activeCategoryIndex + 1]
      : null;

  // Category selection via click (works on both desktop spine and mobile tabs)
  const handleSelectCategory = (catId: MenuCategoryId) => {
    setActiveCategoryId(catId);
    const idx = MENU_CATEGORIES.findIndex((c) => c.id === catId);
    if (idx !== -1 && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const containerTop = rect.top + scrollTop;
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      const targetRatio = (idx + 0.5) / MENU_CATEGORIES.length;
      const targetY = containerTop + totalScrollable * targetRatio;
      window.scrollTo({ top: targetY, behavior: "smooth" });
    }
  };

  // Format price as JOD with 2 decimals
  const formatPrice = (price: number) => {
    return price.toFixed(2);
  };

  // Keep stage stable and unscaled without artificial shrink, smooth release near bottom
  const stageOpacity = useTransform(smoothProgress, [0, 0.94, 1.0], [1, 1, 0.15]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[280vh] bg-[#0E1416] text-[#EAE6DF]"
    >
      {/* Pinned Spatial Viewport: Sits cleanly below floating navbar on all window heights */}
      <div className="sticky top-0 h-[100svh] min-h-[100svh] w-full relative overflow-hidden flex flex-col justify-between pt-16 sm:pt-20 lg:pt-24 pb-4 sm:pb-5 px-4 sm:px-8 xl:px-14">
        
        {/* Active Editorial Monograph Container */}
        <motion.div
          style={{ opacity: stageOpacity }}
          className="w-full flex flex-col justify-between max-w-7xl mx-auto z-10 will-change-transform flex-1 min-h-0"
        >
          {/* =================================================================== */}
          {/* DESKTOP VIEWPORT (hidden lg:flex flex-col flex-1 min-h-0 justify-between) */}
          {/* =================================================================== */}
          <div className="hidden lg:flex flex-col justify-between flex-1 min-h-0 w-full">
            {/* Monograph Top Header */}
            <div className="flex items-baseline justify-between gap-4 border-b border-white/10 pb-3 mb-2 shrink-0">
              <div className="flex items-baseline gap-4">
                <span className="text-xs font-mono tracking-widest text-[#C85A32] uppercase font-bold">
                  {t("الفصل // 02", "CHAPTER // 02")}
                </span>
                <div className="h-[1px] w-8 bg-[#C85A32]/40" />
                <h2 className="text-2xl xl:text-3xl font-black text-white tracking-normal leading-[1.3]">
                  {lang === "ar" ? "قائمة الطعام:" : "The Menu:"} <span className="text-[#EAE6DF] font-light">{lang === "ar" ? "مواسم الأرض والجمر" : "Seasons of Earth & Ember"}</span>
                </h2>
              </div>

              <div className="flex items-center gap-5 font-mono text-xs text-[#8B9B9E]">
                <span className="text-[#C85A32] font-bold">
                  {formatNumber(activeCategory.romanIndex)} / {formatNumber(`0${MENU_CATEGORIES.length}`)}
                </span>
                <span className="opacity-30">|</span>
                <span className="tracking-wider">{t("الأسعار بالدينار الأردني • شامل الضريبة", "PRICES IN JOD • VAT INCLUDED")}</span>
              </div>
            </div>

            {/* Monograph Dual-Page Spread: Spine (4 cols) + Plate Catalog Spread (8 cols) */}
            <div className="grid grid-cols-12 gap-8 xl:gap-12 items-start my-auto py-2 flex-1 min-h-0 overflow-hidden">
              
              {/* 1. EDITORIAL WAYFINDING SPINE (4 cols) */}
              <div className="col-span-4 flex flex-col justify-center relative py-4 rtl:text-right ltr:text-left rtl:border-l ltr:border-r border-white/10 rtl:pl-8 ltr:pr-8">
                
                {/* Structural Vertical Hairline Axis */}
                <div className="absolute top-2 bottom-2 rtl:left-0 ltr:right-0 w-[1px] bg-white/10 overflow-hidden">
                  <motion.div
                    className="w-full bg-[#C85A32]"
                    style={{
                      height: `${((activeCategoryIndex + 1) / MENU_CATEGORIES.length) * 100}%`,
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 25 }}
                  />
                </div>

                {/* 7-Chapter Wayfinding Items */}
                <div className="space-y-3 xl:space-y-4 relative z-10">
                  {MENU_CATEGORIES.map((cat) => {
                    const isSelected = activeCategoryId === cat.id;
                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => handleSelectCategory(cat.id)}
                        className={`group relative flex flex-col rtl:text-right ltr:text-left transition-all duration-300 outline-none focus:outline-none focus-visible:outline-none focus:ring-0 ring-0 border-0 select-none w-full py-1 ${
                          isSelected ? "opacity-100" : "opacity-40 hover:opacity-80"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`text-xs font-mono transition-colors ${
                              isSelected ? "text-[#C85A32] font-bold" : "text-stone-500"
                            }`}
                          >
                            {formatNumber(cat.romanIndex)}
                          </span>
                          <h3
                            className={`text-sm xl:text-base transition-colors leading-[1.3] ${
                              isSelected
                                ? "text-white font-black tracking-normal"
                                : "text-[#EAE6DF] font-medium group-hover:text-white"
                            }`}
                          >
                            {lang === "ar" ? cat.titleAr : cat.titleEn}
                          </h3>
                        </div>

                        <span className="text-[11px] text-[#8B9B9E] font-light mt-0.5 rtl:pr-7 ltr:pl-7 leading-tight tracking-wide opacity-80 line-clamp-1">
                          {lang === "ar" ? cat.subtitleAr : (cat.subtitleEn || cat.subtitleAr)}
                        </span>

                        {/* Precision Diamond/Bar Indicator */}
                        {isSelected && (
                          <motion.div
                            layoutId="activeDesktopSpineMarker"
                            className="absolute rtl:left-[-32px] ltr:right-[-32px] top-1/2 -translate-y-1/2 h-[2px] bg-[#C85A32] w-6 flex items-center rtl:justify-start ltr:justify-end"
                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                          >
                            <span className="w-1.5 h-1.5 bg-[#C85A32] rotate-45 shrink-0 -mx-0.5" />
                          </motion.div>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. EDITORIAL MONOGRAPH SPREAD (8 cols): 2-Column Dish Stream */}
              <div className="col-span-8 flex flex-col justify-start rtl:text-right ltr:text-left h-full">
                
                {/* Active Category Header */}
                <div className="flex items-baseline justify-between pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-sm text-[#C85A32] font-bold">
                      {formatNumber(activeCategory.romanIndex)}
                    </span>
                    <h3 className="text-xl xl:text-2xl font-black text-white leading-[1.3]">
                      {lang === "ar" ? activeCategory.titleAr : activeCategory.titleEn}
                    </h3>
                  </div>
                  <span className="text-xs text-[#8B9B9E] font-light hidden sm:inline">
                    {lang === "ar" ? activeCategory.subtitleAr : (activeCategory.subtitleEn || activeCategory.subtitleAr)}
                  </span>
                </div>

                {/* 2-Column Scannable Editorial Grid */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategoryId}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.32, ease: "easeOut" }}
                    className="grid grid-cols-2 gap-x-8 xl:gap-x-12 gap-y-3.5 xl:gap-y-4.5"
                  >
                    {filteredItems.map((dish, idx) => (
                      <div
                        key={dish.id}
                        className="group py-2 px-3 transition-colors duration-200 rounded-sm hover:bg-white/[0.03] border-b border-white/[0.07] space-y-1 rtl:text-right ltr:text-left"
                      >
                        {/* Title & Price Line */}
                        <div className="flex items-baseline justify-between gap-3">
                          <div className="flex items-baseline gap-2 min-w-0">
                            <span className="text-[11px] font-mono text-[#C85A32] font-semibold shrink-0">
                              {formatNumber(`0${idx + 1}`)}
                            </span>
                            <h4 className="text-sm xl:text-base font-black text-white leading-[1.3] truncate group-hover:text-[#C85A32] transition-colors">
                              {lang === "ar" ? dish.titleAr : dish.titleEn}
                            </h4>
                          </div>

                          <div className="flex items-baseline gap-1 font-mono text-xs xl:text-sm font-bold text-white shrink-0">
                            <span>{formatNumber(formatPrice(dish.priceSAR))}</span>
                            <span className="text-[10px] font-light text-[#8B9B9E] rtl:mr-0.5 ltr:ml-0.5">
                              {lang === "ar" ? "د.أ" : "JOD"}
                            </span>
                          </div>
                        </div>

                        {/* Secondary English Title & Dietary Note */}
                        <div className="flex items-center gap-2 rtl:pr-5 ltr:pl-5 text-[11px] text-[#8B9B9E] font-light">
                          <span className="font-mono opacity-80 truncate">
                            {lang === "ar" ? dish.titleEn : dish.titleAr}
                          </span>
                          {dish.dietary && (
                            <span className="text-[9px] font-mono text-[#C85A32]/80 shrink-0">
                              [{lang === "ar" ? dish.dietary.join(" • ") : (dish.dietaryEn ? dish.dietaryEn.join(" • ") : dish.dietary.join(" • "))}]
                            </span>
                          )}
                        </div>

                        {/* Dish Description */}
                        <p className="rtl:pr-5 ltr:pl-5 text-xs text-[#EAE6DF]/80 font-light leading-relaxed line-clamp-2">
                          {lang === "ar" ? dish.descriptionAr : (dish.descriptionEn || dish.descriptionAr)}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Bottom Monograph Pinned Footnote Bar */}
            <div className="border-t border-white/10 pt-3 flex items-center justify-between text-xs font-mono text-[#8B9B9E] shrink-0">
              <div className="flex items-center gap-3">
                <span className="text-[#C85A32] font-bold">
                  {formatNumber(activeCategory.romanIndex)}
                </span>
                <span className="tracking-widest uppercase">
                  {lang === "ar" ? activeCategory.titleAr : activeCategory.titleEn}
                </span>
              </div>

              <div className="w-48 xl:w-72 h-[1.5px] bg-white/10 relative overflow-hidden rounded-full mx-4">
                <motion.div
                  className="absolute top-0 rtl:right-0 ltr:left-0 bottom-0 bg-[#C85A32]"
                  style={{ width: `${((activeCategoryIndex + 1) / MENU_CATEGORIES.length) * 100}%` }}
                  transition={{ ease: "easeOut", duration: 0.3 }}
                />
              </div>

              <div className="font-mono">
                <span className="text-white font-bold">
                  {formatNumber(`0${activeCategoryIndex + 1}`)}
                </span>
                <span className="opacity-40">
                  {" / "}{formatNumber(`0${MENU_CATEGORIES.length}`)}
                </span>
              </div>
            </div>
          </div>

          {/* =================================================================== */}
          {/* MOBILE VIEWPORT (lg:hidden): Pinned Single-Tab Monograph (زي واجهة 4) */}
          {/* Pinned scroll-driven chapter transition, isolated per tab          */}
          {/* =================================================================== */}
          <div className="lg:hidden flex flex-col justify-between flex-1 min-h-0 py-1 w-full max-w-lg mx-auto">
            
            {/* 1. Mobile Header */}
            <div className="border-b border-white/10 pb-2 shrink-0">
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-[11px] font-mono tracking-widest text-[#C85A32] uppercase font-bold">
                  {t("الفصل // 02", "CHAPTER // 02")}
                </span>
                <div className="flex items-center gap-2 font-mono text-[10px] text-[#8B9B9E]">
                  <span className="text-[#C85A32] font-bold">
                    {formatNumber(activeCategory.romanIndex)} / {formatNumber(`0${MENU_CATEGORIES.length}`)}
                  </span>
                  <span className="opacity-30">|</span>
                  <span>{t("الأسعار بالدينار الأردني", "PRICES IN JOD")}</span>
                </div>
              </div>

              <h2 className="text-xl font-black text-white leading-tight">
                {lang === "ar" ? "قائمة الطعام:" : "The Menu:"}{" "}
                <span className="text-[#EAE6DF] font-light text-sm sm:text-base">
                  {lang === "ar" ? "مواسم الأرض والجمر" : "Seasons of Earth & Ember"}
                </span>
              </h2>
            </div>

            {/* 2. Scrollable Category Tab Bar */}
            <div className="py-2 border-b border-white/10 shrink-0">
              <div className="flex items-center gap-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden text-xs font-mono">
                {MENU_CATEGORIES.map((cat, idx) => {
                  const isSelected = activeCategoryId === cat.id;
                  return (
                    <button
                      key={cat.id}
                      ref={(el) => { tabRefs.current[cat.id] = el; }}
                      type="button"
                      onClick={() => handleSelectCategory(cat.id)}
                      className={`relative shrink-0 pb-1.5 flex items-baseline gap-1.5 transition-colors outline-none focus:outline-none focus-visible:outline-none focus:ring-0 select-none ${
                        isSelected ? "text-white font-bold" : "text-[#8B9B9E]/65 hover:text-white"
                      }`}
                    >
                      <span className={`text-[10px] font-bold ${isSelected ? "text-[#C85A32]" : "text-[#8B9B9E]/60"}`}>
                        0{idx + 1}
                      </span>
                      <span className="leading-tight">{lang === "ar" ? cat.titleAr : cat.titleEn}</span>
                      {isSelected && (
                        <motion.div
                          layoutId="mobileActiveCategoryUnderline"
                          className="absolute bottom-0 inset-x-0 h-[2px] bg-[#C85A32]"
                          transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Active Category Header + Dishes (ONLY active category dishes shown!) */}
            <div className="flex-1 min-h-0 flex flex-col justify-start py-2 overflow-hidden">
              {/* Active Category Title & Count */}
              <div className="flex items-baseline justify-between pb-1.5 mb-1 border-b border-white/[0.08] shrink-0">
                <div className="flex items-baseline gap-2">
                  <span className="text-xs font-mono text-[#C85A32] font-bold">
                    {formatNumber(activeCategory.romanIndex)}
                  </span>
                  <h3 className="text-base font-black text-white leading-tight">
                    {lang === "ar" ? activeCategory.titleAr : activeCategory.titleEn}
                  </h3>
                </div>
                <span className="text-[10px] font-mono text-[#8B9B9E]">
                  {filteredItems.length} {lang === "ar" ? "أطباق" : "dishes"}
                </span>
              </div>
              <p className="text-[11px] text-[#8B9B9E] font-light truncate mb-2 shrink-0">
                {lang === "ar" ? activeCategory.subtitleAr : (activeCategory.subtitleEn || activeCategory.subtitleAr)}
              </p>

              {/* Dishes List with AnimatePresence - ONLY active category dishes */}
              <div className="overflow-y-auto flex-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pr-1">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeCategoryId}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="space-y-2"
                  >
                    {filteredItems.map((dish, dishIdx) => (
                      <div
                        key={dish.id}
                        className="py-1.5 border-b border-white/[0.06] last:border-b-0 space-y-0.5 rtl:text-right ltr:text-left"
                      >
                        {/* Dish Title & Price */}
                        <div className="flex items-baseline justify-between gap-2">
                          <div className="flex items-baseline gap-2 min-w-0">
                            <span className="text-[10px] font-mono text-[#C85A32] font-semibold shrink-0">
                              {formatNumber(`0${dishIdx + 1}`)}
                            </span>
                            <h4 className="text-xs sm:text-sm font-black text-white leading-tight truncate">
                              {lang === "ar" ? dish.titleAr : dish.titleEn}
                            </h4>
                          </div>
                          <div className="text-xs font-bold text-white font-mono shrink-0">
                            <span>{formatNumber(formatPrice(dish.priceSAR))}</span>
                            <span className="text-[10px] text-[#8B9B9E] font-light rtl:mr-0.5 ltr:ml-0.5">
                              {lang === "ar" ? "د.أ" : "JOD"}
                            </span>
                          </div>
                        </div>

                        {/* Secondary English Name & Dietary Tags */}
                        <div className="flex items-center gap-2 rtl:pr-4 ltr:pl-4 text-[10px] text-[#8B9B9E]">
                          <span className="font-mono opacity-80 truncate text-[9px]">
                            {lang === "ar" ? dish.titleEn : dish.titleAr}
                          </span>
                          {dish.dietary && (
                            <span className="text-[8px] font-mono text-[#C85A32]/90 shrink-0">
                              [{lang === "ar" ? dish.dietary.join(" • ") : (dish.dietaryEn ? dish.dietaryEn.join(" • ") : dish.dietary.join(" • "))}]
                            </span>
                          )}
                        </div>

                        {/* Description */}
                        <p className="rtl:pr-4 ltr:pl-4 text-[11px] text-[#EAE6DF]/75 font-light leading-snug line-clamp-2">
                          {lang === "ar" ? dish.descriptionAr : (dish.descriptionEn || dish.descriptionAr)}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* 4. Mobile Bottom Monograph Footnote Bar */}
            <div className="border-t border-white/10 pt-2 flex items-center justify-between text-[11px] font-mono text-[#8B9B9E] shrink-0">
              <div className="flex items-center gap-2">
                <span className="text-[#C85A32] font-bold">
                  {formatNumber(activeCategory.romanIndex)}
                </span>
                <span className="tracking-wider uppercase text-[10px]">
                  {lang === "ar" ? activeCategory.titleAr : activeCategory.titleEn}
                </span>
              </div>

              {/* Dynamic Progress Bar */}
              <div className="w-20 sm:w-32 h-[1.5px] bg-white/10 relative overflow-hidden rounded-full mx-2">
                <motion.div
                  className="absolute top-0 rtl:right-0 ltr:left-0 bottom-0 bg-[#C85A32]"
                  style={{ width: `${((activeCategoryIndex + 1) / MENU_CATEGORIES.length) * 100}%` }}
                  transition={{ ease: "easeOut", duration: 0.3 }}
                />
              </div>

              {nextCategory ? (
                <button
                  type="button"
                  onClick={() => handleSelectCategory(nextCategory.id)}
                  className="flex items-center gap-1 text-[#C85A32] hover:text-white transition-colors"
                >
                  <span className="text-[10px] uppercase font-semibold">
                    {lang === "ar" ? nextCategory.titleAr : nextCategory.titleEn}
                  </span>
                  <span className="text-[9px] rtl:rotate-180">→</span>
                </button>
              ) : (
                <div className="flex items-center gap-1 text-[10px] text-[#8B9B9E]">
                  <span>{t("المكان", "Atmosphere")}</span>
                  <span className="text-[#C85A32]">↓</span>
                </div>
              )}
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
}
