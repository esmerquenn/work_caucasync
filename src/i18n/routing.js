import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'az', 'tr', 'ru'],
  pathnames: {
    '/about': {
      en: '/about',
      az: '/haqqımızda',
    },
    '/account/profile': {
      en: '/account/profile',
      az: '/hesab/profil' // ya da ne ise doğru karşılığı
    },
    '/account/login': {
      en: '/account/login',
      az: '/hesab/giris'
    },
    '/account/register': {
      en: '/account/register',
      az: '/hesab/qeydiyyat'
    }
  },
  defaultLocale: 'en'
});
