const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    resolve: {
      fallback: {
        url: require.resolve('url')
      }
    }
  },
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            require('autoprefixer')({
              overrideBrowserslist: ['Android >= 4.0', 'ios >= 8']
            }),
            require('postcss-pxtorem')({
              rootValue: 37.5,
              propList: ['*']
            })
          ]
        }
      },
      less: {
        lessOptions: {
          modifyVars: {
            blue: '#FA6D1D'
          }
        }
      }
    }
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/inter-xport/'
    : '/',
  outputDir: 'dist'
})
