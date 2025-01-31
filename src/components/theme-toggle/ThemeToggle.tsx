import * as styles from "@/components/theme-toggle/_theme-toggle.module.scss";
import { Tooltip } from "@/components/tooltip/Tooltip";
import { useTheme } from "@/hooks/useTheme";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === "dark";

  return (
    <Tooltip content={t("app.theme")} position="bottom">
      <button
        type="button"
        className={clsx(styles.toggle, { [styles["toggle--dark"]]: isDark })}
        onClick={toggleTheme}
        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      >
        <div className={styles.toggle__icons}>
          <i className="fa-solid fa-sun" aria-hidden="true"></i>
          <i className="fa-solid fa-moon" aria-hidden="true"></i>
        </div>
        <div className={styles.toggle__slider} />
      </button>
    </Tooltip>
  );
};
