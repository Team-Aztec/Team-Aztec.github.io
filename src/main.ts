import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import './style.css'
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
app.use(router)
app.use(i18n)

app.mount('#app')
