import { defineConfig } from 'astro/config';

const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isUserSite = repository?.endsWith('.github.io');
const base = repository && !isUserSite ? `/${repository}` : '';

export default defineConfig({
  site: owner && repository ? `https://${owner}.github.io` : 'http://localhost:4321',
  base: base || undefined,
  redirects: {
    '/posts': `${base}/`,
  },
});