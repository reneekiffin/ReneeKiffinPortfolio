# Renee Kiffin — Portfolio

A static clone of **reneekiffin.com**, rebuilt on **Bootstrap 5** for easy
long-term maintenance. Plain HTML/CSS/JS — no build step, no framework, no
`npm install` required to run.

## Pages

| File                   | Page                                    |
|------------------------|-----------------------------------------|
| `index.html`           | Home                                    |
| `portfolio.html`       | Portfolio ▸ Graphic Design              |
| `brand-design.html`    | Services ▸ Brand Design (packages/pricing) |
| `web-design.html`      | Services ▸ Web Design                   |
| `tutoring.html`        | Services ▸ Tutoring *(stub — awaiting content)* |
| `photo-retouching.html`| Services ▸ Photo Retouching             |
| `photography.html`     | Services ▸ Photography                  |
| `weddings.html`        | Services ▸ Wedding Stationary *(stub — awaiting content)* |
| `about.html`           | About                                   |
| `contact.html`         | Contact                                 |

## Structure

```
.
├── *.html                # One file per page
├── css/custom.css        # Brand theme on top of Bootstrap (colors, fonts, components)
├── js/main.js            # Shared nav + footer (injected once), form stubs, helpers
├── vendor/bootstrap/     # Bootstrap 5.3.3, vendored locally (works offline)
└── images/               # Optional — see "Images" below (site currently links the live CDN)
```

## Shared nav & footer (edit once)

The navigation and footer are defined a **single time** in `js/main.js` and
injected into every page via `<div data-chrome="nav" ...>` / `<div data-chrome="footer">`
placeholders. Change a nav link or footer detail there and it updates site-wide.

## Design system

Brand tokens live at the top of `css/custom.css`:

- **Colors** — `--rk-green` (brand green), `--rk-black`, `--rk-green-deep`, `--rk-cream`.
- **Fonts** — the real Squarespace fonts are loaded via `@font-face` from Renee's
  Squarespace CDN: **Nine** (Behind The Nineties) for H1 display, **Celesta-Medium**
  for body/subheads/nav, **Lion** (De Lionist) for script accents. Web-font
  fallbacks (Cormorant Garamond / Dancing Script / Cutive Mono) load if the CDN
  is ever unreachable.

## Images

Images reference the **live Squarespace CDN** directly (e.g.
`images.squarespace-cdn.com/.../business+cards.png`), so they are pixel-identical
to the original site with zero downloads. They load in any browser with internet
access.

To make the site fully self-contained later, download each referenced image into
`images/` and swap the CDN URLs for local paths.

## Running locally

Fully static — open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Making the forms work

The contact and subscribe forms are front-end stubs (they show a confirmation but
don't send). Point them at your email or a form service (Formspree, Squarespace
Forms, Netlify Forms, etc.) to go live.

## Notes / remaining work

- **Tutoring** and **Wedding Stationary** are placeholder stubs — their page
  content wasn't captured yet. Paste those pages (or use a "SingleFile" browser
  extension to save them) and they can be built out like the others.
- Background **videos** on the original (hero, some service heroes use YouTube
  backgrounds) are represented here by their still fallback images.
