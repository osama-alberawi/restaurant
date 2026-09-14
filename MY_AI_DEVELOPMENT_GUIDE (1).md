# MY_AI_DEVELOPMENT_GUIDE.md

This is my personal, permanent development guide. It applies to every project I build.
Read this file together with `PROJECT_STACK.md` before starting any work.

---

## 1. Development Philosophy

- Prefer simplicity over unnecessary complexity.
- Build only what the requirements need.
- Avoid over-engineering.
- Prefer established solutions over custom implementations.
- Do not add dependencies without a clear reason.
- Prioritize maintainability and security.

---

## 2. Architecture Principles

- Prefer a single Next.js application by default.
- Do not create a separate backend unless there is a real reason.
- Keep business logic organized and reusable.
- Separate UI, data access, business logic, and validation.
- Do not create unnecessary abstractions.

---

## 3. Code Quality & Maintainability

- Keep code clean, readable, and maintainable.
- Follow clean architecture principles where appropriate.
- Avoid unnecessary abstractions and over-engineering.
- Keep files reasonably focused and avoid excessively large files.
- When a file or component becomes unnecessarily large or difficult to
  understand, consider splitting it into smaller logical units.
- Do not blindly split files just to satisfy an arbitrary line count.
- Treat ~300 lines as a warning signal, not a hard limit. If a file
  exceeds this size, review whether it should be split, but do not
  split it automatically.
- Refactor duplicated or unnecessarily complex code when there is a
  clear benefit.
- Remove unused code, imports, variables, and dependencies.
- Preserve existing functionality when refactoring.

---

## 4. Refactoring

- Refactor when it improves readability, maintainability, performance,
  reliability, or reduces meaningful duplication.
- Do not refactor unrelated code while implementing a feature.
- Before a major refactor, explain what will change and why.
- Preserve behavior unless the refactor intentionally changes it.
- After refactoring, run the relevant quality checks.

---

## 5. Security

- Never hardcode secrets.
- Use environment variables.
- Validate all user input.
- Never trust client-side validation alone.
- Enforce authorization on the server.
- Do not expose sensitive database fields to the client.
- Follow least-privilege principles.
- Do not log passwords, tokens, or sensitive credentials.
- Maintain a `.env.example` file listing every required environment
  variable (with a placeholder value and a one-line note on where to
  obtain it, e.g. "from the Clerk dashboard → API Keys"). Never invent
  or guess actual secret values — leave them for me to fill in.

---

## 6. Database Principles

- PostgreSQL is the default database.
- Prisma is the ORM.
- Use proper relations and constraints.
- Avoid duplicated data unless there is a clear reason.
- Use migrations for schema changes.
- Never modify production data manually without a safe procedure.

---

## 7. Responsive Design

- Every interface must work properly on mobile, tablet, and desktop.
- Mobile is not required to be a smaller copy of the desktop layout.
- The layout, spacing, ordering, navigation, and component structure
  may change between breakpoints when this improves usability.
- Prioritize usability and readability on each screen size.
- Do not force the desktop layout onto mobile when a different layout
  provides a better experience.
- Test important interfaces at common mobile and desktop viewport sizes.

---

## 8. Performance

- Avoid unnecessary client-side rendering.
- Avoid unnecessary network requests and re-renders.
- Prefer Server Components when appropriate.
- Optimize images and media.
- Lazy-load heavy content and components when appropriate.
- Avoid unnecessary dependencies.
- Do not introduce caching systems without a real need.
- Monitor expensive database queries.
- Consider performance impact before introducing heavy libraries.

---

## 9. Technical Quality Review

I am not expected to know which technical concerns are required for a
project.

Before implementation, review the project requirements and identify
important technical areas that I may not have mentioned.

Consider, when relevant:

- Security
- SEO
- Accessibility
- Performance
- Responsive design
- Error handling
- Validation
- Testing
- Caching
- Monitoring / observability
- Analytics
- Internationalization
- Data protection / privacy
- Backup / recovery
- Rate limiting
- Realtime functionality
- Background jobs
- Scalability

Do NOT automatically add tools or libraries for these areas.

For each area that is relevant, briefly explain:

1. Why it matters for this project.
2. What level of implementation is appropriate.
3. Whether the Core Stack already handles it.
4. Whether an additional technology is actually needed.

Do not say "use Testing in every project" or "use SEO in every
project." Instead, evaluate whether it matters for *this* project and
apply the appropriate level.

Ask for my approval before introducing any new technology, service,
dependency, or infrastructure component — whether it turns out to be
"Recommended," "Useful but optional," or "Required."

---

## 10. Optional Technologies

The following technologies are NOT part of the default stack (see
`PROJECT_STACK.md`). I am not expected to know when these
technologies are needed.

The AI is responsible for identifying when one of them may be
technically useful, based on the project requirements — I don't have
to ask for them by name.

When the AI identifies a potential need:

1. Do NOT install or introduce the technology immediately.
2. Explain in simple language:
   - What it does.
   - What problem in this project it solves.
   - Why the current stack is not enough.
   - What happens if we don't use it.
3. Give a simple recommendation:
   - "Not needed"
   - "Useful but optional"
   - "Recommended"
   - "Required"
4. Ask for my approval before adding it.

Never add an optional technology simply because it is popular,
modern, scalable, or considered "best practice."

Once I approve adding an optional technology to a project, update
`PROJECT_STACK.md` to reflect it, and log the decision (what, why,
alternatives considered) in `PROJECT_DECISIONS.md`. I do not need to
edit the stack file myself after approving something.

---

## 11. Animation Rules

Animation libraries are optional. Do NOT add animation libraries
automatically.

Use the simplest solution that achieves the requested result:

1. Prefer CSS / Tailwind for simple transitions, hover effects,
   fades, transforms, and basic UI animations.
2. Use Motion when React component animations, page transitions,
   entrance animations, or interactive UI animations would clearly
   benefit from it.
3. Use GSAP only when complex animation timelines, scroll-driven
   sequences, advanced choreography, or precise animation control
   genuinely require it.
4. Use Lenis only when the project specifically requires customized
   smooth scrolling.
5. Use React Three Fiber + Drei only when the project genuinely
   requires interactive 3D/WebGL.

Before installing any animation library:

- Explain what visual effect requires it.
- Explain why CSS/Tailwind is not sufficient.
- Explain why the proposed library is the appropriate choice.
- Ask for approval before installing it.

Never use multiple animation libraries for the same purpose without a
clear technical reason.

---

## 12. User Override

The user's explicit decisions always take priority over optional
technical recommendations.

If I ask to remove, replace, simplify, or change a technology,
feature, implementation, or design decision:

- Follow my decision.
- Explain briefly if there is an important technical consequence.
- Do not silently replace it with another technology.
- Do not reintroduce the removed technology unless I ask for it.
- Keep the rest of the project unchanged unless the change requires
  related modifications.

This override applies to the current project only, unless I
explicitly state that the decision should become a permanent rule
across all future projects (in which case, remind me to add it to
`MY_AI_DEVELOPMENT_GUIDE.md`).

---

## 13. Product & UX Review

Do not blindly accept requirements, UX flows, design decisions, or
technical requests.

If a requirement, UX flow, design decision, or technical request may
cause an important usability, accessibility, performance, security,
maintainability, or scalability problem:

- Identify the concern clearly.
- Explain the consequence in simple language.
- Propose a better alternative when appropriate.
- Do not change the requirement or decision without my approval.

When a user flow appears unnecessarily complex, identify the
complexity and propose a simpler alternative when appropriate.

The goal is to help me make informed product and technical decisions,
not to override my decisions.

---

## 14. Design Reference Fidelity

When the project includes a design reference such as a screenshot,
Figma design, reference website, image, or other visual reference:

- Analyze the reference before implementation.
- Preserve its intended visual hierarchy, layout, interaction,
  responsive behavior, and overall design intent.
- Do not treat the reference as a superficial visual suggestion.
- Do not invent missing design details as if they were explicitly
  defined by the reference. When something is unclear, make a
  reasonable proposal and clearly identify it as a proposal.
- If an important part of the reference is unclear or technically
  problematic, explain the issue and propose alternatives before making
  significant changes.

---

## 15. Project Documentation

Beyond `MY_AI_DEVELOPMENT_GUIDE.md` and `PROJECT_STACK.md`, every
project maintains its own documentation set:

- `PROJECT_REQUIREMENTS.md` — what we are building.
- `PROJECT_ARCHITECTURE.md` — how it's structured (created once the
  architecture is understood).
- `PROJECT_DECISIONS.md` — important technical/architectural
  decisions, why they were made, and alternatives considered.
- `PROJECT_TODO.md` — remaining and completed tasks.
- `PROJECT_CHANGELOG.md` — only once the project is large enough to
  benefit from a change history.

Do not create documentation files beyond the ones defined above
unless there is a clear reason.

Do not wait for me to manually request these documentation updates —
maintaining them is part of the normal development workflow (see
Section 17).

---

## 16. Design Tooling

If the `ui-ux-pro-max` skill (or an equivalent local design-intelligence
tool) is available in this environment, consult it for UI/UX decisions:
style selection, color palettes, typography, layout, spacing, icons,
charts, and motion.

- This is a design *reference* tool, not a project dependency — using
  it does not by itself introduce any library into the project.
- If it is not available in the current tool/environment, skip this
  section and proceed with the rules below as-is.
- Its recommendations (including any suggested animation library or
  motion preset) are still subject to `Animation Rules` (Section 11)
  and `Optional Technologies` (Section 10) — a recommendation from the
  tool is not by itself approval to install anything. Explain and ask
  first, same as any other optional technology.

---

## 17. AI Development Workflow

### Before Development

1. Understand the requirements.
2. Inspect the existing project.
3. Read `MY_AI_DEVELOPMENT_GUIDE.md` and `PROJECT_STACK.md`.
4. Read `PROJECT_REQUIREMENTS.md`, or create it from the project idea
   and requirements I provide if it doesn't exist yet.
5. Identify the architecture and create `PROJECT_ARCHITECTURE.md`.
6. Identify required technologies (Core Stack).
7. Run Technical Quality Review and identify optional technologies.
8. Create `PROJECT_DECISIONS.md` and `PROJECT_TODO.md`.
9. Explain important decisions.
10. Ask for approval when required.

### During Development

- Work incrementally.
- Keep changes focused.
- Do not rewrite unrelated code.
- Do not introduce unnecessary dependencies.
- Explain important architectural changes.
- Keep `PROJECT_REQUIREMENTS.md` updated when the approved scope
  changes.
- Keep `PROJECT_ARCHITECTURE.md` updated when the architecture
  changes meaningfully.
- Keep `PROJECT_DECISIONS.md` updated when important technical or
  architectural decisions are made.
- Keep `PROJECT_TODO.md` updated as tasks are added, completed, or
  changed.
- Create `PROJECT_CHANGELOG.md` only once the project is large enough
  to benefit from it.

### After Development

Before considering a feature complete, check:

- TypeScript errors.
- Lint errors.
- Runtime errors.
- Console errors and warnings.
- The production build.
- Loading, empty, success, and error states.
- Forms and validation.
- Responsive behavior across breakpoints.
- Performance issues.
- Broken links and missing assets where relevant.
- That existing functionality was not accidentally broken.
- Appropriate tests for the project, if relevant.

Then summarize what was changed, and mention any remaining risks or
TODOs.
