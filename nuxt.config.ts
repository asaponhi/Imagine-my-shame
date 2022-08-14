import { defineNuxtConfig } from 'nuxt'
import Sass from 'sass'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true
  }
})


const sass = {
  implementation: Sass,
  sassOptions: {
    fiber: false,
  },
}