"use client";

import { RESTAURANT_DATA } from "@/data/restaurant-data";
import { useLanguage } from "@/context/LanguageContext";

export function Footer() {
  const { lang, t, formatNumber } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-[#0A0E10] py-20 px-6 sm:px-8 lg:px-12 rtl:text-right ltr:text-left overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand & Monogram Column */}
        <div className="space-y-3 text-center md:rtl:text-right md:ltr:text-left">
          <div className="flex items-center justify-center md:rtl:justify-start md:ltr:justify-start gap-4">
            <span className="text-3xl font-black text-white tracking-wider">
              {lang === "ar" ? RESTAURANT_DATA.nameAr : RESTAURANT_DATA.nameEn}
            </span>
            <span className="text-xs font-mono tracking-[0.3em] text-[#C85A32] uppercase">
              {lang === "ar" ? RESTAURANT_DATA.nameEn : RESTAURANT_DATA.nameAr}
            </span>
          </div>
          <p className="text-[#8B9B9E] text-xs max-w-md font-light leading-relaxed">
            {t(
              "حيث تلتقي أصالة الأرض بسحر الجمر — تجربة طهي معاصرة تحتفي بنكهات المشرق وعراقة الضيافة.",
              "Where the essence of earth meets ember — an avant-garde gastronomic sanctuary celebrating Levantine heritage and hospitality."
            )}
          </p>
        </div>

        {/* Back to Top CTA */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/15 text-xs font-mono uppercase tracking-widest text-[#EAE6DF] hover:border-[#C85A32] hover:text-[#C85A32] transition-colors"
        >
          <span>{t("العودة إلى البداية", "RETURN TO APEX")}</span>
          <span className="text-[#C85A32]">↑</span>
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8B9B9E]/60">
        <p>© {formatNumber(new Date().getFullYear())} {lang === "ar" ? RESTAURANT_DATA.nameAr : RESTAURANT_DATA.nameEn}. {t("جميع الحقوق محفوظة.", "ALL RIGHTS RESERVED.")}</p>
        <div className="flex items-center gap-6">
          <span className="hover:text-white transition-colors cursor-pointer">
            {t("الخصوصية", "PRIVACY")}
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            {t("ميثاق الأرض", "TERROIR CHARTER")}
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            INSTAGRAM
          </span>
        </div>
      </div>
    </footer>
  );
}

