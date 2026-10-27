import { defineConfig } from 'astro/config';

// Project sites live below /<repository-name>/; user sites live at the root.
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1];
const githubBuild = Boolean(process.env.GITHUB_ACTIONS && owner && repository);
const userSite = repository?.toLowerCase() === `${owner}.github.io`.toLowerCase();

export default defineConfig({
  ...(githubBuild ? { site: `https://${owner}.github.io` } : {}),
  base: githubBuild && !userSite ? `/${repository}` : '/',
  trailingSlash: 'always',
});
