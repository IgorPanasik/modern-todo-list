import * as styles from "@/components/tabs/_tabs.module.scss";
import CustomSkeleton from "@/components/ui/skeleton/CustomSkeleton";
import clsx from "clsx";

export const TabsSkeleton = () => {
  return (
    <div className={styles.tabs}>
      <nav>
        <ul className={styles["tabs__list-skeleton"]}>
          {Array(3)
            .fill(null)
            .map((_, index) => (
              <li key={index} className={clsx(styles["tabs__item-skeleton"])}>
                <CustomSkeleton className={styles["tabs__btn-skeleton"]} />
                <CustomSkeleton className={styles["tabs__count-skeleton"]} />
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};
