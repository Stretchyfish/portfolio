# Portfolio

This is a static Astro portfolio. Each Markdown file in `src/content/work/` is one portfolio entry with a shareable detail page. The right-hand side groups entries by tags.

## Add an entry

Create a file such as `src/content/work/my-project.md`:

```md
---
title: My project
tags: [project, working-on]
---

Describe the project here with Markdown. You can add headings, links, lists, and images.
```

Only `title` and `tags` are required. An optional `cover` points to an image in `public/`, for example `cover: media/my-project.webp` for `public/media/my-project.webp`. The cover appears in its bubble, popup, and detail page. DLR and MAD-Urban have generated sample covers that you can replace with real project images.

Tags control where an entry appears:

- `professional-experience` adds it to **Professional Experience**.
- `working-on` adds it to **What I’m working on**.
- `product` or `project` adds it to **Products & projects**.
- `publication` adds it to **Publications & research**.
- `event` adds it to **Events & Conferences**.
- `education` adds it to **Education & Courses**.
- `skill` or `tool` adds it to **Skills & Tools**.

A file can have several placement tags and appear in multiple sections. Clicking a bubble opens its Markdown content in a popup. The filename determines its direct URL: `my-project.md` becomes `/projects/my-project/`.

For images inside the Markdown body, put files in `src/assets/my-project/` and reference them with a relative path such as `![Screenshot](../../assets/my-project/screenshot.webp)`.

## Run and publish

Run `npm run dev` for a local preview. The GitHub Actions workflow in `.github/workflows/deploy.yml` runs `npm ci` and `npm run build` after a push to `main`, then publishes the static `dist/` folder to GitHub Pages. Set **Pages → Build and deployment → Source** to **GitHub Actions** in the repository settings.

Several entries still have placeholder descriptions ready for your own details. The portrait is `public/media/portrait-personal.png`.

The five contact icons are configured in `src/pages/index.astro` under `contactLinks`. GitHub points to this repository's account; email, LinkedIn, phone, and YouTube use placeholders until you replace them.
