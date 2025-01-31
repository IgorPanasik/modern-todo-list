import * as styles from "@/components/tasks-header/_tasks-header.module.scss";
import CustomSkeleton from "@/components/ui/skeleton/CustomSkeleton";

export const TaskHeaderSkeleton = () => {
  return (
    <div className={styles.tasks}>
      <CustomSkeleton className={styles["tasks__title-skeleton"]} />
      <CustomSkeleton className={styles["tasks__btn-skeleton"]} />
    </div>
  );
};
