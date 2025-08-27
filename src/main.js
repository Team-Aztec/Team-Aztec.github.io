import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import { createHead } from '@unhead/vue/client'
import './css/style.scss'
import './css/flag.min.scss'
import App from './App.vue'

import router from './router/index.ts'
import enUs from './locales/enUS.json'
import frFR from './locales/frFR.json'

const i18n = createI18n({
  locale: 'fr',
  fallbackLocale: 'fr',
  messages: {
    en: enUs,
    fr: frFR,
  },
  globalInjection: true,
  legacy: false,
})

const app = createApp(App)
const head = createHead({
  init: [
    {
      title: 'Aztec France',
      titleTemplate: '%s | Aztec France',
      htmlAttrs: { lang: 'fr' },
    },
  ],
})

app.use(head)
app.use(router)
app.use(i18n)

app.mount('#app')
