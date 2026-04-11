# CLAUDE.md - AI Course Site

## Project Overview

A premium, mobile-first landing page for a beginner AI course. The course teaches people how
to use AI for work, business, school, and daily life in plain English with Nigerian Pidgin support.

**Current version:** V1 landing page (no backend, no auth, no dashboard).

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Vite | Build tool |
| React 19 | UI framework |
| TypeScript | Type safety |
| Tailwind CSS v4 (via `@tailwindcss/vite`) | Styling |
| Framer Motion | Subtle animations only |
| Lucide React | Icons |
| shadcn/ui (Radix primitives) | Accessible UI components |

### Key config notes

- Tailwind is loaded via the `@tailwindcss/vite` plugin, NOT PostCSS. Do not add a `tailwind.config.js` or `postcss.config.js`.
- Tailwind theme tokens (brand colors, fonts) are defined in `src/index.css` inside `@theme {}`.
- Path alias `@/` maps to `src/`.

---

## Folder Structure

```
src/
  components/
    sections/       # One file per landing page section
    ui/             # Shared primitives (Button, FadeIn, SectionLabel)
  lib/
    utils.ts        # cn() helper
  App.tsx           # Root layout, section assembly
  main.tsx
  index.css         # Global styles + Tailwind @theme tokens
```

---

## Design Principles

- **Mobile first.** Design for 375px and scale up.
- **Premium but simple.** Clean whitespace, strong type hierarchy. Not flashy.
- **Warm and human.** Earthy brand palette (brand-500 = `#df7220`). No cold blues or dark sci-fi tones.
- **No cyberpunk AI aesthetics.** No robot imagery, no glowing grids, no circuit boards.
- **No em dashes** in copy. Use commas, full stops, or restructure.

### Color Palette

- **Brand (warm orange):** `brand-50` through `brand-900`. Primary action color: `brand-500`.
- **Neutral (stone/warm grey):** `neutral-50` through `neutral-900`. Body text: `neutral-900`, secondary: `neutral-500`.
- **Backgrounds alternate:** `bg-white`, `bg-neutral-50`, `bg-neutral-900` (dark sections).

### Typography

- **Display/headings:** Sora (600, 700, 800)
- **Body:** Inter (400, 500, 600)
- Heading sizes: `text-4xl` mobile, `text-5xl`/`text-6xl` desktop for H1.
- Use `font-display` class for all section headings.

---

## Animation Guidelines

- Use `FadeIn` wrapper component from `src/components/ui/FadeIn.tsx` for section reveals.
- Framer Motion only where it adds meaning. No decorative spinning or bouncing.
- `whileInView` with `once: true` so animations do not replay on scroll back.
- Keep durations at 0.4–0.6s max.

---

## Writing Style

- Plain, direct English. No jargon.
- Nigerian context throughout (examples, names, references).
- Nigerian Pidgin is a full language here, not a gimmick.
- No em dashes (`—`). Use commas or restructure.
- No filler words like "leverage", "unlock your potential", "game-changing".
- Second person: "you", "your". Not "our learners" or "students".

---

## Waitlist Form

Currently simulated with a `setTimeout`. Replace with a real endpoint before launch:

- Recommended: Formspree, Tally, or a simple Supabase edge function
- The form is in `src/components/sections/Waitlist.tsx`
- Fields: name + email
- Success state shown inline after submit

---

## Running Locally

```bash
npm run dev     # start dev server at http://localhost:5173
npm run build   # production build
npm run preview # preview production build
```

---

## Do Not Build (V1 Scope)

- Authentication or login
- Student dashboard or portal
- Payment integration
- Multi-page routing
- CMS or admin interface
- Any backend beyond a simple form endpoint
