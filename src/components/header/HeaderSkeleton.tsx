import * as styles from "@/components/header/_header.module.scss";
import CustomSkeleton from "@/components/ui/skeleton/CustomSkeleton";
import { useEffect, useState } from "react";

export const HeaderSkeleton = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.header__content}>
        <div className={styles.header__logo}>
          <CustomSkeleton className={styles["header__logo-skeleton"]} />
          <CustomSkeleton className={styles["header__title-skeleton"]} />
        </div>
      </div>

      {isMobile && (
        <CustomSkeleton className={styles["header__burger-skeleton"]} />
      )}

      <div className={styles.header__menu}>
        <nav className={styles.header__nav}>
          <div className={styles["header__nav-list"]}>
            {Array(4)
              .fill(null)
              .map((_, index) => (
                <CustomSkeleton
                  key={index}
                  className={styles["header__nav-skeleton"]}
                />
              ))}
          </div>
        </nav>
        <div className={styles.header__controls}>
          <CustomSkeleton className={styles["header__control-skeleton"]} />
          <CustomSkeleton
            className={styles["header__control-skeleton--large"]}
          />
        </div>
      </div>
    </header>
  );
};
