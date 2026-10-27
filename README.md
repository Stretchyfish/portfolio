# Portfolio

This is a static Astro portfolio. Work cards, their highlighted tags, and project detail pages are generated from Markdown files in `src/content/work/`.

## Add a project or role

Create a Markdown file such as `src/content/work/my-project.md`:

```md
---
title: My project
type: project
date: '2026'
organization: PERSONAL · EXPERIMENT
summary: A short sentence shown on the portfolio card.
tags: [Astro, Design, Open source]
featured: true
link: https://example.com
---

## The problem

Write the longer project story here using Markdown.

![A project screenshot](../../assets/my-project/screenshot.webp)
```

Place project images in `src/assets/my-project/`. The relative image path above lets Astro process the image and works on both a local preview and the GitHub Pages project URL. `type`, `date`, `organization`, `summary`, and `tags` are checked against the content schema in `src/content.config.ts`.

## Run locally

Install dependencies, then run `npm run dev`. Run `npm run build` to create the static site in `dist/` and `npm run preview` to view that build.

## Publish on GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds and deploys the site whenever `main` is updated. In the repository settings, set **Pages → Build and deployment → Source** to **GitHub Actions**. The site automatically uses `/portfolio/` as its base URL on GitHub Pages and `/` in local development.

Before publishing, replace the sample name, initials, email address, availability text, and profile copy in `src/pages/index.astro` and `src/pages/projects/[slug].astro`, plus the fictional projects and roles in `src/content/work/`.

The portrait at the split between the orange profile panel and light project area is `public/media/portrait-personal.png`. To change it, replace that file with another transparent PNG and update its alt text in `src/pages/index.astro`.
