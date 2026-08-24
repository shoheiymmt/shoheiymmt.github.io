import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://shoheiymmt.io',
  redirects: {
    '/posts': '/',
  },
});