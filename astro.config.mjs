import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site: 'https://zougari47.github.io',
  base: '/portfolio-template',
  integrations: [tailwind()],
})
