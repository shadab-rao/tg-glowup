import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslations from '../src/locales/en/transalation.json';
import arTranslations from '../src/locales/ar/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      ar: { translation: arTranslations },
    },
    lng: localStorage.getItem('language') || 'en',
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;