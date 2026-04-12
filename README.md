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
VITE_WAITLIST_ENDPOINT=https://your-endpoint.example.com
```

The waitlist form only shows a real success state when this endpoint is configured and returns a successful response.

## Deploy notes

- Static site output is generated with `npm run build`
- Production metadata lives in [index.html](/Users/mekula/ai-course-site/index.html:1)
- Social preview asset lives in [public/og-image.svg](/Users/mekula/ai-course-site/public/og-image.svg:1)

## Current focus

- Launch-ready landing page quality
- Stronger bilingual UX
- Mobile-first polish
- A more premium, less generic product feel
