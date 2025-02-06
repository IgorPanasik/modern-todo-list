import { Modal } from "@/components/modals/base/index";
import { ModalButton } from "@/components/modals/base/ModalButton";
import { MODAL_KEYS } from "@/components/modals/base/type";
import * as styles from "@/components/modals/styles/_modal.module.scss";
import { Todo } from "@/types/todo";
import { memo, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface IEditTodoModalProps {
  todo: Todo;
  isOpen: boolean;
  onClose: () => void;
  onEdit: (id: string, input: string, complete: boolean) => void;
}

function EditTodoModal({ todo, isOpen, onClose, onEdit }: IEditTodoModalProps) {
  const [input, setInput] = useState(todo.input);
  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) setInput(todo.input);
  }, [isOpen, todo.input]);

  const handleUpdate = useCallback(() => {
    try {
      onEdit(todo.id, input, todo.complete);
      onClose();
    } catch (error) {
      console.error("Failed to update todo:", error);
      throw new Error("Unable to update task");
    }
  }, [todo.id, todo.complete, input, onEdit, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const keyActions = {
      [MODAL_KEYS.ESCAPE]: onClose,
      [MODAL_KEYS.ENTER]: handleUpdate,
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const action = keyActions[e.key as keyof typeof keyActions];
      if (action) action();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handleUpdate]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t("modalEdit.title")}>
      <input
        autoFocus
        className={styles.form__input}
        value={input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder={t("modalEdit.title")}
      />

      <div className={styles.modal__buttons}>
        <ModalButton
          variant="cancel"
          onClick={onClose}
          tooltipContent={t("modalEdit.tooltipCancel")}
        >
          {t("modalEdit.cancel")}
        </ModalButton>
        <ModalButton
          variant="save"
          onClick={handleUpdate}
          tooltipContent={t("modalEdit.tooltipSave")}
        >
          {t("modalEdit.save")}
        </ModalButton>
      </div>
    </Modal>
  );
}
EditTodoModal.displayName = "EditTodoModal";

export default memo(EditTodoModal);
