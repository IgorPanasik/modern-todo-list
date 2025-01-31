import * as styles from "@/components/header/_header.module.scss";
import { LanguageToggle } from "@/components/language-toggle/LanguageToggle";
import { SocialLinks } from "@/components/social-links/SocialLinks";
import { ThemeToggle } from "@/components/theme-toggle/ThemeToggle";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export const BaseHeader = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.setAttribute(
        "aria-expanded",
        isMenuOpen ? "true" : "false"
      );
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.classList.toggle("menu-open");
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <a
          href="https://igorpanasik.github.io/modern-todo-list/"
          className={styles.header__logo}
        >
          <i className="fa-solid fa-check-double"></i>
          <span>{t("app.name")}</span>
        </a>
      </div>

      <div
        className={clsx(styles.header__menu, {
          [styles["header__menu--open"]]: isMenuOpen,
        })}
      >
        <nav className={styles.header__nav}>
          <SocialLinks isMenuOpen={isMenuOpen} variant="header" />
        </nav>
        <div className={styles.header__controls}>
          <ThemeToggle />
          <LanguageToggle />
        </div>
      </div>
      <button
        ref={buttonRef}
        type="button"
        className={clsx(styles.header__burger, {
          [styles["header__burger--active"]]: isMenuOpen,
        })}
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
};
