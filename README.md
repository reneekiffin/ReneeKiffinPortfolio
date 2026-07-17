# Renee Kiffin — Portfolio

A static clone/rebuild of a Squarespace-style portfolio site. Plain HTML, CSS,
and vanilla JS — no build step, no dependencies.

## Structure

```
.
├── index.html        # Home
├── portfolio.html    # Work gallery
├── about.html        # About
├── contact.html      # Contact + form
├── css/styles.css    # All styles (design tokens + components)
├── js/main.js        # Mobile nav, scroll reveal, image placeholders, form stub
└── images/           # Your images (see images/README.md for filenames)
```

## Running locally

It's fully static — just open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Adding your images

See [`images/README.md`](images/README.md). Drop files in with the listed
filenames and they appear automatically. Missing images show a labeled
placeholder until then.

## Customizing

- **Text**: edit the HTML files directly — placeholder copy is marked in context.
- **Colors & fonts**: change the CSS custom properties at the top of
  `css/styles.css` (`:root { ... }`).
- **Navigation / pages**: update the `<ul class="nav-links">` in each HTML file.

## Notes on the "exact clone"

The original site at reneekiffin.com could not be fetched from this environment
(outbound web access is blocked by the sandbox network policy), so this is a
faithful structural rebuild in the Squarespace layout idiom — hero, featured
grid, about split, gallery, and contact. Swap in the real images and copy to
match the live site exactly. To pull the original assets automatically instead,
re-run in an environment with network access enabled.
