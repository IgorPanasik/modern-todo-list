import * as styles from "@/components/todo-button/_todo-button.module.scss";
import { Tooltip } from "@/components/tooltip/Tooltip";
import { ButtonVariant } from "@/types/todo";
import clsx from "clsx";
import { ReactNode } from "react";

type TooltipPosition = "top" | "right" | "bottom" | "left";

interface ITodoButtonProps {
  variant: ButtonVariant;
  onClick: () => void;
  tooltipContent?: string;
  tooltipPosition?: TooltipPosition;
  isActive?: boolean;
  children: ReactNode;
  ariaLabel?: string;
}

export const TodoButton = ({
  variant,
  onClick,
  tooltipContent,
  tooltipPosition = "top",
  isActive,
  children,
  ariaLabel,
}: ITodoButtonProps) => {
  const button = (
    <button
      type="button"
      className={clsx(styles.btn, styles[`btn--${variant}`], {
        [styles["btn--active"]]: isActive,
      })}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );

  const wrappedButton = (
    <div className={styles["button-wrapper"]}>{button}</div>
  );

  if (!tooltipContent) return wrappedButton;

  return (
    <Tooltip content={tooltipContent} position={tooltipPosition}>
      {wrappedButton}
    </Tooltip>
  );
};
