import * as styles from "@/components/empty-state/_empty-state.module.scss";
import CustomSkeleton from "@/components/ui/skeleton/CustomSkeleton";

export const EmptySkeleton = () => {
  return (
    <div className={styles.empty}>
      <CustomSkeleton className={styles["empty__icon-skeleton"]} />
      <CustomSkeleton className={styles["empty__title-skeleton"]} />
      <CustomSkeleton className={styles["empty__text-skeleton"]} />
    </div>
  );
};
