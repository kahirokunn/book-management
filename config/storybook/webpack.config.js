const path = require('path')
const merge = require('webpack-merge')
const VueAutoRoutingPlugin = require('vue-auto-routing/lib/webpack-plugin')
const rootPath = path.resolve(__dirname, '../../')
const updateWebpackConfig = require('storybook-readme/env/vue/updateWebpackConfig')

module.exports = (baseConfig, env, defaultConfig) => {
  return merge(defaultConfig, {
    plugins: [
      new VueAutoRoutingPlugin({
        pages: 'src/pages',
        importPrefix: '@/pages/',
      })
    ]
  })
}
