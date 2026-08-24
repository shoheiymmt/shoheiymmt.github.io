import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://shoheiymmt.github.io',
  redirects: {
    '/posts': '/',
  },
});