import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Deployment Repository Guide ✨',
  tagline:
    'A Step-by-Step Guide to Create a Deployment Repository Guide for Web App projects.',
  favicon: 'img/gitops.webp',

  // Set the production url of your site here
  url: 'https://repository-base-deploy.pages.dev/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Deployment Repository Guide', // Usually your GitHub org/user name.
  projectName: 'repository-base-deploy', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/jesusandres31/repository-base-deploy/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/jesusandres31/repository-base-deploy/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Deployment Repository Guide ✨',
      logo: {
        alt: 'My Site Logo',
        src: 'img/gitops.webp',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Home',
        },
        // {
        //   href: 'https://github.com/jesusandres31/deployment-guide',
        //   label: 'GitHub',
        //   position: 'right',
        // },
        {
          href: 'https://opengitops.dev/',
          label: 'GitOps Principles',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'GitHub repository',
              href: 'https://github.com/jesusandres31/deployment-guide',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Deployment Repository Guide, Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
