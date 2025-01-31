import * as styles from "@/components/todo-card/_todo-card.module.scss";
import CustomSkeleton from "@/components/ui/skeleton/CustomSkeleton";
import clsx from "clsx";

export const TodoCardSkeleton = () => {
  return (
    <article className={clsx(styles.todo, styles["todo__card-skeleton"])}>
      <div className={styles["todo__content-skeleton"]}>
        <CustomSkeleton className={styles["todo__text-skeleton"]} />
      </div>

      <div className={styles["todo__actions-skeleton"]}>
        <CustomSkeleton className={styles["todo__btn-skeleton"]} />
        <CustomSkeleton className={styles["todo__btn-skeleton"]} />
        <CustomSkeleton className={styles["todo__btn-skeleton"]} />
      </div>
    </article>
  );
};
