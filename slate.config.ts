/*
 * @file Theme configuration
 */
import { defineConfig } from './src/helpers/config-helper';

export default defineConfig({
  lang: 'zh-CN',
  site: 'https://blog.19920601.xyz',
  avatar: '/avatar.png',
  title: 'littletiger Blog',
  description: 'No matter what, future can be changed.',
  lastModified: true,
  readTime: true,
  footer: {
    copyright: '© 2025 Littletiger Design',
  },
  socialLinks: [
    {
      icon: 'github',
      link: 'https://github.com/xzy0601/slate-blog'
    },
]
});