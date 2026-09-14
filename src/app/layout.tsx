import type { Metadata } from "next";
import { Alexandria, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const alexandria = Alexandria({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "أثِـيـر | ATHEER — Haute Gastronomie & Culinary Arts",
  description: "رحلة طهي حسيّة تُعانق الأفق والذاكرة في أجواء معاصرة وفخمة تجمع بين الأصالة والابتكار في عَمّان.",
  keywords: ["مطعم فاخر", "أثير", "عمان", "الأردن", "قائمة تذوق", "Fine Dining Amman", "Contemporary Gastronomy Jordan"],
  openGraph: {
    title: "أثِـيـر | تجربة طهي حسية فاخرة",
    description: "استكشف أطباق التوقيع والأجواء الساحرة في مطعم أثير عَمّان.",
    type: "website",
    locale: "ar_JO",
  },
};

import { LanguageProvider } from "@/context/LanguageContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${alexandria.variable} ${playfair.variable} ${jetbrains.variable} scroll-smooth`}
    >
      <body
        suppressHydrationWarning
        className="font-sans antialiased bg-[#0E1416] text-[#F4F1EA] selection:bg-[#C85A32] selection:text-white overflow-x-hidden min-h-screen"
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
