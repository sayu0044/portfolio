# Ashley — Portfolio (Next.js 15)

Portfolio website built with **Next.js 15**, **App Router**, **TypeScript**, and **Tailwind CSS**.
Converted from a static HTML template into a fully structured, production-ready Next.js project.

---

## Stack

| Tool | Version | Why |
|---|---|---|
| Next.js | 15.3.x | App Router, Server Components, Image optimization |
| React | 19 | Latest stable |
| TypeScript | 5 | Full type safety |
| Tailwind CSS | 3.4 | Utility-first, mobile-first |
| next/font | built-in | Outfit font, zero-CLS loading |

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → http://localhost:3000

# 3. Build for production
npm run build
npm start
```

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          ← Root layout, font, metadata, SEO
│   ├── page.tsx            ← Home page — assembles all sections
│   └── globals.css         ← Base styles, CSS animations, design tokens
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx      ← Sticky header, mobile hamburger, active nav
│   │   ├── Footer.tsx      ← Newsletter, links, social icons
│   │   └── MobileMenu.tsx  ← Full-screen mobile menu overlay
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx         ← Dark hero with orbs, headline, stats
│   │   ├── AboutSection.tsx        ← Photo, bio, skill bars
│   │   ├── SkillsSection.tsx       ← Dark section, 4 service cards
│   │   ├── ProjectsSection.tsx     ← Portfolio grid (2 featured + 4 small)
│   │   ├── TestimonialsSection.tsx ← Touch-swipeable testimonial slider
│   │   ├── BlogSection.tsx         ← Article cards with images
│   │   └── ContactSection.tsx      ← Dark section, form + contact info
│   │
│   ├── ui/
│   │   ├── AnimatedOrbs.tsx   ← CSS-only background orb decoration
│   │   ├── ScrollProgress.tsx ← Top progress bar (client component)
│   │   └── ArrowIcon.tsx      ← Reusable SVG arrow
│   │
│   └── hooks/
│       └── useScrollReveal.ts ← IntersectionObserver scroll animations
│
└── lib/
    └── data.ts              ← All portfolio content (edit here!)
```

---

## Customization

### Update your content
All content lives in `src/lib/data.ts`:

```ts
export const personal = {
  name: "Ashley",
  role: "Creative Developer & UI/UX Designer",
  bio: "...",
  email: "hello@ashley.design",
  // ...
};

export const projects = [ /* add your projects */ ];
export const testimonials = [ /* add testimonials */ ];
export const blogPosts = [ /* add posts */ ];
```

### Change colors
Edit CSS variables in `src/app/globals.css`:

```css
:root {
  --color-accent: #FF9800;   /* orange — change to your brand color */
  --color-bg-dark: #000000;
  --color-bg-soft: #f2f2f2;
}
```

Or update Tailwind config in `tailwind.config.ts`.

---

## Mobile-First Design

- **Base CSS** = mobile (375px+)
- `sm:` = 480px+
- `md:` = 768px+
- `lg:` = 1024px+
- `xl:` = 1280px+

No desktop styles are "made responsive" — everything starts from mobile and expands.

---

## Performance Approach

- **Server Components** by default — `'use client'` only where needed (slider, menu, form)
- **next/image** for all images — automatic WebP, lazy loading, size hints
- **next/font** for Outfit — self-hosted, zero layout shift
- **CSS-only orb animations** — no GSAP or heavy JS
- **IntersectionObserver** for scroll reveal — passive, no scroll jank
- **Passive event listeners** on scroll handlers
- **`prefers-reduced-motion`** — all animations respect the system setting
- **Touch target minimum 44px** on all interactive elements
- **Safe area insets** for iOS notch

---

## Deployment

```bash
# Vercel (recommended)
npx vercel

# Docker
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## License
MIT — edit and use freely.
