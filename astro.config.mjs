import { defineConfig } from 'astro/config';
import md from '@astrojs/markdown-remark';

export default defineConfig({
  integrations: [md()],
});