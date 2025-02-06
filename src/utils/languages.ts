import ruFlag from "@/assets/images/flags-svg/ru.svg";
import usFlag from "@/assets/images/flags-svg/us.svg";

interface ILanguage {
  code: string;
  name: string;
  flag: string;
}

export const languages: ILanguage[] = [
  { code: "en", name: "English", flag: usFlag },
  { code: "ru", name: "Русский", flag: ruFlag },
];
