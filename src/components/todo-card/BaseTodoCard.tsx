import { EditTodoModal } from "@/components/modals/edit-todo-modal/EditTodoModal";
import { TodoButton } from "@/components/todo-button/TodoButton";
import * as styles from "@/components/todo-card/_todo-card.module.scss";
import { Tooltip } from "@/components/tooltip/Tooltip";
import { useModal } from "@/hooks/useModal";
import { ButtonVariant, Todo } from "@/types/todo";
import clsx from "clsx";
import { memo, useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface TodoCardProps {
  todo: Todo;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
  onEdit: (id: string, input: string, complete: boolean) => void;
}

export const BaseTodoCard = memo(
  ({ todo, onDelete, onToggle, onEdit }: TodoCardProps) => {
    const [isDelete, setIsDelete] = useState(false);
    const articleRef = useRef<HTMLElement>(null);
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);
    const { t } = useTranslation();
    const editModal = useModal();
    const deleteTimeoutRef = useRef<number>(0);

    useEffect(() => {
      if (isDelete && !isAnimationComplete) {
        const element = articleRef.current;
        if (!element) return;

        const handleAnimationEnd = (e: AnimationEvent) => {
          if (e.animationName.includes("blur-out-expand-fwd")) {
            setIsAnimationComplete(true);
          }
        };

        element.addEventListener("animationend", handleAnimationEnd);

        deleteTimeoutRef.current = window.setTimeout(() => {
          setIsAnimationComplete(true);
        }, 650);

        return () => {
          element.removeEventListener("animationend", handleAnimationEnd);
          if (deleteTimeoutRef.current) {
            window.clearTimeout(deleteTimeoutRef.current);
          }
        };
      }
    }, [isDelete, isAnimationComplete]);

    useEffect(() => {
      return () => {
        if (deleteTimeoutRef.current) {
          window.clearTimeout(deleteTimeoutRef.current);
        }
      };
    }, []);

    useEffect(() => {
      if (isDelete && isAnimationComplete) {
        onDelete(todo.id);
      }
    }, [isDelete, isAnimationComplete, onDelete, todo.id]);

    const handleDelete = useCallback(() => {
      setIsDelete(true);
    }, []);

    const handleToggle = useCallback(() => {
      onToggle(todo.id);
    }, [todo.id, onToggle]);

    const TodoBorders = () => (
      <>
        <span className={styles.border_bottom} />
        <span className={styles.border_right} />
        <span className={styles.border_top} />
        <span className={styles.border_left} />
      </>
    );

    return (
      <>
        <article
          ref={articleRef}
          className={clsx(styles.todo, styles["focus-in-expand"], {
            [styles["blur-out-expand-fwd"]]: isDelete,
          })}
        >
          <Tooltip content={t("modalEdit.tooltipClick")}>
            <div className={styles.todoWrapper}>
              <p
                className={clsx(styles.todo__text, {
                  [styles["todo__text--completed"]]: todo.complete,
                })}
                onClick={editModal.open}
              >
                {todo.input}
              </p>
              <TodoBorders />
            </div>
          </Tooltip>

          <div className={styles.todo__actions}>
            <TodoButton
              variant={ButtonVariant.EDIT}
              onClick={editModal.open}
              tooltipContent={t("tasks.tooltipEdit")}
              ariaLabel={t("tasks.tooltipEdit")}
            >
              <i className="far fa-edit" />
            </TodoButton>

            <TodoButton
              variant={ButtonVariant.TOGGLE}
              onClick={handleToggle}
              tooltipContent={
                !todo.complete ? t("tasks.tooltipDone") : undefined
              }
              isActive={todo.complete}
            >
              {t("tasks.done")}
            </TodoButton>

            <TodoButton
              variant={ButtonVariant.DELETE}
              onClick={handleDelete}
              tooltipContent={t("tasks.tooltipDeleteTask")}
            >
              {t("tasks.delete")}
            </TodoButton>
          </div>
        </article>

        <EditTodoModal
          todo={todo}
          isOpen={editModal.isOpen}
          onClose={editModal.close}
          onEdit={onEdit}
        />
      </>
    );
  }
);

BaseTodoCard.displayName = "BaseTodoCard";
