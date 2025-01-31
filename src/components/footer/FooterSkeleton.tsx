import * as styles from "@/components/footer/_footer.module.scss";
import CustomSkeleton from "@/components/ui/skeleton/CustomSkeleton";

export const FooterSkeleton = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer__content-skeleton"]}>
        <div className={styles["footer__skeleton-wrapper"]}>
          <CustomSkeleton className={styles["footer__logo-skeleton"]} />
          <CustomSkeleton className={styles["footer__text-skeleton"]} />
        </div>

        <div className={styles["footer__list-skeleton"]}>
          {Array(4)
            .fill(null)
            .map((_, index) => (
              <CustomSkeleton
                key={index}
                className={styles["footer__nav-skeleton"]}
              />
            ))}
        </div>

        <div className={styles["footer__copyright-skeleton"]}>
          <CustomSkeleton className={styles["footer__data-skeleton"]} />
          <CustomSkeleton className={styles["footer__author-skeleton"]} />
        </div>
      </div>
    </footer>
  );
};
