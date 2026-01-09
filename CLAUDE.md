# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

This project uses **Bun** as the package manager:

```bash
bun run dev      # Start development server (localhost:3000)
bun run build    # Build for production
bun start        # Start production server
bun run lint     # Run ESLint
```

## Tech Stack

- **Framework**: Next.js 16.1.1 with App Router
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS v4 (via @tailwindcss/postcss plugin)
- **Animations**: Motion (Framer Motion)
- **Runtime**: React 19.2.3

## Architecture

### Data Flow
- `app/page.tsx` - Server Component that fetches publications from Semantic Scholar API at build time
- `lib/semantic-scholar.ts` - API client for fetching author publications (static at build time via `revalidate: false`)
- `app/components/HomePage.tsx` - Client Component receiving publications as props

### Directory Structure
- `app/` - Next.js App Router (layouts, pages, components)
- `app/components/sections/` - Page sections (Hero, About, Experience, Projects, Publications, Skills, Contact, Footer)
- `app/components/ui/` - Reusable UI components (Lightbox)
- `app/components/icons/` - Custom SVG icon components
- `lib/constants/` - Static data (experiences, skills, navigation, animations)
- `lib/hooks/` - Custom React hooks (useScrolled, useBodyScrollLock, useReducedMotion)
- `lib/types/` - TypeScript type definitions
- `public/` - Static assets

### Theming
- Theme toggle with localStorage persistence
- `ThemeProvider` context for theme state management
- CSS variables in `globals.css` define light/dark color schemes
- Theme applied via `.dark` class on `<html>` element
- Inline script in layout prevents flash of wrong theme

## Key Conventions

- Server Components by default; add `'use client'` directive only when needed
- Path alias `@/*` maps to project root
- Font variables: `--font-geist-sans`, `--font-geist-mono`
- CSS custom properties for theming: `--bg-primary`, `--text-primary`, `--accent-blue`, etc.
- Respects `prefers-reduced-motion` media query
