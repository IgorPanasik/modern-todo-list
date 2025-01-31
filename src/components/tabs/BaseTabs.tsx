import * as styles from "@/components/tabs/_tabs.module.scss";
import { ITodoManager } from "@/services/TodoManager";
import { tabs, TabType } from "@/utils/tabs";
import clsx from "clsx";
import { memo } from "react";
import { useTranslation } from "react-i18next";

interface ITabsProps {
  todoManager: ITodoManager;
  onTabChange: (tab: TabType) => void;
  activeTab: string;
}

export const BaseTabs = memo(
  ({ todoManager, onTabChange, activeTab }: ITabsProps) => {
    const { t } = useTranslation();

    return (
      <div className={styles.tabs}>
        <nav>
          <ul className={styles.tabs__list}>
            {tabs.map((tab) => (
              <li key={tab} className={styles.tabs__item}>
                <button
                  className={clsx(styles.tabs__btn, {
                    [styles["tabs__btn--active"]]: tab === activeTab,
                  })}
                  type="button"
                  onClick={() => onTabChange(tab)}
                >
                  {t(`tasks.${tab.toLowerCase()}`)}
                  <span className={styles.tabs__count}>
                    ({todoManager.getCountByTab(tab)})
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
        <hr className={styles.tabs__divider} />
      </div>
    );
  }
);

BaseTabs.displayName = "BaseTabs";
