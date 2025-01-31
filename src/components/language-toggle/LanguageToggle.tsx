import * as styles from "@/components/language-toggle/_language-toggle.module.scss";
import { languages } from "@/utils/languages";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export const LanguageToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage =
    languages.find((lang) => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.languageToggle} ref={dropdownRef}>
      <button
        type="button"
        className={styles.languageToggle__button}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t("app.language")}
      >
        <img
          src={currentLanguage.flag}
          alt={`${currentLanguage.name} flag`}
          className={styles.languageToggle__flag}
        />
        <span className={styles.languageToggle__name}>
          {currentLanguage.name}
        </span>
        <i
          className={clsx(
            "fa-solid fa-chevron-down",
            styles.languageToggle__arrow,
            { [styles["languageToggle__arrow--open"]]: isOpen }
          )}
          aria-hidden="true"
        />
      </button>

      <ul
        aria-label={t("app.language")}
        className={clsx(styles.languageToggle__dropdown, {
          [styles["languageToggle__dropdown--open"]]: isOpen,
        })}
      >
        {languages.map((language) => (
          <li key={language.code}>
            <button
              type="button"
              className={clsx(styles.languageToggle__option, {
                [styles["languageToggle__option--selected"]]:
                  language.code === i18n.language,
              })}
              onClick={() => {
                i18n.changeLanguage(language.code);
                setIsOpen(false);
              }}
            >
              <img
                src={language.flag}
                alt={`${language.name} flag`}
                className={styles.languageToggle__flag}
              />
              <span className={styles.languageToggle__name}>
                {language.name}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
