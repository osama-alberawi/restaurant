"use client";

import React, { useState } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { AmbientBackdrop } from "@/components/interactive/AmbientBackdrop";
import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { MenuSection } from "@/components/sections/MenuSection";
import { PhilosophySection } from "@/components/sections/PhilosophySection";
import { AtmosphereSection } from "@/components/sections/AtmosphereSection";
import { ChefSection } from "@/components/sections/ChefSection";
import { VisitSection } from "@/components/sections/VisitSection";
import { Footer } from "@/components/layout/Footer";
import { ReservationModal } from "@/components/interactive/ReservationModal";

export default function HomePage() {
  const activeState = useActiveSection();
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  return (
    <div className="relative min-h-screen selection:bg-[#C85A32] selection:text-white">
      {/* Dynamic Chromatic Backdrop reacting to active chapters */}
      <AmbientBackdrop theme={activeState.theme} />

      {/* Full-Width Overlay Navbar pinned at top */}
      <Navbar
        activeState={activeState}
        onOpenReservation={() => setIsReservationOpen(true)}
      />

      {/* Main Single-Page Cohesive Narrative Canvas */}
      <main className="relative z-10">
        {/* 1. Full-Bleed 100vw Hero Canvas */}
        <HeroSection onOpenReservation={() => setIsReservationOpen(true)} />

        {/* 2. Philosophy & Terroir (Origin Story) */}
        <section id="philosophy" className="relative">
          <PhilosophySection />
        </section>

        {/* 3. THE MENU: PRIMARY PRODUCT EXPERIENCE (Scroll-Driven Pinned Chapter) */}
        <section id="menu" className="relative">
          <MenuSection />
        </section>

        {/* 4. Atmosphere */}
        <section id="atmosphere" className="relative w-full text-[#EAE6DF] bg-[#0E1416]">
          <AtmosphereSection />
        </section>

        {/* 5. The Chef & Kitchen Craft */}
        <section id="chef" className="relative w-full bg-[#0E1416]">
          <ChefSection />
        </section>

        {/* 6. Visit & Simulated Reservation */}
        <section id="visit" className="relative">
          <VisitSection onOpenReservation={() => setIsReservationOpen(true)} />
        </section>
      </main>

      {/* Epilogue Footer */}
      <Footer />

      {/* Avant-Garde Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />
    </div>
  );
}
