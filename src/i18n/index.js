import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import zh from './zh.json';
import jp from './jp.json';
import ko from './ko.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      zh: { translation: zh },
      jp: { translation: jp },
      ko: { translation: ko },
    },
    lng: 'zh', // 默认语言
    fallbackLng: 'zh',
    interpolation: { escapeValue: false },
  });

export default i18n;
