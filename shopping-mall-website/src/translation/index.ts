/** 다국어 문서 포맷 설정 */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translation from './translation.json';

i18n.use(initReactI18next).init({
  resources: translation,
  lng: 'ko',
  fallbackLng: 'ko',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
