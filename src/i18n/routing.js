import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'az', 'tr', 'ru'],
  pathnames: {
    '/about': {
      en: '/about',
      az: '/haqqimizda',
      tr: '/hakkimizda',
      ru: '/o-nas'
    },
    '/contact': {
      en: '/contact',
      az: '/elaqe',
      tr: '/iletisim',
      ru: '/kontakty'
    },
    '/favorites': {
      en: '/favorites',
      az: '/favoriler',
      tr: '/favoriler',
      ru: '/izbrannoe'
    },
    '/ourservices': {
      en: '/ourservices',
      az: '/xidmetlerimiz',
      tr: '/hizmetlerimiz',
      ru: '/uslugi'
    },
    '/ourclients': {
      en: '/ourclients',
      az: '/musterilerimiz',
      tr: '/musterilerimiz',
      ru: '/klienty'
    },
    '/whatwedo': {
      en: '/whatwedo',
      az: '/ne-edirik',
      tr: '/ne-yapiyoruz',
      ru: '/chto-delaem'
    },
    '/detail/[slug]': {
      en: '/detail/[slug]',
      az: '/detay/[slug]',
      tr: '/detay/[slug]',
      ru: '/detail/[slug]'
    },
    '/services/[slug]': {
      en: '/services/[slug]',
      az: '/xidmetler/[slug]',
      tr: '/hizmetler/[slug]',
      ru: '/uslugi/[slug]'
    },
    '/account/profile': {
      en: '/account/profile',
      az: '/hesab/profil',
      tr: '/hesap/profil',
      ru: '/akkaunt/profil'
    },
    '/account/login': {
      en: '/account/login',
      az: '/hesab/giris',
      tr: '/hesap/giris',
      ru: '/akkaunt/vhod'
    },
    '/account/register': {
      en: '/account/register',
      az: '/hesab/qeydiyyat',
      tr: '/hesap/kayit',
      ru: '/akkaunt/registracija'
    }
  },
  defaultLocale: 'en'
});
