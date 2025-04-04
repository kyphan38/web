import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'This is my place, bro!',
  favicon: 'img/earth.ico',

  url: 'https://kyphan38.github.io',
  baseUrl: '/', // /web/

  organizationName: 'kyphan38',
  projectName: 'web',
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'assets/docs',
          sidebarPath: './sidebars/sidebars.ts',
          routeBasePath: '/',
          showLastUpdateTime: true,
        },
        blog: {
          path: 'assets/blog',
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'kp',
      logo: {
        alt: 'earth',
        src: 'img/bw_earth.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'docs',
        },
        // {to: '/blog', label: 'Blog', position: 'left'},
        // {to: '/travel', label: 'Travel', position: 'left'},
      ],
    },
    footer: {
      style: 'dark',
      // copyright: `Copyright © ${new Date().getFullYear()} Ky Phan. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    
  } satisfies Preset.ThemeConfig,
};

export default config;
