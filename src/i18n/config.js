import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    lng: localStorage.getItem('whatLanguage'),
    resources: {
      en: {
        translations: require('./locales/en/translations.json')
      },
      ua: {
        translations: require('./locales/ua/translations.json')
      }
      // es: {
      //   translations: require('./locales/es/translations.json')
      // }
    },
    ns: ['translations'],
    defaultNS: 'translations'
  });

i18n.languages = ['en', 'ua', 'es'];

export default i18n;
