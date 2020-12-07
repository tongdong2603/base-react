import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

// Local import
import { I18N_DEFAULT_LNG } from '@definitions/config';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    lng: I18N_DEFAULT_LNG,
  });
export default i18n;
