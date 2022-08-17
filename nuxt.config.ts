import { defineNuxtConfig } from 'nuxt'
import Sass from 'sass'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  nitro: {
    preset: 'node',
  },
  serverMiddleware: [
  ],
  // buildModules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/tailwind.css'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    }
  },
})


const sass = {
  implementation: Sass,
  sassOptions: {
    fiber: false,
  },
}
