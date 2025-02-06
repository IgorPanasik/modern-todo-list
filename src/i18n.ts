import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import enTranslation from "../public/locales/en/translation.json";
import ruTranslation from "../public/locales/ru/translation.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          ...enTranslation,
          title: {
            ...enTranslation.title,
            tasks_zero: "You have no open tasks",
            tasks_one: "You have {{count}} open task",
            tasks_other: "You have {{count}} open tasks",
          },
        },
      },
      ru: {
        translation: {
          ...ruTranslation,
          title: {
            ...ruTranslation.title,
            tasks_zero: "У вас нет открытых задач",
            tasks_one: "У вас {{count}} активная задача",
            tasks_few: "У вас {{count}} активные задачи",
            tasks_many: "У вас {{count}} активных задач",
          },
        },
      },
    },
    fallbackLng: "en",
    debug: false,
    load: "languageOnly",
    ns: ["translation"],
    defaultNS: "translation",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
