import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { RESTAURANT_DATA } from "@/data/restaurant-data";
import { useLanguage } from "@/context/LanguageContext";

interface VisitSectionProps {
  onOpenReservation: () => void;
}

export function VisitSection({ onOpenReservation }: VisitSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { lang, t, formatNumber } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const sectionY = useTransform(scrollYProgress, [0, 0.35, 0.75, 1], [30, 0, 0, -30]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.4, 1, 1, 0.4]);

  return (
    <section
      ref={containerRef}
      className="w-full min-h-[100svh] flex flex-col justify-center pt-20 pb-6 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto rtl:text-right ltr:text-left will-change-transform"
    >
      <motion.div style={{ y: sectionY, opacity: sectionOpacity }} className="will-change-transform flex flex-col justify-between flex-1 my-auto">
        
        {/* Top Header Block */}
        <div>
          {/* Chapter Marker Header */}
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-mono tracking-widest text-[#C85A32] uppercase font-bold">
              {t("الفصل // 05", "CHAPTER // 05")}
            </span>
            <div className="h-[1px] w-12 bg-[#C85A32]/40" />
            <span className="text-xs text-[#EAE6DF]/50 font-serif uppercase tracking-widest">
              {t("الميعاد والاستقبال", "The Gathering & Hours")}
            </span>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 lg:mb-8 border-b border-white/10 pb-4">
            <div>
              <h2 className={`text-3xl sm:text-4xl xl:text-5xl text-white ${
                lang === "ar"
                  ? "font-extrabold leading-[1.25] tracking-normal"
                  : "font-black leading-tight tracking-tight"
              }`}>
                {lang === "ar" ? (
                  <>
                    معالم الزيارة: <span className="text-[#C85A32]">حجز الطاولة المسبق</span>
                  </>
                ) : (
                  <>
                    Plan Your Visit: <span className="text-[#C85A32]">Prior Table Reservation</span>
                  </>
                )}
              </h2>
              <p className="text-[#8B9B9E] text-xs sm:text-sm max-w-2xl font-light mt-1.5 leading-relaxed">
                {t(
                  "نظراً لمحدودية المقاعد ولضمان اهتمام طاقم الطهي بأدق تفاصيل تجربتك، نوصي بحجز طاولتك المسبقة.",
                  "Due to limited intimate seating and to allow our culinary team to curate every detail of your evening, advance reservations are strictly recommended."
                )}
              </p>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* MOBILE VISIT CONCIERGE (lg:hidden): Direct Hospitality Folio        */}
        {/* =================================================================== */}
        <div className="lg:hidden space-y-6">
          {/* Reservation Folio Ticket */}
          <div className="p-5 border border-[#C85A32]/40 relative overflow-hidden space-y-4 bg-[#0E1416]/90">
            <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
              <span className="text-[10px] font-mono text-[#C85A32] tracking-widest uppercase font-bold">
                SANCTUARY RESERVATION
              </span>
              <span className="text-[10px] font-mono text-[#8B9B9E]">
                AMMAN • WEIBDEH
              </span>
            </div>

            <div>
              <h3 className={`text-xl text-white ${
                lang === "ar" ? "font-extrabold leading-[1.3] tracking-normal" : "font-black leading-tight"
              }`}>
                {t("احجز مقعدك في رنيم", "Reserve Your Table")}
              </h3>
              <p className="text-[#EAE6DF]/80 text-xs font-light mt-1.5 leading-relaxed">
                {t(
                  "اختر ركن الجلوس المفضل لديك وسيقوم منسق الضيافة بترتيب أدق التفاصيل لراحتك.",
                  "Select your preferred sanctuary and our maître d' will curate every nuance of your visit."
                )}
              </p>
            </div>

            <div className="space-y-1 pt-3 border-t border-white/10 text-[11px] font-mono text-[#8B9B9E]">
              <p>DIRECT LINE // <span className="text-white font-bold">{formatNumber(RESTAURANT_DATA.phone)}</span></p>
              <p>CONCIERGE // <span className="text-white" dir="ltr">{RESTAURANT_DATA.email}</span></p>
            </div>

            <button
              onClick={onOpenReservation}
              className="w-full py-3.5 rounded-full bg-[#C85A32] text-white font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-[0_8px_25px_rgba(200,90,50,0.35)] mt-2"
            >
              {t("بدء طلب حجز المقعد الآن", "Initiate Reservation Request")}
            </button>
          </div>

          {/* Guest Telemetry Ledger */}
          <div className="border-t border-white/10 pt-4 space-y-4 divide-y divide-white/10">
            <div className="pt-3 first:pt-0 space-y-1 rtl:text-right ltr:text-left">
              <span className="text-[10px] font-mono text-[#C85A32] uppercase tracking-widest block font-bold">
                01 // {t("أوقات الاستقبال", "SERVICE HOURS")}
              </span>
              <div className="space-y-1 pt-1">
                {RESTAURANT_DATA.hours.map((h, i) => (
                  <div key={i} className="flex items-center justify-between text-xs">
                    <span className="text-white font-medium">{lang === "ar" ? h.daysAr : (h.daysEn || h.daysAr)}</span>
                    <span className="text-[#8B9B9E] font-mono">{lang === "ar" ? formatNumber(h.timeAr) : (h.timeEn || h.timeAr)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 space-y-1 rtl:text-right ltr:text-left">
              <span className="text-[10px] font-mono text-[#C85A32] uppercase tracking-widest block font-bold">
                02 // {t("الموقع والمواقف", "GEOGRAPHIC LOCATION")}
              </span>
              <p className="text-xs text-white font-bold">{lang === "ar" ? "عَمّان — جبل اللويبدة" : "Jabal Al-Weibdeh, Amman"}</p>
              <p className="text-[11px] text-[#8B9B9E]">{t("مقابل زاوية كافيه • خدمة الاصطفاف متوفرة", "Opposite Zawia Cafe • Valet Available")}</p>
            </div>

            <div className="pt-3 space-y-1 rtl:text-right ltr:text-left">
              <span className="text-[10px] font-mono text-[#C85A32] uppercase tracking-widest block font-bold">
                03 // {t("ميثاق اللباس", "DRESS CODE PROTOCOL")}
              </span>
              <p className="text-xs text-[#EAE6DF]/85 font-light leading-relaxed">
                {lang === "ar"
                  ? "لباس أنيق راقٍ (Smart Casual) — نرجو التكرم بتفادي الملابس الرياضية."
                  : "Smart Casual. Sportswear politely discouraged to preserve ambient aesthetic."}
              </p>
            </div>
          </div>
        </div>

        {/* =================================================================== */}
        {/* DESKTOP VISIT (hidden lg:grid): Clean Balanced Concierge Layout     */}
        {/* Guaranteed to fit entirely in 100svh without clipping               */}
        {/* =================================================================== */}
        <div className="hidden lg:grid grid-cols-12 gap-8 xl:gap-12 items-stretch my-auto">
          
          {/* Concierge Action Folio (Cols 1-5) */}
          <div className="lg:col-span-5 p-6 xl:p-8 border border-[#C85A32]/40 bg-[#0E1416]/90 relative flex flex-col justify-between">
            {/* Corner Architectural Brackets */}
            <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-[#C85A32]/60 pointer-events-none" />
            <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t border-r border-[#C85A32]/60 pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-[10px] font-mono text-[#C85A32] tracking-[0.2em] uppercase font-bold">
                  TABLE RESERVATION FOLIO
                </span>
                <span className="text-[10px] font-mono text-[#8B9B9E]">
                  LIMITED SEATING
                </span>
              </div>

              <h3 className={`text-2xl xl:text-3xl text-white ${
                lang === "ar" ? "font-extrabold leading-[1.3] tracking-normal" : "font-black leading-tight"
              }`}>
                {t("احجز مقعدك في رنيم", "Reserve Your Table At Raneem")}
              </h3>
              <p className="text-[#EAE6DF]/80 text-xs xl:text-sm font-light leading-relaxed">
                {t(
                  "اختر ركن الجلوس المفضل لديك وسيقوم منسق الضيافة بترتيب أدق التفاصيل لراحتك وتخصيص مسار تذوق فريد.",
                  "Select your preferred atmospheric sanctuary and our maître d' will orchestrate every nuance of your culinary journey."
                )}
              </p>

              <div className="space-y-1.5 pt-3 border-t border-white/10 text-xs font-mono text-[#8B9B9E]">
                <p>DIRECT LINE // <span className="text-white font-bold">{formatNumber(RESTAURANT_DATA.phone)}</span></p>
                <p>CONCIERGE // <span className="text-white" dir="ltr">{RESTAURANT_DATA.email}</span></p>
              </div>
            </div>

            <div className="pt-5">
              <button
                onClick={onOpenReservation}
                className="w-full py-3.5 rounded-full bg-[#C85A32] text-white font-bold text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-[0_8px_25px_rgba(200,90,50,0.35)]"
              >
                {t("بدء طلب حجز المقعد الآن", "Initiate Reservation Request")}
              </button>
            </div>
          </div>

          {/* Reception & Territory Ledger (Cols 6-12) */}
          <div className="lg:col-span-7 flex flex-col justify-between py-1">
            {/* Schedule Table */}
            <div className="border-b border-white/10 pb-5 mb-5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#C85A32] uppercase tracking-widest font-bold">
                  {t("أوقات استقبال الضيوف", "GUEST RECEPTION HOURS")}
                </span>
                <span className="text-[11px] font-mono text-[#8B9B9E]">SEASON 2026</span>
              </div>

              <div className="divide-y divide-white/10">
                {RESTAURANT_DATA.hours.map((item, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-white font-semibold tracking-wide">
                      {lang === "ar" ? item.daysAr : (item.daysEn || item.daysAr)}
                    </span>
                    <span className="text-[#EAE6DF]/85 font-mono text-xs">
                      {lang === "ar" ? formatNumber(item.timeAr) : (item.timeEn || item.timeAr)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Location & Protocol Dual Axis */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1.5 rtl:border-l rtl:pl-6 ltr:border-r ltr:pr-6 border-white/10">
                <span className="text-[10px] font-mono text-[#C85A32] uppercase tracking-widest block font-bold">
                  {t("الموقع الجغرافي", "GEOGRAPHIC LOCATION")}
                </span>
                <p className="text-xs sm:text-sm text-white font-bold">
                  {lang === "ar"
                    ? `${RESTAURANT_DATA.location.cityAr} — ${RESTAURANT_DATA.location.districtAr}`
                    : `${RESTAURANT_DATA.location.cityEn || "Amman"} — ${RESTAURANT_DATA.location.districtEn || "Jabal Al-Weibdeh"}`}
                </p>
                <p className="text-[11px] text-[#8B9B9E] font-light leading-relaxed">
                  {lang === "ar"
                    ? RESTAURANT_DATA.location.streetAr
                    : (RESTAURANT_DATA.location.streetEn || RESTAURANT_DATA.location.streetAr)}
                </p>
                <span className="inline-block mt-1 text-[10px] font-mono text-[#C85A32]" dir="ltr">
                  {RESTAURANT_DATA.location.coordinatesText}
                </span>
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] font-mono text-[#C85A32] uppercase tracking-widest block font-bold">
                  {t("ميثاق اللباس", "DRESS CODE PROTOCOL")}
                </span>
                <p className="text-xs sm:text-sm text-white font-semibold leading-relaxed">
                  {lang === "ar"
                    ? RESTAURANT_DATA.dressCodeAr
                    : (RESTAURANT_DATA.dressCodeEn || RESTAURANT_DATA.dressCodeAr)}
                </p>
                <p className="text-[11px] text-[#8B9B9E] font-light leading-relaxed mt-0.5">
                  {t(
                    "نرجو تفادي الملابس الرياضية حفاظاً على نقاء التجربة الحسية للمطعم.",
                    "Athletic and sportswear are politely discouraged to preserve the sensory aesthetic of the space."
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Baseline Footer Strip */}
        <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#8B9B9E] shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8B9B9E]/50" />
            <span className="tracking-widest uppercase text-[#EAE6DF]/70 text-[11px]">
              {t("رنيم • تجربة تذوق حسية فريدة في قلب عَمّان", "RANEEM • AN ART-DIRECTED CULINARY EXPERIENCE")}
            </span>
          </div>
          <span className="text-[10px] text-stone-500 font-mono tracking-widest uppercase">
            {t("عَمّان • 2026", "AMMAN • 2026")}
          </span>
        </div>

      </motion.div>
    </section>
  );
}

