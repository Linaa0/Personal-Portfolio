# Personal Portfolio — ISHIMWE Lina Assoumani

A modern, dark-mode personal portfolio built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**.

## Requirements

- **Node.js 20.9+** (required for Next.js 16)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy on Vercel

1. Push this repo to GitHub
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js. Use **Node.js 20.x or 22.x** in project settings if needed
4. Build command: `npm run build` · Output: Next.js default

## Customize

- **Photo:** `public/profile.png` (used in `src/components/About.tsx`)
- **SafeZone GitHub:** Add the link in `src/data/portfolio.ts` when ready
- **Content:** All copy lives in `src/data/portfolio.ts`

## Tech Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript 5.9
- Tailwind CSS v4
- Lucide React (icons)
