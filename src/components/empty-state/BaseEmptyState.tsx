import * as styles from "@/components/empty-state/_empty-state.module.scss";
import { TabType } from "@/utils/tabs";
import clsx from "clsx";
import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

interface IEmptyStateProps {
  activeTab: TabType;
}

export const BaseEmptyState = memo(({ activeTab }: IEmptyStateProps) => {
  const { t } = useTranslation();

  const emptyStateText = useMemo(() => {
    if (activeTab === "Completed") {
      return t("emptyState.noCompletedTasks");
    }
    return t("emptyState.title");
  }, [activeTab, t]);

  return (
    <div className={clsx(styles.empty, styles["text-pop-up-top"])}>
      <i className="fa-solid fa-clipboard-list"></i>
      <h4>{emptyStateText}</h4>
      <p>{activeTab !== "Completed" ? t("emptyState.subTitle") : ""}</p>
    </div>
  );
});

BaseEmptyState.displayName = "BaseEmptyState";
