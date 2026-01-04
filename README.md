# Abiud Cantu - Portfolio Website

Personal portfolio website showcasing my work as a Research Technician and Developer, featuring experience, projects, publications, and skills.

## Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript
- **UI**: React 19.2.3
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (Framer Motion)
- **Package Manager**: Bun

## Features

- Animated hero section with pixel art portrait
- About section with education details
- Experience timeline with project highlights
- Featured projects with images and videos
- Publications list fetched from Semantic Scholar API
- Skills showcase organized by proficiency level
- Contact section with links
- Responsive design with dark theme
- Lightbox for viewing images

## Getting Started

### Prerequisites

- [Bun](https://bun.sh/) installed

### Installation

```bash
# Clone the repository
git clone https://github.com/Abiud/abiud-portfolio.git
cd abiud-portfolio

# Install dependencies
bun install
```

### Development

```bash
bun run dev      # Start development server (localhost:3000)
bun run build    # Build for production
bun start        # Start production server
bun run lint     # Run ESLint
```

## Project Structure

```
app/
├── layout.tsx           # Root layout with fonts
├── page.tsx             # Home page (fetches publications)
├── not-found.tsx        # 404 page
├── globals.css          # Tailwind CSS with theme variables
└── components/
    ├── HomePage.tsx     # Main page content
    ├── Navbar.tsx       # Navigation bar
    └── PublicationList.tsx  # Publications display
```
