# PROJECT DECISIONS: Creative Restaurant Landing Page

## Decision Log

### 1. Motion Package Standard
- **Decision:** Use `framer-motion` exclusively. Do not install both `framer-motion` and `motion`.
- **Date:** 2026-09-14
- **Reason:** Approved by user for advanced orchestration, exit animations, and layout transitions.

### 2. Smooth Scrolling (Lenis) Status
- **Decision:** Keep Lenis optional and deferred for now. Rely on native CSS and Framer Motion first.
- **Date:** 2026-09-14
- **Reason:** Reassess only after the core visual narrative and scroll behavior are fully tested.

### 3. Reservation System Boundary
- **Decision:** Simulated client-side reservation experience with full interactive UI (date, guest count, dining zone, confirmation view) with explicit disclaimer note. No backend, database, or email service.
- **Date:** 2026-09-14
- **Reason:** Adhering strictly to frontend-only scope.

### 4. Selected Color System: "Oxidized Verdigris & Calcified Linen"
- **Decision:** Adopt System 1 as the official art-directed palette:
  - **Dominant Base:** Deep Slate Verdigris (`#0E1416`)
  - **Secondary Depth:** Pine Charcoal (`#151F22`)
  - **Light/Relief Field:** Calcified Linen (`#EAE6DF`) in Atmosphere section
  - **High-Impact Accent:** Scorched Persimmon / Oxidized Apricot (`#C85A32`)
  - **Typography:** Calcified Ivory (`#F4F1EA`) and Muted Slate (`#8B9B9E`)
- **Date:** 2026-09-14
- **Reason:** Approved by user to create a deeply original, culinary, avant-garde editorial experience that moves completely away from standard black+gold or black+red clichés.

### 5. Floating Pill Navbar Architecture (Clarified)
- **Decision:** The Navbar is strictly a floating, lightweight, translucent, pill-shaped (`rounded-full`) component clearly separated from the viewport edges. Its horizontal outer boundaries snap to the `max-w-7xl` container matching the footer, but it is NOT a full-width flat bar. It houses the logo on one side, centered navigation links, and the primary reservation CTA on the opposite side.
- **Date:** 2026-09-14
- **Reason:** User clarification based on Huge reference spatial confidence and floating elegance.

### 6. Full-Bleed 100vw Hero Canvas (No Descriptive Clutter)
- **Decision:** Hero spans 100vw × 100svh with pure cinematic visual impact, zero side-by-side or inside-the-box paragraphs, monumental non-italic Arabic display typography, and minimal coordinates.
- **Date:** 2026-09-14
- **Reason:** Breaks template conventions and delivers a movie-poster-level arrival experience.
