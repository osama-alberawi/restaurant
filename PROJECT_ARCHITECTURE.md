# PROJECT ARCHITECTURE: Creative Restaurant Landing Page

## 1. System Overview & Component Structure
```
src/
├── app/
│   ├── layout.tsx         # Root layout, Google Fonts (IBM Plex Sans Arabic), metadata
│   ├── page.tsx           # Page orchestrator following the revised narrative flow
│   └── globals.css        # Tailwind directives and Verdigris/Linen palette variables
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx     # Full-Width Overlay Navbar with internal max-w-7xl alignment
│   │   └── Footer.tsx     # Editorial footer aligned to max-w-7xl
│   ├── sections/
│   │   ├── HeroSection.tsx        # 100vw full-bleed canvas, zero clutter
│   │   ├── MenuSection.tsx        # PRIMARY PRODUCT EXPERIENCE: 5 categories & live preview
│   │   ├── PhilosophySection.tsx  # Terroir, embers & origin story
│   │   ├── AtmosphereSection.tsx  # Calcified linen light field & architectural spaces
│   │   ├── ChefSection.tsx        # Head Chef philosophy & artisanal pillars
│   │   └── VisitSection.tsx       # Hours, location, dress code & reservation
│   ├── interactive/
│   │   ├── AmbientBackdrop.tsx    # Chapter-based chromatic atmosphere transitions
│   │   └── ReservationModal.tsx   # Simulated luxury reservation workflow
│   └── ui/
├── data/
│   └── restaurant-data.ts # Comprehensive menu items, prices, categories & metadata
├── lib/
│   ├── types.ts           # TypeScript interfaces for Menu, Dishes, Categories
│   └── utils.ts           # Classnames merger
└── hooks/
    └── useActiveSection.ts # IntersectionObserver tracker for smooth theme adaptation
```

## 2. Menu Architecture & State Management
- **Category Filter State:** Client-side React state tracking active category (`starters` | `mains` | `vegetarian` | `desserts` | `beverages`).
- **Interactive Dish Spotlight:** Hover / tap state triggering high-resolution photographic reveals in the synchronized visual panel.
- **Sticky Filter Ribbon:** Remains accessible during menu scrolling to allow instant category jump.

## 3. Full-Width Overlay Navbar
- Stretches across the full screen width (`w-full`) pinned at `top-0`.
- Translucent backdrop blur (`backdrop-blur-md`) with hairline bottom border (`border-b border-white/10`).
- Inner flex container wrapped in `max-w-7xl mx-auto px-6 sm:px-8 lg:px-12` aligning logo, centered links, and reservation button with the page grid.
