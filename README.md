# Ishimwe Lina Assoumani · Portfolio

Personal portfolio of Ishimwe Lina Assoumani: software developer, creative technologist, product builder, and CEO & Co-Founder of QLine Technologies.

Art direction: cinematic burgundy and dark velvet. Grenze for display type, Geist for text.

## Stack

- Next.js 16 (App Router), React 19, TypeScript
- Tailwind CSS v4 (tokens in `src/app/globals.css`)
- GSAP + ScrollTrigger (scroll choreography), Lenis (smooth scrolling), Framer Motion (UI transitions)

## Where things live

| What | File |
| --- | --- |
| Name, links, portrait, CV | `src/lib/site-config.ts` |
| The six projects | `src/lib/projects.ts` |
| Capabilities, process, ambitions | `src/lib/content.ts` |
| Sections | `src/components/sections/` |
| Project scenes and pinned showcase | `src/components/projects/` |
| Scroll choreography (data attributes) | `src/components/motion/ScrollScenes.tsx` |

## Adding the portrait

Put the photo in `public/` (for example `public/portrait.jpg`) and set `portrait.src` in `src/lib/site-config.ts`. Every portrait frame updates.

## Contact form delivery

The form posts to `/api/contact`, which sends through [Resend](https://resend.com) when these environment variables are set:

```
RESEND_API_KEY=...
CONTACT_TO_EMAIL=you@example.com
CONTACT_FROM_EMAIL="Portfolio <hello@your-domain>"   # optional
```

Without them the form says nothing was sent and offers the visitor's email app instead.

## Develop

```bash
npm install
npm run dev
```

```bash
npm run build
```
