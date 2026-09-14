"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "ar" | "en";

export const ARABIC_DIGITS = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];

/**
 * Converts any ASCII digits (0-9) in a string or number into Eastern Arabic numerals (٠-٩)
 */
export function toArabicDigits(val: number | string): string {
  if (val === undefined || val === null) return "";
  return String(val).replace(/\d/g, (d) => ARABIC_DIGITS[Number(d)]);
}

/**
 * Formats a number or string of numbers. Per user requirement, always use English digits (0-9).
 */
export function formatDigits(val: number | string, _lang?: Language): string {
  if (val === undefined || val === null) return "";
  return String(val);
}

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  isRTL: boolean;
  t: (arText: string, enText: string) => string;
  formatNumber: (val: number | string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "ar",
  setLang: () => {},
  toggleLang: () => {},
  isRTL: true,
  t: (arText: string) => arText,
  formatNumber: (val: number | string) => String(val),
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("ar");

  useEffect(() => {
    // Update HTML dir and lang attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const t = (arText: string, enText: string) => {
    if (lang === "ar") {
      return arText;
    }
    return enText;
  };

  const formatNumber = (val: number | string) => {
    return formatDigits(val, lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLang,
        isRTL: lang === "ar",
        t,
        formatNumber,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
