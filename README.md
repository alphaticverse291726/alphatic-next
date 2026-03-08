# Alphatic Labs — Next.js Website

The Operating System for Modern Clinics and Hospitals.

## Project Structure

```
alphatic-next/
├── components/           # Shared UI components
│   ├── Layout.jsx        # App shell (Navbar + Footer + TrialModal)
│   ├── Navbar.jsx        # Top navigation with dropdown + mobile menu
│   ├── Navbar.module.css
│   ├── Footer.jsx        # Site footer
│   ├── Footer.module.css
│   ├── TrialModal.jsx    # Trial sign-up modal
│   └── TrialModal.module.css
├── pages/                # One file per route
│   ├── _app.jsx          # Global app wrapper
│   ├── _document.jsx     # HTML document shell
│   ├── index.jsx         # / — Home
│   ├── product.jsx       # /product — Specialty selector + modules
│   ├── about.jsx         # /about — Story, vision, principles, roadmap
│   ├── pricing.jsx       # /pricing — Plans + FAQ
│   ├── blog.jsx          # /blog — Articles
│   ├── help.jsx          # /help — Help categories
│   ├── contact.jsx       # /contact — Tabbed contact forms
│   ├── policies.jsx      # /policies — Privacy, Security, SLA, DPA
│   ├── terms.jsx         # /terms — Terms of Service
│   ├── donate.jsx        # /donate
│   └── invest.jsx        # /invest
├── styles/               # CSS Modules per page + global
│   ├── globals.css       # Design tokens, utility classes
│   ├── Home.module.css
│   ├── Product.module.css
│   ├── Pricing.module.css
│   └── About.module.css
├── lib/
│   └── data.js           # All site content (copy, specs, plans, blog)
├── public/               # Static assets (favicon etc.)
├── next.config.js
├── vercel.json
└── package.json
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploy to Vercel

```bash
# Push to GitHub first, then:
npx vercel
```

Or connect your GitHub repo at [vercel.com/new](https://vercel.com/new) — it auto-detects Next.js.

## Customisation

- **Content** → Edit `lib/data.js`
- **Colors / tokens** → Edit `styles/globals.css` (`:root` variables)
- **Page layout** → Edit the `.jsx` file in `pages/`
- **Component styles** → Edit the matching `.module.css` file in `components/`
