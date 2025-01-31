interface ILanguage {
  code: string;
  name: string;
  flag: string;
}

export const languages: ILanguage[] = [
  { code: "en", name: "English", flag: "./assets/images/flags-svg/us.svg" },
  { code: "ru", name: "Русский", flag: "./assets/images/flags-svg/ru.svg" },
];
