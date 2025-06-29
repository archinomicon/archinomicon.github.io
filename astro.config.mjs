// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://archinomicon.ru',
  // site: 'https://archinomicon.github.io',
  base: '',
  integrations: [
    starlight({
      title: 'archinomicon',
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/archinomicon',
        },
      ],
      sidebar: [
        {
          label: 'The Book',
          autogenerate: { directory: 'book' },
          // items: [
          //   { label: 'The Book', slug: 'book/introduction' },
          // ],
        },
      ],
    }),
  ],
});
