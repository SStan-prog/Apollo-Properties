# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Apollo Properties Osaka is a real estate website for furnished apartments in Osaka, Japan. It's built with Astro and uses Sanity CMS for content management, deployed to Netlify.

## Commands

### Astro Frontend (root directory)
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

### Sanity Studio (sanity-project directory)
```bash
cd sanity-project
npm run dev      # Start Sanity Studio locally
npm run build    # Build Sanity Studio
npm run deploy   # Deploy Sanity Studio
```

## Architecture

### Monorepo Structure
- **Root**: Astro frontend application
- **sanity-project/**: Sanity CMS studio (separate npm project with its own node_modules)

### Tech Stack
- **Astro 5** with SSG (Static Site Generation)
- **Tailwind CSS** for styling
- **React** and **Svelte** for interactive components (using Astro islands)
- **Sanity v3** for CMS with `@sanity/astro` integration
- **Netlify** adapter for deployment

### Sanity Integration
- Project ID: `3ans7o2s`, Dataset: `production`
- Two content types defined in `sanity-project/schemas/`:
  - `article` - Blog posts with title, slug, excerpt, featured image, and body (blockContent)
  - `listing` - Property listings with name, address, price, size, availability date, images, and description
- API functions in `src/sanity/api.js` for fetching content
- Two Sanity clients exist:
  - `src/sanity/sanityClient.js` - Manual client (useCdn: true)
  - `sanity:client` from `@sanity/astro` - Used in API functions (useCdn: false for build)

### Dynamic Routes
- `/blog/[slug].astro` - Individual blog articles
- `/listings/[slug].astro` - Individual property listings
- Both use `getStaticPaths()` for SSG

### Component Patterns
- Interactive components use React (`.tsx`) or Svelte (`.svelte`) with client directives (`client:load`, `client:idle`)
- Static components use Astro (`.astro`)
- Portable Text from Sanity rendered via `@portabletext/react` or custom `sanityPortableText()` function

### Styling
Custom Tailwind color palette defined in `tailwind.config.cjs`:
- `blue-100` through `blue-700` (primary brand colors)
- `grey-100` through `grey-700`
- `green-100` through `green-700`
- Fonts: `font-heading` (Kumbh Sans), `font-body` (Inter)
