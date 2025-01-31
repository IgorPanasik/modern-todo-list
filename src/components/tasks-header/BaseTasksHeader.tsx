import * as styles from "@/components/tasks-header/_tasks-header.module.scss";
import { ITodoManager } from "@/services/TodoManager";
import { useTranslation } from "react-i18next";

interface ITasksHeaderProps {
  todoManager: ITodoManager;
  onOpenModal: () => void;
}

export const BaseTasksHeader = ({
  todoManager,
  onOpenModal,
}: ITasksHeaderProps) => {
  const { t } = useTranslation();
  const hasTodos = todoManager.hasTodos();
  const openTasks = todoManager.getOpenCount();

  return (
    <div className={styles.tasks}>
      <h1 className={styles.tasks__title}>
        {!hasTodos ? t("title.h1") : t("title.tasks", { count: openTasks })}
      </h1>

      <button
        className={styles.tasks__btn}
        disabled={!hasTodos}
        type="button"
        onClick={onOpenModal}
      >
        <i className="fa-solid fa-trash"></i>
        <span>{t("tasks.clearAll")}</span>
      </button>
    </div>
  );
};
