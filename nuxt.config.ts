import { defineNuxtConfig } from 'nuxt'
import Sass from 'sass'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  serverMiddleware: [
    // { path: "/server-api", handler: "~/server-middleware/api/message.ts" },
    { path: "/server-api", handler: "~/server-middleware/index.ts" },
  ],
})


const sass = {
  implementation: Sass,
  sassOptions: {
    fiber: false,
  },
}
