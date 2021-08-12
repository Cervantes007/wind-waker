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
          position: 'left',
          label: 'Get Started',
        },
        {
          href: 'https://github.com/cervantes007/wind-waker',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/wind-waker',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/wind-waker',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/wind-waker',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/cervantes007/wind-waker',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Wind Waker. by Cervantes007, Built with Docusaurus.`,
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
          editUrl: 'https://github.com/cervantes007/wind-waker/edit/master/docusaurus/',
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
