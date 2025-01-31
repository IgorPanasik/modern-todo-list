import * as styles from "@/components/ui/skeleton/_custom-skeleton.module.scss";
import { ISkeletonProps } from "@/components/ui/skeleton/types";
import clsx from "clsx";

export const CustomSkeleton = ({
  circle = false,
  className,
}: ISkeletonProps) => {
  return (
    <div
      className={clsx(
        styles.skeleton,
        {
          [styles.circle]: circle,
        },
        className
      )}
    />
  );
};
export default CustomSkeleton;
