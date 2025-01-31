import * as styles from "@/components/tooltip/_tooltip.module.scss";
import clsx from "clsx";
import { ReactNode, useCallback, useEffect, useState } from "react";

const TOOLTIP_DELAY = 800;

interface ITooltipPosition {
  top: string;
  bottom: string;
  left: string;
  right: string;
}

interface ITooltipProps {
  content: string;
  children: ReactNode;
  position?: keyof ITooltipPosition;
  delay?: number;
  isModalOpen?: boolean;
}

export const Tooltip = ({
  content,
  children,
  position = "top",
  delay = TOOLTIP_DELAY,
  isModalOpen = false,
}: ITooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  // Clear timeout and hide tooltip when modal opens
  useEffect(() => {
    if (isModalOpen && isVisible) {
      clearTooltipState();
    }
  }, [isModalOpen]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  const clearTooltipState = useCallback(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    setIsVisible(false);
    setTimeoutId(null);
  }, [timeoutId]);

  const showTooltip = useCallback(() => {
    const timeout = setTimeout(() => setIsVisible(true), delay);
    setTimeoutId(timeout);
  }, [delay]);

  const getTooltipClassNames = useCallback(() => {
    return clsx(
      styles.tooltip__content,
      styles[`tooltip__content--${position}`],
      { [styles.visible]: isVisible }
    );
  }, [position, isVisible]);

  return (
    <div
      className={styles.tooltip}
      onMouseEnter={showTooltip}
      onMouseLeave={clearTooltipState}
    >
      {children}
      <div className={getTooltipClassNames()} role="tooltip">
        {content}
      </div>
    </div>
  );
};
