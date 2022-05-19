import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  publicRuntimeConfig: {
    TELEGRAM_INVITE: process.env.TELEGRAM_INVITE || 'https://telegram.org/',
  },
  meta: {
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'HelloWorld 3.0' },
    ]
  },
  buildModules: [
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'nuxt-windicss',
    'vue-plausible',
  ],
  css: [
    'assets/scss/styles.scss',
  ],
  postcss: {
    plugins: {
      cssnano: false
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/scss/_variables.scss";
          `,
        },
      },
      devSourcemap: true,
    },
  },
  unocss: {
    uno: false,
    attributify: false,
    preflight: false,
    icons: {
      scale: 1.1,
    },
  },
  plausible: {
    domain: process.env.PLAUSIBLE_DOMAIN || '',
    trackLocalhost: false,
  },
})
