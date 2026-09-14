# PROJECT TODO: Creative Restaurant Landing Page

## Phase 1: Foundation & Setup
- [x] Next.js 15 + TypeScript + Tailwind CSS setup.
- [x] Google Fonts (IBM Plex Sans Arabic) & strict non-italic Arabic setup.
- [x] Verdigris & Calcified Linen palette setup in `globals.css`.

## Phase 2: Menu-Centric Architecture & Data
- [x] Update `types.ts` with comprehensive Menu Categories and Dish pricing structures.
- [x] Populate `restaurant-data.ts` with real-world menu items across 5 categories with prices and descriptions.
- [x] Build `MenuSection.tsx` (Editorial Split-Gazette with category filters, clear prices, and live visual preview).

## Phase 3: Full-Width Overlay Navbar & Layout Flow
- [x] Refactor `Navbar.tsx` to Full-Width Overlay Navbar pinned at top (`w-full border-b backdrop-blur-md`) with internal `max-w-7xl` container.
- [x] Reorder `page.tsx`: Hero -> Menu (Primary) -> Philosophy -> Atmosphere -> Chef -> Visit -> Footer.
- [x] Ensure smooth IntersectionObserver chapter transitions.

## Phase 4: Verification & Polish
- [x] Zero ESLint errors/warnings (`npm run lint`).
- [x] Production build passes cleanly (`npm run build`).
- [x] Test menu scanning, category switching, and mobile responsiveness.
