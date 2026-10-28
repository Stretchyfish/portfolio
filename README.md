# Portfolio

This is a static Astro portfolio. Each Markdown file in `src/content/work/` is one portfolio entry. Every entry appears in **Info** and gets a shareable detail page.

## Add an entry

Create a file such as `src/content/work/my-project.md`:

```md
---
title: My project
tags: [project, accomplishment, Rust]
---

Describe the project here with Markdown. You can add headings, links, lists, and images.
```

Only `title` and `tags` are required. An optional `cover` points to an image in `public/`, for example `cover: media/my-project.webp` for `public/media/my-project.webp`. The cover appears in the popup and on the detail page.

Tags control where an entry appears:

- Every file appears in **Info**, where visitors can search by title, tags, and body text.
- `accomplishment` adds it to **Noteworthy accomplishments**.
- `working-on` adds it to **What I’m working on**. New bubbles automatically continue the overlapping triangle pattern and floating motion.
- `project`, `experience`, `skill`, `publication`, and `education` connect it to the five Info category bubbles. You can add any other descriptive tags too.

A file may have both placement tags. Clicking either kind of bubble opens its Markdown content in a popup. The filename determines its direct URL: `my-project.md` becomes `/projects/my-project/`.

For images inside the Markdown body, put files in `src/assets/my-project/` and reference them with a relative path such as `![Screenshot](../../assets/my-project/screenshot.webp)`.

## Run and publish

Run `npm run dev` for a local preview. The GitHub Actions workflow in `.github/workflows/deploy.yml` runs `npm ci` and `npm run build` after a push to `main`, then publishes the static `dist/` folder to GitHub Pages. Set **Pages → Build and deployment → Source** to **GitHub Actions** in the repository settings.

The three accomplishment entries and four working-on entries have placeholder descriptions ready for your own details. The portrait is `public/media/portrait-personal.png`.

The five contact icons are configured in `src/pages/index.astro` under `contactLinks`. GitHub points to this repository's account; email, LinkedIn, phone, and YouTube use placeholders until you replace them.
