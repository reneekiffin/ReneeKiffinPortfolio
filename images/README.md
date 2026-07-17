# Images

Drop your real image files into this folder using the **exact filenames** below.
Each page references these paths directly, so once a file exists it appears
automatically — no code changes needed. Until then, a labeled placeholder box
shows in its place.

Recommended format: `.jpg` (or `.webp`). If you use a different extension,
update the `src` in the matching HTML file.

| Filename                | Used on            | Purpose / suggested size            |
|-------------------------|--------------------|-------------------------------------|
| `hero.jpg`              | index.html         | Full-width hero background · 2000×1200 |
| `featured-1.jpg`        | index.html         | Featured tile 1 · 900×1200 (3:4)    |
| `featured-2.jpg`        | index.html         | Featured tile 2 · 900×1200 (3:4)    |
| `featured-3.jpg`        | index.html         | Featured tile 3 · 900×1200 (3:4)    |
| `about-portrait.jpg`    | index + about      | Portrait · 1000×1250 (4:5)          |
| `about-secondary.jpg`   | about.html         | Secondary about image · 1000×1250   |
| `work-1.jpg` … `work-9.jpg` | portfolio.html | Gallery tiles · 900×1200 (3:4)      |

## Notes
- To add more gallery items, copy a `.card` block in `portfolio.html` and point
  it at a new filename (e.g. `work-10.jpg`).
- Filenames match the placeholders shown on the live pages, so you can match
  each box to its file at a glance.
