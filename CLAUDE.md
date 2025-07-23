# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Start development server**: `pnpm dev` or `npm run dev`
  - Runs on http://localhost:3000 with Vite dev server and hot reload
- **Build for production**: `pnpm build` or `npm run build`
- **Preview production build**: `pnpm preview` or `npm run preview`

## Architecture Overview

This is a modern creative web boilerplate combining server-side rendering (SSR) with WebGL animations. The architecture follows an OOP pattern with no frontend framework.

### Core Structure

- **Server**: Express.js server with Pug templates at `server.js`
- **Client**: Vanilla JavaScript OOP architecture in `src/app/`
- **Styling**: SCSS in `src/styles/`
- **Views**: Pug templates in `src/views/`
- **Assets**: Static files in `public/`

### Key Architecture Components

**Application Class** (`src/app/index.js`):
- Main application entry point that orchestrates all components
- Manages page lifecycle, canvas rendering, and routing
- Handles preloading and page transitions

**Router System** (`src/app/classes/Router.js`):
- SPA routing with history API
- Handles page transitions with smooth animations
- Fetches new content and updates DOM without full page reloads

**Page System** (`src/app/classes/Page.js`):
- Base class for all pages with animation lifecycle
- Automatic animation registration via data attributes
- Built-in lazy loading and event management

**Canvas System** (`src/app/canvas/`):
- Three.js WebGL rendering with page-specific scenes
- Shared camera and renderer across page transitions
- Responsive design with automatic resize handling

**Animation Framework**:
- GSAP-based animations with ScrollTrigger integration
- Declarative animations via data attributes
- Built-in text splitting and reveal animations

### Environment Setup

The project uses Vite for bundling with a custom SSR setup:
- Development: Vite dev server middleware in Express
- Production: Static files served from `dist/`
- GLSL shaders supported via `vite-plugin-glsl`

### Content Management

Sanity CMS integration (currently commented out in server.js):
- Environment variables: `SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_API_TOKEN`
- Image optimization with WebP conversion

### Event System

Custom event emitter (`src/app/utils/events.js`) for component communication:
- Global resize, touch, and scroll events
- Page lifecycle events (preloaded, etc.)
- Animation update loop coordination

### Smooth Scrolling

Lenis smooth scroll integration with GSAP ScrollTrigger:
- Managed by Router for navigation states
- Automatic cleanup on page transitions

### Development Features

- **Stats.js**: Performance monitoring in development mode
- **Debug Grid**: Visual grid overlay in development
- **Auto-bind**: Automatic method binding for all classes using `auto-bind`

### Page Creation Pattern

New pages should:
1. Extend the base `Page` class
2. Define page-specific selectors and animations
3. Create corresponding Pug template in `src/views/pages/`
4. Add route mapping in `src/app/index.js`
5. Create Three.js scene in `src/app/canvas/` if needed