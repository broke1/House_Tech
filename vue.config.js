const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
          @import "~@/styles/variables.sass"
          @import "~@/styles/animations.sass"`
      },
    }
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/'
})


