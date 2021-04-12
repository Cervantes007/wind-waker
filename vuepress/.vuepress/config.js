module.exports = {
  base: !process.env.CI || (process.env.CI && process.env.CI.toLowerCase() !== 'true') ? '/' : '/wind-waker/',
  title: 'Wind Waker',
  description: 'Node.js framework',
  themeConfig: {
    logo: '/logo.png',
    displayAllHeaders: false,
    nav: [
      { text: 'Get Started', link: '/get-started.md' },
      { text: 'Guides',
        items: [
          {text: 'Overview', link: '/guides/overview.md'},
          {text: 'Application', link: '/guides/app.md'},
          {text: 'Actions', link: '/guides/actions.md'},
          {text: 'Pipes', link: '/guides/pipes.md'}
        ]
      },
      { text: 'Tools',
        items: [
          {text: 'CLI', link: '/guides/overview.md'},
          {text: 'UI', link: '/tools/ui.md'},
          {text: 'Client', link: '/guides/overview.md'},
        ]
      },
      { text: 'Integrations',
        items: [
          { text: 'Databases', link: ''},
          { text: 'Security', link: ''}
        ]
      },
      { text: 'Github', link: 'https://github.com/cervantes007/wind-waker' },
    ],
    sidebar: 'auto',
  },
  plugins: [[
    'vuepress-plugin-typedoc',
    {
      entryPoints: ['../src/index.ts'],
      tsconfig: '../tsconfig.json'
    },
  ], '@vuepress/medium-zoom', '@vuepress/back-to-top', 'vuepress-plugin-smooth-scroll', 'one-click-copy'],
};
