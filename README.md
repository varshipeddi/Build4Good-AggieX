# Finch — AggieX Startup Challenge

**Fewer applications. More interviews.**

A design-first marketing site for **Finch** (intentional internship platform): homepage, product story, team and mission, pricing placeholders, and a lightweight demo **content editor**. Built for the **AggieX Startup Challenge** (static front end, no backend required).

---

## What this project is

Finch helps engineering and CS students move from mass-applying to **response-optimized** applications: AI-assisted resume tailoring, Chrome extension autofill on major ATS platforms (Greenhouse, Lever, Workday), and a workflow aimed at **interview probability**, not application volume.

This repository is the **public-facing website** that communicates that story: clear sections for the problem, solution, how it works, team bios, FAQ, waitlist capture, and contact.

---

## Features

| Area | Details |
|------|---------|
| **Pages** | Home, About, Product (how it works + pricing layout), plus a hidden **`/admin`** editor |
| **Brand** | Finch palette (navy, red, orange), **Nunito** typography, playful / approachable UI |
| **Theme** | Light and dark mode (persisted in `localStorage`) |
| **Motion** | GSAP **ScrollTrigger** for scroll-driven section reveals; **MotionPathPlugin** for the paper-plane section (`prefers-reduced-motion` respected) |
| **Forms** | Waitlist / email-style capture, contact form (front-end only; wire to a backend or form service for production) |
| **FAQ** | Expandable FAQ section on the home page |
| **CMS (demo)** | Simple **admin** UI: edit selected copy and image URLs; stores overrides in **`localStorage`** (per browser, not shared server-side) |
| **Deploy** | **Vercel**-ready with SPA rewrites so deep links like `/admin` work on refresh |

---

## Tech stack

| Tool | Role |
|------|------|
| [React](https://react.dev/) | UI |
| [Vite](https://vite.dev/) | Dev server and production build |
| [React Router](https://reactrouter.com/) | Client-side routing (`BrowserRouter`) |
| [GSAP](https://gsap.com/) + [@gsap/react](https://github.com/greensock/react) | Scroll-linked animations, motion paths |
| **Vanilla CSS** | Global tokens in `src/index.css`, layout and components in `src/App.css` |
| [ESLint](https://eslint.org/) | Linting (`npm run lint`) |

Optional tooling used during development (not required to run the app): Playwright CLI for visual checks, Cursor rules for design and accessibility guidance.

---

## Project structure

```text
├── public/
│   └── assets/          # Branding, team photos, product screenshots (served as static files)
├── src/
│   ├── components/      # SiteLayout, FAQ, Contact, Waitlist, PaperPlaneAnimation, …
│   ├── lib/
│   │   ├── gsap.js      # GSAP plugin registration + useGSAP
│   │   └── contentStore.js  # Default copy + localStorage load/save for the demo CMS
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ProductPage.jsx
│   │   └── AdminPage.jsx    # /admin — login + field editor
│   ├── App.jsx          # Routes
│   ├── App.css
│   ├── main.jsx
│   └── index.css        # CSS variables (colors, theme)
├── demo_images/         # Source/reference assets (see challenge brief)
├── vercel.json          # SPA fallback: all routes → index.html
├── index.html
├── package.json
└── vite.config.js
```

---

## Prerequisites

- **Node.js** 18+ (20+ recommended)
- **npm** (ships with Node)

---

## Local development

```bash
git clone <your-repo-url>
cd Build4Good-AggieX
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

### Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with HMR |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the `dist/` build locally |
| `npm run lint` | Run ESLint |

---

## Demo content editor (`/admin`)

The site includes a **minimal CMS for demos**, not a production content system.

1. Navigate to **`/admin`** (there is no link in the main nav).
2. Sign in with these **demo** credentials (also set in `src/pages/AdminPage.jsx`):

   | Field | Value |
   |-------|--------|
   | Username | `admin` |
   | Password | `test123` |

3. Edit fields and **Save** — values persist in **`localStorage`** in that browser.
4. **Reset to defaults** clears overrides.

**Security note:** Client-only auth and storage are **not** safe for real secrets or multi-user editing. For production, use a real backend, auth, and a database or headless CMS.

---

## Deployment (Vercel)

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Install command:** `npm install`

This repo includes **`vercel.json`** with a rewrite so client routes (`/about`, `/product`, `/admin`, …) resolve to `index.html`. Without that, refreshing a deep URL returns 404 on static hosts.

---

## Assets

Challenge assets and branding references live under **`public/assets/`** (and **`demo_images/`** for originals). Replace placeholders with final brand files from the Finch team when available.

---

## Credits

- **Finch** — [applyfinch.com](https://applyfinch.com)
- **Challenge** — AggieX Startup Challenge (AggieX, Aggies Create, Meloy Entrepreneurship)

---

## License

This project is provided for the AggieX / academic context; confirm licensing with your team before wider redistribution.
