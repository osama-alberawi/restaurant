import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { RESTAURANT_DATA } from "@/data/restaurant-data";
import { useLanguage } from "@/context/LanguageContext";

export function PhilosophySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { lang, t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Refined physical choreography:
  // - Settles cleanly at y: 0 when in active viewport
  // - Subtle bidirectional emergence and recession without pushing content off-screen
  const contentY = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [25, 0, 0, -25]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.4, 1, 1, 0.3]);
  const imageY = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [30, 0, 0, -30]);
  const imageScale = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [0.96, 1, 1, 0.96]);
  const axisY = useTransform(scrollYProgress, [0, 0.25, 0.75, 1], [15, 0, 0, -15]);

  const storyEn = [
    "We believe neither in conventional menus nor in passive silence. ATHEER was born as an avant-garde culinary space celebrating the raw heat of embers, the wild sap of our soil, and radical sensory contrast.",
    "Every plate is a thermal canvas forged over aged olive and citrus wood, seasoned with native flint salt, engaging directly with our guests' senses.",
    "Time here is not a metric of delay, but an active culinary ingredient maturing flavor and redefining gastronomic heritage."
  ];

  return (
    <div
      ref={containerRef}
      className="w-full min-h-[100svh] lg:h-[100svh] flex flex-col justify-between pt-20 sm:pt-24 lg:pt-28 pb-6 sm:pb-8 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto rtl:text-right ltr:text-left will-change-transform"
    >
      {/* 1. Chapter Marker & Architectural Axis */}
      <div className="flex items-center gap-4 mb-4 sm:mb-6 border-b border-white/10 pb-3 shrink-0">
        <span className="text-xs font-mono tracking-widest text-[#C85A32] uppercase font-bold">
          {t("CHAPTER // 01", "CHAPTER // 01")}
        </span>
        <div className="h-3 w-px bg-white/20" />
        <span className="text-xs text-[#EAE6DF]/70 font-serif uppercase tracking-[0.2em]">
          {t("فلسفة الطهي والحرفة", "Terroir & Craftsmanship")}
        </span>
        <div className="hidden sm:block flex-1 h-px bg-gradient-to-r rtl:from-white/10 rtl:to-transparent ltr:from-white/10 ltr:to-transparent" />
      </div>

      {/* 2. Main Editorial Spread */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto">
        {/* Left / Primary Typography Column */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="lg:col-span-7 space-y-4 sm:space-y-6 will-change-transform"
        >
          {/* Monumental Editorial Headline with Calibrated Compact Scale */}
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white ${
            lang === "ar"
              ? "font-extrabold leading-[1.5] tracking-normal"
              : "font-black leading-[1.18] tracking-tight"
          }`}>
            {lang === "ar" ? (
              <>
                <span>نُشعل في الحطب ذاكرة الأرض،</span>
                <span className="block mt-1.5 text-[#EAE6DF]/90 font-light text-xl sm:text-2xl lg:text-3xl">
                  لنبتكر نكهة تتجاوز المألوف
                </span>
              </>
            ) : (
              <>
                <span>Kindling the Memory of Earth in Ember,</span>
                <span className="block mt-1.5 text-[#EAE6DF]/90 font-light text-xl sm:text-2xl lg:text-3xl">
                  Forging Taste Beyond Convention
                </span>
              </>
            )}
          </h2>

          {/* Mobile Fused Visual Monolith (Mobile Only) */}
          <div className="lg:hidden relative aspect-[16/9] w-full border border-[#C85A32]/30 overflow-hidden shadow-2xl my-3">
            <Image
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=85"
              alt="Kitchen Fire Craft"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover filter contrast-125 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1416] via-[#0E1416]/30 to-transparent" />
            <div className="absolute bottom-3 inset-x-3 rtl:text-right ltr:text-left">
              <span className="text-[10px] font-mono text-[#C85A32] tracking-[0.25em] uppercase block font-semibold">
                ATHEER FIRE ARCHIVE
              </span>
              <p className="text-xs text-[#F4F1EA] font-light mt-0.5 leading-snug">
                {t(
                  "كل حبة ملح خشنة وقطرة زيت زيتون بكر تحمل في طياتها سيرة الفصول والتضاريس.",
                  "Every crystal of flint salt and drop of virgin olive oil encapsulates the chronicle of our native terrains."
                )}
              </p>
            </div>
          </div>

          {/* Editorial Narrative with Ember Hairline Anchor */}
          <div className="space-y-3 text-[#EAE6DF]/85 text-xs sm:text-sm lg:text-base leading-relaxed font-light">
            {(lang === "ar" ? RESTAURANT_DATA.storyAr : storyEn).slice(0, 2).map((p, i) => (
              <p key={i} className="rtl:border-r-2 ltr:border-l-2 border-[#C85A32]/60 rtl:pr-4 ltr:pl-4">
                {p}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Right / Visual Monolith Anchor (Desktop Only) - Compact Height to fit stage */}
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="hidden lg:block lg:col-span-5 relative will-change-transform"
        >
          {/* Framed Monolith with Terracotta Accent */}
          <div className="relative aspect-[4/3] max-h-[320px] w-full border border-[#C85A32]/25 overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=85"
              alt="Kitchen Fire Craft"
              fill
              sizes="(max-width: 1024px) 100vw, 500px"
              className="object-cover filter contrast-125 brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E1416] via-transparent to-transparent opacity-90" />

            {/* Inset Corner Accent Marks */}
            <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#C85A32]/60 pointer-events-none" />
            <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-[#C85A32]/60 pointer-events-none" />

            {/* Editorial Caption Plate */}
            <div className="absolute bottom-4 inset-x-5 rtl:text-right ltr:text-left">
              <span className="text-[10px] font-mono text-[#C85A32] tracking-[0.25em] uppercase block font-semibold">
                ATHEER FIRE ARCHIVE
              </span>
              <p className="text-xs text-[#F4F1EA] mt-1 font-light leading-snug">
                &quot;{t(
                  "كل حبة ملح خشنة وقطرة زيت زيتون بكر تحمل في طياتها سيرة الفصول والتضاريس.",
                  "Every crystal of flint salt and drop of virgin olive oil encapsulates the chronicle of our native terrains."
                )}&quot;
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* 3. Tripartite Typographic Axis: Guaranteed 100% Fully Visible Without Scroll */}
      <motion.div
        style={{ y: axisY }}
        className="pt-4 sm:pt-6 border-t border-white/10 will-change-transform shrink-0"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {/* Coordinate 01 */}
          <div className="space-y-1 md:rtl:border-l md:ltr:border-r md:border-white/10 md:rtl:pl-6 md:ltr:pr-6">
            <div className="flex items-baseline gap-2">
              <span className="text-xs font-mono text-[#C85A32] tracking-widest font-bold">01</span>
              <span className="text-[11px] font-mono text-[#8B9B9E] tracking-widest uppercase">
                {t("خيرات الأرض الأردنية", "JORDANIAN HARVEST")}
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
              {t("مكونات طازجة من مزارع الشمال", "Fresh From Northern Farms")}
            </h3>
            <p className="text-xs text-[#EAE6DF]/70 font-light leading-snug">
              {t(
                "خضار وأعشاب برية وزيت زيتون بلدي نختارها يومياً من مزارع إربد وعجلون.",
                "Wild herbs, fresh produce and baladi olive oil sourced daily from Irbid and Ajloun."
              )}
            </p>
          </div>

          {/* Coordinate 02 */}
          <div className="space-y-1 md:rtl:border-l md:ltr:border-r md:border-white/10 md:rtl:pl-6 md:ltr:pr-6">
            <div className="flex items-baseline gap-2">
              <span className="text-xs font-mono text-[#C85A32] tracking-widest font-bold">02</span>
              <span className="text-[11px] font-mono text-[#8B9B9E] tracking-widest uppercase">
                {t("الطهي على الحطب", "WOOD-FIRED HERITAGE")}
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
              {t("نكهة أصيلة على جمر الزيتون", "Flavors of Olive Wood Embers")}
            </h3>
            <p className="text-xs text-[#EAE6DF]/70 font-light leading-snug">
              {t(
                "طهي بطيء على جمر حطب الزيتون الأردني المعتق ليمنح أطباقنا نكهة المدخّن الأصيل.",
                "Slow-roasted over aged Jordanian olive embers for distinctive, rich smokiness."
              )}
            </p>
          </div>

          {/* Coordinate 03 */}
          <div className="space-y-1">
            <div className="flex items-baseline gap-2">
              <span className="text-xs font-mono text-[#C85A32] tracking-widest font-bold">03</span>
              <span className="text-[11px] font-mono text-[#8B9B9E] tracking-widest uppercase">
                {t("فخار وخزف أردني", "LOCAL ARTISANAL POTTERY")}
              </span>
            </div>
            <h3 className="text-sm sm:text-base font-bold text-white tracking-wide">
              {t("أوانٍ فخارية بأيادٍ محلية", "Handcrafted Local Earthenware")}
            </h3>
            <p className="text-xs text-[#EAE6DF]/70 font-light leading-snug">
              {t(
                "أطباق فخارية وخزفية مصنوعة يدوياً بطين الأردن لتقديم تجربة طعام أصيلة وراقية.",
                "Custom ceramic and pottery pieces handcrafted from native clay for an authentic dining ritual."
              )}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
