import * as styles from "@/components/scroll-to-up/_scroll-to-up.module.scss";
import clsx from "clsx";
import { useEffect, useState } from "react";

export const ScrollToUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop || window.scrollY;

      if (scrolled > 400) {
        setIsVisible(true);
      } else if (scrolled <= 300) {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible);

    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      className={clsx(styles.scrollTop, {
        [styles["scrollTop--visible"]]: isVisible,
      })}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <i className="fas fa-arrow-up" />
    </button>
  );
};
