# PROJECT INITIAL INSTRUCTIONS

Before building anything, read and follow:

1. `MY_AI_DEVELOPMENT_GUIDE.md`
2. `PROJECT_STACK.md`

These files are the project's technical source of truth.

I am the product owner. I may not be an expert in all of the technologies
or technical decisions involved.

You are responsible for proposing the correct implementation details
within the approved stack. Do not implement them until I approve the
plan when approval is required, and follow the rules in the Guide.

## IMPORTANT

- Do not change the Platform Defaults defined in `PROJECT_STACK.md`
  without asking me first.
- Application Layer technologies (in `PROJECT_STACK.md`) are
  conditional — use them only when the project genuinely requires
  them. Deciding not to use one is not a stack change; it's normal
  analysis. Explain that decision as part of your `FIRST RESPONSE`,
  same as any other requirement.
- Do not add an Application Layer technology simply because it is
  listed in `PROJECT_STACK.md`.
- Do not introduce new frameworks, libraries, databases, services, or
  infrastructure just because you prefer them.
- Use the simplest solution that properly fits the requirements.
- Do not over-engineer the project.
- Optional technologies must not be added unless there is a genuine
  technical need.
- Do not make major architectural decisions silently.
- If an important technical decision is needed, explain it to me in
  simple language and ask for approval when required.

## BEFORE CODING

Before writing implementation code:

1. Read `MY_AI_DEVELOPMENT_GUIDE.md`.
2. Read `PROJECT_STACK.md`.
3. Understand the project idea and requirements.
4. Create or update `PROJECT_REQUIREMENTS.md`.
5. Create `PROJECT_ARCHITECTURE.md`.
6. Create `PROJECT_DECISIONS.md`.
7. Create `PROJECT_TODO.md`.
8. Review the project for relevant technical concerns such as:
   - Security
   - Performance
   - SEO
   - Accessibility
   - Responsive/mobile experience
   - Testing
   - Maintainability
   - Error handling
   - Scalability when relevant
9. Identify any optional technologies or major technical decisions
   that may be useful.
10. Explain the important decisions in simple language.
11. Ask for my approval before starting implementation.

Do not assume that a technology is necessary simply because it exists
in the optional section of the stack.

## DURING DEVELOPMENT

- Follow the approved architecture and stack.
- Keep the project documentation updated.
- Update `PROJECT_REQUIREMENTS.md` when the approved scope changes.
- Update `PROJECT_ARCHITECTURE.md` when the architecture changes
  meaningfully.
- Update `PROJECT_DECISIONS.md` when important technical decisions
  are made.
- Update `PROJECT_TODO.md` as tasks are added, completed, or changed.
- Do not silently change major requirements or architecture.
- If something needs to change, explain why and ask for approval when
  appropriate.

## USER OVERRIDE

My explicit decisions always take priority over optional technical
recommendations.

If I ask you to remove, replace, simplify, or change a technology,
feature, implementation, or design decision:

- Follow my decision.
- Explain briefly if there is an important technical consequence.
- Do not silently replace it with another technology.
- Do not reintroduce something I removed unless I ask for it.
- Keep the rest of the project unchanged unless the change requires
  related modifications.

Unless I explicitly say otherwise, these decisions apply to the
current project only.

## FIRST RESPONSE

Before implementation, give me:

### 1. Architecture
Briefly describe what kind of project this is (e.g. landing page,
dashboard, SaaS...) and explain simply how the application will work.

When the project has meaningful client-side state, also explain where
that state will live and how it will be managed. Prefer the simplest
appropriate approach and do not introduce a state-management library
unless there is a genuine need.

### 2. Technology Roles
Explain what each major technology will do in this specific project.

### 3. Requirements
Summarize the agreed project requirements and point out anything
that is unclear.

### 4. UX Flow

Describe the main user journeys and how users move through the
application.

Identify the important steps, interactions, and decision points in
each core flow.

Also consider important UI states and edge cases within each core
flow, such as loading, empty, success, error, validation, disabled,
not-found, and permission-related states when relevant.

Keep the flows as simple as possible while satisfying the requirements.
If a flow appears unnecessarily complex or may create a usability
problem, explain why and propose a simpler alternative.

### 5. Design System & Visual Direction

Define the project's initial visual direction and design system.

When relevant, describe:

- Typography and hierarchy
- Color system
- Spacing
- Layout/grid
- Containers
- Border radius
- Shadows
- Buttons and form elements
- Cards and other major UI patterns
- Icon style
- Visual hierarchy
- Overall visual character

The design system should be consistent with the project's purpose,
audience, and brand.

Do not introduce unnecessary design complexity.

### 6. Database
If the project needs persistent data, describe the initial database
structure. If not, state clearly that no database is needed and why.

### 7. Authentication & Authorization
If the project needs user accounts/roles, explain how users, roles,
and permissions will work. If not, state that authentication is not
needed.

### 8. Storage & External Services
If the project needs file uploads, transactional emails, or other
external services, explain how they will work. If not, state that
none are needed.

### 9. Responsive Experience
Explain how the experience will adapt to mobile, tablet, and desktop.
The mobile design does not have to be a smaller copy of the desktop
design; layout and component arrangement may change when appropriate.

### 10. Motion & Interaction Design

Analyze the project for meaningful motion and interaction opportunities.
Do not assume that motion is unnecessary simply because it is not
explicitly requested.

For projects where motion can improve the visual experience, storytelling,
navigation, or user feedback, propose appropriate animations and interactions.

Consider patterns such as:

- Entrance / reveal animations
- Scroll-triggered reveals
- Staggered animations
- Hover interactions
- Micro-interactions
- Parallax
- Sticky and scroll-driven interactions
- Section-based theme/color transitions
- Image reveal and image zoom
- Text animations
- Horizontal scroll experiences
- Card transitions and depth effects
- Page transitions
- SVG animations
- Background motion
- More advanced creative interactions when the project genuinely benefits
  from them

For each meaningful motion idea, explain:
- What moves or changes
- What triggers it
- Why it improves the experience
- Whether it is simple, medium, or advanced
- Which approved technology would implement it

If the `ui-ux-pro-max` skill (or an equivalent design-tooling skill) is
available, use it as an additional source of concrete motion presets,
interaction patterns, and design ideas for this section.

Do not depend on the skill being available. If it is not available,
perform the motion and interaction analysis yourself based on the
project's goals, visual direction, and user experience.

Do not add motion just for decoration.
Do not introduce animation libraries unless there is a genuine technical need.
Follow the animation rules defined in `MY_AI_DEVELOPMENT_GUIDE.md`.

### 11. Technical Quality Review
Identify anything important regarding security, performance, SEO,
accessibility, testing, error handling, or maintainability.

When relevant, also consider internationalization (i18n), RTL/LTR
behavior, and language-specific responsive and typography requirements.

### 12. Optional Technologies
For every optional technology you believe may be relevant, classify it as:

- Not needed
- Useful but optional
- Recommended
- Required

Explain why in simple language.

Do not install or introduce optional technologies before approval.

### 13. Risks & Decisions
Tell me what decisions, risks, or trade-offs require my attention.

Then WAIT for my approval before starting implementation.

---

# PROJECT IDEA

اسم المشروع:


الفكرة باختصار:


المستخدمون (مين رح يستخدم النظام، وشو دور كل نوع):


الصفحات / الشاشات الأساسية:


الميزات الأساسية (Must have):


ميزات لاحقة (Nice to have، مو ضرورية الآن):


ملاحظات أو قيود خاصة (مثلاً: مركز طبي واحد أو أكثر، لغة الموقع، إلخ):


ابدأ أولًا بتحليل الفكرة والملفات المرفقة حسب التعليمات.

لا تبدأ بكتابة أو تعديل كود التنفيذ قبل أن أراجع الـFIRST RESPONSE
وأعطي موافقتي على الخطة عندما تكون الموافقة مطلوبة.
