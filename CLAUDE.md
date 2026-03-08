# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Landing page for the Effective Altruism Australia Intro to EA Fellowship. Single-page React app, no routing.

## Commands

- `npm run dev` - Start dev server on port 3000
- `npm run build` - Production build (outputs to `dist/`)
- `npm run lint` - Type-check with `tsc --noEmit`
- `npm run preview` - Preview production build
- `npm run clean` - Remove `dist/`

## Architecture

Single-page app with two main files:

- `src/content.ts` - All site copy, links, and structured content in a single `siteContent` export. Edit this file to change text, URLs, dates, or FAQ items.
- `src/App.tsx` - Full page layout as one component. Uses `siteContent` for all displayed text. Scroll-triggered animations via `motion/react` (Framer Motion). FAQ accordion is the only interactive state.

## Stack

- React 19, TypeScript, Vite 6
- Tailwind CSS v4 (using `@tailwindcss/vite` plugin, config in `@theme` block in `src/index.css`)
- `motion/react` for scroll animations
- `lucide-react` for icons

## Design Tokens

Custom color palette and fonts defined in `src/index.css` under `@theme`:

- Colors: `eaa-warm-*`, `eaa-teal-*`, `eaa-neutral-950`, `eaa-bronze-500`
- Fonts: Merriweather (serif, headings), Mukta (sans, body)

Use these token names in Tailwind classes (e.g., `bg-eaa-teal-700`, `text-eaa-warm-100`).

## Images

Static images in `src/assets/` are imported directly in `App.tsx`. Logos are loaded from external URLs defined in `siteContent.links`.
