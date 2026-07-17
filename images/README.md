# Images

Drop your real image files into this folder using the **exact filenames** below.
Every page references these paths directly, so once a file exists it appears
automatically — no code changes needed. Until then, a labeled placeholder box
shows in its place.

Recommended format: `.jpg` (or `.webp`). If you use a different extension,
update the matching `src` in the HTML.

| Filename                    | Used on                     | Content                                   |
|-----------------------------|-----------------------------|-------------------------------------------|
| `hero-camera.jpg`           | index.html (hero)           | Canon camera on wood, left half of hero   |
| `renee-portrait.jpg`        | index.html + about.html     | Portrait of Renee (floral top)            |
| `project-lifestones.jpg`    | index + portfolio           | Lifestones business-card branding         |
| `project-globalpro.jpg`     | index + portfolio           | GlobalPro brochure                        |
| `project-oasis.jpg`         | index + portfolio           | Oasis Express takeout packaging           |
| `project-skinsecrets.jpg`   | index + portfolio           | Your Skin Secrets branding (black)        |
| `whatido-design.jpg`        | index.html (What I Do)      | Background for the "Design" panel         |
| `whatido-photography.jpg`   | index.html (What I Do)      | Background for the "Photography" panel     |
| `whatido-educate.jpg`       | index.html (What I Do)      | Background for the "Educate" panel         |

## Suggested sizes
- Hero: ~1600×2000 (tall, it's cropped to the left column)
- Portrait: ~1000×1300 (3:4)
- Projects / What I Do: ~1200×900 (4:3)

## Adding more portfolio pieces
Copy a `.col-md-6 > a.tile` block in `portfolio.html` (or a `.project` block in
`index.html`) and point it at a new filename, e.g. `project-newclient.jpg`.
