// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  modules: [
    '@nuxt/image',
    '@nuxtjs/robots'
  ],
  css: [
    '@/assets/styles/_homepage.scss',
  ],
  runtimeConfig: {
    googleAnalyticsId: process.env.googleAnalyticsId,
    googleTagManagerId: process.env.googleTagManagerId,
  },
  image: {
    format: ['webp'],
  },
})