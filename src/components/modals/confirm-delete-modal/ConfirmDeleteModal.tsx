import { Modal } from "@/components/modals/base/index";
import { ModalButton } from "@/components/modals/base/ModalButton";
import { MODAL_KEYS } from "@/components/modals/base/type";
import * as styles from "@/components/modals/styles/_modal.module.scss";
import { ITodoManager } from "@/services/TodoManager";
import { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";

interface IConfirmDeleteModalProps {
  todoManager: ITodoManager;
  isOpen: boolean;
  onClose: () => void;
}

function ConfirmDeleteModal({
  isOpen,
  onClose,
  todoManager,
}: IConfirmDeleteModalProps) {
  const { t } = useTranslation();

  const handleDeleteAll = () => {
    try {
      todoManager.clearTodosAll();
      onClose();
    } catch (error) {
      console.error("Failed to delete todos:", error);
      throw new Error("Unable to delete tasks");
    }
  };

  useEffect(() => {
    if (!isOpen) return;

    const keyActions = {
      [MODAL_KEYS.ESCAPE]: onClose,
      [MODAL_KEYS.ENTER]: handleDeleteAll,
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const action = keyActions[e.key as keyof typeof keyActions];
      if (action) action();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={t("modalConfirmDeleteAll.title")}
    >
      <p className={styles.modal__text}>
        {t("modalConfirmDeleteAll.clearTasks")}
      </p>
      <div className={styles.modal__buttons}>
        <ModalButton
          variant="cancel"
          onClick={onClose}
          tooltipContent={t("modalConfirmDeleteAll.tooltipCancel")}
        >
          {t("modalConfirmDeleteAll.cancel")}
        </ModalButton>
        <ModalButton
          variant="confirm"
          onClick={handleDeleteAll}
          tooltipContent={t("modalConfirmDeleteAll.tooltipClearAll")}
        >
          {t("modalConfirmDeleteAll.confirm")}
        </ModalButton>
      </div>
    </Modal>
  );
}

ConfirmDeleteModal.displayName = "ConfirmDeleteModal";
export default memo(ConfirmDeleteModal);
