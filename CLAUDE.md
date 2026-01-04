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
- **Runtime**: React 19.2.3

## Architecture

This is a Next.js App Router project:

- `app/` - Next.js App Router directory (layouts, pages, components)
- `app/layout.tsx` - Root layout with Geist font configuration
- `app/globals.css` - Tailwind CSS with theme variables
- `public/` - Static assets

## Key Conventions

- Server Components by default; add `'use client'` directive only when needed
- Path alias `@/*` maps to project root
- Dark mode via `prefers-color-scheme` media query and CSS variables
- Font variables: `--font-geist-sans`, `--font-geist-mono`
