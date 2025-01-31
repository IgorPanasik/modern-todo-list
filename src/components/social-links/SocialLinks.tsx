import * as styles from "@/components/social-links/_social-links.module.scss";
import { Tooltip } from "@/components/tooltip/Tooltip";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

interface ISocialLinksProps {
  variant?: "header" | "footer";
  isMenuOpen?: boolean;
}

export const SocialLinks = ({
  variant = "header",
  isMenuOpen,
}: ISocialLinksProps) => {
  const { t } = useTranslation();
  const links = [
    {
      href: "https://github.com/IgorPanasik",
      icon: "fa-brands fa-github",
      label: t("links.github"),
    },
    {
      href: "https://www.linkedin.com/in/igor-panasik-351174252",
      icon: "fa-brands fa-linkedin",
      label: t("links.linkedin"),
    },
    {
      href: "mailto:panasik.igor.com@gmail.com",
      icon: "fa-solid fa-envelope",
      label: t("links.gmail"),
    },
    {
      href: "https://rabota.by/resume/5263589dff0db379b40039ed1f75396b4e5048",
      icon: "fa-solid fa-briefcase",
      label: t("links.resume"),
    },
  ];

  return (
    <ul className={clsx(styles.social, styles[`social--${variant}`])}>
      {links.map((link) => (
        <li key={link.href} className={styles.social__item}>
          <Tooltip content={link.label} position="bottom">
            <a
              href={link.href}
              className={styles.social__link}
              target={link.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={link.label}
            >
              <i className={link.icon}></i>
              {isMenuOpen && <span>{link.label}</span>}
            </a>
          </Tooltip>
        </li>
      ))}
    </ul>
  );
};
