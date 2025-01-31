import * as styles from "@/components/footer/_footer.module.scss";
import { SocialLinks } from "@/components/social-links/SocialLinks";
import { Tooltip } from "@/components/tooltip/Tooltip";
import { useTranslation } from "react-i18next";

export const BaseFooter = () => {
  const { t } = useTranslation();
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <a href="/" className={styles.footer__logo}>
          <i className="fa-solid fa-check-double"></i>
          <span>{t("app.name")}</span>
        </a>
        <nav className={styles.footer__nav}>
          <SocialLinks variant="footer" />
        </nav>

        <div className={styles.footer__copyright}>
          &copy; {new Date().getFullYear()} {t("footer.createName")}{" "}
          <Tooltip content={t("links.github")} position="right">
            <a
              href="https://github.com/IgorPanasik"
              target="_blank"
              rel="noopener noreferrer"
            >
              Igor Panasik
            </a>
          </Tooltip>
        </div>
      </div>
    </footer>
  );
};
