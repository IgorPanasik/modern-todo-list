import * as styles from "@/components/todo-input/_todo-input.module.scss";
import { Tooltip } from "@/components/tooltip/Tooltip";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface ITodoInputProps {
  onAddTodo: (input: string) => void;
}

export const BaseTodoInput = ({ onAddTodo }: ITodoInputProps) => {
  const [input, setInput] = useState("");
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    !input.trim() ? "" : onAddTodo(input);
    setInput("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form__container}>
        <input
          autoFocus
          className={styles.form__input}
          value={input}
          type="text"
          placeholder={t("input.placeholder")}
          onChange={(e) => setInput(e.target.value)}
          aria-label={t("input.placeholder")}
        />

        <Tooltip content={t("tasks.addTask")}>
          <button
            className={styles.form__btn}
            aria-label={t("input.button")}
            type="submit"
          >
            <i className="fa-solid fa-plus"></i>
          </button>
        </Tooltip>
      </div>
    </form>
  );
};

BaseTodoInput.displayedName = "BaseTodoInput";
