# AI for Everyone

Marketing site for a beginner-friendly AI course built for practical use in Nigeria, with support for plain English and Nigerian Pidgin.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4
- Framer Motion

## Local development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run build
```

## Course Updates Form

The course updates form posts directly to Formspree from [CourseUpdates.tsx](/Users/mekula/ai-course-site/src/components/sections/CourseUpdates.tsx:10). It is for new lessons, live sessions, workshops, and future course drops.

## Deploy notes

- Static site output is generated with `npm run build`
- Production metadata lives in [index.html](/Users/mekula/ai-course-site/index.html:1)
- Social preview asset lives in [public/og-image.svg](/Users/mekula/ai-course-site/public/og-image.svg:1)

## Current focus

- Live-course landing page quality
- Stronger bilingual UX
- Mobile-first polish
- A more premium, less generic product feel
