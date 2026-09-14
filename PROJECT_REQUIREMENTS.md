# PROJECT REQUIREMENTS: Creative Restaurant Landing Page

## 1. Project Overview & Core Purpose (Product-First Shift)
A real, premier restaurant website for "رَنِـيـم | RANEEM" — an avant-garde fine-dining destination in Riyadh.
The primary purpose is NOT an abstract cinematic portfolio; it is an editorial, menu-centric restaurant experience designed to answer the visitor's core question: "What can I eat here, what are the culinary creations, and how do I book?"

## 2. Core Functional Requirements (Must Have)
- **Frontend Only:** Single-page architecture powered by Next.js 15 (App Router), React 19, TypeScript, and Tailwind CSS.
- **Menu as the Primary Experience:**
  - Placed directly following the Hero entrance.
  - Divided into 5 transparent, real-world categories:
    1. المفتتحات والمقبلات (Starters)
    2. أطباق الجمر والصوان (Mains / Embers)
    3. أرض نجد والبساتين (Vegetarian / Earth)
    4. التحليات الباردة (Desserts)
    5. المنعشات والمشروبات المقطرة (Craft Elixirs)
  - Every dish displays clear name, description, ingredients, explicit price in SAR, and dietary tags.
  - Scannable, editorial layout (Double-spread / Split Gazette preview).
- **Full-Width Overlay Navbar:**
  - Spans the full viewport width (`w-full`) as a sleek, translucent luxury overlay pinned at the top.
  - Internal content strictly respects the global container `max-w-7xl mx-auto px-6 sm:px-8 lg:px-12`.
  - Seamlessly adapts its border, background tint, and active link indicators as the user scrolls between chapters.
  - Highlighting "قائمة الطعام" (Menu) as a primary discoverable action.
- **Narrative Section Flow:**
  1. Hero (100vw Full-Bleed Canvas)
  2. The Menu (The Core Product Experience)
  3. Philosophy & Terroir (Origin story)
  4. Atmosphere & Spaces (Calcified light field)
  5. The Chef & Artisans
  6. Visit & Simulated Reservation
  7. Epilogue Footer
- **Visual DNA & Approved Palette:**
  - Deep Slate Verdigris (`#0E1416`), Pine Charcoal (`#151F22`), Scorched Persimmon (`#C85A32`), Calcified Linen (`#EAE6DF`).
- **Strict Arabic Typography:**
  - 100% non-italic Arabic typography with sculptural weight and scale contrast.
- **Accessibility & Performance:** Zero layout shift, full `prefers-reduced-motion` compliance.
