# PROJECT_STACK.md

Read this together with `MY_AI_DEVELOPMENT_GUIDE.md`. The Guide defines
*how* to build; this file defines *what* to build with for this project.

## Platform Defaults

These apply to every project, regardless of type (landing page,
dashboard, SaaS, booking system, etc.).

### Frontend
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

### Deployment
- Vercel

### DNS / Security / CDN
- Cloudflare

### Monitoring
- Sentry

---

## Application Layer

Use only what this specific project actually needs. Do not add a
category here just because it exists in this file — each one applies
only if the project genuinely requires it (e.g. a simple landing page
or portfolio likely needs none of these).

### Backend (if the project needs server-side logic beyond static pages)
- Next.js Server Actions
- Next.js Route Handlers (API Routes)

### Database (if the project needs persistent data)
- PostgreSQL
- Prisma
- Default provider: Neon

### Authentication (if the project needs user accounts/roles)
- Clerk

### Storage (if the project needs file/image uploads)
- Cloudflare R2

### Email (if the project needs transactional emails)
- Resend
