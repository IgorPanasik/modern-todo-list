import { IBaseModalProps } from "@/components/modals/base/type";
import * as styles from "@/components/modals/styles/_modal.module.scss";
import clsx from "clsx";
import { memo } from "react";

function Modal({ isOpen, onClose, title, children }: IBaseModalProps) {
  return (
    <div className={clsx(styles.modal, { [styles["modal--open"]]: isOpen })}>
      <div className={styles.modal__overlay} onClick={onClose} />
      <div className={styles.modal__content}>
        <h2 className={styles.modal__title}>{title}</h2>
        {children}
      </div>
    </div>
  );
}

Modal.displayName = "Modal";
export default memo(Modal);
