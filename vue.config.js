const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/variables.sass"`
      },
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
})


