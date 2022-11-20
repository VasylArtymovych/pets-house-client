import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';

// import Backend from 'i18next-http-backend';
// import LanguageDetector from 'i18next-browser-languagedetector';

// const resources = {
//   en: {
//     translation: {
//       news: 'News',
//       read: 'Read more',
//       friends: 'Our friends',
//       time: 'Time:',
//       adress: 'Address:',
//       email: 'Email:',
//       phone: 'Phone:',
//       login: 'Login',
//       register: 'Register'
//     }
//   },
//   ua: {
//     translation: {
//       news: 'Новини',
//       read: 'наступна сторінка',
//       friends: 'Наші друзі',
//       time: 'Час роботи:',
//       adress: 'Адреса:',
//       email: 'Електронна скринька:',
//       phone: 'Телефон:',
//       login: 'Логін',
//       register: 'Регістр'
//     }
//   }
// };

// i18n
//   .use(Backend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({

//     fallbackLng: 'en',

//     lng: localStorage.getItem('whatLanguage'),

//     resources,

//     supportedLngs: ['en', 'ua'],

//     detection: {
//       order: ['localStorage', 'cookie', 'htmlTag'],
//       lookupLocalStorage: 'i18nextLng',
//       caches: ['localStorage', 'cookie']
//     },

//     debug: true,

//     interpolation: {
//       escapeValue: false
//     },

//     react: {
//       wait: true
//     }
//   });

export default i18n;
