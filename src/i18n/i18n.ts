import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enUS from './en-US/en-US'
import de from './de/de'

export const resources = {
  en: {
    translation: enUS,
  },
  de: {
    translation: de,
  },
} as const

i18n.use(initReactI18next).init({
  lng: localStorage.getItem('pc-language') || 'en',
  ns: ['enUS'],
  resources,
})
