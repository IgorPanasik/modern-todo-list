import * as styles from "@/components/todo-input/_todo-input.module.scss";
import CustomSkeleton from "@/components/ui/skeleton/CustomSkeleton";
import clsx from "clsx";

export const TodoInputSkeleton = () => {
  return (
    <form className={styles.form}>
      <div className={styles["form__container-skeleton"]}>
        <CustomSkeleton className={clsx(styles["form__input-skeleton"])} />
        <CustomSkeleton className={clsx(styles["form__btn-skeleton"])} />
      </div>
    </form>
  );
};
