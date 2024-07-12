// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
import { themes as prismThemes } from 'prism-react-renderer'

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sustella AI',
  tagline: 'Advanced Multi Agent System for a Sustainable Future',
  favicon: '/img/favicon.ico',

  // Set the production url of your site here
  url: 'https://sustella-ai.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sustella-ai', // Usually your GitHub org/user name.
  projectName: 'https://sustella-ai.github.io/', // Usually your repo name.

  onBrokenLinks: 'warn',
  trailingSlash: true,

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      zh: {
        label: 'German',
      },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: 'G-T31S4LR9LL',
        },
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/chaos-mesh/website/edit/master/',
          editLocalizedFiles: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/chaos-mesh/website/edit/master/',
          editLocalizedFiles: true,
        },
        theme: {
          customCss: './src/styles/custom.css',
        },
      }),
    ],
  ],

  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    image: '/img/sustella-logo1.png',
    algolia: {
      appId: '3BY0S3HQX6',
      apiKey: '99bb3af44d57f0e8f6d7e019d7e2c2d7',
      indexName: 'sustella-ai',
    },
    navbar: {
      hideOnScroll: true,
      title: 'Sustella AI',
      logo: {
        alt: 'Sustella Ai',
        src: 'img/logos/sustella-logo1.png',
        srcDark: 'img/logos/sustella-logo.png',
      },
      items: [
        /* { to: 'docs', label: 'Documentation' }, */
        {
          to: 'blog',
          label: 'Use cases',
        },
        /* {
          href: 'https://community.cncf.io/chaos-mesh-community/',
          label: 'Community Group',
        }, */

        /* {
          type: 'docsVersionDropdown',
          dropdownItemsAfter: [
            {
              type: 'html',
              value: '<hr style="margin: .5em 0;" />',
            },
            { to: '/versions', label: 'All Versions' },
            { to: '/supported-releases', label: 'Supported Releases' },
          ],
          position: 'right',
        }, */
        /* {
          type: 'localeDropdown',
          position: 'right',
        }, */
        {
          href: 'https://github.com/sustella-ai/sustella-ai.github.io',
          className: 'header-github-link',
          'aria-label': 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      copyright: `
        <p style="font-weight: 500;">Copyright © Sustella AI ${new Date().getFullYear()} | Documentation Distributed under CC-BY-4.0</p>
      `,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: {
        plain: prismThemes.vsDark.plain,
        styles: [
          ...prismThemes.vsDark.styles,
          {
            types: ['function', 'keyword'],
            style: {
              color: '#f25c7c',
            },
          },
        ],
      },
      additionalLanguages: ['bash'],
    },
  },

  plugins: [
    './docusaurus-tailwind-v3',
    ['@gracefullight/docusaurus-plugin-microsoft-clarity', { projectId: 'lggqck9srz' }],
  ],
}

export default config
