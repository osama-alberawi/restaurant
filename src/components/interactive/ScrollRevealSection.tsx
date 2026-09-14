"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollRevealSectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function ScrollRevealSection({ id, children, className = "" }: ScrollRevealSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Measure exact progress as section passes through viewport:
  // 0%   = bottom of section touches bottom of screen (just entering from below)
  // 30%  = fully into view
  // 70%  = centered and readable
  // 88%  = starting to leave towards the top
  // 100% = top of section has exited the top of screen
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Precise bidirectional fade:
  // - [0 to 0.28]: Smooth Fade IN when scrolling DOWN into it
  // - [0.28 to 0.72]: Completely solid 100% visible while reading in center
  // - [0.72 to 0.98]: Smooth Fade OUT as you scroll UP past it, and instantly fades back IN if you scroll back DOWN!
  const opacity = useTransform(scrollYProgress, [0, 0.28, 0.72, 0.98], [0, 1, 1, 0]);
  
  // Natural depth scale: enters at 0.94, stays 1.0 in view, shrinks to 0.94 as it exits top
  const scale = useTransform(scrollYProgress, [0, 0.28, 0.72, 0.98], [0.94, 1, 1, 0.94]);
  
  // Subtle vertical float translation
  const y = useTransform(scrollYProgress, [0, 0.28, 0.72, 0.98], [60, 0, 0, -60]);

  // Subtle blur effect on the fringes of the transition
  const filter = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 0.98],
    ["blur(8px)", "blur(0px)", "blur(0px)", "blur(8px)"]
  );

  return (
    <div id={id} ref={containerRef} className={`relative will-change-transform py-12 ${className}`}>
      <motion.div
        style={{
          opacity,
          scale,
          y,
          filter,
        }}
        className="w-full h-full transition-all duration-150"
      >
        {children}
      </motion.div>
    </div>
  );
}
