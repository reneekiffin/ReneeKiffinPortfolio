# Renee Kiffin — Portfolio

A static clone/rebuild of the reneekiffin.com Squarespace site, built on
**Bootstrap 5** for easy long-term maintenance. Plain HTML/CSS/JS — no build
step, no framework, no npm install required to run.

## Pages

| File            | Purpose                                              |
|-----------------|------------------------------------------------------|
| `index.html`    | Home — hero, recent projects, about, what I do, services |
| `portfolio.html`| Graphic Design & Branding — project grid             |
| `about.html`    | About Renee                                          |
| `contact.html`  | Contact form + intro                                 |

## Structure

```
.
├── index.html / portfolio.html / about.html / contact.html
├── css/custom.css              # Brand theme layered on Bootstrap (colors, fonts, components)
├── js/main.js                  # Image placeholders, form stubs, footer year
├── vendor/bootstrap/           # Bootstrap 5.3.3 (vendored locally — works offline)
└── images/                     # Your images (see images/README.md for filenames)
```

## Running locally

Fully static — just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000   # then visit http://localhost:8000
```

## Design system (edit in one place)

All brand tokens live at the top of `css/custom.css`:

- **Colors** — `--rk-green` (brand green), `--rk-black`, `--rk-green-deep`
  (portfolio hero), `--rk-cream` (footer).
- **Fonts** — Cormorant Garamond (serif display), Dancing Script (script
  accents), Cutive Mono (typewriter body). Loaded from Google Fonts.

## Adding images

See [`images/README.md`](images/README.md). Drop files in with the listed
filenames and they appear automatically. Missing images render as labeled
placeholders until then.

## Making the forms work

The contact and subscribe forms are front-end stubs (they show a confirmation
but don't send). To go live, point them at your email or a form service
(Formspree, Squarespace Forms, Netlify Forms, etc.) — see the `<form>` tags in
`contact.html` / the footer.

## Why Bootstrap?

Bootstrap gives you a well-documented grid, navbar, accordion, and form
components, so future edits (new sections, new portfolio pieces, layout tweaks)
are straightforward without custom CSS gymnastics. The library is vendored in
`vendor/bootstrap/`, so the site has zero external runtime dependencies and
works offline.

## Note on the "exact clone"

The live site couldn't be fetched from the build environment (outbound web
access is blocked by the sandbox network policy), so the layout, copy, colors,
and fonts were reconstructed from screenshots of each page. Swap in the real
images (`images/`) to complete it. The fonts are close web-font matches; adjust
in `css/custom.css` if you know the exact originals.
