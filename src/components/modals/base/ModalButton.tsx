import { IModalButtonProps } from "@/components/modals/base/type";
import * as styles from "@/components/modals/styles/_modal.module.scss";
import { Tooltip } from "@/components/tooltip/Tooltip";
import clsx from "clsx";
import { memo } from "react";

export const ModalButton = memo(
  ({ variant, onClick, tooltipContent, children }: IModalButtonProps) => (
    <Tooltip content={tooltipContent}>
      <button
        type="button"
        className={clsx(
          styles.modal__button,
          styles[`modal__button--${variant}`]
        )}
        onClick={onClick}
      >
        {children}
      </button>
    </Tooltip>
  )
);
ModalButton.displayName = "ModalButton";
