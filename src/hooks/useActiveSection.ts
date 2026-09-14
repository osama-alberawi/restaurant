"use client";

import { useEffect, useState } from "react";
import { SectionId, SectionTheme } from "@/lib/types";

export interface ActiveSectionState {
  activeId: SectionId;
  theme: SectionTheme;
  scrollProgress: number;
}

const SECTION_THEMES: Record<SectionId, SectionTheme> = {
  hero: "verdigris-base",
  philosophy: "pine-depth",
  menu: "persimmon-peak",
  atmosphere: "nocturnal-field",
  chef: "pine-depth",
  visit: "verdigris-base",
};

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState<ActiveSectionState>({
    activeId: "hero",
    theme: "verdigris-base",
    scrollProgress: 0,
  });

  useEffect(() => {
    const sections: SectionId[] = ["hero", "philosophy", "menu", "atmosphere", "chef", "visit"];

    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - vh;
      const progress = docHeight > 0 ? scrollY / docHeight : 0;

      // 1. Unambiguous Top of Page Rule:
      // If within the upper 45% of the first viewport, it is ALWAYS Hero
      if (scrollY < vh * 0.45) {
        setActiveSection((prev) => {
          if (prev.activeId === "hero" && Math.abs(prev.scrollProgress - progress) < 0.002) return prev;
          return {
            activeId: "hero",
            theme: SECTION_THEMES.hero,
            scrollProgress: progress,
          };
        });
        return;
      }

      // 2. Unambiguous End of Page Rule:
      // If scrolled within 80px of bottom, it is ALWAYS Visit
      if (docHeight > 0 && scrollY >= docHeight - 80) {
        setActiveSection((prev) => {
          if (prev.activeId === "visit" && Math.abs(prev.scrollProgress - progress) < 0.002) return prev;
          return {
            activeId: "visit",
            theme: SECTION_THEMES.visit,
            scrollProgress: progress,
          };
        });
        return;
      }

      // 3. Section Focal Point Detection:
      // The chapter containing the focal line (35% down the viewport) is active
      const focalY = vh * 0.35;
      let matchedId: SectionId = "hero";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= focalY && rect.bottom > focalY) {
          matchedId = id;
          break;
        }
      }

      const matchedTheme = SECTION_THEMES[matchedId] || "verdigris-base";

      setActiveSection((prev) => {
        if (prev.activeId === matchedId && Math.abs(prev.scrollProgress - progress) < 0.002) return prev;
        return {
          activeId: matchedId,
          theme: matchedTheme,
          scrollProgress: progress,
        };
      });
    };

    // Initial check on mount
    updateActiveSection();

    // Listen to scroll and resize with requestAnimationFrame throttling
    let ticking = false;
    const onScrollOrResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  return activeSection;
}
