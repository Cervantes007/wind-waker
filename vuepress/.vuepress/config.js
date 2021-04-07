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
          {text: 'Overview', link: '/basics/overview.md'},
          {text: 'CLI', link: '/basics/overview.md'},
          {text: 'Application', link: '/basics/app.md'},
          {text: 'Actions', link: '/basics/actions.md'},
          {text: 'Pipes', link: '/basics/pipes.md'}
        ]
      },
      { text: 'Recipes',
        items: [
          { text: 'TypeORM', link: '/basics/pipes.md'}
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
