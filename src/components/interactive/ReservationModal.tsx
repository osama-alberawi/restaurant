"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RESTAURANT_DATA } from "@/data/restaurant-data";
import { useLanguage } from "@/context/LanguageContext";

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DINING_ZONES = [
  { id: "salon", ar: "الصالون الإمبراطوري الحجري", en: "The Monolith Salon" },
  { id: "counter", ar: "منصة مسرح الطهي المباشر", en: "The Fire Counter" },
  { id: "alcove", ar: "جناح الخلوة الخاصة", en: "The Obsidian Alcove" },
  { id: "terrace", ar: "شرفة الأفق المفتوح", en: "The Canyon Terrace" }
];

const TIME_SLOTS = [
  { ar: "07:00 م", en: "07:00 PM" },
  { ar: "08:00 م", en: "08:00 PM" },
  { ar: "08:30 م", en: "08:30 PM" },
  { ar: "09:30 م", en: "09:30 PM" },
  { ar: "10:30 م", en: "10:30 PM" }
];

const GUEST_OPTIONS = [
  { value: "1", ar: "ضيف واحد (تجربة انفرادية)", en: "1 Guest (Solo Journey)" },
  { value: "2", ar: "ضيفان (أمسية ثنائية)", en: "2 Guests (Intimate Pair)" },
  { value: "4", ar: "٤ ضيوف (صالون الأصدقاء)", en: "4 Guests (Salon Table)" },
  { value: "8", ar: "٨ ضيوف (حجز كامل طاولة الشيف)", en: "8 Guests (Chef's Counter Full Book)" }
];

const MONTH_NAMES_AR = [
  "يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو",
  "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"
];

const MONTH_NAMES_EN = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const WEEKDAY_NAMES_AR = ["أح", "اث", "ثل", "أر", "خم", "جم", "سب"];
const WEEKDAY_NAMES_EN = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

export function ReservationModal({ isOpen, onClose }: ReservationModalProps) {
  const { lang, t, formatNumber } = useLanguage();
  const [step, setStep] = useState<"form" | "confirmed">("form");
  const [guestCount, setGuestCount] = useState("2");
  const [selectedZoneId, setSelectedZoneId] = useState("counter");
  const [selectedTimeIndex, setSelectedTimeIndex] = useState(1);
  const [date, setDate] = useState("2026-09-20");

  // Custom UI dropdown and calendar states
  const [isGuestSelectOpen, setIsGuestSelectOpen] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [viewYear, setViewYear] = useState(2026);
  const [viewMonth, setViewMonth] = useState(8); // 8 = September (0-indexed)

  const handleSimulatedSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("confirmed");
  };

  const resetAndClose = () => {
    onClose();
    setIsGuestSelectOpen(false);
    setIsCalendarOpen(false);
    setTimeout(() => setStep("form"), 400);
  };

  const selectedZoneObj = DINING_ZONES.find((z) => z.id === selectedZoneId) || DINING_ZONES[1];
  const selectedZoneName = lang === "ar" ? selectedZoneObj.ar : selectedZoneObj.en;
  const selectedTimeText = lang === "ar" ? formatNumber(TIME_SLOTS[selectedTimeIndex].ar) : TIME_SLOTS[selectedTimeIndex].en;

  const currentGuestObj = GUEST_OPTIONS.find((g) => g.value === guestCount) || GUEST_OPTIONS[1];

  // Calendar calculations
  const firstDayOfWeek = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const handlePrevMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((prev) => prev - 1);
    } else {
      setViewMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((prev) => prev + 1);
    } else {
      setViewMonth((prev) => prev + 1);
    }
  };

  const handleSelectDay = (day: number) => {
    const formatted = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    setDate(formatted);
    setIsCalendarOpen(false);
  };

  const formatDisplayDate = (dateString: string) => {
    const [y, m, d] = dateString.split("-").map(Number);
    if (!y || !m || !d) return dateString;
    const monthName = lang === "ar" ? MONTH_NAMES_AR[m - 1] : MONTH_NAMES_EN[m - 1];
    return lang === "ar" ? `${formatNumber(d)} ${monthName} ${formatNumber(y)}` : `${monthName} ${d}, ${y}`;
  };

  // Close open popovers when clicking outside
  const handleBackdropClick = () => {
    if (isGuestSelectOpen || isCalendarOpen) {
      setIsGuestSelectOpen(false);
      setIsCalendarOpen(false);
    } else {
      resetAndClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleBackdropClick}
            className="absolute inset-0 bg-black/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            className="relative w-full max-w-xl max-h-[92vh] overflow-y-auto scrollbar-none bg-[#0E1416] border border-white/15 rounded-3xl p-6 sm:p-10 text-[#EAE6DF] shadow-2xl z-10 rtl:text-right ltr:text-left"
          >
            {/* Close Button */}
            <button
              onClick={resetAndClose}
              className={`absolute top-6 ${lang === "ar" ? "left-6" : "right-6"} text-xs font-mono tracking-widest text-[#8B9B9E] hover:text-white uppercase`}
              aria-label={t("إغلاق", "Close")}
            >
              [ {t("إغلاق ✕", "CLOSE ✕")} ]
            </button>

            {step === "form" ? (
              <div>
                <div className="mb-8">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C85A32] block mb-1">
                    RANEEM ATELIER // TABLE RESERVATION
                  </span>
                  <h3 className="text-3xl font-black text-white">
                    {lang === "ar"
                      ? `طلب حجز مقعد في ${RESTAURANT_DATA.nameAr}`
                      : `Table Reservation at ${RESTAURANT_DATA.nameEn}`}
                  </h3>
                  <p className="text-[#8B9B9E] text-xs sm:text-sm mt-2 font-light">
                    {t(
                      "اختر تفاصيل أمسيتك لنقوم بتحضير مقعدك أمام مسرح النكهة واللهب.",
                      "Select your evening details so our team may curate your place before the ember theater."
                    )}
                  </p>
                </div>

                <form onSubmit={handleSimulatedSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Bespoke Custom Party Size Selector */}
                    <div className="relative">
                      <label className="block text-[11px] font-mono text-[#8B9B9E] mb-2 uppercase">
                        {t("عدد الضيوف", "Party Size")}
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          setIsCalendarOpen(false);
                          setIsGuestSelectOpen((prev) => !prev);
                        }}
                        className={`w-full bg-[#151F22] border transition-all rounded-xl px-3.5 py-3 text-xs text-white flex items-center justify-between focus:outline-none ${
                          isGuestSelectOpen ? "border-[#C85A32] shadow-[0_0_15px_rgba(200,90,50,0.2)]" : "border-white/10 hover:border-white/30"
                        }`}
                      >
                        <span className="truncate">
                          {lang === "ar" ? currentGuestObj.ar : currentGuestObj.en}
                        </span>
                        <span className={`text-[10px] text-stone-400 font-mono transition-transform duration-200 ${isGuestSelectOpen ? "rotate-180 text-[#C85A32]" : ""}`}>
                          ▼
                        </span>
                      </button>

                      {/* Custom Party Size Dropdown Menu */}
                      <AnimatePresence>
                        {isGuestSelectOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.18 }}
                            className="absolute top-full mt-2 inset-x-0 bg-[#12191B] border border-white/15 rounded-2xl shadow-2xl p-1.5 z-40 space-y-1"
                          >
                            {GUEST_OPTIONS.map((opt) => {
                              const isCurrent = opt.value === guestCount;
                              return (
                                <button
                                  key={opt.value}
                                  type="button"
                                  onClick={() => {
                                    setGuestCount(opt.value);
                                    setIsGuestSelectOpen(false);
                                  }}
                                  className={`w-full p-2.5 rounded-xl text-xs flex items-center justify-between transition-colors rtl:text-right ltr:text-left ${
                                    isCurrent
                                      ? "bg-[#C85A32]/20 text-white font-bold border border-[#C85A32]/40"
                                      : "text-stone-300 hover:bg-white/[0.06] hover:text-white"
                                  }`}
                                >
                                  <span>{lang === "ar" ? opt.ar : opt.en}</span>
                                  {isCurrent && <span className="text-[#C85A32] font-mono text-xs">✓</span>}
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Bespoke Custom Dark Calendar Input */}
                    <div className="relative">
                      <label className="block text-[11px] font-mono text-[#8B9B9E] mb-2 uppercase">
                        {t("التاريخ المفضل", "Preferred Date")}
                      </label>
                      <button
                        type="button"
                        onClick={() => {
                          setIsGuestSelectOpen(false);
                          setIsCalendarOpen((prev) => !prev);
                        }}
                        className={`w-full bg-[#151F22] border transition-all rounded-xl px-3.5 py-3 text-xs text-white flex items-center justify-between focus:outline-none ${
                          isCalendarOpen ? "border-[#C85A32] shadow-[0_0_15px_rgba(200,90,50,0.2)]" : "border-white/10 hover:border-white/30"
                        }`}
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#C85A32]" />
                          <span className="font-mono text-xs text-white">
                            {formatDisplayDate(date)}
                          </span>
                        </div>
                        <span className="text-[11px] font-mono text-stone-400">
                          {t("تغيير", "CHANGE")}
                        </span>
                      </button>

                      {/* Custom Dark Luxury Calendar Popover */}
                      <AnimatePresence>
                        {isCalendarOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -6, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -6, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full mt-2 rtl:left-0 ltr:right-0 w-full sm:w-[320px] bg-[#12191B] border border-white/20 rounded-2xl p-4 shadow-[0_25px_50px_rgba(0,0,0,0.9)] z-40"
                          >
                            {/* Calendar Header with Navigation */}
                            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                              <button
                                type="button"
                                onClick={handlePrevMonth}
                                className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-stone-300 hover:text-white hover:border-[#C85A32] transition-colors"
                                aria-label="Previous Month"
                              >
                                ‹
                              </button>
                              
                              <div className="text-center font-serif text-sm font-bold text-white tracking-wide">
                                {lang === "ar" ? MONTH_NAMES_AR[viewMonth] : MONTH_NAMES_EN[viewMonth]} <span className="font-mono text-xs text-[#C85A32]">{formatNumber(viewYear)}</span>
                              </div>

                              <button
                                type="button"
                                onClick={handleNextMonth}
                                className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-stone-300 hover:text-white hover:border-[#C85A32] transition-colors"
                                aria-label="Next Month"
                              >
                                ›
                              </button>
                            </div>

                            {/* Weekday Names Header */}
                            <div className="grid grid-cols-7 gap-1 text-center mb-2">
                              {(lang === "ar" ? WEEKDAY_NAMES_AR : WEEKDAY_NAMES_EN).map((dayName, idx) => (
                                <span key={idx} className="text-[10px] font-mono text-[#8B9B9E] uppercase">
                                  {dayName}
                                </span>
                              ))}
                            </div>

                            {/* Days Grid */}
                            <div className="grid grid-cols-7 gap-1 text-center">
                              {/* Empty padding cells */}
                              {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                                <span key={`empty-${i}`} className="w-8 h-8" />
                              ))}

                              {/* Day numbers */}
                              {Array.from({ length: daysInMonth }).map((_, i) => {
                                const dayNum = i + 1;
                                const currentCellFormatted = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(dayNum).padStart(2, "0")}`;
                                const isSelected = currentCellFormatted === date;

                                return (
                                  <button
                                    key={dayNum}
                                    type="button"
                                    onClick={() => handleSelectDay(dayNum)}
                                    className={`w-8 h-8 rounded-full text-xs font-mono flex items-center justify-center transition-all mx-auto ${
                                      isSelected
                                        ? "bg-[#C85A32] text-white font-bold shadow-[0_0_12px_rgba(200,90,50,0.8)] scale-105"
                                        : "text-stone-300 hover:bg-white/10 hover:text-white"
                                    }`}
                                  >
                                    {formatNumber(dayNum)}
                                  </button>
                                );
                              })}
                            </div>

                            {/* Quick Select Preset */}
                            <div className="pt-3 mt-3 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#8B9B9E]">
                              <button
                                type="button"
                                onClick={() => {
                                  setViewYear(2026);
                                  setViewMonth(8);
                                  handleSelectDay(20);
                                }}
                                className="hover:text-white transition-colors"
                              >
                                {t("موسم رنيم (20 سبتمبر)", "SEASON DEBUT (SEP 20)")}
                              </button>
                              <button
                                type="button"
                                onClick={() => setIsCalendarOpen(false)}
                                className="text-[#C85A32] font-bold hover:brightness-110"
                              >
                                {t("إغلاق ✕", "CLOSE ✕")}
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#8B9B9E] mb-2 uppercase">
                      {t("ركن الجلوس المفضل", "Preferred Dining Zone")}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {DINING_ZONES.map((zone) => (
                        <button
                          key={zone.id}
                          type="button"
                          onClick={() => setSelectedZoneId(zone.id)}
                          className={`p-3 text-xs rtl:text-right ltr:text-left rounded-xl border transition-all ${
                            selectedZoneId === zone.id
                              ? "bg-[#C85A32] border-[#C85A32] text-white font-bold"
                              : "bg-[#151F22] border-white/10 text-[#8B9B9E] hover:border-white/30"
                          }`}
                        >
                          {lang === "ar" ? zone.ar : zone.en}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono text-[#8B9B9E] mb-2 uppercase">
                      {t("وقت الوصول", "Arrival Time")}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {TIME_SLOTS.map((slot, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedTimeIndex(idx)}
                          className={`px-4 py-1.5 text-xs font-mono rounded-full border transition-all ${
                            selectedTimeIndex === idx
                              ? "bg-[#C85A32] text-white font-bold border-[#C85A32]"
                              : "bg-[#151F22] text-[#8B9B9E] border-white/10 hover:border-white/30"
                          }`}
                        >
                          {lang === "ar" ? slot.ar : slot.en}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-[#C85A32] text-white font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-[0_10px_30px_rgba(200,90,50,0.35)]"
                    >
                      {t("تأكيد طلب الحجز المبدئي", "Confirm Reservation Request")}
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <span className="w-12 h-12 rounded-full bg-[#C85A32] text-white font-bold text-lg inline-flex items-center justify-center mb-2">
                  ✓
                </span>
                <h3 className="text-3xl font-black text-white">
                  {t("تم تسجيل اهتمامك بنجاح", "Reservation Request Received")}
                </h3>
                <p className="text-[#8B9B9E] text-sm max-w-md mx-auto">
                  {lang === "ar" ? (
                    <>
                      نتطلع للترحيب بك في <span className="text-[#C85A32] font-bold">{selectedZoneName}</span> بتاريخ <span className="text-white">{formatDisplayDate(date)}</span> عند الساعة <span className="text-white">{selectedTimeText}</span>.
                    </>
                  ) : (
                    <>
                      We look forward to welcoming you at <span className="text-[#C85A32] font-bold">{selectedZoneName}</span> on <span className="text-white">{formatDisplayDate(date)}</span> at <span className="text-white">{selectedTimeText}</span>.
                    </>
                  )}
                </p>
                <div className="pt-6">
                  <button
                    onClick={resetAndClose}
                    className="px-8 py-3 rounded-full border border-white/20 text-xs font-mono uppercase tracking-widest text-white hover:bg-white hover:text-black transition-colors"
                  >
                    {t("العودة إلى الموقع", "RETURN TO EXPERIENCE")}
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

