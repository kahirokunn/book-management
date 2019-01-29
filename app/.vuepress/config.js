const path = require('path')

const rootDir = path.resolve()

module.exports = {
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/' },
    ]
  },
  plugins: [
    [
      'vuepress-plugin-component-catalog',
      {
        // All options
        rootDir,

        // Specify the target to create a catalog
        include: ['**/components/**'],

        distDirPrefix: 'components',

        // import path alias
        alias: {
          '@': 'src/*',
        },
        // vue cli option
        vueCli: {
          configPath: `${rootDir}/vue.config.js`,
        },
      },
    ],
  ],
};
