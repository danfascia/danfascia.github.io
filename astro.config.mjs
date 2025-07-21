// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath, URL } from 'node:url';
import mdx from '@astrojs/mdx';
import embeds from 'astro-embed/integration';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://danielfascia.com',
  integrations: [
    embeds({
    services: {
      BlueskyPost: false,
      LinkPreview: false,
    }
  }), mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
        '@lib': fileURLToPath(new URL('./src/lib', import.meta.url)),
        '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
        '@content': fileURLToPath(new URL('./src/content', import.meta.url)),
        '@styles': fileURLToPath(new URL('./src/styles', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url))
      }
    }
  }
});