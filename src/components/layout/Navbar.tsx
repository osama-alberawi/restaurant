"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ActiveSectionState } from "@/hooks/useActiveSection";
import { RESTAURANT_DATA } from "@/data/restaurant-data";
import { SectionId } from "@/lib/types";

import { useLanguage } from "@/context/LanguageContext";

interface NavbarProps {
  activeState: ActiveSectionState;
  onOpenReservation: () => void;
}

export function Navbar({ activeState, onOpenReservation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLightScene, setIsLightScene] = useState(false);
  const { lang, setLang, formatNumber } = useLanguage();

  // Listen to continuous data-scene-luminance attribute from AmbientBackdrop
  useEffect(() => {
    const checkLuminance = () => {
      const lum = document.documentElement.getAttribute("data-scene-luminance");
      setIsLightScene(lum === "light" || activeState.theme === "calcified-field");
    };
    checkLuminance();
    const observer = new MutationObserver(checkLuminance);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-scene-luminance"],
    });
    return () => observer.disconnect();
  }, [activeState.theme]);

  const navLinks: { id: SectionId; labelAr: string; labelEn: string; romanIndex: string; isHighlight?: boolean }[] = [
    { id: "hero", labelAr: "الاستقبال", labelEn: "Welcome", romanIndex: "00" },
    { id: "philosophy", labelAr: "فلسفة الطهي", labelEn: "Philosophy", romanIndex: "01" },
    { id: "menu", labelAr: "قائمة الطعام", labelEn: "The Menu", romanIndex: "02", isHighlight: true },
    { id: "atmosphere", labelAr: "المكان والأجواء", labelEn: "Atmosphere", romanIndex: "03" },
    { id: "chef", labelAr: "الحرفة", labelEn: "Chef Craft", romanIndex: "04" },
    { id: "visit", labelAr: "الزيارة والحجز", labelEn: "Visit & Table", romanIndex: "05" },
  ];

  // Continuous Theme Contrast Adaptation: strictly light ONLY when Atmosphere is active
  const isLightField = activeState.activeId === "atmosphere" && (isLightScene || activeState.theme === "calcified-field");

  const getNavColorClasses = () => {
    if (isLightField) {
      return {
        barBg: "bg-[#EAE6DF]/30 backdrop-blur-md text-[#0E1416] border-b border-[#0E1416]/5",
        brandText: "text-[#0E1416]",
        linkText: "text-[#0E1416]/75 hover:text-[#0E1416]",
        activeText: "text-[#C85A32] font-bold",
        menuBadge: "bg-[#0E1416]/10 text-[#0E1416] border-[#0E1416]/20",
        ctaBtn: "bg-[#0E1416] text-[#EAE6DF] hover:bg-[#C85A32] hover:text-white shadow-none",
        burger: "text-[#0E1416]",
      };
    }
    return {
      barBg: "bg-transparent backdrop-blur-md text-[#F4F1EA] border-b border-white/[0.04]",
      brandText: "text-[#F4F1EA]",
      linkText: "text-[#F4F1EA]/80 hover:text-white",
      activeText: "text-white font-bold",
      menuBadge: "bg-white/10 text-white/90 border-white/20",
      ctaBtn: "bg-[#C85A32] text-white hover:brightness-110 shadow-none",
      burger: "text-[#F4F1EA]",
    };
  };

  const navStyle = getNavColorClasses();

  const getModalColorClasses = () => {
    if (isLightField) {
      return {
        overlayBg: "bg-[#EAE6DF]/98 backdrop-blur-2xl text-[#0E1416]",
        border: "border-[#0E1416]/10",
        divide: "divide-[#0E1416]/10",
        brandText: "text-[#0E1416]",
        closeBtn: "border-[#0E1416]/20 text-[#0E1416] hover:bg-[#0E1416]/5",
        linkInactive: "text-[#0E1416]/75 hover:text-[#0E1416]",
        linkActive: "text-[#C85A32] font-black",
        indexNumber: "text-[#0E1416]/40",
        langBtnActive: "text-[#0E1416] font-bold border-b-2 border-[#C85A32]",
        langBtnInactive: "text-[#0E1416]/40 hover:text-[#0E1416]",
        ctaBtn: "bg-[#C85A32] text-white hover:brightness-105 shadow-[0_4px_20px_rgba(200,90,50,0.3)]",
      };
    }
    return {
      overlayBg: "bg-[#0E1416]/98 backdrop-blur-2xl text-[#F4F1EA]",
      border: "border-white/10",
      divide: "divide-white/10",
      brandText: "text-[#F4F1EA]",
      closeBtn: "border-white/20 text-[#F4F1EA] hover:bg-white/10",
      linkInactive: "text-stone-300 hover:text-white",
      linkActive: "text-[#C85A32] font-black",
      indexNumber: "text-stone-500",
      langBtnActive: "text-white font-bold border-b-2 border-[#C85A32]",
      langBtnInactive: "text-white/40 hover:text-white",
      ctaBtn: "bg-[#C85A32] text-white hover:brightness-110 shadow-[0_4px_20px_rgba(200,90,50,0.4)]",
    };
  };

  const modalStyle = getModalColorClasses();

  const scrollToSection = (id: SectionId) => {
    setMobileMenuOpen(false);
    
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const rect = element.getBoundingClientRect();
      const documentTop = rect.top + window.scrollY;
      
      // Each chapter is built as a complete full-viewport visual stage (min-h-[100svh])
      // with its own comfortable built-in top padding (pt-20/pt-24) to clear the floating navbar.
      // Landing at documentTop aligns the viewport perfectly with the stage,
      // avoiding hero clipping or previous-section bleed.
      const targetTop = documentTop;

      window.scrollTo({
        top: Math.round(targetTop),
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Full-Width Floating Architectural Overlay Navbar (No Boxed Container, No Heavy Panel) */}
      <header
        className={`fixed top-0 inset-x-0 w-full z-40 transition-all duration-700 pointer-events-auto ${navStyle.barBg}`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-10 py-4 flex items-center justify-between">
          {/* Brand Logo & Monogram at one side */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3.5 group text-right focus:outline-none"
          >
            <span className="w-8 h-8 rounded-full bg-[#C85A32] text-white font-black text-xs flex items-center justify-center tracking-tighter shadow-[0_2px_12px_rgba(200,90,50,0.4)] group-hover:scale-105 transition-transform">
              {lang === "ar" ? "أ" : "A"}
            </span>
            <div className="flex flex-col text-right">
              <span className={`text-base font-black tracking-wide leading-none transition-colors ${navStyle.brandText}`}>
                {lang === "ar" ? RESTAURANT_DATA.nameAr : RESTAURANT_DATA.nameEn}
              </span>
              <span className="text-[9px] tracking-[0.28em] font-mono opacity-60 uppercase mt-0.5">
                {lang === "ar" ? RESTAURANT_DATA.nameEn : "FINE DINING"}
              </span>
            </div>
          </button>

          {/* Navigation Centered - Pure Floating Typography */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4">
            {navLinks.map((link) => {
              const isActive = activeState.activeId === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium transition-all duration-300 focus:outline-none flex items-center gap-1.5 ${
                    isActive ? navStyle.activeText : navStyle.linkText
                  }`}
                >
                  {link.isHighlight && (
                    <span className={`text-[9px] px-1.5 py-0.2 rounded-full border font-mono ${navStyle.menuBadge}`}>
                      MENU
                    </span>
                  )}
                  <span className="relative z-10">{lang === "ar" ? link.labelAr : link.labelEn}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavTab"
                      className="absolute bottom-0 inset-x-2 h-[1.5px] bg-[#C85A32]"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Controls at the opposite side: Refined AR/EN Switcher + Floating Reservation CTA */}
          <div className="flex items-center gap-4">
            {/* Refined Typographic Fractional Language Switcher (Desktop Only: hidden lg:flex) */}
            <div
              className={`hidden lg:flex items-center gap-1 text-xs font-mono tracking-wider rtl:border-l ltr:border-r ${
                isLightField ? "border-[#0E1416]/20" : "border-white/20"
              } rtl:pl-4 rtl:pr-1 ltr:pr-4 ltr:pl-1`}
            >
              <button
                onClick={() => setLang("ar")}
                className={`transition-colors font-semibold ${
                  lang === "ar"
                    ? isLightField ? "text-[#0E1416] font-bold" : "text-white font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
                    : isLightField ? "text-[#0E1416]/40 hover:text-[#0E1416]/80" : "text-white/50 hover:text-white/85 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                }`}
                title="الواجهة العربية"
              >
                AR
              </button>
              <span className={`${isLightField ? "text-black/30" : "text-white/30"} text-[10px] select-none`}>/</span>
              <button
                onClick={() => setLang("en")}
                className={`transition-colors font-semibold ${
                  lang === "en"
                    ? isLightField ? "text-[#0E1416] font-bold" : "text-white font-bold drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]"
                    : isLightField ? "text-[#0E1416]/40 hover:text-[#0E1416]/80" : "text-white/50 hover:text-white/85 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]"
                }`}
                title="English Interface"
              >
                EN
              </button>
            </div>

            {/* Tactile Magnetic Reservation CTA */}
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              onClick={onOpenReservation}
              className={`relative px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-colors duration-300 shadow-sm ${navStyle.ctaBtn}`}
            >
              {lang === "ar" ? "احجز طاولتك" : "RESERVE"}
            </motion.button>

            {/* Mobile Menu Burger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-full hover:bg-black/10 transition-colors focus:outline-none ${navStyle.burger}`}
              aria-label={lang === "ar" ? "تبديل القائمة" : "Toggle Menu"}
            >
              <div className="w-5 h-4 flex flex-col justify-between items-end">
                <span className={`h-0.5 w-5 bg-current transition-transform ${mobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
                <span className={`h-0.5 w-3 bg-current ${mobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`h-0.5 w-5 bg-current transition-transform ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Full Mobile Navigation Overlay Modal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className={`fixed inset-0 z-50 lg:hidden flex flex-col justify-between ${modalStyle.overlayBg} p-6 sm:p-8`}
          >
            {/* Modal Header: Monogram Logo + Language Selector + Close Button */}
            <div className={`flex items-center justify-between border-b ${modalStyle.border} pb-4`}>
              <div className="flex items-center gap-3">
                <span className="w-8 h-8 rounded-full bg-[#C85A32] text-white font-black text-xs flex items-center justify-center shadow-sm">
                  {lang === "ar" ? "أ" : "A"}
                </span>
                <span className={`text-base font-black tracking-wide ${modalStyle.brandText}`}>
                  {lang === "ar" ? RESTAURANT_DATA.nameAr : RESTAURANT_DATA.nameEn}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {/* Mobile Language Switcher */}
                <div className={`flex items-center gap-1.5 text-xs font-mono px-2.5 py-1 rounded-full border ${modalStyle.border}`}>
                  <button
                    onClick={() => setLang("ar")}
                    className={`transition-colors font-semibold ${lang === "ar" ? modalStyle.langBtnActive : modalStyle.langBtnInactive}`}
                  >
                    AR
                  </button>
                  <span className={`${isLightField ? "text-[#0E1416]/25" : "text-white/25"} text-[10px]`}>/</span>
                  <button
                    onClick={() => setLang("en")}
                    className={`transition-colors font-semibold ${lang === "en" ? modalStyle.langBtnActive : modalStyle.langBtnInactive}`}
                  >
                    EN
                  </button>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-10 h-10 rounded-full border flex items-center justify-center transition-colors focus:outline-none ${modalStyle.closeBtn}`}
                  aria-label={lang === "ar" ? "إغلاق القائمة" : "Close Menu"}
                >
                  <span className="text-lg font-light leading-none">✕</span>
                </button>
              </div>
            </div>

            {/* Navigation Links - Pure Large Editorial Typography */}
            <div className={`flex flex-col divide-y ${modalStyle.divide} my-auto py-6`}>
              {navLinks.map((link) => {
                const isActive = activeState.activeId === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`py-4 px-2 text-left rtl:text-right flex items-center justify-between transition-colors ${
                      isActive ? modalStyle.linkActive : modalStyle.linkInactive
                    }`}
                  >
                    <span className="text-2xl sm:text-3xl font-bold tracking-tight">
                      {lang === "ar" ? link.labelAr : link.labelEn}
                    </span>
                    <span className={`text-xs font-mono ${isActive ? "text-[#C85A32]" : modalStyle.indexNumber}`}>
                      {formatNumber(link.romanIndex)}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Modal Footer: Reservation Action */}
            <div className={`pt-6 border-t ${modalStyle.border} flex flex-col gap-4`}>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenReservation();
                }}
                className={`w-full py-4 rounded-full font-bold text-xs uppercase tracking-wider transition-all duration-300 ${modalStyle.ctaBtn}`}
              >
                {lang === "ar" ? "طلب حجز مسبق للأمسية" : "REQUEST TABLE RESERVATION"}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
