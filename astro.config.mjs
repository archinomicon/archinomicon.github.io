// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://archinomicon.github.io',
  base: '',
  integrations: [
    starlight({
      title: 'Archinomicon',
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
          //   // Each item here is one entry in the navigation menu.
          //   { label: 'The Book', slug: 'book/introduction' },
          // ],
        },
        // {
        //   label: 'Blog',
        //   autogenerate: { directory: 'blog' },
        // },
      ],
    }),
  ],
});
