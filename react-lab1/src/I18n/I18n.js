import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      headerblock: {
        res: "Reviews",
      },
}
  },
  ru: {
    translation: {
      headerblock: {
        res: "Отзывы",
      },
    },
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: 'ru', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;