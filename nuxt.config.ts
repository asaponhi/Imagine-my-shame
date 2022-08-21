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
  css: [
    '~/assets/styles/foundation/_reset.scss',
    '~/assets/styles/foundation/_base.scss',
    '~/assets/styles/foundation/_util.scss',
    '~/assets/styles/foundation/_transition.scss',
    '~/assets/styles/foundation/_keyframe.scss',
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/global/index.scss";',
        },
      },
    },
  },
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
