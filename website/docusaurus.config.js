const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Wind Waker',
  tagline: 'Fast nodejs server',
  url: 'https://cervantes007.github.io',
  baseUrl: '/wind-waker/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cervantes007', // Usually your GitHub org/user name.
  projectName: 'wind-waker', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Wind-Waker',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'right',
          label: 'Get Started',
        },
        {
          type: 'doc',
          docId: 'overview',
          position: 'right',
          label: 'Overview',
        },
        {
          type: 'doc',
          docId: 'basics/app',
          position: 'right',
          label: 'Basics',
        },
        {
          href: 'https://github.com/cervantes007/wind-waker',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Wind Waker, by Cervantes007.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/cervantes007/wind-waker/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: ['../src/index.ts'],
        tsconfig: '../tsconfig.json',
      },
    ],
  ],
};
