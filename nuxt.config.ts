import { defineNuxtConfig } from 'nuxt'
import Sass from 'sass'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr:false,
  typescript: {
    strict: true
  },
  nitro: {
    preset: 'firebase',
  },
  serverMiddleware: [
  ],
  
  // css: ['@/assets/css/tailwind.css'],
  // build: {
  //   postcss: {
  //     postcssOptions: require('./postcss.config.js'),
  //   }
  // },
  generate: {
    dir : '.output/public'
  },
  build: {
    quiet:false
  }
})


const sass = {
  implementation: Sass,
  sassOptions: {
    fiber: false,
  },
}
