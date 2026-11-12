# Annu Priya — Portfolio

A premium, editorial-style portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Deploy to GitHub Pages (zero config)

This project is a **static export** (`next.config.js` → `output: 'export'`), so it
runs on any static host with no backend or environment variables.

1. Push this folder to a GitHub repo (any account):
   ```bash
   git init
   git add .
   git commit -m "Annu's portfolio"
   git remote add origin https://github.com/<OWNER>/<REPO>.git
   git push -u origin main
   ```
2. In the repo: **Settings → Pages → Source: "Deploy from a branch" → `main` / `(root)`**
3. Done. The included workflow (`.github/workflows/deploy.yml`) builds the site,
   sets the correct base path for your repo name, and deploys automatically on
   every push to `main`.

Your site goes live at `https://<OWNER>.github.io/<REPO>/`.

> The `basePath` is set at deploy time from the repo name, so the same folder
> works in any GitHub account — it never clashes with one.

### Other options

- **Vercel / Netlify / Cloudflare Pages**: import the repo, use the included
  build command (`npm run export`), output directory `out`.
- **Preview the built site locally**: `npm run export` then `npm run pages:preview`
  (serves `out/` at `http://localhost:5678`).
- **Live dev with hot reload**: `npm run dev` → `http://localhost:3000`.

## Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: lucide-react
- **Fonts**: Fraunces (display) + Inter (body) via next/font

## Customisation

All content lives in `src/data/content.ts`. Edit that file to update your resume data.

- `profile` — name, bio, contact info
- `experience` — work history
- `skills` — skill groups
- `projects` — case studies
- `education` — degrees
- `certifications` — certs list
- `leadership` — extracurriculars

## Design System

| Element | Value |
|---------|-------|
| Background | `#F5F0EB` (Ivory) |
| Text | `#0C0C0C` (Off-black) |
| Accent | `#C8A44E` (Amber gold) |
| Warm gray | `#9A9087` |
| Headings | Fraunces (serif) |
| Body | Inter (sans) |

## Performance Target

Lighthouse 95+ on mobile. Lazy animations, system font stack fallbacks, zero external image dependencies.
