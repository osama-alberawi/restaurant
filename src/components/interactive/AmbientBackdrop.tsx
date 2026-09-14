"use client";

import React, { useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Continuous Global Scene Canvas
 * 
 * Drives the background environment across the entire website as ONE continuous visual field.
 * Eliminates all discrete class snaps and abrupt theme timers.
 * 
 * Interpolation Anchors across document scroll (0.0 to 1.0):
 * - 0.00: Hero (Slate Verdigris #0E1416)
 * - 0.16: Philosophy (Pine Charcoal / Earth #151F22)
 * - 0.32: Menu Start (Deep Nocturnal Hearth #1E1210)
 * - 0.50: Menu Deep (Scorched Persimmon #1E1210)
 * - 0.54: Menu -> Atmosphere Bridge 1 (Warm Earth #2A1813)
 * - 0.58: Menu -> Atmosphere Bridge 2 (Amber Ochre #5A3B2B)
 * - 0.61: Menu -> Atmosphere Bridge 3 (Weathered Stone #988879)
 * - 0.65: Atmosphere Established (Calcified Linen Stone #EAE6DF)
 * - 0.75: Atmosphere Departure (Travertine Linen #EAE6DF)
 * - 0.81: Atmosphere -> Chef (Artisanal Pine Shadows #151F22)
 * - 0.91: Visit (Hospitality Slate #0E1416)
 * - 1.00: Footer (Nocturnal Ground #0A0E10)
 */

interface AmbientBackdropProps {
  theme?: string;
}

export function AmbientBackdrop({ theme }: AmbientBackdropProps = {}) {
  const { scrollYProgress } = useScroll();

  // 1. Continuous Main Background Color Interpolation
  // Calibrated accurately to document flow so each chapter's palette matches its text contrast
  const backgroundColor = useTransform(
    scrollYProgress,
    [
      0.0,    // Hero
      0.14,   // Philosophy
      0.26,   // Menu Start
      0.46,   // Menu End
      0.50,   // Transition to Atmosphere (Warm Earth)
      0.54,   // Transition to Atmosphere (Amber Ochre)
      0.58,   // Atmosphere Established (Calcified Linen)
      0.68,   // Atmosphere Culmination (Calcified Linen)
      0.72,   // Transition back to Dark Hearth
      0.76,   // Chef Established (Deep Charcoal Hearth)
      0.88,   // Visit (Nocturnal Slate)
      1.00,   // Footer
    ],
    [
      "#0E1416", // Slate Verdigris
      "#151F22", // Pine Earth
      "#1E1210", // Nocturnal Hearth
      "#1E1210", // Nocturnal Hearth
      "#3A2218", // Warm Earth
      "#7A4D35", // Amber Ochre
      "#EAE6DF", // Calcified Linen Field (Atmosphere pure light)
      "#EAE6DF", // Calcified Linen Field
      "#2B1A14", // Ember recession
      "#0E1416", // Deep Hearth for Chef (Dark canvas)
      "#0E1416", // Hospitality Slate
      "#0A0E10", // Nocturnal Ground
    ]
  );

  // 2. Primary Atmospheric Glow Color & Opacity (Continuous)
  const glow1Color = useTransform(
    scrollYProgress,
    [0.0, 0.14, 0.35, 0.48, 0.58, 0.68, 0.76, 0.88, 1.0],
    [
      "rgba(30, 43, 46, 0.40)",
      "rgba(200, 90, 50, 0.10)",
      "rgba(200, 90, 50, 0.32)",
      "rgba(200, 90, 50, 0.28)",
      "rgba(244, 241, 234, 0.85)", // Inverted light glow for stone atmosphere
      "rgba(244, 241, 234, 0.85)",
      "rgba(200, 90, 50, 0.12)",
      "rgba(30, 43, 46, 0.35)",
      "rgba(14, 20, 22, 0.50)",
    ]
  );

  // 3. Secondary Hearth Glow Color (Continuous)
  const glow2Color = useTransform(
    scrollYProgress,
    [0.0, 0.14, 0.35, 0.48, 0.58, 0.68, 0.76, 0.88, 1.0],
    [
      "rgba(200, 90, 50, 0.05)",
      "rgba(14, 20, 22, 0.65)",
      "rgba(21, 31, 34, 0.75)",
      "rgba(21, 31, 34, 0.70)",
      "rgba(234, 230, 223, 0.90)", // Soft stone light for atmosphere
      "rgba(234, 230, 223, 0.90)",
      "rgba(21, 31, 34, 0.65)",
      "rgba(200, 90, 50, 0.06)",
      "rgba(10, 14, 16, 0.70)",
    ]
  );

  // 4. Subtle Orb Drift Coordinates Linked to Continuous Scroll
  const orb1Y = useTransform(scrollYProgress, [0, 1], [-120, 60]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, -140]);

  // Expose global canvas luminance attribute to document element for styling child elements
  useEffect(() => {
    // Only Atmosphere (theme === "calcified-field") is light scene
    const isLight = theme === "calcified-field";
    if (isLight) {
      document.documentElement.setAttribute("data-scene-luminance", "light");
    } else {
      document.documentElement.setAttribute("data-scene-luminance", "dark");
    }
  }, [theme]);

  return (
    <motion.div
      style={{ backgroundColor }}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden will-change-[background-color]"
      aria-hidden="true"
    >
      {/* Dynamic Atmospheric Glow 1 (Top-Right Radial Beacon) */}
      <motion.div
        style={{
          backgroundColor: glow1Color,
          y: orb1Y,
        }}
        className="absolute -top-32 -right-32 w-[720px] h-[720px] rounded-full blur-[170px] will-change-transform"
      />

      {/* Dynamic Atmospheric Glow 2 (Center-Left Hearth Core) */}
      <motion.div
        style={{
          backgroundColor: glow2Color,
          y: orb2Y,
        }}
        className="absolute top-1/2 -left-48 w-[820px] h-[820px] rounded-full blur-[190px] will-change-transform"
      />

      {/* Subtle Organic Tactile Grain Layer */}
      <div
        className="absolute inset-0 opacity-[0.032] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: "22px 22px",
        }}
      />
    </motion.div>
  );
}
