# Namith J — Portfolio

A high-end, animated developer portfolio built with **React + Vite + Tailwind CSS**, ready to deploy to **Vercel** in one click.

## Stack

- ⚛️ React 19 + TypeScript
- ⚡ Vite 7
- 🎨 Tailwind CSS 4
- 🔤 Google Fonts (Space Grotesk, Inter, JetBrains Mono)
- 🎬 Pure CSS animations + IntersectionObserver reveals

## Features

- Hero with animated gradient drift, name rise-in, role lines
- Rotating tagline section (crossfade every 3.4s)
- About section with skill marquees (left/right scroll)
- Project cards with glassmorphism + hover lift
- 6 expertise tiles with icons and arrow micro-interactions
- Education timeline with accent dots
- CTA banner + 4 contact cards (email, phone, LinkedIn, GitHub)
- Fully responsive
- `prefers-reduced-motion` support

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Production build

```bash
npm run build
```

Outputs static files to `dist/`.

## 🚀 Deploy to Vercel

### Option 1 — Vercel Dashboard (recommended)

1. Push this folder to a new GitHub repository.
2. Go to https://vercel.com/new and **Import** the repo.
3. Vercel auto-detects **Vite** and sets:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. You'll get a live URL in ~30s.
5. (Optional) Add a custom domain in **Project → Settings → Domains**.

### Option 2 — Vercel CLI

```bash
npm i -g vercel
vercel login
vercel        # first deploy (preview)
vercel --prod # production deploy
```

### Option 3 — One-click deploy button

Add this to your README to enable one-click deploys:

```markdown
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/YOUR_REPO)
```

## Project structure

```
.
├── index.html              # Document shell + Google Fonts
├── vercel.json             # Vercel SPA rewrites
├── src/
│   ├── main.tsx            # React entry
│   ├── App.tsx             # Main portfolio composition
│   ├── data.ts             # Editable portfolio content
│   ├── hooks.ts            # Reveal + nav scroll hooks
│   ├── components/
│   │   └── Icons.tsx       # All SVG icons
│   └── index.css           # Tailwind + all custom styles
└── package.json
```

## Customizing content

Open `src/data.ts` and edit:
- `PROFILE` — name, tagline, roles, meta strip
- `STATEMENTS` — rotating tagline lines
- `ABOUT` — bio paragraphs, stats
- `SKILLS_ROW_1` / `SKILLS_ROW_2` — marquee skills
- `PROJECTS` — pinned project cards
- `EXPERTISE` — skill tiles
- `EDUCATION` — timeline entries
- `CONTACT` — email, phone, LinkedIn, GitHub

## Performance notes

- All animations are CSS — no animation libraries
- `backdrop-filter` is used for glassmorphism (graceful degradation)
- Grid + flex layouts only; no heavy UI libraries
- Single bundle, ~zero runtime overhead

## License

MIT — free to use as a template. Just swap the content.
