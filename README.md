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

## Environment variables

Create a `.env.local` file when you want to connect the waitlist form:

```bash
VITE_FORMSPREE_FORM_ID=your_form_id
```

The form posts to `https://formspree.io/f/{form_id}` when `VITE_FORMSPREE_FORM_ID` is set. If you need to use a full endpoint instead, set `VITE_FORMSPREE_ENDPOINT`.

`VITE_WAITLIST_ENDPOINT` is still supported as a legacy fallback.

## Deploy notes

- Static site output is generated with `npm run build`
- Production metadata lives in [index.html](/Users/mekula/ai-course-site/index.html:1)
- Social preview asset lives in [public/og-image.svg](/Users/mekula/ai-course-site/public/og-image.svg:1)

## Current focus

- Launch-ready landing page quality
- Stronger bilingual UX
- Mobile-first polish
- A more premium, less generic product feel
